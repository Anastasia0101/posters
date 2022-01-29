import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Poster } from "../models/poster.model";

@Injectable({
  providedIn: 'root',
})
export class PostersService {
  url = 'api/posters/';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Poster[]> {
    return this.httpClient.get<Poster[]>(this.url);
  }
}


