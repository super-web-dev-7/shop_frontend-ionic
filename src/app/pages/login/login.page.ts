import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import {AuthService, TranslateProvider} from '../../providers';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public onLoginForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private translate: TranslateProvider,
        private formBuilder: FormBuilder,
        private auth: AuthService
    ) { }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    ngOnInit() {
        console.log(this.auth.currentUserValue)
        if (this.auth.currentUserValue) {
            if (this.auth.currentUserValue.role === 0) {
                this.navCtrl.navigateRoot('/user');
            } else if (this.auth.currentUserValue.role === 1) {

            } else {
                this.navCtrl.navigateRoot("/dashboard")
            }
        }
        this.onLoginForm = this.formBuilder.group({
            'email': [null, Validators.compose([
                Validators.required
            ])],
            'password': [null, Validators.compose([
                Validators.required
            ])]
        });
    }

    get form() {
        return this.onLoginForm.controls;
    }

    async forgotPass() {
        const alert = await this.alertCtrl.create({
            header: this.translate.get('app.pages.login.label.forgot'),
            message: this.translate.get('app.pages.login.text.forgot'),
            inputs: [
                {
                    name: 'email',
                    type: 'email',
                    placeholder: this.translate.get('app.label.email')
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Confirm',
                    handler: async () => {
                        const loader = await this.loadingCtrl.create({
                            duration: 2000
                        });

                        loader.present();
                        loader.onWillDismiss().then(async l => {
                            const toast = await this.toastCtrl.create({
                                buttons: [
                                    {
                                        text: 'Close',
                                        role: 'cancel',
                                        handler: () => {
                                            console.log('Close clicked');
                                        }
                                    }
                                ],
                                message: this.translate.get('app.pages.login.text.sended'),
                                duration: 3000,
                                position: 'bottom'
                            });

                            toast.present();
                        });
                    }
                }
            ]
        });

        await alert.present();
    }

    // // //
    goToRegister() {
        this.navCtrl.navigateRoot('/register');
    }

    goToHome() {
        this.auth.login(this.form.email.value, this.form.password.value).pipe(first()).subscribe(
            data => {
                console.log(data)
                this.menuCtrl.enable(true);
                switch (data.role) {
                    case 0:
                        this.navCtrl.navigateRoot('/user');
                        break;
                    case 1:
                        console.log("Shop Admin")
                        this.navCtrl.navigateRoot('/shopadmin/users');
                        break;
                    case 2:
                        this.navCtrl.navigateRoot('/dashboard');
                        console.log("Main Admin")
                        break;
                }

            }, error => {
                console.log(error.error);
            }
        );
    }

}
