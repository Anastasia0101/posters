import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Poster } from 'src/app/models/poster.model';
import { PostersService } from 'src/app/services/posters.service';
import { MatDialog } from '@angular/material/dialog';
import { PosterDialogComponent } from '../poster-dialog/poster-dialog.component';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { map, startWith, withLatestFrom } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-posters-list',
  templateUrl: './posters-list.component.html',
  styleUrls: ['./posters-list.component.css']
})
export class PostersListComponent implements OnInit {
  posters$: Observable<Poster[]>;
  posters: Poster[];
  @ViewChild('seacher', {static: false}) inputRef: ElementRef<HTMLInputElement>;
  control = new FormControl('');

  constructor(
    private postersService: PostersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.posters$ = this.postersService.getPosters();
    this.posters$.subscribe((posters: Poster[]) => {
      this.posters = posters;
    })
  }

  ngAfterViewInit(): void {
    const inputedText = fromEvent(this.inputRef.nativeElement, 'input').pipe(
      withLatestFrom(this.control.valueChanges.pipe(startWith(''))),
      map((data) => data[1]),
    );
    combineLatest([ this.posters$, inputedText ]).pipe(
      map(([posts, text]) => posts.filter(item => item.title.includes(text))),
    )
    .subscribe((posters: Poster[]) => this.posters = posters);
  }

  createPoster(): void {
    const dialogRef = this.dialog.open(PosterDialogComponent, {
      width: '40%',
      data: { poster: null }
    });

    dialogRef.afterClosed().subscribe((poster: Poster) => {
      if(poster) this.postersService.createPoster(poster);
    });
  }
}
