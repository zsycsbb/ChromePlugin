
document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().articleData;

	if(data.error){
		$("#message").text(data.error);
		$("#content").hide();
	}else{
        $("#message").hide();

        $("#btnCreatTab").click(function () {
            getOuputTab(data.topicIds);
        });

	}

});


function getOuputTab(a) {
    chrome.tabs.query({
        url: chrome.extension.getURL("output.html"),
        windowId: chrome.windows.WINDOW_ID_CURRENT
    }, function (b) {
        if (b.length == 0 || localStorage.oneOutput == "0") {
            chrome.tabs.create({url: chrome.extension.getURL("output.html")}, function (c) {

            })
        }
    })
}
