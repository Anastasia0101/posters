import { Component, Input } from '@angular/core';
import { Poster } from 'src/app/models/poster.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent {
  @Input() similarPosters: Poster[];
}
