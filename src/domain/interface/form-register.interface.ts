export interface FormRegisterInterface{
    label: string,
    type: string,
    inputName: string,
    placeholder: string,
    error:{
        ok:boolean,
        message:string
    }
}