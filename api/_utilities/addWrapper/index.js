import addRadarChart from "../addRadarChart/index.js"
import addResponses from "../addResponses/index.js"
import addScores from "../addScores/index.js"
import addStylesheet from "../addStylesheet/index.js"
import getPoints from "../getPoints/index.js"
import getScores from "../getScores/index.js"

export default function addWrapper(body, message = "", addChrome = true) {
	const scores = getScores(body)
	const points = getPoints(scores)
	const stylesheet = addStylesheet()

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
	<div class="has-form">
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
		To get a copy of your results, provide your email address:
		<form action="/api/response" method="POST">
			<label>
				<input type="email" name="email" required />
			</label>
			${Object.entries(body)
				.map(
					([name, value]) =>
						`<input type="hidden" name="${name}" value="${value}">`,
				)
				.join("\n						")}
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
				<h1>Diagnostic Results</h1>
				${addChrome ? chrome : message}
			</header>
			${addScores(scores)}
			${addRadarChart(points, scores)}
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
