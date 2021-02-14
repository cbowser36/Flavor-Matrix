import { Component } from '@angular/core';
import { HttpClient } from'@angular/common/http';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css','./recipe.styles.scss']
})
export class RecipesComponent  {
  api = 'https://api.spoonacular.com/food/trivia/random?apiKey=afde6e6b91be4c38be077b1807a09d63';
  trivia = [];

  imageUrls=[
    'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1517521303/180131-wondrich-bad-cocktail-tease_wghhv8',
    'https://m.media-amazon.com/images/S/aplus-media/sc/ddbd4ec5-957e-4af1-b1cf-8779d149468a.__CR0,286,1500,928_PT0_SX970_V1___.jpg',    
    'https://images-gmi-pmc.edge-generalmills.com/90bba062-522f-4fae-bac6-792aa6bd6165.jpg',
    'https://assets.marthastewart.com/styles/wmax-750/d53/artisan-boule-bread-martha-bakes-se10-4139-v1-d113213/artisan-boule-bread-martha-bakes-se10-4139-v1-d113213_horiz.jpg?itok=8PUHJdaa',
    'https://cdn.mos.cms.futurecdn.net/gTur4jJKQJxtPa8C57SG8j.jpg',
    'https://hips.hearstapps.com/vidthumb/images/delish-tuscan-butter-roast-chicken-still002-1549648316.jpg',
    'https://prods3.imgix.net/images/articles/2017_03/Feature-Sous-Vide-Rib-Eye-Steak.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370',
    'https://gbc-cdn-public-media.azureedge.net/img21897.1426x713.jpg'
    
    ]


  constructor(private http: HttpClient) {  
     this.http.get(this.api).toPromise().then(data =>{
      console.log(data);
    
      for(let key in data)
       if(data.hasOwnProperty(key))
        this.trivia.push(data[key]);
    });
   
  
  }
  
}
 
  

