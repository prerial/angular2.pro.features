/**
 * Created by Mikhail on 4/21/2017.
 */
import { ApplicationRef, Component } from '@angular/core';

import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';

@Component({
    selector: 'binding',
    templateUrl: 'app/templates/binding.template.html'
})

export class BindingComponent {

    fontSizeWithUnits: string = '30px';
    fontSizeWithoutUnits: string= '30';
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }
    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }
    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return 'p-a-1 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    }
    getClasses(): string {
        return this.model.getProducts().length > 5 ? 'bg-success' : 'bg-warning';
    }

    getClasses1(key: number): string {
        let product = this.model.getProduct(key);
        return 'p-a-1 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    }

    getClassMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            'text-xs-center bg-danger': product.name === 'Kayak',
            'bg-info': product.price < 50
        };
    }
    getStyles(key: number) {
        let product = this.model.getProduct(key);
        return {
            fontSize: '30px',
            'margin.px': 100,
            color: product.price > 50 ? 'red' : 'green'
        };
    }
    getProduct(id: number): Object {
        return this.model.getProduct(id);
    }

}
