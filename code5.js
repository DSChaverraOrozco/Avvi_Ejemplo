gdjs.RachaCode = {};
gdjs.RachaCode.localVariables = [];
gdjs.RachaCode.GDBannerObjects1= [];
gdjs.RachaCode.GDBannerObjects2= [];
gdjs.RachaCode.GDLogoObjects1= [];
gdjs.RachaCode.GDLogoObjects2= [];
gdjs.RachaCode.GDMenuObjects1= [];
gdjs.RachaCode.GDMenuObjects2= [];
gdjs.RachaCode.GDLogo_9595rachaObjects1= [];
gdjs.RachaCode.GDLogo_9595rachaObjects2= [];
gdjs.RachaCode.GDSmallPlasticGreenRoundSliderObjects1= [];
gdjs.RachaCode.GDSmallPlasticGreenRoundSliderObjects2= [];
gdjs.RachaCode.GDFuegoObjects1= [];
gdjs.RachaCode.GDFuegoObjects2= [];
gdjs.RachaCode.GDNumeroObjects1= [];
gdjs.RachaCode.GDNumeroObjects2= [];
gdjs.RachaCode.GDTituloObjects1= [];
gdjs.RachaCode.GDTituloObjects2= [];
gdjs.RachaCode.GDTitulo2Objects1= [];
gdjs.RachaCode.GDTitulo2Objects2= [];
gdjs.RachaCode.GDNewButtonObjects1= [];
gdjs.RachaCode.GDNewButtonObjects2= [];
gdjs.RachaCode.GDNewLightObjects1= [];
gdjs.RachaCode.GDNewLightObjects2= [];
gdjs.RachaCode.GDBanner2Objects1= [];
gdjs.RachaCode.GDBanner2Objects2= [];
gdjs.RachaCode.GDTitulo3Objects1= [];
gdjs.RachaCode.GDTitulo3Objects2= [];


gdjs.RachaCode.mapOfGDgdjs_9546RachaCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.RachaCode.GDMenuObjects1});
gdjs.RachaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > -(1);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.RachaCode.GDNewButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Numero"), gdjs.RachaCode.GDNumeroObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDNumeroObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNumeroObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.RachaCode.GDNumeroObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNumeroObjects1[i].setCharacterSize(200);
}
}{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewButtonObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewButtonObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) < 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Numero"), gdjs.RachaCode.GDNumeroObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Opacity").setOpacity(50);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNumeroObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNumeroObjects1[i].setCharacterSize(80);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.RachaCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) < 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RachaCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.RachaCode.GDNewButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RachaCode.GDNewButtonObjects1[k] = gdjs.RachaCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.RachaCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12874084);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "RachaCambiar", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.RachaCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Tween").addObjectScaleTween3("Sube", 0.05, "easeOutBack", 0.8, false, false);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewLightObjects1[i].setRadius(500);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.RachaCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Tween").addObjectScaleTween3("Sube", 0.10, "easeOutBack", 0.8, false, false);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewLightObjects1[i].setRadius(600);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.RachaCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Tween").addObjectScaleTween3("Sube", 0.15, "easeOutBack", 0.8, false, false);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewLightObjects1[i].setRadius(700);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.RachaCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Tween").addObjectScaleTween3("Sube", 0.20, "easeOutBack", 0.8, false, false);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewLightObjects1[i].setRadius(800);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 20;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.RachaCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Tween").addObjectScaleTween3("Sube", 0.25, "easeOutBack", 0.8, false, false);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewLightObjects1[i].setRadius(900);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 25;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.RachaCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Tween").addObjectScaleTween3("Sube", 0.30, "easeOutBack", 0.8, false, false);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewLightObjects1[i].setRadius(1000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 30;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.RachaCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("Tween").addObjectScaleTween3("Sube", 0.35, "easeOutBack", 0.8, false, false);
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewLightObjects1[i].setRadius(1100);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fuego"), gdjs.RachaCode.GDFuegoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.RachaCode.GDNewLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo2"), gdjs.RachaCode.GDTitulo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo3"), gdjs.RachaCode.GDTitulo3Objects1);
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "RachaCambiar", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.RachaCode.GDFuegoObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDFuegoObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 0, 0, 0, 1.1, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.RachaCode.GDTitulo2Objects1.length ;i < len;++i) {
    gdjs.RachaCode.GDTitulo2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.RachaCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.RachaCode.GDNewLightObjects1[i].setPosition((( gdjs.RachaCode.GDFuegoObjects1.length === 0 ) ? 0 :gdjs.RachaCode.GDFuegoObjects1[0].getCenterXInScene()),(( gdjs.RachaCode.GDFuegoObjects1.length === 0 ) ? 0 :gdjs.RachaCode.GDFuegoObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.RachaCode.GDTitulo3Objects1.length ;i < len;++i) {
    gdjs.RachaCode.GDTitulo3Objects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.RachaCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RachaCode.mapOfGDgdjs_9546RachaCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Navegador", false);
}}

}


};

