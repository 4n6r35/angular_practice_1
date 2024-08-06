import { Component } from "@angular/core";
import FormRegisterComponent from "./components/form-register.component";

@Component({
    selector: 'auth-view',
    standalone: true,
    imports: [FormRegisterComponent],
    template: `
    <section>
        <main class="w-screen h-screen grid place-content-center gap-5">
            <h1 class="text-center font-bold text-2xl">Register</h1>
            <form-register-component/>
        </main>
    </section>
    `
})
export default class AuthViewComponent { }