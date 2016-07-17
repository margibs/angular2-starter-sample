import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-vote',
  templateUrl: 'vote.component.html',
  styleUrls: ['vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() voteCount = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();


  constructor() {}

  ngOnInit() {
  }

  upVote(){
    if(this.myVote == 1) return;

    this.myVote++;
    this.vote.emit({ myVote: this.myVote });
  }

  downVote(){
    if(this.myVote == -1) return;
    
    this.myVote--;
    this.vote.emit({ myVote: this.myVote });
  }

}
