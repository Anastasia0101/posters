import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Poster } from 'src/app/models/poster.model';
import { PostersService } from 'src/app/services/posters.service';

interface PosterForm {
  title: string;
  description: string;
}

@Component({
  selector: 'app-poster-dialog',
  templateUrl: './poster-dialog.component.html',
  styleUrls: ['./poster-dialog.component.css']
})
export class PosterDialogComponent implements OnInit {

  posterForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<PosterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public poster: Poster,
    private formBuilder: FormBuilder,
    private posterService: PostersService
  ) { }

  ngOnInit(): void {
    // if (this.poster) {
    //   this.posterForm.patchValue({
    //     title: this.poster.title,
    //     description: this.poster.description
    //   });
    // }
  }

  savePoster(): void {
    console.log('save')
    const posterFormValue = this.posterForm.value as PosterForm;
    const dateOfCreation = new Date();
    const poster = { id: null, ...posterFormValue, dateOfCreation } as Poster;
    this.dialogRef.close(poster);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
