import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product:any;
  imagePath:any; 
  constructor() {}

  ngOnInit(): void {
    this.imagePath="../../../assets/img/"+this.product.image+".jpg";
    console.log(this.imagePath);
  }

}
