import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';

import {AssignAuthPage} from './assign-auth.page';

const routes: Routes = [
    {
        path: '',
        component: AssignAuthPage
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
        AssignAuthPage,
    ],
    entryComponents: [
    ]
})
export class AssignAuthPageModule {
}
