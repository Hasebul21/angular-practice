import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fruit } from '../interface/fruit.model';
import { AddOrderServiceService } from '../add-order-service/add-order-service.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{
  fruitss!: Fruit;

  @Output()
  clickEvent  = new EventEmitter<Fruit>();
  constructor(private addService : AddOrderServiceService){
    this.fruitss = {name : '', type : '', price : 0}
  }

  ngOnInit(): void {
  }

  addOnList(){
    this.addService.addOrderToList(this.fruitss);
    //this.clickEvent.emit(this.fruitss);
    //this.clickEvent.complete();
  }
}
