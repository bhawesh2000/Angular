import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dis : Dish;
  promo: Promotion;


  constructor(private dser:DishService, private promoser: PromotionService) { }

  ngOnInit(): void {

    this.dis=this.dser.getFeaturedDish();
    this.promo=this.promoser.getFeaturedPromotion();
  }

}
