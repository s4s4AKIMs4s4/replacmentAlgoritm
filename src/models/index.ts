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
    word:string,
    replacmentWord:string,
    // children: React.ReactNode;
}

