import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-add-language',
    templateUrl: './add-language.component.html',
    styleUrls: ['./add-language.component.scss'],
})
export class AddLanguageComponent implements OnInit {

    public onRegisterForm: FormGroup;
    private directions = [
        {
            name: 'LTR',
            value: false
        },
        {
            name: 'RTL',
            value: true
        }
    ];


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
            'name': [null, Validators.compose([
                Validators.required
            ])],
            'isRTL': [null, Validators.compose([
                Validators.required
            ])]
        });
    }

    get f() {
        return this.onRegisterForm.controls;
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async addLanguage() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            language: this.f.name.value,
            isRTL: this.f.isRTL.value.value,
        };
        this.httpRequest.addLanguage(data).subscribe(result => {
            this.modalCtrl.dismiss(data)
        });

        loader.onWillDismiss().then(() => {
        });
    }
}
