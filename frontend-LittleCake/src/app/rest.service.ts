import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  public getPaises(url:string){
    return this.http.get(url); //GET A PAISES

  }

  public addNoticia(url:string, body:object){
    return this.http.post<any>(url, body);
  }

}
