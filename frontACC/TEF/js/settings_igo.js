var settings={state:{quality:null,units:null,unitString:"",unitString2:"",altitudeType:null,altitudeTypeString:"",unitRatio:1,unitRatio2:1e3,headUpDisplay:0,showNavigationControls:!0,showCenterSign:!1,showStatusBar:!0,statusBarCoordinateMode:0,showMGRS:!1,globalShadowColor:null,isFrenchLanguage:!1,sevirityColor:["#ff0000","#FF8330","#808080"],tabs:2,DisplayCS:"",DisplayEPSG:null,helpCenterURL:"https://support.skylinesoft.com/hc/en-us/categories/7556878990492-TerraExplorer-Fusion",last:null},init:function(){try{settings.render(),this.getRecentProjects($("#recentProjectsDiv")),SGWorld.SetParam(8013,1),SGWorld.SetOptionParam("UseTerrainFadeIfAvailable",0),SGWorld.SetOptionParam("LatLongCoordinates",0),SGWorld.SetOptionParam("ZoomMode",1),settings.state.isFrenchLanguage="fr"===navigator.language.substring(0,2),settings.onShow()}catch(err){application.errorHandling(err.message,0)}},onShow:function(){try{$("#errorLoggerCounterID").text(application.getErrorLogCount()),settings.state.headUpDisplay=settings.state.quality=SGWorld.GetOptionParam("HeadUpDisplay"),settings.state.showNavigationControls=settings.getHeadUpDisplay(10),$("#showNavigationControlsID").prop("checked",settings.state.showNavigationControls),settings.state.showNavigationControls?$("#navigationButtons").show():$("#navigationButtons").hide(),settings.state.showCenterSign=settings.getHeadUpDisplay(11),$("#showCenterSignID").prop("checked",settings.state.showCenterSign),settings.state.showCenterSign?$("#centerSignID").show():$("#centerSignID").hide(),settings.state.showStatusBar=settings.getHeadUpDisplay(12),$("#showStatusBarID").prop("checked",settings.state.showStatusBar),settings.showStatusBar(),settings.state.quality=SGWorld.GetOptionParam("TerrainModelQuality"),$("#qualityID").val(settings.state.quality),settings.state.units=SGWorld.GetOptionParam("AltitudeAndDistance"),$("#unitsID").val(settings.state.units),settings.setUnits(),settings.state.altitudeType=SGWorld.GetOptionParam("AltitudeType"),$("#altitudeTypeID").val(settings.state.altitudeType),settings.state.altitudeTypeString=0==settings.state.altitudeType?Lang.settings.AGL:"",settings.state.showMGRS=SGWorld.GetOptionParam("ShowMGRS"),$("#showMGRSID").prop("checked",settings.state.showMGRS),this.showMGRS(),settings.state.statusBarCoordinateMode=SGWorld.GetOptionParam("PyramidImageFormat"),$("#statusBarModeID").val(settings.state.statusBarCoordinateMode),settings.setStatusBarMode(),settings.initPostEffects();var version=SGWorld.Version.Major+"."+SGWorld.Version.Minor+"."+SGWorld.Version.Build+"."+SGWorld.Version.Freeze,TEVersion=application.state.TEPLUS?"Plus":"",copyrightText=($("#TerraExplorerVersion").text(version+` ${TEVersion} `),settings.state.globalShadowColor=SGWorld.Creator.CreateColor(),settings.state.globalShadowColor.FromABGRColor(SGWorld.GetOptionParam("GlobalShadowColor")),$("#globalShadowColor").val(settings.state.globalShadowColor.ToHTMLColor()),SGWorld.Project.Settings("CopyrightText")+" ");$("#copyrightID").text(copyrightText)}catch(err){application.errorHandling(err.message,0)}},render:function(){try{$("body").append(`  
      <div id="settingsMain" class="settingsGrid gridPadding spacerAbove" style="display:none"> 

        <div > <img src='images/icons/settingsQuality.svg'> </div>
        <div  > 
            <div class='propertiesTitleLarge'>${Lang.settings.quality} </div>
            <div class=''>
                <select id="qualityID" onchange="settings.SetOptionParam ('TerrainModelQuality',this.value)">
                    <option value=0>${Lang.settings.normal}</option>
                    <option value=1>${Lang.settings.high}</option>
                    <option value=2>${Lang.settings.best}</option>
                    <option value=3>${Lang.settings.fourK}</option>
                </select>
            </div>   
        </div>

        <div > <img src='images/icons/settingsProjects.svg'> </div>
        <div class='link2' onclick="panel.addAndShow(0,'settingsProjects','${Lang.settings.projects}',null,panel.state.widthSmall,panel.state.heightLarge,false,0);"> 
          <div class='propertiesTitleLarge'>${Lang.settings.projects} </div>
          <div class=''> ${Lang.settings.projectDescription}</div>
        </div>

        <div > <img src='images/icons/settingsView.svg'> </div>
        <div class='link2' onclick="panel.addAndShow(0,'settingsView','${Lang.settings.view}',null,panel.state.widthSmall,panel.state.heightLarge,false,0);"> 
          <div class='propertiesTitleLarge'>${Lang.settings.view} </div>
          <div class=''> ${Lang.settings.viewDescription}</div>
        </div>

        
        <div > <img src='images/icons/settingsGraphics.svg'> </div>
        <div class='link2' onclick="panel.addAndShow(0,'settingsGraphics','${Lang.settings.graphics}',null,panel.state.widthSmall,panel.state.heightLarge,false,0);"> 
          <div class='propertiesTitleLarge'>${Lang.settings.graphics} </div>
          <div class=''> ${Lang.settings.graphicsDescription}</div>
        </div>

        <div > <img src='images/icons/settingsLogger.svg'> </div>
        <div class='link2' onclick="settings.showErrorLog()"> 
          <div class='propertiesTitleLarge'>${Lang.settings.errorLogger} [ <span  id="errorLoggerCounterID"></span> ]</div>
          <div class=''> ${Lang.settings.errorLoggerDescription}</div>
        </div>

        
        <div > <img src='images/icons/settingsSystem.svg'> </div>
        <div class='link2' onclick="panel.addAndShow(0,'settingsSystem','${Lang.settings.systemInformation}',null,panel.state.widthSmall,panel.state.heightLarge,false,0);"> 
          <div class='propertiesTitleLarge'>${Lang.settings.systemInformation} </div>
          <div class=''> ${Lang.settings.systemInfoDescription}</div>
        </div>

    </div>`),$("body").append(`  
    <div id="settingsProjects" class="grid3 gridPadding gridRowGapLarge spacerAbove" style="display:none"> 
        <div class='gridTriple propertiesTitle'> ${Lang.settings.openAnotherProject} </div>
        <div class='gridDouble'>${Lang.settings.LoadAnotherProject}</div>
        <div class='gridRight'>                     
            <button id="loadProjectBtn" class=" i18n" onclick="addContent.loadLayer('TerraExplorerProjectDesktop',0)"> ${Lang.settings.load} </button>
        </div>
        <div class="gridTriple seperator"></div>
        <div class='gridTriple propertiesTitle'> ${Lang.settings.recentProjects} </div>
        <div class='gridTriple '> 
          <div id="recentProjectsDiv"></div>
        </div>
        <div class="gridTriple seperator"></div>
        <div class='gridTriple propertiesTitle'> ${Lang.settings.TED} </div>
        <div class='gridDouble '> ${Lang.settings.openInPlus} </div>
        <div class='gridRight'>                     
          <button class=" i18n" onclick="application.openInTED()" >  ${Lang.settings.open}</button>
        </div>   
        <div class='gridTriple highlightBackground'>${Lang.settings.learnMore}<span class=" link3" onclick="window.open('https://www.skylinesoft.com/terraexplorer-for-desktop/', '_blank').focus() ;">${Lang.settings.learnMoreBtn}</span></div>
  </div>`),$("body").append(`  
  <div id='settingsView' class='grid2 gridPadding gridRowGapLarge spacerAbove' style="display:none">
      <div class='gridDouble propertiesTitle'> ${Lang.settings.units}</div>
      <div class='gridLeft'>${Lang.settings.altitudeDistance}</div>
      <div class='gridRight'>
              <select id="unitsID" onchange="settings.setUnits()">
                  <option value=0>${Lang.settings.KmMeters}</option>
                  <option value=1>${Lang.settings.milesFeet}</option>
              </select>
      </div>
      <div class='gridLeft'>${Lang.settings.altitudeReference}</div>
      <div class='gridRight'>
              <select id="altitudeTypeID" onchange="settings.setAltitudeType(null)">
                  <option value=0>${Lang.settings.aboveGroundLevel}</option>
                  <option value=1>${Lang.settings.absoluteValues}</option>
              </select>
      </div>
      <div class='gridLeft'>${Lang.settings.MGRSCoordinates}</div>
      <div class='gridRight'>
              <label class="switch">
                  <input type="checkbox" id="showMGRSID" checked onchange="settings.showMGRS()">
                  <span class="slider round"></span>
              </label>		
      </div>
      <div class="gridDouble seperator"></div>
      <div class='gridDouble propertiesTitle'> ${Lang.settings.view}</div>
      <div class='gridLeft'>${Lang.settings.navigationControls}</div>
      <div class='gridRight'>
              <label class="switch">
                  <input type="checkbox" id="showNavigationControlsID" checked onchange="settings.showNavigationControls()">
                  <span class="slider round"></span>
              </label>		
      </div>
      <div class='gridLeft'>${Lang.settings.centerSign}</div>
      <div class='gridRight'>
              <label class="switch">
                  <input type="checkbox" id="showCenterSignID" checked onchange="settings.showCenterSign()">
                  <span class="slider round"></span>
              </label>		
      </div>
      <div class='gridLeft'>${Lang.settings.statusBar}</div>
      <div class='gridRight'>
              <label class="switch">
                  <input type="checkbox" id="showStatusBarID" checked onchange="settings.showStatusBar()">
                  <span class="slider round"></span>
              </label>		
      </div>
      <div class='gridLeft'>${Lang.settings.statusBarMode}</div>
      <div class='gridRight'>
              <select id="statusBarModeID" onchange="settings.setStatusBarMode()">
                  <option value=0>${Lang.settings.statusBarViewer}</option>
                  <option value=1>${Lang.settings.statusBarPointer}</option>
              </select>
      </div>
  </div>`),$("body").append(`  
    <div id='settingsGraphics' class='grid2 gridPadding gridRowGapLarge spacerAbove' style="display:none">
      <div class='gridDouble propertiesTitle'> ${Lang.settings.postEffects} </div>
      <div class='gridLeft'>${Lang.settings.depthPerception}</div>
      <div class='gridRight'>
          <label class="switch">
              <input type="checkbox" id="depthPerceptionID" checked onchange="settings.depthPerception()">
              <span class="slider round"></span>
          </label>		
      </div>
      <div class='gridLeft'>${Lang.settings.saturation}</div>
      <div class='gridRight'>
              <input type="range" id="saturationSlider" oninput="settings.SetOptionParam ('Saturation',this.value)" min="-100" max="100" >
      </div>
      <div class='gridLeft'>${Lang.settings.brightness}</div>
      <div class='gridRight'>                 
              <input type="range" id="brightnessSlider" oninput="settings.SetOptionParam ('Brightness',this.value)" min="-100" max="100">
      </div>     
      <div class='gridLeft'>${Lang.settings.contrast}</div>
      <div class='gridRight'>                                        
              <input type="range" id="contrastSlider" oninput="settings.SetOptionParam ('Contrast',this.value)" min="-100" max="100">
      </div>                                                
      <div class='gridLeft'>${Lang.settings.gamma}</div>
      <div class='gridRight'>                     
              <input type="range" id="gammaSlider" oninput="settings.SetOptionParam ('Gamma',this.value/10)" min="0" max="100">
      </div>                          
      <div class='gridLeft'></div>
      <div class='gridRight'>                     
              <button id="settingsDefault" class=" i18n" onclick="settings.resetPostEffects()">${Lang.settings.resetDefault}</button>
      </div>
      <div class="gridDouble seperator"></div>
      <div class='gridDouble propertiesTitle'> ${Lang.settings.shadow} </div>
      <div class='gridLeft'>${Lang.settings.globalShadow}</div>
      <div class='gridRight'>                     
              <input type="color" id="globalShadowColor" class="demo" value="#ffffff" onchange="settings.setShadowColor()">
      </div>    
    </div>`),$("body").append(`  
    <div id='settingsSystem' class='grid2 gridPadding gridRowGapLarge spacerAbove' style="display:none">
        <div class='gridDouble propertiesTitle'> ${Lang.settings.about} </div>
        <!--<div class='gridLeft'>${Lang.settings.TEF}</div>-->
		<div class='gridLeft'>Version : </div>
        <div class='gridRight'>                     
                <span  id="TerraExplorerVersion" class="s9"></span> 
        </div>
        <div class='gridLeft'>Réalisation IGO 2024</div>
        <div class='gridRight'> 
				<a href="mailto:contact@igo.fr">contact@igo.fr</a>
        </div>
		<!--
        <div class='gridLeft'>${Lang.settings.helpCenter}</div>
        <div class='gridRight'>                     
                <button class=" i18n" onclick="settings.openHelpCenter()">${Lang.settings.open}</button>
        </div>
        
        <div class='gridLeft'>${Lang.settings.licenseNotices}</div>
        <div class='gridRight'>                     
                <button class=" i18n" onclick="window.open('./licenseAgreement.html', '_blank');">${Lang.settings.show}</button>
        </div>
		-->
    </div>`),$("body").append(`  
             <div id='errorLog' class='grid1 gridRowGapLarge spacerAbove gridPadding' style="display:none">    
            </div>`)}catch(err){application.errorHandling(err.message,0)}},resize:function(height){},setUnits:function(){try{settings.state.units=+$("#unitsID").val(),SGWorld.SetOptionParam("AltitudeAndDistance",settings.state.units),settings.state.unitString=0==settings.state.units?Lang.settings.Meter:Lang.settings.Feet,settings.state.unitString2=0==settings.state.units?Lang.settings.Km:Lang.settings.Mile,settings.state.unitRatio=0==settings.state.units?1:3.28084,settings.state.unitRatio2=0==settings.state.units?1e3:5280}catch(err){application.errorHandling(err.message,0)}},getHeadUpDisplay:function(index){try{return 0==(settings.state.headUpDisplay&1<<index)}catch(err){return!0}},setHeadUpDisplay:function(index,on){try{on?settings.state.headUpDisplay&=~(1<<index):settings.state.headUpDisplay|=1<<index,SGWorld.SetOptionParam("HeadUpDisplay",settings.state.headUpDisplay)}catch(err){return!0}},formatDistance(value,digits){try{return 1e4<value?(value*settings.state.unitRatio/settings.state.unitRatio2).toFixed(digits)+" "+settings.state.unitString2:(value*settings.state.unitRatio).toFixed(digits)+" "+settings.state.unitString}catch(err){application.errorHandling(err.message,0)}},setAltitudeType:function(forceValue){try{null!=forceValue&&$("#altitudeTypeID").val(forceValue),settings.state.altitudeType=$("#altitudeTypeID").val(),SGWorld.SetOptionParam("AltitudeType",settings.state.altitudeType),settings.state.altitudeTypeString=0==settings.state.altitudeType?Lang.settings.AGL:""}catch(err){application.errorHandling(err.message,0)}},showMGRS:function(){try{settings.state.showMGRS=$("#showMGRSID").is(":checked")?1:0,SGWorld.SetOptionParam("ShowMGRS",settings.state.showMGRS),settings.state.showMGRS?$("#MGRSID").show():$("#MGRSID").hide()}catch(err){application.errorHandling(err.message,0)}},SetOptionParam(property,val){try{SGWorld.SetOptionParam(property,val)}catch(err){application.errorHandling(err.message,0)}},initPostEffects(){try{$("#saturationSlider").val(SGWorld.GetOptionParam("Saturation")),$("#brightnessSlider").val(SGWorld.GetOptionParam("Brightness")),$("#contrastSlider").val(SGWorld.GetOptionParam("Contrast")),$("#gammaSlider").val(10*SGWorld.GetOptionParam("Gamma")),$("#depthPerceptionID").prop("checked",SGWorld.GetOptionParam("DepthPerception"))}catch(err){application.errorHandling(err.message,0)}},resetPostEffects:function(){try{SGWorld.SetOptionParam("ResetPostEffects",0),SGWorld.SetOptionParam("DepthPerception",0),settings.initPostEffects()}catch(err){application.errorHandling(err.message,0)}},depthPerception:function(){try{SGWorld.SetOptionParam("DepthPerception",$("#depthPerceptionID").is(":checked")?1:0)}catch(err){application.errorHandling(err.message,0)}},setShadowColor:function(){try{settings.state.globalShadowColor.FromHTMLColor($("#globalShadowColor").val()),settings.state.globalShadowColor.SetAlpha(.5),SGWorld.SetOptionParam("GlobalShadowColor",settings.state.globalShadowColor.ToABGRColor())}catch(err){application.errorHandling(err.message,0)}},showNavigationControls:function(){try{settings.state.showNavigationControls=$("#showNavigationControlsID").is(":checked"),settings.state.showNavigationControls?$("#navigationButtons").show():$("#navigationButtons").hide(),settings.setHeadUpDisplay(10,settings.state.showNavigationControls)}catch(err){application.errorHandling(err.message,0)}},showCenterSign:function(){try{settings.state.showCenterSign=$("#showCenterSignID").is(":checked"),settings.state.showCenterSign?$("#centerSignID").show():$("#centerSignID").hide(),settings.setHeadUpDisplay(11,settings.state.showCenterSign)}catch(err){application.errorHandling(err.message,0)}},showStatusBar:function(){try{settings.state.showStatusBar=$("#showStatusBarID").is(":checked"),settings.state.showStatusBar?($("#statusBarID").show(),application.state.isMobile&&($("#toolbox").css("bottom","1.2rem"),$("#panelDiv").css("bottom","5rem"))):($("#statusBarID").hide(),application.state.isMobile&&($("#toolbox").css("bottom","0rem"),$("#panelDiv").css("bottom","3.8rem"))),settings.setHeadUpDisplay(12,settings.state.showStatusBar)}catch(err){application.errorHandling(err.message,0)}},setStatusBarMode:function(){try{settings.state.statusBarCoordinateMode=$("#statusBarModeID").val(),SGWorld.SetOptionParam("PyramidImageFormat",settings.state.statusBarCoordinateMode)}catch(err){application.errorHandling(err.message,0)}},showErrorLog:function(){try{let errorLogDiv=$("#errorLog");var newDiv;errorLogDiv.empty(),0==application.getErrorLogCount()?(newDiv=$("<div>").text(Lang.settings.noMessages),errorLogDiv.append(newDiv)):$.each(application.state.errorLog,function(index,value){var newDiv=$("<div>"),backgroundColor=settings.state.sevirityColor[Math.abs(value[0])];newDiv.append($(`<span class='s9inv errorLogNumber' style='background-color:${backgroundColor}'>${index+1}</span>`)),newDiv.append($(`<span> ${value[1]}</span>`)),errorLogDiv.append(newDiv)}),panel.addAndShow(0,"errorLog",""+Lang.settings.errorLogger,null,panel.state.widthSmall,panel.state.heightMedium,!1,0)}catch(err){application.errorHandling(err.message,0)}},getRecentProjects:function(div){try{for(var projectName,projects=SGWorld.GetParam(8500).split("|"),recentText="<ul class='recentProjectsList'>",i=0;i<projects.length&&i<10;i++)null!=projects[i]&&""!=projects[i]&&void 0!==projects[i]&&(projectName=projects[i].split("/").pop(),recentText+=`<li><span class='link2' onclick='application.reloadPageURL("${projects[i]}");'>${projectName} </span></li>`);recentText+="</ul>",div.html(recentText)}catch(err){application.errorHandling(err.message,0)}},openHelpCenter:function(){try{window.open(settings.state.helpCenterURL,"_blank")}catch(err){application.errorHandling(err.message,0)}},dummy:null};