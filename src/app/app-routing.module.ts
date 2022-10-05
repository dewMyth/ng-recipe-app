import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipestart/recipestart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  // -> localhost:4200
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  // -> localhost:4200/recipes
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      // -> localhost:4200/recipes
      { path: '', component: RecipeStartComponent },
      // -> localhost:4200/recipes/1  (1 is the id of the recipe)
      { path: ':id', component: RecipeDetailComponent },
    ],
  },

  // -> localhost:4200/shopping-list
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
