const lookup = ["No", "Somewhat", "Yes"]

export default function addResponses(scores) {
	return `<section class="responses">
				<h2>Responses to questions by category</h2>
				${scores
					.map(
						(score) => `<table>
					<caption>${score.name}</caption>
					<thead>
						<tr>
							<th>Response</th>
							<th>Question</th>
						</tr>
					</thead>
					<tbody>
						${score.questions
							.map(
								({ question, score }) => `<tr>
							<td>${lookup[score]}</td>
							<td>${question}</td>
						</tr>
						`,
							)
							.join("						")}
					</tbody>
				</table>
			`,
					)
					.join("				")}
			</section>
	`
}
