analysis.addAnalysisTool (
	{id:'toolIGO',
	name:'L outil 2 Simon',
	title:'Mon titre de tool',
	icon:'./custom/simon/solar-panel.png',
	action:`analysis.openAnalysisToolURL('./custom/simon/simon2.html','IGO',true)`});
	
	$("body").append("<div style='position:absolute;top:0;left:0;right:0;height:45px;background-color:#FF5733;opacity:0.8;color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:24px;'>APPLICATION DU CADASTRE SOLAIRE   <img src='./custom/simon/solar-panel.png' width='40' height='40'></div>");