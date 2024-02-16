const DIAGNOSTICS_TOOL = [
	{
		category: "Service Excellence",
		questions: [
			"Our company tests and measures everything to ensure customer satisfaction.",
			"We survey our clients regularly to determine how we can better serve them.",
			"We analyse our mistakes as both a company and as individuals and learn from them.",
			"We choose our clients to fit our way of doing business.",
			"Our direction and people can change instantly to meet our customers needs.",
			"I would gladly give up or postpone a sale to meet my customer service agenda.",
		],
	},
	{
		category: "Sales Drive",
		questions: [
			"Sales processes are managed weekly and measures are taken to ensure sales forecast are met.",
			"My sales force is successful and undergoes regular training on both product and selling skills.",
			"My sales force operates as a team.",
			"A sales rewards programme is in place.",
			"Our sales volumes are continuously increasing.",
			"I am completely satisfied with my market share.",
		],
	},
	{
		category: "Targeted Marketing",
		questions: [
			"The company has found a niche for its product and no longer competes on price.",
			"We only advertise when we can test and measure the results.",
			"We constantly educate our clients on the benefits of our products and services.",
			"Every member of our team knows and understands our unique selling proposition.",
			"We always educate on value and never market on price.",
			"We survey people who do not buy our products to improve our product or service.",
		],
	},
	{
		category: "High-Performing Team",
		questions: [
			"Every member of the team is operating at their full potential.",
			"There is synergy among all the members of our team.",
			"Team members are listened to and are encouraged to speak up and make recommendations.",
			"My team members are accountable for their performance.",
			"Reporting systems are in place and adhered to.",
			"Every member of the team enjoys their work.",
		],
	},
	{
		category: "Strong Strategy Drive",
		questions: [
			"The company has a formal business plan that sets out its strategic objectives.",
			"The companyʼs business plan is being used, tested, measured, and updated quarterly.",
			"Regular planning strategy sessions are conducted with staff and management.",
			"The company has very good knowledge of its competitors and their practices.",
			"The company has the right allies to support the organisation.",
			"The company for the most part is going in the direction you intended it to go from its inception.",
		],
	},
	{
		category: "Visible Cashflow",
		questions: [
			"The company has an annual budget.",
			"Budgeting processes are clearly defined and adhered to.",
			"Financial statements are done monthly.",
			"Supplier and Service Provider invoices are routinely paid on time.",
			"Terms are negotiated with all suppliers, including early payment discounts.",
			"All budgeting is ambitious.",
		],
	},
	{
		category: "Productivity Prioritisation",
		questions: [
			"Operations are fully managed by systems.",
			"Staff are accountable to complete their tasks; their deliverables are monitored and supported.",
			"The company is driven by both quality and profit; both are measured regularly.",
			"Every meeting accomplishes some specific objective or outcome.",
			"Meetings between staff are scheduled in advance; spur-of-the-moment encounters are avoided.",
			"Staff have the opportunity to communicate openly about obstacles to their production.",
		],
	},
	{
		category: "Profitability Monitoring",
		questions: [
			"Profit margins have increased over the last two years.",
			"Profits forecast increase 15% per annum.",
			"Debt service decrease by 20% per annum.",
			"Individual responsibilities for achieving financial goals are clearly defined.",
			"Staff and facilities are at 80% capacity.",
			"Profitability as a rule is higher than the industry average and is not an issue for the company.",
		],
	},
	{
		category: "Work/Life Balance - Wellbeing",
		questions: [
			"Everyone feels energised at the beginning of the week and fulfilled at the end of it.",
			"Our employees work an average of less than 50 hours per week.",
			"I am putting aside funds regularly with which to become financially independent.",
			"We all have at least 5 daily well-being habits and I do them consistently.",
			"My days are well planned and I never run on energy.",
			"I am happy with the amount of money I make.",
		],
	},
	{
		category: "Effective Leadership",
		questions: [
			"Our vision is clear across the business.",
			"We all lead by example.",
			"We all strive for excellence, but accept and remove imperfection.",
			"We build a culture of accountability.",
			"We learn from our own mistakes.",
			"We are all self aware, and support each other as we understand each other’s strengths and weaknesses.",
		],
	},
]

export default function getScores(body) {
	const scores = []

	for (const [key, value] of Object.entries(body)) {
		const [_, c, q] = key.match(/^c([0-9]+)q([0-9]+)$/) ?? []
		const cIndex = parseInt(c, 10)
		const qIndex = parseInt(q, 10)
		const category = DIAGNOSTICS_TOOL[cIndex]
		const question = category?.questions[qIndex]
		const score = parseInt(value, 10)

		if (!Number.isNaN(score)) {
			if (!scores[cIndex]) {
				scores[cIndex] ??= {}
				scores[cIndex].index = cIndex
				scores[cIndex].name = category?.category
			}

			if (scores[cIndex] && !scores[cIndex].questions) {
				scores[cIndex].questions ??= []
			}

			if (scores[cIndex].questions) {
				scores[cIndex].questions.push({
					index: qIndex,
					question,
					score,
				})
			}
		}
	}

	scores.forEach(
		(category) =>
			(category.score = Math.round(
				(category.questions.reduce((sum, q) => sum + q.score, 0) /
					(category.questions.length || 1)) *
					50,
			)),
	)

	return scores
}
