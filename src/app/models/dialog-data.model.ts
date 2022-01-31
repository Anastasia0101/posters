import { Poster } from "./poster.model";

export interface DialogData {
  poster: Poster;
  isReadOnly?: boolean;
  similarPosters?: Poster[];
}
