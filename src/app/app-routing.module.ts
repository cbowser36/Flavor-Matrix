import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FlavorsComponent } from './flavors/flavors.component';
import { SingleFlavorComponent } from './flavors/single-flavor/single-flavor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CocktailComponent } from './recipes/recipe-types/cocktail/cocktail.component';
import { RecipeTypesComponent } from './recipes/recipe-types/recipe-types.component';
import { RecipesComponent } from './recipes/recipes.component';
import { VegetablesComponent } from './recipes/recipe-types/vegetables/vegetables.component';
import { BreadComponent } from './recipes/recipe-types/bread/bread.component';
import { SeafoodComponent } from './recipes/recipe-types/seafood/seafood.component';
import { PoultryComponent } from './recipes/recipe-types/poultry/poultry.component';
import { MeatComponent } from './recipes/recipe-types/meat/meat.component';
import { DessertsComponent } from './recipes/recipe-types/desserts/desserts.component';
import { AppetizerComponent } from './recipes/recipe-types/appetizer/appetizer.component';





const appRoutes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'flavors', component: FlavorsComponent },
  { path: 'recipes', component: RecipesComponent},
  { path: 'single-flavor',component: SingleFlavorComponent},
  { path: 'recipe-types',component: RecipeTypesComponent},
  { path: 'cocktails',component: CocktailComponent},
  { path: 'appetizers',component: AppetizerComponent},
  { path: 'vegetables',component: VegetablesComponent},
  { path: 'bread',component: BreadComponent},
  { path: 'seafood',component: SeafoodComponent},
  { path: 'poultry',component: PoultryComponent},
  { path: 'meat',component: MeatComponent},
  { path: 'desserts',component: DessertsComponent}
 
];


@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]

})

export class AppRoutingModule {

}