import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { first, map } from "rxjs/operators";
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

  editPoster(id: string, poster: Poster): void {
    this.fireStore.collection<Poster>('posters').doc(id).update(poster);
  }

  deletePoster(id: string): void {
    this.posterCollection.doc(id).delete();
  }

  get posterCollection(): AngularFirestoreCollection<Poster> {
    return this.fireStore.collection<Poster>('posters');
  }

  public searchSimilarPosters(chosenPoster: Poster): Observable<Poster[]> {
    return this.getPosters().pipe(
      first(),
      map((posters) => posters
        .filter(poster => poster.id !== chosenPoster.id)
        .filter(poster => this.isSimilarPoster(chosenPoster, poster))
        .slice(0, 3)
      )
    );
  }

  private isSimilarPoster(chosenPoster: Poster, poster: Poster): boolean {
    const wordOfChosenPoster = this.getPosterWords(chosenPoster);
    const wordOfPoster = this.getPosterWords(poster);
    return wordOfChosenPoster.some(item => wordOfPoster.includes(item));
  }

  getPosterWords(poster: Poster): string[] {
    const wordsOfTitle = poster.title.toLowerCase().split(' ').filter(item => item.length > 4);
    const wordsOfDescription = poster.description.toLowerCase().split(' ').filter(item => item.length > 4);
    return wordsOfTitle.concat(wordsOfDescription);
  }
}
