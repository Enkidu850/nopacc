/*********************************************
**			Fonctions Génériques			**
**********************************************/
/*
Permet de rajouter une classe css à la volée
*/
function createClass(name, rules) {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name + "{" + rules + "}", 0);
}
/*********************************************
**			Map 2D synchro					**
**********************************************/
createClass(".map2D", "position:absolute;bottom:10px;left:67px; width:350px;height:350px;background:#ffffff9f;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;border: 2px solid rgba(255, 255, 255, 0.9);border-radius: 18px;z-index:1");
createClass(".btNavMap2D", "position:absolute;bottom:10px;left:67px; width:35px;height:35px;background:#ffffff9f;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;border: 2px solid rgba(255, 255, 255, 0.97);border-radius: 5px;z-index:1");
createClass(".leaflet-container", "height: 350px;width: 350px;max-width:100%;max-height:100%;border-radius:15px;z-index:0");
createClass(".btClose2D", "position: absolute;top: 0px;right: 0px;background-color: rgba(255, 255, 255, 0.9);color: var(--Color4);z-index: 1;width: 20px;height: 20px;border-radius: 0px 14px 0px 14px;font-size: small;text-align: center;padding: 3px;cursor:pointer;");
    
let map;
let current2D={
    mouseDown2D: false,
    lastCheck: 0,
    isMouseOver2D:false
}
let sauvMinfos = {x:0,y:0};
let sauvCamPos = undefined;
let isCamMove = false;
let grpName = "Cadastre_solaire";


function init3D() {
		const idLayer = SGWorld.ProjectTree.FindItem("Données 3D par EPCI\\Pans de Toits");
		if(idLayer != "") {
			//SGWorld.ProjectTree.SetVisibility(idLayer, false);
			SGWorld.ProjectTree.DeleteItem(idLayer);
		}
}

function init2D(){
    $("body").append("<div id='popupMap2D' class='map2D'>" + 
					"	<div id='map2D' class='leaflet-container'></div>" + 
					"	<div id='btCloseNavMap2D' class='btClose2D'>" + 
					"		<img class='link imgSmall' src='images/icons/close.svg' />" + 
					"	</div>" + 
					"</div>" + 
					"<div id='btNavMap2D' class='btNavMap2D'><svg xmlns='http://www.w3.org/2000/svg' style='margin-top: 2px;margin-left: 1px;' height='32px' viewBox='0 -960 960 960' width='32px' fill='#5f6368'><path d='m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z'/></svg></div>");
	$("#btNavMap2D").fadeOut(10);
    $('<link>')
        .appendTo('head')
        .attr({
            type: 'text/css',
            rel: 'stylesheet',
            href: './custom/tools/Map2D/leaflet/leaflet.css'
        });
    $.getScript('./custom/tools/Map2D/leaflet/leaflet.js', function () {

        map = L.map('map2D', { zoomControl: false,  attributionControl: false}).setView([46.5, 2.25], 5);


        var wmsLayer = L.tileLayer('https://syaden-pcrs.ataraxie.fr/Webservices/ProxyApp.aspx?request=GetTile&Version=1.0.0&Service=WMTS&Layer=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&Style=normal&Format=image/png&TileMatrixSet=PM_0_19&TileMatrix={z}&TileRow={y}&TileCol={x}',
            {
                minZoom : 0,
                maxZoom : 18,
                tileSize : 256,
                attribution : "IGN-F/Géoportail"
            });
			/*
        var wmsLayer = L.tileLayer.wms(
			'https://IGOQLF.igo.fr/SG/Default/Streamer.ashx', {
            layers: 'igoglobe_2019.529140.I.tbp'
        });
        wmsLayer.options.crs = L.CRS.EPSG4326;
		*/
        wmsLayer.addTo(map);
        //SGWorld.Window.CenterPixelToWorld()
        map.on('mouseup', mouseup2D);
        map.on('mousedown', mousedown2D);
        map.on('zoomend', zoomend);
        map.on('mouseover', mouseover);
        map.on('mouseout', mouseout);
        SGWorld.AttachEvent("OnFrame", onFrame3D);
		SGWorld.AttachEvent('OnLButtonDown', OnLButtonDown3D);
		
           
    });
	$("#btCloseNavMap2D").on("click",()=>{ 
		$( "#popupMap2D" ).animate({
			width: [ "toggle", "swing" ],
			height: [ "toggle", "swing" ],
			opacity: "toggle"
		  }, 1500, "linear", function() {
		});
		$("#btNavMap2D").fadeIn();
	});
	$("#btNavMap2D").on("click",()=>{ 
		$( "#popupMap2D" ).animate({
			width: [ "toggle", "swing" ],
			height: [ "toggle", "swing" ],
			opacity: "toggle"
		  }, 1500, "linear", function() {
		});
		$("#btNavMap2D").fadeOut();
	});
}

