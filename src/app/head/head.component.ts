import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationService } from '../shared/animation.service';


declare var $:any;
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit, AfterViewInit {

  constructor(private aS: AnimationService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
    this.aS.activeLink();

  }

  onClickLink(id:any) {
    this.aS.clickLink(id);
  }

  
  

}
