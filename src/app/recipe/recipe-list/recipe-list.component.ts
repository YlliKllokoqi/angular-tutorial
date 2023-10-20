import { RecipeService } from './../recipe.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[] = [];

  onNewRecipe(){
    this.router.navigate(['rezepte/neu']);
  }

  constructor(private recipeService: RecipeService, private router: Router){}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
