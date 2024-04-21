import { Injectable } from '@angular/core';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  constructor() { }
  getProductList(): Product[]{
    return [
      {
        id: 1,
        img: 'assets/img1.jpeg',
        name:'chemise',
        price: 1500, 
        description: 'lorem deo jho amet weranted',
      },
      {
        id: 2,
        img: 'assets/img1.jpeg',
        name:'chemise',
        price: 1500, 
        description: 'lorem deo jho amet weranted',
      },
      {
        id: 3,
        img: 'assets/img1.jpeg',
        name:'chemise',
        price: 1500, 
        description: 'lorem deo jho amet weranted',
      },
      {
        id: 4,
        img: 'assets/img1.jpeg',
        name:'chemise',
        price: 1500, 
        description: 'lorem deo jho amet weranted',
      },
      {
        id: 5,
        img: 'assets/img1.jpeg',
        name:'chemise',
        price: 1500, 
        description: 'lorem deo jho amet weranted',
      },
      {
        id: 6,
        img: 'assets/img1.jpeg',
        name:'chemise',
        price: 1500, 
        description: 'lorem deo jho amet weranted',
      },
    ];
  }
  getProductById(id: number){
    return this.getProductList().find(product => product.id == id)
  }
}
