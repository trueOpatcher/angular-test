import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements OnInit {

  toggle = false;

  ngOnInit(): void {
  }

  onMenuToggle() {
    this.toggle = !this.toggle;

    this.menuState();
  }


  menuState() {

    
    if(this.toggle) {
      document.getElementById('side-menu')!.style.width = '100%';
      document.body.style.overflow = 'hidden';

    } else {
      document.getElementById('side-menu')!.style.width = '0px';
      document.body.style.overflow = 'visible';
  
    }
  }


}