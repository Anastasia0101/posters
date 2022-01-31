import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PostersListComponent } from './components/posters-list/posters-list.component';
import { PosterComponent } from './components/poster/poster.component';
import { PosterDialogComponent } from './components/poster-dialog/poster-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostersService } from './services/posters.service';
import { OffersListComponent } from './components/offers-list/offers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostersListComponent,
    PosterComponent,
    PosterDialogComponent,
    OffersListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    PostersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
