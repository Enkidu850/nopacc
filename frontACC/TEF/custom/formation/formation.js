// This script file is automatically executed when a project is loaded. 
// To add a script that runs on selected cases, you should create another JavaScript file under this folder and use the  parameter '&script=[FILENAME]' in the URL address line

// Sample how to rotate the camera when the project is loaded
// SGWorld.Command.Execute (1057,0);

// Sample how to add custom tool to the analysis tool's tab - tool is opened in the Analysis panel
// analysis.addAnalysisTool ( {id:'myToolBtnID1',name:'My Tool',title:'My analysis tool',icon:'./custom/tools/MyAnalysisTool/myTool.png',action:`analysis.openAnalysisToolURL('./custom/tools/MyAnalysisTool/MyTool.html','My tool',true)`},);
// Sample how to add custom tool to the navigate tool's tab - tool is opened in the Navigate panel
//  navigate.addNavigateTool ( {id:'myToolBtnID3',name:'My Tool',title:'My navigate tool',icon:'./custom/tools/MyNavigateTool/myTool.png',action:`navigate.openNavigateToolURL('./custom/tools/MyNavigateTool/MyTool.html','My tool')`},);

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


//SGWorld.ProjectTree.LoadFlyLayer("https://igogeovendee.igo.fr/sg/test/projects/Load_fly_test.425615", "");
console.log("ok");

// Création de la div de recherche
$("body").append(`
	<div class='fenetre'>
		<div class='innerDiv'>
			<p>Recherche par nom</p>
			<div style='display: flex; margin-bottom: 10px;'>
				<input id='inputRechercheFormation' type='text' placeholder='recherche...' value='sydev' />
				<input class='btnPopup' type='button' value='Rechercher' onclick='rechercheFormation(\"name\")' />
			</div>
			<p>Recherche par id</p>
			<div style='display: flex;'>
				<input id='inputRechercheFormation_FromID' type='text' placeholder='recherche...' value='12991' />
				<input class='btnPopup' type='button' value='Rechercher' onclick='rechercheFormation(\"id\")' />
			</div>
		</div>
	</div>
	<style>
		.fenetre {
			background-color: white;
			position: absolute;
			bottom: 13px;
			left: 75px;
			height: 21%;
			width: 400px;
		}
		.fenetre * {
			font-family: Verdana;
		}
		#inputRechercheFormation, #inputRechercheFormation_FromID {
			border: solid 1px #5d0f6d;
			border-radius: 25px;
			margin-left: 1vw;
			margin-right: 1vw;
			width: 80%;
		}
		input[type='text'] {
			font-family: Verdana;
		}
		.btnPopup {
			background: linear-gradient(to right, #5d0f6d 50%, #ffffff 50%);
			background-size: 210% 110%;
			background-position: left bottom;
			transition: background-position 0.5s ease-out, color 0.5s ease-out;
			cursor: pointer;
			border: solid 1px #5d0f6d;
			color: white;
			border-radius: 25px;
			margin-right: 1vw;
			padding-top: 5px;
			padding-bottom: 5px;
			padding-left: 10px;
			padding-right: 10px;
		}
		.btnPopup:hover {
			background-position: right bottom;
		    color: #5d0f6d;
		}
		.fenetre .innerDiv p {
			color: #5d0f6d;
			font-size: 1rem;
			font-weight: bold;
			margin: 5px 1vw 5px 1vw;
			
		}
		.innerDiv {
			position: relative;
			display: block;
			top: 45%;
			transform: translateY(-50%);
		}
	</style>
`);

let idLayer = SGWorld.ProjectTree.FindItem("cadastre_solaire.nopacc_pdl_geo.440764");
let layerPDL = undefined;
if (idLayer!=SGWorld.ProjectTree.RootID){
	layerPDL = SGWorld.ProjectTree.GetLayer(idLayer);
}
let url = "http://localhost:8000/custom/formation/popupFormation.html?id=";
let idPopup=12991;

let var_test = 0;
let currentObject = null;
let hoveredObject = null;


