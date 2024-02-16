import type { VercelRequest, VercelResponse } from "@vercel/node"
import addWrapper from "../_utilities/addWrapper/index.js"
import testHoneypot from "../_utilities/testHoneypot/index.js"

export default async function handler(
	request: VercelRequest,
	response: VercelResponse,
) {
	const body = request?.body

	// Honeypot fail or blacklisted
	if (testHoneypot(response, body)) {
		return
	}

	const out = addWrapper(body)

	response.status(200).setHeader("Content-Type", "text/html").send(out)

	return
}
