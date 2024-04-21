import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../types/product';
import { MonServiceService } from '../mon-service.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {

  productList: Product[] =[];

  constructor(private monserviceService: MonServiceService){}
  
  ngOnInit(): void{
    this.productList= this.monserviceService.getProductList();
  }
}
