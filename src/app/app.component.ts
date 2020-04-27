import {Component} from '@angular/core';

import {Platform, NavController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {TranslateProvider} from './providers/translate/translate.service';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';

import {Pages} from './interfaces/pages';
import {AuthService, HttpService} from './providers';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public appPages: Array<Pages>;
    public mainAdminPages: Array<Pages>;
    public shopAdminPages: Array<Pages>;
    public userPages: Array<Pages>;
    public currentUser: any;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translate: TranslateProvider,
        private translateService: TranslateService,
        public navCtrl: NavController,
        private auth: AuthService,
        private httpRequest: HttpService
    ) {
        this.mainAdminPages = [
            {
                title: this.translateService.instant('app.pages.users.title.header'),
                url: 'dashboard',
                direct: 'root',
                icon: 'person'
            },
            {
                title: this.translateService.instant('app.pages.profile.title.header'),
                url: 'profiles',
                direct: 'root',
                icon: 'people'
            },
            {
                title: this.translateService.instant('app.pages.assign.title.header'),
                url: 'assign_auth',
                direct: 'root',
                icon: 'pricetag'
            },
            {
                title: this.translateService.instant('app.pages.shop.title.header'),
                url: 'shops',
                direct: 'root',
                icon: 'gift'
            },
            {
                title: this.translateService.instant('app.pages.country.title.header'),
                url: 'countries',
                direct: 'root',
                icon: 'globe'
            },
            {
                title: this.translateService.instant('app.pages.language.title.header'),
                url: 'languages',
                direct: 'root',
                icon: 'language'
            }
        ];

        this.shopAdminPages = [
            {
                title: 'Users',
                url: 'shopadmin/users',
                direct: 'root',
                icon: 'person'
            },
            {
                title: 'Profiles',
                url: 'shopadmin/profile',
                direct: 'root',
                icon: 'people'
            },
            {
                title: 'Assign root to profile',
                url: 'shopadmin/assign_auth',
                direct: 'root',
                icon: 'pricetag'
            },
            {
                title: 'Products',
                url: 'shopadmin/products',
                direct: 'root',
                icon: 'gift'
            },
        ];

        this.userPages = [
            {
                title: 'Home Results',
                url: '/home-results',
                direct: 'root',
                icon: 'home'
            },
            {
                title: 'Home Location',
                url: '/home-location',
                direct: 'root',
                icon: 'home'
            },
            {
                title: 'Messages',
                url: '/messages',
                direct: 'forward',
                icon: 'mail'
            },
            {
                title: 'Restaurant List',
                url: '/restaurant-list/ ',
                direct: 'forward',
                icon: 'home'
            },
            {
                title: 'Dish List',
                url: '/dish-list',
                direct: 'forward',
                icon: 'pizza'
            },
            {
                title: 'Nearby',
                url: '/nearby',
                direct: 'forward',
                icon: 'compass'
            },
            {
                title: 'By Category',
                url: '/bycategory',
                direct: 'forward',
                icon: 'albums'
            },
            {
                title: 'Latest Orders',
                url: '/latest-orders',
                direct: 'forward',
                icon: 'list'
            },
            {
                title: 'Favorites',
                url: '/favorites',
                direct: 'forward',
                icon: 'heart'
            },
            {
                title: 'About',
                url: '/about',
                direct: 'forward',
                icon: 'information-circle-outline'
            },
            {
                title: 'Support',
                url: '/support',
                direct: 'forward',
                icon: 'help-buoy'
            },
            {
                title: 'App Settings',
                url: '/settings',
                direct: 'forward',
                icon: 'cog'
            },
            {
                title: 'Walkthrough',
                url: '/',
                direct: 'forward',
                icon: 'images'
            },
            {
                title: 'Extras',
                url: '/extras',
                direct: 'root',
                icon: 'newspaper'
            }
        ];

        this.auth.currentUserSubject.subscribe(value => {
            this.currentUser = value;
            if (this.currentUser) {
                switch (this.currentUser.role) {
                    case 0:
                        this.appPages = this.userPages;
                        break;
                    case 1:
                        this.appPages = this.shopAdminPages;
                        break;
                    case 2:
                        this.appPages = this.mainAdminPages;
                        break;
                }
            }
        });

        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            setTimeout(() => {
                this.splashScreen.hide();
            }, 1000);
            // this.splashScreen.hide();
            // Set language of the app.
            if (!localStorage.getItem('language')) {
                this.translateService.setDefaultLang(environment.language);
                this.translateService.use(environment.language);
                this.translateService.getTranslation(environment.language).subscribe(translations => {
                    this.translate.setTranslations(translations);
                });
            } else {
                this.translateService.setDefaultLang(localStorage.getItem('language'));
                this.translateService.use(localStorage.getItem('language'));
                this.translateService.getTranslation(localStorage.getItem('language')).subscribe(translations => {
                    this.translate.setTranslations(translations);
                });
            }

            if (!localStorage.getItem('isRTL')) {
                this.translate.setReadingDirection('ltr');
            } else {
                this.translate.setReadingDirection(localStorage.getItem('isRTL') === 'true' ? 'rtl' : 'ltr');
            }

        }).catch(() => {
            // Set language of the app.
            this.translateService.setDefaultLang(environment.language);
            this.translateService.use(environment.language);
            this.translateService.getTranslation(environment.language).subscribe(translations => {
                this.translate.setTranslations(translations);
            });
        });
    }

    goToEditProfile() {
        this.navCtrl.navigateForward('edit-profile');
    }

    logout() {
        this.auth.logout();
        this.translateService.setDefaultLang(environment.language);
        this.translateService.use(environment.language);
        this.translateService.getTranslation(environment.language).subscribe(translations => {
            this.translate.setTranslations(translations);
        });
        this.translate.setReadingDirection('ltr');
        this.navCtrl.navigateRoot('login');
    }
}
