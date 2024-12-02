gdjs.EntradaCode = {};
gdjs.EntradaCode.localVariables = [];
gdjs.EntradaCode.GDBannerObjects1= [];
gdjs.EntradaCode.GDBannerObjects2= [];
gdjs.EntradaCode.GDLogoObjects1= [];
gdjs.EntradaCode.GDLogoObjects2= [];
gdjs.EntradaCode.GDMenuObjects1= [];
gdjs.EntradaCode.GDMenuObjects2= [];
gdjs.EntradaCode.GDLogo_9595rachaObjects1= [];
gdjs.EntradaCode.GDLogo_9595rachaObjects2= [];
gdjs.EntradaCode.GDSmallPlasticGreenRoundSliderObjects1= [];
gdjs.EntradaCode.GDSmallPlasticGreenRoundSliderObjects2= [];
gdjs.EntradaCode.GDFuegoObjects1= [];
gdjs.EntradaCode.GDFuegoObjects2= [];
gdjs.EntradaCode.GDNumeroObjects1= [];
gdjs.EntradaCode.GDNumeroObjects2= [];
gdjs.EntradaCode.GDBlurObjects1= [];
gdjs.EntradaCode.GDBlurObjects2= [];
gdjs.EntradaCode.GDSeleccionObjects1= [];
gdjs.EntradaCode.GDSeleccionObjects2= [];
gdjs.EntradaCode.GDEmailObjects1= [];
gdjs.EntradaCode.GDEmailObjects2= [];
gdjs.EntradaCode.GDContrase_95241aObjects1= [];
gdjs.EntradaCode.GDContrase_95241aObjects2= [];
gdjs.EntradaCode.GDNewToggleSwitchObjects1= [];
gdjs.EntradaCode.GDNewToggleSwitchObjects2= [];
gdjs.EntradaCode.GDTituloObjects1= [];
gdjs.EntradaCode.GDTituloObjects2= [];
gdjs.EntradaCode.GDNewButtonObjects1= [];
gdjs.EntradaCode.GDNewButtonObjects2= [];
gdjs.EntradaCode.GDAun_9595noObjects1= [];
gdjs.EntradaCode.GDAun_9595noObjects2= [];
gdjs.EntradaCode.GDErrorObjects1= [];
gdjs.EntradaCode.GDErrorObjects2= [];
gdjs.EntradaCode.GDCargaObjects1= [];
gdjs.EntradaCode.GDCargaObjects2= [];


gdjs.EntradaCode.asyncCallback12600484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EntradaCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Iniciarsesion", false);
}gdjs.EntradaCode.localVariables.length = 0;
}
gdjs.EntradaCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EntradaCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.EntradaCode.asyncCallback12600484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EntradaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Carga"), gdjs.EntradaCode.GDCargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.EntradaCode.GDLogoObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.EntradaCode.GDLogoObjects1.length !== 0 ? gdjs.EntradaCode.GDLogoObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.EntradaCode.GDCargaObjects1.length ;i < len;++i) {
    gdjs.EntradaCode.GDCargaObjects1[i].rotate(200, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EntradaCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.EntradaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EntradaCode.GDBannerObjects1.length = 0;
gdjs.EntradaCode.GDBannerObjects2.length = 0;
gdjs.EntradaCode.GDLogoObjects1.length = 0;
gdjs.EntradaCode.GDLogoObjects2.length = 0;
gdjs.EntradaCode.GDMenuObjects1.length = 0;
gdjs.EntradaCode.GDMenuObjects2.length = 0;
gdjs.EntradaCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.EntradaCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.EntradaCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.EntradaCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.EntradaCode.GDFuegoObjects1.length = 0;
gdjs.EntradaCode.GDFuegoObjects2.length = 0;
gdjs.EntradaCode.GDNumeroObjects1.length = 0;
gdjs.EntradaCode.GDNumeroObjects2.length = 0;
gdjs.EntradaCode.GDBlurObjects1.length = 0;
gdjs.EntradaCode.GDBlurObjects2.length = 0;
gdjs.EntradaCode.GDSeleccionObjects1.length = 0;
gdjs.EntradaCode.GDSeleccionObjects2.length = 0;
gdjs.EntradaCode.GDEmailObjects1.length = 0;
gdjs.EntradaCode.GDEmailObjects2.length = 0;
gdjs.EntradaCode.GDContrase_95241aObjects1.length = 0;
gdjs.EntradaCode.GDContrase_95241aObjects2.length = 0;
gdjs.EntradaCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.EntradaCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.EntradaCode.GDTituloObjects1.length = 0;
gdjs.EntradaCode.GDTituloObjects2.length = 0;
gdjs.EntradaCode.GDNewButtonObjects1.length = 0;
gdjs.EntradaCode.GDNewButtonObjects2.length = 0;
gdjs.EntradaCode.GDAun_9595noObjects1.length = 0;
gdjs.EntradaCode.GDAun_9595noObjects2.length = 0;
gdjs.EntradaCode.GDErrorObjects1.length = 0;
gdjs.EntradaCode.GDErrorObjects2.length = 0;
gdjs.EntradaCode.GDCargaObjects1.length = 0;
gdjs.EntradaCode.GDCargaObjects2.length = 0;

gdjs.EntradaCode.eventsList1(runtimeScene);
gdjs.EntradaCode.GDBannerObjects1.length = 0;
gdjs.EntradaCode.GDBannerObjects2.length = 0;
gdjs.EntradaCode.GDLogoObjects1.length = 0;
gdjs.EntradaCode.GDLogoObjects2.length = 0;
gdjs.EntradaCode.GDMenuObjects1.length = 0;
gdjs.EntradaCode.GDMenuObjects2.length = 0;
gdjs.EntradaCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.EntradaCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.EntradaCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.EntradaCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.EntradaCode.GDFuegoObjects1.length = 0;
gdjs.EntradaCode.GDFuegoObjects2.length = 0;
gdjs.EntradaCode.GDNumeroObjects1.length = 0;
gdjs.EntradaCode.GDNumeroObjects2.length = 0;
gdjs.EntradaCode.GDBlurObjects1.length = 0;
gdjs.EntradaCode.GDBlurObjects2.length = 0;
gdjs.EntradaCode.GDSeleccionObjects1.length = 0;
gdjs.EntradaCode.GDSeleccionObjects2.length = 0;
gdjs.EntradaCode.GDEmailObjects1.length = 0;
gdjs.EntradaCode.GDEmailObjects2.length = 0;
gdjs.EntradaCode.GDContrase_95241aObjects1.length = 0;
gdjs.EntradaCode.GDContrase_95241aObjects2.length = 0;
gdjs.EntradaCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.EntradaCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.EntradaCode.GDTituloObjects1.length = 0;
gdjs.EntradaCode.GDTituloObjects2.length = 0;
gdjs.EntradaCode.GDNewButtonObjects1.length = 0;
gdjs.EntradaCode.GDNewButtonObjects2.length = 0;
gdjs.EntradaCode.GDAun_9595noObjects1.length = 0;
gdjs.EntradaCode.GDAun_9595noObjects2.length = 0;
gdjs.EntradaCode.GDErrorObjects1.length = 0;
gdjs.EntradaCode.GDErrorObjects2.length = 0;
gdjs.EntradaCode.GDCargaObjects1.length = 0;
gdjs.EntradaCode.GDCargaObjects2.length = 0;


return;

}

gdjs['EntradaCode'] = gdjs.EntradaCode;
