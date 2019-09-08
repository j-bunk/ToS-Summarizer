var menuItem = {
    "id": "summarize",
    "title": "Summarize",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

// function fixedEncodeURI (str) {
//     return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
// }

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId =="summarize" && clickData.selectionText){
        const keywords = ["social media", "location", "automated renewal", "personalized customized advertising", "cookies", "royalty-free", "assets"]
        var highlightTxt=clickData.selectionText;
        if( keywords.some(keywords => highlightTxt.includes(keywords) )) {
        
        var wikiUrl= "http://127.0.0.1:3002/"; //+ highlightTxt;
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };
        chrome.windows.create(createData, function(){});
    }
}
});