import{__awaiter,__generator}from"tslib";var blockHardwareBackButton=function(){document.addEventListener("backbutton",(function(){}))};var startHardwareBackButton=function(){var r=document;var t=false;r.addEventListener("backbutton",(function(){if(t){return}var n=0;var e=[];var a=new CustomEvent("ionBackButton",{bubbles:false,detail:{register:function(r,t){e.push({priority:r,handler:t,id:n++})}}});r.dispatchEvent(a);var i=function(r){return __awaiter(void 0,void 0,void 0,(function(){var t,n;return __generator(this,(function(e){switch(e.label){case 0:e.trys.push([0,3,,4]);if(!(r&&r.handler))return[3,2];t=r.handler(o);if(!(t!=null))return[3,2];return[4,t];case 1:e.sent();e.label=2;case 2:return[3,4];case 3:n=e.sent();console.error(n);return[3,4];case 4:return[2]}}))}))};var o=function(){if(e.length>0){var r={priority:Number.MIN_SAFE_INTEGER,handler:function(){return undefined},id:-1};e.forEach((function(t){if(t.priority>=r.priority){r=t}}));t=true;e=e.filter((function(t){return t.id!==r.id}));i(r).then((function(){return t=false}))}};o()}))};var OVERLAY_BACK_BUTTON_PRIORITY=100;var MENU_BACK_BUTTON_PRIORITY=99;export{MENU_BACK_BUTTON_PRIORITY,OVERLAY_BACK_BUTTON_PRIORITY,blockHardwareBackButton,startHardwareBackButton};