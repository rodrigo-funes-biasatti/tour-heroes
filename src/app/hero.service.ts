import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from './moke-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messageMessage: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageMessage.add("Hero Service: se obtuvieron los héroes.");
    
    return of(HEROES);
  }
}
