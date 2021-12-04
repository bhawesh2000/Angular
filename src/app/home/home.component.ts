import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dis : Dish;
  promo: Promotion;
  lead: Leader;


  constructor(private dser:DishService, private promoser: PromotionService, private leadser: LeaderService) { }

  ngOnInit(): void {

    this.dis=this.dser.getFeaturedDish();
    this.promo=this.promoser.getFeaturedPromotion();
    this.lead=this.leadser.getFeaturedLeader();
  }

}
