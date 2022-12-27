function processLogs(logs, maxSpan) {
	const result = new Map()
  
	for (const log of logs) {
		//detructuring of array of logs
		const [id, time, type] = log.split(" ")
		//if the object result does not have id, then set an id, with the signIn and signOut properties empty
		if (!result.has(id)) {
			result.set(id, { id, signIn: "", signOut: "" })
		}
		//obtaining the id of every data in the object map
		const obj = result.get(id)
		//check if the type is sign in or sign out and set the equivalent time.
		if (type === "sign-in") {
			obj.signIn = time
		} else {
			obj.signOut = time
		}
	}

	const timeDeltaIDs = []
	//for loop over result map, and check if are signIn and signOut
	for (const obj of result.values()) {
		if (obj.signIn && obj.signOut) {
			//update timeDelta with the substraction of signOut - signIn
			obj.timeDelta = obj.signOut - obj.signIn
			if (obj.timeDelta <= maxSpan) {
				//push the timeDelta IDs that meets the condition into timeDeltaIDs array
				timeDeltaIDs.push(obj.id)
			}
		}
	}

	return timeDeltaIDs
}

console.log(
	processLogs(
		[
			"30 90 sign-in",
			"30 120 sign-out",
			"22 80 sign-in",
			"22 90 sign-out",
			"10 20 sign-in",
			"10 60 sign-out",
			"35 80 sign-in",
		],
		20
	)
)
