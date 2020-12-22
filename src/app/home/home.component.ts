import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
imgSrc="./assets/images/cover.jpg";
name:string="taha magdy";

 hello()
{
  alert(this.name);
}

client:object[]=
[
  {name:"taha" ,age:25,birth:"01/01/1997",gender:"male"},
  {name:"ali" ,age:28,birth:"10/01/1995",gender:"male"},
  {name:"mai" ,age:25,birth:"08/11/1997",gender:"female"},
  {name:"Magdy" ,age:30,birth:"02/10/1997",gender:"male"},
  {name:"sara" ,age:25,birth:"01/01/1997",gender:"female"},
  {name:"Taha" ,age:25,birth:"01/01/1997",gender:"male"}
]
term:string;
conData=[]




componentCategory:string='general' ;
  constructor(_NewsService:NewsService, private _Router:Router) {

   
    //this.conData =_NewsService.getData();
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
   

   }






  ngOnInit() {
  }

}
