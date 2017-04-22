/**
 * Created by Mikhail on 4/21/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { Product } from './product.model';
import { EventsFormsComponent } from '../component/events-forms.component';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [ EventsFormsComponent ],
    exports: []
})
export class EventsFormsModule { }
