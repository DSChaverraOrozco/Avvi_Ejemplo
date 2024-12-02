gdjs.NavegadorCode = {};
gdjs.NavegadorCode.localVariables = [];
gdjs.NavegadorCode.GDBannerObjects1= [];
gdjs.NavegadorCode.GDBannerObjects2= [];
gdjs.NavegadorCode.GDBannerObjects3= [];
gdjs.NavegadorCode.GDLogoObjects1= [];
gdjs.NavegadorCode.GDLogoObjects2= [];
gdjs.NavegadorCode.GDLogoObjects3= [];
gdjs.NavegadorCode.GDMenu01Objects1= [];
gdjs.NavegadorCode.GDMenu01Objects2= [];
gdjs.NavegadorCode.GDMenu01Objects3= [];
gdjs.NavegadorCode.GDMenu02Objects1= [];
gdjs.NavegadorCode.GDMenu02Objects2= [];
gdjs.NavegadorCode.GDMenu02Objects3= [];
gdjs.NavegadorCode.GDMenu03Objects1= [];
gdjs.NavegadorCode.GDMenu03Objects2= [];
gdjs.NavegadorCode.GDMenu03Objects3= [];
gdjs.NavegadorCode.GDMenu04Objects1= [];
gdjs.NavegadorCode.GDMenu04Objects2= [];
gdjs.NavegadorCode.GDMenu04Objects3= [];
gdjs.NavegadorCode.GDMarcaObjects1= [];
gdjs.NavegadorCode.GDMarcaObjects2= [];
gdjs.NavegadorCode.GDMarcaObjects3= [];
gdjs.NavegadorCode.GDFondoObjects1= [];
gdjs.NavegadorCode.GDFondoObjects2= [];
gdjs.NavegadorCode.GDFondoObjects3= [];
gdjs.NavegadorCode.GDBotonObjects1= [];
gdjs.NavegadorCode.GDBotonObjects2= [];
gdjs.NavegadorCode.GDBotonObjects3= [];
gdjs.NavegadorCode.GDCargaObjects1= [];
gdjs.NavegadorCode.GDCargaObjects2= [];
gdjs.NavegadorCode.GDCargaObjects3= [];


gdjs.NavegadorCode.mapOfGDgdjs_9546NavegadorCode_9546GDMenu04Objects2Objects = Hashtable.newFrom({"Menu04": gdjs.NavegadorCode.GDMenu04Objects2});
gdjs.NavegadorCode.asyncCallback12842084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NavegadorCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Iniciarsesion", false);
}gdjs.NavegadorCode.localVariables.length = 0;
}
gdjs.NavegadorCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NavegadorCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.NavegadorCode.asyncCallback12842084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.NavegadorCode.mapOfGDgdjs_9546NavegadorCode_9546GDMenu02Objects2Objects = Hashtable.newFrom({"Menu02": gdjs.NavegadorCode.GDMenu02Objects2});
gdjs.NavegadorCode.mapOfGDgdjs_9546NavegadorCode_9546GDMenu01Objects1Objects = Hashtable.newFrom({"Menu01": gdjs.NavegadorCode.GDMenu01Objects1});
gdjs.NavegadorCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu04"), gdjs.NavegadorCode.GDMenu04Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NavegadorCode.mapOfGDgdjs_9546NavegadorCode_9546GDMenu04Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "CargayAnuncios");
}{firebase.auth().signOut();
}
{ //Subevents
gdjs.NavegadorCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu02"), gdjs.NavegadorCode.GDMenu02Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NavegadorCode.mapOfGDgdjs_9546NavegadorCode_9546GDMenu02Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Racha", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu01"), gdjs.NavegadorCode.GDMenu01Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NavegadorCode.mapOfGDgdjs_9546NavegadorCode_9546GDMenu01Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}}

}


};gdjs.NavegadorCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Carga"), gdjs.NavegadorCode.GDCargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.NavegadorCode.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marca"), gdjs.NavegadorCode.GDMarcaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu01"), gdjs.NavegadorCode.GDMenu01Objects1);
gdjs.copyArray(runtimeScene.getObjects("Menu02"), gdjs.NavegadorCode.GDMenu02Objects1);
gdjs.copyArray(runtimeScene.getObjects("Menu03"), gdjs.NavegadorCode.GDMenu03Objects1);
gdjs.copyArray(runtimeScene.getObjects("Menu04"), gdjs.NavegadorCode.GDMenu04Objects1);
{for(var i = 0, len = gdjs.NavegadorCode.GDMenu01Objects1.length ;i < len;++i) {
    gdjs.NavegadorCode.GDMenu01Objects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Entrada", 70, "easeOutBack", 0.5, false);
}
}{for(var i = 0, len = gdjs.NavegadorCode.GDMenu02Objects1.length ;i < len;++i) {
    gdjs.NavegadorCode.GDMenu02Objects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Entrada", 70, "easeOutBack", 0.8, false);
}
}{for(var i = 0, len = gdjs.NavegadorCode.GDMenu03Objects1.length ;i < len;++i) {
    gdjs.NavegadorCode.GDMenu03Objects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Entrada", 70, "easeOutBack", 1.1, false);
}
}{for(var i = 0, len = gdjs.NavegadorCode.GDMenu04Objects1.length ;i < len;++i) {
    gdjs.NavegadorCode.GDMenu04Objects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Entrada", 70, "easeOutBack", 1.4, false);
}
}{for(var i = 0, len = gdjs.NavegadorCode.GDMarcaObjects1.length ;i < len;++i) {
    gdjs.NavegadorCode.GDMarcaObjects1[i].getBehavior("Opacity").setOpacity(40);
}
}{for(var i = 0, len = gdjs.NavegadorCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.NavegadorCode.GDFondoObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.NavegadorCode.GDCargaObjects1.length === 0 ) ? 0 :gdjs.NavegadorCode.GDCargaObjects1[0].getPointY("")), "CargayAnuncios", 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "CargayAnuncios");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.NavegadorCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Carga"), gdjs.NavegadorCode.GDCargaObjects1);
{for(var i = 0, len = gdjs.NavegadorCode.GDCargaObjects1.length ;i < len;++i) {
    gdjs.NavegadorCode.GDCargaObjects1[i].rotate(200, runtimeScene);
}
}}

}


};

