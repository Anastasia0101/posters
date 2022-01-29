import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data.model';
import { Poster } from 'src/app/models/poster.model';
import { PostersService } from 'src/app/services/posters.service';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private posterService: PostersService
  ) { }

  ngOnInit(): void {
    if (this.data.poster) {
      this.posterForm.patchValue({
        title: this.data.poster.title,
        description: this.data.poster.description
      });
    }
  }

  savePoster(): void {
    const posterFormValue = this.posterForm.value as Poster;
    const dateOfCreation = new Date();
    const poster = { id: null, ...posterFormValue, dateOfCreation } as Poster;
    this.dialogRef.close(poster);
  }

  deletePoster(): void {
    if (!this.data.poster) this.closeDialog();
    this.posterService.deletePoster((this.data.poster.id).toString());
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
