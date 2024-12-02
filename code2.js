gdjs.RegistrarCode = {};
gdjs.RegistrarCode.localVariables = [];
gdjs.RegistrarCode.GDBannerObjects1= [];
gdjs.RegistrarCode.GDBannerObjects2= [];
gdjs.RegistrarCode.GDBannerObjects3= [];
gdjs.RegistrarCode.GDLogoObjects1= [];
gdjs.RegistrarCode.GDLogoObjects2= [];
gdjs.RegistrarCode.GDLogoObjects3= [];
gdjs.RegistrarCode.GDMenuObjects1= [];
gdjs.RegistrarCode.GDMenuObjects2= [];
gdjs.RegistrarCode.GDMenuObjects3= [];
gdjs.RegistrarCode.GDLogo_9595rachaObjects1= [];
gdjs.RegistrarCode.GDLogo_9595rachaObjects2= [];
gdjs.RegistrarCode.GDLogo_9595rachaObjects3= [];
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects1= [];
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects2= [];
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects3= [];
gdjs.RegistrarCode.GDFuegoObjects1= [];
gdjs.RegistrarCode.GDFuegoObjects2= [];
gdjs.RegistrarCode.GDFuegoObjects3= [];
gdjs.RegistrarCode.GDNumeroObjects1= [];
gdjs.RegistrarCode.GDNumeroObjects2= [];
gdjs.RegistrarCode.GDNumeroObjects3= [];
gdjs.RegistrarCode.GDBlurObjects1= [];
gdjs.RegistrarCode.GDBlurObjects2= [];
gdjs.RegistrarCode.GDBlurObjects3= [];
gdjs.RegistrarCode.GDSeleccionObjects1= [];
gdjs.RegistrarCode.GDSeleccionObjects2= [];
gdjs.RegistrarCode.GDSeleccionObjects3= [];
gdjs.RegistrarCode.GDEmailObjects1= [];
gdjs.RegistrarCode.GDEmailObjects2= [];
gdjs.RegistrarCode.GDEmailObjects3= [];
gdjs.RegistrarCode.GDContrase_95241aObjects1= [];
gdjs.RegistrarCode.GDContrase_95241aObjects2= [];
gdjs.RegistrarCode.GDContrase_95241aObjects3= [];
gdjs.RegistrarCode.GDNewToggleSwitchObjects1= [];
gdjs.RegistrarCode.GDNewToggleSwitchObjects2= [];
gdjs.RegistrarCode.GDNewToggleSwitchObjects3= [];
gdjs.RegistrarCode.GDTituloObjects1= [];
gdjs.RegistrarCode.GDTituloObjects2= [];
gdjs.RegistrarCode.GDTituloObjects3= [];
gdjs.RegistrarCode.GDNewButtonObjects1= [];
gdjs.RegistrarCode.GDNewButtonObjects2= [];
gdjs.RegistrarCode.GDNewButtonObjects3= [];
gdjs.RegistrarCode.GDAun_9595noObjects1= [];
gdjs.RegistrarCode.GDAun_9595noObjects2= [];
gdjs.RegistrarCode.GDAun_9595noObjects3= [];
gdjs.RegistrarCode.GDErrorObjects1= [];
gdjs.RegistrarCode.GDErrorObjects2= [];
gdjs.RegistrarCode.GDErrorObjects3= [];
gdjs.RegistrarCode.GDAdvertenciaObjects1= [];
gdjs.RegistrarCode.GDAdvertenciaObjects2= [];
gdjs.RegistrarCode.GDAdvertenciaObjects3= [];
gdjs.RegistrarCode.GDAun_9595no2Objects1= [];
gdjs.RegistrarCode.GDAun_9595no2Objects2= [];
gdjs.RegistrarCode.GDAun_9595no2Objects3= [];