gdjs.NavegadorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NavegadorCode.GDBannerObjects1.length = 0;
gdjs.NavegadorCode.GDBannerObjects2.length = 0;
gdjs.NavegadorCode.GDBannerObjects3.length = 0;
gdjs.NavegadorCode.GDLogoObjects1.length = 0;
gdjs.NavegadorCode.GDLogoObjects2.length = 0;
gdjs.NavegadorCode.GDLogoObjects3.length = 0;
gdjs.NavegadorCode.GDMenu01Objects1.length = 0;
gdjs.NavegadorCode.GDMenu01Objects2.length = 0;
gdjs.NavegadorCode.GDMenu01Objects3.length = 0;
gdjs.NavegadorCode.GDMenu02Objects1.length = 0;
gdjs.NavegadorCode.GDMenu02Objects2.length = 0;
gdjs.NavegadorCode.GDMenu02Objects3.length = 0;
gdjs.NavegadorCode.GDMenu03Objects1.length = 0;
gdjs.NavegadorCode.GDMenu03Objects2.length = 0;
gdjs.NavegadorCode.GDMenu03Objects3.length = 0;
gdjs.NavegadorCode.GDMenu04Objects1.length = 0;
gdjs.NavegadorCode.GDMenu04Objects2.length = 0;
gdjs.NavegadorCode.GDMenu04Objects3.length = 0;
gdjs.NavegadorCode.GDMarcaObjects1.length = 0;
gdjs.NavegadorCode.GDMarcaObjects2.length = 0;
gdjs.NavegadorCode.GDMarcaObjects3.length = 0;
gdjs.NavegadorCode.GDFondoObjects1.length = 0;
gdjs.NavegadorCode.GDFondoObjects2.length = 0;
gdjs.NavegadorCode.GDFondoObjects3.length = 0;
gdjs.NavegadorCode.GDBotonObjects1.length = 0;
gdjs.NavegadorCode.GDBotonObjects2.length = 0;
gdjs.NavegadorCode.GDBotonObjects3.length = 0;
gdjs.NavegadorCode.GDCargaObjects1.length = 0;
gdjs.NavegadorCode.GDCargaObjects2.length = 0;
gdjs.NavegadorCode.GDCargaObjects3.length = 0;

gdjs.NavegadorCode.eventsList2(runtimeScene);
gdjs.NavegadorCode.GDBannerObjects1.length = 0;
gdjs.NavegadorCode.GDBannerObjects2.length = 0;
gdjs.NavegadorCode.GDBannerObjects3.length = 0;
gdjs.NavegadorCode.GDLogoObjects1.length = 0;
gdjs.NavegadorCode.GDLogoObjects2.length = 0;
gdjs.NavegadorCode.GDLogoObjects3.length = 0;
gdjs.NavegadorCode.GDMenu01Objects1.length = 0;
gdjs.NavegadorCode.GDMenu01Objects2.length = 0;
gdjs.NavegadorCode.GDMenu01Objects3.length = 0;
gdjs.NavegadorCode.GDMenu02Objects1.length = 0;
gdjs.NavegadorCode.GDMenu02Objects2.length = 0;
gdjs.NavegadorCode.GDMenu02Objects3.length = 0;
gdjs.NavegadorCode.GDMenu03Objects1.length = 0;
gdjs.NavegadorCode.GDMenu03Objects2.length = 0;
gdjs.NavegadorCode.GDMenu03Objects3.length = 0;
gdjs.NavegadorCode.GDMenu04Objects1.length = 0;
gdjs.NavegadorCode.GDMenu04Objects2.length = 0;
gdjs.NavegadorCode.GDMenu04Objects3.length = 0;
gdjs.NavegadorCode.GDMarcaObjects1.length = 0;
gdjs.NavegadorCode.GDMarcaObjects2.length = 0;
gdjs.NavegadorCode.GDMarcaObjects3.length = 0;
gdjs.NavegadorCode.GDFondoObjects1.length = 0;
gdjs.NavegadorCode.GDFondoObjects2.length = 0;
gdjs.NavegadorCode.GDFondoObjects3.length = 0;
gdjs.NavegadorCode.GDBotonObjects1.length = 0;
gdjs.NavegadorCode.GDBotonObjects2.length = 0;
gdjs.NavegadorCode.GDBotonObjects3.length = 0;
gdjs.NavegadorCode.GDCargaObjects1.length = 0;
gdjs.NavegadorCode.GDCargaObjects2.length = 0;
gdjs.NavegadorCode.GDCargaObjects3.length = 0;


return;

}

gdjs['NavegadorCode'] = gdjs.NavegadorCode;
