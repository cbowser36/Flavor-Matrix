import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FlavorsComponent } from './flavors/flavors.component';
import { HeaderComponent } from './header/header.component';
import { SingleFlavorComponent } from './flavors/single-flavor/single-flavor.component';
import { RecipeTypesComponent } from './recipes/recipe-types/recipe-types.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AlphaPipe } from './alpha.pipe';
import { CocktailComponent } from './recipes/recipe-types/cocktail/cocktail.component';
import { VegetablesComponent } from './recipes/recipe-types/vegetables/vegetables.component';
import { BreadComponent } from './recipes/recipe-types/bread/bread.component';
import { SeafoodComponent } from './recipes/recipe-types/seafood/seafood.component';
import { PoultryComponent } from './recipes/recipe-types/poultry/poultry.component';
import { MeatComponent } from './recipes/recipe-types/meat/meat.component';
import { DessertsComponent } from './recipes/recipe-types/desserts/desserts.component';
import { AppetizerComponent } from './recipes/recipe-types/appetizer/appetizer.component';
import { FilterPipe } from './flavors/filter.pipe';







@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    FlavorsComponent,
    HeaderComponent,
    SingleFlavorComponent,
    RecipeTypesComponent,
    HomepageComponent,
    AlphaPipe,
    CocktailComponent,
    VegetablesComponent,
    BreadComponent,
    SeafoodComponent,
    PoultryComponent,
    MeatComponent,
    DessertsComponent,
    AppetizerComponent,
    FilterPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlideshowModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [AlphaPipe,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