gdjs.RegistrarCode.mapOfGDgdjs_9546RegistrarCode_9546GDNewToggleSwitchObjects2Objects = Hashtable.newFrom({"NewToggleSwitch": gdjs.RegistrarCode.GDNewToggleSwitchObjects2});
gdjs.RegistrarCode.mapOfGDgdjs_9546RegistrarCode_9546GDAun_95959595noObjects1Objects = Hashtable.newFrom({"Aun_no": gdjs.RegistrarCode.GDAun_9595noObjects1});
gdjs.RegistrarCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewToggleSwitch"), gdjs.RegistrarCode.GDNewToggleSwitchObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RegistrarCode.mapOfGDgdjs_9546RegistrarCode_9546GDNewToggleSwitchObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.RegistrarCode.GDNewToggleSwitchObjects2 */
{for(var i = 0, len = gdjs.RegistrarCode.GDNewToggleSwitchObjects2.length ;i < len;++i) {
    gdjs.RegistrarCode.GDNewToggleSwitchObjects2[i].ToggleChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aun_no"), gdjs.RegistrarCode.GDAun_9595noObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RegistrarCode.mapOfGDgdjs_9546RegistrarCode_9546GDAun_95959595noObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Iniciarsesion", false);
}}

}


};gdjs.RegistrarCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12694628);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.RegistrarCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewToggleSwitch"), gdjs.RegistrarCode.GDNewToggleSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistrarCode.GDNewToggleSwitchObjects1.length;i<l;++i) {
    if ( gdjs.RegistrarCode.GDNewToggleSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RegistrarCode.GDNewToggleSwitchObjects1[k] = gdjs.RegistrarCode.GDNewToggleSwitchObjects1[i];
        ++k;
    }
}
gdjs.RegistrarCode.GDNewToggleSwitchObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Contraseña"), gdjs.RegistrarCode.GDContrase_95241aObjects1);
{for(var i = 0, len = gdjs.RegistrarCode.GDContrase_95241aObjects1.length ;i < len;++i) {
    gdjs.RegistrarCode.GDContrase_95241aObjects1[i].setInputType("text");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewToggleSwitch"), gdjs.RegistrarCode.GDNewToggleSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistrarCode.GDNewToggleSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs.RegistrarCode.GDNewToggleSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.RegistrarCode.GDNewToggleSwitchObjects1[k] = gdjs.RegistrarCode.GDNewToggleSwitchObjects1[i];
        ++k;
    }
}
gdjs.RegistrarCode.GDNewToggleSwitchObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Contraseña"), gdjs.RegistrarCode.GDContrase_95241aObjects1);
{for(var i = 0, len = gdjs.RegistrarCode.GDContrase_95241aObjects1.length ;i < len;++i) {
    gdjs.RegistrarCode.GDContrase_95241aObjects1[i].setInputType("password");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.RegistrarCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistrarCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.RegistrarCode.GDNewButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RegistrarCode.GDNewButtonObjects1[k] = gdjs.RegistrarCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.RegistrarCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Contraseña"), gdjs.RegistrarCode.GDContrase_95241aObjects1);
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.RegistrarCode.GDEmailObjects1);
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.RegistrarCode.GDEmailObjects1.length === 0 ) ? "" :gdjs.RegistrarCode.GDEmailObjects1[0].getBehavior("Text").getText()), (( gdjs.RegistrarCode.GDContrase_95241aObjects1.length === 0 ) ? "" :gdjs.RegistrarCode.GDContrase_95241aObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Error"), gdjs.RegistrarCode.GDErrorObjects1);
{for(var i = 0, len = gdjs.RegistrarCode.GDErrorObjects1.length ;i < len;++i) {
    gdjs.RegistrarCode.GDErrorObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Error"), gdjs.RegistrarCode.GDErrorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistrarCode.GDErrorObjects1.length;i<l;++i) {
    if ( gdjs.RegistrarCode.GDErrorObjects1[i].getBehavior("Text").getText() == "ok" ) {
        isConditionTrue_0 = true;
        gdjs.RegistrarCode.GDErrorObjects1[k] = gdjs.RegistrarCode.GDErrorObjects1[i];
        ++k;
    }
}
gdjs.RegistrarCode.GDErrorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.RegistrarCode.GDErrorObjects1 */
{for(var i = 0, len = gdjs.RegistrarCode.GDErrorObjects1.length ;i < len;++i) {
    gdjs.RegistrarCode.GDErrorObjects1[i].getBehavior("Text").setText("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Iniciarsesion", false);
}}

}


};

