import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  //gerçek data burasu
  products: Product[] = [];
  dataLoaded=false;
  //şimdillik gerek kalmadu
  //productResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true
  // };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    //console.log("api request başladu");
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data;
      this.dataLoaded=true;
    //console.log("api request bitti");

    });
    //console.log("Method Bittu");

  }
}
