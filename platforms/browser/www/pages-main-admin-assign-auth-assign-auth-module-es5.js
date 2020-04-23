function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-admin-assign-auth-assign-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/assign-auth/assign-auth.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/assign-auth/assign-auth.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMainAdminAssignAuthAssignAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"secondary\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <ion-text color=\"light\">\n                {{ 'app.pages.assign.title.header' | translate }}\n            </ion-text>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-no-padding\" fixed>\n        <div class=\"ion-no-margin\">\n            <ion-item class=\"ion-no-padding animated fadeInUp bg-white\">\n                <ion-label>\n                    <ion-icon name=\"person\" item-start></ion-icon>\n                    {{'app.pages.users.title.header' | translate}}\n                </ion-label>\n                <ion-select okText=\"OK\" cancelText=\"Cancel\" multiple [(ngModel)]=\"selectedUserAccess\">\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of items\">{{item.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n    \n            <ion-item class=\"ion-no-padding animated fadeInUp bg-white\">\n                <ion-label>\n                    <ion-icon name=\"people\" item-start></ion-icon>\n                    {{'app.pages.profile.title.header' | translate}}\n                </ion-label>\n                <ion-select okText=\"OK\" cancelText=\"Cancel\" multiple [(ngModel)]=\"selectedProfileAccess\">\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of items\">{{item.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n    \n            <ion-item class=\"ion-no-padding animated fadeInUp bg-white\">\n                <ion-label>\n                    <ion-icon name=\"gift\" item-start></ion-icon>\n                    {{'app.pages.shop.title.header' | translate}}\n                </ion-label>\n                <ion-select okText=\"OK\" cancelText=\"Cancel\" multiple [(ngModel)]=\"selectedShopAccess\">\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of items\">{{item.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n    \n            <ion-item class=\"ion-no-padding animated fadeInUp bg-white\">\n                <ion-label>\n                    <ion-icon name=\"globe\" item-start></ion-icon>\n                    {{'app.pages.country.title.header' | translate}}\n                </ion-label>\n                <ion-select okText=\"OK\" cancelText=\"Cancel\" multiple [(ngModel)]=\"selectedCountryAccess\">\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of items\">{{item.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n    \n            <ion-item class=\"ion-no-padding animated fadeInUp bg-white\">\n                <ion-label>\n                    <ion-icon name=\"language\" item-start></ion-icon>\n                    {{'app.pages.language.title.header' | translate}}\n                </ion-label>\n                <ion-select okText=\"OK\" cancelText=\"Cancel\" multiple [(ngModel)]=\"selectedLanguageAccess\">\n                    <ion-select-option [value]=\"item.value\" *ngFor=\"let item of items\">{{item.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-button expand=\"full\" color=\"primary\" (click)=\"select()\" >{{'app.button.saveAssign' | translate}}</ion-button>\n        </div>\n    \n    </ion-grid>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/main-admin/assign-auth/assign-auth.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/main-admin/assign-auth/assign-auth.module.ts ***!
    \********************************************************************/

  /*! exports provided: AssignAuthPageModule */

  /***/
  function srcAppPagesMainAdminAssignAuthAssignAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignAuthPageModule", function () {
      return AssignAuthPageModule;
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


    var _assign_auth_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./assign-auth.page */
    "./src/app/pages/main-admin/assign-auth/assign-auth.page.ts");

    var routes = [{
      path: '',
      component: _assign_auth_page__WEBPACK_IMPORTED_MODULE_7__["AssignAuthPage"]
    }];

    var AssignAuthPageModule = function AssignAuthPageModule() {
      _classCallCheck(this, AssignAuthPageModule);
    };

    AssignAuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
      declarations: [_assign_auth_page__WEBPACK_IMPORTED_MODULE_7__["AssignAuthPage"]],
      entryComponents: []
    })], AssignAuthPageModule);
    /***/
  },

  /***/
  "./src/app/pages/main-admin/assign-auth/assign-auth.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/main-admin/assign-auth/assign-auth.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMainAdminAssignAuthAssignAuthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card {\n  border-radius: 0;\n}\n:host ion-button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1hZG1pbi9hc3NpZ24tYXV0aC9FOlxcQVBQXFxJb25pY1xcc2hvcGluZ1xcZm9vZGlvbmljMi1kZXZlbG9wZXItMjAyMDAxMjAgLSBDb3B5L3NyY1xcYXBwXFxwYWdlc1xcbWFpbi1hZG1pblxcYXNzaWduLWF1dGhcXGFzc2lnbi1hdXRoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi1hZG1pbi9hc3NpZ24tYXV0aC9hc3NpZ24tYXV0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFSSxvQ0FBQTtBQ0RSO0FESUk7RUFDSSxnQkFBQTtFQUNBLGlEQUFBO0FDRlI7QURLSTtFQUNJLGdCQUFBO0FDSFI7QURNSTtFQUNJLDBCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLWFkbWluL2Fzc2lnbi1hdXRoL2Fzc2lnbi1hdXRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSlcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGlvbi1pdGVtIHtcclxuLy8gICAgIC5pdGVtLW5hdGl2ZSB7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG46aG9zdCBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/main-admin/assign-auth/assign-auth.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/main-admin/assign-auth/assign-auth.page.ts ***!
    \******************************************************************/

  /*! exports provided: AssignAuthPage */

  /***/
  function srcAppPagesMainAdminAssignAuthAssignAuthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignAuthPage", function () {
      return AssignAuthPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers */
    "./src/app/providers/index.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AssignAuthPage = /*#__PURE__*/function () {
      function AssignAuthPage(menuCtrl, modalCtrl, loadingCtrl, http, alertController, translate) {
        _classCallCheck(this, AssignAuthPage);

        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertController = alertController;
        this.translate = translate;
        this.items = [{
          name: 'View',
          value: 1
        }, {
          name: 'Insert',
          value: 2
        }, {
          name: 'Edit',
          value: 3
        }, {
          name: 'Delete',
          value: 4
        }];
      }

      _createClass(AssignAuthPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
          this.findAll();
        }
      }, {
        key: "findAll",
        value: function findAll() {
          var _this = this;

          this.http.getAssign().subscribe(function (res) {
            _this.selectedUserAccess = res[0].user;
            _this.selectedProfileAccess = res[0].profile;
            _this.selectedShopAccess = res[0].shop;
            _this.selectedCountryAccess = res[0].country;
            _this.selectedLanguageAccess = res[0].language;
            _this.setting = res[0];
          });
        }
      }, {
        key: "select",
        value: function select() {
          var data = {
            user: this.selectedUserAccess,
            profile: this.selectedProfileAccess,
            shop: this.selectedShopAccess,
            country: this.selectedCountryAccess,
            language: this.selectedLanguageAccess,
            _id: this.setting._id
          };
          this.http.updateAssign(data).subscribe(function (res) {
            console.log(res);
          });
        }
      }]);

      return AssignAuthPage;
    }();

    AssignAuthPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }];
    };

    AssignAuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assign-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./assign-auth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-admin/assign-auth/assign-auth.page.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0,
        transform: "translate3d(100px,0,0)"
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
      }))]), {
        optional: true
      })])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./assign-auth.page.scss */
      "./src/app/pages/main-admin/assign-auth/assign-auth.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], AssignAuthPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-main-admin-assign-auth-assign-auth-module-es5.js.map