gdjs.RegistrarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RegistrarCode.GDBannerObjects1.length = 0;
gdjs.RegistrarCode.GDBannerObjects2.length = 0;
gdjs.RegistrarCode.GDBannerObjects3.length = 0;
gdjs.RegistrarCode.GDLogoObjects1.length = 0;
gdjs.RegistrarCode.GDLogoObjects2.length = 0;
gdjs.RegistrarCode.GDLogoObjects3.length = 0;
gdjs.RegistrarCode.GDMenuObjects1.length = 0;
gdjs.RegistrarCode.GDMenuObjects2.length = 0;
gdjs.RegistrarCode.GDMenuObjects3.length = 0;
gdjs.RegistrarCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.RegistrarCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.RegistrarCode.GDLogo_9595rachaObjects3.length = 0;
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects3.length = 0;
gdjs.RegistrarCode.GDFuegoObjects1.length = 0;
gdjs.RegistrarCode.GDFuegoObjects2.length = 0;
gdjs.RegistrarCode.GDFuegoObjects3.length = 0;
gdjs.RegistrarCode.GDNumeroObjects1.length = 0;
gdjs.RegistrarCode.GDNumeroObjects2.length = 0;
gdjs.RegistrarCode.GDNumeroObjects3.length = 0;
gdjs.RegistrarCode.GDBlurObjects1.length = 0;
gdjs.RegistrarCode.GDBlurObjects2.length = 0;
gdjs.RegistrarCode.GDBlurObjects3.length = 0;
gdjs.RegistrarCode.GDSeleccionObjects1.length = 0;
gdjs.RegistrarCode.GDSeleccionObjects2.length = 0;
gdjs.RegistrarCode.GDSeleccionObjects3.length = 0;
gdjs.RegistrarCode.GDEmailObjects1.length = 0;
gdjs.RegistrarCode.GDEmailObjects2.length = 0;
gdjs.RegistrarCode.GDEmailObjects3.length = 0;
gdjs.RegistrarCode.GDContrase_95241aObjects1.length = 0;
gdjs.RegistrarCode.GDContrase_95241aObjects2.length = 0;
gdjs.RegistrarCode.GDContrase_95241aObjects3.length = 0;
gdjs.RegistrarCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.RegistrarCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.RegistrarCode.GDNewToggleSwitchObjects3.length = 0;
gdjs.RegistrarCode.GDTituloObjects1.length = 0;
gdjs.RegistrarCode.GDTituloObjects2.length = 0;
gdjs.RegistrarCode.GDTituloObjects3.length = 0;
gdjs.RegistrarCode.GDNewButtonObjects1.length = 0;
gdjs.RegistrarCode.GDNewButtonObjects2.length = 0;
gdjs.RegistrarCode.GDNewButtonObjects3.length = 0;
gdjs.RegistrarCode.GDAun_9595noObjects1.length = 0;
gdjs.RegistrarCode.GDAun_9595noObjects2.length = 0;
gdjs.RegistrarCode.GDAun_9595noObjects3.length = 0;
gdjs.RegistrarCode.GDErrorObjects1.length = 0;
gdjs.RegistrarCode.GDErrorObjects2.length = 0;
gdjs.RegistrarCode.GDErrorObjects3.length = 0;
gdjs.RegistrarCode.GDAdvertenciaObjects1.length = 0;
gdjs.RegistrarCode.GDAdvertenciaObjects2.length = 0;
gdjs.RegistrarCode.GDAdvertenciaObjects3.length = 0;
gdjs.RegistrarCode.GDAun_9595no2Objects1.length = 0;
gdjs.RegistrarCode.GDAun_9595no2Objects2.length = 0;
gdjs.RegistrarCode.GDAun_9595no2Objects3.length = 0;

