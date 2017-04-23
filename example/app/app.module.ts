/**
 * Created by Mikhail on 4/21/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { BindingModule }  from './model/binding.module';
import { BindingComponent } from './component/binding.component';
// import { ProductComponent } from './component/product.component';

import { BuiltInModule }  from './model/built-in.module';
import { BuiltinComponent } from './component/built-in.component';

import { EventsFormsModule }  from './model/events-forms.module';
import { EventsFormsComponent } from './component/events-forms.component';

import { BookFormsModule }  from './model/forms.module';
import { FormsComponent } from './component/forms.component';


@NgModule({
    imports: [BrowserModule, BindingModule, BuiltInModule,
        EventsFormsModule, BookFormsModule,
        RouterModule.forRoot([
        { path: 'chapter12', component: BindingComponent },
        { path: 'chapter13', component: BuiltinComponent },
        { path: 'chapter14-1', component: EventsFormsComponent },
        { path: 'chapter14-2', component: FormsComponent },
        { path: '**', redirectTo: '/chapter12' }
    ])],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
