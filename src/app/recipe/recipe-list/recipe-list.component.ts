import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit{
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [ 
    new Recipe('Schnitzel', 'Sehr Lecker!', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    [
      new Ingredient('Pommes', 10),
      new Ingredient('Schnitzel', 1),
    ]),
    new Recipe('Salat', 'Auch Lecker?', 'https://www.gutekueche.at/storage/media/recipe/112666/6852_Gemischte-Salat_1.jpg', []),
  ];
  selectedRecipe!: Recipe;

  constructor(){}

  ngOnInit(): void {
    
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
