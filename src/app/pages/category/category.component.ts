import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Adapters} from "../../enums/adapters";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'page-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent{
  products: any = [];
  limit: number = Adapters.LIMIT;
  constructor(private productService: ProductService) {
  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts(this.limit).subscribe(data=>{
      this.products = data.products;
    })
  }

  loadMore(){
    this.limit+=10;
    this.getProducts();
  }
}
