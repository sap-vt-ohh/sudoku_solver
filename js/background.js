chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

	var reg = /^.*\/\/www\.sudoku\.name\/.*$/;

	if (reg.test(tab.url)) {
		chrome.pageAction.show(tabId);
	}
});