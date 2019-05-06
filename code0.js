gdjs.MenuCode = {};
gdjs.MenuCode.GDSpaceObjects1= [];
gdjs.MenuCode.GDSpaceObjects2= [];
gdjs.MenuCode.GDTheArmadaObjects1= [];
gdjs.MenuCode.GDTheArmadaObjects2= [];
gdjs.MenuCode.GDvsObjects1= [];
gdjs.MenuCode.GDvsObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDtvObjects1= [];
gdjs.MenuCode.GDtvObjects2= [];
gdjs.MenuCode.GDmusicnoteObjects1= [];
gdjs.MenuCode.GDmusicnoteObjects2= [];
gdjs.MenuCode.GDIGObjects1= [];
gdjs.MenuCode.GDIGObjects2= [];
gdjs.MenuCode.GDstartObjects1= [];
gdjs.MenuCode.GDstartObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.MenuCode.GDstartObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtvObjects1Objects = Hashtable.newFrom({"tv": gdjs.MenuCode.GDtvObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDmusicnoteObjects1Objects = Hashtable.newFrom({"musicnote": gdjs.MenuCode.GDmusicnoteObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDIGObjects1Objects = Hashtable.newFrom({"IG": gdjs.MenuCode.GDIGObjects1});gdjs.MenuCode.eventsList0xb2358 = function(runtimeScene) {

{


{
gdjs.MenuCode.GDSpaceObjects1.createFrom(runtimeScene.getObjects("Space"));
{for(var i = 0, len = gdjs.MenuCode.GDSpaceObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSpaceObjects1[i].setXOffset(gdjs.MenuCode.GDSpaceObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.MenuCode.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstartObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.MenuCode.GDtvObjects1.createFrom(runtimeScene.getObjects("tv"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDtvObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=pCWePloXOXY", runtimeScene);
}}

}


{

gdjs.MenuCode.GDmusicnoteObjects1.createFrom(runtimeScene.getObjects("musicnote"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDmusicnoteObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://distrokid.com/hyperfollow/theraputtydave/not-today", runtimeScene);
}}

}


{

gdjs.MenuCode.GDIGObjects1.createFrom(runtimeScene.getObjects("IG"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDIGObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/theraputtydave/", runtimeScene);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "G:\\My Games\\On The Moon\\On The Moon. FOR THE GAMEals.mp3", 0, false, 0, 1);
}}

}


{


{
}

}


}; //End of gdjs.MenuCode.eventsList0xb2358


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MenuCode.GDSpaceObjects1.length = 0;
gdjs.MenuCode.GDSpaceObjects2.length = 0;
gdjs.MenuCode.GDTheArmadaObjects1.length = 0;
gdjs.MenuCode.GDTheArmadaObjects2.length = 0;
gdjs.MenuCode.GDvsObjects1.length = 0;
gdjs.MenuCode.GDvsObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDtvObjects1.length = 0;
gdjs.MenuCode.GDtvObjects2.length = 0;
gdjs.MenuCode.GDmusicnoteObjects1.length = 0;
gdjs.MenuCode.GDmusicnoteObjects2.length = 0;
gdjs.MenuCode.GDIGObjects1.length = 0;
gdjs.MenuCode.GDIGObjects2.length = 0;
gdjs.MenuCode.GDstartObjects1.length = 0;
gdjs.MenuCode.GDstartObjects2.length = 0;

gdjs.MenuCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['MenuCode'] = gdjs.MenuCode;
