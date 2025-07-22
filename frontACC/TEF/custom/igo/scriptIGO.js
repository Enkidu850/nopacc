analysis.addAnalysisTool (
	{id:'toolIGO',
	name:'Mon tool IGO',
	title:'Mon titre de tool',
	icon:'./custom/tools/MyAnalysisTool/myTool.png',
	action:`analysis.openAnalysisToolURL('./custom/igo/toolIGO.html','IGO',true)`});
	
$("body").append("<div style='position:absolute;top:0;left:0;right:0;height:75px;background-color: #ffffffDF;color: black;'>Exemple de bandeau.</div>");