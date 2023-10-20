import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes : Recipe[] = [ 
        new Recipe('Schnitzel', 'Sehr Lecker!', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
        [
          new Ingredient('Pommes', 10),
          new Ingredient('Schnitzel', 1),
        ]),
        new Recipe('Salat', 'Auch Lecker?', 'https://www.gutekueche.at/storage/media/recipe/112666/6852_Gemischte-Salat_1.jpg', []),
      ];

      getRecipes(){
        return this.recipes;
      }

      getRecipe(id: number){
        return this.recipes[id];
      }

      deleteRecipe(id: number){
        this.recipes.splice(id, 1);
      }
}