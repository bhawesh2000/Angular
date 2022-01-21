import { Component, OnInit, Input, ViewChild } from '@angular/core';


import { Dish } from '../shared/dish';

//params gives me access to the router parameter and activated route to fetch routes value
import { Params, ActivatedRoute } from '@angular/router';

//location enables me to track my page in history of browser
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

import { delay, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  //FormBuilder allow us to create Reactive form within typescript code and then able to tie them in template file
import { comment, Rating } from '../shared/comment';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

 dishselected: Dish;
 dishIds:string[];
 prev:string;
 next:string;
 rateform:FormGroup;
 feedback: comment;
 rating=Rating;
 d=new Date();

 @ViewChild('rform') rateformDirective:any; // i will able to refer to rateform with name 'rform' and refer to this by arateformDirective


 formErrors:any = {
  'author': '',
  'comment': '',
  'date': '',
};

validationMessages:any = {
  'author': {
    'required':      'Name is required.',
    'minlength':     'Name must be at least 2 characters long.',
    'maxlength':     'Name cannot be more than 25 characters long.'
  },
  
  'comment': {
    'required':       'feedback number is required.',
  },
  'date':{
    'required':       'Date required',
  }
};
  
  constructor(private dishservice:DishService, private location: Location, private route:ActivatedRoute, private fb:FormBuilder) { 

    this.createform();
  }

  ngOnInit(): void {
    this.dishservice.getDishIds().subscribe((dishIds)=>this.dishIds=dishIds);  

    this.route.params.pipe(switchMap((params:Params)=>this.dishservice.getDish(params['id'])))  
    .subscribe((dish)=>{ this.dishselected=dish; this.setPrevNext(dish.id); }); 
  }
      //dishIds is sending out observable that i need to subcribe
  //getDishIds sending observable which i'm subscribing then i have dishIds available  

   //If we are changing route parameter then i can navigate different dish 

  setPrevNext(dishId: string): void
  {
    const index=this.dishIds.indexOf(dishId);
    this.prev=this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next=this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(){
    this.location.back();
  }

  createform()
  {
    this.rateform=this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: ' ',
      comment: ['',[Validators.required]],
      date: this.d
    });

    this.rateform.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?:any)
  {
    if (!this.rateform) { return; }
    const form = this.rateform;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  Submit()
  {
    this.feedback=this.rateform.value;   //feedback form gives a property called value which allows me to retrieve the current value of these from feedback form
    this.dishselected.comments.push(this.feedback);
    console.log(this.feedback);
    this.rateform.reset({
      author:' ',
      rating: ' ',
      comment:' '
    });

    this.rateformDirective.resetForm();
  }

}

