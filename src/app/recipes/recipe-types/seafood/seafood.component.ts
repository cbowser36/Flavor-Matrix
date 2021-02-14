import { Component,Inject, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.component.html',
  styleUrls: ['./seafood.component.css','../recipe-types.component.css']
})
export class SeafoodComponent implements OnInit {
  seafood= [new Recipe('Seared Scallops',"https://www.willcookforsmiles.com/wp-content/uploads/2020/07/Seared-Scallops-7-1.jpg","https://www.willcookforsmiles.com/seared-scallops/"),
  new Recipe('Lobster Rolls',"https://www.dinneratthezoo.com/wp-content/uploads/2019/12/lobster-roll-5.jpg.webp","https://www.dinneratthezoo.com/lobster-roll-recipe/"),
  new Recipe("Spicy Shrimp Tacos","https://girlwiththeironcast.com/wp-content/uploads/2019/05/118A2132-2-735x1103.jpg","https://girlwiththeironcast.com/spicy-shrimp-tacos-avocado-crema/?epik=dj0yJnU9MnkzZXQwZEo1bFNNUGVLWDlKd1dDdVByRVllSzZVTG0mcD0wJm49dUJ6RlBKYnRaNFN4dzJVX0U1U0J3QSZ0PUFBQUFBR0FXN1A4"),
  new Recipe('Seafood Paella',"https://yummyaddiction.com/wp-content/uploads/2017/05/spanish-seafood-paella-3.jpg","https://yummyaddiction.com/spanish-seafood-paella/"),
  new Recipe('Salmon Wellington',"https://simplyhomecooked.com/wp-content/uploads/2015/12/Salmon-Welligton-2.jpg","dj0yJnU9UFZiaWFxVGNJQzRlMThhWjZIOFVhcHd5NjNiamtFTFcmcD0wJm49NGRQbU1fRDA0WWFtYnJ1eWRvN0tTUSZ0PUFBQUFBR0FXN0RF"),
  new Recipe('Cilantro Lime Swordfish',"https://thestayathomechef.com/wp-content/uploads/2014/07/Cilantro-Lime-Grilled-Swordfish-1-1023x1536.jpg","https://thestayathomechef.com/cilantro-lime-grilled-swordfish/?epik=dj0yJnU9TERzR0p2NU9XVFVYdHI4U3F1Q3FfcUVySHFGUDBwMlImcD0wJm49WE5BWjZGRF9WVUFVdTBUbTB5cmJCUSZ0PUFBQUFBR0FXN0hV")
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
