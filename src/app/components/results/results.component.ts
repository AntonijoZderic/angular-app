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

}
