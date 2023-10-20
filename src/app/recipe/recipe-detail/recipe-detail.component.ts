import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [
  ]
})
export class RecipeDetailComponent implements OnInit, OnDestroy{
  selectedRecipe!: Recipe;
  recipeId!: number;

  private subscription!: Subscription;

  constructor(private recipeService: RecipeService, private sls: ShoppingListService, private activatedRoute: ActivatedRoute, private router: Router){
  }

  async ngOnInit(): Promise<void> {
    this.subscription = this.activatedRoute.params.subscribe(
      params =>{
        this.recipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  onEdit(){
    this.router.navigate(['/rezepte',this.recipeId, 'bearbeiten']);
  }

  onAddToList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

  onDelete(){
    this.router.navigate(['/rezepte']);
    this.recipeService.deleteRecipe(this.recipeId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
