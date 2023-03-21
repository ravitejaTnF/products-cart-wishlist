import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductService,private cartService:CartService) { }
  productData:any[] = [];
  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.productService.getProducts().subscribe((res:any) => {
      this.productData = res;
    })
  }

  addtocart(item:any){
    this.cartService.addToCart(item);
  }


}
