import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService{
startEditing=new Subject<number>();
   private ingredients:Ingredient[]=[
        new Ingredient('Apple',5) ,
        new Ingredient('Tommatos',10) 
      ];

      getIngredient()
      {
          return this.ingredients;
      }

      addIngrident(ingrident:Ingredient)
      {
      
           this.ingredients.push(ingrident);
      }
      getSelectedItem(index:number)
      {
          return this.ingredients[index]; 
      }
      getUpdateItem(index:number,ingredients:Ingredient)
      {
          this.ingredients[index]=ingredients;
      }
      getDeleteItem(index:number)
      {
        this.ingredients.splice(index,1);
      }

      
}