import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
editMode=false;
editIndexItem:number;
Ingredients:Ingredient;
@ViewChild('f') slform:NgForm;
constructor(private slService:ShoppingListService){}
 

  ngOnInit() {
    this.slService.startEditing.subscribe((index:number)=>{
      this.editMode=true;
      this.editIndexItem=index;
 
      this.Ingredients=this.slService.getSelectedItem(this.editIndexItem);

     this.slform.setValue({
     name:this.Ingredients.name,
      amount:this.Ingredients.amount
   
     })
    })
  }
  onAddItem(forms:NgForm) {
   
   const value=forms.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode)
    {
      this.slService.getUpdateItem(this.editIndexItem,newIngredient)
    }
    else
    {
    this.slService.addIngrident(newIngredient);
    }
    forms.reset();
    this.editMode=false;
  }
  onClear()
  {
    this.slform.reset();
    this.editMode=false;
  }
  onDelete()
  {
    this.slService.getDeleteItem(this.editIndexItem);
    this.slform.reset();
    this.editMode=false;

  }
}
