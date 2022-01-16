import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],

})
export class AllProductsComponent implements OnInit {
  products: any;
  copyProducts: any;
  searchTerm: any;
  direction: string = "forward";
  prop: any = "name";
  productsLength:number;
  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.httpClient.get("assets/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
      this.copyProducts = this.products;
      this.productsLength=this.products.length;
    })

  }

  search(term): void {
    let searchTerm = term.target.value;
    this.products = this.copyProducts;
    this.products = this.products.filter((prod) => {
      return prod.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    });
    this.productsLength=this.products.length;
  }





  sortOrder(): any {
    let direction = this.direction;
    let prop = this.prop;

    if (direction == "forward") {
      function AscendingSortOrder(prop) {
        return function (a, b) {
          if (a[prop] > b[prop]) {
            return 1;
          } else if (a[prop] < b[prop]) {
            return -1;
          }
          return 0;
        }
      }
      this.products = this.products.sort(AscendingSortOrder(prop));
    }


    if (direction == "reverse") {
      function DescendingSortOrder(prop) {
        return function (a, b) {
          if (a[prop] > b[prop]) {
            return -1;
          } else if (a[prop] < b[prop]) {
            return 1;
          }
          return 0;
        }
      }
      this.products = this.products.sort(DescendingSortOrder(prop));
    }



  }

}
