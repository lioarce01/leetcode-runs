function processLogs(logs, maxSpan) {
	const result = new Map()

	for (const log of logs) {
		const [id, time, type] = log.split(" ")
		if (!result.has(id)) {
			result.set(id, { id, signIn: "", signOut: "" })
		}
		const obj = result.get(id)
		if (type === "sign-in") {
			obj.signIn = time
		} else {
			obj.signOut = time
		}
	}

	const timeDeltaIDs = []
	for (const obj of result.values()) {
		if (obj.signIn && obj.signOut) {
			obj.timeDelta = obj.signOut - obj.signIn
			if (obj.timeDelta <= maxSpan) {
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
