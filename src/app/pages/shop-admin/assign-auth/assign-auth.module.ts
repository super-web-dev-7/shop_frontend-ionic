import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';

import {AssignAuthPage} from './assign-auth.page';
import {AssignToProfileComponent} from './assign-to-profile/assign-to-profile.component';

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
        AssignToProfileComponent
    ],
    entryComponents: [
        AssignToProfileComponent
    ]
})
export class AssignAuthPageModule {
}
