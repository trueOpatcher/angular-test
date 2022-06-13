import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationService } from '../shared/animation.service';

declare var $: any;

@Component({
  selector: 'app-our-job',
  templateUrl: './our-job.component.html',
  styleUrls: ['./our-job.component.scss'],
  // animations: [
  //   trigger('message1', [
  //     state('', style({
  //       transform: translateX()
  //     }))
  //   ]),
  //   trigger('massage2'),
  //   trigger('phone')
  // ]
})
export class OurJobComponent implements OnInit, AfterViewInit {


  
  constructor(private aS: AnimationService) { }

 
  
  ngOnInit(): void {
   

  }

 

  ngAfterViewInit(): void {
    // document.getElementById('o1')!.style.opacity = '1';
    $(window).on('resize scroll', () => {

      if ($('#o1').isInViewport()) {
        this.aS.transformY('o1', 0, 1, 0);

  
      }

      if ($('#o2').isInViewport()) {
        this.aS.transformY('o2', 0, 0.7, 0.4);

        this.message1Animation();
        this.message2Animation();
      }

      if ($('#o3').isInViewport()) {
        this.aS.transformY('o3', 0, 1, 0.4);
      }

      if ($('#o4').isInViewport()) {
        this.aS.transformY('o4', 0, 1, 0.6);
      }


    
    });
  
  
    

  }

  message1Animation() {
    document.getElementById('message1')!.style.transition = 'all 0.5s 1s ease-out'
    document.getElementById('message1')!.style.opacity = '1';
    document.getElementById('message1')!.style.transform = 'translateX(0)';

    document.getElementById('text1')!.style.transition = 'all 0.2s 1.5s ease-out'
    document.getElementById('text1')!.style.opacity = '1';
    document.getElementById('text1')!.style.transform = 'scale(1)';

  }

  message2Animation() {
    document.getElementById('message2')!.style.transition = 'all 0.5s 1s ease-out'
    document.getElementById('message2')!.style.opacity = '1';
    document.getElementById('message2')!.style.transform = 'scale(1)';

    document.getElementById('text2')!.style.transition = 'all 0.2s 1.5s ease-out'
    document.getElementById('text2')!.style.opacity = '1';
    document.getElementById('text2')!.style.transform = 'scale(1)';
  }
  

}
