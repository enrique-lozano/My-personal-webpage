function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./right-tab/right-tab.component */
    "./src/app/right-tab/right-tab.component.ts");

    var routes = [{
      path: '',
      component: _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__["RightTabComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: "reload",
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            onSameUrlNavigation: "reload",
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./left-tab/left-tab.component */
    "./src/app/left-tab/left-tab.component.ts");
    /* harmony import */


    var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./right-tab/right-tab.component */
    "./src/app/right-tab/right-tab.component.ts");
    /* harmony import */


    var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speed-dial-fab/speed-dial-fab.component */
    "./src/app/speed-dial-fab/speed-dial-fab.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "LozanoWebPage";
      this.FabOptions = {
        buttons: [{
          icon: "contact_phone",
          link: "contacto"
        }, {
          icon: "business_center",
          link: "experiencia"
        }, {
          icon: "desktop_mac",
          link: "habilidades"
        }, {
          icon: "school",
          link: "educacion"
        }, {
          icon: "person",
          link: "sobre"
        }, {
          icon: "home",
          link: "inicio"
        }]
      };
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 1,
      consts: [[1, "fab-button", 3, "options"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-left-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-right-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-speed-dial-fab", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.FabOptions);
        }
      },
      directives: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__["LeftTabComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__["RightTabComponent"], _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__["SpeedDialFabComponent"]],
      styles: [".fab-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .fab-button[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxraWtlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXE15LXBlcnNvbmFsLXdlYnBhZ2Uvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREdBOzs7O3dDQUFBOztBQU1BO0VBQ0k7SUFDSSxhQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWItYnV0dG9ue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgTU9CSUxFIFZJRVdcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5mYWItYnV0dG9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn0iLCIuZmFiLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZmFiLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, httpTranslateLoader */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function () {
      return httpTranslateLoader;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./left-tab/left-tab.component */
    "./src/app/left-tab/left-tab.component.ts");
    /* harmony import */


    var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./right-tab/right-tab.component */
    "./src/app/right-tab/right-tab.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tab-header/tab-header.component */
    "./src/app/tab-header/tab-header.component.ts");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/timeline/timeline.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./speed-dial-fab/speed-dial-fab.component */
    "./src/app/speed-dial-fab/speed-dial-fab.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
          useFactory: httpTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__["LeftTabComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"], _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"], _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__["SpeedDialFabComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__["LeftTabComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"], _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"], _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__["SpeedDialFabComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
              useFactory: httpTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]]
            }
          })],
          providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    function httpTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__["TranslateHttpLoader"](http);
    }
    /***/

  },

  /***/
  "./src/app/left-tab/left-tab.component.ts":
  /*!************************************************!*\
    !*** ./src/app/left-tab/left-tab.component.ts ***!
    \************************************************/

  /*! exports provided: LeftTabComponent */

  /***/
  function srcAppLeftTabLeftTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftTabComponent", function () {
      return LeftTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tab-header/tab-header.component */
    "./src/app/tab-header/tab-header.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [""];
    };

    var LeftTabComponent =
    /*#__PURE__*/
    function () {
      function LeftTabComponent(tabHeader, translate) {
        _classCallCheck(this, LeftTabComponent);

        this.tabHeader = tabHeader;
        this.translate = translate;
        translate.addLangs(["es", "en"]);
        translate.setDefaultLang("es");
      }

      _createClass(LeftTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toDark",
        value: function toDark() {
          this.tabHeader.toDark();
          document.getElementById("main-tab").style.backgroundColor = "#151C21";
        }
      }, {
        key: "toLight",
        value: function toLight() {
          this.tabHeader.toLight();
          document.getElementById("main-tab").style.backgroundColor = "#3248F4";
        }
      }]);

      return LeftTabComponent;
    }();

    LeftTabComponent.ɵfac = function LeftTabComponent_Factory(t) {
      return new (t || LeftTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    LeftTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeftTabComponent,
      selectors: [["app-left-tab"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"]])],
      decls: 48,
      vars: 33,
      consts: [["id", "main-tab", 1, "main-tab"], [1, "face-image"], ["src", "../../assets/images/IMGP0592.jpg", 1, "profile-picture"], [1, "name"], [1, "name-font"], [1, "job"], [1, "page-links"], ["fragment", "inicio", 3, "routerLink"], [1, "category"], ["src", "../../assets/icons/home.png", 1, "icon"], ["fragment", "sobre", 3, "routerLink"], ["src", "../../assets/icons/user-1.png", 1, "icon"], ["fragment", "educacion", 3, "routerLink"], ["src", "../../assets/icons/atomic.png", 1, "icon"], ["fragment", "habilidades", 3, "routerLink"], ["src", "../../assets/icons/monitor.png", 1, "icon"], ["fragment", "experiencia", 3, "routerLink"], ["src", "../../assets/icons/layers.png", 1, "icon"], ["fragment", "contacto", 3, "routerLink"], ["src", "../../assets/icons/chat.png", 1, "icon"], [1, "social-media"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/enriqueloz88"], ["src", "../../assets/icons/github.png", 1, "social-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/"], ["src", "../../assets/icons/linkedin.png", 1, "social-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com"], ["src", "../../assets/icons/email.png", 1, "social-icon"]],
      template: function LeftTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, "full_name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, "job"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 17, "about_me.title"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 19, "education.title"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 21, "skills.title"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 23, "experience.title"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 25, "contact.title"), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".main-tab[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 90%;\n  margin: 5%;\n  margin-top: 3%;\n  background-color: #3248f4;\n  border-radius: 22px;\n  color: white;\n  display: inline-block;\n  position: fixed;\n}\n\nspan[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  vertical-align: text-top;\n  font-size: large;\n  text-decoration: none;\n}\n\n.face-image[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  height: 6em;\n  width: 6em;\n  border-radius: 100%;\n  margin: 10%;\n  border: 0.2em solid white;\n}\n\n.name[_ngcontent-%COMP%] {\n  height: 13%;\n}\n\n.name-font[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: x-large;\n  margin-left: 10%;\n  margin-top: 5%;\n}\n\n.job[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-left: 10%;\n  font-size: large;\n}\n\n.page-links[_ngcontent-%COMP%] {\n  height: 52%;\n}\n\n.category[_ngcontent-%COMP%] {\n  font-size: large;\n  margin-top: 3.5%;\n  cursor: pointer;\n  transition-duration: 0.5s;\n}\n\n.category[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 1.4em;\n  width: 1.4em;\n  margin-left: 10%;\n  margin-right: 5%;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  height: 15%;\n  text-align: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 1.7em;\n  width: 1.7em;\n  margin: 5%;\n  cursor: pointer;\n  transition-duration: 1.5s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: rotate(360deg) scale(1.4);\n  \n}\n\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 30, 227, 0.92);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n\n.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n}\n\n.title_settings[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n  inline-size: block;\n  line-height: 1em;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%] {\n  margin-top: 250%;\n}\n\n.selector[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.flags[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.aux[_ngcontent-%COMP%] {\n  height: auto;\n  vertical-align: bottom;\n}\n\n.aux-top[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.aux-bottom[_ngcontent-%COMP%] {\n  height: 50%;\n  color: rgba(0, 30, 227, 0);\n}\n\n.aux-container[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .main-tab[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC10YWIvQzpcXFVzZXJzXFxraWtlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXE15LXBlcnNvbmFsLXdlYnBhZ2Uvc3JjXFxhcHBcXGxlZnQtdGFiXFxsZWZ0LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGVmdC10YWIvbGVmdC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLHdCQUFBO0FDQUo7O0FES0E7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDRko7O0FETUE7RUFDSSxXQUFBO0FDSEo7O0FETUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDSEo7O0FET0E7RUFDSSxXQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURRQTtFQUNJLFdBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBSUEseUJBQUE7QUNMSjs7QURRQTtFQUNnQyxTQUFBO0VBQ0ksZUFBQTtFQUNoQyxzQkFBQTtBQ0hKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FEUUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFJQSx5QkFBQTtBQ0xKOztBRFFBO0VBQ21ELG1DQUFBO0VBQ0EsU0FBQTtFQUMvQyxvQ0FBQTtFQUErQywrQkFBQTtBQ0ZuRDs7QURLQTtFQUNJLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRko7O0FES0U7RUFDRSxjQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNJLGdCQUFBO0FDRk47O0FES0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtBQ0ZKOztBREtFO0VBQ0csV0FBQTtFQUNBLDBCQUFBO0FDRkw7O0FES0U7RUFDRSxxQkFBQTtBQ0ZKOztBRE1BOzs7O3dDQUFBOztBQU1BO0VBQ0k7SUFDSSxhQUFBO0VDSk47O0VETUU7SUFBWSxlQUFBO0VDRmQ7O0VER0U7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGVmdC10YWIvbGVmdC10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0xlZnQgQ29udGFpbmVyIGZvciBsaW5rcyBcclxuLm1haW4tdGFie1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbn1cclxuXHJcbi8vSW5kaXZpZHVhbCBwYXJ0cyBvZiB0aGUgbGVmdCB0YWJcclxuXHJcbmF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vL1Byb2ZpbGUgcGljdHVyZVxyXG4uZmFjZS1pbWFnZXtcclxuICAgIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJle1xyXG4gICAgaGVpZ2h0OiA2ZW07XHJcbiAgICB3aWR0aDogNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1hcmdpbjogMTAlO1xyXG4gICAgYm9yZGVyOiAwLjJlbSBzb2xpZCB3aGl0ZVxyXG59XHJcblxyXG4vL0pvYnNcclxuLm5hbWV7XHJcbiAgICBoZWlnaHQ6IDEzJTtcclxufVxyXG5cclxuLm5hbWUtZm9udHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uam9ie1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi8vTGlua3NcclxuLnBhZ2UtbGlua3N7XHJcbiAgICBoZWlnaHQ6IDUyJTtcclxufVxyXG5cclxuLmNhdGVnb3J5e1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi10b3A6IDMuNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG5cclxuLmNhdGVnb3J5OmhvdmVye1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IC8qIElFIDkgKi9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgXHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGJsdWU7IC8vVHJhbnNpdGlvbiB0byBhbm90aGVyIGNvbG9yXHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgaGVpZ2h0OiAxLjRlbTtcclxuICAgIHdpZHRoOiAxLjRlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4vL1NvY2lhbCBtZWRpYSBsaW5rc1xyXG4uc29jaWFsLW1lZGlhe1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbntcclxuICAgIGhlaWdodDogMS43ZW07XHJcbiAgICB3aWR0aDogMS43ZW07XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbjpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybSA6IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7IC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xyXG4gICAgLW1zLXRyYW5zZm9ybSAgICAgOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpOyAvKiBJRSA5ICovXHJcbiAgICB0cmFuc2Zvcm0gICAgICAgICA6IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7IC8qIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDMwLCAyMjcsIDAuOTIpO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkgYTpob3ZlciwgLm92ZXJsYXkgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlX3NldHRpbmdze1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBpbmxpbmUtc2l6ZTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LXNsaWRlLXRvZ2dsZXtcclxuICAgICAgbWFyZ2luLXRvcDogMjUwJTtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RvcntcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogMCA1JTtcclxuICB9XHJcblxyXG4gIC5mbGFnc3tcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogMCA1JTtcclxuICB9XHJcblxyXG4gIC5hdXh7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIH1cclxuXHJcbiAgLmF1eC10b3B7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5hdXgtYm90dG9te1xyXG4gICAgIGhlaWdodDogNTAlOyBcclxuICAgICBjb2xvcjogcmdiYSgwLCAzMCwgMjI3LCAwKTtcclxufVxyXG5cclxuICAuYXV4LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIFxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIE1PQklMRSBWSUVXXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAubWFpbi10YWJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5vdmVybGF5IGEge2ZvbnQtc2l6ZTogMjBweH1cclxuICAgIC5vdmVybGF5IC5jbG9zZWJ0biB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMzVweDtcclxuICAgIH1cclxufVxyXG4iLCIubWFpbi10YWIge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiA1JTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbnNwYW4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmFjZS1pbWFnZSB7XG4gIGhlaWdodDogMjAlO1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA2ZW07XG4gIHdpZHRoOiA2ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogMTAlO1xuICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xufVxuXG4ubmFtZSB7XG4gIGhlaWdodDogMTMlO1xufVxuXG4ubmFtZS1mb250IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5qb2Ige1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucGFnZS1saW5rcyB7XG4gIGhlaWdodDogNTIlO1xufVxuXG4uY2F0ZWdvcnkge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tdG9wOiAzLjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG4uY2F0ZWdvcnk6aG92ZXIge1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLyogSUUgOSAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC8qIFNhZmFyaSAzLTggKi9cbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuNGVtO1xuICB3aWR0aDogMS40ZW07XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5zb2NpYWwtbWVkaWEge1xuICBoZWlnaHQ6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBoZWlnaHQ6IDEuN2VtO1xuICB3aWR0aDogMS43ZW07XG4gIG1hcmdpbjogNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG59XG5cbi5zb2NpYWwtaWNvbjpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpO1xuICAvKiBDaHJvbWUsIE9wZXJhIDE1KywgU2FmYXJpIDMuMSsgKi9cbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTtcbiAgLyogSUUgOSAqL1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7XG4gIC8qIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXG59XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzAsIDIyNywgMC45Mik7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm92ZXJsYXktY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5vdmVybGF5IGEge1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5vdmVybGF5IGE6aG92ZXIsIC5vdmVybGF5IGE6Zm9jdXMge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLm92ZXJsYXkgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi50aXRsZV9zZXR0aW5ncyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaW5saW5lLXNpemU6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMWVtO1xufVxuXG5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgbWFyZ2luLXRvcDogMjUwJTtcbn1cblxuLnNlbGVjdG9yIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgNSU7XG59XG5cbi5mbGFncyB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwIDUlO1xufVxuXG4uYXV4IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uYXV4LXRvcCB7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uYXV4LWJvdHRvbSB7XG4gIGhlaWdodDogNTAlO1xuICBjb2xvcjogcmdiYSgwLCAzMCwgMjI3LCAwKTtcbn1cblxuLmF1eC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbi10YWIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAub3ZlcmxheSBhIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAub3ZlcmxheSAuY2xvc2VidG4ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgcmlnaHQ6IDM1cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-left-tab",
          templateUrl: "./left-tab.component.html",
          providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"]],
          styleUrls: ["./left-tab.component.scss"]
        }]
      }], function () {
        return [{
          type: _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/right-tab/right-tab.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/right-tab/right-tab.component.ts ***!
    \**************************************************/

  /*! exports provided: RightTabComponent, DialogContentExampleDialog, DialogContentExampleDialog2 */

  /***/
  function srcAppRightTabRightTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RightTabComponent", function () {
      return RightTabComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function () {
      return DialogContentExampleDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog2", function () {
      return DialogContentExampleDialog2;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tab-header/tab-header.component */
    "./src/app/tab-header/tab-header.component.ts");
    /* harmony import */


    var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../left-tab/left-tab.component */
    "./src/app/left-tab/left-tab.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../timeline/timeline.component */
    "./src/app/timeline/timeline.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function RightTabComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "dark_mode"));
      }
    }

    function RightTabComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "light_mode"));
      }
    }

    function RightTabComponent_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var language_r8 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r8)("selected", language_r8 === ctx_r3.translate.currentLang);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r8, " ");
      }
    }

    function RightTabComponent_mat_error_249_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RightTabComponent_mat_error_250_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RightTabComponent_mat_error_269_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RightTabComponent_mat_error_270_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [""];
    };

    var RightTabComponent =
    /*#__PURE__*/
    function () {
      function RightTabComponent(dialog, renderer, leftTab, translate) {
        _classCallCheck(this, RightTabComponent);

        this.dialog = dialog;
        this.renderer = renderer;
        this.leftTab = leftTab;
        this.translate = translate;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]); //Binding variables

        this.about = "Sobre mi";
        this.education = "Educación";
        this.skills = "Habilidades";
        this.rewards = "Reconocimientos";
        this.experience = "Experiencia";
        this.contact = "Contacto";
        this.main_skills = "Principales habilidades";
        this.isDark = false;
        translate.addLangs(["es", "en"]);
        translate.setDefaultLang("es");
      }

      _createClass(RightTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchLang",
        value: function switchLang(lang) {
          //Translation
          this.translate.use(lang);
        } //Function to open the popup

      }, {
        key: "openDialog",
        value: function openDialog(variable) {
          var dialogRef = null;

          if (variable == 1) {
            var _dialogRef = this.dialog.open(DialogContentExampleDialog);
          } else if (variable == 2) {
            var _dialogRef2 = this.dialog.open(DialogContentExampleDialog2);
          } else {
            alert("Popup not found");
          }

          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        } //Functions that implements the dark mode on this

      }, {
        key: "darkMode",
        value: function darkMode() {
          if (this.isDark == false) {
            console.log("To dark...");
            this.isDark = true;
            this.renderer.setStyle(document.body, "background-color", "#000000");
            document.getElementById("container").style.color = "white";
            document.getElementById("inicio").style.backgroundColor = "#151C21";
            document.getElementById("sobre").style.backgroundColor = "#151C21";
            document.getElementById("educacion").style.backgroundColor = "#151C21";
            document.getElementById("habilidades1").style.backgroundColor = "#151C21";
            document.getElementById("habilidades").style.backgroundColor = "#151C21";
            var skill = document.getElementsByClassName("skill-set");

            for (var i = 0, len = skill.length; i < len; i++) {
              skill[i].style.backgroundColor = "black";
              skill[i].style.color = "white";
            }

            document.getElementById("experiencia").style.backgroundColor = "#151C21";
            document.getElementById("contacto").style.backgroundColor = "#151C21";
            document.getElementById("light-form").style.display = "none";
            document.getElementById("dark-form").style.display = "block";
            document.getElementById("nightModeButton").style.backgroundColor = "white";
            document.getElementById("nightModeButton").style.color = "#333333";
            this.leftTab.toDark();
          } else {
            console.log("To light...");
            this.isDark = false;
            this.renderer.setStyle(document.body, "background-color", "#F3F6FF");
            document.getElementById("container").style.color = "black";
            document.getElementById("inicio").style.backgroundColor = "#3248F4";
            document.getElementById("sobre").style.backgroundColor = "white";
            document.getElementById("educacion").style.backgroundColor = "white";
            document.getElementById("habilidades1").style.backgroundColor = "#3248F4";
            document.getElementById("habilidades").style.backgroundColor = "white";
            var skill = document.getElementsByClassName("skill-set");

            for (var i = 0, len = skill.length; i < len; i++) {
              skill[i].style.backgroundColor = "white";
              skill[i].style.color = "black";
            }

            document.getElementById("experiencia").style.backgroundColor = "white";
            document.getElementById("contacto").style.backgroundColor = "white";
            document.getElementById("light-form").style.display = "block";
            document.getElementById("dark-form").style.display = "none";
            document.getElementById("nightModeButton").style.backgroundColor = "#333333";
            document.getElementById("nightModeButton").style.color = "white";
            this.leftTab.toLight();
          }
        }
      }]);

      return RightTabComponent;
    }();

    RightTabComponent.ɵfac = function RightTabComponent_Factory(t) {
      return new (t || RightTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__["LeftTabComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
    };

    RightTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RightTabComponent,
      selectors: [["app-right-tab"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__["LeftTabComponent"]])],
      decls: 291,
      vars: 100,
      consts: [["id", "container", 1, "container"], ["id", "inicio", 1, "home"], ["id", "nightModeButton", 3, "click"], ["src", "../../assets/icons/dark_mode.png", 1, "button-image"], [4, "ngIf"], [1, "select"], ["required", "", 1, "select-text", 3, "change"], ["selectedLang", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "select-highlight"], [1, "select-bar"], [1, "select-label"], [1, "container_name"], [1, "name"], [1, "description"], [1, "buttons"], ["fragment", "sobre", 3, "routerLink"], ["color", "warn", "mat-raised-button", "", 1, "button"], ["id", "sobre", 1, "about-me"], [3, "parentData"], [1, "about-photo"], ["src", "../../assets/images/IMGP0592.jpg", 1, "profile-picture"], [1, "about-text"], [1, "about-hello"], [1, "about-description"], [1, "about-data"], [1, "about-data-left"], [2, "color", "rgb(68, 68, 68)"], [1, "about-data-right"], [1, "about-buttons"], ["target", "_blank", "href", "../../assets/Documents/cv1.pdf"], ["mat-raised-button", "", "color", "warn", 1, "button", 2, "margin-right", "20%"], ["fragment", "contacto", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 1, "button"], ["id", "educacion", 1, "time"], ["id", "habilidades1", 1, "main-skills"], [1, "main-skill"], ["src", "../../assets/icons/python.png", 1, "skill-picture"], [1, "text-skill"], ["src", "../../assets/icons/ai.png", 1, "skill-picture"], ["src", "../../assets/icons/social.png", 1, "skill-picture"], ["src", "../../assets/icons/linux.png", 1, "skill-picture"], ["id", "habilidades", 1, "skills"], [1, "skill-set", "first"], [1, "skill-title"], [1, "skill-title-column"], [1, "skill-set"], ["src", "../../assets/icons/uk.png", 1, "flag"], [1, "flag-title"], ["src", "../../assets/icons/spain.png", 1, "flag", "last"], ["id", "experiencia", 1, "experience"], [1, "post-experience", "left-post"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "post-picture", 3, "click"], [1, "text-post"], [1, "post-experience", "right-post"], ["src", "../../assets/images/uc3m.png", 1, "post-picture", 3, "click"], ["id", "contacto", 1, "about-me", "last"], [1, "contact-left"], [1, "contact-mini"], [1, "contact-mini-left"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com"], ["src", "../../assets/icons/correo.png", 1, "contact-icon"], [1, "contact-mini-right"], [1, "section"], [1, "section__item"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "sm-link__label"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/"], ["src", "../../assets/icons/linkedin (azul).png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.es/maps/place/Madrid/@40.4378698,-3.8196201,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902"], ["src", "../../assets/icons/alfiler.png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.es/maps/place/Madrid/@40.4378698,-3.8196201,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "contact-right"], ["id", "light-form", 1, "contact-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", "name", "email", 3, "formControl", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Carolina, Mateo", "value", "", "name", "name_email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Propuesta de empleo", "value", "", "name", "subject", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Hola, me gustar\xEDa conocer...", "name", "text", "rows", "3", 3, "ngModel", "ngModelChange"], ["id", "dark-form", 1, "contact-form"], [1, "example-full-width"], [3, "href"], ["mat-raised-button", "", "color", "warn", 2, "float", "right", "margin-right", "8%", "margin-top", "5%", "margin-bottom", "10%"], [3, "value", "selected"]],
      template: function RightTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_button_click_2_listener() {
            return ctx.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RightTabComponent_span_4_Template, 3, 3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RightTabComponent_span_5_Template, 3, 3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RightTabComponent_Template_select_change_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.switchLang(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RightTabComponent_option_9_Template, 2, 3, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-tab-header", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 1999 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Madrid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " kikelozano8@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "app-tab-header", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Artificial Intelligence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Teamwork");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Linux");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "app-tab-header", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-expansion-panel", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Technical skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Inteligencia artificial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Desarrollo web/apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Bases de datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](115, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Linux");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Windows");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Microsoft Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Office avanzado y Prezi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](128, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Ionic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "SQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "C/C++");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "HTML/CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Bash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "MIPS 32 Ensamblador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](149, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Git");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Adobe Photoshop/GIMP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Audacity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Quartus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Weka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "JFlap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-expansion-panel", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Soft skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Trabajo en equipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Resiliencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Organizaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-expansion-panel", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](185, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h2", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Ingl\xE9s, B2 - First");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h2", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Espa\xF1ol, Nativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "app-tab-header", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_196_listener() {
            return ctx.openDialog(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Voluntario evento tecnol\xF3gico T3chfest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_200_listener() {
            return ctx.openDialog(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Profesor particular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "app-tab-header", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "kikelozano8@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Mi LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](237, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Madrid, Espa\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "form", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Tu email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_248_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, RightTabComponent_mat_error_249_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](250, RightTabComponent_mat_error_250_Template, 4, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_254_listener($event) {
            return ctx.name_email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Asunto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_258_listener($event) {
            return ctx.subject = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "mat-form-field", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Tu mensaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "textarea", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_262_listener($event) {
            return ctx.text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "form", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "mat-form-field", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](267, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_268_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, RightTabComponent_mat_error_269_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](270, RightTabComponent_mat_error_270_Template, 4, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-form-field", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](274, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_275_listener($event) {
            return ctx.name_email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "mat-form-field", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](279, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_280_listener($event) {
            return ctx.subject = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "mat-form-field", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](284, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "textarea", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_285_listener($event) {
            return ctx.text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](287, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](288, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Enviar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDark);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDark);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 50, "name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 52, "presentation"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](98, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 54, "first_button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.about);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 56, "about_me.hello"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 58, "about_me.intro"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 60, "about_me.name_title"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 62, "full_name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 64, "about_me.birthday_title"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 66, "loc_title"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 68, "email_title"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 70, "about_me.cv_button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](99, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 72, "about_me.hire_button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.education);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 74, "skills.important"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](115, 76, "skills.office"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](128, 78, "skills.frameworks"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](149, 80, "skills.other_tools"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](185, 82, "skills.languages"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.experience);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.contact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](237, 84, "loc_title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.emailFormControl)("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name_email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](267, 86, "contact.your_email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.emailFormControl)("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](274, 88, "contact.your_name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name_email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](279, 90, "contact.subject"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](284, 92, "contact.your_message"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("href", "mailto:kikelozano8@gmail.com?Subject=", ctx.subject, "&body=Hola%20", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](287, 94, "full_name"), ",%20soy%20", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](288, 96, "email"), ".%0A%0A%20%20%20", ctx.text, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n.container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 65%;\n  margin-top: 3%;\n  margin-right: 5%;\n  height: 100%;\n  vertical-align: top;\n  margin-left: 30%;\n}\n.home[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: 90%;\n  border-radius: 22px;\n  color: white;\n  position: relative;\n}\n.container_name[_ngcontent-%COMP%] {\n  height: 72%;\n  position: relative;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 4.5em;\n  line-height: 1em;\n  position: absolute;\n  bottom: 50%;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 1%;\n  font-weight: bold;\n}\n.description[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20%;\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: justify;\n  line-height: 1.5em;\n  font-size: 1.1em;\n}\n.button[_ngcontent-%COMP%] {\n  padding-left: 3%;\n  padding-right: 3%;\n}\n.buttons[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n#nightModeButton[_ngcontent-%COMP%] {\n  padding: 15px 15px 10px 15px;\n  border: none;\n  text-align: center;\n  background-color: #333333;\n  font-size: 1.2em;\n  text-decoration: none;\n  color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  left: 10%;\n  top: 10%;\n  z-index: 1;\n}\n#nightModeButton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.button-image[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  vertical-align: middle;\n}\n.select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 15%;\n  left: 75%;\n  top: 5%;\n}\n.select-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-family: inherit;\n  background-color: transparent;\n  width: 100%;\n  cursor: pointer;\n  padding: 10px 10px 10px 0;\n  font-size: 1.1em;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.select-text[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n.select[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 18px;\n  right: 10px;\n  \n  width: 0;\n  height: 0;\n  padding: 0;\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid rgba(0, 0, 0, 0.82);\n  pointer-events: none;\n}\n\n.select-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 10px;\n  transition: 0.2s ease all;\n}\n\n.select-text[_ngcontent-%COMP%]:focus    ~ .select-label[_ngcontent-%COMP%], .select-text[_ngcontent-%COMP%]:valid    ~ .select-label[_ngcontent-%COMP%] {\n  color: #fff;\n  top: -20px;\n  transition: 0.2s ease all;\n  font-size: 1.1em;\n}\n\n.select-bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.select-bar[_ngcontent-%COMP%]:before, .select-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #fff;\n  transition: 0.2s ease all;\n}\n.select-bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n.select-bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n\n.select-text[_ngcontent-%COMP%]:focus    ~ .select-bar[_ngcontent-%COMP%]:before, .select-text[_ngcontent-%COMP%]:focus    ~ .select-bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.select-highlight[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.about-me[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 70%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.about-photo[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 70%;\n  display: inline-block;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  height: 12em;\n  width: 12em;\n  border-radius: 100%;\n  margin: 19%;\n  margin-top: 7%;\n  border: 0.2em solid white;\n}\n.about-text[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 5%;\n  height: 70%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-hello[_ngcontent-%COMP%] {\n  margin-top: 7%;\n  font-size: 3em;\n  font-weight: bold;\n  height: 13%;\n}\n.about-description[_ngcontent-%COMP%] {\n  height: 30%;\n  color: #969696;\n  text-align: justify;\n}\n.about-data[_ngcontent-%COMP%] {\n  height: 20%;\n  color: #969696;\n}\n.about-data-left[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-data-right[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-buttons[_ngcontent-%COMP%] {\n  height: 30%;\n}\n.last[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n.first[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.time[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1em;\n}\n.skills[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 5%;\n}\n.skill-set[_ngcontent-%COMP%] {\n  margin-left: 7%;\n  margin-right: 5%;\n}\n.skill-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: #3248f4;\n}\n.skill-title-column[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.flag[_ngcontent-%COMP%] {\n  width: 7%;\n}\n.flag-title[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.skill-set[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding-top: 1.7%;\n  padding-left: 2%;\n}\n.main-skills[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  color: white;\n}\n.main-skill[_ngcontent-%COMP%] {\n  width: 25%;\n  display: inline-block;\n  transition-duration: 1s;\n}\n.main-skill[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n.main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.text-skill[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  font-size: large;\n  text-align: center;\n  padding-bottom: 7%;\n}\n.skill-picture[_ngcontent-%COMP%] {\n  height: 20%;\n  width: 25%;\n  padding-top: 20%;\n  padding-bottom: 13%;\n  cursor: pointer;\n}\n#reconocimientos[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.description-card[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-weight: bold;\n}\n.back-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n  font-style: italic;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n.reward[_ngcontent-%COMP%] {\n  width: 4em;\n}\n.card[_ngcontent-%COMP%] {\n  height: 12%;\n  width: 86%;\n  transform-style: preserve-3d;\n  position: relative;\n  transition: all 1s ease-in-out;\n  transition-duration: 1s;\n  cursor: pointer;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-left: 7%;\n  color: black;\n  margin-bottom: 3%;\n}\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #fdfcfc;\n  height: 100%;\n  width: 100%;\n  border-radius: 1em;\n  border: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-style: preserve-3d;\n  color: black;\n  perspective: 1000px;\n  box-shadow: 2px 4px 8px 1px rgba(0, 0, 0, 0.4);\n}\n.left-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n  font-size: large;\n}\n.right-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10%;\n}\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.front[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  transform: translateZ(120px);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: rotateY(180deg);\n}\n.experience[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 2%;\n}\n.post-experience[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-top: 5%;\n  display: inline-block;\n}\n.left-post[_ngcontent-%COMP%] {\n  margin-left: 13%;\n  margin-right: 7%;\n}\n.right-post[_ngcontent-%COMP%] {\n  margin-right: 20%;\n  vertical-align: top;\n}\n.post-picture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 5%;\n  margin-bottom: 5%;\n  cursor: pointer;\n}\n.text-post[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-align: justify;\n}\n#contacto[_ngcontent-%COMP%] {\n  height: auto;\n}\n.contact-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.contact-mini[_ngcontent-%COMP%] {\n  height: 33%;\n  width: 100%;\n  padding-top: 10%;\n}\n.contact-mini-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n.contact-mini-right[_ngcontent-%COMP%] {\n  width: 70%;\n  display: inline-block;\n  padding-top: 4%;\n  vertical-align: top;\n}\n.contact-right[_ngcontent-%COMP%] {\n  width: 60%;\n  display: inline-block;\n}\n.contact-icon[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.link-contact[_ngcontent-%COMP%] {\n  line-height: 0.5;\n}\nh2[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n#dark-form[_ngcontent-%COMP%] {\n  display: none;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #3248f4 !important;\n}\n .mat-form-field-underline {\n  \n  background-color: #3248f4 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #3248f4 !important;\n}\n.contact-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 5%;\n  margin-left: 2%;\n  margin-right: 1%;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sm-link[_ngcontent-%COMP%] {\n  --uismLinkDisplay: var(--smLinkDisplay, inline-flex);\n  --uismLinkTextColor: var(--smLinkTextColor);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover);\n  display: var(--uismLinkDisplay);\n  color: var(--uismLinkTextColor);\n  position: relative;\n  overflow: hidden;\n}\na.sm-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.sm-link__label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sm-link_padding-all[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after {\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before {\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  width: var(--uismLinkLineWeight);\n  height: 100%;\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  opacity: 0;\n  will-change: transform, opacity;\n  transition-property: transform, opacity;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]:hover::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover::after, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n\n.sm-link_padding-bottom[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  padding-bottom: var(--uismLinkLineWeight);\n  position: relative;\n}\n.sm-link_padding-bottom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.sm-link_bg[_ngcontent-%COMP%] {\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover, #fff);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n  transition: color 0.3s ease-out;\n}\n.sm-link_bg[_ngcontent-%COMP%]::before, .sm-link_bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  opacity: 0;\n  position: absolute;\n  transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.03s;\n}\n.sm-link_bg[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover::before, .sm-link_bg[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transition-duration: 0.35s, 0.35s;\n  transition-delay: 0s, 0s;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover {\n  color: var(--uismLinkTextColorHover);\n}\n\n.sm-link_text[_ngcontent-%COMP%]::before {\n  content: attr(data-sm-link-text);\n  color: var(--uismLinkTextColorHover);\n  position: absolute;\n}\n.sm-link_text[_ngcontent-%COMP%]::before, .sm-link_text[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.86, 0.6, 0.08, 1.01);\n  transition-duration: 0.3s;\n}\n.sm-link_text[_ngcontent-%COMP%]:hover::before, .sm-link_text[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n}\n\n.sm-link3[_ngcontent-%COMP%]::after {\n  transform: translate3d(-100%, 0, 0);\n  transition: transform 0.2s ease-in;\n}\n.sm-link3[_ngcontent-%COMP%]:hover::after {\n  transform: translate3d(0, 0, 0);\n}\n\n@media only screen and (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    margin-right: 3%;\n    width: 94%;\n    max-width: 95%;\n  }\n\n  .home[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: 100%;\n    border-radius: 22px;\n    color: white;\n    position: relative;\n  }\n\n  .container_name[_ngcontent-%COMP%] {\n    height: 80%;\n    position: relative;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 50%;\n    font-size: 4.5em;\n    line-height: 1em;\n    margin-left: 10%;\n    margin-right: 10%;\n    font-weight: bold;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 7%;\n    margin-left: 10%;\n    margin-right: 10%;\n    text-align: justify;\n    line-height: 1.5em;\n    font-size: 1.1em;\n  }\n\n  .about-me[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 100%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .about-photo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 20%;\n    position: relative;\n  }\n\n  .profile-picture[_ngcontent-%COMP%] {\n    height: 12em;\n    width: 12em;\n    border-radius: 100%;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    border: 0.2em solid white;\n  }\n\n  .about-text[_ngcontent-%COMP%] {\n    margin-top: 6%;\n    width: 86%;\n    margin-right: 7%;\n    margin-left: 7%;\n    height: 70%;\n    vertical-align: top;\n  }\n\n  .about-hello[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    font-weight: bold;\n    height: 8%;\n  }\n\n  .about-description[_ngcontent-%COMP%] {\n    height: 20%;\n    color: #969696;\n    text-align: justify;\n  }\n\n  .about-data[_ngcontent-%COMP%] {\n    height: 15%;\n    padding-top: 5%;\n    color: #969696;\n  }\n\n  .about-data-left[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n    margin-bottom: 4%;\n  }\n\n  .about-data-right[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n  }\n\n  .about-buttons[_ngcontent-%COMP%] {\n    padding-top: 22%;\n    height: 30%;\n    align-items: center;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    font-size: 1.15em;\n    padding: 3% 3%;\n    margin-bottom: 4%;\n  }\n\n  .main-skills[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: auto;\n    padding: 4%;\n    border-radius: 22px;\n    margin-top: 5%;\n    line-height: 1.2em;\n    color: white;\n  }\n\n  .main-skill[_ngcontent-%COMP%] {\n    width: 50%;\n    display: inline-block;\n  }\n\n  .main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .text-skill[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    padding-bottom: 7%;\n    font-size: 0.94em;\n  }\n\n  .skill-picture[_ngcontent-%COMP%] {\n    height: 7em;\n    width: auto;\n    padding-top: 10%;\n    padding-bottom: 13%;\n    cursor: pointer;\n  }\n\n  .skill-title-column[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 99%;\n    margin-top: 3%;\n    vertical-align: top;\n  }\n\n  .flag[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n\n  .flag-title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    min-width: 80%;\n  }\n\n  #contacto[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .contact-left[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-top: 2%;\n    vertical-align: top;\n  }\n\n  .contact-mini[_ngcontent-%COMP%] {\n    height: 33%;\n    width: 100%;\n    padding-top: 10%;\n  }\n\n  .contact-mini-left[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n\n  .contact-mini-right[_ngcontent-%COMP%] {\n    width: 75%;\n    display: inline-block;\n    padding-top: 5%;\n    vertical-align: top;\n  }\n\n  .contact-right[_ngcontent-%COMP%] {\n    width: 86%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-right: 7%;\n    margin-top: 3%;\n  }\n\n  .contact-icon[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .post-experience[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-top: 8%;\n    margin-bottom: 2%;\n    display: inline-block;\n  }\n\n  #reconocimientos[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 140%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .description-card[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    font-weight: bold;\n  }\n\n  .back-card[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n    font-style: italic;\n  }\n\n  @import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  .reward[_ngcontent-%COMP%] {\n    width: 4em;\n  }\n\n  .first_card[_ngcontent-%COMP%] {\n    margin-top: -15%;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    height: 16%;\n    width: 86%;\n    transform-style: preserve-3d;\n  }\n\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .left-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 80%;\n    font-size: large;\n  }\n\n  .right-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 20%;\n  }\n\n  .sm-link__label[_ngcontent-%COMP%] {\n    display: block;\n    font-size: medium;\n  }\n}\n\n@media only screen and (max-width: 1025px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtdGFiL0M6XFxVc2Vyc1xca2lrZWxcXERvY3VtZW50c1xcR2l0SHViXFxNeS1wZXJzb25hbC13ZWJwYWdlL3NyY1xcYXBwXFxyaWdodC10YWJcXHJpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmlnaHQtdGFiL3JpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwWVEsOERBQUE7QUF6WVI7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FER0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURJQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdFQUFBO0VBQ0EscURBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDREo7QURHQTtFQUNJLHdFQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNBSjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNISjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FDSEo7QURNQSxpQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHlDQUFBO0FDSEo7QURNQSxxQkFBQTtBQUNBO0VBQ0kscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHdCQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtBQ0hKO0FETUEsa0RBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNISjtBRE1BLGlCQUFBO0FBQ0E7O0VBRUksV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSEo7QURNQSxrREFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUE7O0VBRUksV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0hKO0FETUE7RUFDSSxTQUFBO0FDSEo7QURNQTtFQUNJLFVBQUE7QUNISjtBRE1BLGlCQUFBO0FBQ0E7O0VBRUksVUFBQTtBQ0hKO0FETUEsbURBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0hKO0FET0E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNKSjtBRE9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0pKO0FET0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSko7QURPQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDSko7QURPQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9BO0VBQ0ksV0FBQTtBQ0pKO0FET0E7RUFDSSxpQkFBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0FDSko7QURRQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNMSjtBRFNBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ05KO0FEU0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFFBO0VBQ0ksU0FBQTtBQ0xKO0FET0E7RUFDSSxjQUFBO0FDSko7QURPQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTEo7QURRQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUlBLHVCQUFBO0FDTEo7QURRQTtFQUNnQyxTQUFBO0VBQ0ksZUFBQTtFQUNoQyxzQkFBQTtBQ0hKO0FETUE7RUFFSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pKO0FET0E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0pKO0FEUUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0xKO0FEUUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFNBOzs7RUFHSSxTQUFBO0VBQ0Esc0JBQUE7QUNOSjtBRFNBO0VBQ0ksVUFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUlBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTko7QURTQTs7RUFFSSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDUEo7QURVQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDUEo7QURVQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQ1BKO0FEVUE7RUFDSSwwQkFBQTtBQ1BKO0FEVUE7O0VBRUksNEJBQUE7QUNQSjtBRFVBO0VBQ0ksMEJBQUE7QUNQSjtBRFdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUko7QURXQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDUko7QURXQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFlBO0VBQ0ksWUFBQTtBQ1RKO0FEWUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVEo7QURZQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDVEo7QURZQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1RKO0FEWUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNUSjtBRFlBO0VBQ0ksVUFBQTtBQ1RKO0FEWUE7RUFDSSxnQkFBQTtBQ1RKO0FEWUE7RUFDSSxjQUFBO0FDVEo7QURZQTtFQUNJLGFBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtBQ1RKO0FEWUE7RUFDSSw0QkFBQTtFQUNBLG9DQUFBO0FDVEo7QURZQTtFQUNJLHlDQUFBO0VBQ0Esb0NBQUE7QUNUSjtBRFlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVEo7QURZQTtFQUNJLFdBQUE7QUNUSjtBRGNBOztDQUFBO0FBSUE7RUFDSSxvREFBQTtFQUNBLDJDQUFBO0VBQ0EscURBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEZ0JBO0VBQ0kscUJBQUE7QUNiSjtBRGdCQTtFQUNJLGNBQUE7QUNiSjtBRGlCQSx3QkFBQTtBQUVBO0VBQ0ksa0RBQUE7RUFDQSxpREFBQTtFQUNBLDRDQUFBO0VBRUEsK0JBQUE7QUNoQko7QURtQkE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsT0FBQTtBQ2hCSjtBRG1CQTtFQUNJLE1BQUE7QUNoQko7QURtQkE7RUFDSSxTQUFBO0FDaEJKO0FEbUJBOztFQUVJLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUNoQko7QURtQkE7RUFDSSxPQUFBO0FDaEJKO0FEbUJBO0VBQ0ksUUFBQTtBQ2hCSjtBRG1CQTs7OztFQUlJLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLCtCQUFBO0VBQ0EsdUNBQUE7QUNqQko7QURvQkE7Ozs7RUFJSSxVQUFBO0FDakJKO0FEb0JBLDJCQUFBO0FBRUE7RUFDSSxrREFBQTtFQUNBLGlEQUFBO0VBRUEseUNBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHNCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNwQko7QUR1QkEsZUFBQTtBQUVBO0VBQ0ksaURBQUE7RUFDQSwyREFBQTtFQUNBLDRDQUFBO0VBRUEsK0JBQUE7RUFDQSwrQkFBQTtBQ3RCSjtBRHlCQTs7RUFFSSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxnRUFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ3ZCSjtBRDBCQTs7RUFFSSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ3ZCSjtBRDBCQTtFQUNJLG9DQUFBO0FDdkJKO0FEMEJBLGlCQUFBO0FBRUE7RUFDSSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUN4Qko7QUQyQkE7O0VBRUksOEJBQUE7RUFDQSwrREFBQTtFQUNBLHlCQUFBO0FDeEJKO0FEMkJBOztFQUVJLHlCQUFBO0FDeEJKO0FEMkJBLGFBQUE7QUFFQTtFQUNJLG1DQUFBO0VBQ0Esa0NBQUE7QUN6Qko7QUQ0QkE7RUFDSSwrQkFBQTtBQ3pCSjtBRDRCQTs7Ozt3Q0FBQTtBQU1BO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQzFCTjs7RUQ4QkU7SUFDSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQzNCTjs7RUQrQkU7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUM1Qk47O0VEK0JFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQzVCTjs7RUQrQkU7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDNUJOOztFRGdDRTtJQUNJLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQzdCTjs7RURnQ0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDN0JOOztFRGdDRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtFQzdCTjs7RURnQ0U7SUFDSSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQzdCTjs7RURnQ0U7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtFQzdCTjs7RURnQ0U7SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDN0JOOztFRGdDRTtJQUNJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQzdCTjs7RURnQ0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VDN0JOOztFRGdDRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0VDN0JOOztFRGdDRTtJQUNJLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDN0JOOztFRGdDRTtJQUNJLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDN0JOOztFRGlDRTtJQUNJLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUM5Qk47O0VEaUNFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0VDOUJOOztFRGlDRTtJQUVJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDL0JOOztFRGtDRTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQy9CTjs7RURrQ0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VDL0JOOztFRGtDRTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQy9CTjs7RURrQ0U7SUFDSSxVQUFBO0VDL0JOOztFRGtDRTtJQUNJLGFBQUE7SUFDQSxjQUFBO0VDL0JOOztFRG1DRTtJQUNJLFlBQUE7RUNoQ047O0VEbUNFO0lBQ0ksV0FBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQ2hDTjs7RURtQ0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDaENOOztFRG1DRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtFQ2hDTjs7RURtQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUNoQ047O0VEbUNFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ2hDTjs7RURtQ0U7SUFDSSxVQUFBO0VDaENOOztFRG1DRTtJQUNJLFVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtFQ2hDTjs7RURvQ0U7SUFDSSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUNqQ047O0VEb0NFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQ2pDTjs7RURvQ0U7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNqQ047O0VEb0NVLDhEQUFBO0VBQ1I7OztJQUdJLFNBQUE7SUFDQSxzQkFBQTtFQ2pDTjs7RURvQ0U7SUFDSSxVQUFBO0VDakNOOztFRG9DRTtJQUNJLGdCQUFBO0VDakNOOztFRG9DRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsNEJBQUE7RUNqQ047O0VEb0NFO0lBQ0ksa0JBQUE7RUNqQ047O0VEb0NFO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUNqQ047O0VEb0NFO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0VDakNOOztFRG9DRTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtFQ2pDTjtBQUNGO0FEb0NBOzs7O3dDQUFBO0FBTUE7RUFDSTtJQUNJLGtCQUFBO0VDbkNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yaWdodC10YWIvcmlnaHQtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaGUgZnVsbCBwYWdlIGlzIG9yZ2FuaXNlZCBpbiB0d28gY29tcG9uZW50cywgdGhlIHJpZ2h0IG9uZSBhbmQgdGhlIGxlZnQgb25lXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml0IHRoZSBob21lXHJcbi5ob21lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250YWluZXJfbmFtZSB7XHJcbiAgICBoZWlnaHQ6IDcyJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiA0LjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4vLy0tLS0tTmlnaHQgbW9kZSBidXR0b24tLS0tLS0tXHJcbiNuaWdodE1vZGVCdXR0b24ge1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbiNuaWdodE1vZGVCdXR0b246aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG59XHJcblxyXG4uYnV0dG9uLWltYWdlIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLy8tLS0tLVRyYW5zbGF0aW9uIHNlbGVjdFxyXG4vLy0tLS0tVGhhbmtzIHRvIGh0dHBzOi8vY29kZXBlbi5pby9wYXZlbHZhcmF2a28vcGVuL3Fqb2pPci0tLS0tXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLnNlbGVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgbGVmdDogNzUlO1xyXG4gICAgdG9wOiA1JTtcclxufVxyXG5cclxuLnNlbGVjdC10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7IC8vIFRvIHRoZSBmcm9udFxyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBmb2N1cyAqL1xyXG4uc2VsZWN0LXRleHQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG4vKiBVc2UgY3VzdG9tIGFycm93ICovXHJcbi5zZWxlY3QgLnNlbGVjdC10ZXh0IHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3Q6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAvKiBTdHlsaW5nIHRoZSBkb3duIGFycm93ICovXHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44Mik7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLyogTEFCRUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5zZWxlY3QtbGFiZWwge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG4uc2VsZWN0LXRleHQ6Zm9jdXMgfiAuc2VsZWN0LWxhYmVsLFxyXG4uc2VsZWN0LXRleHQ6dmFsaWQgfiAuc2VsZWN0LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnNlbGVjdC1iYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlbGVjdC1iYXI6YmVmb3JlLFxyXG4uc2VsZWN0LWJhcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5zZWxlY3QtYmFyOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5zZWxlY3QtYmFyOmFmdGVyIHtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG4uc2VsZWN0LXRleHQ6Zm9jdXMgfiAuc2VsZWN0LWJhcjpiZWZvcmUsXHJcbi5zZWxlY3QtdGV4dDpmb2N1cyB+IC5zZWxlY3QtYmFyOmFmdGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEhJR0hMSUdIVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnNlbGVjdC1oaWdobGlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgYWJvdXQgbWVcclxuLmFib3V0LW1lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5hYm91dC1waG90byB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxOSU7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5hYm91dC10ZXh0IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uYWJvdXQtaGVsbG8ge1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiAxMyU7XHJcbn1cclxuXHJcbi5hYm91dC1kZXNjcmlwdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uYWJvdXQtZGF0YSB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbn1cclxuXHJcbi5hYm91dC1kYXRhLWxlZnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5hYm91dC1kYXRhLXJpZ2h0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uYWJvdXQtYnV0dG9ucyB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuLmxhc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5maXJzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgdGltZWxpbmVcclxuLnRpbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgc2tpbGxzXHJcbi5za2lsbHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uc2tpbGwtc2V0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5za2lsbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxufVxyXG5cclxuLnNraWxsLXRpdGxlLWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5mbGFnIHtcclxuICAgIHdpZHRoOiA3JTtcclxufVxyXG4uZmxhZy10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnNraWxsLXNldCBoMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBtYWluLXNraWxsc1xyXG4ubWFpbi1za2lsbHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluLXNraWxsIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbi5tYWluLXNraWxsOmhvdmVyIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuXHJcbi5tYWluLXNraWxsIGltZyB7XHJcbiAgICAvL1RoaXMgaXMgdG8gYWxpZ24gYSBwaWN0dXJlIGluIHRoZSBtaWRkdGUgb2YgYSBkaXZcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50ZXh0LXNraWxsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3JTtcclxufVxyXG5cclxuLnNraWxsLXBpY3R1cmUge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGFja25vd2xlZGdlbWVudHNcclxuI3JlY29ub2NpbWllbnRvcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJhY2stY2FyZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhbmdlcnNcIik7XHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnJld2FyZCB7XHJcbiAgICB3aWR0aDogNGVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEyJTtcclxuICAgIHdpZHRoOiA4NiU7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5mcm9udCxcclxuLmJhY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUyLCAyNTIpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTAsIDcyLCAyNDQpIDAlLCByZ2IoNjUsIDg2LCAyNDcpIDEwMCUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggMXB4IHJnYmEoYmxhY2ssIDAuNCk7XHJcbn1cclxuXHJcbi5sZWZ0LWNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5yaWdodC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uZnJvbnQgPiBwLFxyXG4uYmFjayA+IHAge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEyMHB4KTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGV4cGVyaWVuY2VcclxuLmV4cGVyaWVuY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ucG9zdC1leHBlcmllbmNlIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxlZnQtcG9zdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxufVxyXG5cclxuLnJpZ2h0LXBvc3Qge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4ucG9zdC1waWN0dXJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LXBvc3Qge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgY29udGFjdFxyXG4jY29udGFjdG8ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFjdC1sZWZ0IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5jb250YWN0LW1pbmkge1xyXG4gICAgaGVpZ2h0OiAzMyU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jb250YWN0LW1pbmktbGVmdCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29udGFjdC1taW5pLXJpZ2h0IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uY29udGFjdC1yaWdodCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29udGFjdC1pY29uIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5saW5rLWNvbnRhY3Qge1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbiNkYXJrLWZvcm0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gICAgY29sb3I6IHJnYig1MCwgNzIsIDI0NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vR2VuZXJhbCBBbmltYXRpb25zXHJcblxyXG4vKlxyXG4qIGNvcmUgc3R5bGVzXHJcbiovXHJcblxyXG4uc20tbGluayB7XHJcbiAgICAtLXVpc21MaW5rRGlzcGxheTogdmFyKC0tc21MaW5rRGlzcGxheSwgaW5saW5lLWZsZXgpO1xyXG4gICAgLS11aXNtTGlua1RleHRDb2xvcjogdmFyKC0tc21MaW5rVGV4dENvbG9yKTtcclxuICAgIC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIpO1xyXG5cclxuICAgIGRpc3BsYXk6IHZhcigtLXVpc21MaW5rRGlzcGxheSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3IpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYS5zbS1saW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNtLWxpbmtfX2xhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy9mb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi8qIHNtLWxpbmtfcGFkZGluZy1hbGwgKi9cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsIHtcclxuICAgIC0tdWlzbUxpbmtMaW5lV2VpZ2h0OiB2YXIoLS1zbUxpbmtMaW5lV2VpZ2h0LCAycHgpO1xyXG4gICAgLS11aXNtTGlua0xpbmVDb2xvcjogdmFyKC0tc21MaW5rTGluZUNvbG9yLCAjMDAwKTtcclxuICAgIC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xyXG5cclxuICAgIHBhZGRpbmc6IHZhcigtLXVpc21MaW5rUGFkZGluZyk7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmUsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjphZnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmUge1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XHJcbiAgICB3aWR0aDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3Zlcjo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3Zlcjo6YWZ0ZXIsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3ZlciAuc20tbGlua19fbGFiZWw6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIHNtLWxpbmtfcGFkZGluZy1ib3R0b20gKi9cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYm90dG9tIHtcclxuICAgIC0tdWlzbUxpbmtMaW5lV2VpZ2h0OiB2YXIoLS1zbUxpbmtMaW5lV2VpZ2h0LCAycHgpO1xyXG4gICAgLS11aXNtTGlua0xpbmVDb2xvcjogdmFyKC0tc21MaW5rTGluZUNvbG9yLCAjMDAwKTtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1ib3R0b206OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpc21MaW5rTGluZUNvbG9yKTtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4vKiBzbS1saW5rX2JnICovXHJcblxyXG4uc20tbGlua19iZyB7XHJcbiAgICAtLXVpc21MaW5rTGluZUNvbG9yOiB2YXIoLS1zbUxpbmtMaW5lQ29sb3IsICMwMDApO1xyXG4gICAgLS11aXNtTGlua1RleHRDb2xvckhvdmVyOiB2YXIoLS1zbUxpbmtUZXh0Q29sb3JIb3ZlciwgI2ZmZik7XHJcbiAgICAtLXVpc21MaW5rUGFkZGluZzogdmFyKC0tc21MaW5rUGFkZGluZywgNXB4KTtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLnNtLWxpbmtfYmc6OmJlZm9yZSxcclxuLnNtLWxpbmtfYmc6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aXNtTGlua0xpbmVDb2xvcik7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1vdXQgMC4wM3M7XHJcbn1cclxuXHJcbi5zbS1saW5rX2JnIC5zbS1saW5rX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc20tbGlua19iZzpob3Zlcjo6YmVmb3JlLFxyXG4uc20tbGlua19iZzpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzLCAwLjM1cztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcztcclxufVxyXG5cclxuLnNtLWxpbmtfYmc6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXVpc21MaW5rVGV4dENvbG9ySG92ZXIpO1xyXG59XHJcblxyXG4vKiBzbS1saW5rX3RleHQgKi9cclxuXHJcbi5zbS1saW5rX3RleHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtc20tbGluay10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnNtLWxpbmtfdGV4dDo6YmVmb3JlLFxyXG4uc20tbGlua190ZXh0IC5zbS1saW5rX19sYWJlbCB7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODYsIDAuNiwgMC4wOCwgMS4wMSk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc20tbGlua190ZXh0OmhvdmVyOjpiZWZvcmUsXHJcbi5zbS1saW5rX3RleHQ6aG92ZXIgLnNtLWxpbmtfX2xhYmVsIHtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi8qIGVmZmVjdCAzICovXHJcblxyXG4uc20tbGluazM6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxufVxyXG5cclxuLnNtLWxpbmszOmhvdmVyOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIE1PQklMRSBWSUVXXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml0IHRoZSBob21lXHJcbiAgICAuaG9tZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXQgdGhlIGhvbWVcclxuICAgIC5jb250YWluZXJfbmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjVlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA3JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICB9XHJcblxyXG4gICAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgYWJvdXQgbWVcclxuICAgIC5hYm91dC1tZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LXBob3RvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICB3aWR0aDogODYlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWhlbGxvIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGhlaWdodDogOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWRhdGEge1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1kYXRhLWxlZnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1kYXRhLXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtYnV0dG9ucyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIyJTtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDMlIDMlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIG1haW4tc2tpbGxzXHJcbiAgICAubWFpbi1za2lsbHMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1za2lsbCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tc2tpbGwgaW1nIHtcclxuICAgICAgICAvL1RoaXMgaXMgdG8gYWxpZ24gYSBwaWN0dXJlIGluIHRoZSBtaWRkdGUgb2YgYSBkaXZcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtc2tpbGwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDclO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC1waWN0dXJlIHtcclxuICAgICAgICBoZWlnaHQ6IDdlbTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMyU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC10aXRsZS1jb2x1bW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsYWcge1xyXG4gICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsYWctdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgY29udGFjdFxyXG4gICAgI2NvbnRhY3RvIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtbGVmdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LW1pbmkge1xyXG4gICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtbWluaS1sZWZ0IHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1taW5pLXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDg2JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAucG9zdC1leHBlcmllbmNlIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAvL01vYmlsZSB2aWV3IGZvciB0aGUgYXdhcmRzIGNhcmRcclxuICAgICNyZWNvbm9jaW1pZW50b3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDogMTQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFjay1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuXHJcbiAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYW5nZXJzXCIpO1xyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAucmV3YXJkIHtcclxuICAgICAgICB3aWR0aDogNGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdF9jYXJkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDE2JTtcclxuICAgICAgICB3aWR0aDogODYlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2sge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdC1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc20tbGlua19fbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIFRBQkxFVCBWSUVXXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpIHtcclxuICAgIC5iYWNrIHtcclxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFuZ2Vyc1wiKTtcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi5ob21lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNDtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyX25hbWUge1xuICBoZWlnaHQ6IDcyJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogNC41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDMlO1xuICBwYWRkaW5nLXJpZ2h0OiAzJTtcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuI25pZ2h0TW9kZUJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgb3V0bGluZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAxMCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNuaWdodE1vZGVCdXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5idXR0b24taW1hZ2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNSU7XG4gIGxlZnQ6IDc1JTtcbiAgdG9wOiA1JTtcbn1cblxuLnNlbGVjdC10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi8qIFJlbW92ZSBmb2N1cyAqL1xuLnNlbGVjdC10ZXh0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi8qIFVzZSBjdXN0b20gYXJyb3cgKi9cbi5zZWxlY3QgLnNlbGVjdC10ZXh0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uc2VsZWN0OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICAvKiBTdHlsaW5nIHRoZSBkb3duIGFycm93ICovXG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA2cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgyKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIExBQkVMID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnNlbGVjdC1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG59XG5cbi8qIGFjdGl2ZSBzdGF0ZSAqL1xuLnNlbGVjdC10ZXh0OmZvY3VzIH4gLnNlbGVjdC1sYWJlbCxcbi5zZWxlY3QtdGV4dDp2YWxpZCB+IC5zZWxlY3QtbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgdG9wOiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuLyogQk9UVE9NIEJBUlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uc2VsZWN0LWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VsZWN0LWJhcjpiZWZvcmUsXG4uc2VsZWN0LWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMDtcbiAgYm90dG9tOiAxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbn1cblxuLnNlbGVjdC1iYXI6YmVmb3JlIHtcbiAgbGVmdDogNTAlO1xufVxuXG4uc2VsZWN0LWJhcjphZnRlciB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi8qIGFjdGl2ZSBzdGF0ZSAqL1xuLnNlbGVjdC10ZXh0OmZvY3VzIH4gLnNlbGVjdC1iYXI6YmVmb3JlLFxuLnNlbGVjdC10ZXh0OmZvY3VzIH4gLnNlbGVjdC1iYXI6YWZ0ZXIge1xuICB3aWR0aDogNTAlO1xufVxuXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uc2VsZWN0LWhpZ2hsaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5hYm91dC1tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5hYm91dC1waG90byB7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDEyZW07XG4gIHdpZHRoOiAxMmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDE5JTtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XG59XG5cbi5hYm91dC10ZXh0IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWhlbGxvIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxMyU7XG59XG5cbi5hYm91dC1kZXNjcmlwdGlvbiB7XG4gIGhlaWdodDogMzAlO1xuICBjb2xvcjogIzk2OTY5NjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmFib3V0LWRhdGEge1xuICBoZWlnaHQ6IDIwJTtcbiAgY29sb3I6ICM5Njk2OTY7XG59XG5cbi5hYm91dC1kYXRhLWxlZnQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWRhdGEtcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWJ1dHRvbnMge1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmxhc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLmZpcnN0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi50aW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uc2tpbGwtc2V0IHtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4uc2tpbGwtdGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMjQ4ZjQ7XG59XG5cbi5za2lsbC10aXRsZS1jb2x1bW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0OSU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZmxhZyB7XG4gIHdpZHRoOiA3JTtcbn1cblxuLmZsYWctdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnNraWxsLXNldCBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy10b3A6IDEuNyU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5tYWluLXNraWxscyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1za2lsbCB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4ubWFpbi1za2lsbDpob3ZlciB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLyogU2FmYXJpIDMtOCAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4ubWFpbi1za2lsbCBpbWcge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRleHQtc2tpbGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA3JTtcbn1cblxuLnNraWxsLXBpY3R1cmUge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy10b3A6IDIwJTtcbiAgcGFkZGluZy1ib3R0b206IDEzJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcmVjb25vY2ltaWVudG9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5kZXNjcmlwdGlvbi1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFjay1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucmV3YXJkIHtcbiAgd2lkdGg6IDRlbTtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDEyJTtcbiAgd2lkdGg6IDg2JTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLmZyb250LFxuLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmNmYztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBib3JkZXI6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBib3gtc2hhZG93OiAycHggNHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubGVmdC1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucmlnaHQtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwJTtcbn1cblxuLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZyb250ID4gcCxcbi5iYWNrID4gcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMjBweCk7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5leHBlcmllbmNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG4ucG9zdC1leHBlcmllbmNlIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxlZnQtcG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMyU7XG4gIG1hcmdpbi1yaWdodDogNyU7XG59XG5cbi5yaWdodC1wb3N0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5wb3N0LXBpY3R1cmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0LXBvc3Qge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuI2NvbnRhY3RvIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29udGFjdC1sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY29udGFjdC1taW5pIHtcbiAgaGVpZ2h0OiAzMyU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uY29udGFjdC1taW5pLWxlZnQge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb250YWN0LW1pbmktcmlnaHQge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA0JTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNvbnRhY3QtcmlnaHQge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb250YWN0LWljb24ge1xuICB3aWR0aDogNjAlO1xufVxuXG4ubGluay1jb250YWN0IHtcbiAgbGluZS1oZWlnaHQ6IDAuNTtcbn1cblxuaDIge1xuICBsaW5lLWhlaWdodDogMDtcbn1cblxuI2RhcmstZm9ybSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogIzMyNDhmNCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhY3QtZm9ybSB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qXG4qIGNvcmUgc3R5bGVzXG4qL1xuLnNtLWxpbmsge1xuICAtLXVpc21MaW5rRGlzcGxheTogdmFyKC0tc21MaW5rRGlzcGxheSwgaW5saW5lLWZsZXgpO1xuICAtLXVpc21MaW5rVGV4dENvbG9yOiB2YXIoLS1zbUxpbmtUZXh0Q29sb3IpO1xuICAtLXVpc21MaW5rVGV4dENvbG9ySG92ZXI6IHZhcigtLXNtTGlua1RleHRDb2xvckhvdmVyKTtcbiAgZGlzcGxheTogdmFyKC0tdWlzbUxpbmtEaXNwbGF5KTtcbiAgY29sb3I6IHZhcigtLXVpc21MaW5rVGV4dENvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5hLnNtLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zbS1saW5rX19sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBzbS1saW5rX3BhZGRpbmctYWxsICovXG4uc20tbGlua19wYWRkaW5nLWFsbCB7XG4gIC0tdWlzbUxpbmtMaW5lV2VpZ2h0OiB2YXIoLS1zbUxpbmtMaW5lV2VpZ2h0LCAycHgpO1xuICAtLXVpc21MaW5rTGluZUNvbG9yOiB2YXIoLS1zbUxpbmtMaW5lQ29sb3IsICMwMDApO1xuICAtLXVpc21MaW5rUGFkZGluZzogdmFyKC0tc21MaW5rUGFkZGluZywgNXB4KTtcbiAgcGFkZGluZzogdmFyKC0tdWlzbUxpbmtQYWRkaW5nKTtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XG4gIGxlZnQ6IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmUge1xuICB0b3A6IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUsXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmFmdGVyIHtcbiAgd2lkdGg6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXIge1xuICByaWdodDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsOjphZnRlcixcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpc21MaW5rTGluZUNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyOjpiZWZvcmUsXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3Zlcjo6YWZ0ZXIsXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3ZlciAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBzbS1saW5rX3BhZGRpbmctYm90dG9tICovXG4uc20tbGlua19wYWRkaW5nLWJvdHRvbSB7XG4gIC0tdWlzbUxpbmtMaW5lV2VpZ2h0OiB2YXIoLS1zbUxpbmtMaW5lV2VpZ2h0LCAycHgpO1xuICAtLXVpc21MaW5rTGluZUNvbG9yOiB2YXIoLS1zbUxpbmtMaW5lQ29sb3IsICMwMDApO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWJvdHRvbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiB2YXIoLS11aXNtTGlua0xpbmVXZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aXNtTGlua0xpbmVDb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4vKiBzbS1saW5rX2JnICovXG4uc20tbGlua19iZyB7XG4gIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XG4gIC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIsICNmZmYpO1xuICAtLXVpc21MaW5rUGFkZGluZzogdmFyKC0tc21MaW5rUGFkZGluZywgNXB4KTtcbiAgcGFkZGluZzogdmFyKC0tdWlzbUxpbmtQYWRkaW5nKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLW91dDtcbn1cblxuLnNtLWxpbmtfYmc6OmJlZm9yZSxcbi5zbS1saW5rX2JnOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpc21MaW5rTGluZUNvbG9yKTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAwLjJzIGVhc2Utb3V0IDAuMDNzO1xufVxuXG4uc20tbGlua19iZyAuc20tbGlua19fbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zbS1saW5rX2JnOmhvdmVyOjpiZWZvcmUsXG4uc20tbGlua19iZzpob3Zlcjo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cywgMC4zNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcztcbn1cblxuLnNtLWxpbmtfYmc6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3JIb3Zlcik7XG59XG5cbi8qIHNtLWxpbmtfdGV4dCAqL1xuLnNtLWxpbmtfdGV4dDo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXNtLWxpbmstdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc20tbGlua190ZXh0OjpiZWZvcmUsXG4uc20tbGlua190ZXh0IC5zbS1saW5rX19sYWJlbCB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg2LCAwLjYsIDAuMDgsIDEuMDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuXG4uc20tbGlua190ZXh0OmhvdmVyOjpiZWZvcmUsXG4uc20tbGlua190ZXh0OmhvdmVyIC5zbS1saW5rX19sYWJlbCB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi8qIGVmZmVjdCAzICovXG4uc20tbGluazM6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG59XG5cbi5zbS1saW5rMzpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgTU9CSUxFIFZJRVdcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgfVxuXG4gIC5ob21lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0OGY0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY29udGFpbmVyX25hbWUge1xuICAgIGhlaWdodDogODAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgZm9udC1zaXplOiA0LjVlbTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDclO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuXG4gIC5hYm91dC1tZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cblxuICAuYWJvdXQtcGhvdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcm9maWxlLXBpY3R1cmUge1xuICAgIGhlaWdodDogMTJlbTtcbiAgICB3aWR0aDogMTJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAwLjJlbSBzb2xpZCB3aGl0ZTtcbiAgfVxuXG4gIC5hYm91dC10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiA2JTtcbiAgICB3aWR0aDogODYlO1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIGhlaWdodDogNzAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuYWJvdXQtaGVsbG8ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiA4JTtcbiAgfVxuXG4gIC5hYm91dC1kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgY29sb3I6ICM5Njk2OTY7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gIC5hYm91dC1kYXRhIHtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgY29sb3I6ICM5Njk2OTY7XG4gIH1cblxuICAuYWJvdXQtZGF0YS1sZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgfVxuXG4gIC5hYm91dC1kYXRhLXJpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgfVxuXG4gIC5hYm91dC1idXR0b25zIHtcbiAgICBwYWRkaW5nLXRvcDogMjIlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICBwYWRkaW5nOiAzJSAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgfVxuXG4gIC5tYWluLXNraWxscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm1haW4tc2tpbGwge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLm1haW4tc2tpbGwgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudGV4dC1za2lsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNyU7XG4gICAgZm9udC1zaXplOiAwLjk0ZW07XG4gIH1cblxuICAuc2tpbGwtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiA3ZW07XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5za2lsbC10aXRsZS1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogOTklO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuZmxhZyB7XG4gICAgd2lkdGg6IDQ3JTtcbiAgfVxuXG4gIC5mbGFnLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1pbi13aWR0aDogODAlO1xuICB9XG5cbiAgI2NvbnRhY3RvIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY29udGFjdC1sZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuY29udGFjdC1taW5pIHtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICB9XG5cbiAgLmNvbnRhY3QtbWluaS1sZWZ0IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5jb250YWN0LW1pbmktcmlnaHQge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgLmNvbnRhY3QtcmlnaHQge1xuICAgIHdpZHRoOiA4NiU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICB9XG5cbiAgLmNvbnRhY3QtaWNvbiB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5wb3N0LWV4cGVyaWVuY2Uge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLXRvcDogOCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgI3JlY29ub2NpbWllbnRvcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cblxuICAuZGVzY3JpcHRpb24tY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuYmFjay1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhbmdlcnNcIik7XG4gICosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAucmV3YXJkIHtcbiAgICB3aWR0aDogNGVtO1xuICB9XG5cbiAgLmZpcnN0X2NhcmQge1xuICAgIG1hcmdpbi10b3A6IC0xNSU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiAxNiU7XG4gICAgd2lkdGg6IDg2JTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG5cbiAgLmJhY2sge1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgfVxuXG4gIC5sZWZ0LWNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogODAlO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cblxuICAucmlnaHQtY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAuc20tbGlua19fbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgVEFCTEVUIFZJRVdcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNXB4KSB7XG4gIC5iYWNrIHtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-right-tab",
          templateUrl: "./right-tab.component.html",
          providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__["LeftTabComponent"]],
          styleUrls: ["./right-tab.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__["LeftTabComponent"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      }, null);
    })();

    var DialogContentExampleDialog = function DialogContentExampleDialog() {
      _classCallCheck(this, DialogContentExampleDialog);
    };

    DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) {
      return new (t || DialogContentExampleDialog)();
    };

    DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogContentExampleDialog,
      selectors: [["dialog-content-example-dialog"]],
      decls: 9,
      vars: 0,
      consts: [[1, "popup-content"], [1, "popup-left"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "popup-picture"], [1, "popup-right"], [1, "popup-text-post"], [1, "popup-text-description"]],
      template: function DialogContentExampleDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Voluntario evento tecnol\xF3gico T3chfest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Voluntario en el T3chfest, la feria de inform\xE1tica y nuevas tecnolog\xEDas en la Universidad Carlos III de Madrid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".popup-content[_ngcontent-%COMP%]{\n    height: auto;\n    width: 500px;\n}\n\n.popup-left[_ngcontent-%COMP%]{\n    width: 50%;\n    display: inline-block;\n}\n\n.popup-right[_ngcontent-%COMP%]{\n    width: 50%;\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 1%;\n}\n\n.popup-picture[_ngcontent-%COMP%]{\n    width: 70%;\n    border-radius: 5%;\n}\n.popup-text-post[_ngcontent-%COMP%]{\n    font-size: 2em;\n    font-weight: bold;\n    text-align: justify;\n}\n\n.popup-text-description[_ngcontent-%COMP%]{\n    margin-top: 6%;\n    text-align: justify;\n}\n\n\n\n@media only screen and (max-width: 600px){\n    .popup-content[_ngcontent-%COMP%]{\n        height: auto;\n        width: 250px;\n    }\n\n    .popup-left[_ngcontent-%COMP%]{\n        width: 100%;\n        display: inline-block;\n    }\n\n    .popup-right[_ngcontent-%COMP%]{\n        width: 100%;\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 1%;\n    }\n \n    .popup-picture[_ngcontent-%COMP%]{\n        width: 100%;\n        border-radius: 5%;\n    }\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "dialog-content-example-dialog",
          templateUrl: "dialog-content-example-dialog.html"
        }]
      }], null, null);
    })();

    var DialogContentExampleDialog2 = function DialogContentExampleDialog2() {
      _classCallCheck(this, DialogContentExampleDialog2);
    };

    DialogContentExampleDialog2.ɵfac = function DialogContentExampleDialog2_Factory(t) {
      return new (t || DialogContentExampleDialog2)();
    };

    DialogContentExampleDialog2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogContentExampleDialog2,
      selectors: [["dialog-content-example-dialog-2"]],
      decls: 9,
      vars: 0,
      consts: [[1, "popup-content"], [1, "popup-left"], ["src", "../../assets/images/uc3m.png", 1, "popup-picture"], [1, "popup-right"], [1, "popup-text-post"], [1, "popup-text-description"]],
      template: function DialogContentExampleDialog2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profesor particular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ense\xF1anza de mater\xEDas STEM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".popup-content[_ngcontent-%COMP%]{\n        height: auto;\n        width: 500px;\n    }\n    \n    .popup-left[_ngcontent-%COMP%]{\n        width: 50%;\n        display: inline-block;\n    }\n    \n    .popup-right[_ngcontent-%COMP%]{\n        width: 50%;\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 1%;\n    }\n    \n    .popup-picture[_ngcontent-%COMP%]{\n        width: 70%;\n        border-radius: 5%;\n    }\n    .popup-text-post[_ngcontent-%COMP%]{\n        font-size: 2em;\n        font-weight: bold;\n        text-align: justify;\n    }\n    \n    .popup-text-description[_ngcontent-%COMP%]{\n        margin-top: 6%;\n        text-align: justify;\n    }\n\n    \n\n    @media only screen and (max-width: 600px){\n        .popup-content[_ngcontent-%COMP%]{\n            height: auto;\n            width: 250px;\n        } \n        .popup-picture[_ngcontent-%COMP%]{\n            width: 100%;\n            border-radius: 5%;\n        }\n\n        .popup-left[_ngcontent-%COMP%]{\n            width: 100%;\n            display: inline-block;\n        }\n\n        .popup-right[_ngcontent-%COMP%]{\n            width: 100%;\n            display: inline-block;\n            vertical-align: top;\n            margin-top: 1%;\n        }\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "dialog-content-example-dialog-2",
          templateUrl: "dialog-content-example-dialog-2.html"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/speed-dial-fab/speed-dial-fab.animations.ts":
  /*!*************************************************************!*\
    !*** ./src/app/speed-dial-fab/speed-dial-fab.animations.ts ***!
    \*************************************************************/

  /*! exports provided: speedDialFabAnimations */

  /***/
  function srcAppSpeedDialFabSpeedDialFabAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "speedDialFabAnimations", function () {
      return speedDialFabAnimations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var speedDialFabAnimations = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fabToggler', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate(0deg)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate(225deg)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('speedDialStagger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('40ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(10px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(0)'
    })]))]), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })])), {
      optional: true
    })])])];
    /***/
  },

  /***/
  "./src/app/speed-dial-fab/speed-dial-fab.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/speed-dial-fab/speed-dial-fab.component.ts ***!
    \************************************************************/

  /*! exports provided: SpeedDialFabComponent */

  /***/
  function srcAppSpeedDialFabSpeedDialFabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeedDialFabComponent", function () {
      return SpeedDialFabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./speed-dial-fab.animations */
    "./src/app/speed-dial-fab/speed-dial-fab.animations.ts");
    /* harmony import */


    var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../left-tab/left-tab.component */
    "./src/app/left-tab/left-tab.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SpeedDialFabComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [""];
    };

    function SpeedDialFabComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var btn_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fragment", btn_r14.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r14.icon);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        value: a0
      };
    };

    var SpeedDialFabComponent =
    /*#__PURE__*/
    function () {
      function SpeedDialFabComponent(leftTab) {
        _classCallCheck(this, SpeedDialFabComponent);

        this.leftTab = leftTab;
        this.buttons = [];
        this.fabTogglerState = "inactive";
      }

      _createClass(SpeedDialFabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var maxButtons = 7;

          if (this.options.buttons.length > maxButtons) {
            this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
          }
        }
      }, {
        key: "showItems",
        value: function showItems() {
          this.fabTogglerState = "active";
          this.buttons = this.options.buttons;
        }
      }, {
        key: "hideItems",
        value: function hideItems() {
          this.fabTogglerState = "inactive";
          this.buttons = [];
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.buttons.length ? this.hideItems() : this.showItems();
        }
      }]);

      return SpeedDialFabComponent;
    }();

    SpeedDialFabComponent.ɵfac = function SpeedDialFabComponent_Factory(t) {
      return new (t || SpeedDialFabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]));
    };

    SpeedDialFabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpeedDialFabComponent,
      selectors: [["app-speed-dial-fab"]],
      inputs: {
        options: "options"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]])],
      decls: 7,
      vars: 6,
      consts: [["id", "fab-dismiss", 3, "click", 4, "ngIf"], [1, "fab-container"], ["mat-fab", "", "color", "warn", 1, "fab-toggler", 3, "click"], [1, "material-icons"], ["mat-mini-fab", "", "class", "fab-secondary", "color", "secondary", 4, "ngFor", "ngForOf"], ["id", "fab-dismiss", 3, "click"], ["mat-mini-fab", "", "color", "secondary", 1, "fab-secondary"], [3, "routerLink", "fragment"]],
      template: function SpeedDialFabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpeedDialFabComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_Template_button_click_2_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpeedDialFabComponent_button_6_Template, 4, 4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fabTogglerState === "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fabToggler", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.fabTogglerState));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@speedDialStagger", ctx.buttons.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".fab-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n}\n.fab-toggler[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n#fab-dismiss[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlZWQtZGlhbC1mYWIvQzpcXFVzZXJzXFxraWtlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXE15LXBlcnNvbmFsLXdlYnBhZ2Uvc3JjXFxhcHBcXHNwZWVkLWRpYWwtZmFiXFxzcGVlZC1kaWFsLWZhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3BlZWQtZGlhbC1mYWIvc3BlZWQtZGlhbC1mYWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQ007RUFDRSxtQkFBQTtBQ0NSO0FESUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc3BlZWQtZGlhbC1mYWIvc3BlZWQtZGlhbC1mYWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWItdG9nZ2xlciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG4gIFxyXG4gICNmYWItZGlzbWlzcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gICAgIiwiLmZhYi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZhYi1jb250YWluZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5mYWItY29udGFpbmVyID4gZGl2IGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbi5mYWItdG9nZ2xlciB7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4jZmFiLWRpc21pc3Mge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"],
      data: {
        animation: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeedDialFabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-speed-dial-fab",
          templateUrl: "./speed-dial-fab.component.html",
          styleUrls: ["./speed-dial-fab.component.scss"],
          providers: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]],
          animations: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"]
        }]
      }], function () {
        return [{
          type: _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]
        }];
      }, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tab-header/tab-header.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tab-header/tab-header.component.ts ***!
    \****************************************************/

  /*! exports provided: TabHeaderComponent */

  /***/
  function srcAppTabHeaderTabHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function () {
      return TabHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TabHeaderComponent =
    /*#__PURE__*/
    function () {
      function TabHeaderComponent() {
        _classCallCheck(this, TabHeaderComponent);

        this.header = document.getElementsByClassName("header");
      }

      _createClass(TabHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toDark",
        value: function toDark() {
          for (var i = 0, len = this.header.length; i < len; i++) {
            this.header[i].style.color = "#FFFFFF";
          }
        }
      }, {
        key: "toLight",
        value: function toLight() {
          for (var i = 0, len = this.header.length; i < len; i++) {
            this.header[i].style.color = "black";
          }
        }
      }]);

      return TabHeaderComponent;
    }();

    TabHeaderComponent.ɵfac = function TabHeaderComponent_Factory(t) {
      return new (t || TabHeaderComponent)();
    };

    TabHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabHeaderComponent,
      selectors: [["app-tab-header"]],
      inputs: {
        parentData: "parentData"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "header"], [1, "underline--magical"]],
      template: function TabHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parentData);
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\n  height: 10%;\n  font-weight: bold;\n  font-size: xx-large;\n  color: black;\n  padding-top: 7%;\n  padding-left: 7%;\n}\n\n.underline--magical[_ngcontent-%COMP%] {\n  background-image: linear-gradient(120deg, #3248F4 0%, #8fd3f4 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 0.2em;\n  background-position: 0 88%;\n  transition: background-size 0.25s ease-in;\n}\n\n.underline--magical[_ngcontent-%COMP%]:hover {\n  background-size: 100% 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiLWhlYWRlci9DOlxcVXNlcnNcXGtpa2VsXFxEb2N1bWVudHNcXEdpdEh1YlxcTXktcGVyc29uYWwtd2VicGFnZS9zcmNcXGFwcFxcdGFiLWhlYWRlclxcdGFiLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiLWhlYWRlci90YWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxtRUFBQTtFQUVBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlDQUFBO0FDREo7O0FERUk7RUFDRSx5QkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvdGFiLWhlYWRlci90YWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3JTtcclxufVxyXG5cclxuLy9BbmltYXRpb25zIGZvciB0aGUgdW5kZXJsaW5lZCBlbGVtZW50c1xyXG4udW5kZXJsaW5lLS1tYWdpY2FsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzMjQ4RjQgMCUsICM4ZmQzZjQgMTAwJSk7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzMjQ4RjQgMCUsICNGRjAxMUQgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDAuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA4OCU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4yNXMgZWFzZS1pbjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgODglO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsIi5oZWFkZXIge1xuICBoZWlnaHQ6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy10b3A6IDclO1xuICBwYWRkaW5nLWxlZnQ6IDclO1xufVxuXG4udW5kZXJsaW5lLS1tYWdpY2FsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzMyNDhGNCAwJSwgIzhmZDNmNCAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDAuMmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDg4JTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuMjVzIGVhc2UtaW47XG59XG4udW5kZXJsaW5lLS1tYWdpY2FsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDg4JTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tab-header',
          templateUrl: './tab-header.component.html',
          styleUrls: ['./tab-header.component.scss']
        }]
      }], function () {
        return [];
      }, {
        parentData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/timeline/timeline.component.ts":
  /*!************************************************!*\
    !*** ./src/app/timeline/timeline.component.ts ***!
    \************************************************/

  /*! exports provided: TimelineComponent */

  /***/
  function srcAppTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
      return TimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TimelineComponent =
    /*#__PURE__*/
    function () {
      function TimelineComponent() {
        _classCallCheck(this, TimelineComponent);
      }

      _createClass(TimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimelineComponent;
    }();

    TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
      return new (t || TimelineComponent)();
    };

    TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineComponent,
      selectors: [["app-timeline"]],
      decls: 29,
      vars: 0,
      consts: [[1, "timeline"], [1, "timeline-event"], [1, "timeline-event-icon"], [1, "timeline-event-copy"], [1, "timeline-event-thumbnail"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2017 - 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Universidad Carlos III de Madrid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Madrid-Espa\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Grado en Ingenier\xEDa Inform\xE1tica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Menci\xF3n en computaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2019 - 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Politechnika Warszawska");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Varsovia-Polonia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Bachelor in Computer Science");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Erasmus+ Grado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);\n\n\nbody[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: 0.05em;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  margin: 4em auto;\n  position: relative;\n  max-width: 46em;\n}\n.timeline[_ngcontent-%COMP%]:before {\n  background-color: black;\n  content: \"\";\n  margin-left: -1px;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 2px;\n  height: 100%;\n}\n.timeline-event[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-icon[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  background-color: #3248f4;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-thumbnail[_ngcontent-%COMP%] {\n  box-shadow: inset 40em 0 0 0 #3248f4;\n}\n.timeline-event-copy[_ngcontent-%COMP%] {\n  padding: 2em;\n  position: relative;\n  top: -1.875em;\n  left: 4em;\n  width: 80%;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1.2em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.timeline-event-thumbnail) {\n  padding-bottom: 1.2em;\n}\n.timeline-event-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in;\n  transform: rotate(45deg);\n  background-color: black;\n  outline: 10px solid white;\n  display: block;\n  margin: 0.5em 0.5em 0.5em -0.5em;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 1em;\n  height: 1em;\n}\n.timeline-event-thumbnail[_ngcontent-%COMP%] {\n  -webkit-transition: box-shadow 0.5s ease-in;\n  -webkit-transition-delay: 0.1s;\n  transition: box-shadow 0.5s ease-in 0.1s;\n  color: white;\n  font-size: 0.75em;\n  background-color: black;\n  box-shadow: inset 0 0 0 0em #3248f4;\n  display: inline-block;\n  margin-bottom: 1.2em;\n  padding: 0.25em 1em 0.2em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvQzpcXFVzZXJzXFxraWtlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXE15LXBlcnNvbmFsLXdlYnBhZ2Uvc3JjXFxhcHBcXHRpbWVsaW5lXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL0M6XFxVc2Vyc1xca2lrZWxcXERvY3VtZW50c1xcR2l0SHViXFxNeS1wZXJzb25hbC13ZWJwYWdlL25vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3NoYXJlZC5zY3NzIiwic3JjL2FwcC90aW1lbGluZS9DOlxcVXNlcnNcXGtpa2VsXFxEb2N1bWVudHNcXEdpdEh1YlxcTXktcGVyc29uYWwtd2VicGFnZS9ub2RlX21vZHVsZXNcXGNvbXBhc3MtbWl4aW5zXFxsaWJcXGNvbXBhc3NcXGNzczNcXF9ib3gtc2l6aW5nLnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL0M6XFxVc2Vyc1xca2lrZWxcXERvY3VtZW50c1xcR2l0SHViXFxNeS1wZXJzb25hbC13ZWJwYWdlL25vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3RyYW5zZm9ybS5zY3NzIiwic3JjL2FwcC90aW1lbGluZS9DOlxcVXNlcnNcXGtpa2VsXFxEb2N1bWVudHNcXEdpdEh1YlxcTXktcGVyc29uYWwtd2VicGFnZS9ub2RlX21vZHVsZXNcXGNvbXBhc3MtbWl4aW5zXFxsaWJcXGNvbXBhc3NcXGNzczNcXF9ib3gtc2hhZG93LnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL0M6XFxVc2Vyc1xca2lrZWxcXERvY3VtZW50c1xcR2l0SHViXFxNeS1wZXJzb25hbC13ZWJwYWdlL25vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3RyYW5zaXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUVEsc0VBQUE7QUFOUixjQUFBO0FBS0EsVUFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUEsV0FBQTtBQUNBO0VFRWlFLHNCQ1gxRDtBRk9QO0FETUEsWUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNIRjtBREtFO0VBQ0UsdUJBekJNO0VBMEJOLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0hKO0FET0E7RUFDRSxrQkFBQTtBQ0pGO0FEUUk7RUV6QjZELHlCRTZTdkQ7RUpsUkoseUJBekNJO0FDdUNWO0FES0k7RUU5QjZELG9DRzBCckQ7QUpJWjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7QURLRTtFQUNFLGlCQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSjtBRFFFO0VBQ0UscUJBQUE7QUNOSjtBRFVBO0VNNEcwRCxrQ0FyQ3ZDO0VKcEk4Qyx3QkU2U3ZEO0VKNU9SLHVCQWpGUTtFQWtGUix5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUE7RU13RmtELDJDQUwvQjtFQU95Qiw4QkFUL0I7RUFZNkMsd0NBckN2QztFTnREakIsWUE3RlE7RUE4RlIsaUJBQUE7RUFFQSx1QkFqR1E7RUVnQnVELG1DRzBCckQ7RUx5RFYscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35jb21wYXNzLW1peGlucy9saWIvY29tcGFzcy9jc3MzJztcclxuXHJcbi8qIFZhcmlhYmxlcyAqL1xyXG4kY29sb3ItMTogYmxhY2s7XHJcbiRjb2xvci0yOiB3aGl0ZTtcclxuJGNvbG9yLTM6IHJnYig1MCwgNzIsIDI0NCk7XHJcblxyXG4vKiBGb250cyAqL1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw3MDApO1xyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxufVxyXG5cclxuLyogTGF5b3V0ICovXHJcbioge1xyXG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgKi9cclxuLnRpbWVsaW5lIHtcclxuICBtYXJnaW46IDRlbSBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDQ2ZW07XHJcbiAgXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMmVtO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gIFxyXG4gICAgLnRpbWVsaW5lLWV2ZW50LWljb24ge1xyXG4gICAgICBAaW5jbHVkZSByb3RhdGUgKC00NWRlZyk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsIHtcclxuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCA0MGVtIDAgMCAwICRjb2xvci0zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudC1jb3B5IHtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEuODc1ZW07XHJcbiAgbGVmdDogNGVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICB9XHJcbiAgXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIHA6bm90KC50aW1lbGluZS1ldmVudC10aHVtYm5haWwpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudC1pY29uIHtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4pO1xyXG4gIEBpbmNsdWRlIHJvdGF0ZSAoNDVkZWcpO1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0xO1xyXG4gIG91dGxpbmU6IDEwcHggc29saWQgJGNvbG9yLTI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwLjVlbSAtMC41ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyZW07XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWV2ZW50LXRodW1ibmFpbCB7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3gtc2hhZG93IDAuNXMgZWFzZS1pbiAwLjFzKTtcclxuICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XHJcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDAgMCAwZW0gcmdiKDUwLCA3MiwgMjQ0KSk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAxZW0gMC4yZW0gMWVtO1xyXG59IiwiLyogVmFyaWFibGVzICovXG4vKiBGb250cyAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNzAwKTtcbmJvZHkge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLyogTGF5b3V0ICovXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFN0eWxpbmcgKi9cbi50aW1lbGluZSB7XG4gIG1hcmdpbjogNGVtIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA0NmVtO1xufVxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb250ZW50OiBcIlwiO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDJlbTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGltZWxpbmUtZXZlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGltZWxpbmUtZXZlbnQ6aG92ZXIgLnRpbWVsaW5lLWV2ZW50LWljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG59XG4udGltZWxpbmUtZXZlbnQ6aG92ZXIgLnRpbWVsaW5lLWV2ZW50LXRodW1ibmFpbCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgNDBlbSAwIDAgMCAjMzI0OGY0O1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDQwZW0gMCAwIDAgIzMyNDhmNDtcbiAgYm94LXNoYWRvdzogaW5zZXQgNDBlbSAwIDAgMCAjMzI0OGY0O1xufVxuXG4udGltZWxpbmUtZXZlbnQtY29weSB7XG4gIHBhZGRpbmc6IDJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xLjg3NWVtO1xuICBsZWZ0OiA0ZW07XG4gIHdpZHRoOiA4MCU7XG59XG4udGltZWxpbmUtZXZlbnQtY29weSBoMyB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xufVxuLnRpbWVsaW5lLWV2ZW50LWNvcHkgaDQge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbn1cbi50aW1lbGluZS1ldmVudC1jb3B5IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGltZWxpbmUtZXZlbnQtY29weSBwOm5vdCgudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsKSB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcbn1cblxuLnRpbWVsaW5lLWV2ZW50LWljb24ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiAxMHB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwLjVlbSAtMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyZW07XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xufVxuXG4udGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIC1vLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDBlbSAjMzI0OGY0O1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDBlbSAjMzI0OGY0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwZW0gIzMyNDhmNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgcGFkZGluZzogMC4yNWVtIDFlbSAwLjJlbSAxZW07XG59IiwiQGltcG9ydCBcIi4uL3N1cHBvcnRcIjtcblxuLy8gVGhpcyBtaXhpbiBwcm92aWRlcyBiYXNpYyBzdXBwb3J0IGZvciBDU1MzIHByb3BlcnRpZXMgYW5kXG4vLyB0aGVpciBjb3JyZXNwb25kaW5nIGV4cGVyaW1lbnRhbCBDU1MyIHByb3BlcnRpZXMgd2hlblxuLy8gdGhlIGltcGxlbWVudGF0aW9ucyBhcmUgaWRlbnRpY2FsIGV4Y2VwdCBmb3IgdGhlIHByb3BlcnR5XG4vLyBwcmVmaXguXG5AbWl4aW4gZXhwZXJpbWVudGFsKCRwcm9wZXJ0eSwgJHZhbHVlLFxuICAkbW96ICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEsXG4gICR3ZWJraXQgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0LFxuICAkbyAgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhLFxuICAkbXMgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1pY3Jvc29mdCxcbiAgJGtodG1sICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1raHRtbCxcbiAgJG9mZmljaWFsIDogdHJ1ZVxuKSB7XG4gIEBpZiAkd2Via2l0ICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQgICAgeyAtd2Via2l0LSN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxuICBAaWYgJGtodG1sICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwgICAgIHsgIC1raHRtbC0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRtb3ogICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEgICB7ICAgIC1tb3otI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG4gIEBpZiAkbXMgICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1taWNyb3NvZnQgeyAgICAgLW1zLSN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxuICBAaWYgJG8gICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgICAgICAtby0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRvZmZpY2lhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG59XG5cbi8vIFNhbWUgYXMgZXhwZXJpbWVudGFsKCksIGJ1dCBmb3IgY2FzZXMgd2hlbiB0aGUgcHJvcGVydHkgaXMgdGhlIHNhbWUgYW5kIHRoZSB2YWx1ZSBpcyB2ZW5kb3JpemVkXG5AbWl4aW4gZXhwZXJpbWVudGFsLXZhbHVlKCRwcm9wZXJ0eSwgJHZhbHVlLFxuICAkbW96ICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEsXG4gICR3ZWJraXQgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0LFxuICAkbyAgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhLFxuICAkbXMgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1pY3Jvc29mdCxcbiAgJGtodG1sICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1raHRtbCxcbiAgJG9mZmljaWFsIDogdHJ1ZVxuKSB7XG4gIEBpZiAkd2Via2l0ICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQgICAgeyAjeyRwcm9wZXJ0eX0gOiAtd2Via2l0LSN7JHZhbHVlfTsgfVxuICBAaWYgJGtodG1sICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwgICAgIHsgI3skcHJvcGVydHl9IDogIC1raHRtbC0jeyR2YWx1ZX07IH1cbiAgQGlmICRtb3ogICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEgICB7ICN7JHByb3BlcnR5fSA6ICAgIC1tb3otI3skdmFsdWV9OyB9XG4gIEBpZiAkbXMgICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1taWNyb3NvZnQgeyAjeyRwcm9wZXJ0eX0gOiAgICAgLW1zLSN7JHZhbHVlfTsgfVxuICBAaWYgJG8gICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgI3skcHJvcGVydHl9IDogICAgICAtby0jeyR2YWx1ZX07IH1cbiAgQGlmICRvZmZpY2lhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICN7JHByb3BlcnR5fSA6ICAgICAgICAgI3skdmFsdWV9OyB9XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi8vIENoYW5nZSB0aGUgYm94IG1vZGVsIGZvciBNb3ppbGxhLCBXZWJraXQsIElFOCBhbmQgdGhlIGZ1dHVyZVxuLy9cbi8vIEBwYXJhbSAkYnNcbi8vICAgWyBjb250ZW50LWJveCB8IGJvcmRlci1ib3ggXVxuXG5AbWl4aW4gYm94LXNpemluZygkYnMpIHtcbiAgJGJzOiB1bnF1b3RlKCRicyk7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbChib3gtc2l6aW5nLCAkYnMsXG4gICAgLW1veiwgLXdlYmtpdCwgbm90KC1vKSwgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuIiwiQGltcG9ydCBcInNoYXJlZFwiO1xuXG4vLyBAZG9jIG9mZlxuLy8gTm90ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTYWZhcmksIENocm9tZSwgYW5kIEZpcmVmb3ggYWxsIHN1cHBvcnQgM0QgdHJhbnNmb3Jtcy4gSG93ZXZlcixcbi8vIG9ubHkgaW4gdGhlIG1vc3QgcmVjZW50IGJ1aWxkcy4gWW91IHNob3VsZCBhbHNvIHByb3ZpZGUgZmFsbGJhY2sgMmQgc3VwcG9ydCBmb3Jcbi8vIE9wZXJhIGFuZCBJRS4gSUUxMCBpcyBzbGF0ZWQgdG8gaGF2ZSAzZCBlbmFibGVkLCBidXQgaXMgY3VycmVudGx5IHVucmVsZWFzZWQuXG4vLyBUbyBtYWtlIHRoYXQgZWFzeSwgYWxsIDJEIHRyYW5zZm9ybXMgaW5jbHVkZSBhbiBicm93c2VyLXRhcmdldGluZyB0b2dnbGUgKCRvbmx5M2QpXG4vLyB0byBzd2l0Y2ggYmV0d2VlbiB0aGUgdHdvIHN1cHBvcnQgbGlzdHMuIFRoZSB0b2dnbGUgZGVmYXVsdHMgdG8gJ2ZhbHNlJyAoMkQpLFxuLy8gYW5kIGFsc28gYWNjZXB0cyAndHJ1ZScgKDNEKS4gQ3VycmVudGx5IHRoZSBsaXN0cyBhcmUgYXMgZm9sbG93czpcbi8vIDJEOiBNb3ppbGxhLCBXZWJraXQsIE9wZXJhLCBPZmZpY2lhbFxuLy8gM0Q6IFdlYmtpdCwgRmlyZWZveC5cblxuLy8gQXZhaWxhYmxlIFRyYW5zZm9ybXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtIFNjYWxlICgyZCBhbmQgM2QpXG4vLyAtIFJvdGF0ZSAoMmQgYW5kIDNkKVxuLy8gLSBUcmFuc2xhdGUgKDJkIGFuZCAzZClcbi8vIC0gU2tldyAoMmQgb25seSlcblxuLy8gVHJhbnNmb3JtIFBhcmFtZXRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtIFRyYW5zZm9ybSBPcmlnaW4gKDJkIGFuZCAzZClcbi8vIC0gUGVyc3BlY3RpdmUgKDNkKVxuLy8gLSBQZXJzcGVjdGl2ZSBPcmlnaW4gKDNkKVxuLy8gLSBUcmFuc2Zvcm0gU3R5bGUgKDNkKVxuLy8gLSBCYWNrZmFjZSBWaXNpYmlsaXR5ICgzZClcblxuLy8gTWl4aW5zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0cmFuc2Zvcm0tb3JpZ2luXG4vLyAgLSBzaG9ydGN1dHM6ICB0cmFuc2Zvcm0tb3JpZ2luMmQsIHRyYW5zZm9ybS1vcmlnaW4zZFxuLy8gIC0gaGVscGVyczogICAgYXBwbHktb3JpZ2luXG4vLyB0cmFuc2Zvcm1cbi8vICAtIHNob3J0Y3V0czogIHRyYW5zZm9ybTJkLCB0cmFuc2Zvcm0zZFxuLy8gIC0gaGVscGVyczogICAgc2ltcGxlLXRyYW5zZm9ybSwgY3JlYXRlLXRyYW5zZm9ybVxuLy8gcGVyc3BlY3RpdmVcbi8vICAtIGhlbHBlcnM6ICAgIHBlcnNwZWN0aXZlLW9yaWdpblxuLy8gdHJhbnNmb3JtLXN0eWxlXG4vLyBiYWNrZmFjZS12aXNpYmlsaXR5XG4vLyBzY2FsZVxuLy8gIC0gc2hvcnRjdXRzOiAgc2NhbGVYLCBzY2FsZVksIHNjYWxlWiwgc2NhbGUzZFxuLy8gcm90YXRlXG4vLyAgLSBzaG9ydGN1dHM6ICByb3RhdGVYLCByb3RhdGVZLCByb3RhdGUzZFxuLy8gdHJhbnNsYXRlXG4vLyAgLSBzaG9ydGN1dHM6ICB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCB0cmFuc2xhdGVaLCB0cmFuc2xhdGUzZFxuLy8gc2tld1xuLy8gIC0gc2hvcnRjdXRzOiAgc2tld1gsIHNrZXdZXG5cbi8vIERlZmF1bHRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBUaGUgZGVmYXVsdCB4LW9yaWdpbiBmb3IgdHJhbnNmb3Jtc1xuJGRlZmF1bHQtb3JpZ2luLXggICAgOiA1MCUgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB5LW9yaWdpbiBmb3IgdHJhbnNmb3Jtc1xuJGRlZmF1bHQtb3JpZ2luLXkgICAgOiA1MCUgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB6LW9yaWdpbiBmb3IgdHJhbnNmb3Jtc1xuJGRlZmF1bHQtb3JpZ2luLXogICAgOiA1MCUgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG5cblxuLy8gVGhlIGRlZmF1bHQgeC1tdWx0aXBsaWVyIGZvciBzY2FsaW5nXG4kZGVmYXVsdC1zY2FsZS14ICAgICA6IDEuMjUgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHktbXVsdGlwbGllciBmb3Igc2NhbGluZ1xuJGRlZmF1bHQtc2NhbGUteSAgICAgOiAkZGVmYXVsdC1zY2FsZS14ICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB6LW11bHRpcGxpZXIgZm9yIHNjYWxpbmdcbiRkZWZhdWx0LXNjYWxlLXogICAgIDogJGRlZmF1bHQtc2NhbGUteCAgICAgICFkZWZhdWx0O1xuXG5cbi8vIFRoZSBkZWZhdWx0IGFuZ2xlIGZvciByb3RhdGlvbnNcbiRkZWZhdWx0LXJvdGF0ZSAgICAgIDogNDVkZWcgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuXG5cbi8vIFRoZSBkZWZhdWx0IHgtdmVjdG9yIGZvciB0aGUgYXhpcyBvZiAzZCByb3RhdGlvbnNcbiRkZWZhdWx0LXZlY3Rvci14ICAgIDogMSAgICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgeS12ZWN0b3IgZm9yIHRoZSBheGlzIG9mIDNkIHJvdGF0aW9uc1xuJGRlZmF1bHQtdmVjdG9yLXkgICAgOiAxICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB6LXZlY3RvciBmb3IgdGhlIGF4aXMgb2YgM2Qgcm90YXRpb25zXG4kZGVmYXVsdC12ZWN0b3IteiAgICA6IDEgICAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcblxuXG4vLyBUaGUgZGVmYXVsdCB4LWxlbmd0aCBmb3IgdHJhbnNsYXRpb25zXG4kZGVmYXVsdC10cmFuc2xhdGUteCA6IDFlbSAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHktbGVuZ3RoIGZvciB0cmFuc2xhdGlvbnNcbiRkZWZhdWx0LXRyYW5zbGF0ZS15IDogJGRlZmF1bHQtdHJhbnNsYXRlLXggICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgei1sZW5ndGggZm9yIHRyYW5zbGF0aW9uc1xuJGRlZmF1bHQtdHJhbnNsYXRlLXogOiAkZGVmYXVsdC10cmFuc2xhdGUteCAgIWRlZmF1bHQ7XG5cblxuLy8gVGhlIGRlZmF1bHQgeC1hbmdsZSBmb3Igc2tld2luZ1xuJGRlZmF1bHQtc2tldy14ICAgICAgOiA1ZGVnICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB5LWFuZ2xlIGZvciBza2V3aW5nXG4kZGVmYXVsdC1za2V3LXkgICAgICA6IDVkZWcgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcblxuXG4vLyAqKlRyYW5zZm9ybS1vcmlnaW4qKlxuLy8gVHJhbnNmb3JtLW9yaWdpbiBzZW50IGFzIGEgY29tcGxldGUgc3RyaW5nXG4vL1xuLy8gICAgIEBpbmNsdWRlIGFwcGx5LW9yaWdpbiggb3JpZ2luIFssIDNELW9ubHkgXSApXG4vL1xuLy8gd2hlcmUgJ29yaWdpbicgaXMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBjb250YWluaW5nIDEtMyAoeC95L3opIGNvb3JkaW5hdGVzXG4vLyBpbiBwZXJjZW50YWdlcywgYWJzb2x1dGUgKHB4LCBjbSwgaW4sIGVtIGV0Yy4uKSBvciByZWxhdGl2ZVxuLy8gKGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSwgY2VudGVyKSB1bml0c1xuLy9cbi8vIEBwYXJhbSBvbmx5M2QgU2V0IHRoaXMgdG8gdHJ1ZSB0byBvbmx5IGFwcGx5IHRoaXNcbi8vIG1peGluIHdoZXJlIGJyb3dzZXJzIGhhdmUgM0Qgc3VwcG9ydC5cbkBtaXhpbiBhcHBseS1vcmlnaW4oJG9yaWdpbiwgJG9ubHkzZCkge1xuICAkb25seTNkOiAkb25seTNkIG9yIC1jb21wYXNzLWxpc3Qtc2l6ZSgtY29tcGFzcy1saXN0KCRvcmlnaW4pKSA+IDI7XG4gIEBpZiAkb25seTNkIHtcbiAgICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLW9yaWdpbiwgJG9yaWdpbixcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICAgICk7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0tb3JpZ2luLCAkb3JpZ2luLFxuICAgICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICAgKTtcbiAgfVxufVxuXG4vLyBUcmFuc2Zvcm0tb3JpZ2luIHNlbnQgYXMgaW5kaXZpZHVhbCBhcmd1bWVudHM6XG4vL1xuLy8gICAgIEBpbmNsdWRlIHRyYW5zZm9ybS1vcmlnaW4oIFsgb3JpZ2luLXgsIG9yaWdpbi15LCBvcmlnaW4teiwgM0Qtb25seSBdIClcbi8vXG4vLyB3aGVyZSB0aGUgMyAnb3JpZ2luLScgYXJndW1lbnRzIHJlcHJlc2VudCB4L3kveiBjb29yZGluYXRlcy5cbi8vXG4vLyAqKk5PVEU6Kiogc2V0dGluZyB6IGNvb3JkaW5hdGVzIHRyaWdnZXJzIDNEIHN1cHBvcnQgbGlzdCwgbGVhdmUgZmFsc2UgZm9yIDJEIHN1cHBvcnRcbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKFxuICAkb3JpZ2luLXg6ICRkZWZhdWx0LW9yaWdpbi14LFxuICAkb3JpZ2luLXk6ICRkZWZhdWx0LW9yaWdpbi15LFxuICAkb3JpZ2luLXo6IGZhbHNlLFxuICAkb25seTNkOiAgIGlmKCRvcmlnaW4teiwgdHJ1ZSwgZmFsc2UpXG4pIHtcbiAgJG9yaWdpbjogdW5xdW90ZSgnJyk7XG4gIEBpZiAkb3JpZ2luLXggb3IgJG9yaWdpbi15IG9yICRvcmlnaW4teiB7XG4gICAgQGlmICRvcmlnaW4teCB7ICRvcmlnaW46ICRvcmlnaW4teDsgfSBAZWxzZSB7ICRvcmlnaW46IDUwJTsgfVxuICAgIEBpZiAkb3JpZ2luLXkgeyAkb3JpZ2luOiAkb3JpZ2luICRvcmlnaW4teTsgfSBAZWxzZSB7IEBpZiAkb3JpZ2luLXogeyAkb3JpZ2luOiAkb3JpZ2luIDUwJTsgfX1cbiAgICBAaWYgJG9yaWdpbi16IHsgJG9yaWdpbjogJG9yaWdpbiAkb3JpZ2luLXo7IH1cbiAgICBAaW5jbHVkZSBhcHBseS1vcmlnaW4oJG9yaWdpbiwgJG9ubHkzZCk7XG4gIH1cbn1cblxuXG4vLyBUcmFuc2Zvcm0gc2VudCBhcyBhIGNvbXBsZXRlIHN0cmluZzpcbi8vXG4vLyAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKCB0cmFuc2Zvcm1zIFssIDNELW9ubHkgXSApXG4vL1xuLy8gd2hlcmUgJ3RyYW5zZm9ybXMnIGlzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgYWxsIHRoZSB0cmFuc2Zvcm1zIHRvIGJlIGFwcGxpZWQuXG5AbWl4aW4gdHJhbnNmb3JtKFxuICAkdHJhbnNmb3JtLFxuICAkb25seTNkOiBmYWxzZVxuKSB7XG4gIEBpZiAkb25seTNkIHtcbiAgICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLCAkdHJhbnNmb3JtLFxuICAgICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICAgKTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zZm9ybSwgJHRyYW5zZm9ybSxcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICAgICk7XG4gIH1cbn1cblxuLy8gU2hvcnRjdXQgdG8gdGFyZ2V0IGFsbCBicm93c2VycyB3aXRoIDJEIHRyYW5zZm9ybSBzdXBwb3J0XG5AbWl4aW4gdHJhbnNmb3JtMmQoJHRyYW5zKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsIGZhbHNlKTtcbn1cblxuLy8gU2hvcnRjdXQgdG8gdGFyZ2V0IG9ubHkgYnJvd3NlcnMgd2l0aCAzRCB0cmFuc2Zvcm0gc3VwcG9ydFxuQG1peGluIHRyYW5zZm9ybTNkKCR0cmFucykge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCB0cnVlKTtcbn1cblxuLy8gQGRvYyBvZmZcbi8vIDNEIFBhcmFtZXRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBTZXQgdGhlIHBlcnNwZWN0aXZlIG9mIDNEIHRyYW5zZm9ybXMgb24gdGhlIGNoaWxkcmVuIG9mIGFuIGVsZW1lbnQ6XG4vL1xuLy8gICAgICBAaW5jbHVkZSBwZXJzcGVjdGl2ZSggcGVyc3BlY3RpdmUgKVxuLy9cbi8vIHdoZXJlICdwZXJzcGVjdGl2ZScgaXMgYSB1bml0bGVzcyBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBkZXB0aCBvZiB0aGVcbi8vIHotYXhpcy4gVGhlIGhpZ2hlciB0aGUgcGVyc3BlY3RpdmUsIHRoZSBtb3JlIGV4YWdnZXJhdGVkIHRoZSBmb3Jlc2hvcnRlbmluZy5cbi8vIHZhbHVlcyBmcm9tIDUwMCB0byAxMDAwIGFyZSBtb3JlLW9yLWxlc3MgXCJub3JtYWxcIiAtIGEgZ29vZCBzdGFydGluZy1wb2ludC5cbkBtaXhpbiBwZXJzcGVjdGl2ZSgkcCkge1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwocGVyc3BlY3RpdmUsICRwLFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBTZXQgdGhlIG9yaWdpbiBwb3NpdGlvbiBmb3IgdGhlIHBlcnNwZWN0aXZlXG4vL1xuLy8gICAgICBAaW5jbHVkZSBwZXJzcGVjdGl2ZS1vcmlnaW4ob3JpZ2luLXggW29yaWdpbi15XSlcbi8vXG4vLyB3aGVyZSB0aGUgdHdvIGFyZ3VtZW50cyByZXByZXNlbnQgeC95IGNvb3JkaW5hdGVzXG5AbWl4aW4gcGVyc3BlY3RpdmUtb3JpZ2luKCRvcmlnaW46IDUwJSkge1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwocGVyc3BlY3RpdmUtb3JpZ2luLCAkb3JpZ2luLFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBEZXRlcm1pbmUgd2hldGhlciBhIDNEIG9iamVjdHMgY2hpbGRyZW4gYWxzbyBsaXZlIGluIHRoZSBnaXZlbiAzRCBzcGFjZVxuLy9cbi8vICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXN0eWxlKCBbIHN0eWxlIF0gKVxuLy9cbi8vIHdoZXJlIGBzdHlsZWAgY2FuIGJlIGVpdGhlciBgZmxhdGAgb3IgYHByZXNlcnZlLTNkYC5cbi8vIEJyb3dzZXJzIGRlZmF1bHQgdG8gYGZsYXRgLCBtaXhpbiBkZWZhdWx0cyB0byBgcHJlc2VydmUtM2RgLlxuQG1peGluIHRyYW5zZm9ybS1zdHlsZSgkc3R5bGU6IHByZXNlcnZlLTNkKSB7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0tc3R5bGUsICRzdHlsZSxcbiAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gRGV0ZXJtaW5lIHRoZSB2aXNpYmlsaXR5IG9mIGFuIGVsZW1lbnQgd2hlbiBpdCdzIGJhY2sgaXMgdHVybmVkXG4vL1xuLy8gICAgIEBpbmNsdWRlIGJhY2tmYWNlLXZpc2liaWxpdHkoIFsgdmlzaWJpbGl0eSBdIClcbi8vXG4vLyB3aGVyZSBgdmlzaWJpbGl0eWAgY2FuIGJlIGVpdGhlciBgdmlzaWJsZWAgb3IgYGhpZGRlbmAuXG4vLyBCcm93c2VycyBkZWZhdWx0IHRvIHZpc2libGUsIG1peGluIGRlZmF1bHRzIHRvIGhpZGRlblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZpc2liaWxpdHk6IGhpZGRlbikge1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwoYmFja2ZhY2UtdmlzaWJpbGl0eSwgJHZpc2liaWxpdHksXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIEBkb2Mgb2ZmXG4vLyBUcmFuc2Zvcm0gUGFydGlhbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoZXNlIHdvcmsgd2VsbCBvbiB0aGVpciBvd24sIGJ1dCB0aGV5IGRvbid0IGFkZCB0byBlYWNoIG90aGVyLCB0aGV5IG92ZXJyaWRlLlxuLy8gVXNlIGFsb25nIHdpdGggdHJhbnNmb3JtIHBhcmFtZXRlciBtaXhpbnMgdG8gYWRqdXN0IG9yaWdpbiwgcGVyc3BlY3RpdmUgYW5kIHN0eWxlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBTY2FsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBkb2Mgb25cblxuLy8gU2NhbGUgYW4gb2JqZWN0IGFsb25nIHRoZSB4IGFuZCB5IGF4aXM6XG4vL1xuLy8gICAgICBAaW5jbHVkZSBzY2FsZSggWyBzY2FsZS14LCBzY2FsZS15LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vXG4vLyB3aGVyZSB0aGUgJ3NjYWxlLScgYXJndW1lbnRzIGFyZSB1bml0bGVzcyBtdWx0aXBsaWVycyBvZiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zXG4vLyBhbmQgcGVyc3BlY3RpdmUsIHdoaWNoIHdvcmtzIHRoZSBzYW1lIGFzIHRoZSBzdGFuZC1hbG9uZSBwZXJzcGVjdGl2ZSBwcm9wZXJ0eS9taXhpblxuLy8gYnV0IGFwcGxpZXMgdG8gdGhlIGluZGl2aWR1YWwgZWxlbWVudCAobXVsdGlwbGllZCB3aXRoIGFueSBwYXJlbnQgcGVyc3BlY3RpdmUpXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNjYWxlKFxuICAkc2NhbGUteDogICAgICRkZWZhdWx0LXNjYWxlLXgsXG4gICRzY2FsZS15OiAgICAgJHNjYWxlLXgsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHNjYWxlKCRzY2FsZS14LCAkc2NhbGUteSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTY2FsZSBhbiBvYmplY3QgYWxvbmcgdGhlIHggYXhpc1xuLy8gQGluY2x1ZGUgc2NhbGVYKCBbIHNjYWxlLXgsIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBzY2FsZVgoXG4gICRzY2FsZTogICAgICAgJGRlZmF1bHQtc2NhbGUteCxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogc2NhbGVYKCRzY2FsZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTY2FsZSBhbiBvYmplY3QgYWxvbmcgdGhlIHkgYXhpc1xuLy8gQGluY2x1ZGUgc2NhbGVZKCBbIHNjYWxlLXksIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBzY2FsZVkoXG4gICRzY2FsZTogICAgICAgJGRlZmF1bHQtc2NhbGUteSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogc2NhbGVZKCRzY2FsZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTY2FsZSBhbiBvYmplY3QgYWxvbmcgdGhlIHogYXhpc1xuLy8gQGluY2x1ZGUgc2NhbGVaKCBbIHNjYWxlLXosIHBlcnNwZWN0aXZlIF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBzY2FsZVooXG4gICRzY2FsZTogJGRlZmF1bHQtc2NhbGUteixcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogc2NhbGVaKCRzY2FsZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIFNjYWxlIGFuZCBvYmplY3QgYWxvbmcgYWxsIHRocmVlIGF4aXNcbi8vIEBpbmNsdWRlIHNjYWxlM2QoIFsgc2NhbGUteCwgc2NhbGUteSwgc2NhbGUteiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNjYWxlM2QoXG4gICRzY2FsZS14OiAgICAgJGRlZmF1bHQtc2NhbGUteCxcbiAgJHNjYWxlLXk6ICAgICAkZGVmYXVsdC1zY2FsZS15LFxuICAkc2NhbGUtejogICAgICRkZWZhdWx0LXNjYWxlLXosXG4gICRwZXJzcGVjdGl2ZTogZmFsc2Vcbikge1xuICAkdHJhbnM6IHNjYWxlM2QoJHNjYWxlLXgsICRzY2FsZS15LCAkc2NhbGUteik7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIEBkb2Mgb2ZmXG4vLyBSb3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBkb2Mgb25cblxuLy8gUm90YXRlIGFuIG9iamVjdCBhcm91bmQgdGhlIHogYXhpcyAgKDJEKVxuLy8gQGluY2x1ZGUgcm90YXRlKCBbIHJvdGF0aW9uLCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vIHdoZXJlICdyb3RhdGlvbicgaXMgYW4gYW5nbGUgc2V0IGluIGRlZ3JlZXMgKGRlZykgb3IgcmFkaWFuIChyYWQpIHVuaXRzXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHJvdGF0ZShcbiAgJHJvdGF0ZTogICAgICAkZGVmYXVsdC1yb3RhdGUsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHJvdGF0ZSgkcm90YXRlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIEEgbG9uZ2N1dCBmb3IgJ3JvdGF0ZScgaW4gY2FzZSB5b3UgZm9yZ2V0IHRoYXQgJ3onIGlzIGltcGxpZWRcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gcm90YXRlWihcbiAgJHJvdGF0ZTogICAgICAkZGVmYXVsdC1yb3RhdGUsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICBAaW5jbHVkZSByb3RhdGUoJHJvdGF0ZSwgJHBlcnNwZWN0aXZlLCAkb25seTNkKTtcbn1cblxuLy8gUm90YXRlIGFuIG9iamVjdCBhcm91bmQgdGhlIHggYXhpcyAoM0QpXG4vLyBAaW5jbHVkZSByb3RhdGVYKCBbIHJvdGF0aW9uLCBwZXJzcGVjdGl2ZSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gcm90YXRlWChcbiAgJHJvdGF0ZTogJGRlZmF1bHQtcm90YXRlLFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiByb3RhdGVYKCRyb3RhdGUpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xufVxuXG4vLyBSb3RhdGUgYW4gb2JqZWN0IGFyb3VuZCB0aGUgeSBheGlzICgzRClcbi8vIEBpbmNsdWRlIHJvdGF0ZSggWyByb3RhdGlvbiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHJvdGF0ZVkoXG4gICRyb3RhdGU6ICRkZWZhdWx0LXJvdGF0ZSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogcm90YXRlWSgkcm90YXRlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gUm90YXRlIGFuIG9iamVjdCBhcm91bmQgYW4gYXJiaXRyYXJ5IGF4aXMgKDNEKVxuLy8gQGluY2x1ZGUgcm90YXRlKCBbIHZlY3Rvci14LCB2ZWN0b3IteSwgdmVjdG9yLXosIHJvdGF0aW9uLCBwZXJzcGVjdGl2ZSBdIClcbi8vIHdoZXJlIHRoZSAndmVjdG9yLScgYXJndW1lbnRzIGFjY2VwdCB1bml0bGVzcyBudW1iZXJzLlxuLy8gVGhlc2UgbnVtYmVycyBhcmUgbm90IGltcG9ydGFudCBvbiB0aGVpciBvd24sIGJ1dCBpbiByZWxhdGlvbiB0byBvbmUgYW5vdGhlclxuLy8gY3JlYXRpbmcgYW4gYXhpcyBmcm9tIHlvdXIgdHJhbnNmb3JtLW9yaWdpbiwgYWxvbmcgdGhlIGF4aXMgb2YgWHggPSBZeSA9IFp6LlxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiByb3RhdGUzZChcbiAgJHZlY3Rvci14OiAkZGVmYXVsdC12ZWN0b3IteCxcbiAgJHZlY3Rvci15OiAkZGVmYXVsdC12ZWN0b3IteSxcbiAgJHZlY3Rvci16OiAkZGVmYXVsdC12ZWN0b3IteixcbiAgJHJvdGF0ZTogJGRlZmF1bHQtcm90YXRlLFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiByb3RhdGUzZCgkdmVjdG9yLXgsICR2ZWN0b3IteSwgJHZlY3Rvci16LCAkcm90YXRlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gQGRvYyBvZmZcbi8vIFRyYW5zbGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCBvciB5IGF4aXMgKDJEKVxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS14LCB0cmFuc2xhdGUteSwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vLyB3aGVyZSB0aGUgJ3RyYW5zbGF0ZS0nIGFyZ3VtZW50cyBhY2NlcHQgYW55IGRpc3RhbmNlIGluIHBlcmNlbnRhZ2VzIG9yIGFic29sdXRlIChweCwgY20sIGluLCBlbSBldGMuLikgdW5pdHMuXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHRyYW5zbGF0ZShcbiAgJHRyYW5zbGF0ZS14OiAkZGVmYXVsdC10cmFuc2xhdGUteCxcbiAgJHRyYW5zbGF0ZS15OiAkZGVmYXVsdC10cmFuc2xhdGUteSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogdHJhbnNsYXRlKCR0cmFuc2xhdGUteCwgJHRyYW5zbGF0ZS15KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIE1vdmUgYW4gb2JqZWN0IGFsb25nIHRoZSB4IGF4aXMgKDJEKVxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS14LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gdHJhbnNsYXRlWChcbiAgJHRyYW5zLXg6ICAgICAkZGVmYXVsdC10cmFuc2xhdGUteCxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogdHJhbnNsYXRlWCgkdHJhbnMteCk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeSBheGlzICgyRClcbi8vIEBpbmNsdWRlIHRyYW5zbGF0ZSggWyB0cmFuc2xhdGUteSwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHRyYW5zbGF0ZVkoXG4gICR0cmFucy15OiAgICAgJGRlZmF1bHQtdHJhbnNsYXRlLXksXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHRyYW5zbGF0ZVkoJHRyYW5zLXkpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gTW92ZSBhbiBvYmplY3QgYWxvbmcgdGhlIHogYXhpcyAoM0QpXG4vLyBAaW5jbHVkZSB0cmFuc2xhdGUoIFsgdHJhbnNsYXRlLXosIHBlcnNwZWN0aXZlIF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiB0cmFuc2xhdGVaKFxuICAkdHJhbnMtejogICAgICRkZWZhdWx0LXRyYW5zbGF0ZS16LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiB0cmFuc2xhdGVaKCR0cmFucy16KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gTW92ZSBhbiBvYmplY3QgYWxvbmcgdGhlIHgsIHkgYW5kIHogYXhpcyAoM0QpXG4vLyBAaW5jbHVkZSB0cmFuc2xhdGUoIFsgdHJhbnNsYXRlLXgsIHRyYW5zbGF0ZS15LCB0cmFuc2xhdGUteiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHRyYW5zbGF0ZTNkKFxuICAkdHJhbnNsYXRlLXg6ICRkZWZhdWx0LXRyYW5zbGF0ZS14LFxuICAkdHJhbnNsYXRlLXk6ICRkZWZhdWx0LXRyYW5zbGF0ZS15LFxuICAkdHJhbnNsYXRlLXo6ICRkZWZhdWx0LXRyYW5zbGF0ZS16LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiB0cmFuc2xhdGUzZCgkdHJhbnNsYXRlLXgsICR0cmFuc2xhdGUteSwgJHRyYW5zbGF0ZS16KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gQGRvYyBvZmZcbi8vIFNrZXcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBTa2V3IGFuIGVsZW1lbnQ6XG4vL1xuLy8gICAgIEBpbmNsdWRlIHNrZXcoIFsgc2tldy14LCBza2V3LXksIDNELW9ubHkgXSApXG4vL1xuLy8gd2hlcmUgdGhlICdza2V3LScgYXJndW1lbnRzIGFjY2VwdCBjc3MgYW5nbGVzIGluIGRlZ3JlZXMgKGRlZykgb3IgcmFkaWFuIChyYWQpIHVuaXRzLlxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBza2V3KFxuICAkc2tldy14OiAkZGVmYXVsdC1za2V3LXgsXG4gICRza2V3LXk6ICRkZWZhdWx0LXNrZXcteSxcbiAgJG9ubHkzZDogZmFsc2Vcbikge1xuICAkdHJhbnM6IHNrZXcoJHNrZXcteCwgJHNrZXcteSk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTa2V3IGFuIGVsZW1lbnQgYWxvbmcgdGhlIHggYXhpelxuLy9cbi8vICAgICBAaW5jbHVkZSBza2V3KCBbIHNrZXcteCwgM0Qtb25seSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2tld1goXG4gICRza2V3LXg6ICRkZWZhdWx0LXNrZXcteCxcbiAgJG9ubHkzZDogZmFsc2Vcbikge1xuICAkdHJhbnM6IHNrZXdYKCRza2V3LXgpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gU2tldyBhbiBlbGVtZW50IGFsb25nIHRoZSB5IGF4aXNcbi8vXG4vLyAgICAgQGluY2x1ZGUgc2tldyggWyBza2V3LXksIDNELW9ubHkgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNrZXdZKFxuICAkc2tldy15OiAkZGVmYXVsdC1za2V3LXksXG4gICRvbmx5M2Q6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBza2V3WSgkc2tldy15KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cblxuLy8gRnVsbCB0cmFuc2Zvcm0gbWl4aW5zXG4vLyBGb3Igc2V0dGluZ3MgYW55IGNvbWJpbmF0aW9uIG9mIHRyYW5zZm9ybXMgYXMgYXJndW1lbnRzXG4vLyBUaGVzZSBhcmUgY29tcGxleCBhbmQgbm90IGhpZ2hseSByZWNvbW1lbmRlZCBmb3IgZGFpbHkgdXNlLiBUaGV5IGFyZSBtYWlubHlcbi8vIGhlcmUgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4vL1xuLy8gKiB0aGV5IGluY2x1ZGUgb3JpZ2luIGFkanVzdG1lbnRzXG4vLyAqIHNjYWxlIHRha2VzIGEgbXVsdGlwbGllciAodW5pdGxlc3MpLCByb3RhdGUgYW5kIHNrZXcgdGFrZSBkZWdyZWVzIChkZWcpXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIGNyZWF0ZS10cmFuc2Zvcm0oXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRzY2FsZS14OiAgICAgZmFsc2UsXG4gICRzY2FsZS15OiAgICAgZmFsc2UsXG4gICRzY2FsZS16OiAgICAgZmFsc2UsXG4gICRyb3RhdGUteDogICAgZmFsc2UsXG4gICRyb3RhdGUteTogICAgZmFsc2UsXG4gICRyb3RhdGUtejogICAgZmFsc2UsXG4gICRyb3RhdGUzZDogICAgZmFsc2UsXG4gICR0cmFucy14OiAgICAgZmFsc2UsXG4gICR0cmFucy15OiAgICAgZmFsc2UsXG4gICR0cmFucy16OiAgICAgZmFsc2UsXG4gICRza2V3LXg6ICAgICAgZmFsc2UsXG4gICRza2V3LXk6ICAgICAgZmFsc2UsXG4gICRvcmlnaW4teDogICAgZmFsc2UsXG4gICRvcmlnaW4teTogICAgZmFsc2UsXG4gICRvcmlnaW4tejogICAgZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHVucXVvdGUoXCJcIik7XG5cbiAgLy8gcGVyc3BlY3RpdmVcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSA7IH1cblxuICAvLyBzY2FsZVxuICBAaWYgJHNjYWxlLXggYW5kICRzY2FsZS15IHtcbiAgICBAaWYgJHNjYWxlLXogeyAkdHJhbnM6ICR0cmFucyBzY2FsZTNkKCRzY2FsZS14LCAkc2NhbGUteSwgJHNjYWxlLXopOyB9XG4gICAgQGVsc2UgeyAkdHJhbnM6ICR0cmFucyBzY2FsZSgkc2NhbGUteCwgJHNjYWxlLXkpOyB9XG4gIH0gQGVsc2Uge1xuICAgIEBpZiAkc2NhbGUteCB7ICR0cmFuczogJHRyYW5zIHNjYWxlWCgkc2NhbGUteCk7IH1cbiAgICBAaWYgJHNjYWxlLXkgeyAkdHJhbnM6ICR0cmFucyBzY2FsZVkoJHNjYWxlLXkpOyB9XG4gICAgQGlmICRzY2FsZS16IHsgJHRyYW5zOiAkdHJhbnMgc2NhbGVaKCRzY2FsZS16KTsgfVxuICB9XG5cbiAgLy8gcm90YXRlXG4gIEBpZiAkcm90YXRlLXggeyAkdHJhbnM6ICR0cmFucyByb3RhdGVYKCRyb3RhdGUteCk7IH1cbiAgQGlmICRyb3RhdGUteSB7ICR0cmFuczogJHRyYW5zIHJvdGF0ZVkoJHJvdGF0ZS15KTsgfVxuICBAaWYgJHJvdGF0ZS16IHsgJHRyYW5zOiAkdHJhbnMgcm90YXRlWigkcm90YXRlLXopOyB9XG4gIEBpZiAkcm90YXRlM2QgeyAkdHJhbnM6ICR0cmFucyByb3RhdGUzZCgkcm90YXRlM2QpOyB9XG5cbiAgLy8gdHJhbnNsYXRlXG4gIEBpZiAkdHJhbnMteCBhbmQgJHRyYW5zLXkge1xuICAgIEBpZiAkdHJhbnMteiB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZTNkKCR0cmFucy14LCAkdHJhbnMteSwgJHRyYW5zLXopOyB9XG4gICAgQGVsc2UgeyAkdHJhbnM6ICR0cmFucyB0cmFuc2xhdGUoJHRyYW5zLXgsICR0cmFucy15KTsgfVxuICB9IEBlbHNlIHtcbiAgICBAaWYgJHRyYW5zLXggeyAkdHJhbnM6ICR0cmFucyB0cmFuc2xhdGVYKCR0cmFucy14KTsgfVxuICAgIEBpZiAkdHJhbnMteSB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZVkoJHRyYW5zLXkpOyB9XG4gICAgQGlmICR0cmFucy16IHsgJHRyYW5zOiAkdHJhbnMgdHJhbnNsYXRlWigkdHJhbnMteik7IH1cbiAgfVxuXG4gIC8vIHNrZXdcbiAgQGlmICRza2V3LXggYW5kICRza2V3LXkgeyAkdHJhbnM6ICR0cmFucyBza2V3KCRza2V3LXgsICRza2V3LXkpOyB9XG4gIEBlbHNlIHtcbiAgICBAaWYgJHNrZXcteCB7ICR0cmFuczogJHRyYW5zIHNrZXdYKCRza2V3LXgpOyB9XG4gICAgQGlmICRza2V3LXkgeyAkdHJhbnM6ICR0cmFucyBza2V3WSgkc2tldy15KTsgfVxuICB9XG5cbiAgLy8gYXBwbHkgaXQhXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0tb3JpZ2luKCRvcmlnaW4teCwgJG9yaWdpbi15LCAkb3JpZ2luLXosICRvbmx5M2QpO1xufVxuXG5cbi8vIEEgc2ltcGxpZmllZCBzZXQgb2Ygb3B0aW9uc1xuLy8gYmFja3dhcmRzLWNvbXBhdGlibGUgd2l0aCB0aGUgcHJldmlvdXMgdmVyc2lvbiBvZiB0aGUgJ3RyYW5zZm9ybScgbWl4aW5cbkBtaXhpbiBzaW1wbGUtdHJhbnNmb3JtKFxuICAkc2NhbGU6ICAgIGZhbHNlLFxuICAkcm90YXRlOiAgIGZhbHNlLFxuICAkdHJhbnMteDogIGZhbHNlLFxuICAkdHJhbnMteTogIGZhbHNlLFxuICAkc2tldy14OiAgIGZhbHNlLFxuICAkc2tldy15OiAgIGZhbHNlLFxuICAkb3JpZ2luLXg6IGZhbHNlLFxuICAkb3JpZ2luLXk6IGZhbHNlXG4pIHtcbiAgQGluY2x1ZGUgY3JlYXRlLXRyYW5zZm9ybShcbiAgICBmYWxzZSxcbiAgICAkc2NhbGUsICRzY2FsZSwgZmFsc2UsXG4gICAgZmFsc2UsIGZhbHNlLCAkcm90YXRlLCBmYWxzZSxcbiAgICAkdHJhbnMteCwgJHRyYW5zLXksIGZhbHNlLFxuICAgICRza2V3LXgsICRza2V3LXksXG4gICAgJG9yaWdpbi14LCAkb3JpZ2luLXksIGZhbHNlLFxuICAgIGZhbHNlXG4gICk7XG59XG4iLCIvLyBAZG9jIG9mZlxuLy8gVGhlc2UgZGVmYXVsdHMgbWFrZSB0aGUgYXJndW1lbnRzIG9wdGlvbmFsIGZvciB0aGlzIG1peGluXG4vLyBJZiB5b3UgbGlrZSwgc2V0IGRpZmZlcmVudCBkZWZhdWx0cyBiZWZvcmUgaW1wb3J0aW5nLlxuLy8gQGRvYyBvblxuXG5AaW1wb3J0IFwic2hhcmVkXCI7XG5cblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGJveCBzaGFkb3dzXG4kZGVmYXVsdC1ib3gtc2hhZG93LWNvbG9yOiAjMzMzMzMzICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBob3Jpem9udGFsIG9mZnNldC4gUG9zaXRpdmUgaXMgdG8gdGhlIHJpZ2h0LlxuJGRlZmF1bHQtYm94LXNoYWRvdy1oLW9mZnNldDogMHB4ICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCB2ZXJ0aWNhbCBvZmZzZXQuIFBvc2l0aXZlIGlzIGRvd24uXG4kZGVmYXVsdC1ib3gtc2hhZG93LXYtb2Zmc2V0OiAwcHggIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGJsdXIgbGVuZ3RoLlxuJGRlZmF1bHQtYm94LXNoYWRvdy1ibHVyOiA1cHggIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IHNwcmVhZCBsZW5ndGguXG4kZGVmYXVsdC1ib3gtc2hhZG93LXNwcmVhZCA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBzaGFkb3cgaW5zZXQ6IGluc2V0IG9yIGZhbHNlIChmb3Igc3RhbmRhcmQgc2hhZG93KS5cbiRkZWZhdWx0LWJveC1zaGFkb3ctaW5zZXQgOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gUHJvdmlkZXMgY3Jvc3MtYnJvd3NlciBmb3IgV2Via2l0LCBHZWNrbywgYW5kIENTUzMgYm94IHNoYWRvd3Mgd2hlbiBvbmUgb3IgbW9yZSBib3hcbi8vIHNoYWRvd3MgYXJlIG5lZWRlZC5cbi8vIEVhY2ggc2hhZG93IGFyZ3VtZW50IHNob3VsZCBhZGhlcmUgdG8gdGhlIHN0YW5kYXJkIGNzczMgc3ludGF4IGZvciB0aGVcbi8vIGJveC1zaGFkb3cgcHJvcGVydHkuXG5AbWl4aW4gYm94LXNoYWRvdyhcbiAgJHNoYWRvdy0xIDogZGVmYXVsdCxcbiAgJHNoYWRvdy0yIDogZmFsc2UsXG4gICRzaGFkb3ctMyA6IGZhbHNlLFxuICAkc2hhZG93LTQgOiBmYWxzZSxcbiAgJHNoYWRvdy01IDogZmFsc2UsXG4gICRzaGFkb3ctNiA6IGZhbHNlLFxuICAkc2hhZG93LTcgOiBmYWxzZSxcbiAgJHNoYWRvdy04IDogZmFsc2UsXG4gICRzaGFkb3ctOSA6IGZhbHNlLFxuICAkc2hhZG93LTEwOiBmYWxzZVxuKSB7XG4gIEBpZiAkc2hhZG93LTEgPT0gZGVmYXVsdCB7XG4gICAgJHNoYWRvdy0xIDogLWNvbXBhc3Mtc3BhY2UtbGlzdChjb21wYWN0KGlmKCRkZWZhdWx0LWJveC1zaGFkb3ctaW5zZXQsIGluc2V0LCBmYWxzZSksICRkZWZhdWx0LWJveC1zaGFkb3ctaC1vZmZzZXQsICRkZWZhdWx0LWJveC1zaGFkb3ctdi1vZmZzZXQsICRkZWZhdWx0LWJveC1zaGFkb3ctYmx1ciwgJGRlZmF1bHQtYm94LXNoYWRvdy1zcHJlYWQsICRkZWZhdWx0LWJveC1zaGFkb3ctY29sb3IpKTtcbiAgfVxuICAkc2hhZG93IDogY29tcGFjdCgkc2hhZG93LTEsICRzaGFkb3ctMiwgJHNoYWRvdy0zLCAkc2hhZG93LTQsICRzaGFkb3ctNSwgJHNoYWRvdy02LCAkc2hhZG93LTcsICRzaGFkb3ctOCwgJHNoYWRvdy05LCAkc2hhZG93LTEwKTtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKGJveC1zaGFkb3csICRzaGFkb3csXG4gICAgLW1veiwgLXdlYmtpdCwgbm90KC1vKSwgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBQcm92aWRlcyBhIHNpbmdsZSBjcm9zcy1icm93c2VyIENTUyBib3ggc2hhZG93IGZvciBXZWJraXQsIEdlY2tvLCBhbmQgQ1NTMy5cbi8vIEluY2x1ZGVzIGRlZmF1bHQgYXJndW1lbnRzIGZvciBob3Jpem9udGFsIG9mZnNldCwgdmVydGljYWwgb2Zmc2V0LCBibHVyIGxlbmd0aCwgc3ByZWFkIGxlbmd0aCwgY29sb3IgYW5kIGluc2V0LlxuQG1peGluIHNpbmdsZS1ib3gtc2hhZG93KFxuICAkaG9mZiAgIDogJGRlZmF1bHQtYm94LXNoYWRvdy1oLW9mZnNldCxcbiAgJHZvZmYgICA6ICRkZWZhdWx0LWJveC1zaGFkb3ctdi1vZmZzZXQsXG4gICRibHVyICAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWJsdXIsXG4gICRzcHJlYWQgOiAkZGVmYXVsdC1ib3gtc2hhZG93LXNwcmVhZCxcbiAgJGNvbG9yICA6ICRkZWZhdWx0LWJveC1zaGFkb3ctY29sb3IsXG4gICRpbnNldCAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWluc2V0XG4pIHtcbiAgQGlmIG5vdCAoJGluc2V0ID09IHRydWUgb3IgJGluc2V0ID09IGZhbHNlIG9yICRpbnNldCA9PSBpbnNldCkge1xuICAgIEB3YXJuIFwiJGluc2V0IGV4cGVjdGVkIHRvIGJlIHRydWUgb3IgdGhlIGluc2V0IGtleXdvcmQuIEdvdCAjeyRpbnNldH0gaW5zdGVhZC4gVXNpbmc6IGluc2V0XCI7XG4gIH1cblxuICBAaWYgJGNvbG9yID09IG5vbmUge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH0gQGVsc2Uge1xuICAgICRmdWxsICAgOiAkaG9mZiAkdm9mZjtcbiAgICBAaWYgJGJsdXIgICB7ICRmdWxsOiAkZnVsbCAkYmx1cjsgICB9XG4gICAgQGlmICRzcHJlYWQgeyAkZnVsbDogJGZ1bGwgJHNwcmVhZDsgfVxuICAgIEBpZiAkY29sb3IgIHsgJGZ1bGw6ICRmdWxsICRjb2xvcjsgIH1cbiAgICBAaWYgJGluc2V0ICB7ICRmdWxsOiBpbnNldCAkZnVsbDsgICB9XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygkZnVsbCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuLy8gQ1NTIFRyYW5zaXRpb25zXG4vLyBDdXJyZW50bHkgb25seSB3b3JrcyBpbiBXZWJraXQuXG4vL1xuLy8gKiBleHBlY3RlZCBpbiBDU1MzLCBGaXJlRm94IDMuNi83IGFuZCBPcGVyYSBQcmVzdG8gMi4zXG4vLyAqIFdlJ2xsIGJlIHByZXBhcmVkLlxuLy9cbi8vIEluY2x1ZGluZyB0aGlzIHN1Ym1vZHVsZSBzZXRzIGZvbGxvd2luZyBkZWZhdWx0cyBmb3IgdGhlIG1peGluczpcbi8vXG4vLyAgICAgJGRlZmF1bHQtdHJhbnNpdGlvbi1wcm9wZXJ0eSA6IGFsbFxuLy8gICAgICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24gOiAxc1xuLy8gICAgICRkZWZhdWx0LXRyYW5zaXRpb24tZnVuY3Rpb24gOiBmYWxzZVxuLy8gICAgICRkZWZhdWx0LXRyYW5zaXRpb24tZGVsYXkgICAgOiBmYWxzZVxuLy9cbi8vIE92ZXJyaWRlIHRoZW0gaWYgeW91IGxpa2UuIFRpbWluZy1mdW5jdGlvbiBhbmQgZGVsYXkgYXJlIHNldCB0byBmYWxzZSBmb3IgYnJvd3NlciBkZWZhdWx0cyAoZWFzZSwgMHMpLlxuXG4kZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGwgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzICFkZWZhdWx0O1xuXG4kZGVmYXVsdC10cmFuc2l0aW9uLWZ1bmN0aW9uOiBmYWxzZSAhZGVmYXVsdDtcblxuJGRlZmF1bHQtdHJhbnNpdGlvbi1kZWxheTogZmFsc2UgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uYWJsZS1wcmVmaXhlZC12YWx1ZXM6IHRyYW5zZm9ybSwgdHJhbnNmb3JtLW9yaWdpbiAhZGVmYXVsdDtcblxuLy8gT25lIG9yIG1vcmUgcHJvcGVydGllcyB0byB0cmFuc2l0aW9uXG4vL1xuLy8gKiBmb3IgbXVsdGlwbGUsIHVzZSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0XG4vLyAqIGFsc28gYWNjZXB0cyBcImFsbFwiIG9yIFwibm9uZVwiXG5cbkBtaXhpbiB0cmFuc2l0aW9uLXByb3BlcnR5KCRwcm9wZXJ0eS0xOiAkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5LFxuICAkcHJvcGVydHktMiA6IGZhbHNlLFxuICAkcHJvcGVydHktMyA6IGZhbHNlLFxuICAkcHJvcGVydHktNCA6IGZhbHNlLFxuICAkcHJvcGVydHktNSA6IGZhbHNlLFxuICAkcHJvcGVydHktNiA6IGZhbHNlLFxuICAkcHJvcGVydHktNyA6IGZhbHNlLFxuICAkcHJvcGVydHktOCA6IGZhbHNlLFxuICAkcHJvcGVydHktOSA6IGZhbHNlLFxuICAkcHJvcGVydHktMTA6IGZhbHNlXG4pIHtcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnR5LTEpID09IHN0cmluZyB7ICRwcm9wZXJ0eS0xOiB1bnF1b3RlKCRwcm9wZXJ0eS0xKTsgfVxuICAkcHJvcGVydGllczogY29tcGFjdCgkcHJvcGVydHktMSwgJHByb3BlcnR5LTIsICRwcm9wZXJ0eS0zLCAkcHJvcGVydHktNCwgJHByb3BlcnR5LTUsICRwcm9wZXJ0eS02LCAkcHJvcGVydHktNywgJHByb3BlcnR5LTgsICRwcm9wZXJ0eS05LCAkcHJvcGVydHktMTApO1xuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQgICAgeyAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHkgOiBwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbigtd2Via2l0LCAkcHJvcGVydGllcyk7IH1cbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSAgIHsgICAgICAgICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5IDogcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oLW1veiwgICAgJHByb3BlcnRpZXMpOyB9XG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhICAgICB7ICAgICAgICAgICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eSA6IHByZWZpeGVkLWZvci10cmFuc2l0aW9uKC1vLCAgICAgICRwcm9wZXJ0aWVzKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHkgOiAkcHJvcGVydGllcztcbn1cblxuLy8gT25lIG9yIG1vcmUgZHVyYXRpb25zIGluIHNlY29uZHNcbi8vXG4vLyAqIGZvciBtdWx0aXBsZSwgdXNlIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Rcbi8vICogdGhlc2UgZHVyYXRpb25zIHdpbGwgYWZmZWN0IHRoZSBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIGxpc3QgcG9zaXRpb25cblxuQG1peGluIHRyYW5zaXRpb24tZHVyYXRpb24oJGR1cmF0aW9uLTE6ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICRkdXJhdGlvbi0yIDogZmFsc2UsXG4gICRkdXJhdGlvbi0zIDogZmFsc2UsXG4gICRkdXJhdGlvbi00IDogZmFsc2UsXG4gICRkdXJhdGlvbi01IDogZmFsc2UsXG4gICRkdXJhdGlvbi02IDogZmFsc2UsXG4gICRkdXJhdGlvbi03IDogZmFsc2UsXG4gICRkdXJhdGlvbi04IDogZmFsc2UsXG4gICRkdXJhdGlvbi05IDogZmFsc2UsXG4gICRkdXJhdGlvbi0xMDogZmFsc2Vcbikge1xuICBAaWYgdHlwZS1vZigkZHVyYXRpb24tMSkgPT0gc3RyaW5nIHsgJGR1cmF0aW9uLTE6IHVucXVvdGUoJGR1cmF0aW9uLTEpOyB9XG4gICRkdXJhdGlvbnM6IGNvbXBhY3QoJGR1cmF0aW9uLTEsICRkdXJhdGlvbi0yLCAkZHVyYXRpb24tMywgJGR1cmF0aW9uLTQsICRkdXJhdGlvbi01LCAkZHVyYXRpb24tNiwgJGR1cmF0aW9uLTcsICRkdXJhdGlvbi04LCAkZHVyYXRpb24tOSwgJGR1cmF0aW9uLTEwKTtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zaXRpb24tZHVyYXRpb24sICRkdXJhdGlvbnMsXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gT25lIG9yIG1vcmUgdGltaW5nIGZ1bmN0aW9uc1xuLy9cbi8vICogWyBlYXNlIHwgbGluZWFyIHwgZWFzZS1pbiB8IGVhc2Utb3V0IHwgZWFzZS1pbi1vdXQgfCBjdWJpYy1iZXppZXIoeDEsIHkxLCB4MiwgeTIpXVxuLy8gKiBGb3IgbXVsdGlwbGUsIHVzZSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0XG4vLyAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGVmZmVjdCB0aGUgcHJvcGVydGllcyBpbiB0aGUgc2FtZSBsaXN0IHBvc2l0aW9uXG5cbkBtaXhpbiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbigkZnVuY3Rpb24tMTogJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbixcbiAgJGZ1bmN0aW9uLTIgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTMgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTQgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTUgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTYgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTcgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTggOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTkgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTEwOiBmYWxzZVxuKSB7XG4gICRmdW5jdGlvbi0xOiB1bnF1b3RlKCRmdW5jdGlvbi0xKTtcbiAgJGZ1bmN0aW9uczogY29tcGFjdCgkZnVuY3Rpb24tMSwgJGZ1bmN0aW9uLTIsICRmdW5jdGlvbi0zLCAkZnVuY3Rpb24tNCwgJGZ1bmN0aW9uLTUsICRmdW5jdGlvbi02LCAkZnVuY3Rpb24tNywgJGZ1bmN0aW9uLTgsICRmdW5jdGlvbi05LCAkZnVuY3Rpb24tMTApO1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24sICRmdW5jdGlvbnMsXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gT25lIG9yIG1vcmUgdHJhbnNpdGlvbi1kZWxheXMgaW4gc2Vjb25kc1xuLy9cbi8vICogZm9yIG11bHRpcGxlLCB1c2UgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdFxuLy8gKiB0aGVzZSBkZWxheXMgd2lsbCBlZmZlY3QgdGhlIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgbGlzdCBwb3NpdGlvblxuXG5AbWl4aW4gdHJhbnNpdGlvbi1kZWxheSgkZGVsYXktMTogJGRlZmF1bHQtdHJhbnNpdGlvbi1kZWxheSxcbiAgJGRlbGF5LTIgOiBmYWxzZSxcbiAgJGRlbGF5LTMgOiBmYWxzZSxcbiAgJGRlbGF5LTQgOiBmYWxzZSxcbiAgJGRlbGF5LTUgOiBmYWxzZSxcbiAgJGRlbGF5LTYgOiBmYWxzZSxcbiAgJGRlbGF5LTcgOiBmYWxzZSxcbiAgJGRlbGF5LTggOiBmYWxzZSxcbiAgJGRlbGF5LTkgOiBmYWxzZSxcbiAgJGRlbGF5LTEwOiBmYWxzZVxuKSB7XG4gIEBpZiB0eXBlLW9mKCRkZWxheS0xKSA9PSBzdHJpbmcgeyAkZGVsYXktMTogdW5xdW90ZSgkZGVsYXktMSk7IH1cbiAgJGRlbGF5czogY29tcGFjdCgkZGVsYXktMSwgJGRlbGF5LTIsICRkZWxheS0zLCAkZGVsYXktNCwgJGRlbGF5LTUsICRkZWxheS02LCAkZGVsYXktNywgJGRlbGF5LTgsICRkZWxheS05LCAkZGVsYXktMTApO1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNpdGlvbi1kZWxheSwgJGRlbGF5cyxcbiAgICAtbW96LCAtd2Via2l0LCAtbywgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBUcmFuc2l0aW9uIGFsbC1pbi1vbmUgc2hvcnRoYW5kXG5cbkBtaXhpbiBzaW5nbGUtdHJhbnNpdGlvbihcbiAgJHByb3BlcnR5OiAkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5LFxuICAkZHVyYXRpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICRmdW5jdGlvbjogJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbixcbiAgJGRlbGF5OiAkZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5XG4pIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihjb21wYWN0KCRwcm9wZXJ0eSAkZHVyYXRpb24gJGZ1bmN0aW9uICRkZWxheSkpO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbihcbiAgJHRyYW5zaXRpb24tMSA6IGRlZmF1bHQsXG4gICR0cmFuc2l0aW9uLTIgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tMyA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi00IDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTUgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tNiA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi03IDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTggOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tOSA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi0xMDogZmFsc2Vcbikge1xuICBAaWYgJHRyYW5zaXRpb24tMSA9PSBkZWZhdWx0IHtcbiAgICAkdHJhbnNpdGlvbi0xIDogY29tcGFjdCgkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24gJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbiAkZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5KTtcbiAgfVxuICAkdHJhbnNpdGlvbnM6IGZhbHNlO1xuICBAaWYgdHlwZS1vZigkdHJhbnNpdGlvbi0xKSA9PSBsaXN0IGFuZCB0eXBlLW9mKG50aCgkdHJhbnNpdGlvbi0xLDEpKSA9PSBsaXN0IHtcbiAgICAkdHJhbnNpdGlvbnM6IGpvaW4oJHRyYW5zaXRpb24tMSwgY29tcGFjdCgkdHJhbnNpdGlvbi0yLCAkdHJhbnNpdGlvbi0zLCAkdHJhbnNpdGlvbi00LCAkdHJhbnNpdGlvbi01LCAkdHJhbnNpdGlvbi02LCAkdHJhbnNpdGlvbi03LCAkdHJhbnNpdGlvbi04LCAkdHJhbnNpdGlvbi05LCAkdHJhbnNpdGlvbi0xMCksIGNvbW1hKTtcbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zaXRpb25zIDogY29tcGFjdCgkdHJhbnNpdGlvbi0xLCAkdHJhbnNpdGlvbi0yLCAkdHJhbnNpdGlvbi0zLCAkdHJhbnNpdGlvbi00LCAkdHJhbnNpdGlvbi01LCAkdHJhbnNpdGlvbi02LCAkdHJhbnNpdGlvbi03LCAkdHJhbnNpdGlvbi04LCAkdHJhbnNpdGlvbi05LCAkdHJhbnNpdGlvbi0xMCk7XG4gIH1cbiAgJGRlbGF5czogY29tbWEtbGlzdCgpO1xuICAkaGFzLWRlbGF5czogZmFsc2U7XG4gICR3ZWJraXQtdmFsdWU6IGNvbW1hLWxpc3QoKTtcbiAgJG1vei12YWx1ZTogY29tbWEtbGlzdCgpO1xuICAkby12YWx1ZTogY29tbWEtbGlzdCgpO1xuXG4gIC8vIFRoaXMgYmxvY2sgY2FuIGJlIG1hZGUgY29uc2lkZXJhYmx5IHNpbXBsZXIgYXQgdGhlIHBvaW50IGluIHRpbWUgdGhhdFxuICAvLyB3ZSBubyBsb25nZXIgbmVlZCB0byBkZWFsIHdpdGggdGhlIGRpZmZlcmVuY2VzIGluIGhvdyBkZWxheXMgYXJlIHRyZWF0ZWQuXG4gIEBlYWNoICR0cmFuc2l0aW9uIGluICR0cmFuc2l0aW9ucyB7XG4gICAgLy8gRXh0cmFjdCB0aGUgdmFsdWVzIGZyb20gdGhlIGxpc3RcbiAgICAvLyAodGhpcyB3b3VsZCBiZSBjbGVhbmVyIGlmIG50aCB0b29rIGEgM3JkIGFyZ3VtZW50IHRvIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlKS5cbiAgICAkcHJvcGVydHk6IG50aCgkdHJhbnNpdGlvbiwgMSk7XG4gICAgJGR1cmF0aW9uOiBmYWxzZTtcbiAgICAkdGltaW5nLWZ1bmN0aW9uOiBmYWxzZTtcbiAgICAkZGVsYXk6IGZhbHNlO1xuICAgIEBpZiBsZW5ndGgoJHRyYW5zaXRpb24pID4gMSB7ICRkdXJhdGlvbjogICAgICAgIG50aCgkdHJhbnNpdGlvbiwgMik7IH1cbiAgICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA+IDIgeyAkdGltaW5nLWZ1bmN0aW9uOiBudGgoJHRyYW5zaXRpb24sIDMpOyB9XG4gICAgQGlmIGxlbmd0aCgkdHJhbnNpdGlvbikgPiAzIHsgJGRlbGF5OiAgICAgICAgICAgbnRoKCR0cmFuc2l0aW9uLCA0KTsgJGhhcy1kZWxheXM6IHRydWU7IH1cblxuICAgIC8vIElmIGEgZGVsYXkgaXMgcHJvdmlkZWQgd2l0aG91dCBhIHRpbWluZyBmdW5jdGlvblxuICAgIEBpZiBpcy10aW1lKCR0aW1pbmctZnVuY3Rpb24pIGFuZCBub3QoJGRlbGF5KSB7ICRkZWxheTogJHRpbWluZy1mdW5jdGlvbjsgJHRpbWluZy1mdW5jdGlvbjogZmFsc2U7ICRoYXMtZGVsYXlzOiB0cnVlOyB9XG5cbiAgICAvLyBLZWVwIGEgbGlzdCBvZiBkZWxheXMgaW4gY2FzZSBvbmUgaXMgc3BlY2lmaWVkXG4gICAgJGRlbGF5czogYXBwZW5kKCRkZWxheXMsIGlmKCRkZWxheSwgJGRlbGF5LCAwcykpO1xuXG4gICAgJHdlYmtpdC12YWx1ZTogYXBwZW5kKCR3ZWJraXQtdmFsdWUsIGNvbXBhY3QoKHByZWZpeGVkLWZvci10cmFuc2l0aW9uKC13ZWJraXQsICRwcm9wZXJ0eSkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24pLi4uKSk7XG4gICAgICAgJG1vei12YWx1ZTogYXBwZW5kKCAgICRtb3otdmFsdWUsIGNvbXBhY3QoKHByZWZpeGVkLWZvci10cmFuc2l0aW9uKCAgIC1tb3osICRwcm9wZXJ0eSkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24gJGRlbGF5KS4uLikpO1xuICAgICAgICAgJG8tdmFsdWU6IGFwcGVuZCggICAgICRvLXZhbHVlLCBjb21wYWN0KChwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbiggICAgIC1vLCAkcHJvcGVydHkpICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uICRkZWxheSkuLi4pKTtcbiAgfVxuXG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCAgICB7ICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbiA6ICR3ZWJraXQtdmFsdWU7XG4gICAgLy8gb2xkIHdlYmtpdCBkb2Vzbid0IHN1cHBvcnQgdGhlIGRlbGF5IHBhcmFtZXRlciBpbiB0aGUgc2hvcnRoYW5kIHNvIHdlIHByb2dyZXNzaXZlbHkgZW5oYW5jZSBpdC5cbiAgICBAaWYgJGhhcy1kZWxheXMgICAgICAgICAgICAgICAgICAgICAgIHsgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5IDogJGRlbGF5czsgICAgICAgfSB9XG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEgICB7ICAgICAgICAgIC1tb3otdHJhbnNpdGlvbiA6ICRtb3otdmFsdWU7ICAgIH1cbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgICAgICAgICAgICAtby10cmFuc2l0aW9uIDogJG8tdmFsdWU7ICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gOiAkdHJhbnNpdGlvbnM7XG59XG5cbi8vIGNvZXJjZSBhIGxpc3QgdG8gYmUgY29tbWEgZGVsaW1pdGVkIG9yIG1ha2UgYSBuZXcsIGVtcHR5IGNvbW1hIGRlbGltaXRlZCBsaXN0LlxuQGZ1bmN0aW9uIGNvbW1hLWxpc3QoJGxpc3Q6ICgpKSB7XG4gIEByZXR1cm4gam9pbigoKSwgJGxpc3QsIGNvbW1hKTtcbn1cblxuLy8gUmV0dXJucyBgJHByb3BlcnR5YCB3aXRoIHRoZSBnaXZlbiBwcmVmaXggaWYgaXQgaXMgZm91bmQgaW4gYCR0cmFuc2l0aW9uYWJsZS1wcmVmaXhlZC12YWx1ZXNgLlxuQGZ1bmN0aW9uIHByZWZpeGVkLWZvci10cmFuc2l0aW9uKCRwcmVmaXgsICRwcm9wZXJ0eSkge1xuICBAaWYgdHlwZS1vZigkcHJvcGVydHkpID09IGxpc3Qge1xuICAgICRuZXctbGlzdDogY29tbWEtbGlzdCgpO1xuICAgIEBlYWNoICR2IGluICRwcm9wZXJ0eSB7XG4gICAgICAkbmV3LWxpc3Q6IGFwcGVuZCgkbmV3LWxpc3QsIHByZWZpeGVkLWZvci10cmFuc2l0aW9uKCRwcmVmaXgsICR2KSk7XG4gICAgfVxuICAgIEByZXR1cm4gJG5ldy1saXN0O1xuICB9IEBlbHNlIHtcbiAgICBAaWYgaW5kZXgoJHRyYW5zaXRpb25hYmxlLXByZWZpeGVkLXZhbHVlcywgJHByb3BlcnR5KSB7XG4gICAgICBAcmV0dXJuICN7JHByZWZpeH0tI3skcHJvcGVydHl9O1xuICAgIH0gQGVsc2Uge1xuICAgICAgQHJldHVybiAkcHJvcGVydHk7XG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrcyBpZiB0aGUgdmFsdWUgZ2l2ZW4gaXMgYSB1bml0IG9mIHRpbWUuXG5AZnVuY3Rpb24gaXMtdGltZSgkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBudW1iZXIge1xuICAgIEByZXR1cm4gbm90KG5vdChpbmRleChzIG1zLCB1bml0KCR2YWx1ZSkpKSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timeline',
          templateUrl: './timeline.component.html',
          styleUrls: ['./timeline.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kikel\Documents\GitHub\My-personal-webpage\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map