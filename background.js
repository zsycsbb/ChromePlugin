
var script_src = chrome.runtime.getURL('enable.js');
var inject_script =
    "var script = document.createElement('script');\
    script.src = '" + script_src + "';
	document.body.appendChild(script);"
var script = {
    code: inject_script,
    allFrames: true
};

function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
	if(getDomainFromUrl(tab.url).toLowerCase()=="ks.sojump.hk"){
		chrome.pageAction.show(tabId);

        if (changeInfo.status == 'complete') {
            chrome.tabs.executeScript(tab.id, script);
        }

	}
};




chrome.tabs.onUpdated.addListener(checkForValidUrl);



var articleData = {};
articleData.error = "加载中...";
chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){

	if(request.type!=="cnblog-article-information")
		return;
	articleData = request;
});





