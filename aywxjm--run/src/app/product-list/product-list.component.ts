import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(product: Product) {
   const message = 'check out ${product.name} at ${product.link}';
   const telegramUrl  = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
   window.location.href = telegramUrl;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/