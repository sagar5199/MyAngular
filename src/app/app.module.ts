import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { BasciHighlightDirective } from './basic-highlight/basic-highlight.directiv';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { DropDownDirectives } from './shared/dropdown.directives';
import { ShoppingListService } from './shopping-list/shopping-list.service';
//import {Routes, RouterModule} from '@angular/router';
import { Recipe } from './recipes/recipe.model';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { FormsModule} from '@angular/forms';
import {HttpModule}   from '@angular/http';
import { ServerService } from '../server.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasciHighlightDirective,
    BetterHighlightDirective,
    DropDownDirectives,
    HomePageComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

  ],
  providers: [ShoppingListService,ServerService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
