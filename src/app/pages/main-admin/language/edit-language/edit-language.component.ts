import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavParams} from '@ionic/angular';
import {AuthService, HttpService} from '../../../../providers';

@Component({
    selector: 'app-edit-language',
    templateUrl: './edit-language.component.html',
    styleUrls: ['./edit-language.component.scss'],
})
export class EditLanguageComponent implements OnInit {

    public onEditForm: FormGroup;
    private language: any;
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
        private navParams: NavParams,
        public loadingCtrl: LoadingController,
    ) {}

    ngOnInit() {
        this.language = this.navParams.data.language;

        this.onEditForm = this.formBuilder.group({
            'name': [this.language.language, Validators.compose([
                Validators.required
            ])],
            'isRTL': [this.directions[this.language.isRTL === false ? 0 : 1], Validators.compose([
                Validators.required
            ])]

        });
    }

    get f() {
        return this.onEditForm.controls;
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async editLanguage() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            _id: this.language._id,
            language: this.f.name.value,
            isRTL: this.f.isRTL.value.value
        };

        this.httpRequest.editLanguage(data).subscribe(result => {
            loader.onWillDismiss().then( () => {
                this.modalCtrl.dismiss(data)
            })
        })
    }
}
