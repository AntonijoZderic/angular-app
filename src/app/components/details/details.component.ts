import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../../Details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() details: Details;

  constructor() { }

  ngOnInit(): void {
  }

}
