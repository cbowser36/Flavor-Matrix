import { Component,Inject, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css','../recipe-types.component.css']
})
export class CocktailComponent implements OnInit {
  cocktails = [new Recipe("Strawberry Mojito","https://whiteonricecouple.com/recipe/images/Strawberry-Mojitos-1.jpg","https://whiteonricecouple.com/recipes/strawberry-mojito-cocktail/"),
  new Recipe('Jack Frost',"https://bellyfull.net/wp-content/uploads/2020/12/Jack-Frost-blog.jpg","https://bellyfull.net/jack-frost-winter-cocktail/#wprm-recipe-container-41565"),
  new Recipe('Pear Vanilla Gin Fizz',"https://shortgirltallorder.com/wp-content/uploads/2020/01/Pear-Vanilla-Gin-Fiz.jpg","https://shortgirltallorder.com/pear-vanilla-gin-fizz?epik=dj0yJnU9WUhpNTBWZFhDb29GQ2FJeG9BTkRpSDFIck1wc0RrSHgmcD0wJm49R2s4M0RZa1dFT1p4RW1LR25HaFdrdyZ0PUFBQUFBR0FXNUpZ"),
  new Recipe('Cocoonut Blood Orange Margaritas',"https://www.freutcake.com/wp-content/uploads/2017/03/Coconut-Blood-Orange-Margarita-Recipe-6.jpg","https://www.freutcake.com/in-the-kitchen/drinks-anyone/coconut-blood-orange-margaritas/?epik=dj0yJnU9RDVxX3BtSGxNOWpMWGZkUGVQaGRORFB3Q1pKUThLa0EmcD0wJm49bW8yM2FnVV9KSVJvWWo2cmh0Zzh5dyZ0PUFBQUFBR0FXNU9N"),
  new Recipe('Cherry Vanilla Whiskey Sour',"https://www.gastronomblog.com/wp-content/uploads/2020/02/Omaha-Whiskey-Fest-2020-Cherry-Vanilla-Sour-3.jpg.webp","https://www.gastronomblog.com/cherry-whiskey-sour-cocktail/"),
  new Recipe('Blueberry Cucumber Gimlet',"https://www.gastronomblog.com/wp-content/uploads/2015/08/blueberrycucgimlet-6-735x493.jpg.webp","https://www.gastronomblog.com/blueberry-cucumber-gimlet/")
]
  constructor(@Inject(DOCUMENT) private document: Document) { }
  goToUrl(url): void {
    if (window.confirm('You Are About To Leave This Page!')){
   this.document.location.href = url;
   }
   
 }
  ngOnInit() {
  }

}
