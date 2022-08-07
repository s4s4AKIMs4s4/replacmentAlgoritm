// Select the node that will be observed for mutations
const targetNode = document.body

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };


let requestS = null

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

const makeReplace = (result) => {
    const observer = new MutationObserver(callback);
    observer.disconnect();
    observer.observe(targetNode, config);

    const body = document.querySelector('body')
    result.replaceState.map((wordObject) => {
        reolacmentStrategy(wordObject.word, wordObject.replacmentWord)(body)
    })

}
const callback = function(mutationList, observer) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            // console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            // console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    }
    makeReplace
};


chrome.runtime.onMessage.addListener(

    async function (request, sender, sendResponse) {
        requestS = request.state
        console.log(request.state)
        makeReplace(request.state)
    });