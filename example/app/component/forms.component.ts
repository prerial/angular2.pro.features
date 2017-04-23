/**
 * Created by Mikhail on 4/21/2017.
 */
import { Component } from '@angular/core';

import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';

@Component({
    selector: 'forms',
    templateUrl: 'app/templates/forms.template.html'
})

export class FormsComponent {

    model: Model = new Model();
    selectedProduct: string;

    getSelected(product: Product): boolean {
        return product.name === this.selectedProduct;
    }
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }

}
