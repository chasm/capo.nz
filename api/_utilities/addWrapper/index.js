import addRadarChart from "../addRadarChart/index.js"
import addResponses from "../addResponses/index.js"
import addScores from "../addScores/index.js"
import addStylesheet from "../addStylesheet/index.js"
import getPoints from "../getPoints/index.js"
import getScores from "../getScores/index.js"

export default function addWrapper(body) {
	const scores = getScores(body)
	const points = getPoints(scores)
	const stylesheet = addStylesheet()

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
		<meta name="color-scheme" content="light dark">
		<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fef0f3">
		<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#710986">
		${stylesheet}
	</head>
	<body>
		<header>
			<div class="logo">capo.</div>
		</header>
		<main>
			<header>
				<h1>Diagnostic Results</h1>
				<p>Use print and &ldquo;Save as PDF&rdquo; to save as a PDF file.</p>
			</header>
			${addScores(scores)}
			${addRadarChart(points, scores)}
			${addResponses(scores)}
		</main>
		<footer>
			<p class="copyright">&copy; 2024 by <a href="https://capo.one/" rel="external">capo.</a></p>
			<nav class="supplemental-nav">
				<h2 class="sr-only">Links to legal documents</h2>
				<ul>
					<li>
						<a href="/feedback">Feedback</a>
					</li>
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
			</nav>
		</footer>
	</body>
</html>
	`
}
