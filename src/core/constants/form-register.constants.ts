import { FormRegisterInterface } from "../../domain/interface/form-register.interface";

export const FormRegisterConstant: FormRegisterInterface[] = [
    { label: 'name', type: 'string', inputName: 'registerName', placeholder: 'add your name', error: { ok: true, message: '' } },
    { label: 'lastname', type: 'string', inputName: 'registerLastname', placeholder: 'add your lastname', error: { ok: true, message: '' } },
    { label: 'age', type: 'number', inputName: 'registerAge', placeholder: 'add your age', error: { ok: true, message: '' } },
    { label: 'email', type: 'string', inputName: 'registerEmail', placeholder: 'add your email', error: { ok: true, message: '' } },
    { label: 'password', type: 'string', inputName: 'registerPassword', placeholder: 'add your password', error: { ok: true, message: '' } }
]