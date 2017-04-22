/**
 * Created by Mikhail on 4/21/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template:   `<nav>
            <button type="button" routerLink="/chapter12" routerLinkActive="active" class="btn btn-primary btn-sm">chapter12</button>
            <button type="button" routerLink="/chapter13" routerLinkActive="active" class="btn btn-primary btn-sm">chapter13</button>
        </nav>
        <router-outlet></router-outlet>`
})
export class AppComponent  { }
