import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})

export class AnimationService {


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
}