import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
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


    constructor(
        private modalCtrl: ModalController,
        private httpRequest: HttpService,
        private formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        private auth: AuthService
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
            ])]
        });
        this.httpRequest.getCountry().subscribe(res => {
            this.countries = res;
        });
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

        loader.onWillDismiss().then(() => {
            const data = {
                firstName: this.f.firstName.value,
                lastName: this.f.lastName.value,
                email: this.f.email.value,
                password: this.f.password.value,
                country: this.f.country.value._id,
                language: this.f.language.value._id,
                shop: this.auth.currentUserValue.shop
            };
            this.httpRequest.addShopAdmin(data).subscribe(res => {
                this.modalCtrl.dismiss(res);
            })
            // this.auth.register(data).pipe(first()).subscribe(
            //     data => {
            //         data.country = this.f.country.value;
            //         data.language = this.f.language.value;
            //         this.modalCtrl.dismiss(data);
            //     }, error => {
            //         console.log(error.error)
            //     }
            // );
        });
    }
}
