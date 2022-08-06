import React, { useEffect } from "react"
import { IWordState } from "../models"



function useCardchangeWords(props:IWordState){


    const [wordState, setWordState] = React.useState<IWordState>({
        replacmentWord:'',
        word:''
      })
    
      const changeWord = (e:React.ChangeEvent<HTMLInputElement>) => {
        setWordState((prev) => {
          console.log('prev')
          console.log(prev)
          return {...prev,word:e.target.value}
        })  
      }
    
      const changeReplacment = (e:React.ChangeEvent<HTMLInputElement>) => {
        setWordState((prev) => {
          return {...prev,replacmentWord:e.target.value}
        })  
      }
      return {wordState, changeWord, changeReplacment,setWordState}
}
export default useCardchangeWords