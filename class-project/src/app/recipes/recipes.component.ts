import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe = new Recipe( "", "", "");

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemClicked(recipeItem: Recipe) {
    console.log("Recipes: Caught clicked recipe: " + recipeItem.name);
    this.selectedRecipe = recipeItem;
  }

}
