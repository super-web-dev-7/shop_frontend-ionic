import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';
import {HttpService} from '../../../../providers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-country',
    templateUrl: './add-country.component.html',
    styleUrls: ['./add-country.component.scss'],
})
export class AddCountryComponent implements OnInit {

    public onRegisterForm: FormGroup;
    private languages: any;

    constructor(
        private modalCtrl: ModalController,
        private httpRequest: HttpService,
        private formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public toastController: ToastController
    ) {
    }

    ngOnInit() {
        this.onRegisterForm = this.formBuilder.group({
            'name': [null, Validators.compose([
                Validators.required
            ])],
            'languages': [null, Validators.compose([
                Validators.required
            ])]
        });

        this.httpRequest.getAllLanguages().subscribe(languages => {
            this.languages = languages;
        });
    }

    get f() {
        return this.onRegisterForm.controls;
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async addCountry() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            name: this.f.name.value,
            languages: this.f.languages.value,
        };

        this.httpRequest.addCountry(data).subscribe((res: any) => {
            if (res.status === 'duplicated') {
                loader.onWillDismiss().then(() => {
                    this.presentToast('Country name already exists')
                })
            } else {
                loader.onWillDismiss().then(() => {
                    this.modalCtrl.dismiss(data)
                })
            }
        });
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
}
