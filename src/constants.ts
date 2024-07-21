import collapseWhitespace from "~utilities/collapseWhitespace"

export const DIAGNOSTICS_TOOL = [
	{
		category: "Service Excellence",
		description:
			"Evaluate how well your company meets customer expectations. Ensure regular client surveys, analyse mistakes for continuous improvement, and adapt strategies to meet customer needs. Prioritise customer satisfaction over immediate sales to build long-term loyalty.",
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
		description:
			"Focus on managing and forecasting sales processes. Regularly train your sales force, foster teamwork, and implement rewards programs. Track sales volumes and market share satisfaction to drive continuous improvement.",
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
		description:
			"Focus on managing and forecasting sales processes. Regularly train your sales force, foster teamwork, and implement rewards programs. Track sales volumes and market share satisfaction to drive continuous improvement.",
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
		description:
			"Ensure each team member operates at full potential with synergy and accountability. Encourage open communication, listen to recommendations, and foster a supportive environment where everyone enjoys their work.",
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
		description:
			"Develop and update a formal business plan with clear strategic objectives. Conduct regular strategy sessions, understand competitor practices, and align with supportive allies to steer the company in the intended direction.",
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
		description:
			"Maintain a clear annual budget with well-defined processes. Ensure timely financial statements and invoice payments. Negotiate favorable terms with suppliers and aim for ambitious budgeting to sustain growth.",
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
		description:
			"Manage operations with effective systems and hold staff accountable for their tasks. Measure both quality and profit regularly, ensure meetings are productive, and facilitate open communication about obstacles.",
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
		description:
			"Track profit margins and forecast increases. Reduce debt service and define financial responsibilities clearly. Maintain optimal staff and facility capacity, and ensure profitability exceeds industry standards.",
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
		description:
			"Promote employee wellbeing with reasonable work hours, financial independence plans, and daily well-being habits. Ensure employees feel energised and fulfilled, with well-planned days and satisfaction in their earnings.",
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
		description:
			"Clarify the company's vision and lead by example. Strive for excellence while accepting imperfections, build a culture of accountability, learn from mistakes, and support each other’s strengths and weaknesses.",
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

export const GLOBAL_NAV = [{ href: "/tool", label: "Tool" }]

export const SITE_AUTHOR = "Vito Lo Iacono"
export const SITE_CANONICAL_URL = "https://capo.nz"
export const SITE_DESCRIPTION = collapseWhitespace(`
	Our business diagnostic tool helps you to understand where you are and where you need to go. Try it for free and see your results instantly.
`)
export const SITE_KEYWORDS = [
	"business",
	"diagnostics",
	"tool",
	"capo",
	"capo strategies",
]
export const SITE_PUBLISHER = "Vito Lo Iacono"
export const SITE_TITLE = "capo. business diagnostics tool."

export const SUPPLEMENTAL_NAV = [
	// { href: "/feedback", label: "Feedback" },
	{ href: "/cookie-policy", label: "Cookie policy" },
	{ href: "/privacy-policy", label: "Privacy policy" },
	{ href: "/terms-of-use", label: "Terms of use" },
]
