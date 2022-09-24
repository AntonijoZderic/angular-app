import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Details } from '../../Details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() details: Details;
  @Output() onDeleteDetails: EventEmitter<Details> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Details> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(details: Details) {
    this.onDeleteDetails.emit(details);
  }

  onToggle(details: Details) {
    this.onToggleReminder.emit(details);
  }

}
