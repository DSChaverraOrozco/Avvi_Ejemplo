gdjs.InicioCode = {};
gdjs.InicioCode.localVariables = [];
gdjs.InicioCode.GDBannerObjects1= [];
gdjs.InicioCode.GDBannerObjects2= [];
gdjs.InicioCode.GDLogoObjects1= [];
gdjs.InicioCode.GDLogoObjects2= [];
gdjs.InicioCode.GDMenuObjects1= [];
gdjs.InicioCode.GDMenuObjects2= [];
gdjs.InicioCode.GDLogo_9595rachaObjects1= [];
gdjs.InicioCode.GDLogo_9595rachaObjects2= [];
gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects1= [];
gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects2= [];
gdjs.InicioCode.GDFuegoObjects1= [];
gdjs.InicioCode.GDFuegoObjects2= [];
gdjs.InicioCode.GDNumeroObjects1= [];
gdjs.InicioCode.GDNumeroObjects2= [];
gdjs.InicioCode.GDTituloObjects1= [];
gdjs.InicioCode.GDTituloObjects2= [];
gdjs.InicioCode.GDTitulo2Objects1= [];
gdjs.InicioCode.GDTitulo2Objects2= [];
gdjs.InicioCode.GDNewButtonObjects1= [];
gdjs.InicioCode.GDNewButtonObjects2= [];
gdjs.InicioCode.GDNewLightObjects1= [];
gdjs.InicioCode.GDNewLightObjects2= [];
gdjs.InicioCode.GDRachabotonObjects1= [];
gdjs.InicioCode.GDRachabotonObjects2= [];
gdjs.InicioCode.GDInstaObjects1= [];
gdjs.InicioCode.GDInstaObjects2= [];
gdjs.InicioCode.GDCamaObjects1= [];
gdjs.InicioCode.GDCamaObjects2= [];
gdjs.InicioCode.GDwasaObjects1= [];
gdjs.InicioCode.GDwasaObjects2= [];
gdjs.InicioCode.GDMapaObjects1= [];
gdjs.InicioCode.GDMapaObjects2= [];
gdjs.InicioCode.GDUbicacionObjects1= [];
gdjs.InicioCode.GDUbicacionObjects2= [];
gdjs.InicioCode.GDboyacaObjects1= [];
gdjs.InicioCode.GDboyacaObjects2= [];
gdjs.InicioCode.GDTitulo3Objects1= [];
gdjs.InicioCode.GDTitulo3Objects2= [];
gdjs.InicioCode.GDAnuncio01Objects1= [];
gdjs.InicioCode.GDAnuncio01Objects2= [];
gdjs.InicioCode.GDTitulo4Objects1= [];
gdjs.InicioCode.GDTitulo4Objects2= [];
gdjs.InicioCode.GDNumero2Objects1= [];
gdjs.InicioCode.GDNumero2Objects2= [];
gdjs.InicioCode.GDNumero3Objects1= [];
gdjs.InicioCode.GDNumero3Objects2= [];
gdjs.InicioCode.GDAnuncio02Objects1= [];
gdjs.InicioCode.GDAnuncio02Objects2= [];
gdjs.InicioCode.GDTxtAnuncioObjects1= [];
gdjs.InicioCode.GDTxtAnuncioObjects2= [];
gdjs.InicioCode.GDPrecioObjects1= [];
gdjs.InicioCode.GDPrecioObjects2= [];
gdjs.InicioCode.GDTxtAnuncio2Objects1= [];
gdjs.InicioCode.GDTxtAnuncio2Objects2= [];
gdjs.InicioCode.GDPrecio2Objects1= [];
gdjs.InicioCode.GDPrecio2Objects2= [];
gdjs.InicioCode.GDTxtAnuncio3Objects1= [];
gdjs.InicioCode.GDTxtAnuncio3Objects2= [];
gdjs.InicioCode.GDPrecio3Objects1= [];
gdjs.InicioCode.GDPrecio3Objects2= [];


gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.InicioCode.GDMenuObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDRachabotonObjects1Objects = Hashtable.newFrom({"Rachaboton": gdjs.InicioCode.GDRachabotonObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDInstaObjects1Objects = Hashtable.newFrom({"Insta": gdjs.InicioCode.GDInstaObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDwasaObjects1Objects = Hashtable.newFrom({"wasa": gdjs.InicioCode.GDwasaObjects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDAnuncio01Objects1Objects = Hashtable.newFrom({"Anuncio01": gdjs.InicioCode.GDAnuncio01Objects1});
gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDAnuncio02Objects1Objects = Hashtable.newFrom({"Anuncio02": gdjs.InicioCode.GDAnuncio02Objects1});
gdjs.InicioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.InicioCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Navegador", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rachaboton"), gdjs.InicioCode.GDRachabotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDRachabotonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Racha", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Insta"), gdjs.InicioCode.GDInstaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDInstaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/avvicolombia/?hl=es", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("wasa"), gdjs.InicioCode.GDwasaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDwasaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2F4tgoq1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaaoQUqKk2gXQ8rWQImOTHkUgEtw1yx29SB70ei7y0l4RqhM1vipVIa8mNY_aem_KGu2ivUoJp_SBsm6tnvtFA&e=AT3VHfP5q7nTD4rg4yIRD0WkCrnG_0oyQBlLFJmuv-1pe-jh-WFOSumOR8wQ98-GIAWxDv4YpTzn49s4DMbIM2JyU8OgLy8UOjSEaA", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anuncio01"), gdjs.InicioCode.GDAnuncio01Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDAnuncio01Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2F4tgoq1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaaoQUqKk2gXQ8rWQImOTHkUgEtw1yx29SB70ei7y0l4RqhM1vipVIa8mNY_aem_KGu2ivUoJp_SBsm6tnvtFA&e=AT3VHfP5q7nTD4rg4yIRD0WkCrnG_0oyQBlLFJmuv-1pe-jh-WFOSumOR8wQ98-GIAWxDv4YpTzn49s4DMbIM2JyU8OgLy8UOjSEaA", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anuncio02"), gdjs.InicioCode.GDAnuncio02Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDAnuncio02Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2F4tgoq1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaaoQUqKk2gXQ8rWQImOTHkUgEtw1yx29SB70ei7y0l4RqhM1vipVIa8mNY_aem_KGu2ivUoJp_SBsm6tnvtFA&e=AT3VHfP5q7nTD4rg4yIRD0WkCrnG_0oyQBlLFJmuv-1pe-jh-WFOSumOR8wQ98-GIAWxDv4YpTzn49s4DMbIM2JyU8OgLy8UOjSEaA", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cama"), gdjs.InicioCode.GDCamaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Precio"), gdjs.InicioCode.GDPrecioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Precio2"), gdjs.InicioCode.GDPrecio2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Precio3"), gdjs.InicioCode.GDPrecio3Objects1);
gdjs.copyArray(runtimeScene.getObjects("SmallPlasticGreenRoundSlider"), gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtAnuncio"), gdjs.InicioCode.GDTxtAnuncioObjects1);
gdjs.copyArray(runtimeScene.getObjects("TxtAnuncio2"), gdjs.InicioCode.GDTxtAnuncio2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TxtAnuncio3"), gdjs.InicioCode.GDTxtAnuncio3Objects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.InicioCode.GDCamaObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDCamaObjects1[0].getPointX("")), "", 0);
}{for(var i = 0, len = gdjs.InicioCode.GDCamaObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDCamaObjects1[i].setX((( gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects1.length === 0 ) ? 0 :gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.InicioCode.GDPrecio2Objects1.length ;i < len;++i) {
    gdjs.InicioCode.GDPrecio2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}
}{for(var i = 0, len = gdjs.InicioCode.GDPrecio3Objects1.length ;i < len;++i) {
    gdjs.InicioCode.GDPrecio3Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}{for(var i = 0, len = gdjs.InicioCode.GDTxtAnuncioObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDTxtAnuncioObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.InicioCode.GDPrecioObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDPrecioObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(6).getAsString());
}
}{for(var i = 0, len = gdjs.InicioCode.GDTxtAnuncio2Objects1.length ;i < len;++i) {
    gdjs.InicioCode.GDTxtAnuncio2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}{for(var i = 0, len = gdjs.InicioCode.GDTxtAnuncio3Objects1.length ;i < len;++i) {
    gdjs.InicioCode.GDTxtAnuncio3Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField("Precio", "1", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField("Precio", "2", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField("Precio", "3", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField("Anuncio", "1", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField("Anuncio", "2", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField("Anuncio", "3", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDBannerObjects1.length = 0;
gdjs.InicioCode.GDBannerObjects2.length = 0;
gdjs.InicioCode.GDLogoObjects1.length = 0;
gdjs.InicioCode.GDLogoObjects2.length = 0;
gdjs.InicioCode.GDMenuObjects1.length = 0;
gdjs.InicioCode.GDMenuObjects2.length = 0;
gdjs.InicioCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.InicioCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.InicioCode.GDFuegoObjects1.length = 0;
gdjs.InicioCode.GDFuegoObjects2.length = 0;
gdjs.InicioCode.GDNumeroObjects1.length = 0;
gdjs.InicioCode.GDNumeroObjects2.length = 0;
gdjs.InicioCode.GDTituloObjects1.length = 0;
gdjs.InicioCode.GDTituloObjects2.length = 0;
gdjs.InicioCode.GDTitulo2Objects1.length = 0;
gdjs.InicioCode.GDTitulo2Objects2.length = 0;
gdjs.InicioCode.GDNewButtonObjects1.length = 0;
gdjs.InicioCode.GDNewButtonObjects2.length = 0;
gdjs.InicioCode.GDNewLightObjects1.length = 0;
gdjs.InicioCode.GDNewLightObjects2.length = 0;
gdjs.InicioCode.GDRachabotonObjects1.length = 0;
gdjs.InicioCode.GDRachabotonObjects2.length = 0;
gdjs.InicioCode.GDInstaObjects1.length = 0;
gdjs.InicioCode.GDInstaObjects2.length = 0;
gdjs.InicioCode.GDCamaObjects1.length = 0;
gdjs.InicioCode.GDCamaObjects2.length = 0;
gdjs.InicioCode.GDwasaObjects1.length = 0;
gdjs.InicioCode.GDwasaObjects2.length = 0;
gdjs.InicioCode.GDMapaObjects1.length = 0;
gdjs.InicioCode.GDMapaObjects2.length = 0;
gdjs.InicioCode.GDUbicacionObjects1.length = 0;
gdjs.InicioCode.GDUbicacionObjects2.length = 0;
gdjs.InicioCode.GDboyacaObjects1.length = 0;
gdjs.InicioCode.GDboyacaObjects2.length = 0;
gdjs.InicioCode.GDTitulo3Objects1.length = 0;
gdjs.InicioCode.GDTitulo3Objects2.length = 0;
gdjs.InicioCode.GDAnuncio01Objects1.length = 0;
gdjs.InicioCode.GDAnuncio01Objects2.length = 0;
gdjs.InicioCode.GDTitulo4Objects1.length = 0;
gdjs.InicioCode.GDTitulo4Objects2.length = 0;
gdjs.InicioCode.GDNumero2Objects1.length = 0;
gdjs.InicioCode.GDNumero2Objects2.length = 0;
gdjs.InicioCode.GDNumero3Objects1.length = 0;
gdjs.InicioCode.GDNumero3Objects2.length = 0;
gdjs.InicioCode.GDAnuncio02Objects1.length = 0;
gdjs.InicioCode.GDAnuncio02Objects2.length = 0;
gdjs.InicioCode.GDTxtAnuncioObjects1.length = 0;
gdjs.InicioCode.GDTxtAnuncioObjects2.length = 0;
gdjs.InicioCode.GDPrecioObjects1.length = 0;
gdjs.InicioCode.GDPrecioObjects2.length = 0;
gdjs.InicioCode.GDTxtAnuncio2Objects1.length = 0;
gdjs.InicioCode.GDTxtAnuncio2Objects2.length = 0;
gdjs.InicioCode.GDPrecio2Objects1.length = 0;
gdjs.InicioCode.GDPrecio2Objects2.length = 0;
gdjs.InicioCode.GDTxtAnuncio3Objects1.length = 0;
gdjs.InicioCode.GDTxtAnuncio3Objects2.length = 0;
gdjs.InicioCode.GDPrecio3Objects1.length = 0;
gdjs.InicioCode.GDPrecio3Objects2.length = 0;

gdjs.InicioCode.eventsList0(runtimeScene);
gdjs.InicioCode.GDBannerObjects1.length = 0;
gdjs.InicioCode.GDBannerObjects2.length = 0;
gdjs.InicioCode.GDLogoObjects1.length = 0;
gdjs.InicioCode.GDLogoObjects2.length = 0;
gdjs.InicioCode.GDMenuObjects1.length = 0;
gdjs.InicioCode.GDMenuObjects2.length = 0;
gdjs.InicioCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.InicioCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.InicioCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.InicioCode.GDFuegoObjects1.length = 0;
gdjs.InicioCode.GDFuegoObjects2.length = 0;
gdjs.InicioCode.GDNumeroObjects1.length = 0;
gdjs.InicioCode.GDNumeroObjects2.length = 0;
gdjs.InicioCode.GDTituloObjects1.length = 0;
gdjs.InicioCode.GDTituloObjects2.length = 0;
gdjs.InicioCode.GDTitulo2Objects1.length = 0;
gdjs.InicioCode.GDTitulo2Objects2.length = 0;
gdjs.InicioCode.GDNewButtonObjects1.length = 0;
gdjs.InicioCode.GDNewButtonObjects2.length = 0;
gdjs.InicioCode.GDNewLightObjects1.length = 0;
gdjs.InicioCode.GDNewLightObjects2.length = 0;
gdjs.InicioCode.GDRachabotonObjects1.length = 0;
gdjs.InicioCode.GDRachabotonObjects2.length = 0;
gdjs.InicioCode.GDInstaObjects1.length = 0;
gdjs.InicioCode.GDInstaObjects2.length = 0;
gdjs.InicioCode.GDCamaObjects1.length = 0;
gdjs.InicioCode.GDCamaObjects2.length = 0;
gdjs.InicioCode.GDwasaObjects1.length = 0;
gdjs.InicioCode.GDwasaObjects2.length = 0;
gdjs.InicioCode.GDMapaObjects1.length = 0;
gdjs.InicioCode.GDMapaObjects2.length = 0;
gdjs.InicioCode.GDUbicacionObjects1.length = 0;
gdjs.InicioCode.GDUbicacionObjects2.length = 0;
gdjs.InicioCode.GDboyacaObjects1.length = 0;
gdjs.InicioCode.GDboyacaObjects2.length = 0;
gdjs.InicioCode.GDTitulo3Objects1.length = 0;
gdjs.InicioCode.GDTitulo3Objects2.length = 0;
gdjs.InicioCode.GDAnuncio01Objects1.length = 0;
gdjs.InicioCode.GDAnuncio01Objects2.length = 0;
gdjs.InicioCode.GDTitulo4Objects1.length = 0;
gdjs.InicioCode.GDTitulo4Objects2.length = 0;
gdjs.InicioCode.GDNumero2Objects1.length = 0;
gdjs.InicioCode.GDNumero2Objects2.length = 0;
gdjs.InicioCode.GDNumero3Objects1.length = 0;
gdjs.InicioCode.GDNumero3Objects2.length = 0;
gdjs.InicioCode.GDAnuncio02Objects1.length = 0;
gdjs.InicioCode.GDAnuncio02Objects2.length = 0;
gdjs.InicioCode.GDTxtAnuncioObjects1.length = 0;
gdjs.InicioCode.GDTxtAnuncioObjects2.length = 0;
gdjs.InicioCode.GDPrecioObjects1.length = 0;
gdjs.InicioCode.GDPrecioObjects2.length = 0;
gdjs.InicioCode.GDTxtAnuncio2Objects1.length = 0;
gdjs.InicioCode.GDTxtAnuncio2Objects2.length = 0;
gdjs.InicioCode.GDPrecio2Objects1.length = 0;
gdjs.InicioCode.GDPrecio2Objects2.length = 0;
gdjs.InicioCode.GDTxtAnuncio3Objects1.length = 0;
gdjs.InicioCode.GDTxtAnuncio3Objects2.length = 0;
gdjs.InicioCode.GDPrecio3Objects1.length = 0;
gdjs.InicioCode.GDPrecio3Objects2.length = 0;


return;

}

gdjs['InicioCode'] = gdjs.InicioCode;
