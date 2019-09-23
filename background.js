"use strict";

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#A66'}, function() {
        console.log("init");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'www.vinted.fr'}
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});