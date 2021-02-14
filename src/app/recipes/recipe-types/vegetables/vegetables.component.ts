import { Component,Inject, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css','../recipe-types.component.css']
})
export class VegetablesComponent implements OnInit {
  vegetables= [new Recipe('Garlic Parmesan Roasted Brussel Sprouts',"https://www.eatwell101.com/wp-content/uploads/2020/09/Parmesan-Roasted-Brussels-Sprouts-1.jpg","https://www.eatwell101.com/parmesan-roasted-brussels-sprouts?epik=dj0yJnU9a1ZteXJPZ19abUFwV1RNV2dmYUVBZlZfSmJJblNQTnAmcD0wJm49Rk9kOTJzOEU4dzdLVnIzc1d4WFRLQSZ0PUFBQUFBR0FXNTlR"),
  new Recipe('Roasted Carrots',"https://www.chelseasmessyapron.com/wp-content/uploads/2019/02/Easy-Roasted-Carrots-4.jpg","https://www.chelseasmessyapron.com/roasted-carrots/?epik=dj0yJnU9dWxuZXQ3SmFXcFFiRTNuTUR4bmRpdFhBbmZTaTlvcHEmcD0wJm49SVdwTWw1czA4LWFuRkFHM2RpZUxzZyZ0PUFBQUFBR0FXNkJF"),
  new Recipe('Grilled Vegetable Salad',"https://jenaroundtheworld.com/wp-content/uploads/2019/07/IMG_5753.jpg","https://jenaroundtheworld.com/grilled-vegetable-salad-with-citrus-vinaigrette/?epik=dj0yJnU9dFEwTk9qeS1qOUdSeVJ2ZVlDank5Z0hTeUo4VEdRUkUmcD0wJm49ZUs5YmlWeHd4UC0wZl9la3ppNUdoZyZ0PUFBQUFBR0FXNkZv"),
  new Recipe('Zuchini Stir Fry',"https://shuangyskitchensink.com/wp-content/uploads/2020/04/Zuchinni-Stir-Fry-3-819x1024.jpg","https://shuangyskitchensink.com/zucchini-mushroom-stir-fry-gluten-free-vegan/?epik=dj0yJnU9dU9JOV9nNFpfazkxaEZBdWlqaGtpX3FyR0c1ZlJCZzgmcD0wJm49V1g0SkRscHFScDE1Q1Npb1lJcHZodyZ0PUFBQUFBR0FXNkpV"),
  new Recipe('Sriracha Green Beans',"https://peasandcrayons.com/wp-content/uploads/2018/07/spicy-sriracha-green-beans-recipe-.jpg","https://peasandcrayons.com/2018/07/spicy-sriracha-green-beans.html?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=1024924672_47039338_465382&epik=dj0yJnU9NVNJUXNZQVpHUGs4bnBXcndnZjJJVzJBNkIwQjQ5QUYmcD0wJm49S0J3Q3pfLTN5b2NpbFR0dERnSDEwQSZ0PUFBQUFBR0FXNk1j"),
  new Recipe('Sweet Potato and Chickpea Buddha Bowl',"https://zenandzaatar.com/wp-content/uploads/2020/09/2-bowls-sauce-1024x735-1-720x720.jpg","https://zenandzaatar.com/wonderful-winter-veggie-bowls-vegan-gf/?epik=dj0yJnU9OHdaYjNiVVBSUU9lR1hMNGNXcjlQejYtajI0dXM2cHcmcD0wJm49ODExMHVfb2pHOWozNmdwa0k3Q3MtZyZ0PUFBQUFBR0FXNlFz#recipejump")
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
