import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from "../banner/banner.component";
import { ReviewSecComponent } from "../review-sec/review-sec.component";
import { ServiceGivenComponent } from "../service-given/service-given.component";
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SliderComponent, ServiceGivenComponent, BannerComponent, ReviewSecComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../public/CSS/responsive.css']
})
export class HomeComponent {

}
