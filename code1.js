gdjs.IniciarsesionCode = {};
gdjs.IniciarsesionCode.localVariables = [];
gdjs.IniciarsesionCode.GDBannerObjects1= [];
gdjs.IniciarsesionCode.GDBannerObjects2= [];
gdjs.IniciarsesionCode.GDBannerObjects3= [];
gdjs.IniciarsesionCode.GDLogoObjects1= [];
gdjs.IniciarsesionCode.GDLogoObjects2= [];
gdjs.IniciarsesionCode.GDLogoObjects3= [];
gdjs.IniciarsesionCode.GDMenuObjects1= [];
gdjs.IniciarsesionCode.GDMenuObjects2= [];
gdjs.IniciarsesionCode.GDMenuObjects3= [];
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects1= [];
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects2= [];
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects3= [];
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects1= [];
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects2= [];
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects3= [];
gdjs.IniciarsesionCode.GDFuegoObjects1= [];
gdjs.IniciarsesionCode.GDFuegoObjects2= [];
gdjs.IniciarsesionCode.GDFuegoObjects3= [];
gdjs.IniciarsesionCode.GDNumeroObjects1= [];
gdjs.IniciarsesionCode.GDNumeroObjects2= [];
gdjs.IniciarsesionCode.GDNumeroObjects3= [];
gdjs.IniciarsesionCode.GDBlurObjects1= [];
gdjs.IniciarsesionCode.GDBlurObjects2= [];
gdjs.IniciarsesionCode.GDBlurObjects3= [];
gdjs.IniciarsesionCode.GDSeleccionObjects1= [];
gdjs.IniciarsesionCode.GDSeleccionObjects2= [];
gdjs.IniciarsesionCode.GDSeleccionObjects3= [];
gdjs.IniciarsesionCode.GDEmailObjects1= [];
gdjs.IniciarsesionCode.GDEmailObjects2= [];
gdjs.IniciarsesionCode.GDEmailObjects3= [];
gdjs.IniciarsesionCode.GDContrase_95241aObjects1= [];
gdjs.IniciarsesionCode.GDContrase_95241aObjects2= [];
gdjs.IniciarsesionCode.GDContrase_95241aObjects3= [];
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1= [];
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects2= [];
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects3= [];
gdjs.IniciarsesionCode.GDTituloObjects1= [];
gdjs.IniciarsesionCode.GDTituloObjects2= [];
gdjs.IniciarsesionCode.GDTituloObjects3= [];
gdjs.IniciarsesionCode.GDNewButtonObjects1= [];
gdjs.IniciarsesionCode.GDNewButtonObjects2= [];
gdjs.IniciarsesionCode.GDNewButtonObjects3= [];
gdjs.IniciarsesionCode.GDAun_9595noObjects1= [];
gdjs.IniciarsesionCode.GDAun_9595noObjects2= [];
gdjs.IniciarsesionCode.GDAun_9595noObjects3= [];
gdjs.IniciarsesionCode.GDErrorObjects1= [];
gdjs.IniciarsesionCode.GDErrorObjects2= [];
gdjs.IniciarsesionCode.GDErrorObjects3= [];


