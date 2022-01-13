import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {

 products:any; 
 constructor(private httpClient: HttpClient) { 
  this.httpClient.get("assets/data.json").subscribe(data =>{
    console.log(data);
    this.products = data;
  })
      
 }
  getData() { 
    return this.products;
  }
}
