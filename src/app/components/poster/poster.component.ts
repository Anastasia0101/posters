import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Poster } from 'src/app/models/poster.model';
import { PosterDialogComponent } from '../poster-dialog/poster-dialog.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent {

  @Input() poster!: Poster;

  constructor(public dialog: MatDialog) { }

  showDetails(): void {
    const dialogRef = this.dialog.open(PosterDialogComponent, {
      width: '40%',
      data: {poster: this.poster, edit: false},
    });
    dialogRef.afterClosed().subscribe();
  }

  editPoster(): void {
    const dialogRef = this.dialog.open(PosterDialogComponent, {
      width: '40%',
      data: {poster: this.poster, edit: true},
    });
    dialogRef.afterClosed().subscribe();
  }
}
