chrome.action.onClicked.addListner((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["days_calculator.js "],
    });
});