import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Details } from '../../Details';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Output() onAddDetails: EventEmitter<Details> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showAdd: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAdd = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask: Details = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddDetails.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
