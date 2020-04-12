import bleno from "bleno"
import rollingId from "./rollingId.js"
import advertise from "./advertise.js"

let isRunning = false
bleno.on("stateChange", function(state) {
	if (!isRunning && state === "poweredOn") {
		isRunning = true
		advertise()
	}
})
