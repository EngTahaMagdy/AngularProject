import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../news.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
id:number;
category:string;
articleContainer;
  constructor(private _ActivatedRoute:ActivatedRoute,private _NewsService:NewsService) { 

    this.id=parseInt( _ActivatedRoute.snapshot.paramMap.get('id'));
    this.category= _ActivatedRoute.snapshot.paramMap.get('cat');
     this._NewsService.getNews(this.category).subscribe(data => this.articleContainer=data.articles[this.id])
  }
 
  ngOnInit() {
  }





  

}
