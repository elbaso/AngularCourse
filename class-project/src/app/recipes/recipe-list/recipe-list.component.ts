import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test', 'https://www.bbcgoodfoodme.com/wp-content/uploads/2021/05/crispy-coconut-prawn-mango-salad.jpg'),
    new Recipe('Test Recipe 2', 'Another test', 'https://wonkywonderful.com/wp-content/uploads/2018/09/baked-chicken-recipe-3-985x1477.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
