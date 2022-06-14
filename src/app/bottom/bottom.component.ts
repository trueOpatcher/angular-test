import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../shared/animation.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {

  constructor(private aS: AnimationService) { }

  ngOnInit(): void {

  
  }

  onClickLink(id:any) {
    this.aS.clickLink(id);
  }

}
