import { NgModule } from "@angular/core";
import { ROUTES, Routes, Router, RouterModule } from "@angular/router";
import { HomePageComponent } from "./app/home-page/home-page.component";
import { ShoppingListComponent } from "./app/shopping-list/shopping-list.component";
import { RecipesComponent } from "./app/recipes/recipes.component";
import { RecipeStartComponent } from "./app/recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./app/recipes/recipe-detail/recipe-detail.component";

const appRoutes:Routes=[
   // {path:'',component:HomePageComponent},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'Recipe',component:RecipesComponent,
    children:[
        {path:'',component:RecipeStartComponent},
        {path:':id',component:RecipeDetailComponent},
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule
{

}
