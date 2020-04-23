import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
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

        this.httpRequest.addCountry(data).subscribe(result => {
            this.modalCtrl.dismiss(data)
        });

        loader.onWillDismiss().then(() => {
        });
    }
}
