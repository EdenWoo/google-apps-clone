import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spotlight-item',
  templateUrl: './spotlight-item.component.html',
  styleUrls: ['./spotlight-item.component.scss']
})
export class SpotlightItemComponent implements OnInit {

  @Input() item: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
