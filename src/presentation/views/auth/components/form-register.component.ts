import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ZodError } from "zod";
import { FormRegisterConstant } from '../../../../core/constants/form-register.constants';
import { DataRegister } from "../../../../domain/model/data-register.model";
import { RegiterZodSchema } from "../../../../domain/schemas/register.schema";
import ButtonComponent from "../../../components/button.component";

@Component({
    selector: 'form-register-component',
    standalone: true,
    imports: [ButtonComponent, ReactiveFormsModule],
    template: `
        <form class="flex flex-col gap-5 w-[250px]" [formGroup]="registerForm">
            <div class="flex flex-col gap-2">
                @for (input of inputsForm; track $index) {
                    <section class="flex flex-col gap-1"> 
                        <label class="capitalize" [for]="input.inputName">{{input.label}}</label>
                        <input
                            class="px-3 py-1 border rounded-md placeholder:capitalize" 
                            [type]="input.type" 
                            [id]="input.inputName" 
                            [name]="input.inputName" 
                            [placeholder]="input.placeholder"
                            [formControlName]="input.inputName"
                            (keydown)="handlerOnKeyDown(input.inputName)"
                        >

                        <p class="text-red-500">{{getRegisterFormError(input.inputName)?.message}}</p>
                    </section>
                }
            </div>
        <button-component [callbackButton]="handlerOnSubmint" [labelButton]="'send'"/>
        </form>
    `
})

export default class FormRegisterComponent implements OnInit, OnDestroy {
    formBuilder = new FormBuilder;
    inputsForm = FormRegisterConstant;
    newDataRegister!: DataRegister;
    registerForm!:  FormGroup;
    registerFormSubscription!: Subscription;
    registerFormErrors = signal<{ property: string, message: string }[]>([]);


    ngOnInit() {
        this.builderForm();
        this.initSubscription();
    }

    getRegisterFormError(key:string): { property: string, message: string } | null {
        const error = this.registerFormErrors().find(error => error.property === key);
        return error || null
    }

    initSubscription() {
        this.registerFormSubscription = this.registerForm.valueChanges.subscribe();
    }
  
    handlerOnSubmint = () => {
        const isAllok = this.validateInputs();
        
        if (isAllok) {
            console.log("validacion correcta")
            return;
        }

        console.log("validacion incorrecta")
    }

    validateInputs (): boolean {
        let {registerAge} = this.registerForm.value;
        registerAge = Number(registerAge);

        try {
            RegiterZodSchema.parse({...this.registerForm.value, registerAge});
            return true;
    
        } catch (error) {
            if (error instanceof ZodError) {
                const errors = error.errors.map(property => ({
                    property: property.path.join('.'),
                    message: property.message
                }))
                console.log(errors);
                this.registerFormErrors.set(errors);
            }
                
            return false;
        }
    }

    handlerOnChange = (event: any) => {
        console.log(event.target.registerName, event.target.value);
    }

    builderForm() {
        let forms = new Object();
        this.inputsForm.map(input => 
            forms = {...forms, [input.inputName]: ''}
        );

        this.registerForm = this.formBuilder.group(forms);
    }

    ngOnDestroy(): void {
        this.registerFormSubscription.unsubscribe();
    }

    handlerOnKeyDown(key:string) {
        const error = this.registerFormErrors().filter(error => error.property !== key);
        this.registerFormErrors.set(error);
    }
}