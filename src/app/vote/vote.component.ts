//Imports Externos
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() score: number

  @Output() upvote = new EventEmitter()
  @Output() downvote = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitUpvote() {
    this.upvote.emit()
    this.score++
  }

  emitDownvote() {
    this.downvote.emit()
    this.score--
  }
}
