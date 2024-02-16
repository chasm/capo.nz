import getScores from "../getScores/index.js"

const lookup = ["No", "Somewhat", "Yes"]

export default function makeTsv(data) {
	const scores = getScores(data)

	const scoresByCategory = scores.reduce((out, { name, score }) => {
		return `${out}${score}\t${name}\n`
	}, `Scores by category\n% Score\tCategory\n`)

	const allScores = scores.reduce((out, { name, questions, score }) => {
		const qs = questions.reduce(
			(acc, q) => `${acc}${lookup[q.score]}\t${q.question}\n`,
			``,
		)

		return `${out}${name}\n${qs}${score}\tScore for ${name}\n\n`
	}, "\n\n")

	return `${scoresByCategory}${allScores}`
}
