import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationService } from '../shared/animation.service';


declare var $: any;

@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.scss']
})



export class WhyWeComponent implements OnInit, AfterViewInit {

  constructor(private aS: AnimationService) { }




  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    $(window).on('resize scroll', () => {

      if ($('#sq1').isInViewport()) {
        this.aS.transformY('sq1', 0, 1, 0);
  
      }

      if ($('#sq2').isInViewport()) {
        this.aS.transformY('sq2', 0, 1, 0.1);
      }

      if ($('#sq3').isInViewport()) {
        this.aS.transformY('sq3', 0, 1, 0.2);
      }

      if ($('#sq4').isInViewport()) {
        this.aS.transformY('sq4', 0, 1, 0.3);
      }
    
    });
  }

}
