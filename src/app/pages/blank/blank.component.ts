import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../providers';

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    styleUrls: ['./blank.component.scss'],
})
export class BlankComponent implements OnInit {

    currentUser: any;

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.currentUser = this.auth.currentUserValue.email;
    }

}
