




var alltopic= $("[topic]");
if(alltopic.length<1){
	chrome.runtime.sendMessage({type:"cnblog-article-information", error:"没有获取到题目"});
}
else{
	var strTopicIds = "";
	alltopic.each(function(index,element) {
		if(index == (alltopic.length - 1)){
            strTopicIds  = strTopicIds + $(this).attr("topic") ;
		}else{
            strTopicIds  = strTopicIds + $(this).attr("topic") + ",";
		}
    });

	var msg = {
		type: "cnblog-article-information",
		topicIds:strTopicIds
	};
	chrome.runtime.sendMessage(msg);

}





