import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,

    ) {}

  ngOnInit(): void {
    //this.getProducts(); ilk hali bu
    //params parametre bursau route göre hareket ediyi
    //parametre varsa categoryId yoksa getproducts gelcek!
    this.activatedRoute.params.subscribe(params=>{
   if (params["categoryId"]) {
      this.getProductsByCategory(params["categoryId"])
   }
   else{
     this.getProducts();
   }

    })
  }

  getProducts() {
    //console.log("api request başladu");
    this.productService.getProducts()
    .subscribe(response=>{
      this.products=response.data;
      this.dataLoaded=true;
    //console.log("api request bitti");

    });
    //console.log("Method Bittu");

  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId)
    .subscribe(response=>{
      this.products=response.data;
      this.dataLoaded=true;

    });

  }
}