function zoomend() {
    if (current2D.isMouseOver2D===true) {
        console.log("zoomend");
        onFrame3D(true, true);
    }
}
function mouseover() {
    current2D.isMouseOver2D = true;
}
function mouseout() {
    current2D.isMouseOver2D = false;
}

function getLayerMouseInfo(obj){
	
	let name ="";
	
	if(obj != undefined && obj.ObjectID != ""){
		const model = SGWorld.ProjectTree.GetObject(obj.ObjectID);
		if(model.ObjectType == 33) {

			const layer1 = SGWorld.ProjectTree.GetObject(model.LayerID);
			if(layer1 != undefined) {
				name = layer1.TreeItem.Name;
			}
		}
	}
	return name;
}

function OnLButtonDown3D(flag, X, Y)
{
	
	const obj = SGWorld.Window.PixelToWorld(X, Y, 8192);
	const name = getLayerMouseInfo(obj);
	if(name == grpName) 
	{
		fetch("/WS/getGmlid.aspx?lon=" + obj.Position.X + "&lat=" + obj.Position.Y)
		.then(response => response.json())
		.then(json => {
			if(json && json.status == "OK"){
				if(json.list.length >0){
					const layer = json.list[0].layer + "_lite";
					const gmlid = json.list[0].gmlid;
					
					console.log("resp : " + layer + " " + gmlid);
					const url = "https://igogeovendee.igo.fr/solaire/index.html?gmlid=" + gmlid + "&layer=" + layer;
					
					application.openPopupDialog(1,url,"Données",450,400,-1000);
				}							
			}						
		});
	}

}

