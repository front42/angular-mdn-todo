import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();
  @Output() checkboxChange = new EventEmitter<void>();

  saveEditedItem(newDescription: string) {
    newDescription = newDescription.trim();
    if (!newDescription) return;
    this.item.description = newDescription;
    this.editable = false;
  }
}
