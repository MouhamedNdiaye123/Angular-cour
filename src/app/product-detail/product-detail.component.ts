import { Component, OnInit } from '@angular/core';
import { Product } from '../types/product';
import { ActivatedRoute } from '@angular/router';
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productList!: Product[];

  constructor(private activeRoute: ActivatedRoute, private monserviceService: MonServiceService) {}

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.productList = this.monserviceService.getProductById(id);
  }
}
