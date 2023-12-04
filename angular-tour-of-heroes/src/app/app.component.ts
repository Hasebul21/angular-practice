import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Fruit } from './interface/fruit.model';
import { AddOrderServiceService } from './add-order-service/add-order-service.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-tour-of-heroes';
  fruitscol : Fruit[] = [
    {name : 'papaya', type : 'veg', price : 10},
    {name : 'apple', type : 'veg', price : 20.54},
    {name : 'alu', type : 'veg', price : 8787},
  ];

  private subscription : Subscription | undefined;
  constructor(private addService : AddOrderServiceService){

  }
  ngOnInit(): void {
     this.addService.setUpdatedList(this.fruitscol);
     this.fruitscol = this.addService.getTheUpdatedList();
    //  this. subscription = interval(1000).subscribe((count) =>{
    //    console.log(count);
    //  });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
