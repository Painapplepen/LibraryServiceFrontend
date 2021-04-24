import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book, FoundBook } from "../intefaces/interfaces";

@Injectable({providedIn: 'root'})
export class BookService {

  public pathBase: string = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {}

  public FoundAllBooks():Observable<FoundBook[]> {
    return this.http.get<FoundBook[]>(`${this.pathBase}book/getAll`);
  }

  public GetBookById(id):Observable<Book> {
    return this.http.get<Book>(`${this.pathBase}book/${id}`);
  }

  public AddBook(book: Book):Observable<Book> {
    return this.http.post<Book>(`${this.pathBase}book`, book);
  }

  public UpdateBook(book: Book):Observable<Book> {
    return this.http.put<Book>(`${this.pathBase}book/${book.id}`, book);
  }

  public DeleteBook(id):Observable<any> {
    return this.http.delete<any>(`${this.pathBase}book/${id}`);
  }
}
