import excelJs from "exceljs"

export default function makeExcel(data) {
	return excelJs ? "OH YES!" : "oh noes ..."
}
