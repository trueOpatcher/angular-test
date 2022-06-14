import { Injectable } from "@angular/core";

declare var $: any;

@Injectable({providedIn: 'root'})

export class AnimationService {


  

  clickLink(id: any) {
    $('html, body').animate({
      scrollTop: $(id).offset().top - 150
  }, 300);
  }


    transformX(id: string, length: number, duration: number, delay: number) {
        
        document.getElementById(id)!.style.transition = 'all ' + duration + 's ' + delay + 's';
        document.getElementById(id)!.style.transform = 'translateX(' + length + 'px)';
        document.getElementById(id)!.style.opacity = '1';
    
      }
      transformY(id: string, length: number, duration: number, delay: number) {

        document.getElementById(id)!.style.transition = 'all ' + duration + 's ' + delay + 's';
        document.getElementById(id)!.style.transform = 'translateY(' + length + 'px)';
        document.getElementById(id)!.style.opacity = '1';
      }


      activeLink() {
    
        
        document.addEventListener('scroll', () => {

          if(!$(document).ready()) {
            return;
          }
          
          let win = window.scrollY;
          
          let headY = $('#head').offset().top - 155;
          let aboutY = $('#about-us').offset().top - 155;
          let weY = $('#what-we-do').offset().top - 155;
          let contactY = $('#contact-us').offset().top - 155;
        
    
          if(win < aboutY) {
            $('#li-head').addClass('active');
            $('#li-about').removeClass('active');
            $('#li-what').removeClass('active');
            $('#li-contact').removeClass('active');
    
          }
    
          if(win > aboutY && win < weY) {
            $('#li-head').removeClass('active');
            $('#li-about').addClass('active');
            $('#li-what').removeClass('active');
            $('#li-contact').removeClass('active');
          }
    
          if(win > weY && win < contactY) {
            $('#li-head').removeClass('active');
            $('#li-about').removeClass('active');
            $('#li-what').addClass('active');
            $('#li-contact').removeClass('active');
          }
    
          if(win > contactY) {
            $('#li-head').removeClass('active');
            $('#li-about').removeClass('active');
            $('#li-what').removeClass('active');
            $('#li-contact').addClass('active');
          }
    
        })
      }
}