function onFrame3D(forceRefresh,refreshZoom) {
	
	
	const minfos = SGWorld.Window.GetMouseInfo();
	const mode = SGWorld.Window.GetInputMode();
	
	if(minfos != undefined && minfos.X >=0 && minfos.Y >=0){
		
		$("#Tips3d").css("left", (minfos.X + 20) + "px");
		$("#Tips3d").css("top", (minfos.Y - 20) + "px");
				
		if(sauvMinfos.x != minfos.X || sauvMinfos.y != minfos.Y) {
			sauvMinfos.x = minfos.X;
			sauvMinfos.y = minfos.Y;
			const obj = SGWorld.Window.PixelToWorld(minfos.X, minfos.Y, 8192);
			const name = getLayerMouseInfo(obj);
			if(name == grpName && mode == 0) 
			{
				SGWorld.Window.SetInputMode(1,"../../solaire/img/cursor_x.cur", !0);
				$("#Tips3d").show();
				
			}
			else if(name != grpName && mode == 1) {
				 SGWorld.Window.SetInputMode(0);
				 $("#Tips3d").hide();
			}
			else if(mode > 1) {
				if(isCamMove == false) {
					SGWorld.Window.SetInputMode(0);
				}
				$("#Tips3d").hide();
			}
		}
	}
	else if(mode == 1)
	{
		 SGWorld.Window.SetInputMode(0);
		 $("#Tips3d").hide();
	}
	
	if(sauvCamPos == undefined) {
			sauvCamPos = SGWorld.Navigate.GetPosition();
		}
		isCamMove = false;
		if(sauvCamPos.DistanceTo(SGWorld.Navigate.GetPosition()) > 0.01)
		{
			isCamMove = true;
		}
		sauvCamPos = SGWorld.Navigate.GetPosition();
		
	
    //check toutes les 10 frames
    if (current2D.lastCheck >= 10 || (forceRefresh !== undefined && forceRefresh===true)) {

        current2D.lastCheck = 0;
        if (current2D.mouseDown2D === true || (refreshZoom !== undefined && refreshZoom === true)) {
            //Maj pos 2D => 3D
            let newCenter = map.getCenter();
            if (current2D.lastPos2D == undefined || (refreshZoom !== undefined && refreshZoom === true)  || current2D.lastPos2D.lat != newCenter.lat || current2D.lastPos2D.lng != newCenter.lng) {
                current2D.lastPos2D = newCenter;
                //Besoin de mettre à jour le pdv
                //let cp = SGWorld.Window.CenterPixelToWorld();
                //let pos = SGWorld.Navigate.GetPosition();
                //pos.X = newCenter.lng;
                //pos.Y = newCenter.lat;
                let hauteur = Math.exp(Math.log(2.0) * (25 - map.getZoom()));
                console.log(hauteur, hauteur * 2.0, map.getZoom());

				//Position en cours
				let pos = SGWorld.Navigate.GetPosition(0);
				//passage en abs
				let absPos = pos.ToAbsolute();
				//Position au centre
				let cp = SGWorld.Window.CenterPixelToWorld(-1);
				//passage en abs
				let absCPPos = cp.Position.ToAbsolute();
				
				let new3Dpos = cp.Position.ToAbsolute();
				let dist = absCPPos.DistanceTo(absPos);
				new3Dpos.Yaw = pos.Yaw;
				new3Dpos.Distance = hauteur * 2.0;
				new3Dpos.X = newCenter.lng;
				new3Dpos.Y = newCenter.lat;
				console.log(new3Dpos.Pitch,pos.Pitch,cp.Position.Pitch);
				new3Dpos.Pitch = pos.Pitch;
				SGWorld.Navigate.JumpTo(new3Dpos);
		


                //let pos = SGWorld.Creator.CreatePosition(newCenter.lng, newCenter.lat, hauteur * 2.0, 0, 0, -90, 0, 0);
                //SGWorld.Navigate.SetPosition(pos);
            }
        } else {
            //Maj pos 3D => 2D
            let newPos = SGWorld.Window.CenterPixelToWorld(-1);
            //Maj de la pos
            if (current2D.lastPos3D == undefined || current2D.lastPos3D.Position.X != newPos.Position.X || current2D.lastPos3D.Position.Y != newPos.Position.Y) {
                current2D.lastPos3D = newPos;
                //Besoin de mettre à jour le pdv
                let pos = map.getCenter();
                pos.lng = newPos.Position.X;
                pos.lat = newPos.Position.Y;


				//Position en cours
				let pos3D = SGWorld.Navigate.GetPosition(0);
				//passage en abs
				let absPos = pos3D.ToAbsolute();
				//passage en abs
				let absCPPos = newPos.Position.ToAbsolute();
				let dist = absCPPos.DistanceTo(absPos);
				
                //let palt = SGWorld.Navigate.GetPosition();
                let zoom = 25 - (Math.floor(Math.log(dist / 2.0) / Math.log(2.0)));
                //console.log(zoom, palt.Altitude, palt.Altitude * 2.0, palt.Altitude / 2.0);
                map.setView(pos, zoom);
            }
        }
    } else {
        current2D.lastCheck++;
    }
}

function mouseup2D() {
    //console.log("mouseup2D");
    //Force la maj 3D sur la dernière pos 2D
    onFrame3D(true);
    current2D.mouseDown2D = false;
}
function mousedown2D() {
    //console.log("mousedown2D");
    current2D.mouseDown2D = true;
}

/*********************************************
**			2D/3D/2D/2DNord					**
**********************************************/

