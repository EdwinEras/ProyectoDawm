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

<<<<<<< HEAD
  public postData(url:string, body:object){
    return this.http.post<any>(url, body);
=======
  public addNoticia(url:string, body:object){
    
    return this.http.post(url,body);
>>>>>>> 479746a9d44bbc3f217cbb25bc772023584baf4e
  }

}
