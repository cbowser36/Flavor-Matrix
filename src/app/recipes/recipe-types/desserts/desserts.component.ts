import { Component,Inject, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css','../recipe-types.component.css']
})
export class DessertsComponent implements OnInit {
  desserts= [new Recipe('Raspberry Vanilla Donuts',"https://www.nospoonnecessary.com/wp-content/uploads/2016/04/Raspberry-Vanilla-Baked-Donuts-with-White-Chocolate-Glaze-148.jpg","https://www.nospoonnecessary.com/raspberry-vanilla-baked-donuts-with-white-chocolate-glaze/?epik=dj0yJnU9Q2podDBSZWx3OGptS3ZEbzdjYkZ2VEZldUdoRlFQanQmcD0wJm49ZTNaaVVQSjhtVUY1eDh4RFU2ZkFsZyZ0PUFBQUFBR0FXODVZ"),
  new Recipe('Honey Lavender Cheesecake',"https://www.sprinklesforbreakfast.com/images/honey-lavender-cheesecake-5.jpeg","https://www.sprinklesforbreakfast.com/honey-lavender-cheesecake.php"),
  new Recipe('Dark Chocolate Pistachio Tart',"https://www.addictedtodates.com/wp-content/uploads/2018/12/Dark-chocolate-pistachio-tart-13-1024x1536.jpg","https://www.addictedtodates.com/dark-chocolate-pistachio-tart/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=1154235426_56751316_407136&epik=dj0yJnU9dFpUcHhxTHlfaXh0Q0hSNkFqVUk5WTBENHFFdURjX1cmcD0wJm49eUk4dUR2eHNPbFZldndaMWRPNFpjUSZ0PUFBQUFBR0FXOUNZ"),
  new Recipe('Lemon Blueberry Meringue Pie',"https://purewows3.imgix.net/images/articles/2020_03/lemon-pie-with-blueberry-meringue-recipe.jpg?auto=format,compress&cs=strip","https://www.purewow.com/recipes/lemon-pie-blueberry-meringue?epik=dj0yJnU9eEFNMUZOTEx5YlZFdER4MkZVdlVKNVFwU0lFVmVGekwmcD0wJm49cXBVOFpZaVdNcWhKWkZQZ2wySWFudyZ0PUFBQUFBR0FXOUlZ"),
  new Recipe('Salted Caramel Panna Cotta',"https://www.recipewinners.com/wp-content/uploads/2020/06/IMG_0700-scaled-660x440.jpeg","https://www.recipewinners.com/salted-caramel-panna-cotta-with-praline/?epik=dj0yJnU9SlI3QVVWZ1c2V2hwNkZ1aEJxazlfN01kQmd5MFI1dS0mcD0wJm49RkktYkhvcU9SZGxFSTdJTkNhdGZyZyZ0PUFBQUFBR0FXOU5V"),
  new Recipe('Guiness Chocolate Cake',"https://www.handletheheat.com/wp-content/uploads/2014/03/Guinness-Chocolate-Cake-with-Irish-Buttercream-SQUARE-550x550.jpg","https://www.handletheheat.com/guinness-chocolate-cake-irish-buttercream/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=1099938044_51143360_12871")
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