function test() {
	// Fonction de test pour vérifier si le clic fonctionne
	// Ne sert plus à rien
	if (currentObject) {
		console.log("Test :", var_test);
		var_test++;
		isClicked = true;
		currentObject = null;
	}
}
SGWorld.AttachEvent("OnObjectUnderCursorChanged", function (obj) {
	// Détecte si la souris est au-dessus d'un point
	// pour pouvoir détecter si le point est cliqué avec la fonction OnLButtonClicked

	if (obj) {
		hoveredObject = obj;
	} else {
		hoveredObject = null;
	}
	console.log("Objet sous le curseur :", hoveredObject);
});

function fiche_recherche(id, x, y) {
	// Fonction appelée pour afficher la fiche de recherche du point
	// Est appelée dans la fonction lien_choisi(id, x, y)
	console.log(id);
	// Permet de zoomer sur le point
	let pos = SGWorld.Creator.CreatePosition(x, y, 0, 2, 0, -75, 0, 1000);
	console.log("Position créée :", pos);
	SGWorld.Navigate.FlyTo(pos, 0);

	if ($("#rechercheIFrame").length) $("#rechercheIFrame").remove();
	$("body").append(`
		<iframe
			id='rechercheIFrame'
			style='
				position: absolute;
				top: 13px;
				left: 75px;
				width: 350px;
				height: 75%;
				background-color: white;
				border: none;
			'
			src='${url}${id}'
			allow='cross-origin-isolated'
		>
		</iframe>
	`);
}

function lien_choisi(id, x, y) {
	// Fonction appelée lorsque l'on clique sur un lien dans la div d'affichage des points
	// Permet d'être appelé dans la string du append de #choix-point
	$("#choix-point").remove(); // Supprimer la div d'affichage des points
	console.log("Point choisi :", id);
	fiche_recherche(id, x, y);
}

