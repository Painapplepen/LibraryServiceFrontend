import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Author, FoundAuthor } from "../intefaces/interfaces";

@Injectable({providedIn: 'root'})
export class AuthorService {

  public pathBase: string = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {}

  public FoundAllAuthors():Observable<FoundAuthor[]> {
    return this.http.get<FoundAuthor[]>(`${this.pathBase}author/getAll`);
  }

  public GetAuthorById(id):Observable<Author> {
    return this.http.get<Author>(`${this.pathBase}author/${id}`);
  }

  public AddAuthor(author: Author):Observable<Author> {
    return this.http.post<Author>(`${this.pathBase}author`, author);
  }

  public UpdateAuthor(author: Author):Observable<Author> {
    return this.http.put<Author>(`${this.pathBase}author/${author.id}`, author);
  }

  public DeleteAuthor(id):Observable<any> {
    return this.http.delete<any>(`${this.pathBase}author/${id}`);
  }
}
