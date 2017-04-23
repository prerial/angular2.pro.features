/**
 * Created by Mikhail on 4/21/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template:   `<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
    data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <a class="navbar-brand" routerLink="/chapter12" routerLinkActive="active" href="#">Binding</a>
    <a class="navbar-brand" routerLink="/chapter13" routerLinkActive="active" href="#">Built-In</a>
    <a class="navbar-brand" routerLink="/chapter14-1" routerLinkActive="active" href="#">Events</a>
    <a class="navbar-brand" routerLink="/chapter14-2" routerLinkActive="active" href="#">Forms</a>
  </nav>
        <router-outlet></router-outlet>`,
    styles: ['.navbar-brand { font-size:1em;color: silver; }', '.navbar-brand.active { color: white; }']
})
export class AppComponent  { }
