const radians = [
	[0, 1],
	[0.587785631949555, 0.8090167185377953],
	[0.9510574243572879, 0.30901419963309384],
	[0.9510551541865536, -0.30902118648272453],
	[0.5877885877608574, -0.80901457100481],
	[0, -1],
	[-0.587784294166963, -0.8090176904930109],
	[-0.9510566043570133, -0.30901672334828],
	[-0.9510559741986714, 0.3090186627713869],
	[-0.5877826443920943, 0.8090188891190594],
]

export default function getPoints(scores) {
	const data = scores.map((score) => {
		return typeof score === "object" ? parseInt(score.score, 10) || 0 : score
	})

	return data.map((value, index) => {
		const [rx = 0, ry = 0] = radians[index] || []
		const x = 600 + rx * value * 5
		const y = 600 - ry * value * 5

		return [x, y]
	})
}
