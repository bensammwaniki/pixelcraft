import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slideConfig = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 740,
        settings: {
          centerPadding: '10px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 420,
        settings: {
          centerPadding: '10px',
          slidesToShow: 3
        }
      }
    ],
  };

}
