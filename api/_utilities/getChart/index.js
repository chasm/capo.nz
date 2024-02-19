import getPoints from "../getPoints/index.js"

const categories = [
	"Service Excellence",
	"Sales Drive",
	"Targeted Marketing",
	"High-Performing Team",
	"Strong Strategy Drive",
	"Visible Cashflow",
	"Productivity Prioritisation",
	"Profitability Monitoring",
	"Work/Life Balance - Wellbeing",
	"Effective Leadership",
]

export default function getChart(scores = []) {
	const points = getPoints(scores)

	return `
		<svg
			class="radar-chart"
			height="900"
			version="1.1"
			viewBox="0 0 1200 1200"
			width="900"
			xml:space="preserve"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				fill="#ffffff"
				height="1200"
				width="1200"
				x="0"
				y="0"
			/>
			<!-- spokes -->
			<g
				stroke="#ccc"
				stroke-width="1"
			>
				<line
					x1="600"
					x2="600"
					y1="600"
					y2="100"
				></line>
				<line
					x1="600"
					x2="893.89"
					y1="600"
					y2="195.49"
				></line>
				<line
					x1="600"
					x2="1075.53"
					y1="600"
					y2="445.49"
				></line>
				<line
					x1="600"
					x2="1075.53"
					y1="600"
					y2="754.51"
				></line>
				<line
					x1="600"
					x2="893.89"
					y1="600"
					y2="1004.51"
				></line>
				<line
					x1="600"
					x2="600"
					y1="600"
					y2="1100"
				></line>
				<line
					x1="600"
					x2="306.11"
					y1="600"
					y2="1004.51"
				></line>
				<line
					x1="600"
					x2="124.47"
					y1="600"
					y2="754.51"
				></line>
				<line
					x1="600"
					x2="124.47"
					y1="600"
					y2="445.49"
				></line>
				<line
					x1="600"
					x2="306.11"
					y1="600"
					y2="195.49"
				></line>
			</g>
			<!-- 100% rim -->
			<g
				stroke="#aaa"
				stroke-width="1"
				stroke-linejoin="round"
			>
				<line
					x1="600"
					x2="893.89"
					y1="100"
					y2="195.49"
				></line>
				<line
					x1="893.89"
					x2="1075.53"
					y1="195.49"
					y2="445.49"
				></line>
				<line
					x1="1075.53"
					x2="1075.53"
					y1="445.49"
					y2="754.51"
				></line>
				<line
					x1="1075.53"
					x2="893.89"
					y1="754.51"
					y2="1004.51"
				></line>
				<line
					x1="893.89"
					x2="600"
					y1="1004.51"
					y2="1100"
				></line>
				<line
					x1="600"
					x2="306.11"
					y1="1100"
					y2="1004.51"
				></line>
				<line
					x1="306.11"
					x2="124.47"
					y1="1004.51"
					y2="754.51"
				></line>
				<line
					x1="124.47"
					x2="124.47"
					y1="754.51"
					y2="445.49"
				></line>
				<line
					x1="124.47"
					x2="306.11"
					y1="445.49"
					y2="195.49"
				></line>
				<line
					x1="306.11"
					x2="600"
					y1="195.49"
					y2="100"
				></line>
			</g>
			<!-- 75% rim -->
			<g
				stroke="#bbb"
				stroke-width="1"
				stroke-linejoin="round"
			>
				<line
					x1="600"
					x2="820.42"
					y1="225"
					y2="296.62"
				></line>
				<line
					x1="820.42"
					x2="956.65"
					y1="296.62"
					y2="484.12"
				></line>
				<line
					x1="956.65"
					x2="956.65"
					y1="484.12"
					y2="715.88"
				></line>
				<line
					x1="956.65"
					x2="820.42"
					y1="715.88"
					y2="903.38"
				></line>
				<line
					x1="820.42"
					x2="600"
					y1="903.38"
					y2="975"
				></line>
				<line
					x1="600"
					x2="379.58"
					y1="975"
					y2="903.38"
				></line>
				<line
					x1="379.58"
					x2="243.35"
					y1="903.38"
					y2="715.88"
				></line>
				<line
					x1="243.35"
					x2="243.35"
					y1="715.88"
					y2="484.12"
				></line>
				<line
					x1="243.35"
					x2="379.58"
					y1="484.12"
					y2="296.62"
				></line>
				<line
					x1="379.58"
					x2="600"
					y1="296.62"
					y2="225"
				></line>
			</g>
			<!-- 50% rim -->
			<g
				stroke="#ccc"
				stroke-width="1"
				stroke-linejoin="round"
			>
				<line
					x1="600"
					x2="746.95"
					y1="350"
					y2="403.38"
				></line>
				<line
					x1="746.95"
					x2="837.76"
					y1="403.38"
					y2="522.75"
				></line>
				<line
					x1="837.76"
					x2="837.76"
					y1="522.75"
					y2="677.26"
				></line>
				<line
					x1="837.76"
					x2="746.95"
					y1="677.26"
					y2="802.25"
				></line>
				<line
					x1="746.95"
					x2="600"
					y1="802.25"
					y2="850"
				></line>
				<line
					x1="600"
					x2="453.05"
					y1="850"
					y2="802.25"
				></line>
				<line
					x1="453.05"
					x2="362.24"
					y1="802.25"
					y2="677.26"
				></line>
				<line
					x1="362.24"
					x2="362.24"
					y1="677.26"
					y2="522.75"
				></line>
				<line
					x1="362.24"
					x2="362.24"
					y1="677.26"
					y2="522.75"
				></line>
				<line
					x1="362.24"
					x2="453.05"
					y1="522.75"
					y2="403.38"
				></line>
				<line
					x1="453.05"
					x2="600"
					y1="403.38"
					y2="350"
				></line>
			</g>
			<!-- 25% rim -->
			<g
				stroke="#ddd"
				stroke-width="1"
				stroke-linejoin="round"
			>
				<line
					x1="600"
					x2="673.47"
					y1="475"
					y2="498.87"
				></line>
				<line
					x1="673.47"
					x2="718.88"
					y1="498.87"
					y2="561.37"
				></line>
				<line
					x1="718.88"
					x2="718.88"
					y1="561.37"
					y2="638.63"
				></line>
				<line
					x1="718.88"
					x2="673.47"
					y1="638.63"
					y2="701.13"
				></line>
				<line
					x1="673.47"
					x2="600"
					y1="701.13"
					y2="725"
				></line>
				<line
					x1="600"
					x2="526.53"
					y1="725"
					y2="701.13"
				></line>
				<line
					x1="526.53"
					x2="481.12"
					y1="701.13"
					y2="638.63"
				></line>
				<line
					x1="481.12"
					x2="481.12"
					y1="638.63"
					y2="561.37"
				></line>
				<line
					x1="481.12"
					x2="526.53"
					y1="561.37"
					y2="498.87"
				></line>
				<line
					x1="526.53"
					x2="600"
					y1="498.87"
					y2="475"
				></line>
			</g>
			<!-- axis labels -->
			<g
				alignment-baseline="middle"
				stroke="#575757"
				font-family="inter,roboto,'Helvetica Neue','Arial Nova','Nimbus Sans',arial,sans-serif"
				font-size="22px"
				font-weight="normal"
				text-anchor="middle"
			>
				<text
					x="615"
					y="85"
					>Service Excellence</text
				>
				<text
					transform="rotate(36, 910, 185)"
					x="910"
					y="190"
					>Sales Drive</text
				>
				<text
					transform="rotate(72, 1093, 445)"
					x="1093"
					y="450"
					>Targeted Marketing</text
				>
				<text
					transform="rotate(288, 1093, 760)"
					x="1093"
					y="765"
					>High-Performing Team</text
				>
				<text
					transform="rotate(324, 905, 1020)"
					x="905"
					y="1025"
					>Strong Strategy Drive</text
				>
				<text
					x="600"
					y="1128"
					>Visible Cashflow</text
				>
				<text
					transform="rotate(36, 300, 1023)"
					x="300"
					y="1032"
					>Productivity Prioritisation</text
				>
				<text
					transform="rotate(72, 106, 761)"
					x="106"
					y="770"
					>Profitability Monitoring</text
				>
				<text
					transform="rotate(288, 107, 445)"
					x="107"
					y="450"
					>Work/Life Balance - Wellbeing</text
				>
				<text
					transform="rotate(324, 303, 180)"
					x="303"
					y="180"
					>Effective Leadership</text
				>
			</g>
			<!-- connectors -->
			<g
				stroke="#0f0"
				stroke-width="5"
				stroke-linejoin="round"
			>
				${points
					.map(([x, y], index) => {
						if (index < 1) {
							return `
								<line
									x1="${points.at(-1)[0]}"
									x2="${x}"
									y1="${points.at(-1)[1]}"
									y2="${y}"
								/>
							`
						}

						return `
							<line
								x1="${points[index - 1][0]}"
								x2="${x}"
								y1="${points[index - 1][1]}"
								y2="${y}"
							/>
						`
					})
					.join("\n")}
			</g>
			<!-- points -->
			<g fill="#ab2121">
			${points
				.map(
					([x = 0, y = 0], index) =>
						`
						<circle
							cx="${x}"
							cy="${y}"
							r="5"
						/>
						<text
							alignment-baseline="middle"
							font-family="Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif"
							font-size="22px"
							text-anchor="middle"
							x="${x + 20}"
							y="${y + 20}"
						>${scores[index]}</text>
					`,
				)
				.join("\n")}
			</g>
		</svg>
	`
}
