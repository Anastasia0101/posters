import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poster } from 'src/app/models/poster.model';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() poster!: Poster;

  constructor() { }

  ngOnInit(): void {
  }

}
