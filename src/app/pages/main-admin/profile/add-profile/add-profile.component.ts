import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-profile',
    templateUrl: './add-profile.component.html',
    styleUrls: ['./add-profile.component.scss'],
})
export class AddProfileComponent implements OnInit {

    public onRegisterForm: FormGroup;
    public shopLists: any;
    public isMainAdmin: Boolean = false;

    constructor(
        private modalCtrl: ModalController,
        private httpRequest: HttpService,
        private formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        private auth: AuthService,
        public toastController: ToastController
    ) {
    }

    ngOnInit() {
        this.onRegisterForm = this.formBuilder.group({
            'name': [null, Validators.compose([
                Validators.required
            ])],
            'shop': [null, Validators.compose([
                Validators.required
            ])]
        });
        this.httpRequest.getAllShops().subscribe(shopLists => {
            this.shopLists = shopLists;
        })
    }

    get f() {
        return this.onRegisterForm.controls;
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    setShopID() {
        if (this.isMainAdmin) {
            this.f.shop.disable();
        } else {
            this.f.shop.enable();
        }
    }

    async addProfile() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            name: this.f.name.value,
            shopId: this.isMainAdmin ? null : this.f.shop.value._id,
            isMainAdmin: this.isMainAdmin,
            createdBy: this.auth.currentUserValue.email
        };

        this.httpRequest.addProfile(data).subscribe((result: any) => {
            if (result.status === 'duplicated') {
                loader.onWillDismiss().then(() => {
                    this.presentToast('Profile already exists')
                });
            } else {
                loader.onWillDismiss().then(() => {
                    this.modalCtrl.dismiss(data);
                });
            }
        });
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        await toast.present();
    }
}
