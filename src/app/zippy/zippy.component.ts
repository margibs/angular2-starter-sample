import { Component, OnInit,Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-zippy',
  templateUrl: 'zippy.component.html',
  styleUrls: ['zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input() title: string;
  show: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  dropDown(){
    this.show = !this.show;
  }

}
