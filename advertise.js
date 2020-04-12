import { Buffer } from "buffer"
import bleno from "@abandonware/bleno"
import rollingId from "./rollingId.js"

const serviceUuid = "fd6f"

/** little endian-ize bytes */
export function le(num, bytes){
	if (!bytes){
		bytes= Math.ceil( Math.log2( num) / 8)
	}
	let res= new Array( bytes)
	for( let i= 0; i< bytes; ++i){
		res[ i]= num& 0xFF
		num= num>> 8
	}
	return res
}

/** standard precursor to the rolling id we want to send */
const preamble = [
	// flags
	2, // length: 2
	1, // type: flag
	2, // "le general discoverable" mode

	// 16-bit "contact tracing" service uuid
	3, // length: 3
	3, // type: 16-bit service uuid
	...le(0xFD6F), // "contact detection" service uuid

	// "contact tracing" service data
	19, // length: 1+2+16bytes
	0x16, // type: service data
	...le(0xFD6F) // "contact detection" service data
]

export async function advertise(){
	const
		id= await rollingId(),
		adv= Buffer.from([ ...preamble, ...id])
	bleno.startAdvertisingWithEIRData( adv, null)
}
export default advertise
