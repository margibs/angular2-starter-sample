import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-favorite',
  templateUrl: 'favorite.component.html',
  styleUrls: ['favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-Favorite') isFavorite = false;

  @Output() change = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

}
