import { Component, OnInit, Input,EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-like',
  templateUrl: 'like.component.html',
  styleUrls: ['like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLike: boolean = false;
  @Input() totalLikes = 0;

  constructor() {}

  ngOnInit() {
  }

  onClick(){
    this.isLike = !this.isLike;
    this.totalLikes += this.isLike ? 1 : -1;
  }

}
