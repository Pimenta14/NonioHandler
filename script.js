var target = "";
var adpop = "";
var nonioCalls = 0;
var cookiesCalls = 0;
var adpopCalls = 0;
var successFlagNonio = 0;
var successFlagCookies = 1;
var successFlagAd = 0;

var numCalls = 40;
var timeoutVal = 300;

var cookiesElem = "qc-cmp-ui-container qc-cmp-showing";

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
		target = "/content";
		adpop = ["fc-ab-root"]
		removeAdPopup(adpop)
		removeNONIOGlobalmedia(target);
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
		target = "/content";	
		adpop = ["fc-ab-root"]
		removeAdPopup(adpop)
		removeNONIOGlobalmedia(target);
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
		target = "/content";	
		adpop = ["fc-ab-root"]
		removeAdPopup(adpop)
		removeNONIOGlobalmedia(target);
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
			successFlagNonio = successFlagNonio + 1;
			console.log("NONIO removed")
		} catch (error) {
			console.log("" + error);
		}
	}

	if (successFlagNonio >= targetList.length) {
		nonioCalls = 0;
		successFlagNonio = 0;
	} else {
		if (nonioCalls < numCalls) {
			setTimeout(function() {
				removeClassNONIO(targetList);
			}, timeoutVal);
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
			document.getElementById(document.querySelector('[id^=' + targetList[i] + ']').id).remove();
			successFlagNonio = successFlagNonio + 1;
			console.log("NONIO removed")
		} catch (error) {
			console.log("" + error);
		}
	}
	
	if (successFlagNonio >= targetList.length) {
		nonioCalls = 0;
		successFlagNonio = 0;
	} else {
		if (nonioCalls < numCalls) {
			setTimeout(function() {
				removeIdNONIO(targetList);
			}, timeoutVal);
		}
	}
};

function removeAdPopup(adpopList) {
	//console.log("Remove AdPop tentatives = " + adpopCalls);
	document.body.style.cssText = 'overflow:auto !important';
	document.getElementsByTagName('html')[0].style.overflow = "auto";
	
	adpopCalls = adpopCalls + 1;
	var i;
	for (i = 0; i < adpopList.length; i++) {
		try {
			removeClass(adpopList[i]);
			successFlagAd = successFlagAd + 1;
			console.log("Ad Pop-up removed")
		} catch (error) {
			console.log("" + error);
		}
	}

	if (successFlagAd >= adpopList.length) {
		adpopCalls = 0;
		successFlagAd = 0;
	} else {
		if (adpopCalls < numCalls) {
			setTimeout(function() {
				removeAdPopup(adpopList);
			}, timeoutVal);
		}	
	}
};

function removeNONIOGlobalmedia(targetGlobalmedia) {
	//console.log("Remove NONIO tentatives = " + nonioGlobalmediaCalls);
	if (!(document.querySelectorAll('iframe[src^="' + targetGlobalmedia + '"]')[0])) {
		setTimeout(function() {
			removeNONIOGlobalmedia(targetGlobalmedia);
		}, timeoutVal);
	}
	else {
		//document.body.style.cssText = 'overflow:auto !important';
		//document.getElementsByTagName('html')[0].style.overflow = "auto";
		document.documentElement.style = 'overflow: auto !important';
		document.body.style = 'overflow: auto !important';
		try {
			//document.cookie.split(";").forEach(value => document.cookie = value.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));
			document.querySelectorAll('iframe[src^="' + targetGlobalmedia + '"]')[0].outerHTML = '';
			console.log("NONIO removed")
		} catch (error) {
			console.log("" + error);
		}
	}
};

function removeCookies() {
	//console.log("Clean cookies calls = " + cookiesCalls);
	document.body.style.cssText = 'overflow:auto !important';
	document.getElementsByTagName('html')[0].style.overflow = "auto";
	
	cookiesCalls = cookiesCalls + 1;
	try {
		removeClass(cookiesElem);
		successFlagCookies = 0;
		cookiesCalls = 0;
		console.log("COOKIES removed")
	} catch (error) {
		console.log("" + error);
		if (cookiesCalls < numCalls) {
			setTimeout(function() {
				removeCookies();
			}, timeoutVal);
		}
	}
}
