import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero | undefined; 
  heroes: Hero[] | undefined;
  
  constructor(private heroService: HeroService, private messageService: MessageService) {  }
  
  ngOnInit() {
    this.getHeroes();
  }

   onSelect(hero: Hero): void{
     this.selectedHero = hero;
     this.messageService.add(`HeroesComponent: se seleccionÃ³ el heroe con id:${hero.id}`);

   }

   getHeroes(): void {
     this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
   }
}
