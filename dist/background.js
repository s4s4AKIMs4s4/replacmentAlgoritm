
const reolacmentStrategy = (destinationWord, replacmentWord) => {
    const iterableDOOM = (Element) => {
        const children = [...Element.children]
        if(children.length === 0)
            Element.textContent = Element.textContent.replace(
                new RegExp(`${destinationWord}`,'gmi'), 
                replacmentWord 
            )    
        children.forEach(element =>  iterableDOOM(element) );
    }
    return iterableDOOM
}

function sendToContenJs(tabId, changeInfo, tab){
    chrome.storage.sync.get(['replaceState'], function(result) {
        chrome.tabs.sendMessage( tabId, {
            message: 'hello!',
            url: changeInfo,
            state: result,
            tabId: tabId
        })      
    });
}

// const makeReplace = () => {
//     const body = document.querySelector('body')
//     chrome.storage.sync.get(['replaceState'], function(result) {
//         result.replaceState.map((wordObject) => {
//             reolacmentStrategy(wordObject.word, wordObject.replacmentWord)(body)
//         })
//       })
// }

chrome.runtime.onInstalled.addListener(()=>{

    console.log('install')
})

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      sendToContenJs(tabId, changeInfo, tab)
    }
  );
  
  chrome.tabs.onActivated.addListener(
    function(tabId, changeInfo, tab) {
      sendToContenJs(tabId, changeInfo, tab)
    }
  ); 

async function setLocalItem (replaceState) {
    chrome.storage.sync.get(['replaceState'], function(result) {
        const replaceObj = {
            replaceState:replaceState
        }
        chrome.storage.sync.set(replaceObj, function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {state: replaceObj});
              });  
        });
      })
    
    }
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse){
    setLocalItem(request.replaceState) 
})
  
