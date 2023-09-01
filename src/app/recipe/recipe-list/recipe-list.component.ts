import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit{
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'https://suttoninsurance.com/wp-content/uploads/2019/09/crash-testing-dummies1.jpg');
  selectedRecipe!: Recipe;

  constructor(){}

  ngOnInit(): void {
    
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