/*
Outil permetant de rajouter les boutons 3D/2D/2DNord dans la barre de navigation de droite sous le +/-
*/
let lastNavigateMode=0;
function init2D3D(){
	/*
	Surcharge la fonction pour rajouter la maj de l'interface dans le menu de droite.
	*/
	navigate.navigateMode = function (mode) {
		if (mode!=lastNavigateMode){
			try {
				application.execute(this.state.navigationModeExecute[0], 0);
				for (i = 0; i < 3; i++) {
					services.highlightButton("navigateMode" + i, !1);
					services.highlightButton("btnavigateMode" + i, !1);
				}
				services.highlightButton("navigateMode" + mode, !0);
				services.highlightButton("btnavigateMode" + mode, !0);
				lastNavigateMode=mode;
				if (mode==0){
					setTimeout(()=>{nav3D();},300);
				} else if (mode==1){
					setTimeout(()=>{nav2D();},300);
					setTimeout(()=>{if (mode==lastNavigateMode){navigate.endNavigateMode(mode);}},2500);
				} else if (mode==2){
					setTimeout(()=>{nav2DN();},300);
					setTimeout(()=>{if (mode==lastNavigateMode){navigate.endNavigateMode(mode);}},2500);
				}
			} catch (err) {
				application.errorHandling(err.message, 0)
			}
		}
	}

	navigate.endNavigateMode = function (mode) {
		try {
			if (mode==1 || mode ==2){
				application.execute(this.state.navigationModeExecute[mode], 0)
			} 
		} catch (err) {
			application.errorHandling(err.message, 0)
		}
	}
	createClass(".btnavigateMode","font-weight:700;text-align:center;margin-top:3px;padding:3px;cursor:pointer;");
	createClass(".btnavigateIGO","margin-top:30px;background-color: rgba(255, 255, 255, 0.9);border-radius: var(--borderRadiusLarge);");
	createClass("#btnavigateMode0.ButtonChecked","background-color: var(--Color1);color: white;border-radius: 9px 9px 0px 0px;");
	createClass("#btnavigateMode2.ButtonChecked","background-color: var(--Color1);color: white;border-radius: 0px 0px 9px 9px;");
	createClass(".imgbtnavigatemode","margin-left: 3px;margin-top: 8px;margin-bottom: 8px;width:auto!important;");
	createClass(".btSoleilIGO","margin-top:12px;background-color: rgba(255, 255, 255, 0.9);border-radius: var(--borderRadiusLarge);");
	createClass("#btSoleilMode.ButtonChecked","background-color: var(--Color1);color: white;border-radius: var(--borderRadiusLarge);");
	createClass("#Tips3d","position: absolute;z-index:10;width:250;height:30;top:60px;left:60px;padding:8px;background-color: rgba(1, 56, 59, 0.6);color: white;border: 1px solid #ebebeb;max-width: 250px;border-radius: var(--borderRadiusLarge);");
	/*
	Rajout des boutons
	*/
	$("#navigationButtons").append('<div id="btnavigateIGO" class="btnavigateIGO"></div>');
	$("#btnavigateIGO").append('<div id="btnavigateMode0" class="btnavigateMode ButtonChecked " onclick="navigate.navigateMode(0);" title="Mode de navigation 3D"><img src="./custom/tools/MenuDroite/3D.png" class="imgbtnavigatemode" style="height:12px;"/></div>');
	$("#btnavigateIGO").append('<div id="btnavigateMode1" class="btnavigateMode" onclick="navigate.navigateMode(1);" title="Mode de navigation 2D"><img src="./custom/tools/MenuDroite/2D.png" class="imgbtnavigatemode"  style="height:12px;"/></div>');
	$("#btnavigateIGO").append('<div id="btnavigateMode2" class="btnavigateMode" onclick="navigate.navigateMode(2);" title="Mode de navigation 2D Nord"><img src="./custom/tools/MenuDroite/2DN.png" class="imgbtnavigatemode" style="height:15px;"/></div>');
	//$("#navigationButtons").css("height", "15rem");
	$("#btnavigateIGO").css("color", "var(--Color4)");
	$("#btnavigateIGO").css("font-size", "small");
	$("#navigationButtons").css("transform", "translateY(-90%)");
	//SGWorld.AttachEvent("OnFrame", onFrame2d3d);
	
	$("#navigationButtons").append('<div id="btSoleilIGO" class="btSoleilIGO"></div>');
	$("#btSoleilIGO").append('<div id="btSoleilMode" class="btnavigateMode" onclick="analysis.setShadow();" title="Activer l\'ombrage"><img src="./images/icons/Shadow.svg" class="imgbtnavigatemode"  style="height:20px;margin:6px"/></div>');
	
	$("body").append('<div id="Tips3d">Résultat cadastre solaire au clic</div>');
	$("#Tips3d").hide();
	analysis.setShadow= function() {
        try {
            analysis.state.shadowOn = !analysis.state.shadowOn,
            application.execute(2118, 0),
            services.highlightButton("shadowBtn", analysis.state.shadowOn),
            services.highlightButton("btSoleilMode", analysis.state.shadowOn),
            !analysis.state.shadowOn || analysis.state.sunOn || this.setSun()
        } catch (err) {
            application.errorHandling(err.message, 0)
        }
    }
}


	function nav2D(){
		console.log("test2D");
		let pos = SGWorld.Navigate.GetPosition(0);
		let cp = SGWorld.Window.CenterPixelToWorld(-1);
		let new3Dpos = cp.Position.ToAbsolute();
		let absCPPos = cp.Position.ToAbsolute();
		let absPos = pos.ToAbsolute();
		let dist = absCPPos.DistanceTo(absPos);
		new3Dpos.Yaw = pos.Yaw;
		new3Dpos.Distance = dist;
		new3Dpos.Pitch = -89.9;
		SGWorld.Navigate.FlyTo(new3Dpos);
	}

	function nav3D(){
		console.log("test3D");
		let pos = SGWorld.Navigate.GetPosition(0);
		let cp = SGWorld.Window.CenterPixelToWorld(-1);
		let new3Dpos = cp.Position.ToAbsolute();
		let absCPPos = cp.Position.ToAbsolute();
		let absPos = pos.ToAbsolute();
		let dist = absCPPos.DistanceTo(absPos);
		new3Dpos.Yaw = pos.Yaw;
		new3Dpos.Distance = dist;
		new3Dpos.Pitch = -45;
		SGWorld.Navigate.FlyTo(new3Dpos);
		
	}

	function nav2DN(){
		//console.log("test2DN");
		let pos = SGWorld.Navigate.GetPosition(0);
		let cp = SGWorld.Window.CenterPixelToWorld(-1);
		let new3Dpos = cp.Position.ToAbsolute();
		let absCPPos = cp.Position.ToAbsolute();
		let absPos = pos.ToAbsolute();
		let dist = absCPPos.DistanceTo(absPos);
		new3Dpos.Yaw = 0;
		new3Dpos.Distance = dist;
		new3Dpos.Pitch = -89.9;
		SGWorld.Navigate.FlyTo(new3Dpos);
		
	}
