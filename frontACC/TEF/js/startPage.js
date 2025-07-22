var startPage={render:function(cb){var version=SGWorld.Version.Major+"."+SGWorld.Version.Minor+"."+SGWorld.Version.Build+"."+SGWorld.Version.Freeze;try{fetch("custom/TEConfig.json",{method:"GET",headers:{Accept:"application/json"}}).then(response=>response.json()).then(response=>{var demoPorjects="",HelpPanels=(void 0!==response.DemoProjects&&response.DemoProjects.forEach(element=>{demoPorjects+=`<div class='grid2 gridPaddingExtra link hoverHighlight' onclick='application.openDemoProjectURL("${element.projectUrl}")'>
                                            <div > <img class='startPageDemoImg' src='${element.projectImageURL}' ></div>
                                            <div> 
                                                <p class='s14 bold'>${element.projectName}</p>
                                                <p class='s9'>${element.projectDescription}</p>
                                            </div>
                                        </div>`}),"");void 0!==response.HelpPanels&&response.HelpPanels.forEach(element=>{element.text.includes("${")&&(element.text=eval(`\`${element.text}\``)),HelpPanels+=`<div class="startPagePanelBlock gridPadding grid3 link" onclick="window.location.href ='${element.URL}'">
                        <div><img src="${element.icon}" /></div>
                        <div class="gridDouble">${element.text}</div>
                        </div>`}),setTimeout(function(){$("#LoginTitleDivID").show(),$("#startPageDiv").html(`
                    <header  class="startPageHeader"></header>
                    <main class="startPageMain">
                    
                        <div class="startPagePanel ">
                        <div class="spacerAbove"></div>
                            ${HelpPanels}
                            <div class="gridPaddingExtra grid1 startPagePanelFooter">
                                <div class="link hoverHighlight" onclick="window.location.href ='${response.HelpLink}'"><img src="./images/icons/startPageHelp.svg">${Lang.startPage.help}</div>
                                <div class="link hoverHighlight" onclick="window.location.href ='./licenseAgreement.html'"><img src="./images/icons/startPageLicense.svg">${Lang.startPage.license}</div>
                                <div>${Lang.startPage.version}  ${version}</div>
                                <div>${Lang.startPage.copyright}</div>
                                <div><img class="w70" src="./custom/logo.png"></div>
                            </div>
                        </div>


                        <div class="startPageBlocks gridPadding gridLeft">
                            <div class="gridDouble s12"><span class="s48">${Lang.startPage.welcomeTEF}</span><br>
                            <div class="errorBox" id="startPageError" style="display:none"></div>
                            </div>

                            <div class="startPageBlock">
                                <div class="startPageBlockHeader s14 bold"><img src="./images/icons/startPageOpenProject.svg">${Lang.startPage.openProject}</div>
                                <div class="grid1 startPageBlockContent gridPaddingExtra">
                                    <div class="s14">${Lang.startPage.enterProjectAddress}</div>
                                    <div ><input class="startPageProjectURLInput" type="url" id="enterProjectURL" value="" onkeydown = 'if (event.keyCode === 13) {$("#EnterProjectURLBtn").click();}' placeholder="${Lang.application.enterProjectURL}" />  </div>    
                                    <div class="gridRight"><button id="EnterProjectURLBtn" class="ButtonRound py6 px12 i18n" onclick="application.reloadPage();">${Lang.startPage.load}</button></div>
                                </div>
                            </div>
                            <div class="startPageBlock">
                            <div class="startPageBlockHeader s14 bold"><img src="./images/icons/startPageSearchProject.svg">${Lang.startPage.searchProject}</div>
                            <div class="grid1 startPageBlockContent gridPaddingExtra">
                                <div class="grid3">
                                    <div> <button  class=" ButtonLarge " onclick="addContent.loadLayer('TerraExplorerProjectDesktop',0);" ><img src="./images/icons/startPageSearchCatalog.svg"><br><span>${Lang.startPage.SearchInServer}</span></button></div>
                                    <div class="gridDouble"> ${Lang.startPage.searchProjectDescription}</div>
                                </div>
                            </div>
                            </div>
                            <div class="startPageBlock">
                            <div class="startPageBlockHeader s14 bold"><img src="./images/icons/startPageRecentProjects.svg">${Lang.startPage.recentProjects}</div>
                                <div class="grid1 startPageBlockContent gridPaddingExtra">
                                    <div id="startpageRecentProjectsDiv" class="s9 recentProjects"></div>
                                </div>
                            </div>
                            <div class="startPageBlock">
                            <div class="startPageBlockHeader s14 bold"><img src="./images/icons/startPageDemos.svg">${Lang.startPage.demoProjects}</div>
                                <div class="grid1 startPageBlockContent">
                                ${demoPorjects}
                                </div>
                            </div>
                        </div>

                    </div>
                    </main>
                
                `),cb()},0)})}catch(err){application.errorHandling(err.message,0)}},dummy:null};