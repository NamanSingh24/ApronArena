import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, SliderComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