gdjs.IniciarsesionCode.mapOfGDgdjs_9546IniciarsesionCode_9546GDAun_95959595noObjects2Objects = Hashtable.newFrom({"Aun_no": gdjs.IniciarsesionCode.GDAun_9595noObjects2});
gdjs.IniciarsesionCode.mapOfGDgdjs_9546IniciarsesionCode_9546GDNewToggleSwitchObjects1Objects = Hashtable.newFrom({"NewToggleSwitch": gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1});
gdjs.IniciarsesionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Aun_no"), gdjs.IniciarsesionCode.GDAun_9595noObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IniciarsesionCode.mapOfGDgdjs_9546IniciarsesionCode_9546GDAun_95959595noObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Registrar", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewToggleSwitch"), gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IniciarsesionCode.mapOfGDgdjs_9546IniciarsesionCode_9546GDNewToggleSwitchObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1 */
{for(var i = 0, len = gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1.length ;i < len;++i) {
    gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1[i].ToggleChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.IniciarsesionCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12644572);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.IniciarsesionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewToggleSwitch"), gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1.length;i<l;++i) {
    if ( gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1[k] = gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1[i];
        ++k;
    }
}
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Contraseña"), gdjs.IniciarsesionCode.GDContrase_95241aObjects1);
{for(var i = 0, len = gdjs.IniciarsesionCode.GDContrase_95241aObjects1.length ;i < len;++i) {
    gdjs.IniciarsesionCode.GDContrase_95241aObjects1[i].setInputType("text");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewToggleSwitch"), gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1.length;i<l;++i) {
    if ( !(gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1[k] = gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1[i];
        ++k;
    }
}
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Contraseña"), gdjs.IniciarsesionCode.GDContrase_95241aObjects1);
{for(var i = 0, len = gdjs.IniciarsesionCode.GDContrase_95241aObjects1.length ;i < len;++i) {
    gdjs.IniciarsesionCode.GDContrase_95241aObjects1[i].setInputType("password");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.IniciarsesionCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IniciarsesionCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.IniciarsesionCode.GDNewButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IniciarsesionCode.GDNewButtonObjects1[k] = gdjs.IniciarsesionCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.IniciarsesionCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Contraseña"), gdjs.IniciarsesionCode.GDContrase_95241aObjects1);
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.IniciarsesionCode.GDEmailObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.IniciarsesionCode.GDEmailObjects1.length === 0 ) ? "" :gdjs.IniciarsesionCode.GDEmailObjects1[0].getBehavior("Text").getText()), (( gdjs.IniciarsesionCode.GDContrase_95241aObjects1.length === 0 ) ? "" :gdjs.IniciarsesionCode.GDContrase_95241aObjects1[0].getBehavior("Text").getText()), runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) != "ok";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Error"), gdjs.IniciarsesionCode.GDErrorObjects1);
{for(var i = 0, len = gdjs.IniciarsesionCode.GDErrorObjects1.length ;i < len;++i) {
    gdjs.IniciarsesionCode.GDErrorObjects1[i].getBehavior("Text").setText("Revisa tu usuario y clave o crea una cuenta");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) == "ok";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Error"), gdjs.IniciarsesionCode.GDErrorObjects1);
{for(var i = 0, len = gdjs.IniciarsesionCode.GDErrorObjects1.length ;i < len;++i) {
    gdjs.IniciarsesionCode.GDErrorObjects1[i].getBehavior("Text").setText("");
}
}}

}


};

gdjs.IniciarsesionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IniciarsesionCode.GDBannerObjects1.length = 0;
gdjs.IniciarsesionCode.GDBannerObjects2.length = 0;
gdjs.IniciarsesionCode.GDBannerObjects3.length = 0;
gdjs.IniciarsesionCode.GDLogoObjects1.length = 0;
gdjs.IniciarsesionCode.GDLogoObjects2.length = 0;
gdjs.IniciarsesionCode.GDLogoObjects3.length = 0;
gdjs.IniciarsesionCode.GDMenuObjects1.length = 0;
gdjs.IniciarsesionCode.GDMenuObjects2.length = 0;
gdjs.IniciarsesionCode.GDMenuObjects3.length = 0;
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects3.length = 0;
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects3.length = 0;
gdjs.IniciarsesionCode.GDFuegoObjects1.length = 0;
gdjs.IniciarsesionCode.GDFuegoObjects2.length = 0;
gdjs.IniciarsesionCode.GDFuegoObjects3.length = 0;
gdjs.IniciarsesionCode.GDNumeroObjects1.length = 0;
gdjs.IniciarsesionCode.GDNumeroObjects2.length = 0;
gdjs.IniciarsesionCode.GDNumeroObjects3.length = 0;
gdjs.IniciarsesionCode.GDBlurObjects1.length = 0;
gdjs.IniciarsesionCode.GDBlurObjects2.length = 0;
gdjs.IniciarsesionCode.GDBlurObjects3.length = 0;
gdjs.IniciarsesionCode.GDSeleccionObjects1.length = 0;
gdjs.IniciarsesionCode.GDSeleccionObjects2.length = 0;
gdjs.IniciarsesionCode.GDSeleccionObjects3.length = 0;
gdjs.IniciarsesionCode.GDEmailObjects1.length = 0;
gdjs.IniciarsesionCode.GDEmailObjects2.length = 0;
gdjs.IniciarsesionCode.GDEmailObjects3.length = 0;
gdjs.IniciarsesionCode.GDContrase_95241aObjects1.length = 0;
gdjs.IniciarsesionCode.GDContrase_95241aObjects2.length = 0;
gdjs.IniciarsesionCode.GDContrase_95241aObjects3.length = 0;
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects3.length = 0;
gdjs.IniciarsesionCode.GDTituloObjects1.length = 0;
gdjs.IniciarsesionCode.GDTituloObjects2.length = 0;
gdjs.IniciarsesionCode.GDTituloObjects3.length = 0;
gdjs.IniciarsesionCode.GDNewButtonObjects1.length = 0;
gdjs.IniciarsesionCode.GDNewButtonObjects2.length = 0;
gdjs.IniciarsesionCode.GDNewButtonObjects3.length = 0;
gdjs.IniciarsesionCode.GDAun_9595noObjects1.length = 0;
gdjs.IniciarsesionCode.GDAun_9595noObjects2.length = 0;
gdjs.IniciarsesionCode.GDAun_9595noObjects3.length = 0;
gdjs.IniciarsesionCode.GDErrorObjects1.length = 0;
gdjs.IniciarsesionCode.GDErrorObjects2.length = 0;
gdjs.IniciarsesionCode.GDErrorObjects3.length = 0;

