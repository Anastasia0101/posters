import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
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
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  poster?: Poster;
  isReadOnly = false;

  constructor(
    public dialogRef: MatDialogRef<PosterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private postersService: PostersService,
    private _ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.isReadOnly = this.data.isReadOnly ?? false;
    if (this.data.poster) {
      this.poster = this.data.poster;
      this.posterForm.patchValue({
        title: this.data.poster.title,
        description: this.data.poster.description
      });
    }
  }

  onFormSubmit(): void {
    !this.poster ? this.createPoster() : this.editPoster();
    this.closeDialog();
  }

  createPoster(): void {
    const posterFormValue = this.posterForm.value;
    const dateOfCreation = new Date().toDateString();
    const poster = { id: null, ...posterFormValue, dateOfCreation } as Poster;
    this.postersService.createPoster(poster);
  }

  editPoster(): void {
    const posterFormValue = this.posterForm.value;
    const poster = { ...posterFormValue, dateOfCreation: this.poster.dateOfCreation } as Poster;
    this.postersService.editPoster(this.poster.id, poster);
  }

  deletePoster(): void {
    if (this.poster) this.postersService.deletePoster(this.poster.id);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  triggerResize(): void {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
