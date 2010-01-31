function remove(element) {
	if (element != null) 
		element.parentNode.removeChild(element);
}


function removeItems() {
    var opts = {
        'hide_suggestionBox' :false
    };

    var suggestionBox = document.getElementById('pagelet_pymkbox');
    var homeAdBox =document.getElementById('pagelet_adbox');
    var connectBox = document.getElementById('pagelet_connectbox');
    var sidebarAds = document.getElementById('sidebar_ads');




    chrome.extension.sendRequest (
    {
      "type" : "config",
      "keys" : ["first_run", "hide_suggestionBox", "hide_homeAdBox", "hide_connectBox", "hide_sidebarAds"]
    },
    function (data) {
	
	
	       if (data["hide_suggestionBox"]==="true") {
		remove(suggestionBox);
		}
	       if (data["hide_homeAdBox"]==="true") {
		remove(homeAdBox);
		}
		if (data["hide_connectBox"]==="true") {
		    remove(connectBox);
		}
		if (data["hide_sidebarAds"]==="true") {
		    if (sidebarAds)
		        sidebarAds.style.visibility= 'hidden';
		}else {
		    if (sidebarAds)
		        sidebarAds.style.visibility= 'visible';
		}
	
    });
    
}


function toggle(element){
    if (element==='suggestionBox'){
        window.localStorage.hide_suggestionBox = document.optionsform.hide_suggestionBox.checked;
    }else if (element === 'homeAdBox') {
        window.localStorage.hide_homeAdBox = document.optionsform.hide_homeAdBox.checked;
    }else if (element === 'connectBox') {
        window.localStorage.hide_connectBox = document.optionsform.hide_connectBox.checked;
    }else if (element === 'sidebarAds') {
        window.localStorage.hide_sidebarAds = document.optionsform.hide_sidebarAds.checked;
    }
}


function refresh(){
    window.location.reload();
}


if (location.href.indexOf("facebook.com")!= -1) {
    chrome.extension.sendRequest({msg: "icon", href:location.href});
    removeItems();
}

