import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef = new ElementRef<string>("");
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef = new ElementRef<string>("");
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    console.log("Add button clicked. Emitting event with name " 
      + this.nameInputRef.nativeElement.value
      + " and amount " + this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value));
  }

}
