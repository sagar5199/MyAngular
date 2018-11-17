import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";


export class RecipeService{
recipeSelected=new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe("A Test recipe","This simply test","/src/app/recipes/images/doctor_ana.png"),
        new Recipe("A Test recipe 2","This simply test 2",""),
        new Recipe("Gujrati Recipe","Tasty","/src/app/recipes/images/doctor_ana.png")
      ];
      
      getRecipe()
      {
return this.recipes.slice();
      }
      getRecipeSelected(index:number)
      {
            return this.recipes[index];
      }
}
