export type Datum = Record<string, 0 | 1 | 2>

export default function makeSpreadsheet(data: Datum): string {
	return `<?xml version="1.0" encoding="UTF-8"?>
	<office:document xmlns:presentation="urn:oasis:names:tc:opendocument:xmlns:presentation:1.0" xmlns:css3t="http://www.w3.org/TR/css3-text/" xmlns:grddl="http://www.w3.org/2003/g/data-view#" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:formx="urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:oooc="http://openoffice.org/2004/calc" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:ooow="http://openoffice.org/2004/writer" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rpt="http://openoffice.org/2005/report" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:config="urn:oasis:names:tc:opendocument:xmlns:config:1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0" xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" xmlns:calcext="urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0" xmlns:tableooo="http://openoffice.org/2009/table" xmlns:drawooo="http://openoffice.org/2010/draw" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" xmlns:dom="http://www.w3.org/2001/xml-events" xmlns:field="urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0" xmlns:math="http://www.w3.org/1998/Math/MathML" xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0" xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0" xmlns:xforms="http://www.w3.org/2002/xforms" office:version="1.3" office:mimetype="application/vnd.oasis.opendocument.spreadsheet">
	 <office:meta><meta:creation-date>2024-02-14T16:39:19.568028300</meta:creation-date><dc:date>2024-02-14T22:05:55.795119616</dc:date><meta:editing-duration>PT28M53S</meta:editing-duration><meta:editing-cycles>5</meta:editing-cycles><meta:generator>LibreOffice/7.3.7.2$Linux_X86_64 LibreOffice_project/30$Build-2</meta:generator><meta:document-statistic meta:table-count="11" meta:cell-count="179" meta:object-count="11"/></office:meta>
	 <office:settings>
		<config:config-item-set config:name="ooo:view-settings">
		 <config:config-item config:name="VisibleAreaTop" config:type="int">0</config:config-item>
		 <config:config-item config:name="VisibleAreaLeft" config:type="int">0</config:config-item>
		 <config:config-item config:name="VisibleAreaWidth" config:type="int">25658</config:config-item>
		 <config:config-item config:name="VisibleAreaHeight" config:type="int">18062</config:config-item>
		 <config:config-item-map-indexed config:name="Views">
			<config:config-item-map-entry>
			 <config:config-item config:name="ViewId" config:type="string">view1</config:config-item>
			 <config:config-item-map-named config:name="Tables">
				<config:config-item-map-entry config:name="Effective Leadership">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">5</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="High-Performing Team">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">6</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="Productivity Prioritisation">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">6</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="Profitability Monitoring">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">6</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="Sales Drive">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">6</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="Service Excellence">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">5</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="Strong Strategy Drive">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">6</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="TOTALS">
				 <config:config-item config:name="CursorPositionX" config:type="int">10</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">18</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="Targeted Marketing">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">6</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="Visible Cashflow">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">5</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
				<config:config-item-map-entry config:name="Work-Life Balance - Wellbeing">
				 <config:config-item config:name="CursorPositionX" config:type="int">1</config:config-item>
				 <config:config-item config:name="CursorPositionY" config:type="int">5</config:config-item>
				 <config:config-item config:name="ActiveSplitRange" config:type="short">2</config:config-item>
				 <config:config-item config:name="PositionLeft" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionRight" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionTop" config:type="int">0</config:config-item>
				 <config:config-item config:name="PositionBottom" config:type="int">0</config:config-item>
				 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
				 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
				 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
				 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
				 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
				</config:config-item-map-entry>
			 </config:config-item-map-named>
			 <config:config-item config:name="ActiveTable" config:type="string">TOTALS</config:config-item>
			 <config:config-item config:name="HorizontalScrollbarWidth" config:type="int">1838</config:config-item>
			 <config:config-item config:name="ZoomType" config:type="short">0</config:config-item>
			 <config:config-item config:name="ZoomValue" config:type="int">100</config:config-item>
			 <config:config-item config:name="PageViewZoomValue" config:type="int">60</config:config-item>
			 <config:config-item config:name="ShowPageBreakPreview" config:type="boolean">false</config:config-item>
			 <config:config-item config:name="ShowZeroValues" config:type="boolean">true</config:config-item>
			 <config:config-item config:name="ShowNotes" config:type="boolean">true</config:config-item>
			 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
			 <config:config-item config:name="GridColor" config:type="int">12632256</config:config-item>
			 <config:config-item config:name="ShowPageBreaks" config:type="boolean">true</config:config-item>
			 <config:config-item config:name="HasColumnRowHeaders" config:type="boolean">true</config:config-item>
			 <config:config-item config:name="HasSheetTabs" config:type="boolean">true</config:config-item>
			 <config:config-item config:name="IsOutlineSymbolsSet" config:type="boolean">true</config:config-item>
			 <config:config-item config:name="IsValueHighlightingEnabled" config:type="boolean">false</config:config-item>
			 <config:config-item config:name="IsSnapToRaster" config:type="boolean">false</config:config-item>
			 <config:config-item config:name="RasterIsVisible" config:type="boolean">false</config:config-item>
			 <config:config-item config:name="RasterResolutionX" config:type="int">1000</config:config-item>
			 <config:config-item config:name="RasterResolutionY" config:type="int">1000</config:config-item>
			 <config:config-item config:name="RasterSubdivisionX" config:type="int">1</config:config-item>
			 <config:config-item config:name="RasterSubdivisionY" config:type="int">1</config:config-item>
			 <config:config-item config:name="IsRasterAxisSynchronized" config:type="boolean">true</config:config-item>
			 <config:config-item config:name="AnchoredTextOverflowLegacy" config:type="boolean">false</config:config-item>
			</config:config-item-map-entry>
		 </config:config-item-map-indexed>
		</config:config-item-set>
		<config:config-item-set config:name="ooo:configuration-settings">
		 <config:config-item config:name="AllowPrintJobCancel" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="ApplyUserData" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="AutoCalculate" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="CharacterCompressionType" config:type="short">0</config:config-item>
		 <config:config-item config:name="EmbedAsianScriptFonts" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="EmbedComplexScriptFonts" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="EmbedFonts" config:type="boolean">false</config:config-item>
		 <config:config-item config:name="EmbedLatinScriptFonts" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="EmbedOnlyUsedFonts" config:type="boolean">false</config:config-item>
		 <config:config-item-map-indexed config:name="ForbiddenCharacters">
			<config:config-item-map-entry>
			 <config:config-item config:name="Language" config:type="string">en</config:config-item>
			 <config:config-item config:name="Country" config:type="string">NZ</config:config-item>
			 <config:config-item config:name="Variant" config:type="string"/>
			 <config:config-item config:name="BeginLine" config:type="string"/>
			 <config:config-item config:name="EndLine" config:type="string"/>
			</config:config-item-map-entry>
		 </config:config-item-map-indexed>
		 <config:config-item config:name="GridColor" config:type="int">12632256</config:config-item>
		 <config:config-item config:name="HasColumnRowHeaders" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="HasSheetTabs" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="IsDocumentShared" config:type="boolean">false</config:config-item>
		 <config:config-item config:name="IsKernAsianPunctuation" config:type="boolean">false</config:config-item>
		 <config:config-item config:name="IsOutlineSymbolsSet" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="IsRasterAxisSynchronized" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="IsSnapToRaster" config:type="boolean">false</config:config-item>
		 <config:config-item config:name="LinkUpdateMode" config:type="short">3</config:config-item>
		 <config:config-item config:name="LoadReadonly" config:type="boolean">false</config:config-item>
		 <config:config-item config:name="PrinterName" config:type="string">EPSON_ET_2750_Series</config:config-item>
		 <config:config-item config:name="PrinterPaperFromSetup" config:type="boolean">false</config:config-item>
		 <config:config-item config:name="PrinterSetup" config:type="base64Binary">mQH+/0VQU09OX0VUXzI3NTBfU2VyaWVzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ1VQUzpFUFNPTl9FVF8yNzUwX1NlcmllcwAAAAAAAAAWAAMAugAAAAAAAAAEAAhSAAAEdAAASm9iRGF0YSAxCnByaW50ZXI9RVBTT05fRVRfMjc1MF9TZXJpZXMKb3JpZW50YXRpb249UG9ydHJhaXQKY29waWVzPTEKY29sbGF0ZT1mYWxzZQptYXJnaW5hZGp1c3RtZW50PTAsMCwwLDAKY29sb3JkZXB0aD0yNApwc2xldmVsPTAKcGRmZGV2aWNlPTEKY29sb3JkZXZpY2U9MApQUERDb250ZXh0RGF0YQpQYWdlU2l6ZTpBNAAAEgBDT01QQVRfRFVQTEVYX01PREUPAER1cGxleE1vZGU6Ok9mZg==</config:config-item>
		 <config:config-item config:name="RasterIsVisible" config:type="boolean">false</config:config-item>
		 <config:config-item config:name="RasterResolutionX" config:type="int">1000</config:config-item>
		 <config:config-item config:name="RasterResolutionY" config:type="int">1000</config:config-item>
		 <config:config-item config:name="RasterSubdivisionX" config:type="int">1</config:config-item>
		 <config:config-item config:name="RasterSubdivisionY" config:type="int">1</config:config-item>
		 <config:config-item config:name="SaveThumbnail" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="SaveVersionOnClose" config:type="boolean">false</config:config-item>
		 <config:config-item config:name="ShowGrid" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="ShowNotes" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="ShowPageBreaks" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="ShowZeroValues" config:type="boolean">true</config:config-item>
		 <config:config-item config:name="SyntaxStringRef" config:type="short">7</config:config-item>
		 <config:config-item config:name="UpdateFromTemplate" config:type="boolean">true</config:config-item>
		 <config:config-item-map-named config:name="ScriptConfiguration">
			<config:config-item-map-entry config:name="Service Excellence">
			 <config:config-item config:name="CodeName" config:type="string">Work-Life Balance - Wellbeing_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="Sales Drive">
			 <config:config-item config:name="CodeName" config:type="string">Sheet1</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="Targeted Marketing">
			 <config:config-item config:name="CodeName" config:type="string">Sales Drive_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="High-Performing Team">
			 <config:config-item config:name="CodeName" config:type="string">Targeted Marketing_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="Strong Strategy Drive">
			 <config:config-item config:name="CodeName" config:type="string">High-Performing Team_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="Visible Cashflow">
			 <config:config-item config:name="CodeName" config:type="string">Strong Strategy Drive_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="Productivity Prioritisation">
			 <config:config-item config:name="CodeName" config:type="string">Visible Cashflow_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="Profitability Monitoring">
			 <config:config-item config:name="CodeName" config:type="string">Productivity Prioritisation_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="Work-Life Balance - Wellbeing">
			 <config:config-item config:name="CodeName" config:type="string">Profitability Monitoring_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="Effective Leadership">
			 <config:config-item config:name="CodeName" config:type="string">Service Excellence_2</config:config-item>
			</config:config-item-map-entry>
			<config:config-item-map-entry config:name="TOTALS">
			 <config:config-item config:name="CodeName" config:type="string">TOTALS</config:config-item>
			</config:config-item-map-entry>
		 </config:config-item-map-named>
		</config:config-item-set>
	 </office:settings>
	 <office:scripts>
		<office:script script:language="ooo:Basic">
		 <ooo:libraries xmlns:ooo="http://openoffice.org/2004/office" xmlns:xlink="http://www.w3.org/1999/xlink">
			<ooo:library-embedded ooo:name="Standard"/>
		 </ooo:libraries>
		</office:script>
	 </office:scripts>
	 <office:font-face-decls>
		<style:font-face style:name="DejaVu Sans" svg:font-family="&apos;DejaVu Sans&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
		<style:font-face style:name="Liberation Sans" svg:font-family="&apos;Liberation Sans&apos;" style:font-family-generic="swiss" style:font-pitch="variable"/>
		<style:font-face style:name="Liberation Serif" svg:font-family="&apos;Liberation Serif&apos;" style:font-family-generic="roman" style:font-pitch="variable"/>
		<style:font-face style:name="Lohit Devanagari" svg:font-family="&apos;Lohit Devanagari&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
		<style:font-face style:name="Noto Sans CJK SC" svg:font-family="&apos;Noto Sans CJK SC&apos;" style:font-family-generic="system" style:font-pitch="variable"/>
	 </office:font-face-decls>
	 <office:styles>
		<style:default-style style:family="table-cell">
		 <style:paragraph-properties style:tab-stop-distance="1.25cm"/>
		 <style:text-properties style:font-name="Liberation Sans" fo:font-size="10pt" fo:language="en" fo:country="NZ" style:font-name-asian="Noto Sans CJK SC" style:font-size-asian="10pt" style:language-asian="zh" style:country-asian="CN" style:font-name-complex="Lohit Devanagari" style:font-size-complex="10pt" style:language-complex="hi" style:country-complex="IN"/>
		</style:default-style>
		<style:default-style style:family="graphic">
		 <style:graphic-properties svg:stroke-color="#3465a4" draw:fill-color="#729fcf" fo:wrap-option="no-wrap" draw:shadow-offset-x="0.3cm" draw:shadow-offset-y="0.3cm"/>
		 <style:paragraph-properties style:text-autospace="ideograph-alpha" style:punctuation-wrap="simple" style:line-break="strict" style:writing-mode="page" style:font-independent-line-spacing="false">
			<style:tab-stops/>
		 </style:paragraph-properties>
		 <style:text-properties style:use-window-font-color="true" loext:opacity="0%" style:font-name="Liberation Serif" fo:font-size="12pt" fo:language="en" fo:country="NZ" style:letter-kerning="true" style:font-name-asian="DejaVu Sans" style:font-size-asian="12pt" style:language-asian="zh" style:country-asian="CN" style:font-name-complex="DejaVu Sans" style:font-size-complex="12pt" style:language-complex="hi" style:country-complex="IN"/>
		</style:default-style>
		<number:number-style style:name="N0">
		 <number:number number:min-integer-digits="1"/>
		</number:number-style>
		<style:style style:name="Default" style:family="table-cell"/>
		<style:style style:name="Heading" style:family="table-cell" style:parent-style-name="Default">
		 <style:text-properties fo:color="#000000" fo:font-size="24pt" fo:font-style="normal" fo:font-weight="bold" style:font-size-asian="24pt" style:font-style-asian="normal" style:font-weight-asian="bold" style:font-size-complex="24pt" style:font-style-complex="normal" style:font-weight-complex="bold"/>
		</style:style>
		<style:style style:name="Heading_20_1" style:display-name="Heading 1" style:family="table-cell" style:parent-style-name="Heading">
		 <style:text-properties fo:font-size="18pt" style:font-size-asian="18pt" style:font-size-complex="18pt"/>
		</style:style>
		<style:style style:name="Heading_20_2" style:display-name="Heading 2" style:family="table-cell" style:parent-style-name="Heading">
		 <style:text-properties fo:font-size="12pt" style:font-size-asian="12pt" style:font-size-complex="12pt"/>
		</style:style>
		<style:style style:name="Text" style:family="table-cell" style:parent-style-name="Default"/>
		<style:style style:name="Note" style:family="table-cell" style:parent-style-name="Text">
		 <style:table-cell-properties fo:background-color="#ffffcc" style:diagonal-bl-tr="none" style:diagonal-tl-br="none" fo:border="0.74pt solid #808080"/>
		 <style:text-properties fo:color="#333333"/>
		</style:style>
		<style:style style:name="Footnote" style:family="table-cell" style:parent-style-name="Text">
		 <style:text-properties fo:color="#808080" fo:font-style="italic" style:font-style-asian="italic" style:font-style-complex="italic"/>
		</style:style>
		<style:style style:name="Hyperlink" style:family="table-cell" style:parent-style-name="Text">
		 <style:text-properties fo:color="#0000ee" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="#0000ee"/>
		</style:style>
		<style:style style:name="Status" style:family="table-cell" style:parent-style-name="Default"/>
		<style:style style:name="Good" style:family="table-cell" style:parent-style-name="Status">
		 <style:table-cell-properties fo:background-color="#ccffcc"/>
		 <style:text-properties fo:color="#006600"/>
		</style:style>
		<style:style style:name="Neutral" style:family="table-cell" style:parent-style-name="Status">
		 <style:table-cell-properties fo:background-color="#ffffcc"/>
		 <style:text-properties fo:color="#996600"/>
		</style:style>
		<style:style style:name="Bad" style:family="table-cell" style:parent-style-name="Status">
		 <style:table-cell-properties fo:background-color="#ffcccc"/>
		 <style:text-properties fo:color="#cc0000"/>
		</style:style>
		<style:style style:name="Warning" style:family="table-cell" style:parent-style-name="Status">
		 <style:text-properties fo:color="#cc0000"/>
		</style:style>
		<style:style style:name="Error" style:family="table-cell" style:parent-style-name="Status">
		 <style:table-cell-properties fo:background-color="#cc0000"/>
		 <style:text-properties fo:color="#ffffff" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
		</style:style>
		<style:style style:name="Accent" style:family="table-cell" style:parent-style-name="Default">
		 <style:text-properties fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
		</style:style>
		<style:style style:name="Accent_20_1" style:display-name="Accent 1" style:family="table-cell" style:parent-style-name="Accent">
		 <style:table-cell-properties fo:background-color="#000000"/>
		 <style:text-properties fo:color="#ffffff"/>
		</style:style>
		<style:style style:name="Accent_20_2" style:display-name="Accent 2" style:family="table-cell" style:parent-style-name="Accent">
		 <style:table-cell-properties fo:background-color="#808080"/>
		 <style:text-properties fo:color="#ffffff"/>
		</style:style>
		<style:style style:name="Accent_20_3" style:display-name="Accent 3" style:family="table-cell" style:parent-style-name="Accent">
		 <style:table-cell-properties fo:background-color="#dddddd"/>
		</style:style>
		<style:style style:name="Result" style:family="table-cell" style:parent-style-name="Default">
		 <style:text-properties fo:font-style="italic" style:text-underline-style="solid" style:text-underline-width="auto" style:text-underline-color="font-color" fo:font-weight="bold" style:font-style-asian="italic" style:font-weight-asian="bold" style:font-style-complex="italic" style:font-weight-complex="bold"/>
		</style:style>
	 </office:styles>
	 <office:automatic-styles>
		<style:style style:name="co1" style:family="table-column">
		 <style:table-column-properties fo:break-before="auto" style:column-width="12.771cm"/>
		</style:style>
		<style:style style:name="co2" style:family="table-column">
		 <style:table-column-properties fo:break-before="auto" style:column-width="2.258cm"/>
		</style:style>
		<style:style style:name="co3" style:family="table-column">
		 <style:table-column-properties fo:break-before="auto" style:column-width="5.338cm"/>
		</style:style>
		<style:style style:name="ro1" style:family="table-row">
		 <style:table-row-properties style:row-height="0.452cm" fo:break-before="auto" style:use-optimal-row-height="true"/>
		</style:style>
		<style:style style:name="ro2" style:family="table-row">
		 <style:table-row-properties style:row-height="0.841cm" fo:break-before="auto" style:use-optimal-row-height="true"/>
		</style:style>
		<style:style style:name="ta1" style:family="table" style:master-page-name="Default">
		 <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
		</style:style>
		<number:number-style style:name="N1">
		 <number:number number:decimal-places="0" number:min-decimal-places="0" number:min-integer-digits="1"/>
		</number:number-style>
		<number:text-style style:name="N100">
		 <number:text-content/>
		</number:text-style>
		<style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default">
		 <style:text-properties fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
		</style:style>
		<style:style style:name="ce2" style:family="table-cell" style:parent-style-name="Default">
		 <style:table-cell-properties fo:wrap-option="wrap"/>
		 <style:text-properties style:use-window-font-color="true" style:text-outline="false" style:text-line-through-style="none" style:text-line-through-type="none" style:font-name="Liberation Serif" fo:font-size="10pt" fo:language="en" fo:country="NZ" fo:font-style="normal" fo:text-shadow="none" style:text-underline-style="none" fo:font-weight="normal" style:text-underline-mode="continuous" style:text-overline-mode="continuous" style:text-line-through-mode="continuous" style:font-name-asian="DejaVu Sans" style:font-size-asian="10pt" style:language-asian="zh" style:country-asian="CN" style:font-style-asian="normal" style:font-weight-asian="normal" style:font-name-complex="DejaVu Sans" style:font-size-complex="10pt" style:language-complex="hi" style:country-complex="IN" style:font-style-complex="normal" style:font-weight-complex="normal" style:text-emphasize="none" style:font-relief="none" style:text-overline-style="none" style:text-overline-color="font-color"/>
		</style:style>
		<style:style style:name="ce3" style:family="table-cell" style:parent-style-name="Default">
		 <style:table-cell-properties style:text-align-source="fix" style:repeat-content="false"/>
		 <style:paragraph-properties fo:text-align="end" fo:margin-left="0cm"/>
		 <style:text-properties fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
		</style:style>
		<style:style style:name="ce4" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N1"/>
		<style:style style:name="ce5" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N100"/>
		<style:style style:name="ce6" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0"/>
		<style:style style:name="gr1" style:family="graphic">
		 <style:graphic-properties draw:stroke="none" draw:fill="none" draw:textarea-horizontal-align="center" draw:textarea-vertical-align="middle" draw:ole-draw-aspect="1"/>
		 <style:paragraph-properties fo:text-align="center"/>
		</style:style>
		<style:style style:name="gr2" style:family="graphic">
		 <style:graphic-properties draw:stroke="none" svg:stroke-color="#000000" draw:fill="none" draw:fill-color="#ffffff" draw:auto-grow-width="true" fo:min-height="0.611cm"/>
		 <style:paragraph-properties style:writing-mode="lr-tb" fo:text-align="center"/>
		 <style:text-properties style:font-name="Liberation Sans" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
		</style:style>
		<style:style style:name="gr3" style:family="graphic">
		 <style:graphic-properties draw:stroke="none" svg:stroke-color="#000000" draw:fill="none" draw:fill-color="#ffffff" draw:auto-grow-width="true" fo:min-height="0.611cm"/>
		 <style:paragraph-properties style:writing-mode="lr-tb"/>
		 <style:text-properties style:font-name="Liberation Sans" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
		</style:style>
		<style:page-layout style:name="pm1">
		 <style:page-layout-properties style:writing-mode="lr-tb"/>
		 <style:header-style>
			<style:header-footer-properties fo:min-height="0.75cm" fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-bottom="0.25cm"/>
		 </style:header-style>
		 <style:footer-style>
			<style:header-footer-properties fo:min-height="0.75cm" fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0.25cm"/>
		 </style:footer-style>
		</style:page-layout>
		<style:style style:name="P1" style:family="paragraph">
		 <loext:graphic-properties draw:fill="none"/>
		 <style:paragraph-properties fo:text-align="center"/>
		</style:style>
		<style:style style:name="P2" style:family="paragraph">
		 <style:paragraph-properties fo:text-align="center"/>
		 <style:text-properties style:font-name="Liberation Sans" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
		</style:style>
		<style:style style:name="P3" style:family="paragraph">
		 <loext:graphic-properties draw:fill="none" draw:fill-color="#ffffff"/>
		 <style:paragraph-properties fo:text-align="center"/>
		 <style:text-properties style:font-name="Liberation Sans" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
		</style:style>
		<style:style style:name="P4" style:family="paragraph">
		 <loext:graphic-properties draw:fill="none" draw:fill-color="#ffffff"/>
		 <style:text-properties style:font-name="Liberation Sans" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
		</style:style>
		<style:style style:name="T1" style:family="text">
		 <style:text-properties style:font-name="Liberation Sans" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
		</style:style>
	 </office:automatic-styles>
	 <office:master-styles>
		<style:master-page style:name="Default" style:page-layout-name="pm1">
		 <style:header>
			<text:p><text:sheet-name>???</text:sheet-name></text:p>
		 </style:header>
		 <style:header-left style:display="false"/>
		 <style:header-first style:display="false"/>
		 <style:footer>
			<text:p>Page <text:page-number>1</text:page-number></text:p>
		 </style:footer>
		 <style:footer-left style:display="false"/>
		 <style:footer-first style:display="false"/>
		</style:master-page>
	 </office:master-styles>
	 <office:body>
		<office:spreadsheet>
		 <table:calculation-settings table:automatic-find-labels="false" table:use-regular-expressions="false" table:use-wildcards="true"/>
		 <table:table table:name="Service Excellence" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Our company tests and measures everything to ensure customer satisfaction.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c0q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We survey our clients regularly to determine how we can better serve them.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c0q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We analyse our mistakes as both a company and as individuals and learn from them.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c0q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We choose our clients to fit our way of doing business.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c0q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Our direction and people can change instantly to meet our customers needs.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c0q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>I would gladly give up or postpone a sale to meet my customer service agenda.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="0" calcext:value-type="float">
				<text:p>${data.c0q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="Sales Drive" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Sales processes are managed weekly and measures are taken to ensure sales forecast are met.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="0" calcext:value-type="float">
				<text:p>${data.c1q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>My sales force is successful and undergoes regular training on both product and selling skills.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c1q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>My sales force operates as a team.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c1q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>A sales rewards programme is in place.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c1q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Our sales volumes are continuously increasing.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c1q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>I am completely satisfied with my market share.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c1q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce5"/>
			 <table:table-cell table:number-columns-repeated="1023"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="Targeted Marketing" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>The company has found a niche for its product and no longer competes on price.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c2q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We only advertise when we can test and measure the results.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c2q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We constantly educate our clients on the benefits of our products and services.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c2q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Every member of our team knows and understands our unique selling proposition.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c2q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We always educate on value and never market on price.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c2q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We survey people who do not buy our products to improve our product or service.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c2q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="High-Performing Team" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Every member of the team is operating at their full potential.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c3q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>There is synergy among all the members of our team.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c3q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Team members are listened to and are encouraged to speak up and make recommendations.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c3q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>My team members are accountable for their performance.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c3q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Reporting systems are in place and adhered to.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c3q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Every member of the team enjoys their work.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c3q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="75" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="Strong Strategy Drive" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>The company has a formal business plan that sets out its strategic objectives.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c4q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>The companyʼs business plan is being used, tested, measured, and updated quarterly.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c4q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Regular planning strategy sessions are conducted with staff and management.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c4q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>The company has very good knowledge of its competitors and their practices.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c4q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>The company has the right allies to support the organisation.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c4q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>The company for the most part is going in the direction you intended it to go from its inception.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c4q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="92" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="Visible Cashflow" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>The company has an annual budget.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c5q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Budgeting processes are clearly defined and adhered to.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c5q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Financial statements are done monthly.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c5q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Supplier and Service Provider invoices are routinely paid on time.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c5q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Terms are negotiated with all suppliers, including early payment discounts.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c5q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>All budgeting is ambitious.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="0" calcext:value-type="float">
				<text:p>${data.c5q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="Productivity Prioritisation" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Operations are fully managed by systems.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c6q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Staff are accountable to complete their tasks; their deliverables are monitored and supported.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c6q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>The company is driven by both quality and profit; both are measured regularly.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c6q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Every meeting accomplishes some specific objective or outcome.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="0" calcext:value-type="float">
				<text:p>${data.c6q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Meetings between staff are scheduled in advance; spur-of-the-moment encounters are avoided.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c6q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Staff have the opportunity to communicate openly about obstacles to their production.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c6q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="50" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="Profitability Monitoring" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Profit margins have increased over the last two years.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c7q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Profits forecast increase 15% per annum.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c7q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Debt service decrease by 20% per annum.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c7q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Individual responsibilities for achieving financial goals are clearly defined.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="0" calcext:value-type="float">
				<text:p>${data.c7q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Staff and facilities are at 80% capacity.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c7q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Profitability as a rule is higher than the industry average and is not an issue for the company.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c7q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="Work-Life Balance - Wellbeing" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Everyone feels energised at the beginning of the week and fulfilled at the end of it.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c8q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Our employees work an average of less than 50 hours per week.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="0" calcext:value-type="float">
				<text:p>${data.c8q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>I am putting aside funds regularly with which to become financially independent.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c8q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We all have at least 5 daily well-being habits and I do them consistently.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="0" calcext:value-type="float">
				<text:p>${data.c8q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>My days are well planned and I never run on energy.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c8q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>I am happy with the amount of money I make.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c8q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1023"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="30" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="Effective Leadership" table:style-name="ta1">
			<table:table-column table:style-name="co1" table:default-cell-style-name="ce2"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="ce4"/>
			<table:table-column table:style-name="co2" table:number-columns-repeated="1022" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce1" office:value-type="string" calcext:value-type="string">
				<text:p>Question</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="ce1" table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Our vision is clear across the business.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c9q0}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We all lead by example.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c9q1}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We all strive for excellence, but accept and remove imperfection.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="2" calcext:value-type="float">
				<text:p>${data.c9q2}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We build a culture of accountability.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c9q3}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We learn from our own mistakes.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="1" calcext:value-type="float">
				<text:p>${data.c9q4}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro2">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>We are all self aware, and support each other as we understand each other’s strengths and weaknesses.</text:p>
			 </table:table-cell>
			 <table:table-cell office:value-type="float" office:value="0" calcext:value-type="float">
				<text:p>${data.c9q5}</text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:number-columns-repeated="1024"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="ce3" office:value-type="string" calcext:value-type="string">
				<text:p>Percentile score</text:p>
			 </table:table-cell>
			 <table:table-cell table:style-name="Default" table:formula="of:=IF(COUNT([.B2:.B7]) &gt; 0; ROUND(AVERAGE([.B2:.B7]) * 50))" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p></text:p>
			 </table:table-cell>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell table:style-name="Default"/>
			 <table:table-cell table:style-name="ce6"/>
			 <table:table-cell table:number-columns-repeated="1022"/>
			</table:table-row>
		 </table:table>
		 <table:table table:name="TOTALS" table:style-name="ta1">
			<table:shapes>
			 <draw:frame draw:z-index="0" draw:style-name="gr1" draw:text-style-name="P1" svg:width="17.666cm" svg:height="12.404cm" svg:x="6.521cm" svg:y="5.392cm">
				<draw:object draw:notify-on-update-of-ranges="TOTALS.B1:TOTALS.B10 TOTALS.B1:TOTALS.B10 TOTALS.A1:TOTALS.A10">
				 <loext:p/>
				 <office:document xmlns:chartooo="http://openoffice.org/2010/chart" xmlns:css3t="http://www.w3.org/TR/css3-text/" xmlns:grddl="http://www.w3.org/2003/g/data-view#" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:formx="urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:rpt="http://openoffice.org/2005/report" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:oooc="http://openoffice.org/2004/calc" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:ooow="http://openoffice.org/2004/writer" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0" xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" xmlns:calcext="urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0" xmlns:tableooo="http://openoffice.org/2009/table" xmlns:drawooo="http://openoffice.org/2010/draw" xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" xmlns:dom="http://www.w3.org/2001/xml-events" xmlns:field="urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:math="http://www.w3.org/1998/Math/MathML" xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0" xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0" xmlns:xforms="http://www.w3.org/2002/xforms" office:version="1.3" office:mimetype="application/vnd.oasis.opendocument.chart">
					<office:meta><meta:generator>LibreOffice/7.3.7.2$Linux_X86_64 LibreOffice_project/30$Build-2</meta:generator></office:meta>
					<office:styles>
					 <draw:gradient draw:name="Gradient_20_1" draw:display-name="Gradient 1" draw:style="linear" draw:start-color="#000000" draw:end-color="#ffffff" draw:start-intensity="100%" draw:end-intensity="100%" draw:angle="0deg" draw:border="0%"/>
					 <draw:hatch draw:name="Red_20_90_20_Degrees_20_Crossed_20_1" draw:display-name="Red 90 Degrees Crossed 1" draw:style="single" draw:color="#000000" draw:distance="0cm" draw:rotation="0"/>
					 <draw:stroke-dash draw:name="Dash" draw:style="rect" draw:dots1="1" draw:dots1-length="300%" draw:distance="100%"/>
					 <draw:stroke-dash draw:name="Dash_20_Dot_20_4" draw:display-name="Dash Dot 4" draw:style="rect" draw:dots1="1" draw:dots1-length="0.02cm" draw:dots2="1" draw:dots2-length="0.02cm" draw:distance="0.02cm"/>
					 <draw:stroke-dash draw:name="Dot_20__28_Rounded_29_" draw:display-name="Dot (Rounded)" draw:style="round" draw:dots1="1" draw:dots1-length="1%" draw:distance="199%"/>
					 <draw:stroke-dash draw:name="Long_20_Dot" draw:display-name="Long Dot" draw:style="rect" draw:dots1="1" draw:dots1-length="100%" draw:distance="300%"/>
					</office:styles>
					<office:automatic-styles>
					 <number:number-style style:name="N0">
						<number:number number:min-integer-digits="1"/>
					 </number:number-style>
					 <style:style style:name="ch1" style:family="chart">
						<style:graphic-properties draw:stroke="solid" svg:stroke-color="#2a6099"/>
					 </style:style>
					 <style:style style:name="ch2" style:family="chart">
						<style:chart-properties chart:include-hidden-cells="false" chart:treat-empty-cells="leave-gap" chart:right-angled-axes="true"/>
					 </style:style>
					 <style:style style:name="ch3" style:family="chart" style:data-style-name="N0">
						<style:chart-properties chart:display-label="true" chart:logarithmic="false" chart:origin="0" chart:reverse-direction="false" text:line-break="false" loext:try-staggering-first="false" chart:link-data-style-to-source="true" chart:visible="false" chart:axis-position="0"/>
						<style:graphic-properties svg:stroke-color="#b2b2b2"/>
						<style:text-properties fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
					 </style:style>
					 <style:style style:name="ch4" style:family="chart" style:data-style-name="N0">
						<style:chart-properties chart:display-label="true" chart:tick-marks-major-inner="false" chart:tick-marks-major-outer="false" chart:logarithmic="false" chart:minimum="0" chart:maximum="100" chart:interval-major="100" chart:interval-minor-divisor="1" chart:reverse-direction="false" text:line-break="true" loext:try-staggering-first="false" chart:link-data-style-to-source="true" chart:axis-position="0"/>
						<style:graphic-properties draw:stroke-dash="Dot_20__28_Rounded_29_" svg:stroke-width="0.01cm" svg:stroke-color="#b2b2b2" svg:stroke-linecap="round"/>
						<style:text-properties fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
					 </style:style>
					 <style:style style:name="ch5" style:family="chart">
						<style:graphic-properties draw:stroke-dash="Dash" svg:stroke-width="0.01cm" svg:stroke-color="#b3b3b3"/>
					 </style:style>
					 <style:style style:name="ch6" style:family="chart" style:data-style-name="N0">
						<style:chart-properties chart:symbol-type="none" chart:link-data-style-to-source="true" chart:data-label-number="value" chart:data-label-text="false" chart:data-label-symbol="false" chart:data-label-series="false" chart:label-position="outside"/>
						<style:graphic-properties svg:stroke-width="0.1cm" svg:stroke-color="#5eb91e" svg:stroke-opacity="90%" draw:fill-color="#5eb91e" draw:opacity="90%"/>
						<style:text-properties fo:font-size="12pt" fo:font-weight="bold" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
					 </style:style>
					 <style:style style:name="ch7" style:family="chart" style:data-style-name="N0">
						<style:chart-properties chart:symbol-type="none" chart:link-data-style-to-source="true"/>
						<style:graphic-properties svg:stroke-width="0.08cm" svg:stroke-color="#ff420e" draw:fill-color="#ff420e"/>
						<style:text-properties fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
					 </style:style>
					 <style:style style:name="ch8" style:family="chart">
						<style:graphic-properties draw:stroke="solid" svg:stroke-color="#b3b3b3" draw:fill="none" draw:fill-color="#e6e6e6"/>
					 </style:style>
					 <style:style style:name="ch9" style:family="chart">
						<style:graphic-properties svg:stroke-color="#b3b3b3" draw:fill-color="#cccccc"/>
					 </style:style>
					</office:automatic-styles>
					<office:body>
					 <office:chart>
						<chart:chart svg:width="17.667cm" svg:height="12.405cm" xlink:href=".." xlink:type="simple" chart:class="chart:radar" chart:style-name="ch1">
						 <chart:plot-area chart:style-name="ch2" table:cell-range-address="TOTALS.A1:TOTALS.B10" chart:data-source-has-labels="both" svg:x="3.273cm" svg:y="1.209cm" svg:width="10.443cm" svg:height="10.642cm">
							<chart:coordinate-region svg:x="1.429cm" svg:y="1.408cm" svg:width="14.132cm" svg:height="10.443cm"/>
							<chart:axis chart:dimension="x" chart:name="primary-x" chart:style-name="ch3" chartooo:axis-type="auto">
							 <chartooo:date-scale/>
							 <chart:categories table:cell-range-address="TOTALS.B1:TOTALS.B10"/>
							</chart:axis>
							<chart:axis chart:dimension="y" chart:name="primary-y" chart:style-name="ch4">
							 <chart:grid chart:style-name="ch5" chart:class="major"/>
							</chart:axis>
							<chart:series chart:style-name="ch6" chart:values-cell-range-address="TOTALS.B1:TOTALS.B10" chart:class="chart:radar">
							 <chart:data-point chart:repeated="10"/>
							</chart:series>
							<chart:series chart:style-name="ch7" chart:values-cell-range-address="" chart:class="chart:radar">
							 <chart:data-point/>
							</chart:series>
							<chart:wall chart:style-name="ch8"/>
							<chart:floor chart:style-name="ch9"/>
						 </chart:plot-area>
						 <table:table table:name="local-table">
							<table:table-header-columns>
							 <table:table-column/>
							</table:table-header-columns>
							<table:table-columns>
							 <table:table-column/>
							</table:table-columns>
							<table:table-header-rows>
							 <table:table-row>
								<table:table-cell>
								 <text:p/>
								</table:table-cell>
								<table:table-cell office:value-type="string">
								 <text:p>Column B</text:p>
								</table:table-cell>
							 </table:table-row>
							</table:table-header-rows>
							<table:table-rows>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="67">
								 <text:p>67</text:p>
								 <draw:g>
									<svg:desc>TOTALS.B1:TOTALS.B10</svg:desc></draw:g>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="67">
								 <text:p>67</text:p>
								 <draw:g>
									<svg:desc>TOTALS.B1:TOTALS.B10</svg:desc></draw:g>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="67">
								 <text:p>67</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="67">
								 <text:p>67</text:p>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="67">
								 <text:p>67</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="67">
								 <text:p>67</text:p>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="75">
								 <text:p>75</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="75">
								 <text:p>75</text:p>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="75">
								 <text:p>75</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="75">
								 <text:p>75</text:p>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="67">
								 <text:p>67</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="67">
								 <text:p>67</text:p>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="50">
								 <text:p>50</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="50">
								 <text:p>50</text:p>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="50">
								 <text:p>50</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="50">
								 <text:p>50</text:p>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="50">
								 <text:p>50</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="50">
								 <text:p>50</text:p>
								</table:table-cell>
							 </table:table-row>
							 <table:table-row>
								<table:table-cell office:value-type="float" office:value="50">
								 <text:p>50</text:p>
								</table:table-cell>
								<table:table-cell office:value-type="float" office:value="50">
								 <text:p>50</text:p>
								</table:table-cell>
							 </table:table-row>
							</table:table-rows>
						 </table:table>
						</chart:chart>
					 </office:chart>
					</office:body>
				 </office:document>
				</draw:object><draw:image>
				 <office:binary-data>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
					AAAAAAAAAAAAAAAAAAAAAAAAAAQAAQAAAAAAAAAkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
					AAAAAgEAHQAAABMAWFBBVEhTVFJPS0VfU0VRX0VORAAAAAAAAAAAjAABAAAAAACLAAEAAgAA
					AAMAhAABAAUAAACysrIAAQACAQBuAAAAFQBYUEFUSFNUUk9LRV9TRVFfQkVHSU4AAAAATwAA
					AAEASQAAAAEAEwAAAAIALiEAAOQZAAAuIQAAfwUAAAABAAIAAAAAAAEAAgAAAAAAAAAAAAAA
					AAAAAAAAAAAkQAEAAQAAAAAAAAAkQAAAAACEAAEABQAAALKysgABhQABAAUAAAAAAAAAAG0A
					AwBTAAAAAgAuIQAA5BkAAC4hAAB/BQAABQA6AAAAAQAKAAAAAAAAAAAAAAAAAAAAAAAAAAQA
					AQAAAAAAAAAkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEAHQAAABMAWFBBVEhTVFJP
					S0VfU0VRX0VORAAAAAAAAAAAjAABAAAAAACLAAEAAgAAAAMAkwABAGkDAABWQ0xNVEYBADEA
					AAAAAAAAAQAbAAAAAABwEgAACAwAACcWAAABFwAAXzAAAHUwAAAApBgAALkbAAAOAAAAhAAB
					AAUAAAAAAAAAAYUAAQAFAAAA////AAGKAAEA7QAAAAQA5wAAALcAU2Vnb2UgVUk7VGFob21h
					O0FyaWFsIFVuaWNvZGUgTVM7THVjaWRhIFNhbnMgVW5pY29kZTtEZWphVnUgU2FucztBbGJh
					bnkgQU1UO0FsYmFueTtBcmlhbDtOaW1idXMgU2FucyBMO0ludGVyZmFjZSBVc2VyO0dlbmV2
					YTtEaWFsb2c7THVjaWRhO0hlbHZldGljYTtIZWxtZXQ7SW50ZXJmYWNlIFN5c3RlbTtTYW5z
					IFNlcmlmAAAAAAAACwAAAEwABQAAAAUAAAAAAAAA/wMAAAAAAAAAAQD/AwAAAAAAAAAAAIgA
					AQACAAAAAACHAAEABQAAAP////8AkAABAAkAAAAAAAAAAAAAAAGLAAEAAgAAAAMAhAABAAUA
					AAAeuV4AAQACAQC2AAAAFQBYUEFUSFNUUk9LRV9TRVFfQkVHSU4AAAAAlwAAAAEAkQAAAAEA
					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
					AAAJAIwAAQAAAAAAjAABAAAAAAA=
				 </office:binary-data>
				</draw:image>
			 </draw:frame>
			 <draw:frame draw:z-index="1" draw:name="Text Frame 1" draw:style-name="gr2" draw:text-style-name="P3" svg:width="1.71cm" svg:height="0.791cm" svg:x="14.21cm" svg:y="5.75cm">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Service</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Excellence</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="2" draw:name="Text Frame 2" draw:style-name="gr3" draw:text-style-name="P4" svg:width="1.749cm" svg:height="0.791cm" draw:transform="rotate (-0.628318530717959) translate (18.051cm 6.564cm)">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Effective</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Leadership</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="3" draw:name="Text Frame 3" draw:style-name="gr2" draw:text-style-name="P3" svg:width="2.881cm" svg:height="0.791cm" draw:transform="rotate (-1.25663706143592) translate (20.532cm 8.684cm)">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Work-Life </text:span><text:span text:style-name="T1">Balance</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Wellbeing</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="4" draw:name="Text Frame 4" draw:style-name="gr2" draw:text-style-name="P3" svg:width="0.885cm" svg:height="0.791cm" draw:transform="rotate (0.628318530717959) translate (10.941cm 7.302cm)">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Sales</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Drive</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="5" draw:name="Text Frame 5" draw:style-name="gr2" draw:text-style-name="P3" svg:width="1.552cm" svg:height="0.791cm" draw:transform="rotate (1.25663706143592) translate (8.896cm 10.799cm)">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Targeted</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Marketing</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="6" draw:name="Text Frame 6" draw:style-name="gr2" draw:text-style-name="P3" svg:width="2.573cm" svg:height="0.791cm" draw:transform="rotate (-1.25663706143592) translate (9.465cm 12.463cm)">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">High-Performing</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Team</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="7" draw:name="Text Frame 7" draw:style-name="gr2" draw:text-style-name="P3" svg:width="2.456cm" svg:height="0.791cm" draw:transform="rotate (-0.628318530717959) translate (10.8cm 15.723cm)">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Strong Strategy</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Drive</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="8" draw:name="Text Frame 8" draw:style-name="gr2" draw:text-style-name="P3" svg:width="1.945cm" svg:height="0.791cm" draw:transform="rotate (0.628318530717959) translate (17.406cm 16.934cm)">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">P</text:span><text:span text:style-name="T1">r</text:span><text:span text:style-name="T1">o</text:span><text:span text:style-name="T1">d</text:span><text:span text:style-name="T1">u</text:span><text:span text:style-name="T1">c</text:span><text:span text:style-name="T1">t</text:span><text:span text:style-name="T1">i</text:span><text:span text:style-name="T1">v</text:span><text:span text:style-name="T1">i</text:span><text:span text:style-name="T1">t</text:span><text:span text:style-name="T1">y</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">P</text:span><text:span text:style-name="T1">r</text:span><text:span text:style-name="T1">i</text:span><text:span text:style-name="T1">o</text:span><text:span text:style-name="T1">r</text:span><text:span text:style-name="T1">i</text:span><text:span text:style-name="T1">t</text:span><text:span text:style-name="T1">i</text:span><text:span text:style-name="T1">s</text:span><text:span text:style-name="T1">a</text:span><text:span text:style-name="T1">t</text:span><text:span text:style-name="T1">i</text:span><text:span text:style-name="T1">o</text:span><text:span text:style-name="T1">n</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="9" draw:name="Text Frame 9" draw:style-name="gr2" draw:text-style-name="P3" svg:width="1.729cm" svg:height="0.791cm" draw:transform="rotate (1.25663706143592) translate (19.881cm 14.528cm)">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Profitability</text:span></text:p>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Monitoring</text:span></text:p>
				</draw:text-box>
			 </draw:frame>
			 <draw:frame draw:z-index="10" draw:name="Text Frame 10" draw:style-name="gr2" draw:text-style-name="P3" svg:width="2.586cm" svg:height="0.611cm" svg:x="13.69cm" svg:y="17.292cm">
				<draw:text-box>
				 <text:p text:style-name="P2"><text:span text:style-name="T1">Visible Cashflow</text:span></text:p>
				</draw:text-box>
			 </draw:frame></table:shapes>
			<table:table-column table:style-name="co3" table:default-cell-style-name="Default"/>
			<table:table-column table:style-name="co2" table:default-cell-style-name="Default"/>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Service Excellence</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;Service Excellence&apos;.B9]" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p>67</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Sales Drive</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;Sales Drive&apos;.B9]" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p>67</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Targeted Marketing</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;Targeted Marketing&apos;.B9]" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p>67</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>High-Performing Team</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;High-Performing Team&apos;.B9]" office:value-type="float" office:value="75" calcext:value-type="float">
				<text:p>75</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Strong Strategy Drive</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;High-Performing Team&apos;.B9]" office:value-type="float" office:value="75" calcext:value-type="float">
				<text:p>75</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Visible Cashflow</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;Visible Cashflow&apos;.B9]" office:value-type="float" office:value="67" calcext:value-type="float">
				<text:p>67</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Productivity Prioritisation</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;Productivity Prioritisation&apos;.B9]" office:value-type="float" office:value="50" calcext:value-type="float">
				<text:p>50</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Profitability Monitoring</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;Productivity Prioritisation&apos;.B9]" office:value-type="float" office:value="50" calcext:value-type="float">
				<text:p>50</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Work-Life Balance - Wellbeing</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;Productivity Prioritisation&apos;.B9]" office:value-type="float" office:value="50" calcext:value-type="float">
				<text:p>50</text:p>
			 </table:table-cell>
			</table:table-row>
			<table:table-row table:style-name="ro1">
			 <table:table-cell office:value-type="string" calcext:value-type="string">
				<text:p>Effective Leadership</text:p>
			 </table:table-cell>
			 <table:table-cell table:formula="of:=[&apos;Productivity Prioritisation&apos;.B9]" office:value-type="float" office:value="50" calcext:value-type="float">
				<text:p>50</text:p>
			 </table:table-cell>
			</table:table-row>
		 </table:table>
		 <table:named-expressions/>
		</office:spreadsheet>
	 </office:body>
	</office:document>`
}
