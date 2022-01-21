import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';  //to emit only one value we use of
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  

  getDishes(): Observable<Dish[]> 
  {
    return of(DISHES).pipe(delay(2000));
  } 
  //getDishes() method return observable & let component subscribe to these observable and make use of observable
   /*
    return Promise.resolve(DISHES);
    */

// when getDishes method is called will return promise by creating new promise, when new promise is created, inside promise we have function resolve and reject as two parameter but we implemented only resolve function   
/*
return new Promise(resolve=> {     

// we will create delay of 2sec to resolve this, setTimeout exectute & it will resolve delevering Dishes. 
      setTimeout(()=>resolve(DISHES), 2000); 
    });
    */

 
  getDish(id: string) : Observable<Dish>
  {
   return of(DISHES.filter((dish)=>(dish.id===id))[0]).pipe(delay(2000));
  }
    /*
   return Promise.resolve(DISHES.filter((dish)=>dish.id===id)[0]); 
   */

   /*
   return new Promise(resolve=>{
     setTimeout(()=>resolve(DISHES.filter((dish)=>dish.id===id)[0]), 2000);   //when promise is resolved will display dish of given id
   });
   */

   
  getFeaturedDish(): Observable<Dish>
  {
    return of(DISHES.filter((dish)=>dish.featured)[0]).pipe(delay(2000));
  }
    /*
    return Promise.resolve((dish)=>dish.featured)[0]);
    */

    /*
    return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES.filter((dish)=>dish.featured)[0]), 2000);
    });
    */

  
  getDishIds():Observable<string[] | any>
  {
    return of(DISHES.map(dish=>dish.id));
  }
  

}
