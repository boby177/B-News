import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private _http:HttpClient) { }

  // NewsApi URL
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=id&apiKey=515454ccd572466cb4dcde62479de822"

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=515454ccd572466cb4dcde62479de822"

  sportApiUrl = "https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=515454ccd572466cb4dcde62479de822"

  topHeading():Observable<any> {
    return this._http.get(this.newsApiUrl)
  }

  techNews():Observable<any> {
    return this._http.get(this.techApiUrl)
  }

  sportNews():Observable<any> {
    return this._http.get(this.sportApiUrl)
  }
}
