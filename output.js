document.addEventListener('DOMContentLoaded', function () {
    var data = chrome.extension.getBackgroundPage().articleData;

    if(data.error){
        $("#content").text(data.error);

    }else{
        // $("#content").text(data.topicIds);
        var oridata = chrome.extension.getURL("result.json");
        $.getJSON(oridata,function(result){
            var ids =  data.topicIds.split(",")
            for(var i = 0 ; i<ids.length ;i++){
                var topic = result[ids[i]]
                if(null != topic && topic.length>0){
                    $("#content").append(topic + " ");
                }
            }
        });

    }
});