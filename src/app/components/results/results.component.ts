import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Details } from '../../Details';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: Details[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getDetails().subscribe((results) => (this.results = results));
  }

  deleteDetails(details: Details) {
    this.httpService
    .deleteDetails(details)
    .subscribe(() => (this.results = this.results.filter(r => r.id !== details.id)));
  }

  toggleReminder(details: Details) {
    details.reminder = !details.reminder;
    this.httpService.updateReminder(details).subscribe();
  }

  addDetails(details: Details) {
    this.httpService.addDetails(details).subscribe((details) => (this.results.push(details)));
  }

}
