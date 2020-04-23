import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})

export class WalkthroughPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  showSkip = true;
  slideOpts = {
    effect: 'flip',
    speed: 1000
  };
  dir: String = 'ltr';

  slideList: Array<any> = [
    {
      title: 'What is <strong>food<span class="text-secondary">Ionic</span></strong>?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
      image: 'assets/img/burger01.png',
    },
    {
      title: 'Why <strong>food<span class="text-secondary">Ionic</span> 2</strong>?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
      image: 'assets/img/pizza01.png',
    },
    {
      title: '<strong>Your delicious dish is coming!</strong>',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
      image: 'assets/img/pasta01.png',
    }
  ];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public router: Router
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  onSlideNext() {
    this.slides.slideNext(1000, false);
  }

	onSlidePrev() {
    this.slides.slidePrev(300);
  }

  // onLastSlide() {
  // 	this.slides.slideTo(3, 300)
  // }

  openHomeLocation() {
    this.navCtrl.navigateRoot('/home-location');
    // this.router.navigateByUrl('/tabs/(home:home)');
  }

  openLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

}