// This is a sample code to add on-app buttons and otherr HTML elements to replace the built-in toolbox 
//  and standard GUI. This script should be coupled with the sampleCustomButtons.css file
// To activate this script use the URL parameters: '&script=sampleCustomButtons.js&css=sampleCustomButtons'

var distanceAction = `analysis.openAnalysisToolURL('./Tools/DistanceMeasurement/distanceMeasurement.html','distance',true,panel.state.widthSmall,panel.state.heightMedium)`
var areaAction = `analysis.openAnalysisToolURL('./Tools/AreaMeasurement/areaMeasurement.html','area',true,panel.state.widthSmall,panel.state.heightMedium)`
var loadFetures = `toolbox.selectTool('layers',false); `;
$("#applicationDiv").append (`
<button id="myButton1" class=" ButtonLarge button1 link" onclick="${distanceAction}">Distance</button>    
<button id="myButton2" class=" ButtonLarge button2 link" onclick="${areaAction}">Area</button>    
<button id="myButton3" class=" ButtonLarge button3 link" onclick="${loadFetures}">Layers</button>    
`);
$("#navigationButtons").hide()