/*
let current2D3D = {
    actif: false,
    pos: undefined,
    mode: undefined
}
function onFrame2d3d() {
    //current2D3D.pos = SGWorld.Navigate.GetPosition();
    //console.log(current2D3D.pos.Yaw, current2D3D.pos.Pitch, current2D3D.pos.Yaw % 360, current2D3D.pos.Pitch % 360);
    if (current2D3D.actif === true && current2D3D.mode !== undefined) {
        current2D3D.pos = SGWorld.Navigate.GetPosition();
        current2D3D.pos.Yaw = Math.round(current2D3D.pos.Yaw);
        current2D3D.pos.Pitch = Math.round(current2D3D.pos.Pitch);
        if (current2D3D.pos.Pitch < 270) {
            current2D3D.pos.Pitch = 360;
        }
        let endNord = true;
        if (current2D3D.mode == 2) {//2DN
            endNord = false;
            if (current2D3D.pos.Yaw != 0 && current2D3D.pos.Yaw != 360) {
                if (current2D3D.pos.Yaw > 180) {
                    current2D3D.pos.Yaw++;
                } else {
                    current2D3D.pos.Yaw--;
                }
            }
            if (current2D3D.pos.Yaw === 0 || current2D3D.pos.Yaw === 360) {
                endNord = true;
            }
        }
        let endPitch = false;
        if (current2D3D.mode == 0) {
            //On va vers le -75
            if (current2D3D.pos.Pitch < 305) { //360-55
                current2D3D.pos.Pitch++;
            }
            if (current2D3D.pos.Pitch >= 305) {
                endPitch = true;
            }
        } else {
            //On va vers le -90
            if (current2D3D.pos.Pitch > 270) {//360-90
                current2D3D.pos.Pitch--;
            }
            if (current2D3D.pos.Pitch <= 270) {
                endPitch = true;
            }

        }
        SGWorld.Navigate.SetPosition(current2D3D.pos);
        console.log(current2D3D.pos.Yaw, current2D3D.pos.Pitch, current2D3D.mode, endPitch, endNord);
        if (endNord && endPitch) {
            navigate.endNavigateMode(current2D3D.mode);
            current2D3D.actif = false;
            current2D3D.mode = undefined;
        }
    }
}*/
/*****************************************
**			Select Layer				**
******************************************/
/*
Outil permetant de rajouter les layer avec la selection
*/
function initSelectLayer(){
	createClass(".divLayers", "position:absolute;top:10px;right:10px; z-index:1;display: flex;flex-direction: column;justify-content: end;align-items: end;");
	createClass(".divOthersLayers", "margin-top:5px;display: flex;flex-direction: row;justify-content: end;align-items: end;");//background:#ffffff9f;
	createClass(".divLayer", "margin-left:5px;");
	createClass(".imgLayer", "height: 50px;width: 50px;max-width:50px;max-height:50px;border:3px solid #ffffffb3;cursor:pointer;margin:0;border-radius:5px;");
	createClass(".imgSelected", "border:3px solid #00adef;margin:0;");
	/*
	Rajout des boutons
	*/
	$("body").append('<div id="divLayers" class="divLayers">' +
		'   <div onclick="setVisibleOL();"><img id="mainImgLayer" class="imgLayer" src="./custom/tools/MenuLayer/img/ListeCouche.JPG" alt="Liste des couches"/></div>' +
		'   <div id="divOthersLayers" class="divOthersLayers">' +
		'       <div id="divLayer_Sat" class="divLayer" onclick="selectLayer(\'Sat\');" title="Calque principal">' +
		'           <img id="imgLayer_Sat" class="imgLayer imgSelected" src="./custom/tools/MenuLayer/img/ListeCouche.JPG" alt="Calque principal"/>' +
		'       </div>' +
		'   </div>' +
		'</div>');
		
    initListeCouches();
    setVisibleOL(false);
}

