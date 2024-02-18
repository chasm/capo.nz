import type { VercelRequest, VercelResponse } from "@vercel/node"
import sendEmail from "../_utilities/sendEmail/index.js"
import addWrapper from "../_utilities/addWrapper/index.js"

export default async function handler(
	request: VercelRequest,
	response: VercelResponse,
) {
	const body = request?.body
	const email = request?.body.email

	const resp = await sendEmail(body)

	const message =
		resp === 202
			? `<p>We have sent these results to you at ${email}.</p>`
			: `<p>
			Sending failed. Our apologies. Please report problems to
			<a href="mailto:vito.loiacono@gmail.com">vito.loiacono@gmail.com</a>.
		</p>`

	const out = addWrapper(body, message, false)

	response.status(200).setHeader("Content-Type", "text/html").send(out)

	return
}
