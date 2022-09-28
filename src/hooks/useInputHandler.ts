export default function useInputHandler(){
    const keySourceWordHandle = (e:React.KeyboardEvent,inputNode:HTMLInputElement) => {
        if(e.code === 'Enter'){
            inputNode.focus()
        }
      }
    
      const keyReplacmentWordHandle = (e:React.KeyboardEvent,callback:() => void) => {
        if(e.code === 'Enter'){
            callback()
        }
      }

    return {
        keySourceWordHandle,
        keyReplacmentWordHandle,
    }
}