const targetNode = document.body
const config = { attributes: true, childList: true, subtree: true };
let listWords = null
// голифан идеал 
// path polygon circle stop ellipse rect META LINK SCRIPT IFRAME STYLE  IMG NOSCRIPT
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

const reolacmentStrategy = (destinationWord, replacmentWord) => {
    const iterableDOOM = (Element) => {
        const children = [...Element.children]
        if(children.length === 0)
            if(!filterTextContent(Element.tagName))
                Element.textContent = Element.textContent.replace(
                    new RegExp(`${destinationWord}`,'gmi'), 
                    replacmentWord 
                )       
        children.forEach(element =>  iterableDOOM(element) );
    }
    return iterableDOOM
}

const makeReplace = () => {
    const body = document.querySelector('body')
    if(!listWords) return
    listWords.replaceState.map((wordObject) => {
        reolacmentStrategy(wordObject.word, wordObject.replacmentWord)(body)
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

const debouncedMakeReplace =  debounce(makeReplace, 500)

const callback = function(mutationList, observer) {
    debouncedMakeReplace()
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
                reolacmentStrategy(listWord.replacmentWord, findedWord.replacmentWord)(body)
            }
            newListWords.push({...findedWord})
        }
        else{
            reolacmentStrategy(listWord.replacmentWord,listWord.word)(body)
        }
    })
    if(listWords.replaceState.length < currentListWords.replaceState.length){
        newListWords.push({...currentListWords.replaceState[currentListWords.replaceState.length-1]} )
    }
    listWords.replaceState = newListWords
}
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {
        updateListWords(request.state)
        console.log(request.state)
        makeReplace()
    });