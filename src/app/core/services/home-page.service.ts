import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/internal/operators";
import { BookFundSearchCondition, FoundBookFund } from "../intefaces/interfaces";

@Injectable({providedIn: 'root'})
export class HomePageService {

  public error$: Subject<string> = new Subject<string>();
  public pathBase: string = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {}

  public FoundAllPublisher():Observable<FoundBookFund[]> {
    debugger
    return this.http.get<FoundBookFund[]>(`${this.pathBase}bookFund/getAll`);
  }
}
