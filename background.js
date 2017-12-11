function toggleParrot(title) {
  if(title == "Preparrot") {
    browser.browserAction.setTitle({title: "Partyparrot"});
    browser.browserAction.setIcon({path: "icons/partyparrot.gif"});
    browser.tabs.executeScript({file: "parrotShift.js"});
  } else {
    browser.browserAction.setTitle({title: "Preparrot"});
    browser.browserAction.setIcon({path: "icons/preparrot.gif"});
  }
}

browser.browserAction.onClicked.addListener(() => {
  var gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleParrot);
})

var portFromCS;
function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({
    extURL: browser.extension.getURL(`parrots/`)
  });
}

browser.runtime.onConnect.addListener(connected);
/*
bookmark-itを参考にタブ変更時のリスナーを設定し，各々のタブでparrotShift()を実行すればよい？
*/
