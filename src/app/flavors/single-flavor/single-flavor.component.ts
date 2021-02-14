import { Component, NgModule } from '@angular/core';
import { Flavor } from '../flavor.model';
import { AlphaPipe } from '../../alpha.pipe';


@Component({
  selector: 'app-single-flavor',
  templateUrl: './single-flavor.component.html',
  styleUrls: ['./single-flavor.component.css','../flavor.styles.scss']
})
 

export class SingleFlavorComponent  {

 
 flavors: Flavor[] = [
     new Flavor('Allspice','https://www.gcfcorp.com/store/media/catalog/product/cache/1/small_image/175x/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_allspice_whole.jpg',
     "Allspice is the dried berry of a tree in central america, it's typically used in baking but it also provides a really nice warmth to savory cooking. Allspice is also used often whole in pickling brine, mulled wine, or stocks. Ground Allspice is used for rubs in jamacain jerk, Swedish Meatballs, and Apple Pie along with many other recipes",
     [" Poultry ", " Apples ", " Pumpkins ", " Red Wine ", " Ginger ", " Cinnamon ", " Garlic ", " Cayenne "]),
     
     new Flavor('Basil','https://cdn-0.yourindoorherbs.com/wp-content/uploads/2019/06/43832447014_641067c718_k-1024x683.jpg?ezimgfmt=rs:372x248/rscb1/ng:webp/ngcb1',
     "Basil is a common household plant across america, but it grows best in places with lots of sunlight and low moisture. The plants produce leaves which is what is used in cooking, the leaves can grow anywhere from 1/2 - 6 inches long. It's very versatile and used in a lot of cuisines but it shines the best in mediterreanand asian dishes.",
     [" Meat ", " Protein ", " Lemon ", " Butter "]),
     
     new Flavor('Bay Leaves','https://www.gcfcorp.com/store/media/catalog/product/cache/1/image/308x308/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_bay_leaves.jpg',
     "Bay Leaves are one of the spices you can't actually eat, the leaves have the same property as tree bark so they splinter if you eat it whole. So when you use it you have to keep it whole and cook it in a sauce, or soup and then take it out after it's done. They create a hardy flavor but it's very subtle so when you use it most times it needs to be for a long period of time. The best way to use it is to let it simmer in your pot for a few hours before taking it out. Bay Leaves are perfect for those crockpot recipes you have!",
     [" Sauces ", " Soups ", " Braising Liquid ", " Savory Recipes "]),
     
     new Flavor('Black Pepper','https://www.gcfcorp.com/store/media/catalog/product/cache/1/small_image/175x/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_peppercorn_black.jpg',
     "While Black Pepper is in most kitchens world-wide most people don't know it's origin. Pepper is actually a berry, it's grown on a vine then dried and ground for use and it's the most widely available spice. Pepper is really unique because it's spice comes from a chemical compound called piperine which is different than any other chili or spice used in cooking. Black pepper is great for adding a small kick to any savory meal and highlights the other flavors.", 
     [" Fatty Foods ", " Cheese ", " Beef ", " Bread "]),
     
     new Flavor('Cardamom','https://www.gcfcorp.com/store/media/catalog/product/cache/1/small_image/175x/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_cardamom.jpg',
     "Cardamom is one of those that many people are afraid to use because it has a very  strong flavor. It's piney, fruity and when used in excess can become astringent. However when paired with other warm spices it creates this really awesome complex flavor profile. It's very closely related to ginger and tumeric so it's often used in indian cuisine but most commonly it's used in chai tea lattes.",
     [" Cinnamon ", " Ginger ", " Nutmeg ", " Allspice ", " Cloves " ]),
     
     new Flavor('Cayenne Pepper','https://www.gcfcorp.com/store/media/catalog/product/cache/1/small_image/175x/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_red_pepper_cayenne.jpg',
     "Cayenne is a pepper that is harvested, dried then ground and used to add spice in food. Cayenne is moderately hot but can easily become overpowering. It goes great with seafood or hot sauces or really any food that by itself is lacking in flavor. Cayenne is also Crushed red pepper it's just crushed instead of ground. I prefer crushed red pepper though because it tones down the spice of the pepper while keeping a complex flavor that i love.",
     [" Poultry ", " Dairy ", " Beef ", " Seafood ", " Honey "]),
      
     new Flavor('Cinnamon','https://www.gcfcorp.com/store/media/catalog/product/cache/1/small_image/175x/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_cinnamon_stick_1.jpg',
     "Cinnamon is another well known spice, it's used in all kinds of cooking from the middle-east to european and american. It's very warm and distinct, it's flavor shines through a lot of other spices but still is not overpowering. It actually comes from the inner bark of a tree and has loads of health benefits. Many people use it in teas, or cold remedies along with in baking and savory cooking. It's very versatile as well as useful.",
     [" Ginger ", " Garlic ", " Cumin ", " Curry ", " Fruits ", " Nutmeg ", " Allspice ", " Mint "]),
     
     new Flavor('Cumin','https://veggiesinfo.com/wp-content/uploads/2016/01/Cumin-Seeds.jpg',
     "Cumin comes from the same plant as parsley but it's the seeds of it. It has a smoky flavor and very potent smell. It's very versatile in the sense that many cuisines use it from indian curry, to latin chili spice, and american tacos. Across the world cumin is a staple in there pantry. It's also great for marinades because as it sits with oil or other liquid the flavor protrudes more.",
     [" Chili ", " Curry ", " Tacos ", " Paprika ", " Chili Powder ", " Cayenne "]),
     
     new Flavor('Garlic','https://www.gcfcorp.com/store/media/catalog/product/cache/1/small_image/175x/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_garlic_powder.jpg',
     "Garlic grows underground and when harvested it can be used fresh, dried or ground and every way has benefits. Garlic is one of those spices that goes with everything as far as savory cooking goes. You can use in italian, mediterrean, middle-eastern, jamaican, american, or indian. If you are looking for aromatics you keep it fresh and sautee it or you can have a more subtle flavor and use powder. It's flavor is pungent, a little bit like an onion and a slight sulfurous note. However it's easy to over power a recipe with garlic so you do need to be a little cautious.",
     [" Chili's ", " Ginger ", " Rosemary ", " Sage ", " Onion "]),
     
     new Flavor('Ginger','https://www.gcfcorp.com/store/media/catalog/product/cache/1/small_image/175x/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_ginger_ground_1.jpg',
     "Ginger is a root from a plant in china and carries a lot health benefits and is often used for them. However when it's ground ginger is really warm and you can feel that in your whole body. It's really great for adding a homeyness to your cooking. It can be slightly spicy, a little bit sweet and a bit citrusy. I love ginger because it is so unique in it's flavor. It is also really good fresh or ground.",
     [" Cinnamon " , " Nutmeg ", " Garlic ", " Indian Cuisine "]),
     
     new Flavor('Mint','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_YDm4r7nK8Ggf1HKooHG71E8Ke3zW5mRUZsuENWbLYLf-NZFYHLaULLdrw&usqp=CAc',
     "Mint is the leaf off a plant that grows in moist locations with some shade. It's leaves are fairly small only about an inch or so long but they pack a punch in flavor. Mint leaves taste exactly how mint flavoring tastes just not quite as pungent it's much more dull when fresh. Fresh mint leaves go really well with desserts because it cuts through the sweet and fatty flavors and mellows out the whole dish. Often high end restaurants will even use the leaves as a palette cleanser between meals and will give you leaves to chew on before the next course comes out.",
     [" Chocolate ", " Coffee ", " Cream ", " Citrus Flavors "," Salads ", " Balsamic Vinegar ", " Pesto "]),
     
     new Flavor('Nutmeg','https://www.gcfcorp.com/store/media/catalog/product/cache/1/small_image/175x/9df78eab33525d08d6e5fb8d27136e95/s/p/spice_nutmeg_whole.jpg',
     "Nutmeg is another warm spice that is often used in baking. It's the seed of a tree and is shaved or ground for use. Along with being warm it's also nutty and has a comforting effect. It's great for garnish to add that last second punch of flavor. It can also be used in savory cooking most popular is indian dishes and swedish meatballs.",
     [" Alfredo", " Bechemal ", " Cheese Sauce ", " Cinnamon ", " Cardamom ", " Allspice "]),
     
     new Flavor('Paprika','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11pxsvPIEl_Oce7zUN9vPDFXXicC4pnJh2Q&usqp=CAU',
     "Paprika has a very subtle flavor but brings out heat in other spices really well. It also has variations that are smoked which adds a smokeyness to the dish. Generally speaking though paprika is a sweeter spice by itself which is why it's often used on deviled eggs. It does however come from peppers they are just very mild in spice.",
     [" Eggs ", " Cayenne ", " Cheese ", " Savory Recipes "]), 
     
     new Flavor('Rosemary','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfVquadnJF0BxnElS38giuf4hpY_h6rupxf-fsVNQtHi2zVD6IyddqsZBCA&usqp=CAc',
     "Rosemary is an herb that grows in the mediterranean and is used for both cooking and cleaning. It has a very fragrent scent and is often put into soaps, oils and perfumes. However it's taste is just as potent when put into a recipe. Rosemary can be very overpowering so you have to be careful how much you use. Also the plant has long stems with very leaves and you cannot eat the stems so you either have to use them whole adn remove before eating or remove the leaves and add them without the stem. Rosemary is also really great for adding a freshness to any dish.",
     [" Lavender ", " Oregano ", " Thyme ", " Basil ", " Citrus Fruits "]),
     
     new Flavor('Salt','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nqPlZda6MhQmPSiAMlXg9mRIW0f2FgQpzA&usqp=CAU',
     "Salt comes from one of two places either salt deposits underground or from the sea. Sea salt is evaporated sea water and does not need much processing where as table salt in mined underground so processing is heavy to get all of the unwanted minerals out. Either type have the same nutritional value and it comes down to preference and use. Sea Salt has a heavier flake so it's great for baking because it will melt overtime instead of right away. Salt is great to add flavor to most dishes but can be overpowering so a little will go a long way.",
     [" Chocolate ", " Coffee ", " Desserts ", " Spicy foods ", " Cream ", " Cheesy foods ",  " Black Pepper "]),
     
     new Flavor('Thyme','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzfXvWznJOOCabFJYurwhgVcL0hho0C9YW6XIpsILCmpDALl-UEhmAao8Mw&usqp=CAc',
     "Thyme is another herb in the same family as mint and rosemary. It also  has small leaves that carry most of the flavor. It's most often used whole and will simmer with a sauce or inside of a roasted chicken then taken out before eating. It still goes great with potatoes and other starchy vegetables.",
     [" Poultry ", " Citrus Fruits ", " Rosemary ", " Lemon ", " Breads ", " Souffles "]),
     
     new Flavor('Vanilla','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY9rQnsW9MI6gOfoVOUPGQduu7LAg8X5A5DeHlOKzZ7gx1XcHFEnP-9n0TOU&usqp=CAc',
     "Vanilla grows in pods then the beans are extracted from the pods and vanilla extract is made with a mixture of alcohol and vanilla beans, They mostly grow in hot and humid climates like Mexico, Tahiti, and Uganda. Vanilla can be used in the pod form or as an extract. The extract however because it's mostly alcohol will burn up if it's used in too hot of heat. For example if you add vanilla extract to a caramel sauce you need to add it at the very end otherwise it will evaporate before it's done cooling. Vanilla is also often used for it's scent as it has a flower that grows on the pod and that is used in perfumes.",
     [" Caramel ", " Honey ", " Toffee ", " Cinnamon ", " Orange "," Mango "," Cherry "])

]


  constructor() {
  }
  
  ngOnInit() {
  }

}
