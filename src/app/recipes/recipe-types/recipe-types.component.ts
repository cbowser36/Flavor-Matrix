import { Component, Inject, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-recipe-types',
  templateUrl: './recipe-types.component.html',
  styleUrls: ['./recipe-types.component.css','../recipe.styles.scss']
})
export class RecipeTypesComponent implements OnInit {
  cocktails = [new Recipe("Strawberry Mojito","https://whiteonricecouple.com/recipe/images/Strawberry-Mojitos-1.jpg","https://whiteonricecouple.com/recipes/strawberry-mojito-cocktail/"),
  new Recipe('Jack Frost',"https://bellyfull.net/wp-content/uploads/2020/12/Jack-Frost-blog.jpg","https://bellyfull.net/jack-frost-winter-cocktail/#wprm-recipe-container-41565"),
  new Recipe('Pear Vanilla Gin Fizz',"https://shortgirltallorder.com/wp-content/uploads/2020/01/Pear-Vanilla-Gin-Fiz.jpg","https://shortgirltallorder.com/pear-vanilla-gin-fizz?epik=dj0yJnU9WUhpNTBWZFhDb29GQ2FJeG9BTkRpSDFIck1wc0RrSHgmcD0wJm49R2s4M0RZa1dFT1p4RW1LR25HaFdrdyZ0PUFBQUFBR0FXNUpZ"),
  new Recipe('Cocoonut Blood Orange Margaritas',"https://www.freutcake.com/wp-content/uploads/2017/03/Coconut-Blood-Orange-Margarita-Recipe-6.jpg","https://www.freutcake.com/in-the-kitchen/drinks-anyone/coconut-blood-orange-margaritas/?epik=dj0yJnU9RDVxX3BtSGxNOWpMWGZkUGVQaGRORFB3Q1pKUThLa0EmcD0wJm49bW8yM2FnVV9KSVJvWWo2cmh0Zzh5dyZ0PUFBQUFBR0FXNU9N"),
  new Recipe('Cherry Vanilla Whiskey Sour',"https://www.gastronomblog.com/wp-content/uploads/2020/02/Omaha-Whiskey-Fest-2020-Cherry-Vanilla-Sour-3.jpg.webp","https://www.gastronomblog.com/cherry-whiskey-sour-cocktail/"),
  new Recipe('Blueberry Cucumber Gimlet',"https://www.gastronomblog.com/wp-content/uploads/2015/08/blueberrycucgimlet-6-735x493.jpg.webp","https://www.gastronomblog.com/blueberry-cucumber-gimlet/")
]

