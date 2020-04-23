import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';

import {LanguagePage} from './language.page';
import {AddLanguageComponent} from './add-language/add-language.component';
import {EditLanguageComponent} from './edit-language/edit-language.component';

const routes: Routes = [
    {
        path: '',
        component: LanguagePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild()
    ],
    declarations: [
        LanguagePage,
        AddLanguageComponent,
        EditLanguageComponent
    ],
    entryComponents: [
        AddLanguageComponent,
        EditLanguageComponent
    ]
})
export class LanguagePageModule {
}
