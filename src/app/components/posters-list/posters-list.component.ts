import { Component, OnInit } from '@angular/core';
import { Poster } from 'src/app/models/poster.model';
import { PostersService } from 'src/app/services/posters.service';

@Component({
  selector: 'app-posters-list',
  templateUrl: './posters-list.component.html',
  styleUrls: ['./posters-list.component.css']
})
export class PostersListComponent implements OnInit {
  posters: Poster[];

  constructor(private postersService: PostersService) { }

  ngOnInit(): void {
    this.postersService.getPosts().subscribe((posters: Poster[]) => {
      this.posters = posters;
    });
  }
}
