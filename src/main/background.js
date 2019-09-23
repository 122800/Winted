"use strict";

chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({color: '#A66'}, function() {
		console.log("init");
	});
});