gdjs.IniciarsesionCode.eventsList1(runtimeScene);
gdjs.IniciarsesionCode.GDBannerObjects1.length = 0;
gdjs.IniciarsesionCode.GDBannerObjects2.length = 0;
gdjs.IniciarsesionCode.GDBannerObjects3.length = 0;
gdjs.IniciarsesionCode.GDLogoObjects1.length = 0;
gdjs.IniciarsesionCode.GDLogoObjects2.length = 0;
gdjs.IniciarsesionCode.GDLogoObjects3.length = 0;
gdjs.IniciarsesionCode.GDMenuObjects1.length = 0;
gdjs.IniciarsesionCode.GDMenuObjects2.length = 0;
gdjs.IniciarsesionCode.GDMenuObjects3.length = 0;
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.IniciarsesionCode.GDLogo_9595rachaObjects3.length = 0;
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.IniciarsesionCode.GDSmallPlasticGreenRoundSliderObjects3.length = 0;
gdjs.IniciarsesionCode.GDFuegoObjects1.length = 0;
gdjs.IniciarsesionCode.GDFuegoObjects2.length = 0;
gdjs.IniciarsesionCode.GDFuegoObjects3.length = 0;
gdjs.IniciarsesionCode.GDNumeroObjects1.length = 0;
gdjs.IniciarsesionCode.GDNumeroObjects2.length = 0;
gdjs.IniciarsesionCode.GDNumeroObjects3.length = 0;
gdjs.IniciarsesionCode.GDBlurObjects1.length = 0;
gdjs.IniciarsesionCode.GDBlurObjects2.length = 0;
gdjs.IniciarsesionCode.GDBlurObjects3.length = 0;
gdjs.IniciarsesionCode.GDSeleccionObjects1.length = 0;
gdjs.IniciarsesionCode.GDSeleccionObjects2.length = 0;
gdjs.IniciarsesionCode.GDSeleccionObjects3.length = 0;
gdjs.IniciarsesionCode.GDEmailObjects1.length = 0;
gdjs.IniciarsesionCode.GDEmailObjects2.length = 0;
gdjs.IniciarsesionCode.GDEmailObjects3.length = 0;
gdjs.IniciarsesionCode.GDContrase_95241aObjects1.length = 0;
gdjs.IniciarsesionCode.GDContrase_95241aObjects2.length = 0;
gdjs.IniciarsesionCode.GDContrase_95241aObjects3.length = 0;
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.IniciarsesionCode.GDNewToggleSwitchObjects3.length = 0;
gdjs.IniciarsesionCode.GDTituloObjects1.length = 0;
gdjs.IniciarsesionCode.GDTituloObjects2.length = 0;
gdjs.IniciarsesionCode.GDTituloObjects3.length = 0;
gdjs.IniciarsesionCode.GDNewButtonObjects1.length = 0;
gdjs.IniciarsesionCode.GDNewButtonObjects2.length = 0;
gdjs.IniciarsesionCode.GDNewButtonObjects3.length = 0;
gdjs.IniciarsesionCode.GDAun_9595noObjects1.length = 0;
gdjs.IniciarsesionCode.GDAun_9595noObjects2.length = 0;
gdjs.IniciarsesionCode.GDAun_9595noObjects3.length = 0;
gdjs.IniciarsesionCode.GDErrorObjects1.length = 0;
gdjs.IniciarsesionCode.GDErrorObjects2.length = 0;
gdjs.IniciarsesionCode.GDErrorObjects3.length = 0;


return;

}

gdjs['IniciarsesionCode'] = gdjs.IniciarsesionCode;
