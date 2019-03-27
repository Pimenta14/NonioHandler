var target = "";
var nonioCalls = 0;
var cookiesCalls = 0;
var successFlag = 0;

removeNonio();

function removeNonio() {
	if (document.URL.indexOf("aquelamaquina.pt") >= 0) {
		removeCookies();
		target = ["layer_gatting", "sso_layer"];
		removeIdNONIO(target);	
	} 

	if (document.URL.indexOf("autoportal.iol.pt") >= 0) {
		removeCookies();
		target = ["nonioBox"];
		removeClassNONIO(target);
	} 

	if (document.URL.indexOf("classificadoscm.pt") >= 0) {
		removeCookies();
		target = ["sso_layer"];
		removeIdNONIO(target);
	}

	if (document.URL.indexOf("cmjornal.pt") >= 0) {
		removeCookies();
		target = ["layer_gatting", "sso_layer"];
		removeIdNONIO(target);
	} 

	if (document.URL.indexOf("dinheirovivo.pt") >= 0) {
		removeCookies();
		var iframes = document.querySelectorAll('iframe');
		for (var i = 0; i < iframes.length; i++) {
			iframes[i].parentNode.removeChild(iframes[i]);
		}
	} 

	if (document.URL.indexOf("dn.pt") >= 0) {
		removeCookies();
		target = ["tp-modal", "tp-backdrop tp-active"];
		removeClassNONIO(target);
	} 

	if (document.URL.indexOf("expresso.pt") >= 0) {
		removeCookies();
		target = ["imp-content-gate-root"];
		removeIdNONIO(target);
	}

	if (document.URL.indexOf("flash.pt") >= 0) {
		removeCookies();
		target = ["layer_gatting"];
		removeIdNONIO(target);
	}

	if (document.URL.indexOf("jn.pt") >= 0) {
		removeCookies();
		target = ["tp-modal", "tp-backdrop tp-active"];	
		removeClassNONIO(target);
	} 

	if (document.URL.indexOf("jornaldenegocios.pt") >= 0) {
		removeCookies();
		target = ["layer_gatting", "sso_layer"];	
		removeIdNONIO(target);
	} 

	if (document.URL.indexOf("maisfutebol.iol.pt") >= 0) {
		removeCookies();
		target = ["nonioBox"];
		removeClassNONIO(target);
	}

	if (document.URL.indexOf("maxima.pt") >= 0) {
		removeCookies();
		target = ["layer_gatting", "sso_layer"];
		removeIdNONIO(target);
	} 

	if (document.URL.indexOf("megahits.sapo.pt") >= 0) {
		removeCookies();
		target = ["wrapperContentGatingNonio"];
		removeIdNONIO(target);
	}

	if (document.URL.indexOf("motor24.pt") >= 0) {
		removeCookies();
		var iframes = document.querySelectorAll('iframe');
		for (var i = 0; i < iframes.length; i++) {
			iframes[i].parentNode.removeChild(iframes[i]);
		}
	} 

	if (document.URL.indexOf("noticiasmagazine.pt") >= 0) {
		removeCookies();
		var iframes = document.querySelectorAll('iframe');
		for (var i = 0; i < iframes.length; i++) {
			iframes[i].parentNode.removeChild(iframes[i]);
		}
	} 

	if (document.URL.indexOf("radiocomercial.iol.pt") >= 0) {
		removeCookies();
		target = ["nonioBox"];
		removeClassNONIO(target);
	} 

	if (document.URL.indexOf("selfie.iol.pt") >= 0) {
		removeCookies();
		target = ["nonioBox"];
		removeClassNONIO(target);
	}

	if (document.URL.indexOf("smoothfm.iol.pt") >= 0) {
		removeCookies();
		target = ["nonioBox"];
		removeClassNONIO(target);
	} 

	if (document.URL.indexOf("tvi.iol.pt") >= 0) {
		removeCookies();
		target = ["nonioBox"];
		removeClassNONIO(target);
	}

	if (document.URL.indexOf("tvi24.iol.pt") >= 0) {
		removeCookies();
		target = ["nonioBox"];
		removeClassNONIO(target);
	} 

	if (document.URL.indexOf("record.pt") >= 0) {
		removeCookies();
		target = ["layer_gatting"];
		removeIdNONIO(target);
	} 

	if (document.URL.indexOf("ojogo.pt") >= 0) {
		removeCookies();
		target = ["tp-modal", "tp-backdrop tp-active"];	
		removeClassNONIO(target);
	};
};

function removeClass(elementName) {
	var elem = document.getElementsByClassName(elementName);
	elem[0].remove();
};

function removeClassNONIO(targetList) {
	//console.log("Remove NONIO tentatives = " + nonioCalls);
	document.body.style.cssText = 'overflow:auto !important';
	document.getElementsByTagName('html')[0].style.overflow = "auto";
	nonioCalls = nonioCalls + 1;
	var i;
	for (i = 0; i < targetList.length; i++) {
		try {
			removeClass(targetList[i]);
			successFlag = successFlag + 1;
			console.log("NONIO removed")
		} catch (error) {
			console.log("" + error);
		}
	}

	if (successFlag >= targetList.length) {
		nonioCalls = 0;
		successFlag = 0;
	} else {
		if (nonioCalls < 10) {
			setTimeout(function() {
				removeClassNONIO(targetList);
			}, 500);
		}	
	}	
};

function removeIdNONIO(targetList) {
	//console.log("Remove NONIO tentatives = " + nonioCalls);
	document.body.style.cssText = 'overflow:auto !important';
	document.getElementsByTagName('html')[0].style.overflow = "auto";
	
	nonioCalls = nonioCalls + 1;
	var i;
	for (i = 0; i < targetList.length; i++) {
		try {
			document.getElementById(targetList[i]).remove();
			successFlag = successFlag + 1;
			console.log("NONIO removed")
		} catch (error) {
			console.log("" + error);
		}
	}
	
	if (successFlag >= targetList.length) {
		nonioCalls = 0;
		successFlag = 0;
	} else {
		if (nonioCalls < 10) {
			setTimeout(function() {
				removeIdNONIO(targetList);
			}, 500);
		}
	}
};

function removeCookies() {
	//console.log("Clean cookies calls = " + cookiesCalls);
	document.body.style.cssText = 'overflow:auto !important';
	document.getElementsByTagName('html')[0].style.overflow = "auto";
	cookiesCalls = cookiesCalls + 1;
	try {
		removeClass("qc-cmp-ui-container qc-cmp-showing");
		cookiesCalls = 0;
		console.log("COOKIES removed")
	} catch (error) {
			console.log("" + error);
		if (cookiesCalls < 10) {
			setTimeout(function() {
				removeCookies();
			}, 500);
		}
	}
}