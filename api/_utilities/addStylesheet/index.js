export default function addStylesheet(noForm) {
	return `<style>
			:root {
				--background-color-even-rows: #e6f5ff;
				--body-background-color: #fff;
				--body-color: #005994;
				--input-background-color: #d6eeff;
				--input-background-color-focus: #fff;
				--input-border-color: #003a61;
				--input-foreground-color: #003a61;
				--h2-background-color: #005994;
				--h2-foreground-color: #fff;
				--heading-color: #005994;
				--header-background-color: #005994;
				--header-foreground-color: #fff;
				--logo-foreground-color: #fff;
				--na-button-background-color-checked: #4e585f;
				--na-button-border-color-checked: #202427;
				--na-button-foreground-color-checked: #fff;
				--question-border-bottom-color: #b3e0ff;
				--question-button-background-color-checked: #005994;
				--question-button-border-color-checked: #003a61;
				--question-button-foreground-color-checked: #fff;
				--question-button-outline-color: #0096fa;
				--submit-button-background-color: #0b6544;
				--submit-button-border-color: #063725;
				--submit-button-foreground-color: #fff;
				--submit-button-outline-color: #15c182;
				--submit-button-background-color-hover: #fff;
				--submit-button-border-color-hover: #15c182;
				--submit-button-foreground-color-hover: #063725;
				--thead-background-color: #025994;
				--thead-foreground-color: #fff;

				/* Fonts */
				--font-body: inter, roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", arial, sans-serif;

				/* Spacing */
				--space-xs: clamp(0.75rem, 0.7067rem + 0.2308vi, 0.9375rem);
				--space-m: clamp(1.5rem, 1.4135rem + 0.4615vi, 1.875rem);
				--space-l: clamp(2rem, 1.8846rem + 0.6154vi, 2.5rem);
				--space-xl: clamp(3rem, 2.8269rem + 0.9231vi, 3.75rem);
				--gutter-width: 4vw;
				--page-width: 92vw;
				--section-spacing: 4rem;

				/* Font sizes */
				--step-0: clamp(1rem, 0.9279rem + 0.3846vi, 1.3125rem);
				--step-1: clamp(1.2rem, 1.1135rem + 0.4615vi, 1.575rem);
				--step-2: clamp(1.44rem, 1.3362rem + 0.5538vi, 1.89rem);
				--step-3: clamp(1.728rem, 1.6034rem + 0.6646vi, 2.268rem);
				--step-4: clamp(2.0736rem, 1.9241rem + 0.7975vi, 2.7216rem);
			}

			@media only screen and (prefers-color-scheme: dark) {
				:root {
					--background-color-even-rows: #004B7A;
					--body-background-color: #005994;
					--body-color: #fff;
					--h2-background-color: #9ed9ff;
					--h2-foreground-color: #00406b;
					--heading-color: #9ed9ff;
					--header-background-color: #9ed9ff;
					--header-foreground-color: #00406b;
					--logo-foreground-color: #00406b;
					--na-button-background-color-checked: #4e585f;
					--na-button-border-color-checked: #fff;
					--na-button-foreground-color-checked: #fff;
					--question-border-bottom-color: #fff6;
					--question-button-background-color-checked: #005994;
					--question-button-border-color-checked: #fff;
					--question-button-foreground-color-checked: #fff;
					--question-button-outline-color: #ff9;
					--submit-button-background-color: #17d892;
					--submit-button-border-color: #063725;
					--submit-button-foreground-color: #063725;
					--submit-button-outline-color: #fff;
					--submit-button-background-color-hover: #fff;
					--submit-button-border-color-hover: #063725;
					--submit-button-foreground-color-hover: #063725;
					--thead-background-color: #9ed9ff;
					--thead-foreground-color: #00406b;
				}
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			html,
			body {
				line-height: 1.5;
				margin: 0;
				min-height: 100vh;
				padding: 0;
				text-size-adjust: none;
			}

			h1,
			h2 {
				color: var(--heading-color);
				font-family: var(--font-body);
				font-weight: 400;
			}

			h1 {
				font-size: var(--step-4);
			}

			h2 {
				font-size: var(--step-3);
				margin: 1rem 0 0;
				padding: 2rem 0 0;
			}

			a {
				text-underline-offset: 3px;
			}

			.sr-only {
				display: none !important;
			}

			.landscape-prompt {
				display: none;
			}

			body {
				background-color: var(--body-background-color);
				color: var(--body-color);
				display: grid;
				font-family: var(--font-body);
				font-size: var(--step-0, 1rem);
				gap: 0;
				grid-template-columns:
					[viewport-start] 1fr
					[viewport-end];
				grid-template-rows:
					[viewport-top header-top] min-content
					[header-bottom main-top] 1fr
					[main-bottom footer-top] min-content
					[footer-bottom viewport-bottom];
				margin: 0;
				padding: 0;
				width: 100vw;
			}

			body > header {
				background-color: var(--header-background-color, #005994);
				color: var(--header-foreground-color, hsl(0deg, 0%, 100%));
				display: grid;
				font-family: var(--font-body);
				grid-column: viewport-start / viewport-end;
				grid-row: header-top / header-bottom;
				grid-template-columns:
					[viewport-start] var(--gutter-width, 4vw)
					[header-start] auto
					[header-end] var(--gutter-width, 4vw)
					[viewport-end];
				max-height: fit-content;
				padding: var(--space-xs) 0;
			}

			.logo {
				grid-column: header-start / header-end;
			}

			.logo,
			.logo a {
				color: var(--logo-foreground-color, hsl(0deg, 0%, 100%));
				font-family: var(--font-body);
				font-size: var(--step-2);
				font-weight: 400;
			}

			.logo a {
				outline: 2px solid transparent;
				outline-offset: 0.5rem;
				text-decoration: none;
			}

			.logo a:focus,
			.logo a:hover {
				outline: 2px solid var(--body-background-color);
			}

			main {
				display: grid;
				flex: 1;
				grid-template-columns:
					[main-start] var(--gutter-width, 4vw)
					[content-start] min(var(--page-width, 92vw), 60rem)
					[content-end] auto
					[page-end] var(--gutter-width, 4vw)
					[main-end];
				grid-template-rows:
					[main-top] var(--main-gutter-top, 2rem)
					[heading-top] min-content
					[heading-bottom scores-top] auto
					[scores-bottom chart-top] auto
					[chart-bottom responses-top] auto
					[responses-bottom] var(--main-gutter-bottom, 2rem)
					[main-bottom];
				grid-column: viewport-start / viewport-end;
				grid-row: main-top / main-bottom;
				justify-content: flex-start;
				height: auto;
			}

			main header {
				grid-column: content-start / content-end;
				grid-row: heading-top / heading-bottom;
			}

			${
				noForm
					? ""
					: `.has-inline-form {
				align-items: center;
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem;
				justify-content: flex-start;
				padding: 1rem 0 0;
			}

			.has-form form {
				align-items: flex-start;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				justify-content: space-between;
				padding-block: 1rem;
			}

			.has-form div {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				justify-content: space-between;
			}

			.has-form button,
			.has-inline-form button {
				white-space: nowrap;
			}

			input,
			button {
				font: inherit;
			}

			input[type=email],
			input[type=text] {
				background-color: var(--input-background-color);
				border: 1px solid var(--input-border-color);
				border-radius: 3px;
				color: var(--input-foreground-color);
				padding: 0.5rem;
			}

			input[type=email]:focus,
			input[type=text]:focus {
				background-color: var(--input-background-color-focus);
			}

			nav {
				grid-column: right-column-start / right-column-end;
			}

			nav > ul {
				align-items: center;
				display: flex;
				gap: 0;
				justify-content: flex-end;
				list-style-type: none;
				margin: 0;
				padding: 0;
			}

			nav a,
			nav li {
				color: hsl(0deg, 0%, 0%);
				letter-spacing: 0.5px;
				text-transform: lowercase;
				white-space: nowrap;
			}

			nav a {
				border-radius: 1px;
				outline: 2px solid transparent;
				outline-offset: 3px;
				text-decoration: none;
			}

			footer > .copyright a {
				border-radius: 1px;
				color: hsl(0deg, 0%, 0%);
				letter-spacing: 0.5px;
				outline-offset: 3px;
				outline: 2px solid transparent;
				text-decoration: none;
				text-transform: lowercase;
				white-space: nowrap;
			}

			nav a:focus,
			nav a:hover,
			footer > .copyright a:focus,
			footer > .copyright a:hover {
				outline: 2px solid var(--body-color);
			}

			nav li > span {
				background-color: var(--body-color);
				color: var(--heading-color);
				padding: 0.25rem 0.5rem;
			}

			nav li:not(:first-child)::before {
				content: "∙";
				display: inline-block;
				padding: 0 0.2rem 0 0.5rem;
			}

			@media screen and (width <= 720px) {
				nav > ul {
					align-items: flex-end;
					flex-direction: column;
					gap: 1rem;
					justify-content: flex-end;
				}

				nav li::before {
					content: none !important;
				}
			}
`
			}
			main section.scores {
				grid-column: content-start / content-end;
				grid-row: scores-top / scores-bottom;
			}

			table {
				width: min(94vw, 28rem);
			}

			thead {
				background-color: var(--thead-background-color);
				color: var(--thead-foreground-color);
			}

			thead th {
				border: none;
			}

			tbody tr:nth-child(even) {
				background-color: var(--background-color-even-rows);
			}

			td,
			th {
				padding: 0.5rem;
			}

			table tr td:first-child,
			table tr th:first-child {
				text-align: right;
			}

			table tr td:last-child,
			table tr th:last-child {
				text-align: left;
			}

			caption {
				font-size: var(--step-2);
				font-weight: 400;
				padding: 2rem 0 0.5rem;
				text-align: left;
			}

			main section.chart {
				grid-column: content-start / content-end;
				grid-row: chart-top / chart-bottom;
			}

			.radar-chart {
				aspect-ratio: 1;
				height: auto;
				margin-block: 1rem;
				width: 100%;
			}

			main section.responses {
				grid-column: content-start / content-end;
				grid-row: responses-top / responses-bottom;
			}

			.responses table {
				width: min(94vw, 60rem);
			}

			.responses tbody tr td:first-child {
				width: 8rem;
			}

			@media only screen and (max-width: 900px) {
				:root {
					--gutter-width: 3vw;
					--page-width: 94vw;
					--section-spacing: 1rem;
				}
			}

			@media only screen and (width <= 720px) {
				.landscape-prompt {
					display: block;
				}
			}

			footer {
				background-color: #66c3ff;
				color: hsl(0deg, 0%, 0%);
				display: grid;
				grid-column: viewport-start / viewport-end;
				grid-row: footer-top / footer-bottom;
				grid-template-columns:
					[footer-start] var(--gutter-width, 4vw)
					[left-column-start] min-content
					[left-column-end] 1vw
					[right-column-start] auto
					[right-column-end] var(--gutter-width, 4vw)
					[footer-end];
				font-family: var(--font-body);
				max-height: fit-content;
				padding: var(--space-xs) 0;
			}

			footer > * {
				margin: 0;
				padding: 0;
			}

			footer > .copyright {
				grid-column: left-column-start / left-column-end;
				margin: 0;
				padding: 0;
				white-space: nowrap;
			}

			.print-only {
				display: none;
			}

			@media screen and (width <= 720px) {
				footer {
					background-color: #66c3ff;
					color: hsl(0deg, 0%, 0%);
					display: grid;
					grid-column: viewport-start / viewport-end;
					grid-row: footer-top / footer-bottom;
					grid-template-columns: 1fr;
					grid-template-rows: min-content 1fr;
					font-family: var(--font-body);
					max-height: fit-content;
					padding: var(--space-m) var(--space-xl);
					row-gap: var(--space-l);
				}

				footer > .copyright {
					text-align: end;
				}
			}

			@media only print {
				body > header,
				body > footer,
				.no-print {
					display: none;
				}

				.print-only {
					display: block;
				}
			}
		</style>
	`
}
