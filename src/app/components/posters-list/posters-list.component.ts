import { Component, OnInit } from '@angular/core';
import { Poster } from 'src/app/models/poster.model';
import { PostersService } from 'src/app/services/posters.service';
import { MatDialog } from '@angular/material/dialog';
import { PosterDialogComponent } from '../poster-dialog/poster-dialog.component';

@Component({
  selector: 'app-posters-list',
  templateUrl: './posters-list.component.html',
  styleUrls: ['./posters-list.component.css']
})
export class PostersListComponent implements OnInit {
  posters: Poster[];

  constructor(
    private postersService: PostersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPosters();
  }

  getPosters(): void {
    this.postersService.getPosters().subscribe((posters: Poster[]) => {
      this.posters = posters;
      console.log(posters);
    });
  }

  createPoster(): void {
    const dialogRef = this.dialog.open(PosterDialogComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((poster: Poster) => {
      this.postersService.createPoster(poster);
      // this.getPosters();
    });
  }
}
