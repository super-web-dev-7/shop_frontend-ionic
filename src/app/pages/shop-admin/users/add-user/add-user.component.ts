import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

    public onRegisterForm: FormGroup;
    public countries: any;
    public languages = [];
    public profiles: any;

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
            'firstName': [null, Validators.compose([
                Validators.required
            ])],
            'lastName': [null, Validators.compose([
                Validators.required
            ])],
            'email': [null, Validators.compose([
                Validators.required
            ])],
            'password': [null, Validators.compose([
                Validators.required
            ])],
            'country': [null, Validators.compose([
                Validators.required
            ])],
            'language': [{value: null, disabled: true}, Validators.compose([
                Validators.required
            ])],
            'profile': [null]
        });
        this.httpRequest.getCountry().subscribe(res => {
            this.countries = res;
        });
        this.httpRequest.getProfilesForShopAdmin(this.auth.currentUserValue.shop).subscribe(profiles => {
            this.profiles = profiles;
            console.log(profiles)
        })
    }

    get f() {
        return this.onRegisterForm.controls;
    }

    selectCountry(item) {
        if (item.detail.value !== null) this.languages = item.detail.value.languages;
        if (this.languages.length != 0) this.onRegisterForm.controls.language.enable();
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async addUser() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();
        const data = {
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            email: this.f.email.value,
            password: this.f.password.value,
            country: this.f.country.value._id,
            language: this.f.language.value._id,
            shop: this.auth.currentUserValue.shop,
            profile: this.f.profile.value === null ? null : this.f.profile.value._id
        };
        this.httpRequest.addShopAdmin(data).subscribe((res: any) => {
            if (res.unique === false) {
                loader.onWillDismiss().then(() => {
                    this.presentToast('User already exists')
                })
            } else {
                loader.onWillDismiss().then(() => {
                    this.modalCtrl.dismiss(res);
                });
            }

        })
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
}
