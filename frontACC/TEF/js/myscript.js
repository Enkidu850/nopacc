
// This example script file is automatically activated when a project is loaded. 
// To use this custom startup script, use the "&script=myscript.js' URL parameter.
// You can add additional startup script files under this folder

//rotate when the project is opened
SGWorld.Command.Execute (1057,0);

//Add a custom tool under the analysis panel that adds a button to rotate
// analysis.addAnalysisTool ( {id:"myToolBtnID",name:'My Tool',title:'My analysis tool',icon:"tools/MyAnalysisTool/myTool.png",action:`analysis.openAnalysisToolURL('tools/MyAnalysisTool/MyTool.html','My tool',true)`},);

// Sample how to add custom tool to the navigate tool's tab
// navigate.addNavigateTool ( {id:"myToolBtnID",name:'My Tool',title:'My navigate tool',icon:"tools/MyNavigateTool/myTool.png",action:`navigate.openNavigateToolURL('tools/MyNavigateTool/MyTool.html','My tool')`},);

