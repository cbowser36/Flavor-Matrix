import { Component,Inject, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css','../recipe-types.component.css']
})
export class BreadComponent implements OnInit {
  breads= [new Recipe('Ciabatta Rolls',"https://www.aheadofthyme.com/wp-content/uploads/2020/04/easy-small-batch-ciabatta-rolls-8-1024x713.jpg","https://www.aheadofthyme.com/easy-small-batch-ciabatta-rolls/?epik=dj0yJnU9aU5MOTZPT0lzZDhuN2tXT05FNDV1dWFpSFB3U2RNOHUmcD0wJm49QjNFM3d5NlByVExDNzJta0ZzWEU4ZyZ0PUFBQUFBR0FXNldF"),
  new Recipe("Brioche Bread","https://i1.wp.com/letthebakingbegin.com/wp-content/uploads/2020/06/Brioche-Bread-Recipe-15.jpg?resize=600%2C900&ssl=1","https://letthebakingbegin.com/basic-brioche-bread-recipe/?epik=dj0yJnU9ck5KUlI1OUlRU2ZJQmFfVkVKakFQZVNFcHJwLVVmYlcmcD0wJm49TjJpNHBHdHR2QVNIUC1aQ0pQVkdxQSZ0PUFBQUFBR0FXNmFV"),
  new Recipe('Soft Pretzels',"https://www.recipeboy.com/wp-content/uploads/2014/01/Homemade-Soft-Pretzels.jpg","https://www.recipeboy.com/how-to-make-homemade-soft-pretzels/?epik=dj0yJnU9UkU2ZUluZkdPUTVGM3RMUDR1ZE9LTmV1bkhOakFlb2gmcD0wJm49ZFFQUUJ3SDhUNzVlOFkyelE0NW5nZyZ0PUFBQUFBR0FXNmU4"),
  new Recipe('Garlic Naan',"https://www.servedfromscratch.com/wp-content/uploads/2019/05/IMG_4830-2-1-683x1024.jpg","https://www.servedfromscratch.com/garlic-naan-from-scratch/?epik=dj0yJnU9S20wQ3FlZkFwcDZ3VGNrTjV3ZjFfdTRmb0xBRmhxUTUmcD0wJm49b2dnemdKX3Ayb3lFSm5WQmxzM1JEdyZ0PUFBQUFBR0FXNmpN"),
  new Recipe('Homemade Bagels',"https://bakingamoment.com/wp-content/uploads/2020/06/IMG_8813-bagel-recipe-720x720.jpg","https://bakingamoment.com/new-york-bagel-recipe/?epik=dj0yJnU9QUVHcldWVVBXNnpFd0JJYWxvSV9aLUFCbk4yXzR5NncmcD0wJm49eTctQXBUZ29Da1ZGV25Tc0VIWkRCUSZ0PUFBQUFBR0FXNm9B"),
  new Recipe('Artisan Sourdough',"https://www.homemadefoodjunkie.com/wp-content/uploads/2017/11/IMG_1354.jpg.webp","https://www.homemadefoodjunkie.com/tartine-style-sourdough-bread-recipe/?epik=dj0yJnU9eUFkVmpOWGQ0ZWhDRDViNTB6dnZsWnBLTUhvd3I2Q18mcD0wJm49M1FoZmtkS2VsNVBIZlZPRDRrZTBtZyZ0PUFBQUFBR0FXNnJr"),
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
