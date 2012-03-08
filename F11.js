var $F11 = (function(_doc,_undef){
	
	var _version='0.0.1a',
	lagacyBrowserError = 'Please upgrade to latest Versions',
	targetUndefined = 'Target undefined',
	
	fullscreen = function(elm){
		elm = elm || _doc.documentElement;
		return function(){
			if(elm.requestFullscreen)
				 elm.requestFullscreen();
			else if(elm.mozRequestFullScreen)
				elm.mozRequestFullScreen();
			else if(elm.webkitRequestFullScreen)
				elm.webkitRequestFullScreen();
			else 
				throw lagacyBrowserError;
		};
	},
	cancelFullScreen = function(){
		return function(){
			if(document.exitFullscreen)
				document.exitFullscreen() ;
			else if( document.mozCancelFullScreen)
				document.mozCancelFullScreen();
			else if(document.webkitCancelFullScreen)
				document.webkitCancelFullScreen(); 
			else
				throw lagacyBrowserError;
		}
	},
	addEvent = function(target,element,exit ){
		var fn = exit ? cancelFullScreen() : fullscreen(target) ;
		element.addEventListener("click",fn, false);
	};
	return {
		version:_version,
		fullscreen : function(element,target){
			if(element === _undef)
				throw targetUndefined;
			else
				addEvent(target,element,false);
		},
		exitFullScreen : function(element){
			if(element === _undef)
				throw targetUndefined;
			else
				addEvent(_undef,element,true);
		}
	};
})(document,undefined);