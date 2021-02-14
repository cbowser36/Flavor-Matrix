import { Component,Inject, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-poultry',
  templateUrl: './poultry.component.html',
  styleUrls: ['./poultry.component.css','../recipe-types.component.css']
})
export class PoultryComponent implements OnInit {
  poultry= [new Recipe("Tuscan Parmesan Chicken","https://www.lecremedelacrumb.com/wp-content/uploads/2019/04/creamy-tuscan-parmesan-chicken-3.jpg","https://www.lecremedelacrumb.com/creamy-tuscan-parmesan-chicken/"),
  new Recipe('Coconut Chicken Curry',"https://www.jocooks.com/wp-content/uploads/2019/10/coconut-chicken-curry-1-10-768x960.jpg","https://www.jocooks.com/recipes/coconut-chicken-curry/"),
  new Recipe('Teriyaky Turkey Bowl',"https://www.yellowblissroad.com/wp-content/uploads/2018/12/Teriyaki-Turkey-Rice-Bowls-2-of-7.jpg","https://www.yellowblissroad.com/teriyaki-turkey-rice-bowl/"),
  new Recipe('Crispy Duck with Plum Sauce',"https://www.kitchensanctuary.com/wp-content/uploads/2014/11/pulled-duck.webp","https://www.kitchensanctuary.com/crispy-duck/?epik=dj0yJnU9LS0xeHlsb2E0cWQyS1JkX3BuUVhScExHa252Z1pjOGsmcD0wJm49SG85d2pIOWtvUWE3UDlwQUdfbFg0USZ0PUFBQUFBR0FXNzhR"),
  new Recipe('Roasted Quail',"https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2015/02/25/33812/0315GT-capri-recipes-roast-quail.jpg?width=963&height=802&mode=crop&anchor=topcenter&quality=75","https://www.gourmettraveller.com.au/recipes/browse-all/roast-quail-with-bacon-peas-and-mint-12220?epik=dj0yJnU9V2FndEJEdENicnppZVlWUkRJNXd0SEdIZUF1MjlNQU8mcD0wJm49ak1uV0p3TEs3RXpRR3VzemhMZTRmZyZ0PUFBQUFBR0FXODFz"),
  new Recipe('Duck Breast',"https://www.wednesdaynightcafe.com/wp-content/uploads/2017/08/Duck-breast-cherry-sauce.jpg","https://www.wednesdaynightcafe.com/duck-breast-cherry-sauce-duck-fat-fried-potatoes/?epik=dj0yJnU9dmVoRzRSQkxvRS01RFdHaUZYazFnMEMyUkxFZzFWV20mcD0wJm49anpYUzNNbWZ2cFJPcUlIVkZmVUVVdyZ0PUFBQUFBR0FXOExV")
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
