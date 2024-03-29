const targetNode = document.body
const config = { attributes: true, childList: true, subtree: true };
let listWords = null
const filterTextContent = (word) => {
    const mapFilter = new Map([
        ['path', 'path'],
        ['polygon','polygon'],
        ['circle', 'circle'],
        ['stop','stop'],
        ['ellipse', 'ellipse'],
        ['rect','rect'],
        ['META', 'META'],
        ['LINK','LINK'],
        ['SCRIPT', 'SCRIPT'],
        ['IFRAME','IFRAME'],
        ['STYLE', 'STYLE'],
        ['IMG','IMG'],  
        ['NOSCRIPT', 'NOSCRIPT'],                     
      ]);
      return mapFilter.get(word)
}
options = {
    attributes: false,
    characterData: true,
    subtree: true,
  }
const replacmentStrategy = (destinationWord, replacmentWord) => {
    const iterableDOOM = (Element) => {
        const children = [...Element.children]
        if(children.length === 0)
            if(!filterTextContent(Element.tagName)){
                    const replacmentOutput = Element.textContent.replace(
                        new RegExp(`${destinationWord}`,'gmi'), 
                        replacmentWord 
                    )
                    Element.textContent = replacmentOutput
            }      
        children.forEach(element =>  iterableDOOM(element) );
    }
    return iterableDOOM
}

const makeReplace = () => {
    const body = document.querySelector('body')
    if(!listWords) return
    listWords.replaceState.map((wordObject) => {
        replacmentStrategy(wordObject.word, wordObject.replacmentWord)(body)
    })
}

function debounce(f, ms) {
    let isCooldown = false;
    return function() {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
  }

const debouncedMakeReplace =  debounce(makeReplace, 200)

const callback = function(mutationList, observer) {
    for(mutation of mutationList){
        if(mutation.type ==='childList') continue
        debouncedMakeReplace()
    }

};

const findElement = (wordList, key) => {
    const findedList = wordList.filter((word) => {
        return word.key === key
    }) 
    return {
        isFinded:findedList.length > 0,
        findedWord: findedList.length > 0 && findedList[0]
    }
}

const updateListWords = (currentListWords) => {
    const body = document.querySelector('body')
    const newListWords = []
    if(!listWords){ 
        listWords = currentListWords 
        return
    }
    listWords.replaceState.forEach((listWord,index) => {
        const {isFinded, findedWord} =  findElement(currentListWords.replaceState,listWord.key)
        if(isFinded){
            if(
                listWord.replacmentWord !== findedWord.replacmentWord ||
                listWord.word !== findedWord.word
            ){
                replacmentStrategy(listWord.replacmentWord, findedWord.replacmentWord)(body)
            }
            newListWords.push({...findedWord})
        }
        else{
            replacmentStrategy( listWord.replacmentWord, listWord.word )(body)
        }
    })
    if(listWords.replaceState.length < currentListWords.replaceState.length){
        newListWords.push({...currentListWords.replaceState[currentListWords.replaceState.length-1]} )
    }
    listWords.replaceState = newListWords
}

const observer = new MutationObserver(callback,options);
observer.observe(targetNode, config);

chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {
        updateListWords(request.state)
    });