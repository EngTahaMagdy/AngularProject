import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private _HttpClient:HttpClient) { }
getNews(x):Observable<any>
{
  //false
  //return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category='+x+'&apiKey=5eef4444d03941e6ab84e6c84ccc88ab')
  return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category='+x+'&apiKey=8eef5201d03941e6ab84e6c84ccc00ab')
 //return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category='+x+'&apiKey=bc3703ad0681465d917df0b350d71189')
}

getData(){
  return [
    {name:'taha',age:24,salary:28000},
    {name:'hassan',age:24,salary:28000},
    {name:'ali',age:24,salary:28000},
    {name:'magdy',age:24,salary:28000},
    {name:'ahmed',age:24,salary:28000}
  ]

}

  
}
