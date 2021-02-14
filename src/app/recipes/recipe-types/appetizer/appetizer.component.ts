import { Component,Inject, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-appetizer',
  templateUrl: './appetizer.component.html',
  styleUrls: ['./appetizer.component.css','../recipe-types.component.css']
})

export class AppetizerComponent implements OnInit {
  appetizers= [new Recipe('Jalepeno Popper Bites',"https://www.momontimeout.com/wp-content/uploads/2018/01/easy-jalapeno-popper-bites.jpg","https://www.momontimeout.com/easy-jalapeno-popper-bites-recipe/?epik=dj0yJnU9M09VLXZRLWZJcUlVZnJHcnNpNlRGcmE1T0U1azNRVXMmcD0wJm49TkJVTHBzVE90eE5DRTIwVENZS2N6ZyZ0PUFBQUFBR0FXNW5F"),
  new Recipe('Crab Dip',"https://40aprons.com/wp-content/uploads/2019/07/crab-dip.jpg","https://40aprons.com/addictive-crab-dip/?epik=dj0yJnU9WFpkc2IwRW9QQ21OZ1FqXzNoa1NTZlVoMXZmdkVoTUEmcD0wJm49Yk1sbG1QNEkzM2R3SUFtNUk1c3REdyZ0PUFBQUFBR0FXNXFB"),
  new Recipe('Cranberry Brie Dip',"https://www.yellowblissroad.com/wp-content/uploads/2019/11/Cranberry-Brie-Bites-7.jpg","https://www.yellowblissroad.com/cranberry-brie-bites/?epik=dj0yJnU9VG02QWJraFVRZW50dVcwRG1zM1l2SzlxUUhqVzZOUEImcD0wJm49M25lemkzMk93bFpyVDk0MTg3aFJyUSZ0PUFBQUFBR0FXNXRB"),
  new Recipe('Caprese Bruschetta',"https://comfortablefood.com/wp-content/uploads/2011/07/caprese-bruschetta-recipe.jpg","https://comfortablefood.com/recipe/caprese-bruschetta/?epik=dj0yJnU9RURlVWxxVVNsd1Vjc1JnbWhfMVNHMElPa3JmbWthTGomcD0wJm49WlRhSjNzNGdUem9waVJXaG9CaFhHQSZ0PUFBQUFBR0FXNXdv"),
  new Recipe('Bacon Wrapped Water Chesnuts',"https://i2.wp.com/www.foodlovinfamily.com/wp-content/uploads/2015/12/bacon-wrapped-water-chestnuts.jpg?resize=739%2C1024&ssl=1","https://www.foodlovinfamily.com/bacon-wrapped-water-chestnuts/?epik=dj0yJnU9Y1Y4RFNOREZMRi15TmRmWllXTUlJTGwyd3VBR2ZvLUgmcD0wJm49NF9MT09yd0JnaWliQ1pza3Y4Q0xWUSZ0PUFBQUFBR0FXNTBZ"),
  new Recipe('Goat Cheese Stuffed Dates',"https://www.asweetalternative.com/wp-content/uploads/2019/12/goat-cheese-stuffed-dates-800x800.jpg","https://www.asweetalternative.com/blog/goat-cheese-stuffed-dates?epik=dj0yJnU9NVkyaTljNHV3dmFGemw2UDVpUkcxMU1hM0hHSlJqWmImcD0wJm49MzM0OHg1LWowNWNxUUUyalFBT1A2QSZ0PUFBQUFBR0FXNTMw")
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
