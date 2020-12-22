import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {Router} from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
conData=[];
componentCategory='entertainment';
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

    $('#up').click(function(){
      $('.footer').css('color','red')
      
      $('body').animate({
    
        scrollTop:0,
        
        color:'blue'
    
     
      },1000);
      //
    })
  }

}
