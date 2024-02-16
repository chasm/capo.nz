import type { VercelRequest, VercelResponse } from "@vercel/node"
import makeExcel from "../_utilities/makeExcel/index.js"

export default async function handler(
	request: VercelRequest,
	response: VercelResponse,
) {
	// const isAjax = request.headers["content-type"] === "application/json"
	const data = request?.body
	const spreadsheet = makeExcel(data)

	if (spreadsheet) {
		response
			.status(200)
			.appendHeader("Content-Type", "application/xml")
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
