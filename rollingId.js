import { randomBytes as _randomBytes } from "crypto"
import { promisify } from "util"
const randomBytes = promisify( _randomBytes)

export function rollingId(){
	return randomBytes(16)
		.then(b => b.toString("hex"))
}
export default rollingId;
