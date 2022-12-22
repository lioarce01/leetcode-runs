/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER maxSpan
 * 
 *  n = 7
    logs = ["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in", "12 120 sign-out", "20 101 sign-out", "21 110 sign-in"]
    maxSpan = 20
    
    "userId timestamp action"
    action = "sign-in", "sign-out"
 */

function processLogs(logs, maxSpan) {
	const arr = []
	const result = []

	// Converting array of strings to an array of objects
	for (let i = 0; i < logs.length; i++) {
		let splited = logs[i].split(" ")
		let id = splited[0]
		let newObj = {
			id: "",
			signIn: "",
			signOut: "",
		}

		if (!newObj.id) newObj.id = id
		if (splited[2] === "sign-in") newObj.signIn = splited[1]
		if (splited[2] === "sign-out") newObj.signOut = splited[1]

		arr.push(newObj)

		console.log(newObj)
	}

	// Combining the objects with the same ID maintaining the filled properties
	for (const object of arr) {
		const existingObject = result.find((obj) => obj.id === object.id)
		if (existingObject) {
			for (const key in object) {
				if (key !== "id" && (object[key] === undefined || object[key] === "")) {
					object[key] = existingObject[key]
				}
			}
			if (object.signOut && object.signIn) {
				object.timeDelta = object.signOut - object.signIn
			} else {
				object.timeDelta = 0
			}
			const index = result.indexOf(existingObject)
			result[index] = object
		} else {
			result.push(object)
		}
	}

	// Returning an array of IDs that meets the condition
	const timeDeltaIDs = result
		.filter((obj) => obj.timeDelta <= maxSpan)
		.map((obj) => obj.id)

	return timeDeltaIDs
}

console.log(
	processLogs(
		[
			"30 99 sign-in",
			"30 105 sign-out",
			"12 100 sign-in",
			"20 80 sign-in",
			"12 120 sign-out",
			"20 101 sign-out",
			"21 110 sign-in",
		],
		20
	)
)

//ulises@satellitesonfire.com
