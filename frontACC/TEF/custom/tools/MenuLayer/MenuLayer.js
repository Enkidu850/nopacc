/*
Outil permetant de rajouter les layer avec la selection
*/
/*
Permet de rajouter une classe css à la volée pour définir le style des boutons.
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


$(function () {
    initListeCouches();
    setVisibleOL(false);
});