import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = 'de8f4a54af634806b72582943b0315b4';
  constructor(private httpClient: HttpClient) { }  

  get(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }

}
