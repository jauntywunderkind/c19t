import bleno from "bleno"
import rollingId from "./rollingId.js"

const serviceUuid = "fd6f"

const startAdvertising= promisify( function( serviceUuids, callback){
	return bleno.startAdvertising( null, serviceUuids, callack);
})

export function advertise(){
	let serviceUuids = [`${serviceUuid}${rollingId()}`]

	return startAdvertising(null, serviceUuids);
}
export default advertise
