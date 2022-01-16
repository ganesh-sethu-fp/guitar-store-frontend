import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http"; 

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products:any;
  product:any;
  id:any
  imgPath:String;


  constructor(private route: ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      // console.log(data);
      this.products = data;
      this.id =Number(this.route.snapshot.paramMap.get('id'));
      console.log(this.products,this.id);
      this.product = this.products.find((i) => i.id == this.id);
      this.imgPath="../../../assets/img/"+this.product.image+".jpg";
    })
  }

}