let idDirLayers = undefined;
function setVisibleOL(visible) {
    if (visible == undefined) {
        visible = !$("#divOthersLayers").is(":visible");//Toggle
    }
    if (visible == true) {
        $("#divOthersLayers").show();
    } else {
        $("#divOthersLayers").hide();
    }
}

function selectLayer(id) {
    let idSel = $(".imgSelected")[0]!==undefined?$(".imgSelected")[0].id:"Sat";
    idSel = idSel.substring(idSel.indexOf('_') + 1);
    //idDirLayers
    if (idDirLayers !== undefined && idDirLayers !== SGWorld.ProjectTree.RootID) {
        SGWorld.ProjectTree.SetVisibility(idDirLayers, false);
    }

    $(".imgSelected").removeClass("imgSelected");
    if (id !== undefined && id !== SGWorld.ProjectTree.RootID) {
        if (id !== "Sat" && idSel !== id) {
            SGWorld.ProjectTree.SetVisibility(id, true);
            let currentName = SGWorld.ProjectTree.GetItemName(id);
            $("#mainImgLayer").prop("src", "./custom/tools/MenuLayer/img/" + currentName + ".JPG");
            $("#imgLayer_" + id).addClass("imgSelected");

        } else {
            //Force select sur Sat
            $("#mainImgLayer").prop("src", "./custom/tools/MenuLayer/img/ListeCouche.JPG");
            $("#imgLayer_Sat").addClass("imgSelected");
        }
    }
    setVisibleOL(false);
}

function initListeCouches() {
    idDirLayers = SGWorld.ProjectTree.FindItem("Calques");
    if (idDirLayers !== SGWorld.ProjectTree.RootID) {
        let current = SGWorld.ProjectTree.GetNextItem(idDirLayers, 11);
        while (current) {
            // append node name to the tree string
            let currentName = SGWorld.ProjectTree.GetItemName(current);
            $("#divOthersLayers").append('<div id="divLayer_' + current + '" class="divLayer" onclick="selectLayer(\'' + current + '\');" title="' + currentName + '">' +
                '   <img id="imgLayer_' + current + '" class="imgLayer" src="./custom/tools/MenuLayer/img/' + currentName + '.JPG" alt="' + currentName + '"/>' +
                '</div>');
            current = SGWorld.ProjectTree.GetNextItem(current, 13 /* ItemCode.NEXT*/);

        }

    } else {
        //Pas de gestionnaire de couche
        $("#divLayers").hide();
    }
}

/*****************************************
**			Tous les inits				**
******************************************/
$(function () {
    //Minimap2D
	init2D();
	//Boutons 3D/2D/2DN
	init2D3D();
	//Gestion du fond de plan principal
	
	init3D();
	initSelectLayer();
	
});