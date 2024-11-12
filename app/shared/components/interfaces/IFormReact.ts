export interface IFormReact{
    label: string;
    keyIdentificator: string;
}

export interface IForm<T>{
    inputs: Array<IFormReact>;
    formType: T
}
