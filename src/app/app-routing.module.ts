import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  // -> localhost:4200
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  // -> localhost:4200/recipes
  { path: 'recipes', component: RecipesComponent },

  // -> localhost:4200/shopping-list
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