gdjs.RachaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RachaCode.GDBannerObjects1.length = 0;
gdjs.RachaCode.GDBannerObjects2.length = 0;
gdjs.RachaCode.GDLogoObjects1.length = 0;
gdjs.RachaCode.GDLogoObjects2.length = 0;
gdjs.RachaCode.GDMenuObjects1.length = 0;
gdjs.RachaCode.GDMenuObjects2.length = 0;
gdjs.RachaCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.RachaCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.RachaCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.RachaCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.RachaCode.GDFuegoObjects1.length = 0;
gdjs.RachaCode.GDFuegoObjects2.length = 0;
gdjs.RachaCode.GDNumeroObjects1.length = 0;
gdjs.RachaCode.GDNumeroObjects2.length = 0;
gdjs.RachaCode.GDTituloObjects1.length = 0;
gdjs.RachaCode.GDTituloObjects2.length = 0;
gdjs.RachaCode.GDTitulo2Objects1.length = 0;
gdjs.RachaCode.GDTitulo2Objects2.length = 0;
gdjs.RachaCode.GDNewButtonObjects1.length = 0;
gdjs.RachaCode.GDNewButtonObjects2.length = 0;
gdjs.RachaCode.GDNewLightObjects1.length = 0;
gdjs.RachaCode.GDNewLightObjects2.length = 0;
gdjs.RachaCode.GDBanner2Objects1.length = 0;
gdjs.RachaCode.GDBanner2Objects2.length = 0;
gdjs.RachaCode.GDTitulo3Objects1.length = 0;
gdjs.RachaCode.GDTitulo3Objects2.length = 0;

gdjs.RachaCode.eventsList0(runtimeScene);
gdjs.RachaCode.GDBannerObjects1.length = 0;
gdjs.RachaCode.GDBannerObjects2.length = 0;
gdjs.RachaCode.GDLogoObjects1.length = 0;
gdjs.RachaCode.GDLogoObjects2.length = 0;
gdjs.RachaCode.GDMenuObjects1.length = 0;
gdjs.RachaCode.GDMenuObjects2.length = 0;
gdjs.RachaCode.GDLogo_9595rachaObjects1.length = 0;
gdjs.RachaCode.GDLogo_9595rachaObjects2.length = 0;
gdjs.RachaCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.RachaCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.RachaCode.GDFuegoObjects1.length = 0;
gdjs.RachaCode.GDFuegoObjects2.length = 0;
gdjs.RachaCode.GDNumeroObjects1.length = 0;
gdjs.RachaCode.GDNumeroObjects2.length = 0;
gdjs.RachaCode.GDTituloObjects1.length = 0;
gdjs.RachaCode.GDTituloObjects2.length = 0;
gdjs.RachaCode.GDTitulo2Objects1.length = 0;
gdjs.RachaCode.GDTitulo2Objects2.length = 0;
gdjs.RachaCode.GDNewButtonObjects1.length = 0;
gdjs.RachaCode.GDNewButtonObjects2.length = 0;
gdjs.RachaCode.GDNewLightObjects1.length = 0;
gdjs.RachaCode.GDNewLightObjects2.length = 0;
gdjs.RachaCode.GDBanner2Objects1.length = 0;
gdjs.RachaCode.GDBanner2Objects2.length = 0;
gdjs.RachaCode.GDTitulo3Objects1.length = 0;
gdjs.RachaCode.GDTitulo3Objects2.length = 0;


return;

}

gdjs['RachaCode'] = gdjs.RachaCode;
