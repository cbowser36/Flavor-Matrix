import { Component,Inject, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css','../recipe-types.component.css']

})
export class MeatComponent implements OnInit {
  meat= [new Recipe('Roasted Pork Loin',"https://diethood.com/wp-content/uploads/2019/09/Roasted-Pork-Loin-4.jpg","dj0yJnU9eW9SNVdEc3Nsd3hVUWg4ZnlCaVdWVzBXRC1SelZPMlUmcD0wJm49blBsTjFqYWlTMDVZckpBZWdHSWtFZyZ0PUFBQUFBR0FXOE80"),
  new Recipe('Korean Style Short Ribs',"https://farm3.static.flickr.com/2717/4541461863_53e5cf111e.jpg","https://www.whatscookinchicago.com/2010/04/korean-style-short-ribs-crockpot.html?m=1&epik=dj0yJnU9T3RScVhWcVJIai1qOU80Y0lFNEI3TUxETUh5VnpmRjkmcD0wJm49OV9samR3VUJPS2hvZFp1U3F3dDd3QSZ0PUFBQUFBR0FXOFRR"),
  new Recipe('Pan-Seared Ribeye Steak',"https://bakeitwithlove.com/wp-content/uploads/2020/02/perfect-pan-seared-ribeye-steak-sq.jpg","https://bakeitwithlove.com/perfectly-pan-seared-ribeye-steak/?epik=dj0yJnU9OHY1dlExYjdQYTBveTFteXhsQ08xd29jOWhTekZULTUmcD0wJm49OGxLcVhKc1dJbllFTjFCclR6QXhlZyZ0PUFBQUFBR0FXOGNN"),
  new Recipe('Carnitas',"https://i2.wp.com/bakingmischief.com/wp-content/uploads/2018/05/carnitas-recipe-picture.jpg","https://bakingmischief.com/carnitas-recipe/"),
  new Recipe('Slow-Roasted Lamb Shoulder',"https://www.craftbeering.com/wp-content/uploads/2020/03/Greek-Lamb-Shoulder-Roast-3.jpg","https://www.craftbeering.com/greek-lamb-shoulder-roast-lemon-potatoes/?epik=dj0yJnU9ZktmSTUzWjlHWGR1X3JMZ21vWWNfYXg0N2RGbVJhRFEmcD0wJm49bXBRMVAzeXlDOWEyZ3R4cjItaXBMdyZ0PUFBQUFBR0FXOGxZ"),
  new Recipe('Venison Burgers',"https://i0.wp.com/midwestniceblog.com/wp-content/uploads/2020/05/IMG_5929-1.jpg?resize=768%2C1152&ssl=1","https://midwestniceblog.com/2020/05/22/easy-venison-burger-recipe/?epik=dj0yJnU9ZHFUWFhGZkJMWEI4M3ZPUjU2ZnhMMi0ySVc5SFQxYzgmcD0wJm49U1lXSndGSUV5VGJfU2hxNkdCZGVLdyZ0PUFBQUFBR0FXOHNr")
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
