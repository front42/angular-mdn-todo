import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MDN ToDo';
  slogan!: string;
  filter: 'all' | 'active' | 'done' = 'all';
  allItems: Item[] = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  constructor() {
    this.checkItems();
  }

  get items(): Item[] {
    return this.filter === 'all'
      ? this.allItems
      : this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  checkItems() {
    this.slogan =
      this.allItems.length === this.allItems.filter(item => item.done).length || !this.allItems.length
        ? 'Get some rest, workaholic'
        : 'You can do it with Angular';
  }

  addItem(description: string) {
    description = description.trim();
    if (!description) return;
    this.allItems.unshift({ description, done: false });
    this.checkItems();
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
    this.checkItems();
  }
}
