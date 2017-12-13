let parrotTitle = null;

function toggleParrot(title) {
  if(title == "Preparrot") {
    browser.browserAction.setTitle({title: "Partyparrot"});
    browser.browserAction.setIcon({path: "icons/partyparrot.gif"});
    browser.tabs.executeScript({file: "parrotShift.js"});
  } else if(title == "Partyparrot") {
    browser.browserAction.setTitle({title: "Preparrot"});
    browser.browserAction.setIcon({path: "icons/preparrot.gif"});
  }
  var title = browser.browserAction.getTitle({});
  title.then((e) => {
    parrotTitle = e;
    console.log(parrotTitle);
  });
}

function setParrot() {
  if(parrotTitle == "Partyparrot") {
    browser.tabs.executeScript({file: "parrotShift.js"});    
  }
}



// listen to parrot button clicking
browser.browserAction.onClicked.addListener(() => {
  let title = browser.browserAction.getTitle({});
  title.then(toggleParrot);
});

// listen to tab URL changes
browser.tabs.onUpdated.addListener(setParrot);

// listen to tab switching
browser.tabs.onActivated.addListener(setParrot);

// listen for window switching
browser.windows.onFocusChanged.addListener(setParrot);



let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({
    extURL: browser.extension.getURL(`parrots/`)
  });
}

browser.runtime.onConnect.addListener(connected);