  appetizers= [new Recipe('Jalepeno Popper Bites',"https://www.momontimeout.com/wp-content/uploads/2018/01/easy-jalapeno-popper-bites.jpg","https://www.momontimeout.com/easy-jalapeno-popper-bites-recipe/?epik=dj0yJnU9M09VLXZRLWZJcUlVZnJHcnNpNlRGcmE1T0U1azNRVXMmcD0wJm49TkJVTHBzVE90eE5DRTIwVENZS2N6ZyZ0PUFBQUFBR0FXNW5F"),
  new Recipe('Crab Dip',"https://40aprons.com/wp-content/uploads/2019/07/crab-dip.jpg","https://40aprons.com/addictive-crab-dip/?epik=dj0yJnU9WFpkc2IwRW9QQ21OZ1FqXzNoa1NTZlVoMXZmdkVoTUEmcD0wJm49Yk1sbG1QNEkzM2R3SUFtNUk1c3REdyZ0PUFBQUFBR0FXNXFB"),
  new Recipe('Cranberry Brie Dip',"https://www.yellowblissroad.com/wp-content/uploads/2019/11/Cranberry-Brie-Bites-7.jpg","https://www.yellowblissroad.com/cranberry-brie-bites/?epik=dj0yJnU9VG02QWJraFVRZW50dVcwRG1zM1l2SzlxUUhqVzZOUEImcD0wJm49M25lemkzMk93bFpyVDk0MTg3aFJyUSZ0PUFBQUFBR0FXNXRB"),
  new Recipe('Caprese Bruschetta',"https://comfortablefood.com/wp-content/uploads/2011/07/caprese-bruschetta-recipe.jpg","https://comfortablefood.com/recipe/caprese-bruschetta/?epik=dj0yJnU9RURlVWxxVVNsd1Vjc1JnbWhfMVNHMElPa3JmbWthTGomcD0wJm49WlRhSjNzNGdUem9waVJXaG9CaFhHQSZ0PUFBQUFBR0FXNXdv"),
  new Recipe('Bacon Wrapped Water Chesnuts',"https://i2.wp.com/www.foodlovinfamily.com/wp-content/uploads/2015/12/bacon-wrapped-water-chestnuts.jpg?resize=739%2C1024&ssl=1","https://www.foodlovinfamily.com/bacon-wrapped-water-chestnuts/?epik=dj0yJnU9Y1Y4RFNOREZMRi15TmRmWllXTUlJTGwyd3VBR2ZvLUgmcD0wJm49NF9MT09yd0JnaWliQ1pza3Y4Q0xWUSZ0PUFBQUFBR0FXNTBZ"),
  new Recipe('Goat Cheese Stuffed Dates',"https://www.asweetalternative.com/wp-content/uploads/2019/12/goat-cheese-stuffed-dates-800x800.jpg","https://www.asweetalternative.com/blog/goat-cheese-stuffed-dates?epik=dj0yJnU9NVkyaTljNHV3dmFGemw2UDVpUkcxMU1hM0hHSlJqWmImcD0wJm49MzM0OHg1LWowNWNxUUUyalFBT1A2QSZ0PUFBQUFBR0FXNTMw")
]
  vegetables= [new Recipe('Garlic Parmesan Roasted Brussel Sprouts',"https://www.eatwell101.com/wp-content/uploads/2020/09/Parmesan-Roasted-Brussels-Sprouts-1.jpg","https://www.eatwell101.com/parmesan-roasted-brussels-sprouts?epik=dj0yJnU9a1ZteXJPZ19abUFwV1RNV2dmYUVBZlZfSmJJblNQTnAmcD0wJm49Rk9kOTJzOEU4dzdLVnIzc1d4WFRLQSZ0PUFBQUFBR0FXNTlR"),
  new Recipe('Roasted Carrots',"https://www.chelseasmessyapron.com/wp-content/uploads/2019/02/Easy-Roasted-Carrots-4.jpg","https://www.chelseasmessyapron.com/roasted-carrots/?epik=dj0yJnU9dWxuZXQ3SmFXcFFiRTNuTUR4bmRpdFhBbmZTaTlvcHEmcD0wJm49SVdwTWw1czA4LWFuRkFHM2RpZUxzZyZ0PUFBQUFBR0FXNkJF"),
  new Recipe('Grilled Vegetable Salad',"https://jenaroundtheworld.com/wp-content/uploads/2019/07/IMG_5753.jpg","https://jenaroundtheworld.com/grilled-vegetable-salad-with-citrus-vinaigrette/?epik=dj0yJnU9dFEwTk9qeS1qOUdSeVJ2ZVlDank5Z0hTeUo4VEdRUkUmcD0wJm49ZUs5YmlWeHd4UC0wZl9la3ppNUdoZyZ0PUFBQUFBR0FXNkZv"),
  new Recipe('Zuchini Stir Fry',"https://shuangyskitchensink.com/wp-content/uploads/2020/04/Zuchinni-Stir-Fry-3-819x1024.jpg","https://shuangyskitchensink.com/zucchini-mushroom-stir-fry-gluten-free-vegan/?epik=dj0yJnU9dU9JOV9nNFpfazkxaEZBdWlqaGtpX3FyR0c1ZlJCZzgmcD0wJm49V1g0SkRscHFScDE1Q1Npb1lJcHZodyZ0PUFBQUFBR0FXNkpV"),
  new Recipe('Sriracha Green Beans',"https://peasandcrayons.com/wp-content/uploads/2018/07/spicy-sriracha-green-beans-recipe-.jpg","https://peasandcrayons.com/2018/07/spicy-sriracha-green-beans.html?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=1024924672_47039338_465382&epik=dj0yJnU9NVNJUXNZQVpHUGs4bnBXcndnZjJJVzJBNkIwQjQ5QUYmcD0wJm49S0J3Q3pfLTN5b2NpbFR0dERnSDEwQSZ0PUFBQUFBR0FXNk1j"),
  new Recipe('Sweet Potato and Chickpea Buddha Bowl',"https://zenandzaatar.com/wp-content/uploads/2020/09/2-bowls-sauce-1024x735-1-720x720.jpg","https://zenandzaatar.com/wonderful-winter-veggie-bowls-vegan-gf/?epik=dj0yJnU9OHdaYjNiVVBSUU9lR1hMNGNXcjlQejYtajI0dXM2cHcmcD0wJm49ODExMHVfb2pHOWozNmdwa0k3Q3MtZyZ0PUFBQUFBR0FXNlFz#recipejump")
  ]
 breads= [new Recipe('Ciabatta Rolls',"https://www.aheadofthyme.com/wp-content/uploads/2020/04/easy-small-batch-ciabatta-rolls-8-1024x713.jpg","https://www.aheadofthyme.com/easy-small-batch-ciabatta-rolls/?epik=dj0yJnU9aU5MOTZPT0lzZDhuN2tXT05FNDV1dWFpSFB3U2RNOHUmcD0wJm49QjNFM3d5NlByVExDNzJta0ZzWEU4ZyZ0PUFBQUFBR0FXNldF"),
 new Recipe("Brioche Bread","https://i1.wp.com/letthebakingbegin.com/wp-content/uploads/2020/06/Brioche-Bread-Recipe-15.jpg?resize=600%2C900&ssl=1","https://letthebakingbegin.com/basic-brioche-bread-recipe/?epik=dj0yJnU9ck5KUlI1OUlRU2ZJQmFfVkVKakFQZVNFcHJwLVVmYlcmcD0wJm49TjJpNHBHdHR2QVNIUC1aQ0pQVkdxQSZ0PUFBQUFBR0FXNmFV"),
 new Recipe('Soft Pretzels',"https://www.recipeboy.com/wp-content/uploads/2014/01/Homemade-Soft-Pretzels.jpg","https://www.recipeboy.com/how-to-make-homemade-soft-pretzels/?epik=dj0yJnU9UkU2ZUluZkdPUTVGM3RMUDR1ZE9LTmV1bkhOakFlb2gmcD0wJm49ZFFQUUJ3SDhUNzVlOFkyelE0NW5nZyZ0PUFBQUFBR0FXNmU4"),
 new Recipe('Garlic Naan',"https://www.servedfromscratch.com/wp-content/uploads/2019/05/IMG_4830-2-1-683x1024.jpg","https://www.servedfromscratch.com/garlic-naan-from-scratch/?epik=dj0yJnU9S20wQ3FlZkFwcDZ3VGNrTjV3ZjFfdTRmb0xBRmhxUTUmcD0wJm49b2dnemdKX3Ayb3lFSm5WQmxzM1JEdyZ0PUFBQUFBR0FXNmpN"),
 new Recipe('Homemade Bagels',"https://bakingamoment.com/wp-content/uploads/2020/06/IMG_8813-bagel-recipe-720x720.jpg","https://bakingamoment.com/new-york-bagel-recipe/?epik=dj0yJnU9QUVHcldWVVBXNnpFd0JJYWxvSV9aLUFCbk4yXzR5NncmcD0wJm49eTctQXBUZ29Da1ZGV25Tc0VIWkRCUSZ0PUFBQUFBR0FXNm9B"),
 new Recipe('Artisan Sourdough',"https://www.homemadefoodjunkie.com/wp-content/uploads/2017/11/IMG_1354.jpg.webp","https://www.homemadefoodjunkie.com/tartine-style-sourdough-bread-recipe/?epik=dj0yJnU9eUFkVmpOWGQ0ZWhDRDViNTB6dnZsWnBLTUhvd3I2Q18mcD0wJm49M1FoZmtkS2VsNVBIZlZPRDRrZTBtZyZ0PUFBQUFBR0FXNnJr"),
 ]
  seafood= [new Recipe('Seared Scallops',"https://www.willcookforsmiles.com/wp-content/uploads/2020/07/Seared-Scallops-7-1.jpg","https://www.willcookforsmiles.com/seared-scallops/"),
  new Recipe('Lobster Rolls',"https://www.dinneratthezoo.com/wp-content/uploads/2019/12/lobster-roll-5.jpg.webp","https://www.dinneratthezoo.com/lobster-roll-recipe/"),
  new Recipe("Spicy Shrimp Tacos","https://girlwiththeironcast.com/wp-content/uploads/2019/05/118A2132-2-735x1103.jpg","https://girlwiththeironcast.com/spicy-shrimp-tacos-avocado-crema/?epik=dj0yJnU9MnkzZXQwZEo1bFNNUGVLWDlKd1dDdVByRVllSzZVTG0mcD0wJm49dUJ6RlBKYnRaNFN4dzJVX0U1U0J3QSZ0PUFBQUFBR0FXN1A4"),
  new Recipe('Seafood Paella',"https://yummyaddiction.com/wp-content/uploads/2017/05/spanish-seafood-paella-3.jpg","https://yummyaddiction.com/spanish-seafood-paella/"),
  new Recipe('Salmon Wellington',"https://simplyhomecooked.com/wp-content/uploads/2015/12/Salmon-Welligton-2.jpg","dj0yJnU9UFZiaWFxVGNJQzRlMThhWjZIOFVhcHd5NjNiamtFTFcmcD0wJm49NGRQbU1fRDA0WWFtYnJ1eWRvN0tTUSZ0PUFBQUFBR0FXN0RF"),
  new Recipe('Cilantro Lime Swordfish',"https://thestayathomechef.com/wp-content/uploads/2014/07/Cilantro-Lime-Grilled-Swordfish-1-1023x1536.jpg","https://thestayathomechef.com/cilantro-lime-grilled-swordfish/?epik=dj0yJnU9TERzR0p2NU9XVFVYdHI4U3F1Q3FfcUVySHFGUDBwMlImcD0wJm49WE5BWjZGRF9WVUFVdTBUbTB5cmJCUSZ0PUFBQUFBR0FXN0hV")
]
  poultry= [new Recipe("Tuscan Parmesan Chicken","https://www.lecremedelacrumb.com/wp-content/uploads/2019/04/creamy-tuscan-parmesan-chicken-3.jpg","https://www.lecremedelacrumb.com/creamy-tuscan-parmesan-chicken/"),
  new Recipe('Coconut Chicken Curry',"https://www.jocooks.com/wp-content/uploads/2019/10/coconut-chicken-curry-1-10-768x960.jpg","https://www.jocooks.com/recipes/coconut-chicken-curry/"),
  new Recipe('Teriyaky Turkey Bowl',"https://www.yellowblissroad.com/wp-content/uploads/2018/12/Teriyaki-Turkey-Rice-Bowls-2-of-7.jpg","https://www.yellowblissroad.com/teriyaki-turkey-rice-bowl/"),
  new Recipe('Crispy Duck with Plum Sauce',"https://www.kitchensanctuary.com/wp-content/uploads/2014/11/pulled-duck.webp","https://www.kitchensanctuary.com/crispy-duck/?epik=dj0yJnU9LS0xeHlsb2E0cWQyS1JkX3BuUVhScExHa252Z1pjOGsmcD0wJm49SG85d2pIOWtvUWE3UDlwQUdfbFg0USZ0PUFBQUFBR0FXNzhR"),
  new Recipe('Roasted Quail',"https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2015/02/25/33812/0315GT-capri-recipes-roast-quail.jpg?width=963&height=802&mode=crop&anchor=topcenter&quality=75","https://www.gourmettraveller.com.au/recipes/browse-all/roast-quail-with-bacon-peas-and-mint-12220?epik=dj0yJnU9V2FndEJEdENicnppZVlWUkRJNXd0SEdIZUF1MjlNQU8mcD0wJm49ak1uV0p3TEs3RXpRR3VzemhMZTRmZyZ0PUFBQUFBR0FXODFz"),
  new Recipe('Duck Breast',"https://www.wednesdaynightcafe.com/wp-content/uploads/2017/08/Duck-breast-cherry-sauce.jpg","https://www.wednesdaynightcafe.com/duck-breast-cherry-sauce-duck-fat-fried-potatoes/?epik=dj0yJnU9dmVoRzRSQkxvRS01RFdHaUZYazFnMEMyUkxFZzFWV20mcD0wJm49anpYUzNNbWZ2cFJPcUlIVkZmVUVVdyZ0PUFBQUFBR0FXOExV")
  ]
  meat= [new Recipe('Roasted Pork Loin',"https://diethood.com/wp-content/uploads/2019/09/Roasted-Pork-Loin-4.jpg","dj0yJnU9eW9SNVdEc3Nsd3hVUWg4ZnlCaVdWVzBXRC1SelZPMlUmcD0wJm49blBsTjFqYWlTMDVZckpBZWdHSWtFZyZ0PUFBQUFBR0FXOE80"),
  new Recipe('Korean Style Short Ribs',"https://farm3.static.flickr.com/2717/4541461863_53e5cf111e.jpg","https://www.whatscookinchicago.com/2010/04/korean-style-short-ribs-crockpot.html?m=1&epik=dj0yJnU9T3RScVhWcVJIai1qOU80Y0lFNEI3TUxETUh5VnpmRjkmcD0wJm49OV9samR3VUJPS2hvZFp1U3F3dDd3QSZ0PUFBQUFBR0FXOFRR"),
  new Recipe('Pan-Seared Ribeye Steak',"https://bakeitwithlove.com/wp-content/uploads/2020/02/perfect-pan-seared-ribeye-steak-sq.jpg","https://bakeitwithlove.com/perfectly-pan-seared-ribeye-steak/?epik=dj0yJnU9OHY1dlExYjdQYTBveTFteXhsQ08xd29jOWhTekZULTUmcD0wJm49OGxLcVhKc1dJbllFTjFCclR6QXhlZyZ0PUFBQUFBR0FXOGNN"),
  new Recipe('Carnitas',"https://i2.wp.com/bakingmischief.com/wp-content/uploads/2018/05/carnitas-recipe-picture.jpg","https://bakingmischief.com/carnitas-recipe/"),
  new Recipe('Slow-Roasted Lamb Shoulder',"https://www.craftbeering.com/wp-content/uploads/2020/03/Greek-Lamb-Shoulder-Roast-3.jpg","https://www.craftbeering.com/greek-lamb-shoulder-roast-lemon-potatoes/?epik=dj0yJnU9ZktmSTUzWjlHWGR1X3JMZ21vWWNfYXg0N2RGbVJhRFEmcD0wJm49bXBRMVAzeXlDOWEyZ3R4cjItaXBMdyZ0PUFBQUFBR0FXOGxZ"),
  new Recipe('Venison Burgers',"https://i0.wp.com/midwestniceblog.com/wp-content/uploads/2020/05/IMG_5929-1.jpg?resize=768%2C1152&ssl=1","https://midwestniceblog.com/2020/05/22/easy-venison-burger-recipe/?epik=dj0yJnU9ZHFUWFhGZkJMWEI4M3ZPUjU2ZnhMMi0ySVc5SFQxYzgmcD0wJm49U1lXSndGSUV5VGJfU2hxNkdCZGVLdyZ0PUFBQUFBR0FXOHNr")
]
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
