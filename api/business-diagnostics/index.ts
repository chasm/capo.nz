import type { VercelRequest, VercelResponse } from "@vercel/node"
import makeTsv from "../_utilities/makeTsv/index.js"

export default async function handler(
	request: VercelRequest,
	response: VercelResponse,
) {
	// const isAjax = request.headers["content-type"] === "application/json"
	const data = request?.body
	const spreadsheet = makeTsv(data)

	console.log("data", JSON.stringify(data, null, 2))

	if (spreadsheet) {
		response
			.status(200)
			.appendHeader("Content-Type", "text/tab-separated-values")
			.send(spreadsheet)

		return
	}

	// Failure
	response.status(422).send(
		JSON.stringify({
			message: "Oh, noes!",
			type: "FAILURE",
		}),
	)

	return
}
