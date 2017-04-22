/**
 * Created by Mikhail on 4/21/2017.
 */
import { ApplicationRef, Component } from '@angular/core';

import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';

@Component({
    selector: 'builtin',
    templateUrl: 'app/templates/built-in.template.html'
})

export class BuiltinComponent {

    targetName: string = 'Kayak';
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }
    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    getProductCount(): number {
        return this.getProducts().length;
    }

}
