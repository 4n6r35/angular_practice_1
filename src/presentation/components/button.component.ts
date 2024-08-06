import { Component, input } from "@angular/core";

@Component({
    selector: 'button-component',
    standalone: true,
    imports: [],
    template: `
        <button 
            (click)="handlerClick()"
            type="button" 
            class="py-1 w-[250px] bg-slate-900 text-white rounded-md capitalize"
        >{{labelButton()}} 
        </button>
    `
})
export default class ButtonComponent {
    //Señales
    labelButton = input.required<string>();
    callbackButton = input.required<() => void>();

    //Para ejecutal el evento click
    handlerClick = (): void => {
        this.callbackButton()();
    }
}