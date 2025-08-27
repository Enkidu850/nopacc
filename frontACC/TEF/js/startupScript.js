// This script file is automatically executed when a project is loaded. 
// To add a script that runs on selected cases, you should create another JavaScript file under this folder and use the  parameter '&script=[FILENAME]' in the URL address line

// Sample how to rotate the camera when the project is loaded
// SGWorld.Command.Execute (1057,0);

// Sample how to add custom tool to the analysis tool's tab - tool is opened in the Analysis panel
// analysis.addAnalysisTool ( {id:'myToolBtnID1',name:'My Tool',title:'My analysis tool',icon:'tools/MyAnalysisTool/myTool.png',action:`analysis.openAnalysisToolURL('tools/MyAnalysisTool/MyTool.html','My tool',true)`},);
// Sample how to add custom tool to the navigate tool's tab - tool is opened in the Navigate panel
//  navigate.addNavigateTool ( {id:'myToolBtnID3',name:'My Tool',title:'My navigate tool',icon:'tools/MyNavigateTool/myTool.png',action:`navigate.openNavigateToolURL('tools/MyNavigateTool/MyTool.html','My tool')`},);

// analysis.state.viewshedHiddenColor = '#ffffff';
// analysis.state.viewshedVisibileColor = '#ffffff';

// analysis.state.photoInspectorViewerMode = true; 
// settings.state.statusBarCoordinateMode = 0;

// Query tool: An option to show the pointer coordinate in another CS
// settings.state.DisplayCS = 'WGS84 UTM 36N';
// settings.state.DisplayEPSG = 32636;

// settings.setAltitudeType (1); // Force Altitude Above Sea Level
// features.state.maxAttributeFeatures = 5000; // Default is 1000

// Disable feature layer editing option (TE Plus)
// features.state.allowFeatureEditing = false;

// Change the default text for the Add Content Text Label (TEF Plus)
// addContent.state.textLabelType = 2;// 0="Text Labe" , 1="coordinates in project's CS", 2="coordinates in alternative CS"

//Disabe the right click context menu on the 3D
// application.state.enableContextMenu = false;

// Customiza the Help Center button URL
// settings.state.helpCenterURL = 'https://www.skylinesoft.com/'
