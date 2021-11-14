import { Component, OnInit, Input } from '@angular/core';


import { Dish } from '../shared/dish';


@Component({
  selector: 'app-dishselect',
  templateUrl: './dishselect.component.html',
  styleUrls: ['./dishselect.component.scss']
})
export class DishselectComponent implements OnInit {

  @Input() dishselected: Dish;

  constructor() { }

  ngOnInit(): void {
  }

}
