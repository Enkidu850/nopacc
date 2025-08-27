/*
Outil permetant de rajouter les boutons 3D/2D/2DNord dans la barre de navigation de droite sous le +/-

/*
Surcharge la fonction pour rajouter la maj de l'interface dans le menu de droite.
*/
navigate.navigateMode = function (mode) {
    try {
        application.execute(this.state.navigationModeExecute[0], 0);
    } catch (err) {
        application.errorHandling(err.message, 0)
    }
    current2D3D.actif = true;
    current2D3D.mode = mode;
}

navigate.endNavigateMode = function (mode) {
    try {
        for (i = 0; i < 3; i++) {
            services.highlightButton("navigateMode" + i, !1);
            services.highlightButton("btnavigateMode" + i, !1);
        }
        services.highlightButton("navigateMode" + mode, !0),
            services.highlightButton("btnavigateMode" + mode, !0),
            application.execute(this.state.navigationModeExecute[mode], 0)
    } catch (err) {
        application.errorHandling(err.message, 0)
    }
}
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
createClass(".btnavigateMode","font-weight:700;text-align:center;margin-top:3px;padding:3px;cursor:pointer;");
/*
Rajout des boutons
*/
$("#navigationButtons").append('<div id="btnavigateMode0" class="btnavigateMode ButtonChecked " onclick="navigate.navigateMode(0);" title="Mode de navigation 3D">3D</div>');
$("#navigationButtons").append('<div id="btnavigateMode1" class="btnavigateMode" onclick="navigate.navigateMode(1);" title="Mode de navigation 2D">2D</div>');
$("#navigationButtons").append('<div id="btnavigateMode2" class="btnavigateMode" onclick="navigate.navigateMode(2);" title="Mode de navigation 2D Nord"><center>2D<br/>Nord</center></div>');
$("#navigationButtons").css("height", "15rem");
$("#navigationButtons").css("color", "var(--Color4)");
$("#navigationButtons").css("font-size", "small");

SGWorld.AttachEvent("OnFrame", onFrame2d3d);
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
}