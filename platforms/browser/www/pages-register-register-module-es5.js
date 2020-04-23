function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding animated fadeIn login auth-page\">\n\n    <div class=\"auth-content\">\n        <!-- Logo -->\n        <div class=\"ion-padding-horizontal ion-text-center animated fadeInDown\">\n            <div class=\"logo\"></div>\n            <h3 class=\"ion-no-margin\">\n                <ion-text color=\"light\" class=\"fw700\">\n                    <ion-text color=\"secondary\">{{ 'app.pages.register.title.header' | translate }}</ion-text>\n                </ion-text>\n            </h3>\n        </div>\n\n        <!-- Register form -->\n        <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n            <ion-item class=\"ion-no-padding animated fadeInUp\">\n                <ion-label position=\"floating\">\n                    <ion-icon name=\"person\" item-start></ion-icon>\n                    {{ 'app.label.firstname' | translate }}\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"text\" formControlName=\"firstName\"></ion-input>\n            </ion-item>\n            <p class=\"text08\"\n               *ngIf=\"onRegisterForm.get('firstName').touched && onRegisterForm.get('firstName').hasError('required')\">\n                <ion-text color=\"warning\">\n                    {{ 'app.label.errors.field' | translate }}\n                </ion-text>\n            </p>\n\n            <ion-item class=\"ion-no-padding animated fadeInUp\">\n                <ion-label position=\"floating\">\n                    <ion-icon name=\"person\" item-start></ion-icon>\n                    {{ 'app.label.lastname' | translate }}\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"text\" formControlName=\"lastName\"></ion-input>\n            </ion-item>\n            <p class=\"text08\"\n               *ngIf=\"onRegisterForm.get('lastName').touched && onRegisterForm.get('lastName').hasError('required')\">\n                <ion-text color=\"warning\">\n                    {{ 'app.label.errors.field' | translate }}\n                </ion-text>\n            </p>\n\n            <ion-item class=\"ion-no-padding animated fadeInUp\">\n                <ion-label position=\"floating\">\n                    <ion-icon name=\"mail\" item-start></ion-icon>\n                    {{ 'app.label.email' | translate }}\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <p class=\"text08\"\n               *ngIf=\"onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\n                <ion-text color=\"warning\">\n                    {{ 'app.label.errors.field' | translate }}\n                </ion-text>\n            </p>\n\n            <ion-item class=\"ion-no-padding animated fadeInUp\">\n                <ion-label position=\"floating\">\n                    <ion-icon name=\"lock-closed\" item-start></ion-icon>\n                    {{ 'app.label.password' | translate }}\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <p color=\"warning\" class=\"text08\"\n               *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\n                <ion-text color=\"warning\">\n                    {{ 'app.label.errors.field' | translate }}\n                </ion-text>\n            </p>\n\n            <ion-item class=\"ion-no-padding animated fadeInUp\">\n                <ion-label>\n                    <ion-icon name=\"settings\" item-start></ion-icon>\n                    {{ 'app.label.country' | translate }}\n                </ion-label>\n                <ion-select okText=\"OK\" cancelText=\"Cancel\" (ionChange)=\"selectCountry($event)\" formControlName=\"country\">\n                    <ion-select-option [value]=\"country\" *ngFor=\"let country of countries\">{{country.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <p color=\"warning\" class=\"text08\"\n               *ngIf=\"onRegisterForm.get('country').touched && onRegisterForm.get('country').hasError('required')\">\n                <ion-text color=\"warning\">\n                    {{ 'app.label.errors.field' | translate }}\n                </ion-text>\n            </p>\n\n            <ion-item class=\"ion-no-padding animated fadeInUp\">\n                <ion-label>\n                    <ion-icon name=\"language\" item-start></ion-icon>\n                    {{ 'app.label.language' | translate }}\n                </ion-label>\n                <ion-select formControlName=\"language\" okText=\"OK\" cancelText=\"Cancel\">\n                    <ion-select-option [value]=\"language\" *ngFor=\"let language of languages\" >{{language.language}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n        </form>\n\n        <div class=\"ion-margin-top\">\n            <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"signUp()\"\n                        [disabled]=\"!onRegisterForm.valid\"\n                        tappable>\n                <ion-icon name=\"log-in\"></ion-icon>\n                {{ 'app.button.signup' | translate }}\n            </ion-button>\n        </div>\n\n        <!-- Other links -->\n        <div class=\"ion-text-center ion-margin-top\">\n      <span (click)=\"goToLogin()\" tappable>\n        <ion-text color=\"light\">\n          <strong>{{ 'app.pages.register.label.ihave' | translate }}</strong>\n        </ion-text>\n      </span>\n        </div>\n\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
    }];

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) ;\n}\n:host .item-native {\n  padding: 0 !important;\n}\n:host ion-select-option {\n  --font-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRTpcXEFQUFxcSW9uaWNcXHNob3BpbmdcXGZvb2Rpb25pYzItZGV2ZWxvcGVyLTIwMjAwMTIwIC0gQ29weS9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHVGQUFBO0FDQVI7QURHSTtFQUNJLHFCQUFBO0FDRFI7QURJSTtFQUNJLGtCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKVxuICAgIH1cblxuICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tc2VsZWN0LW9wdGlvbiB7XG4gICAgICAgIC0tZm9udC1jb2xvcjogI2ZmZjtcbiAgICB9XG5cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSkgO1xufVxuOmhvc3QgLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLXNlbGVjdC1vcHRpb24ge1xuICAtLWZvbnQtY29sb3I6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers */
    "./src/app/providers/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(navCtrl, menuCtrl, loadingCtrl, formBuilder, httpRequest, auth) {
        _classCallCheck(this, RegisterPage);

        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.httpRequest = httpRequest;
        this.auth = auth;
        this.languages = [];
      }

      _createClass(RegisterPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(false);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.onRegisterForm = this.formBuilder.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'country': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'language': [{
              value: null,
              disabled: true
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
          this.httpRequest.getCountry().subscribe(function (res) {
            _this.countries = res;
          });
        }
      }, {
        key: "selectCountry",
        value: function selectCountry(item) {
          if (item.detail.value !== null) this.languages = item.detail.value.languages;
          if (this.languages.length != 0) this.onRegisterForm.controls.language.enable();
        }
      }, {
        key: "signUp",
        value: function signUp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      duration: 2000
                    });

                  case 2:
                    loader = _context.sent;
                    loader.present();
                    loader.onWillDismiss().then(function () {
                      var data = {
                        firstName: _this2.f.firstName.value,
                        lastName: _this2.f.lastName.value,
                        email: _this2.f.email.value,
                        password: _this2.f.password.value,
                        country: _this2.f.country.value._id,
                        language: _this2.f.language.value._id
                      };

                      _this2.auth.register(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
                        _this2.goToLogin();
                      }, function (error) {
                        console.log(error.error);
                      });

                      _this2.goToLogin();
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // // //

      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.navCtrl.navigateRoot('/login');
        }
      }, {
        key: "f",
        get: function get() {
          return this.onRegisterForm.controls;
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _providers__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _providers__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map