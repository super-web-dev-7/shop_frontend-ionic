import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController, MenuController, LoadingController} from '@ionic/angular';
import {AuthService, HttpService} from '../../providers';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public onRegisterForm: FormGroup;
    public countries: any;
    public languages = [];

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public loadingCtrl: LoadingController,
        private formBuilder: FormBuilder,
        private httpRequest: HttpService,
        private auth: AuthService
    ) {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
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
        })

    }

    get f() {
        return this.onRegisterForm.controls;
    }

    selectCountry(item) {
        if (item.detail.value !== null) this.languages = item.detail.value.languages;
        if (this.languages.length != 0) this.onRegisterForm.controls.language.enable();
    }

    async signUp() {
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
                language: this.f.language.value._id
            };
            this.auth.register(data).pipe(first()).subscribe(
                data => {
                    this.goToLogin();
                }, error => {
                    console.log(error.error)
                }
            );
            this.goToLogin();
        });
    }

    // // //
    goToLogin() {
        this.navCtrl.navigateRoot('/login');
    }
}
