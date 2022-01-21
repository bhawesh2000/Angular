import { Component, OnInit } from '@angular/core';                       
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[]

  selectedDish : Dish;



  constructor(private dishser: DishService) {

   }

  ngOnInit(): void {
/*
    this.dishes=this.dishser.getDishes(); //As getDishes() method is returning a Promise and promise is being assigned to dish array object
                                            this is not correct we will reconfigure this code, we implement then and catch
 */

    /*
    this.dishser.getDishes()
    .then((dis)=>this.dishes=dis); // (dis) inside then method i receive dishes object comming in when promise resolves  
    */
   this.dishser.getDishes().subscribe((dis)=>this.dishes=dis);
  }

  onSelect(dish: Dish)
  {
    this.selectedDish=dish;
  }
}
