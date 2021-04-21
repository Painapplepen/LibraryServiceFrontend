import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { FoundPublisher, Publisher } from "../intefaces/interfaces";

@Injectable({providedIn: 'root'})
export class PublisherService {

  public error$: Subject<string> = new Subject<string>();
  public pathBase: string = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {}


  public getAllPublisher():Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.pathBase}publisher`);
  }

  public getPublsherById(id):Observable<Publisher> {
    return this.http.get<Publisher>(`${this.pathBase}publisher/${id}`);
  }

  public addPublisher(publisher: Publisher):Observable<Publisher> {
    return this.http.post<Publisher>(`${this.pathBase}publisher`, publisher);
  }

  public updatePublisher(publisher: Publisher):Observable<Publisher> {
    return this.http.put<FoundPublisher>(`${this.pathBase}publisher/${publisher.id}`, publisher);
  }

  public deletePublisher(id):Observable<any> {
    return this.http.delete<any>(`${this.pathBase}publisher/${id}`);
  }
}
