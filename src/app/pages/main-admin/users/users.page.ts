import {Component} from '@angular/core';
import {
    AlertController,
    MenuController,
    LoadingController,
    ModalController
} from '@ionic/angular';

import {HttpService} from '../../../providers';

import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.page.html',
    styleUrls: ['./users.page.scss'],
    animations: [
        trigger('staggerIn', [
            transition('* => *', [
                query(':enter', style({opacity: 0, transform: `translate3d(100px,0,0)`}), {optional: true}),
                query(':enter', stagger('300ms', [animate('500ms', style({
                    opacity: 1,
                    transform: `translate3d(0, 0, 0)`
                }))]), {optional: true})
            ])
        ])
    ]
})

export class UsersPage {

    users: any;

    constructor(
        public menuCtrl: MenuController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        private http: HttpService,
        public alertController: AlertController,
        private translate: TranslateService
    ) {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.findAll();
    }

    findAll() {
        this.http.getAllUsers().subscribe(users => {
            this.users = users;
        })
    }

    async addUser() {
        const modal = await this.modalCtrl.create({
            component: AddUserComponent
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll();
            }
        });

        return await modal.present();
    }

    async editUser(user) {
        const modal = await this.modalCtrl.create({
            component: EditUserComponent,
            componentProps: {
                "user": user
            }
        });
        modal.onDidDismiss().then((data) => {
            if (data.data != null) {
                this.findAll();
            }
        });
        return await modal.present();
    }

    async deleteUser(id) {

        const option = {
            header: this.translate.instant('app.pages.users.title.delete'),
            message: this.translate.instant('app.alert.user.content'),
            buttons: [
                {
                    text: this.translate.instant('app.button.cancel'),
                    role: 'cancel',
                    cssClass: 'primary',
                    handler: (blah) => {
                    }
                }, {
                    text: this.translate.instant('app.button.delete'),
                    handler: () => {
                        this.http.deleteUser(id).subscribe(result => {
                            const index = this.users.findIndex(user => {
                                return id === user._id;
                            });
                            this.users.splice(index, 1);
                        })
                    }
                }
            ]
        };

        const alert = await this.alertController.create(option);
        await alert.present();
    }
}
