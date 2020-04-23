(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding animated fadeIn login auth-page\">\n    <div class=\"theme-bg\"></div>\n    <div class=\"auth-content\">\n\n        <!-- Logo -->\n        <div class=\"ion-padding-horizontal ion-text-center animated fadeInDown\">\n            <div class=\"logo\"></div>\n            <h4 class=\"ion-no-margin\">\n                <ion-text color=\"light\" class=\"fw700\">\n                    {{ 'app.namea' | translate }}<ion-text color=\"secondary\">{{ 'app.nameb' | translate }}</ion-text>\n                    {{ 'app.version' | translate }}\n                </ion-text>\n            </h4>\n        </div>\n\n        <br>\n        <br>\n\n        <!-- Login form -->\n        <form [formGroup]=\"onLoginForm\" class=\"list-form\">\n            <ion-item class=\"ion-no-padding animated fadeInUp\">\n                <ion-label position=\"floating\">\n                    <ion-icon name=\"mail\" item-start></ion-icon>\n                    {{ 'app.label.email' | translate }}\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <p class=\"text08\" *ngIf=\"onLoginForm.get('email').touched && onLoginForm.get('email').hasError('required')\">\n                <ion-text color=\"warning\">\n                    {{ 'app.label.errors.field' | translate }}\n                </ion-text>\n            </p>\n\n            <ion-item class=\"ion-no-padding animated fadeInUp\">\n                <ion-label position=\"floating\">\n                    <ion-icon name=\"lock-closed\" item-start></ion-icon>\n                    {{ 'app.label.password' | translate }}\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <p color=\"warning\" class=\"text08\" *ngIf=\"onLoginForm.get('password').touched && onLoginForm.get('password').hasError('required')\">\n                <ion-text color=\"warning\">\n                    {{ 'app.label.errors.field' | translate }}\n                </ion-text>\n            </p>\n        </form>\n\n        <p tappable (click)=\"forgotPass()\" class=\"ion-text-right paz\">\n            <ion-text color=\"light\">\n                <strong>{{ 'app.pages.login.label.forgot' | translate }}</strong>\n            </ion-text>\n        </p>\n\n        <div>\n            <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"goToHome()\" [disabled]=\"!onLoginForm.valid\" tappable>\n                <ion-icon name=\"log-in\"></ion-icon>\n                {{ 'app.button.signin' | translate }}\n            </ion-button>\n\n        </div>\n\n        <!-- Other links -->\n        <div class=\"ion-text-center ion-margin-top\">\n      <span (click)=\"goToRegister()\" class=\"paz\" tappable>\n        <ion-text color=\"light\">\n          New here? <strong>{{ 'app.button.signup' | translate }}</strong>\n        </ion-text>\n      </span>\n        </div>\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n}\n\n.theme-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 0;\n  opacity: 0.4;\n  background-image: url(\"/assets/img/foodionic2-bg.jpg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXEFQUFxcSW9uaWNcXHNob3BpbmdcXGZvb2Rpb25pYzItZGV2ZWxvcGVyLTIwMjAwMTIwIC0gQ29weS9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNGQUFBO0FDQVI7O0FESUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSk7XG4gICAgfVxufVxuXG4udGhlbWUtYmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMDtcbiAgICBvcGFjaXR5OiAuNDsgLy8uMTJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9mb29kaW9uaWMyLWJnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBheiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSk7XG59XG5cbi50aGVtZS1iZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAwO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Zvb2Rpb25pYzItYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGF6IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let LoginPage = class LoginPage {
    constructor(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, translate, formBuilder, auth) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.auth = auth;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        console.log(this.auth.currentUserValue);
        if (this.auth.currentUserValue) {
            if (this.auth.currentUserValue.role === 0) {
                this.navCtrl.navigateRoot('/user');
            }
            else if (this.auth.currentUserValue.role === 1) {
            }
            else {
                this.navCtrl.navigateRoot("/dashboard");
            }
        }
        this.onLoginForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    }
    get form() {
        return this.onLoginForm.controls;
    }
    forgotPass() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const loader = yield this.loadingCtrl.create({
                                duration: 2000
                            });
                            loader.present();
                            loader.onWillDismiss().then((l) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                const toast = yield this.toastCtrl.create({
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
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    // // //
    goToRegister() {
        this.navCtrl.navigateRoot('/register');
    }
    goToHome() {
        this.auth.login(this.form.email.value, this.form.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data => {
            console.log(data);
            this.menuCtrl.enable(true);
            switch (data.role) {
                case 0:
                    this.navCtrl.navigateRoot('/user');
                    break;
                case 1:
                    console.log("Shop Admin");
                    this.navCtrl.navigateRoot('/shopadmin/users');
                    break;
                case 2:
                    this.navCtrl.navigateRoot('/dashboard');
                    console.log("Main Admin");
                    break;
            }
        }, error => {
            console.log(error.error);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map