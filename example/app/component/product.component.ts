/**
 * Created by Mikhail on 4/21/2017.
 */
import { Component } from '@angular/core';

import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';

@Component({
    selector: 'product',
    templateUrl: 'app/templates/product.template.html'
})

export class ProductComponent {

    model: Model = new Model();

    getClasses(): string {
        return this.model.getProducts().length > 5 ? 'bg-success' : 'bg-warning';
    }
    getProduct(): Product {
        let obj = {name: 'VVVVV'};
        return obj;
    }
}
