import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FoundGenre, Genre } from "../intefaces/interfaces";

@Injectable({providedIn: 'root'})
export class GenreService {

  public pathBase: string = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {}

  public FoundAllGenres():Observable<FoundGenre[]> {
    return this.http.get<FoundGenre[]>(`${this.pathBase}genre/getAll`);
  }

  public GetGenreById(id):Observable<Genre> {
    return this.http.get<Genre>(`${this.pathBase}genre/${id}`);
  }

  public AddGenre(genre: Genre):Observable<Genre> {
    return this.http.post<Genre>(`${this.pathBase}genre`, genre);
  }

  public UpdateGenre(genre: Genre):Observable<Genre> {
    return this.http.put<Genre>(`${this.pathBase}genre/${genre.id}`, genre);
  }

  public DeleteGenre(id):Observable<any> {
    return this.http.delete<any>(`${this.pathBase}genre/${id}`);
  }
}
