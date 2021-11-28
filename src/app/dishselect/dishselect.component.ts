import { Component, OnInit, Input } from '@angular/core';


import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishselect',
  templateUrl: './dishselect.component.html',
  styleUrls: ['./dishselect.component.scss']
})
export class DishselectComponent implements OnInit {

 dishselected: Dish;

  constructor(private dishservice:DishService, private location: Location, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];   // to hold id
    this.dishselected=this.dishservice.getDish(id);
  }

  goBack(){
    this.location.back();
  }

}
