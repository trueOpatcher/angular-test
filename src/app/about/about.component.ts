import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationService } from '../shared/animation.service';

declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit, AfterViewInit {

  constructor(private aS: AnimationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(window).on('resize scroll', () => {

      if ($('#a1').isInViewport()) {
        this.aS.transformX('a1', 0, 1, 0);
  
      }

      if ($('#a2').isInViewport()) {
        this.aS.transformX('a2', 0, 1, 0);
      }

      if ($('#a3').isInViewport()) {
        this.aS.transformX('a3', 0, 1, 0);
      }

      if ($('#we1').isInViewport()) {
        this.aS.transformX('we1', 0, 1, 0);
      }

      if ($('#we2').isInViewport()) {
        this.aS.transformX('we2', 0, 1, 0);
      }

      if ($('#we3').isInViewport()) {
        this.aS.transformX('we3', 0, 1, 0);
      }
    
    });
  }

}
