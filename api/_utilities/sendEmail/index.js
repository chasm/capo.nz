import addWrapper from "../addWrapper/index.js"

const MAILERSEND_API_KEY = process.env.MAILERSEND_API_KEY

const CHAS = {
	name: "Charles F. Munat",
	email: "capo@munat.com",
}
const CAPO = {
	name: "Capo",
	email: "no-reply@capo.nz",
}
const VITO = {
	name: "Vito Lo Iacono",
	email: "vito.loiacono@gmail.com",
}

export default async function sendEmail(body) {
	const { email, name } = body

	if (!email) {
		return { message: "No email." }
	}

	const html = addWrapper(body, "", false)

	try {
		const resp = await fetch("https://api.mailersend.com/v1/email", {
			body: JSON.stringify({
				from: CAPO,
				to: [{ email }],
				bcc: [VITO, CHAS],
				reply_to: VITO,
				subject: "Your Capo Business Diagnostics results",
				html,
			}),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": `Bearer ${MAILERSEND_API_KEY}`,
			},
			method: "POST",
		})

		return resp.status
	} catch (error) {
		return error
	}
}
