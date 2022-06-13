import { AfterViewInit, Component, OnInit } from '@angular/core';

import { InViewportModule } from 'ng-in-viewport';
import { AnimationService } from '../shared/animation.service';

// import 'intersection-observer';

declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {


  showsText!: boolean;

 
  constructor(private aS: AnimationService) { }

 

  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(window).on('resize scroll', () => {

      if ($('#con1').isInViewport()) {
        this.aS.transformY('con1', 150, 1, 0);
      }
    
    });
  }

}
