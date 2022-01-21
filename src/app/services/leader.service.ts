import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>
  {
    /*
    return Promise.resolve(LEADER);
    */

    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER), 2000);
    });
  }
  getLeader(id:string):Promise<Leader>
  {
    /*
    return Promise.resolve(LEADER.filter((leader)=>leader.id===id)[0]);
    */

    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER.filter((leader)=>leader.id===id)[0]), 2000);
    });
  }
  getFeaturedLeader():Promise<Leader>
  {
    /*
    return Promise.resolve(LEADER.filter((leader)=>leader.featured)[0]);
    */

    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER.filter((leader)=>leader.featured)[0]), 2000);
    });

  }
}
