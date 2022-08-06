export interface IModal{
    open:boolean,
    handleClose:() => void,
    children: React.ReactElement;
}

export interface IListItem{
    word:string,
    replacmentWord:string,
    checked:boolean,
    key:string,
}

export interface IWordCard{
    handleClose:() => void,
}

export interface IChangeWord extends IWordCard{
    word:string,
    replacmentWord:string,
    wordKey:string,
}

export interface IWordState{
    word:string,
    replacmentWord:string
  }
  
