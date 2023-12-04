import { Injectable } from '@angular/core';
import { Fruit } from '../interface/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class AddOrderServiceService {

  fruitscol : Fruit[] = [];
  constructor() { }

  setUpdatedList(list : Fruit[]){
    this.fruitscol = list;
  }

  getTheUpdatedList(){
     return this.fruitscol;
  }

  addOrderToList(fruit : Fruit){
     this.fruitscol.push(fruit);
  }
}
