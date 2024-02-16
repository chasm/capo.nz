export default function addScores(scores) {
	return `
			<section class="scores">
				<h2>Scores</h2>
				<table>
					<caption>Scores by category</caption>
					<thead>
						<tr>
							<th>% Score</th>
							<th>Category</th>
						</tr>
					</thead>
					<tbody>
						${scores
							.map(
								(score) => `<tr>
							<td>${score.score}</td>
							<td>${score.name}</td>
						</tr>
						`,
							)
							.join("						")}
					</tbody>
				</table>
			</section>
	`
}
