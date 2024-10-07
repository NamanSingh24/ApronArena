import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
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
