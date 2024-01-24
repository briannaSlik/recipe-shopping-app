import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Vietnamese Pho', 'A delicious soup broth with glass noodles, a choice of meat, and a plethora of vegetables', 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4NzA5NzU5LWltYWdlLWt3dnY2eW5lLmpwZw.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
