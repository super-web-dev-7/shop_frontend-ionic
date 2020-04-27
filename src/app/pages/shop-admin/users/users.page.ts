import {Component} from '@angular/core';
import {
    MenuController,
    LoadingController,
    ModalController
} from '@ionic/angular';

import {AuthService, HttpService} from '../../../providers';

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
    filteredUsers: any;
    searchValue: String;

    constructor(
        public menuCtrl: MenuController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        private http: HttpService,
        private translate: TranslateService,
        private auth: AuthService
    ) {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        console.log(this.auth.currentUserValue)
        this.findAll();
    }

    findAll() {
        this.http.getUsersForShopAdmin(this.auth.currentUserValue.shop).subscribe(users => {
            this.users = users;
            this.filteredUsers = users;
            console.log(users)
        })
    }

    searchUser() {
        this.filteredUsers = this.users.filter(user => {
            return user.email.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1
                || user.firstName.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1
                || user.lastName.toLowerCase().indexOf(this.searchValue.trim().toLowerCase()) > -1;
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
}
