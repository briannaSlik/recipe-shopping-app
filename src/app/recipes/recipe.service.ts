import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Vietnamese Pho', 
    //     'A delicious soup broth with glass noodles, a choice of meat, and a plethora of vegetables', 
    //     'https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4NzA5NzU5LWltYWdlLWt3dnY2eW5lLmpwZw.jpg',
    //     [
    //         new Ingredient('Broth', 1),
    //         new Ingredient('Glass Noodles', 1),
    //         new Ingredient('Sliced Beef', 1),
    //         new Ingredient('Green Onions', 1),
    //         new Ingredient('Onion', 1),
    //         new Ingredient('Cilantro', 1),
    //         new Ingredient('Lime', 1)
    //     ])
    // ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index]= newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice())
    }
}