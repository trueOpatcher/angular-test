import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationService } from '../shared/animation.service';

declare var $:any;

@Component({
  selector: 'app-what-we',
  templateUrl: './what-we.component.html',
  styleUrls: ['./what-we.component.scss']
})

export class WhatWeComponent implements OnInit, AfterViewInit {

  constructor(private aS: AnimationService) { }

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    $(window).on('resize scroll', () => {

      if ($('#wi1').isInViewport()) {
        this.aS.transformY('wi1', 0, 1, 0);
  
      }

      if ($('#wi2').isInViewport()) {
        this.aS.transformY('wi2', 0, 1, 0);
      }

      if ($('#wi3').isInViewport()) {
        this.aS.transformY('wi3', 0, 1, 0);
      }
    
    });
  }

}
