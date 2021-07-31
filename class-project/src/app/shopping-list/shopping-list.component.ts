import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  // @Output() addButtonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(newIngredient : Ingredient) {
    this.ingredients.push(newIngredient);
  }

}
