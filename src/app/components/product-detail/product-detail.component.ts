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
  imgPath:String;
  specsTab:any="none";
  reviewsTab:any="none";
  constructor(private dataService:DataService,private route: ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      // console.log(data);
      this.products = data;
      this.id =Number(this.route.snapshot.paramMap.get('id'));
      console.log(this.products,this.id);
      this.product = this.products.find((product) => product.id == this.id);
      
     this.previous=this.id-1;    
     this.next=this.id+1;
     this.imgPath="../../../assets/img/"+this.product.image+".jpg";
    })    
  }
  tabChange(event, tab):void{
       let tabcontent;
    
      //get all elements with class="tabcontent" and hide them
       tabcontent = document.getElementsByClassName("tabcontent");
      for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
       }
      //displays the particular tab that is selected
      document.getElementById(tab).style.display = "block";
      

  }
  

  


  // getProductDetail():any{
  //   return this.product=this.products.filter(p=>p.id==this.id);
  //   console.log(this.products);
  // }
  
  
}
