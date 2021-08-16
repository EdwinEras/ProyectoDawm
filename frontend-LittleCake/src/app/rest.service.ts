import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }
  public delete(url:string){
    return this.http.delete(url);
  }

  public post(url:string, body:object){
    
    return this.http.post(url,body);
  }
  public put(url:string, body:object){
    
    return this.http.put(url,body);
  }

}
