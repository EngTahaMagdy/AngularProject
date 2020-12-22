import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.footer').hide();

    $(document).ready(function()
    {
      $('.footer').show(4500);
      $('li a').click(function(){
        $('.footer').hide();
        $('.footer').show(4500);
       
      });

$(window).scroll(function(){
    if($(window).scrollTop()>=480){
      $('#up').fadeIn(100);
      
    }else
    {
      $('#up').fadeOut(100)
    }

});




$('#up').click(function(){
 
  
  $('body , html').animate({
  
    scrollTop:0
    
    
   

 
  },500);
  //
})


     
     
    });

    




  }

}
