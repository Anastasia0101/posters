import { Component, OnInit } from '@angular/core';
import { Poster } from 'src/app/models/poster.model';
import { PostersService } from 'src/app/services/posters.service';
import { MatDialog } from '@angular/material/dialog';
import { PosterDialogComponent } from '../poster-dialog/poster-dialog.component';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-posters-list',
  templateUrl: './posters-list.component.html',
  styleUrls: ['./posters-list.component.css']
})
export class PostersListComponent implements OnInit {
  posters$: Observable<Poster[]>;
  posters: Poster[];
  control = new FormControl('');

  constructor(
    private postersService: PostersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.posters$ = this.postersService.getPosters();
    this.posters$.subscribe((posters: Poster[]) => {
      this.posters = posters;
    });
  }

  ngAfterViewInit(): void {
    combineLatest([ this.posters$, this.control.valueChanges ]).pipe(
      map(([posts, text]) => posts.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))),
    )
    .subscribe((posters: Poster[]) => this.posters = posters);
  }

  createPoster(): void {
    const dialogRef = this.dialog.open(PosterDialogComponent, {
      width: '40%',
      data: { }
    });
    dialogRef.afterClosed().subscribe();
  }
}
