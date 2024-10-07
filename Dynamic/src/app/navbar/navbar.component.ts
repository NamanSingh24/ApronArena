import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class NavbarComponent {
  screenWidth:boolean;
  constructor() {
    this.screenWidth =  window.innerWidth>992?true:false;
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = event.target.innerWidth>992?true:false;
    
    console.log(`Width: ${this.screenWidth}`);
  }

   toggle:boolean = false;

   TogglerOn(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
   }
    TogglerOff(){
      this.toggle = false;
      console.log(this.toggle);
    }
}
