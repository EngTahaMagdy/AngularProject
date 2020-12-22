import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  conData=[];
componentCategory='health';

  constructor(_NewsService:NewsService,private _Router:Router) { 

    _NewsService.getNews(this.componentCategory).subscribe( data =>{
      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].urlToImage== null)
        {
          data.articles[i].urlToImage="./assets/images/cover.jpg"
        }
      }

      this.conData=data.articles
    }  );

  }
  artNav(i,category)
   {
    this._Router.navigate(['article',i,category])
  // alert("index of "+i +"category is "+category)

   }

  ngOnInit() {
  }

}
