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
const body = document.querySelector('body')
reolacmentStrategy('ДУРКУ','дурдом')(body)