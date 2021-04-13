import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sirius-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {
  topicTitle = {
    name: 'topic',
    fields: [
      {val: "Immigration New Zealand"},
      {val: "Video Games"},
      {val: "Monster Hunter: World"},
      {val: "Monster Hunter: Rise"},
      {val: "Food"},
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
