import { Component } from "@angular/core";
import AuthViewComponent from "../views/auth/auth.view.component";

@Component({
    selector: 'auth-page',
    standalone: true,
    imports: [AuthViewComponent],
    template: `
        <auth-view/>
    `
})
export default class AuthPageComponent { }