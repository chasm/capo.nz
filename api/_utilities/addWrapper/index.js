import getChart from "../getChart/index.js"
import addResponses from "../addResponses/index.js"
import addScores from "../addScores/index.js"
import addStylesheet from "../addStylesheet/index.js"
import getScores from "../getScores/index.js"

export default function addWrapper(body, message = "", addChrome = true) {
	const scores = getScores(body)
	const stylesheet = addStylesheet()
	const { name } = body

	const chrome = `<div class="no-print">
	<p class="landscape-prompt">
		<img
			alt=""
			height="24"
			src="/images/landscape-mode.svg"
			style="float: left; margin: 0.5rem 0.5rem 0.5rem 0;"
		/>
		For ease of use, please turn your phone a quarter turn to landscape orientation.
	</p>
	<p>Use <button onclick="window.print(); return false;">print</button> and &ldquo;Save as PDF&rdquo; to save as a PDF file.</p>
	<p>Use the browser <button onclick="window.history.back(); return false;">back</button> button to return to your form.</p>
	<div class="has-inline-form">
		Download your
		<form action="/api/business-diagnostics" method="POST">
			${Object.entries(body)
				.map(
					([name, value]) =>
						`<input type="hidden" name="${name}" value="${value}">`,
				)
				.join("\n						")}
			<button type="submit">scores as a spreadsheet</button>
		</form> in tab-separated-value (TSV) format.
	</div>
	<div class="has-form">
		<p>To get a copy of your results, use this form:</p>
		<form action="/api/response" method="POST">
			<div>
				<label for="name">Business name*</label>
				<input id="name" name="name" required size="32" type="text">
			</div>
			<div>
				<label for="email">Email address*</label>
					<input id="email" name="email" required size="32" type="email">
				${Object.entries(body)
					.map(
						([name, value]) =>
							`<input name="${name}" value="${value}" type="hidden">`,
					)
					.join("\n						")}
			</div>
			<button type="submit">Send</button>
		</form>
	</div>
</div>
<p class="print-only">
	Printed from <strong>capo.nz</strong>.
</p>`

	return `<!DOCTYPE html>
<html dir="ltr" lang="en-NZ">
	<head>
		<title>capo.</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="canonical" href="https://capo.nz">
		<meta name="keywords" content="business,diagnostics,tool">
		<meta name="robots" content="all">
		<meta name="description" content="Our business diagnostic tool helps you to understand where you are and where you need to go.">
		<meta name="author" content="Vito Lo Iacono">
		<meta name="publisher" content="Vito Lo Iacono">
		${stylesheet}
	</head>
	<body>
		<header>
			<div class="logo">capo.</div>
		</header>
		<main>
			<header>
				<h1>Diagnostic Results${name ? ` for ${name}` : ""}</h1>
				${addChrome ? chrome : message}
			</header>
			${addScores(scores)}
			<section class="chart">
				<h2>Radar chart</h2>
				${getChart(scores.map((score) => score.score))}
				${
					addChrome
						? ""
						: `
					<p>If this chart does not appear, you can
					<a href="https://capo.nz/api/chart?scores=${scores.map((score) => score.score).join(",")}"
					>view it online.</a></p>`
				}
			</section>
			${addResponses(scores)}
		</main>
		<footer>
			<p class="copyright">&copy; 2024 by <a href="https://capo.one/" rel="external">capo.</a></p>
			${
				addChrome
					? `<nav class="supplemental-nav">
				<h2 class="sr-only">Links to legal documents</h2>
				<ul>
					<li>
						<a href="/cookie-policy">Cookie policy</a>
					</li>
					<li>
						<a href="/privacy-policy">Privacy policy</a>
					</li>
					<li>
						<a href="/terms-of-use">Terms of use</a>
					</li>
				</ul>
			</nav>`
					: ""
			}
		</footer>
	</body>
</html>
	`
}
