import { Component, Input, OnInit, AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { Fruit } from '../interface/fruit.model';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowOrderComponent implements OnInit{
  @Input() fruit : Fruit;
  constructor(){
    this.fruit = { name: '', type: '', price: 0 };
  }
  ngOnInit(): void {
    this.fruit.price += 100;
  }
}
