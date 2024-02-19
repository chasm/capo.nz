import type { VercelRequest, VercelResponse } from "@vercel/node"
import getChart from "../_utilities/getChart/index.js"

export default async function handler(
	request: VercelRequest,
	response: VercelResponse,
) {
	const {
		query: { scores },
	} = request

	const chart = getChart(
		typeof scores === "string" ? scores.split(",") : scores,
	)

	response.status(200).setHeader("Content-Type", "image/svg+xml").send(chart)

	return
}
