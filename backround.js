// background.js
chrome.commands.onCommand.addListener(function(command) {
  if (command === "cycleBackward") {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      chrome.tabs.query({active: true, currentWindow: true}, function(activeTabs) {
        var currentIndex = tabs.indexOf(activeTabs[0]);
        var newIndex = (currentIndex === 0) ? tabs.length - 1 : currentIndex - 1;
        chrome.tabs.update(tabs[newIndex].id, {active: true});
      });
    });
  } else if (command === "cycleForward") {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      chrome.tabs.query({active: true, currentWindow: true}, function(activeTabs) {
        var currentIndex = tabs.indexOf(activeTabs[0]);
        var newIndex = (currentIndex === tabs.length - 1) ? 0 : currentIndex + 1;
        chrome.tabs.update(tabs[newIndex].id, {active: true});
      });
    });
  }
});
