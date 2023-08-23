import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          centerPadding: '10px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 320,
        settings: {
          centerPadding: '10px',
          slidesToShow: 3
        }
      }
    ],
  };

}