gdjs.RegistrarCode.eventsList1(runtimeScene);
gdjs.RegistrarCode.GDBannerObjects1.length = 0;
gdjs.RegistrarCode.GDBannerObjects2.length = 0;
gdjs.RegistrarCode.GDBannerObjects3.length = 0;
gdjs.RegistrarCode.GDLogoObjects1.length = 0;
gdjs.RegistrarCode.GDLogoObjects2.length = 0;
gdjs.RegistrarCode.GDLogoObjects3.length = 0;
gdjs.RegistrarCode.GDMenuObjects1.length = 0;
gdjs.RegistrarCode.GDMenuObjects2.length = 0;
gdjs.RegistrarCode.GDMenuObjects3.length = 0;
gdjs.RegistrarCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.RegistrarCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.RegistrarCode.GDLogo_9595rachaObjects3.length = 0;
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.RegistrarCode.GDSmallPlasticGreenRoundSliderObjects3.length = 0;
gdjs.RegistrarCode.GDFuegoObjects1.length = 0;
gdjs.RegistrarCode.GDFuegoObjects2.length = 0;
gdjs.RegistrarCode.GDFuegoObjects3.length = 0;
gdjs.RegistrarCode.GDNumeroObjects1.length = 0;
gdjs.RegistrarCode.GDNumeroObjects2.length = 0;
gdjs.RegistrarCode.GDNumeroObjects3.length = 0;
gdjs.RegistrarCode.GDBlurObjects1.length = 0;
gdjs.RegistrarCode.GDBlurObjects2.length = 0;
gdjs.RegistrarCode.GDBlurObjects3.length = 0;
gdjs.RegistrarCode.GDSeleccionObjects1.length = 0;
gdjs.RegistrarCode.GDSeleccionObjects2.length = 0;
gdjs.RegistrarCode.GDSeleccionObjects3.length = 0;
gdjs.RegistrarCode.GDEmailObjects1.length = 0;
gdjs.RegistrarCode.GDEmailObjects2.length = 0;
gdjs.RegistrarCode.GDEmailObjects3.length = 0;
gdjs.RegistrarCode.GDContrase_95241aObjects1.length = 0;
gdjs.RegistrarCode.GDContrase_95241aObjects2.length = 0;
gdjs.RegistrarCode.GDContrase_95241aObjects3.length = 0;
gdjs.RegistrarCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.RegistrarCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.RegistrarCode.GDNewToggleSwitchObjects3.length = 0;
gdjs.RegistrarCode.GDTituloObjects1.length = 0;
gdjs.RegistrarCode.GDTituloObjects2.length = 0;
gdjs.RegistrarCode.GDTituloObjects3.length = 0;
gdjs.RegistrarCode.GDNewButtonObjects1.length = 0;
gdjs.RegistrarCode.GDNewButtonObjects2.length = 0;
gdjs.RegistrarCode.GDNewButtonObjects3.length = 0;
gdjs.RegistrarCode.GDAun_9595noObjects1.length = 0;
gdjs.RegistrarCode.GDAun_9595noObjects2.length = 0;
gdjs.RegistrarCode.GDAun_9595noObjects3.length = 0;
gdjs.RegistrarCode.GDErrorObjects1.length = 0;
gdjs.RegistrarCode.GDErrorObjects2.length = 0;
gdjs.RegistrarCode.GDErrorObjects3.length = 0;
gdjs.RegistrarCode.GDAdvertenciaObjects1.length = 0;
gdjs.RegistrarCode.GDAdvertenciaObjects2.length = 0;
gdjs.RegistrarCode.GDAdvertenciaObjects3.length = 0;
gdjs.RegistrarCode.GDAun_9595no2Objects1.length = 0;
gdjs.RegistrarCode.GDAun_9595no2Objects2.length = 0;
gdjs.RegistrarCode.GDAun_9595no2Objects3.length = 0;


return;

}

gdjs['RegistrarCode'] = gdjs.RegistrarCode;
