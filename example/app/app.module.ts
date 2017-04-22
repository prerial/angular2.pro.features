/**
 * Created by Mikhail on 4/21/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { BindingModule }  from './model/binding.module';
import { ProductComponent } from './component/product.component';

@NgModule({
    imports: [BrowserModule, BindingModule, RouterModule.forRoot([
        { path: 'chapter12', component: ProductComponent },
        { path: 'chapter13', component: ProductComponent },
        { path: '**', redirectTo: '/chapter12' }
    ])],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
