import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookFund, FoundBookFund } from "../intefaces/interfaces";

@Injectable({providedIn: 'root'})
export class BookFundService {

  public pathBase: string = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {}

  public FoundAllBookFunds():Observable<FoundBookFund[]> {
    return this.http.get<FoundBookFund[]>(`${this.pathBase}bookFund/getAll`);
  }

  public GetBookFundById(id):Observable<FoundBookFund> {
    return this.http.get<FoundBookFund>(`${this.pathBase}bookFund/${id}`);
  }

  public AddBookFund(bookfund: BookFund):Observable<BookFund> {
    return this.http.post<BookFund>(`${this.pathBase}bookFund`, bookfund);
  }

  public UpdateBookFund(bookfund: BookFund):Observable<BookFund> {
    return this.http.put<BookFund>(`${this.pathBase}bookFund/${bookfund.id}`, bookfund);
  }

  public DeleteBookFund(id):Observable<any> {
    return this.http.delete<any>(`${this.pathBase}bookFund/${id}`);
  }
}
