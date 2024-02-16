import type { VercelResponse } from "@vercel/node"

const HONEYPOT_PASSWORD = process.env.HONEYPOT_PASSWORD || "shizmo666"
const HONEYPOT_CONFIRMATION = process.env.HONEYPOT_CONFIRMATION || ""

export default function testHoneypot(
	response: VercelResponse,
	body: { confirmation?: string; password?: string },
): boolean {
	if (
		body.password !== HONEYPOT_PASSWORD ||
		body.confirmation !== HONEYPOT_CONFIRMATION
	) {
		response
			.setHeader("Content-Type", "text/plain")
			.status(200)
			.send("Something went wrong. Please try again later.")

		return true
	}

	return false
}
