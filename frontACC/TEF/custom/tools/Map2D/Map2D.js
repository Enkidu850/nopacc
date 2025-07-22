
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
createClass(".map2D", "position:absolute;bottom:0;left:57px; width:350px;height:350px;background:#ffffff9f");
createClass(".leaflet-container", "height: 350px;width: 350px;max-width:100%;max-height:100%;");
let map;
let current={
    mouseDown2D: false,
    lastCheck: 0,
    isMouseOver2D:false
}
function init2D(){
    $("body").append("<div id='popupMap2D' class='map2D'><div id='map2D' class='leaflet-container'></div></div>");
    $('<link>')
        .appendTo('head')
        .attr({
            type: 'text/css',
            rel: 'stylesheet',
            href: './custom/tools/Map2D/leaflet/leaflet.css'
        });
    $.getScript('./custom/tools/Map2D/leaflet/leaflet.js', function () {

        map = L.map('map2D', { zoomControl: false }).setView([46.5, 2.25], 5);

        var wmsLayer = L.tileLayer.wms('https://IGOQLF.igo.fr/SG/Default/Streamer.ashx', {
            layers: 'igoglobe_2019.529140.I.tbp'
        });
        wmsLayer.options.crs = L.CRS.EPSG4326;
        wmsLayer.addTo(map);
        //SGWorld.Window.CenterPixelToWorld()
        map.on('mouseup', mouseup2D);
        map.on('mousedown', mousedown2D);
        map.on('zoomend', zoomend);
        map.on('mouseover', mouseover);
        map.on('mouseout', mouseout);
        SGWorld.AttachEvent("OnFrame", onFrame3D);
    });
}

function zoomend() {
    if (current.isMouseOver2D===true) {
        console.log("zoomend");
        onFrame3D(true, true);
    }
}
function mouseover() {
    current.isMouseOver2D = true;
}
function mouseout() {
    current.isMouseOver2D = false;
}

function onFrame3D(forceRefresh,refreshZoom) {
    //check toutes les 10 frames
    if (current.lastCheck >= 10 || (forceRefresh !== undefined && forceRefresh===true)) {
        current.lastCheck = 0;
        if (current.mouseDown2D === true || (refreshZoom !== undefined && refreshZoom === true)) {
            //Maj pos 2D => 3D
            let newCenter = map.getCenter();
            if (current.lastPos2D == undefined || (refreshZoom !== undefined && refreshZoom === true)  || current.lastPos2D.lat != newCenter.lat || current.lastPos2D.lng != newCenter.lng) {
                current.lastPos2D = newCenter;
                //Besoin de mettre à jour le pdv
                //let cp = SGWorld.Window.CenterPixelToWorld();
                //let pos = SGWorld.Navigate.GetPosition();
                //pos.X = newCenter.lng;
                //pos.Y = newCenter.lat;
                let hauteur = Math.exp(Math.log(2.0) * (25 - map.getZoom()));
                console.log(hauteur, hauteur * 2.0, map.getZoom());

                let pos = SGWorld.Creator.CreatePosition(newCenter.lng, newCenter.lat, hauteur * 2.0, 0, 0, -90, 0, 0);
                SGWorld.Navigate.SetPosition(pos);
            }
        } else {
            //Maj pos 3D => 2D
            let newPos = SGWorld.Window.CenterPixelToWorld();
            //Maj de la pos
            if (current.lastPos3D == undefined || current.lastPos3D.Position.X != newPos.Position.X || current.lastPos3D.Position.Y != newPos.Position.Y) {
                current.lastPos3D = newPos;
                //Besoin de mettre à jour le pdv
                let pos = map.getCenter();
                pos.lng = newPos.Position.X;
                pos.lat = newPos.Position.Y;

                let palt = SGWorld.Navigate.GetPosition();
                let zoom = 25 - (Math.floor(Math.log(palt.Altitude / 2.0) / Math.log(2.0)));
                //console.log(zoom, palt.Altitude, palt.Altitude * 2.0, palt.Altitude / 2.0);
                map.setView(pos, zoom);
            }
        }
    } else {
        current.lastCheck++;
    }
}

function mouseup2D() {
    console.log("mouseup2D");
    //Force la maj 3D sur la dernière pos 2D
    onFrame3D(true);
    current.mouseDown2D = false;
}
function mousedown2D() {
    console.log("mousedown2D");
    current.mouseDown2D = true;
}

$(function () {
    init2D();
});