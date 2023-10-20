import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start.component";

export const RECIPE_ROUTES = [
    {path: '', component: RecipeStartComponent},
    {path: 'neu', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/bearbeiten', component: RecipeEditComponent},
]