import bleno from "bleno"
import rollingId from "./rollingId.js"

const serviceUuid = 'fd6f'
const serviceDataUuid = 'fd6f'

// was thinking this fit as a service but also does not seem correct
// i think we just need to hardcode an advertisement
export function contactDetectionService(){
	let contactDetection = new bleno.Characteristic({
		uuid: serviceDataUuid,
		value: rollingId()
	})
	let primaryService = new bleno.PrimaryService({
	    uuid: serviceUuid,
	    characteristics: [ contactDetection]
	})
}
export default contactDetectionService

	
		{
			uuid: serviceUuid,
			characteristics: [
				{
					uuid: fd6f,
					properties: ['read'],
					secure: [],
					value: new Buffer(deviceName),
					descriptors: []
				},
				{
					uuid: '2a01',
					properties: ['read'],
					secure: [],
					value: new Buffer([0x80, 0x00]),
					descriptors: []
				}
			]
		},
