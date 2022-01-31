import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Poster } from 'src/app/models/poster.model';
import { PostersService } from 'src/app/services/posters.service';
import { PosterDialogComponent } from '../poster-dialog/poster-dialog.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent {

  @Input() poster!: Poster;
  @Input() fontSize: string;
  similarPosters: Poster[];

  constructor(
    public dialog: MatDialog,
    private postersService: PostersService
  ) { }

  openPosterDialog(isReadOnly?: boolean, posters?: Poster[]): void {
    const dialogRef = this.dialog.open(PosterDialogComponent, {
      data: {
        poster: this.poster,
        isReadOnly: isReadOnly,
        similarPosters: posters
      },
      maxHeight: '100vh',
      width: '50%'
    });
    dialogRef.afterClosed().subscribe();
  }

  showDetails(isReadOnly: boolean): void {
    this.postersService.searchSimilarPosters(this.poster).subscribe((posters: Poster[]) => {
      this.openPosterDialog(isReadOnly, posters);
    });
  }
}
