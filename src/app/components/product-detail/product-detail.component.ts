import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute,Routes,RouterLink, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products:any;
  product:any;
  id: any;
  next:any;
  previous:any;
  constructor(private dataService:DataService,private route: ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      // console.log(data);
      this.products = data;
      this.id =Number(this.route.snapshot.paramMap.get('id'));
      console.log(this.products,this.id);
      this.product = this.products.find((i) => i.id == this.id);
      
     this.previous=this.id-1;    
     this.next=this.id+1;
    })    
  }

  

  


  // getProductDetail():any{
  //   return this.product=this.products.filter(p=>p.id==this.id);
  //   console.log(this.products);
  // }
  
  
}
