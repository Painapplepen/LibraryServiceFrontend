import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FoundGenre, FoundLibrary, Genre, Library } from "../intefaces/interfaces";

@Injectable({providedIn: 'root'})
export class LibraryService {

  public pathBase: string = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {}

  public FoundAllLibraries():Observable<FoundLibrary[]> {
    return this.http.get<FoundLibrary[]>(`${this.pathBase}library/getAll`);
  }

  public GetLibraryById(id):Observable<Library> {
    return this.http.get<Library>(`${this.pathBase}library/${id}`);
  }

  public AddLibrary(library: Library):Observable<Library> {
    return this.http.post<Library>(`${this.pathBase}library`, library);
  }

  public UpdateLibrary(library: Library):Observable<Library> {
    return this.http.put<Library>(`${this.pathBase}library/${library.id}`, library);
  }

  public DeleteLibrary(id):Observable<any> {
    return this.http.delete<any>(`${this.pathBase}library/${id}`);
  }
}
