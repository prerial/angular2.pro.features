/**
 * Created by Mikhail on 4/21/2017.
 */
import { Component } from '@angular/core';

// import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';

@Component({
    selector: 'eventsforms',
    templateUrl: 'app/templates/events-forms.template.html'
})

export class EventsFormsComponent {

    model: Model = new Model();

    getClasses(): string {
        return this.model.getProducts().length > 5 ? 'bg-success' : 'bg-warning';
    }
    getProduct(): any {
//        let obj = {name: 'VVVVV'};
        return  {name: 'VVVVV'};
    }
}
