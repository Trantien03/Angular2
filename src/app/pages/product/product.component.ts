import { Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',


})
export class ProductComponent{
  id: number = 1;
product: any= {
  id: 1,
  title: 'iPhone 9',
  price: 549,
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
}
constructor(private route: ActivatedRoute, private http: HttpClient) {
   }
   ngOnInit(){
     this.route.params.subscribe(params=>{
       this.id = params['id'];
       this.getProduct();
     })
   }
   // call API: https://dummyjson.com/products/ + this.id
  getProduct(){
  // call api
  const url = 'https://dummyjson.com/products/'+this.id;
  this.http.get<any>(url).subscribe(data=>{
    //set data to product
    this.product = data;
  })
  }
}