SGWorld.AttachEvent("OnLButtonClicked", async (flags, x, y) => {
	// si souris sur point et que clic effectué alors,

	if (hoveredObject) {
		console.log("Objet cliqué :", hoveredObject);
		
		// Code à utiliser si quelqu'un y arrive moi personnellement non

		// window.parent.postMessage("Hello depuis l'iframe", "*");
		// .charge {
        //     cursor: wait !important;
        // }
		// window.addEventListener("message", function (event) {
		// 	console.log("Message reçu de l'iframe :", event.data);
		// 	$(".ThreeDView").addClass("charge");
		// });
		// $("#tef").addClass("charge");

		// const fullObject = SGWorld.ProjectTree.GetObject(hoveredObject);
		// if (fullObject) {
		// 	console.log("Objet complet :", fullObject);
		// }
		// rechercheFormation();
		const point = SGWorld.Window.PixelToWorld(x, y, 4326);
		let geometrie = point.Position;
		let coord = [
			geometrie.X,
			geometrie.Y,
			0
		];

		let recherche = true;

		let angle = 360 / 32;
		let x_i = 0;
		let y_i = 0;
		let distance = 0.0008;
		let points = [];

		// Création d'un polygone autour du point cliqué
		// 32 points pour faire un cercle
		for (let i = 0; i < 32; i++) {
			x_i = geometrie.X + distance * Math.cos((angle * i) * (Math.PI / 180));
			y_i = geometrie.Y + distance * Math.sin((angle * i) * (Math.PI / 180));
			// console.log("x :", x_i, "y :", y_i);
			points.push(x_i);
			points.push(y_i);
			points.push(0);
		}
		// Création du polygone à partir des points
		var linearRing = SGWorld.Creator.GeometryCreator.CreateLinearRingGeometry(points);
		var polygon = SGWorld.Creator.GeometryCreator.CreatePolygonGeometry(linearRing, null);
		console.log("Polygon créé :", polygon);

		let point_geom = SGWorld.Creator.GeometryCreator.CreatePointGeometry(coord);
		var elements = layerPDL.ExecuteSpatialQuery(polygon, 1);
		console.log("Point :", point);
		console.log("X du point :", point.Position.X);
		console.log("Y du point :", point.Position.Y);
		console.log("X de la nvlle geom :", point_geom.X);
		console.log("Y de la nvlle geom :", point_geom.Y);
		console.log("Element trouvé :", elements);
		//console.log(elements.Item(0).Geometry.X, elements.Item(0).Geometry.Y);

		// Création de la div de choix des points s'il y a plusieurs éléments dans le périmètre du clic
		let is_div_needed = true;
		let div = undefined;
		if (is_div_needed) {
			// Supprimer l'ancienne div si elle existe
			const old_div = document.getElementById("choix-point");
			if (old_div) old_div.remove();

			// Créer une nouvelle div pour afficher les informations
			div = document.createElement("div");
			div.id = "choix-point";

			const width = 400;
			const height = 150;
			const screenPoint = SGWorld.Window.PixelFromWorld(point.Position);
			// Positionner la div en haut à droite de la souris
			div.style.left = `${screenPoint.X}px`;
			div.style.top = `${screenPoint.Y - height}px`;
			div.style.width = `${width}px`;
			div.style.height = `${height}px`;
			div.style.position = "absolute";
			div.style.backgroundColor = "white";
			div.style.overflow = "scroll";
			div.style.padding = "5px";
			div.style.fontFamily = "Verdana";
			div.style.fontSize = "0.9rem";
			div.style.color = "black";
		}
		// Si plusieurs éléments trouvés, on affiche la div avec les informations
		if (elements.Count > 1) {
			console.log("AGGGGGGGGGGGGGGGGGGGGGGGGGGAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRRRRRRGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
			$("body").append(div);
			recherche = false;

			// Si clic à l'extérieur de la div d'affichage des points, on la supprime
			SGWorld.AttachEvent("OnLButtonClicked", function (event) {
				const div_liens = document.getElementById("choix-point");
				// if (div_liens) {
				// 	console.log("OnLButtonClicked :", event);
				// }
				if (div_liens && !div_liens.contains(event.target)) {
					console.log("Clic à l'extérieur de la div d'affichage des points, suppression de la div.");
					// div_liens.remove(); // Supprimer la div d'affichage des points
				}
			});
		}

		// Pour chaque point trouvé dans le périmètre, on ajoute un lien dans la div d'affichage des points
		for (let i = 0; i < elements.Count; i++) {
			let element = elements.Item(i);
			let id = parseInt(element.DataSourceFeatureID, 10);
			let x = element.Geometry.X;
			let y = element.Geometry.Y;
			await new Promise(resolve => {
				$.ajax({
					url: "http://localhost:5297/pdl/" + id,
					method: "GET",
					dataType: "json",
					success: function (data) {
						nom_patrimony = data.nom_patrimony;
						console.log("Ahahhaghgzahagzjbgshzbasazj :", element);
						// Ajout d'une balise <p> avec le nom du patrimoine et un onclick pour faire apparaître la fiche de recherche du point
						$("#choix-point").append(`
							<p style='margin-bottom: 3px;' onclick='lien_choisi(${id}, ${x}, ${y})'>Nom : ${nom_patrimony}</p>
							<style>
							#choix-point p:hover {
								text-decoration: underline;
								text-decoration-thickness: 3px;
								text-decoration-color: #5d0f6d;
								cursor: pointer;
							}
							</style>
						`);
						console.log(nom_patrimony, "ajouté");
						// $("#item-" + i).data("element", element);
						resolve(); // Résoudre la promesse après l'ajout de l'élément
					},
					error: function (xhr, status, error) {
						console.error(" Erreur AJAX :", error);
						resolve(); // Résoudre la promesse même en cas d'erreur
					}
				});
				console.log("Element n°", i, ":", element.Geometry.X, element.Geometry.Y);
			});
		}

		if (recherche) {
			// djunchuniuzebcnezuiabnceizab
			console.log("AHJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJBYZYZYZJBUXE 2AY789XB NE280BXC 2E08 BJXC82YEJ0 BXCEG287JIABXC2GE87");
			try {
				let objet = elements.Item(0);
				let id = parseInt(objet.DataSourceFeatureID, 10);
				let x = objet.Geometry.X;
				let y = objet.Geometry.Y;
				fiche_recherche(id, x, y);
			} catch (e) {
				console.error(" Erreur d'affichage de la fiche", e);
			}
		}
	}
	hoveredObject = null; // évite les clics multiples sur le même survol
});



SGWorld.AttachEvent("OnObjectAction", function (id) {
	// Fonction expérimentale de test
	// sert à rien
	console.log("OnAction :", id);
});

function tryPopup(){
	// Inutile + ne fonctionne pas

	let popup = SGWorld.Creator.CreateMessage(4,url + idPopup,1,true);
	console.log("msg :", popup);
	popup.UseEdge=true;
	//SGWorld.Window.ShowPopup(popup); // Impossible ShowPopup demande un 
	
}
function tryPopupMessage(){
	// Inutile + ne fonctionne pas

	let popup = SGWorld.Creator.CreatePopupMessage("Exemple popup",url + idPopup,10, 10,300,500,-1);
	console.log("popup_msg :", popup);
	try {
		SGWorld.Window.ShowPopup(popup);
		console.log("Popup affiché avec succès.");
	} catch (e) {
		console.error("Erreur lors de l'affichage du popup :", e);
	}
}


function rechercheFormation(type){
	// Affiche la div de recherche lorsqu'on clique sur le bouton de recherche
	// après avoir rentré un nom ou un id dans les champs de recherche

	console.log($("#inputRechercheFormation").val());
	let nom = $("#inputRechercheFormation").val();
	let id = $("#inputRechercheFormation_FromID").val();

	// Champ recherche nom
	if (type == "name") {
		$.get("https://igogeovendee.igo.fr/ws_Formation/formation.aspx?q=" + nom, (retour) => {
			if (retour.status == "OK") {
				console.log("OK", retour);
				coord = retour.list[0];
				$("body").append(`
					<iframe
						id='rechercheIFrame'
						style='
							position: absolute;
							top: 13px;
							left: 75px;
							width: 350px;
							height: 75%;
							background-color: white;
							border: none;
						'
						src='${url}${coord.id}'
						allow='cross-origin-isolated'
					>
					</iframe>
				`);
				// let pos = SGWorld.Creator.CreatePosition(coord.x, coord.y, 0, 2, 0, -75, 0, 1000);
				// console.log("Position créée :", pos);
				// SGWorld.Navigate.FlyTo(pos, 0);
			} else {
				console.log("Erreur", retour);
			}
		});

	// Champ recherche id
	} else if (type == "id") {
		$.get("https://igogeovendee.igo.fr/ws_Formation/formation.aspx?id=" + id, (retour) => {
			if (retour.status == "OK") {
				console.log("OK", retour);
				attr = retour.list[0];
				$("body").append(`
					<iframe
						id='rechercheIFrame'
						style='
							position: absolute;
							top: 13px;
							left: 75px;
							width: 350px;
							height: 75%;
							background-color: white;
							border: none;
						'
						src='${url}${id}'
						allow='cross-origin-isolated'
					>
					</iframe>
				`);
				// let pos = SGWorld.Creator.CreatePosition(attr.x, attr.y, 0, 2, 0, -75, 0, 1000);
				// console.log("Position créée :", pos);
				// SGWorld.Navigate.FlyTo(pos, 0);
			} else {
				console.log("Erreur", retour);
			}
		});
	}
}
function closeIFrame(){
// Supprime l'iframe de recherche si elle existe
	$("#rechercheIFrame").remove();
}
function tableauIFrame(){
// Fonction pour afficher l'iframe de tableau
	$("body").append('<iframe id="tableau" src="http://localhost:8000/custom/formation/tableau.html"></iframe>');
}

window.addEventListener("message", function(event) {
	// Écoute les messages provenant des différentes iframes
	// et effectue des actions en fonction de l'URL reçue dans le message
	// Ce bloc sert de relais de communication tel que : iframe 1 -> parent -> iframe 2
	console.log("Message reçu dans le parent :", event.data);
	switch (event.data.url) {

		// Origine : popupFormation.html
		// Destination : tableau.html
		// Contenu : donnnees -> id, x, y des points du périmètre
		// Supplément : Création de l'iframe tableau
		// Supplément 2 : Deux postMessage envoyés à l'iframe tableau qui transfèrent donnees
		// Objectif : Afficher iframe tableau
		case "http://localhost:8000/custom/formation/tableau.html":
			console.log("Message reçu :", event.data);
			const divExistante = document.getElementById("iframe-container");
			console.log("Vérification de l'existence de l'iframe :", divExistante); // null la première fois
			if (!divExistante) {
				console.log("Création de la nouvelle iframe avec l'URL :", event.data.url);

				const container = document.createElement("div");
				container.id = "iframe-container";
				container.style.position = "absolute";
				container.style.top = "74px";
				container.style.right = "50px";
				container.style.width = "66%";
				container.style.height = "90%";
				container.style.zIndex = "1000";
				container.style.backgroundColor = "white";
				container.style.boxShadow = "inset 0 50px rgb(180, 179, 179), 0 0 10px black";

				const closeButton = document.createElement("button");
				closeButton.textContent = "Fermer";
				closeButton.style.position = "absolute";
				closeButton.style.top = "7px";
				closeButton.style.right = "10px";
				closeButton.style.background = "linear-gradient(to right, #5d0f6d 50%, rgb(180, 179, 179) 50%)";
				closeButton.style.backgroundSize = "210% 110%";
				closeButton.style.backgroundPosition = "left bottom";
				closeButton.style.transition = "background-position 0.5s ease-out, color 0.5s ease-out";
				closeButton.style.color = "white";
				closeButton.style.border = "solid 1px #5d0f6d";
				closeButton.style.borderRadius = "25px";
				closeButton.style.padding = "5px 10px";
				closeButton.style.cursor = "pointer";
				closeButton.addEventListener("mouseover", function() {
					closeButton.style.backgroundPosition = "right bottom";
					closeButton.style.color = "#5d0f6d";
				});
				closeButton.addEventListener("mouseout", function() {
					closeButton.style.backgroundPosition = "left bottom";
					closeButton.style.color = "white";
				});

				const reduceButton = document.createElement("button");
				reduceButton.textContent = "Réduire";
				reduceButton.style.position = "absolute";
				reduceButton.style.top = "7px";
				reduceButton.style.right = "81px";
				reduceButton.style.background = "linear-gradient(to right, #5d0f6d 50%, rgb(180, 179, 179) 50%)";
				reduceButton.style.backgroundSize = "210% 110%";
				reduceButton.style.backgroundPosition = "left bottom";
				reduceButton.style.transition = "background-position 0.5s ease-out, color 0.5s ease-out";
				reduceButton.style.color = "white";
				reduceButton.style.border = "solid 1px #5d0f6d";
				reduceButton.style.borderRadius = "25px";
				reduceButton.style.padding = "5px 10px";
				reduceButton.style.cursor = "pointer";
				reduceButton.addEventListener("mouseover", function () {
					reduceButton.style.backgroundPosition = "right bottom";
					reduceButton.style.color = "#5d0f6d";
				});
				reduceButton.addEventListener("mouseout", function () {
					reduceButton.style.backgroundPosition = "left bottom";
					reduceButton.style.color = "white";
				});

				const titre = document.createElement("h2");
				titre.textContent = "Fiche du périmètre";
				titre.style.textAlign = "center";
				titre.style.marginTop = "70px";
				titre.style.marginBottom = "10px";
				titre.style.color = "#5d0f6d";
				titre.style.fontFamily = "Verdana";
				titre.style.fontSize = "20px";
				titre.style.fontWeight = "bold";
				container.appendChild(titre);

				const nouvelleIframe = document.createElement("iframe");
				nouvelleIframe.id = "tableau";
				nouvelleIframe.src = event.data.url;
				nouvelleIframe.style.width = "100%";
				nouvelleIframe.style.height = "80%";
				nouvelleIframe.style.border = "none";
				nouvelleIframe.style.position = "absolute";
				nouvelleIframe.style.bottom = "0";
				nouvelleIframe.style.backgroundColor = "white";
				nouvelleIframe.style.zIndex = "9999";
				//nouvelleIframe.style.boxShadow = "inset 0 5px 5px rgba(180, 179, 179, 0.32)";

				closeButton.addEventListener("click", function() {
					console.log("Fermeture de l'iframe");
					document.body.removeChild(container);
				});
				reduceButton.addEventListener("click", function() {
					if (reduceButton.textContent === "Réduire") {
						console.log("Réduction de l'iframe");
						container.style.height = "50px";
						nouvelleIframe.style.height = "0";
						titre.style.marginTop = "13px";
					} else {
						console.log("Restauration de l'iframe");
						container.style.height = "90%";
						nouvelleIframe.style.height = "80%";
						titre.style.marginTop = "70px";
					}
					reduceButton.textContent = reduceButton.textContent === "Réduire" ? "Restaurer" : "Réduire";
				});

				container.appendChild(closeButton);
				container.appendChild(reduceButton);
				container.appendChild(nouvelleIframe);
				document.body.appendChild(container);
				console.log("Nouvelle iframe créée avec succès.");

				$("#iframe-container").draggable({
					containment: "window",
					distance: 0,
					opacity: 0.9
				});
				console.log("Iframe draggable activé.");
			} else {
				console.log("AHJGHZJGAHBHAJBJAHB JZB AJKB ZJKBJAKBJZKBJKBJZBAHJVZBHVAHVHZA")
				document.body.appendChild(document.getElementById("iframe-container"));
			}
			const iframeTableau = document.getElementById("tableau");
			console.log("ENVOI MESSAGE");
			iframeTableau.addEventListener("load", function() {
				iframeTableau.contentWindow.postMessage({
					type: "nouveau",
					donnees: event.data.donnees
				}, "*");
				console.log("MESSAGE ENVOYE");
			});
			if (iframeTableau.contentDocument && iframeTableau.contentDocument.readyState === "complete") {
				iframeTableau.contentWindow.postMessage({
					type: "nouveau",
					donnees: event.data.donnees
				}, "*");
				console.log("MESSAGE ENVOYE 2");
			}
			break;

		// Origine : popupFormation.html
		// Destination : tableauProjet.html
		// Contenu : donnees -> JSON du point (tiré du LocalStorage) ; nom -> nom du projet
		// Supplément : Création de l'iframe tableauProjet
		// Supplément 2 : Deux postMessage envoyés à l'iframe tableauProjet qui transfèrent donnees et nom
		// Objectif : Afficher iframe tableauProjet
		case "http://localhost:8000/custom/formation/tableauProjet.html":
			console.log("Message reçu :", event.data);
			const divExistante_2 = document.getElementById("iframe-container");
			console.log("Vérification de l'existence de l'iframe :", divExistante_2); // null la première fois
			if (!divExistante_2) {
				console.log("Création de la nouvelle iframe avec l'URL :", event.data.url);

				const container = document.createElement("div");
				container.id = "iframe-container";
				container.style.position = "absolute";
				container.style.top = "74px";
				container.style.right = "50px";
				container.style.width = "66%";
				container.style.height = "90%";
				container.style.zIndex = "1000";
				container.style.backgroundColor = "white";
				container.style.boxShadow = "inset 0 50px rgb(180, 179, 179), 0 0 10px black";

				const closeButton = document.createElement("button");
				closeButton.textContent = "Fermer";
				closeButton.style.position = "absolute";
				closeButton.style.top = "7px";
				closeButton.style.right = "10px";
				closeButton.style.background = "linear-gradient(to right, #5d0f6d 50%, rgb(180, 179, 179) 50%)";
				closeButton.style.backgroundSize = "210% 110%";
				closeButton.style.backgroundPosition = "left bottom";
				closeButton.style.transition = "background-position 0.5s ease-out, color 0.5s ease-out";
				closeButton.style.color = "white";
				closeButton.style.border = "solid 1px #5d0f6d";
				closeButton.style.borderRadius = "25px";
				closeButton.style.padding = "5px 10px";
				closeButton.style.cursor = "pointer";
				closeButton.addEventListener("mouseover", function () {
					closeButton.style.backgroundPosition = "right bottom";
					closeButton.style.color = "#5d0f6d";
				});
				closeButton.addEventListener("mouseout", function () {
					closeButton.style.backgroundPosition = "left bottom";
					closeButton.style.color = "white";
				});

				const reduceButton = document.createElement("button");
				reduceButton.textContent = "Réduire";
				reduceButton.style.position = "absolute";
				reduceButton.style.top = "7px";
				reduceButton.style.right = "81px";
				reduceButton.style.background = "linear-gradient(to right, #5d0f6d 50%, rgb(180, 179, 179) 50%)";
				reduceButton.style.backgroundSize = "210% 110%";
				reduceButton.style.backgroundPosition = "left bottom";
				reduceButton.style.transition = "background-position 0.5s ease-out, color 0.5s ease-out";
				reduceButton.style.color = "white";
				reduceButton.style.border = "solid 1px #5d0f6d";
				reduceButton.style.borderRadius = "25px";
				reduceButton.style.padding = "5px 10px";
				reduceButton.style.cursor = "pointer";
				reduceButton.addEventListener("mouseover", function () {
					reduceButton.style.backgroundPosition = "right bottom";
					reduceButton.style.color = "#5d0f6d";
				});
				reduceButton.addEventListener("mouseout", function () {
					reduceButton.style.backgroundPosition = "left bottom";
					reduceButton.style.color = "white";
				});

				const titre = document.createElement("h2");
				titre.textContent = "Fiche du périmètre";
				titre.style.textAlign = "center";
				titre.style.marginTop = "70px";
				titre.style.marginBottom = "10px";
				titre.style.color = "#5d0f6d";
				titre.style.fontFamily = "Verdana";
				titre.style.fontSize = "20px";
				titre.style.fontWeight = "bold";
				container.appendChild(titre);

				const nouvelleIframe = document.createElement("iframe");
				nouvelleIframe.id = "tableau";
				nouvelleIframe.src = event.data.url;
				nouvelleIframe.style.width = "100%";
				nouvelleIframe.style.height = "80%";
				nouvelleIframe.style.border = "none";
				nouvelleIframe.style.position = "absolute";
				nouvelleIframe.style.bottom = "0";
				nouvelleIframe.style.backgroundColor = "white";
				nouvelleIframe.style.zIndex = "9999";
				//nouvelleIframe.style.boxShadow = "inset 0 5px 5px rgba(180, 179, 179, 0.32)";

				closeButton.addEventListener("click", function () {
					console.log("Fermeture de l'iframe");
					document.body.removeChild(container);
				});
				reduceButton.addEventListener("click", function () {
					if (reduceButton.textContent === "Réduire") {
						console.log("Réduction de l'iframe");
						container.style.height = "50px";
						nouvelleIframe.style.height = "0";
						titre.style.marginTop = "13px";
					} else {
						console.log("Restauration de l'iframe");
						container.style.height = "90%";
						nouvelleIframe.style.height = "80%";
						titre.style.marginTop = "70px";
					}
					reduceButton.textContent = reduceButton.textContent === "Réduire" ? "Restaurer" : "Réduire";
				});

				container.appendChild(closeButton);
				container.appendChild(reduceButton);
				container.appendChild(nouvelleIframe);
				document.body.appendChild(container);
				console.log("Nouvelle iframe créée avec succès.");

				$("#iframe-container").draggable({
					containment: "window",
					distance: 0,
					opacity: 0.9
				});
				console.log("Iframe draggable activé.");
			} else {
				console.log("AHJGHZJGAHBHAJBJAHB JZB AJKB ZJKBJAKBJZKBJKBJZBAHJVZBHVAHVHZA")
				document.body.appendChild(document.getElementById("iframe-container"));
			}
			const iframeTableau_2 = document.getElementById("tableau");
			console.log("ENVOI MESSAGE");
			iframeTableau_2.addEventListener("load", function() {
				iframeTableau_2.contentWindow.postMessage({
					type: "sauvegarde",
					donnees: event.data.donnees,
					nom: event.data.nom
				}, "*");
				console.log("MESSAGE ENVOYE");
			});
			if (iframeTableau_2.contentDocument && iframeTableau_2.contentDocument.readyState === "complete") {
				iframeTableau_2.contentWindow.postMessage({
					type: "sauvegarde",
					donnees: event.data.donnees,
					nom: event.data.nom
				}, "*");
				console.log("MESSAGE ENVOYE 2");
			}
			break;
		
		// Origine : tableau.html ; tableauProjet.html
		// Destination : popupFormation.html
		// Contenu : aucun
		// Supplément : Envoi d'un message à l'iframe de recherche pour lui demander de se rafraîchir
		// Objectif : Refresh popupFormation
		case "http://localhost:8000/custom/formation/popupFormation.html":
			console.log("HII HIIII (michale jackson)");
			const iframeRecherche = document.getElementById("rechercheIFrame");
			iframeRecherche.contentWindow.postMessage({
				message: "refresh"
			}, "*");
			break;
	}
});