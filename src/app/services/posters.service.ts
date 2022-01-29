import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Poster } from "../models/poster.model";

@Injectable({
  providedIn: 'root',
})
export class PostersService {

  constructor(private fireStore: AngularFirestore) {}

  getPosters(): Observable<Poster[]> {
    return this.fireStore.collection<Poster>('posters').valueChanges({ idField: 'id' });
  }

  createPoster(poster: Poster): void {
    this.fireStore.collection('posters').add(poster);
  }

  deletePoster(id: string): void {
    this.fireStore.collection<Poster>('posters').doc(id).delete();
  }
}
