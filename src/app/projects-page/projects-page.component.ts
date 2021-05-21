import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  linkHoverColor = '#B00115';

  @ViewChild('carousel') carousel: NgbCarousel | undefined;

  images: carouselData[] = [
    {
      header: 'Website Portfolio',
      description: 'The website was built using angular web framework.',
      url: '../../assets/projects-page/carousel/website-portfolio.PNG',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}

export type carouselData = {
  header: string;
  description: string;
  url: string;
};
