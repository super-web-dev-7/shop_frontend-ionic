function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-walkthrough-walkthrough-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWalkthroughWalkthroughPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n    <ion-slides pager=\"true\" dir=\"ltr\" options=\"slideOpts\">\n        <ion-slide *ngFor=\"let slide of slideList\" class=\"bg-profile\">\n            <div class=\"ion-padding\">\n                <img [src]=\"slide.image\" alt=\"foodIonic icons\" class=\"ion-margin-bottom slide-image animated fadeInDown slow\">\n                <h3 class=\"slide-title text-white animated fadeIn\" [innerHTML]=\"slide.title\"></h3>\n                <ion-text color=\"light\">\n                    <p [innerHTML]=\"slide.description\" class=\"animated fadeIn\"></p>\n                </ion-text>\n\n                <ion-button icon-left expand=\"full\" shape=\"round\" color=\"secondary\" class=\"ion-margin-top\" (click)=\"onSlideNext()\">\n                    Next\n                    <ion-icon name=\"arrow-forward\"></ion-icon>\n                </ion-button>\n            </div>\n\n            <!-- <div padding>\n\n            </div> -->\n        </ion-slide>\n        <ion-slide class=\"bg-profile\">\n            <div class=\"ion-padding w100\">\n                <img src=\"assets/img/foodIonic-ico.png\" alt=\"foodIonic\" class=\"slide-image animated fadeInDown slow\">\n                <h2 class=\"ion-margin-bottom slide-title text-white\">Ready to Lunch?</h2>\n\n                <hr>\n\n                <ion-button expand=\"full\" shape=\"round\" color=\"secondary\" class=\"ion-margin-top\" (click)=\"openLoginPage()\">\n                    Sign In / Sign Up\n                </ion-button>\n<!--                <ion-button expand=\"full\" shape=\"round\" color=\"dark\" class=\"ion-margin-top\" (click)=\"openHomeLocation()\">-->\n                    <!-- routerLink=\"/home\" -->\n<!--                    Get Started-->\n<!--                </ion-button>-->\n            </div>\n\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/walkthrough/walkthrough.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/walkthrough/walkthrough.module.ts ***!
    \*********************************************************/

  /*! exports provided: WalkthroughPageModule */

  /***/
  function srcAppPagesWalkthroughWalkthroughModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function () {
      return WalkthroughPageModule;
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


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/pages/walkthrough/walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_7__["WalkthroughPage"]
    }];

    var WalkthroughPageModule = function WalkthroughPageModule() {
      _classCallCheck(this, WalkthroughPageModule);
    };

    WalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
      declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_7__["WalkthroughPage"]]
    })], WalkthroughPageModule);
    /***/
  },

  /***/
  "./src/app/pages/walkthrough/walkthrough.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/walkthrough/walkthrough.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWalkthroughWalkthroughPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\n.toolbar-background {\n  background: var(--ion-color-primary) !important;\n  border-color: transparent;\n}\n\n.slide-zoom {\n  height: 99vh;\n}\n\n.slide-title {\n  margin-top: 0;\n}\n\n.slide-image {\n  max-width: 128px !important;\n  margin: 0 0 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2Fsa3Rocm91Z2gvRTpcXEFQUFxcSW9uaWNcXHNob3BpbmdcXGZvb2Rpb25pYzItZGV2ZWxvcGVyLTIwMjAwMTIwIC0gQ29weS9zcmNcXGFwcFxccGFnZXNcXHdhbGt0aHJvdWdoXFx3YWxrdGhyb3VnaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dhbGt0aHJvdWdoL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFRTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUVFLDJCQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhbGt0aHJvdWdoL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC50b29sYmFyLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuc2xpZGUtem9vbSB7XG4gICAgaGVpZ2h0OiA5OXZoO1xuICB9XG5cbiAgLnNsaWRlLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLnNsaWRlLWltYWdlIHtcbiAgICAvLyBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgbWF4LXdpZHRoOiAxMjhweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAwIDE4cHg7XG4gIH0iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zbGlkZS16b29tIHtcbiAgaGVpZ2h0OiA5OXZoO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEyOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAwIDE4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/walkthrough/walkthrough.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/walkthrough/walkthrough.page.ts ***!
    \*******************************************************/

  /*! exports provided: WalkthroughPage */

  /***/
  function srcAppPagesWalkthroughWalkthroughPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function () {
      return WalkthroughPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var WalkthroughPage = /*#__PURE__*/function () {
      function WalkthroughPage(navCtrl, menuCtrl, router) {
        _classCallCheck(this, WalkthroughPage);

        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.showSkip = true;
        this.slideOpts = {
          effect: 'flip',
          speed: 1000
        };
        this.dir = 'ltr';
        this.slideList = [{
          title: 'What is <strong>food<span class="text-secondary">Ionic</span></strong>?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
          image: 'assets/img/burger01.png'
        }, {
          title: 'Why <strong>food<span class="text-secondary">Ionic</span> 2</strong>?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
          image: 'assets/img/pizza01.png'
        }, {
          title: '<strong>Your delicious dish is coming!</strong>',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.',
          image: 'assets/img/pasta01.png'
        }];
        this.menuCtrl.enable(false);
      }

      _createClass(WalkthroughPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSlideNext",
        value: function onSlideNext() {
          this.slides.slideNext(1000, false);
        }
      }, {
        key: "onSlidePrev",
        value: function onSlidePrev() {
          this.slides.slidePrev(300);
        } // onLastSlide() {
        // 	this.slides.slideTo(3, 300)
        // }

      }, {
        key: "openHomeLocation",
        value: function openHomeLocation() {
          this.navCtrl.navigateRoot('/home-location'); // this.router.navigateByUrl('/tabs/(home:home)');
        }
      }, {
        key: "openLoginPage",
        value: function openLoginPage() {
          this.navCtrl.navigateForward('/login');
        }
      }]);

      return WalkthroughPage;
    }();

    WalkthroughPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], WalkthroughPage.prototype, "slides", void 0);
    WalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-walkthrough',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./walkthrough.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./walkthrough.page.scss */
      "./src/app/pages/walkthrough/walkthrough.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WalkthroughPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-walkthrough-walkthrough-module-es5.js.map