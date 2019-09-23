let changeColour = document.getElementById('changeColour');

changeColour.onclick = function(element) {
    let colour = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColour = "' + colour + '"; alert("hi");'});
    });
};