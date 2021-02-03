(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "./src/app/right-tab/right-tab.component.ts");





const routes = [
    { path: '', component: _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__["RightTabComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: "reload",
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        onSameUrlNavigation: "reload",
                        anchorScrolling: 'enabled',
                        scrollPositionRestoration: 'enabled'
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-tab/left-tab.component */ "./src/app/left-tab/left-tab.component.ts");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "./src/app/right-tab/right-tab.component.ts");
/* harmony import */ var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speed-dial-fab/speed-dial-fab.component */ "./src/app/speed-dial-fab/speed-dial-fab.component.ts");





class AppComponent {
    constructor() {
        this.title = "LozanoWebPage";
        this.FabOptions = {
            buttons: [
                {
                    icon: "contact_phone",
                    link: "contacto",
                },
                {
                    icon: "business_center",
                    link: "experiencia",
                },
                {
                    icon: "desktop_mac",
                    link: "habilidades",
                },
                {
                    icon: "school",
                    link: "educacion",
                },
                {
                    icon: "person",
                    link: "sobre",
                },
                {
                    icon: "home",
                    link: "inicio",
                },
            ],
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "fab-button", 3, "options"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-left-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-right-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-speed-dial-fab", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.FabOptions);
    } }, directives: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__["LeftTabComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__["RightTabComponent"], _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__["SpeedDialFabComponent"]], styles: [".fab-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .fab-button[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxraWtlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXE15LXBlcnNvbmFsLXdlYnBhZ2Uvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREdBOzs7O3dDQUFBOztBQU1BO0VBQ0k7SUFDSSxhQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWItYnV0dG9ue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgTU9CSUxFIFZJRVdcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5mYWItYnV0dG9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn0iLCIuZmFiLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZmFiLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, httpTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function() { return httpTranslateLoader; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./left-tab/left-tab.component */ "./src/app/left-tab/left-tab.component.ts");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "./src/app/right-tab/right-tab.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab-header/tab-header.component */ "./src/app/tab-header/tab-header.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./speed-dial-fab/speed-dial-fab.component */ "./src/app/speed-dial-fab/speed-dial-fab.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
                    useFactory: httpTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__["LeftTabComponent"],
        _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"],
        _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"],
        _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__["SpeedDialFabComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__["LeftTabComponent"],
                    _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"],
                    _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"],
                    _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__["SpeedDialFabComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
                            useFactory: httpTranslateLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]],
                        },
                    }),
                ],
                providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();
function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/left-tab/left-tab.component.ts":
/*!************************************************!*\
  !*** ./src/app/left-tab/left-tab.component.ts ***!
  \************************************************/
/*! exports provided: LeftTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTabComponent", function() { return LeftTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab-header/tab-header.component */ "./src/app/tab-header/tab-header.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return [""]; };
class LeftTabComponent {
    constructor(tabHeader, translate) {
        this.tabHeader = tabHeader;
        this.translate = translate;
        translate.addLangs(["es", "en"]);
        translate.setDefaultLang("es");
    }
    ngOnInit() { }
    toDark() {
        this.tabHeader.toDark();
        document.getElementById("main-tab").style.backgroundColor = "#151C21";
    }
    toLight() {
        this.tabHeader.toLight();
        document.getElementById("main-tab").style.backgroundColor = "#3248F4";
    }
}
LeftTabComponent.ɵfac = function LeftTabComponent_Factory(t) { return new (t || LeftTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
LeftTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftTabComponent, selectors: [["app-left-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"]])], decls: 49, vars: 36, consts: [["id", "main-tab", 1, "main-tab"], [1, "face-image"], ["src", "../../assets/images/IMGP0592.jpg", 1, "profile-picture"], [1, "name"], [1, "name-font"], [1, "job"], [1, "page-links"], ["fragment", "inicio", 3, "routerLink"], [1, "category"], ["src", "../../assets/icons/home.png", 1, "icon"], ["fragment", "sobre", 3, "routerLink"], ["src", "../../assets/icons/user-1.png", 1, "icon"], ["fragment", "educacion", 3, "routerLink"], ["src", "../../assets/icons/atomic.png", 1, "icon"], ["fragment", "habilidades", 3, "routerLink"], ["src", "../../assets/icons/monitor.png", 1, "icon"], ["fragment", "experiencia", 3, "routerLink"], ["src", "../../assets/icons/layers.png", 1, "icon"], ["fragment", "contacto", 3, "routerLink"], ["src", "../../assets/icons/chat.png", 1, "icon"], [1, "social-media"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/enriqueloz88"], ["src", "../../assets/icons/github.png", 1, "social-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/"], ["src", "../../assets/icons/linkedin.png", 1, "social-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com"], ["src", "../../assets/icons/email.png", 1, "social-icon"]], template: function LeftTabComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, "full_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, "job"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, "home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, "about_me.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 22, "education.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 24, "skills.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 26, "experience.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 28, "contact.title"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".main-tab[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 90%;\n  margin: 5%;\n  margin-top: 2.5%;\n  background-color: #3248f4;\n  border-radius: 22px;\n  color: white;\n  display: inline-block;\n  position: fixed;\n}\n\nspan[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  vertical-align: text-top;\n  font-size: large;\n  text-decoration: none;\n}\n\n.face-image[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  height: 6em;\n  width: 6em;\n  border-radius: 100%;\n  margin: 10%;\n  border: 0.2em solid white;\n}\n\n.name[_ngcontent-%COMP%] {\n  height: 18%;\n}\n\n.name-font[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: x-large;\n  margin-left: 10%;\n  margin-top: 5%;\n}\n\n.job[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-left: 10%;\n  font-size: large;\n}\n\n.page-links[_ngcontent-%COMP%] {\n  height: 47%;\n}\n\n.category[_ngcontent-%COMP%] {\n  font-size: large;\n  margin-top: 3.5%;\n  cursor: pointer;\n  transition-duration: 0.5s;\n}\n\n.category[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 1.4em;\n  width: 1.4em;\n  margin-left: 10%;\n  margin-right: 5%;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  height: 15%;\n  text-align: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 1.7em;\n  width: 1.7em;\n  margin: 5%;\n  cursor: pointer;\n  transition-duration: 1.5s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: rotate(360deg) scale(1.4);\n  \n}\n\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 30, 227, 0.92);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n\n.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n}\n\n.title_settings[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n  inline-size: block;\n  line-height: 1em;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%] {\n  margin-top: 250%;\n}\n\n.selector[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.flags[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.aux[_ngcontent-%COMP%] {\n  height: auto;\n  vertical-align: bottom;\n}\n\n.aux-top[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.aux-bottom[_ngcontent-%COMP%] {\n  height: 50%;\n  color: rgba(0, 30, 227, 0);\n}\n\n.aux-container[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .main-tab[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC10YWIvQzpcXFVzZXJzXFxraWtlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXE15LXBlcnNvbmFsLXdlYnBhZ2Uvc3JjXFxhcHBcXGxlZnQtdGFiXFxsZWZ0LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGVmdC10YWIvbGVmdC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtBQ0FKOztBREtBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksV0FBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0hKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FEUUE7RUFDSSxXQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUlBLHlCQUFBO0FDTEo7O0FEUUE7RUFDZ0MsU0FBQTtFQUNJLGVBQUE7RUFDaEMsc0JBQUE7QUNISjs7QURPQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBSUEseUJBQUE7QUNMSjs7QURRQTtFQUNrRCxtQ0FBQTtFQUNKLFNBQUE7RUFDMUMsb0NBQUE7RUFBc0MsK0JBQUE7QUNGMUM7O0FES0E7RUFDSSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBOztFQUVJLGNBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0FDRko7O0FES0E7Ozs7d0NBQUE7O0FBTUE7RUFDSTtJQUNJLGFBQUE7RUNITjs7RURLRTtJQUNJLGVBQUE7RUNGTjs7RURJRTtJQUNJLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sZWZ0LXRhYi9sZWZ0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTGVmdCBDb250YWluZXIgZm9yIGxpbmtzXHJcbi5tYWluLXRhYiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxufVxyXG5cclxuLy9JbmRpdmlkdWFsIHBhcnRzIG9mIHRoZSBsZWZ0IHRhYlxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vL1Byb2ZpbGUgcGljdHVyZVxyXG4uZmFjZS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICBoZWlnaHQ6IDZlbTtcclxuICAgIHdpZHRoOiA2ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcbiAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4vL0pvYnNcclxuLm5hbWUge1xyXG4gICAgaGVpZ2h0OiAxOCU7XHJcbn1cclxuXHJcbi5uYW1lLWZvbnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5qb2Ige1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4vL0xpbmtzXHJcbi5wYWdlLWxpbmtzIHtcclxuICAgIGhlaWdodDogNDclO1xyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi10b3A6IDMuNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG5cclxuLmNhdGVnb3J5OmhvdmVyIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGJsdWU7IC8vVHJhbnNpdGlvbiB0byBhbm90aGVyIGNvbG9yXHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGhlaWdodDogMS40ZW07XHJcbiAgICB3aWR0aDogMS40ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLy9Tb2NpYWwgbWVkaWEgbGlua3NcclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29uIHtcclxuICAgIGhlaWdodDogMS43ZW07XHJcbiAgICB3aWR0aDogMS43ZW07XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbjpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTsgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpOyAvKiBJRSA5ICovXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7IC8qIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDMwLCAyMjcsIDAuOTIpO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm92ZXJsYXkgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLm92ZXJsYXkgYTpob3ZlcixcclxuLm92ZXJsYXkgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG4udGl0bGVfc2V0dGluZ3Mge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBpbmxpbmUtc2l6ZTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcblxyXG5tYXQtc2xpZGUtdG9nZ2xlIHtcclxuICAgIG1hcmdpbi10b3A6IDI1MCU7XHJcbn1cclxuXHJcbi5zZWxlY3RvciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbn1cclxuXHJcbi5mbGFncyB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbn1cclxuXHJcbi5hdXgge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuLmF1eC10b3Age1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5hdXgtYm90dG9tIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMzAsIDIyNywgMCk7XHJcbn1cclxuXHJcbi5hdXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tYWluLXRhYiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5vdmVybGF5IGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5vdmVybGF5IC5jbG9zZWJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICByaWdodDogMzVweDtcclxuICAgIH1cclxufVxyXG4iLCIubWFpbi10YWIge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiA1JTtcbiAgbWFyZ2luLXRvcDogMi41JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuc3BhbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mYWNlLWltYWdlIHtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDZlbTtcbiAgd2lkdGg6IDZlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luOiAxMCU7XG4gIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XG59XG5cbi5uYW1lIHtcbiAgaGVpZ2h0OiAxOCU7XG59XG5cbi5uYW1lLWZvbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmpvYiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5wYWdlLWxpbmtzIHtcbiAgaGVpZ2h0OiA0NyU7XG59XG5cbi5jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbi10b3A6IDMuNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi5jYXRlZ29yeTpob3ZlciB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLyogU2FmYXJpIDMtOCAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogMS40ZW07XG4gIHdpZHRoOiAxLjRlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnNvY2lhbC1tZWRpYSB7XG4gIGhlaWdodDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gIGhlaWdodDogMS43ZW07XG4gIHdpZHRoOiAxLjdlbTtcbiAgbWFyZ2luOiA1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbn1cblxuLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7XG4gIC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpO1xuICAvKiBJRSA5ICovXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTtcbiAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzMCwgMjI3LCAwLjkyKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ub3ZlcmxheS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm92ZXJsYXkgYSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLm92ZXJsYXkgYTpob3Zlcixcbi5vdmVybGF5IGE6Zm9jdXMge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLm92ZXJsYXkgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi50aXRsZV9zZXR0aW5ncyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaW5saW5lLXNpemU6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMWVtO1xufVxuXG5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgbWFyZ2luLXRvcDogMjUwJTtcbn1cblxuLnNlbGVjdG9yIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgNSU7XG59XG5cbi5mbGFncyB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwIDUlO1xufVxuXG4uYXV4IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uYXV4LXRvcCB7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uYXV4LWJvdHRvbSB7XG4gIGhlaWdodDogNTAlO1xuICBjb2xvcjogcmdiYSgwLCAzMCwgMjI3LCAwKTtcbn1cblxuLmF1eC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbi10YWIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAub3ZlcmxheSBhIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAub3ZlcmxheSAuY2xvc2VidG4ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgcmlnaHQ6IDM1cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-left-tab",
                templateUrl: "./left-tab.component.html",
                providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"]],
                styleUrls: ["./left-tab.component.scss"],
            }]
    }], function () { return [{ type: _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/right-tab/right-tab.component.ts":
/*!**************************************************!*\
  !*** ./src/app/right-tab/right-tab.component.ts ***!
  \**************************************************/
/*! exports provided: RightTabComponent, DialogContentExampleDialog, DialogContentExampleDialog2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTabComponent", function() { return RightTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function() { return DialogContentExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog2", function() { return DialogContentExampleDialog2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-header/tab-header.component */ "./src/app/tab-header/tab-header.component.ts");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../left-tab/left-tab.component */ "./src/app/left-tab/left-tab.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

















function RightTabComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "dark_mode"));
} }
function RightTabComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "light_mode"));
} }
function RightTabComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r10)("selected", language_r10 === ctx_r3.translate.currentLang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r10, " ");
} }
function RightTabComponent_a_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "about_me.cv_button"), " ");
} }
function RightTabComponent_a_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "about_me.cv_button"), " ");
} }
function RightTabComponent_mat_error_256_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_276_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [""]; };
class RightTabComponent {
    constructor(dialog, renderer, leftTab, translate) {
        this.dialog = dialog;
        this.renderer = renderer;
        this.leftTab = leftTab;
        this.translate = translate;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        //Binding variables
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
    ngOnInit() { }
    switchLang(lang) {
        //Translation
        this.translate.use(lang);
        this.currentLang = this.translate.currentLang;
    }
    //Function to open the popup
    openDialog(variable) {
        const dialogRef = null;
        if (variable == 1) {
            const dialogRef = this.dialog.open(DialogContentExampleDialog);
        }
        else if (variable == 2) {
            const dialogRef = this.dialog.open(DialogContentExampleDialog2);
        }
        else {
            alert("Popup not found");
        }
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    //Functions that implements the dark mode on this
    darkMode() {
        if (this.isDark == false) {
            console.log("To dark...");
            this.isDark = true;
            this.renderer.setStyle(document.body, "background-color", "#000000");
            document.getElementById("container").style.color = "white";
            document.getElementById("inicio").style.backgroundColor = "#151C21";
            document.getElementById("sobre").style.backgroundColor = "#151C21";
            document.getElementById("educacion").style.backgroundColor = "#151C21";
            document.getElementById("habilidades1").style.backgroundColor =
                "#151C21";
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
            document.getElementById("nightModeButton").style.backgroundColor =
                "white";
            document.getElementById("nightModeButton").style.color = "#333333";
            this.leftTab.toDark();
        }
        else {
            console.log("To light...");
            this.isDark = false;
            this.renderer.setStyle(document.body, "background-color", "#F3F6FF");
            document.getElementById("container").style.color = "black";
            document.getElementById("inicio").style.backgroundColor = "#3248F4";
            document.getElementById("sobre").style.backgroundColor = "white";
            document.getElementById("educacion").style.backgroundColor = "white";
            document.getElementById("habilidades1").style.backgroundColor =
                "#3248F4";
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
            document.getElementById("nightModeButton").style.backgroundColor =
                "#333333";
            document.getElementById("nightModeButton").style.color = "white";
            this.leftTab.toLight();
        }
    }
}
RightTabComponent.ɵfac = function RightTabComponent_Factory(t) { return new (t || RightTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__["LeftTabComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
RightTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightTabComponent, selectors: [["app-right-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__["LeftTabComponent"]])], decls: 298, vars: 117, consts: [["id", "container", 1, "container"], ["id", "inicio", 1, "home"], ["id", "nightModeButton", 3, "click"], ["src", "../../assets/icons/dark_mode.png", 1, "button-image"], [4, "ngIf"], [1, "select"], ["required", "", 1, "select-text", 3, "change"], ["selectedLang", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "select-highlight"], [1, "select-bar"], [1, "select-label"], [1, "container_name"], [1, "name"], [1, "description"], [1, "buttons"], ["fragment", "sobre", 3, "routerLink"], ["color", "warn", "mat-raised-button", "", 1, "button"], ["target", "_blank", "href", "https://github.com/enriqueloz88"], ["mat-raised-button", "", 1, "button", "git-button"], ["id", "sobre", 1, "about-me"], [3, "parentData"], [1, "about-photo"], ["src", "../../assets/images/IMGP0592.jpg", 1, "profile-picture"], [1, "about-text"], [1, "about-hello"], [1, "about-description"], [1, "about-data"], [1, "about-data-left"], [2, "color", "rgb(68, 68, 68)"], [1, "about-data-right"], [1, "about-buttons"], ["target", "_blank", "href", "../../assets/Documents/CV1_ES.pdf", 4, "ngIf"], ["target", "_blank", "href", "../../assets/Documents/CV1_EN.pdf", 4, "ngIf"], ["fragment", "contacto", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 1, "button"], ["id", "educacion", 1, "time"], ["id", "habilidades1", 1, "main-skills"], [1, "main-skill"], ["src", "../../assets/icons/python.png", 1, "skill-picture"], [1, "text-skill"], ["src", "../../assets/icons/ai.png", 1, "skill-picture"], ["src", "../../assets/icons/social.png", 1, "skill-picture"], ["src", "../../assets/icons/linux.png", 1, "skill-picture"], ["id", "habilidades", 1, "skills"], [1, "skill-set", "first"], [1, "skill-title"], [1, "skill-title-column"], [1, "skill-set"], ["src", "../../assets/icons/uk.png", 1, "flag"], [1, "flag-title"], ["src", "../../assets/icons/spain.png", 1, "flag", "last"], ["id", "experiencia", 1, "experience"], [1, "post-experience", "left-post"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "post-picture", 3, "click"], [1, "text-post"], [1, "post-experience", "right-post"], ["src", "../../assets/images/uc3m.png", 1, "post-picture", 3, "click"], ["id", "contacto", 1, "about-me", "last"], [1, "contact-left"], [1, "contact-mini"], [1, "contact-mini-left"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com"], ["src", "../../assets/icons/correo.png", 1, "contact-icon"], [1, "contact-mini-right"], [1, "section"], [1, "section__item"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "sm-link__label"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/"], ["src", "../../assets/icons/linkedin (azul).png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.es/maps/place/Madrid/@40.4378698,-3.8196201,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902"], ["src", "../../assets/icons/alfiler.png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.es/maps/place/Madrid/@40.4378698,-3.8196201,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "contact-right"], ["id", "light-form", 1, "contact-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", "name", "email", 3, "formControl", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Carolina, Mateo", "value", "", "name", "name_email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Propuesta de empleo", "value", "", "name", "subject", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Hola, me gustar\u00EDa conocer...", "name", "text", "rows", "3", 3, "ngModel", "ngModelChange"], ["id", "dark-form", 1, "contact-form"], [1, "example-full-width"], [3, "href"], ["mat-raised-button", "", "color", "warn", 2, "float", "right", "margin-right", "8%", "margin-top", "5%", "margin-bottom", "10%"], [3, "value", "selected"], ["target", "_blank", "href", "../../assets/Documents/CV1_ES.pdf"], ["mat-raised-button", "", "color", "warn", 1, "button", 2, "margin-right", "20%"], ["target", "_blank", "href", "../../assets/Documents/CV1_EN.pdf"]], template: function RightTabComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_button_click_2_listener() { return ctx.darkMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RightTabComponent_span_4_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RightTabComponent_span_5_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RightTabComponent_Template_select_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.switchLang(_r2.value); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 1999 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Madrid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " kikelozano8@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, RightTabComponent_a_69_Template, 4, 3, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, RightTabComponent_a_70_Template, 4, 3, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Teamwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-expansion-panel", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Technical skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Microsoft Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Office avanzado y Prezi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "C/C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "HTML/CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Bash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "MIPS 32 Ensamblador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Adobe Photoshop/GIMP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Audacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Quartus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Weka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "JFlap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-expansion-panel", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Soft skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Trabajo en equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Resiliencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Organizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-expansion-panel", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](190, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Ingl\u00E9s, B2 - First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Espa\u00F1ol, Nativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_201_listener() { return ctx.openDialog(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Voluntario evento tecnol\u00F3gico T3chfest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_205_listener() { return ctx.openDialog(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Profesor particular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "kikelozano8@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](235, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](243, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](249, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "form", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-form-field", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Tu email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_255_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](256, RightTabComponent_mat_error_256_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](257, RightTabComponent_mat_error_257_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-form-field", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_261_listener($event) { return ctx.name_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "mat-form-field", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_265_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "mat-form-field", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Tu mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "textarea", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_269_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "form", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-form-field", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](274, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_275_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](276, RightTabComponent_mat_error_276_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](277, RightTabComponent_mat_error_277_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "mat-form-field", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](281, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_282_listener($event) { return ctx.name_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "mat-form-field", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](286, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_287_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "mat-form-field", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](291, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "textarea", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_292_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](294, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](295, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 57, "name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 59, "presentation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](115, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 61, "first_button"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 63, "second_button"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 65, "about_me.hello"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 67, "about_me.intro"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 69, "about_me.name_title"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 71, "full_name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 73, "about_me.birthday_title"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 75, "loc_title"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 77, "email_title"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLang == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLang != "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](116, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 79, "about_me.hire_button"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 81, "skills.important"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 83, "skills.ai"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](113, 85, "skills.web_app_dev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](116, 87, "skills.db"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 89, "skills.office"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](133, 91, "skills.frameworks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](154, 93, "skills.other_tools"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](190, 95, "skills.languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](235, 97, "contact.my_linkedin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](243, 99, "loc_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](249, 101, "education.madrid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](274, 103, "contact.your_email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.emailFormControl)("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](281, 105, "contact.your_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](286, 107, "contact.subject"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](291, 109, "contact.your_message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("href", "mailto:kikelozano8@gmail.com?Subject=", ctx.subject, "&body=Hola%20", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](294, 111, "full_name"), ",%20soy%20", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](295, 113, "email"), ".%0A%0A%20%20%20", ctx.text, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n.container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 65%;\n  margin-top: 2.5%;\n  margin-right: 5%;\n  height: 100%;\n  vertical-align: top;\n  margin-left: 30%;\n}\n.home[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: 90%;\n  border-radius: 22px;\n  color: white;\n  position: relative;\n}\n.container_name[_ngcontent-%COMP%] {\n  height: 72%;\n  position: relative;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 4.5em;\n  line-height: 1em;\n  position: absolute;\n  bottom: 50%;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 1%;\n  font-weight: bold;\n}\n.description[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20%;\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: justify;\n  line-height: 1.5em;\n  font-size: 1.1em;\n}\n.button[_ngcontent-%COMP%] {\n  padding-left: 3%;\n  padding-right: 3%;\n}\n.git-button[_ngcontent-%COMP%] {\n  margin-top: 7%;\n}\n.buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n#nightModeButton[_ngcontent-%COMP%] {\n  padding: 15px 15px 10px 15px;\n  border: none;\n  text-align: center;\n  background-color: #333333;\n  font-size: 1.2em;\n  text-decoration: none;\n  color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  left: 10%;\n  top: 10%;\n  z-index: 1;\n}\n#nightModeButton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.button-image[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  vertical-align: middle;\n}\n.select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 15%;\n  left: 75%;\n  top: 5%;\n}\n.select-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-family: inherit;\n  background-color: transparent;\n  width: 100%;\n  cursor: pointer;\n  padding: 10px 10px 10px 0;\n  font-size: 1.1em;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.select-text[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n.select[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 18px;\n  right: 10px;\n  \n  width: 0;\n  height: 0;\n  padding: 0;\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid rgba(0, 0, 0, 0.82);\n  pointer-events: none;\n}\n\n.select-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 10px;\n  transition: 0.2s ease all;\n}\n\n.select-text[_ngcontent-%COMP%]:focus    ~ .select-label[_ngcontent-%COMP%], .select-text[_ngcontent-%COMP%]:valid    ~ .select-label[_ngcontent-%COMP%] {\n  color: #fff;\n  top: -20px;\n  transition: 0.2s ease all;\n  font-size: 1.1em;\n}\n\n.select-bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.select-bar[_ngcontent-%COMP%]:before, .select-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #fff;\n  transition: 0.2s ease all;\n}\n.select-bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n.select-bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n\n.select-text[_ngcontent-%COMP%]:focus    ~ .select-bar[_ngcontent-%COMP%]:before, .select-text[_ngcontent-%COMP%]:focus    ~ .select-bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.select-highlight[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.about-me[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 70%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.about-photo[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 70%;\n  display: inline-block;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  height: 12em;\n  width: 12em;\n  border-radius: 100%;\n  margin: 19%;\n  margin-top: 7%;\n  border: 0.2em solid white;\n}\n.about-text[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 5%;\n  height: 70%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-hello[_ngcontent-%COMP%] {\n  margin-top: 7%;\n  font-size: 3em;\n  font-weight: bold;\n  height: 13%;\n}\n.about-description[_ngcontent-%COMP%] {\n  height: 30%;\n  color: #969696;\n  text-align: justify;\n}\n.about-data[_ngcontent-%COMP%] {\n  height: 20%;\n  color: #969696;\n}\n.about-data-left[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-data-right[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-buttons[_ngcontent-%COMP%] {\n  height: 30%;\n}\n.last[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n.first[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.time[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1em;\n}\n.skills[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 5%;\n}\n.skill-set[_ngcontent-%COMP%] {\n  margin-left: 7%;\n  margin-right: 5%;\n}\n.skill-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: #3248f4;\n}\n.skill-title-column[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.flag[_ngcontent-%COMP%] {\n  width: 7%;\n}\n.flag-title[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.skill-set[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding-top: 1.7%;\n  padding-left: 2%;\n}\n.main-skills[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  color: white;\n}\n.main-skill[_ngcontent-%COMP%] {\n  width: 25%;\n  display: inline-block;\n  transition-duration: 1s;\n}\n.main-skill[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n.main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.text-skill[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  font-size: large;\n  text-align: center;\n  padding-bottom: 7%;\n}\n.skill-picture[_ngcontent-%COMP%] {\n  height: 20%;\n  width: 25%;\n  padding-top: 20%;\n  padding-bottom: 13%;\n  cursor: pointer;\n}\n#reconocimientos[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.description-card[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-weight: bold;\n}\n.back-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n  font-style: italic;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n.reward[_ngcontent-%COMP%] {\n  width: 4em;\n}\n.card[_ngcontent-%COMP%] {\n  height: 12%;\n  width: 86%;\n  transform-style: preserve-3d;\n  position: relative;\n  transition: all 1s ease-in-out;\n  transition-duration: 1s;\n  cursor: pointer;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-left: 7%;\n  color: black;\n  margin-bottom: 3%;\n}\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #fdfcfc;\n  height: 100%;\n  width: 100%;\n  border-radius: 1em;\n  border: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-style: preserve-3d;\n  color: black;\n  perspective: 1000px;\n  box-shadow: 2px 4px 8px 1px rgba(0, 0, 0, 0.4);\n}\n.left-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n  font-size: large;\n}\n.right-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10%;\n}\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.front[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  transform: translateZ(120px);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: rotateY(180deg);\n}\n.experience[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 2%;\n}\n.post-experience[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-top: 5%;\n  display: inline-block;\n}\n.left-post[_ngcontent-%COMP%] {\n  margin-left: 13%;\n  margin-right: 7%;\n}\n.right-post[_ngcontent-%COMP%] {\n  margin-right: 20%;\n  vertical-align: top;\n}\n.post-picture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 5%;\n  margin-bottom: 5%;\n  cursor: pointer;\n}\n.text-post[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-align: justify;\n}\n#contacto[_ngcontent-%COMP%] {\n  height: auto;\n}\n.contact-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.contact-mini[_ngcontent-%COMP%] {\n  height: 33%;\n  width: 100%;\n  padding-top: 10%;\n}\n.contact-mini-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n.contact-mini-right[_ngcontent-%COMP%] {\n  width: 70%;\n  display: inline-block;\n  padding-top: 4%;\n  vertical-align: top;\n}\n.contact-right[_ngcontent-%COMP%] {\n  width: 60%;\n  display: inline-block;\n}\n.contact-icon[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.link-contact[_ngcontent-%COMP%] {\n  line-height: 0.5;\n}\nh2[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n#dark-form[_ngcontent-%COMP%] {\n  display: none;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #3248f4 !important;\n}\n .mat-form-field-underline {\n  \n  background-color: #3248f4 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #3248f4 !important;\n}\n.contact-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 5%;\n  margin-left: 2%;\n  margin-right: 1%;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sm-link[_ngcontent-%COMP%] {\n  --uismLinkDisplay: var(--smLinkDisplay, inline-flex);\n  --uismLinkTextColor: var(--smLinkTextColor);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover);\n  display: var(--uismLinkDisplay);\n  color: var(--uismLinkTextColor);\n  position: relative;\n  overflow: hidden;\n}\na.sm-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.sm-link__label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sm-link_padding-all[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after {\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before {\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  width: var(--uismLinkLineWeight);\n  height: 100%;\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  opacity: 0;\n  will-change: transform, opacity;\n  transition-property: transform, opacity;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]:hover::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover::after, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n\n.sm-link_padding-bottom[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  padding-bottom: var(--uismLinkLineWeight);\n  position: relative;\n}\n.sm-link_padding-bottom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.sm-link_bg[_ngcontent-%COMP%] {\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover, #fff);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n  transition: color 0.3s ease-out;\n}\n.sm-link_bg[_ngcontent-%COMP%]::before, .sm-link_bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  opacity: 0;\n  position: absolute;\n  transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.03s;\n}\n.sm-link_bg[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover::before, .sm-link_bg[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transition-duration: 0.35s, 0.35s;\n  transition-delay: 0s, 0s;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover {\n  color: var(--uismLinkTextColorHover);\n}\n\n.sm-link_text[_ngcontent-%COMP%]::before {\n  content: attr(data-sm-link-text);\n  color: var(--uismLinkTextColorHover);\n  position: absolute;\n}\n.sm-link_text[_ngcontent-%COMP%]::before, .sm-link_text[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.86, 0.6, 0.08, 1.01);\n  transition-duration: 0.3s;\n}\n.sm-link_text[_ngcontent-%COMP%]:hover::before, .sm-link_text[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n}\n\n.sm-link3[_ngcontent-%COMP%]::after {\n  transform: translate3d(-100%, 0, 0);\n  transition: transform 0.2s ease-in;\n}\n.sm-link3[_ngcontent-%COMP%]:hover::after {\n  transform: translate3d(0, 0, 0);\n}\n\n@media only screen and (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    margin-right: 3%;\n    width: 94%;\n    max-width: 95%;\n  }\n\n  .home[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: 100%;\n    border-radius: 22px;\n    color: white;\n    position: relative;\n  }\n\n  .container_name[_ngcontent-%COMP%] {\n    height: 80%;\n    position: relative;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 50%;\n    font-size: 4.5em;\n    line-height: 1em;\n    margin-left: 10%;\n    margin-right: 10%;\n    font-weight: bold;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 15%;\n    margin-left: 10%;\n    margin-right: 10%;\n    text-align: justify;\n    line-height: 1.5em;\n    font-size: 1.1em;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .git-button[_ngcontent-%COMP%] {\n    margin-left: 2%;\n  }\n\n  .about-me[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 100%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .about-photo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 20%;\n    position: relative;\n  }\n\n  .profile-picture[_ngcontent-%COMP%] {\n    height: 12em;\n    width: 12em;\n    border-radius: 100%;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    border: 0.2em solid white;\n  }\n\n  .about-text[_ngcontent-%COMP%] {\n    margin-top: 6%;\n    width: 86%;\n    margin-right: 7%;\n    margin-left: 7%;\n    height: 70%;\n    vertical-align: top;\n  }\n\n  .about-hello[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    font-weight: bold;\n    height: 8%;\n  }\n\n  .about-description[_ngcontent-%COMP%] {\n    height: 20%;\n    color: #969696;\n    text-align: justify;\n  }\n\n  .about-data[_ngcontent-%COMP%] {\n    height: 15%;\n    padding-top: 5%;\n    color: #969696;\n  }\n\n  .about-data-left[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n    margin-bottom: 4%;\n  }\n\n  .about-data-right[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n  }\n\n  .about-buttons[_ngcontent-%COMP%] {\n    padding-top: 22%;\n    height: 30%;\n    align-items: center;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    font-size: 1.15em;\n    padding: 3% 3%;\n    margin-bottom: 4%;\n  }\n\n  .main-skills[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: auto;\n    padding: 4%;\n    border-radius: 22px;\n    margin-top: 5%;\n    line-height: 1.2em;\n    color: white;\n  }\n\n  .main-skill[_ngcontent-%COMP%] {\n    width: 50%;\n    display: inline-block;\n  }\n\n  .main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .text-skill[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    padding-bottom: 7%;\n    font-size: 0.94em;\n  }\n\n  .skill-picture[_ngcontent-%COMP%] {\n    height: 7em;\n    width: auto;\n    padding-top: 10%;\n    padding-bottom: 13%;\n    cursor: pointer;\n  }\n\n  .skill-title-column[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 99%;\n    margin-top: 3%;\n    vertical-align: top;\n  }\n\n  .flag[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n\n  .flag-title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    min-width: 80%;\n  }\n\n  #contacto[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .contact-left[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-top: 2%;\n    vertical-align: top;\n  }\n\n  .contact-mini[_ngcontent-%COMP%] {\n    height: 33%;\n    width: 100%;\n    padding-top: 10%;\n  }\n\n  .contact-mini-left[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n\n  .contact-mini-right[_ngcontent-%COMP%] {\n    width: 75%;\n    display: inline-block;\n    padding-top: 5%;\n    vertical-align: top;\n  }\n\n  .contact-right[_ngcontent-%COMP%] {\n    width: 86%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-right: 7%;\n    margin-top: 3%;\n  }\n\n  .contact-icon[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .post-experience[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-top: 8%;\n    margin-bottom: 2%;\n    display: inline-block;\n  }\n\n  #reconocimientos[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 140%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .description-card[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    font-weight: bold;\n  }\n\n  .back-card[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n    font-style: italic;\n  }\n\n  @import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  .reward[_ngcontent-%COMP%] {\n    width: 4em;\n  }\n\n  .first_card[_ngcontent-%COMP%] {\n    margin-top: -15%;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    height: 16%;\n    width: 86%;\n    transform-style: preserve-3d;\n  }\n\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .left-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 80%;\n    font-size: large;\n  }\n\n  .right-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 20%;\n  }\n\n  .sm-link__label[_ngcontent-%COMP%] {\n    display: block;\n    font-size: medium;\n  }\n}\n\n@media only screen and (max-width: 1025px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtdGFiL0M6XFxVc2Vyc1xca2lrZWxcXERvY3VtZW50c1xcR2l0SHViXFxNeS1wZXJzb25hbC13ZWJwYWdlL3NyY1xcYXBwXFxyaWdodC10YWJcXHJpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmlnaHQtdGFiL3JpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnWlEsOERBQUE7QUEvWVI7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREdBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURJQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdFQUFBO0VBQ0EscURBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDREo7QURHQTtFQUNJLHdFQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNBSjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNISjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FDSEo7QURNQSxpQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHlDQUFBO0FDSEo7QURNQSxxQkFBQTtBQUNBO0VBQ0kscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHdCQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtBQ0hKO0FETUEsa0RBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNISjtBRE1BLGlCQUFBO0FBQ0E7O0VBRUksV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSEo7QURNQSxrREFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUE7O0VBRUksV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0hKO0FETUE7RUFDSSxTQUFBO0FDSEo7QURNQTtFQUNJLFVBQUE7QUNISjtBRE1BLGlCQUFBO0FBQ0E7O0VBRUksVUFBQTtBQ0hKO0FETUEsbURBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0hKO0FET0E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNKSjtBRE9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0pKO0FET0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSko7QURPQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDSko7QURPQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9BO0VBQ0ksV0FBQTtBQ0pKO0FET0E7RUFDSSxpQkFBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0FDSko7QURRQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNMSjtBRFNBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ05KO0FEU0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFFBO0VBQ0ksU0FBQTtBQ0xKO0FET0E7RUFDSSxjQUFBO0FDSko7QURPQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTEo7QURRQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUlBLHVCQUFBO0FDTEo7QURRQTtFQUNnQyxTQUFBO0VBQ0ksZUFBQTtFQUNoQyxzQkFBQTtBQ0hKO0FETUE7RUFFSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pKO0FET0E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0pKO0FEUUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0xKO0FEUUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFNBOzs7RUFHSSxTQUFBO0VBQ0Esc0JBQUE7QUNOSjtBRFNBO0VBQ0ksVUFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUlBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTko7QURTQTs7RUFFSSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDUEo7QURVQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDUEo7QURVQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQ1BKO0FEVUE7RUFDSSwwQkFBQTtBQ1BKO0FEVUE7O0VBRUksNEJBQUE7QUNQSjtBRFVBO0VBQ0ksMEJBQUE7QUNQSjtBRFdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUko7QURXQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDUko7QURXQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFlBO0VBQ0ksWUFBQTtBQ1RKO0FEWUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVEo7QURZQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDVEo7QURZQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1RKO0FEWUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNUSjtBRFlBO0VBQ0ksVUFBQTtBQ1RKO0FEWUE7RUFDSSxnQkFBQTtBQ1RKO0FEWUE7RUFDSSxjQUFBO0FDVEo7QURZQTtFQUNJLGFBQUE7QUNUSjtBRFlBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtBQ1RKO0FEWUE7RUFDSSw0QkFBQTtFQUNBLG9DQUFBO0FDVEo7QURZQTtFQUNJLHlDQUFBO0VBQ0Esb0NBQUE7QUNUSjtBRFlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVEo7QURZQTtFQUNJLFdBQUE7QUNUSjtBRGNBOztDQUFBO0FBSUE7RUFDSSxvREFBQTtFQUNBLDJDQUFBO0VBQ0EscURBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEZ0JBO0VBQ0kscUJBQUE7QUNiSjtBRGdCQTtFQUNJLGNBQUE7QUNiSjtBRGlCQSx3QkFBQTtBQUVBO0VBQ0ksa0RBQUE7RUFDQSxpREFBQTtFQUNBLDRDQUFBO0VBRUEsK0JBQUE7QUNoQko7QURtQkE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsT0FBQTtBQ2hCSjtBRG1CQTtFQUNJLE1BQUE7QUNoQko7QURtQkE7RUFDSSxTQUFBO0FDaEJKO0FEbUJBOztFQUVJLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUNoQko7QURtQkE7RUFDSSxPQUFBO0FDaEJKO0FEbUJBO0VBQ0ksUUFBQTtBQ2hCSjtBRG1CQTs7OztFQUlJLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLCtCQUFBO0VBQ0EsdUNBQUE7QUNqQko7QURvQkE7Ozs7RUFJSSxVQUFBO0FDakJKO0FEb0JBLDJCQUFBO0FBRUE7RUFDSSxrREFBQTtFQUNBLGlEQUFBO0VBRUEseUNBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHNCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNwQko7QUR1QkEsZUFBQTtBQUVBO0VBQ0ksaURBQUE7RUFDQSwyREFBQTtFQUNBLDRDQUFBO0VBRUEsK0JBQUE7RUFDQSwrQkFBQTtBQ3RCSjtBRHlCQTs7RUFFSSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxnRUFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ3ZCSjtBRDBCQTs7RUFFSSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ3ZCSjtBRDBCQTtFQUNJLG9DQUFBO0FDdkJKO0FEMEJBLGlCQUFBO0FBRUE7RUFDSSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUN4Qko7QUQyQkE7O0VBRUksOEJBQUE7RUFDQSwrREFBQTtFQUNBLHlCQUFBO0FDeEJKO0FEMkJBOztFQUVJLHlCQUFBO0FDeEJKO0FEMkJBLGFBQUE7QUFFQTtFQUNJLG1DQUFBO0VBQ0Esa0NBQUE7QUN6Qko7QUQ0QkE7RUFDSSwrQkFBQTtBQ3pCSjtBRDRCQTs7Ozt3Q0FBQTtBQU1BO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQzFCTjs7RUQ4QkU7SUFDSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQzNCTjs7RUQrQkU7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUM1Qk47O0VEK0JFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQzVCTjs7RUQrQkU7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDNUJOOztFRCtCRTtJQUNJLGtCQUFBO0VDNUJOOztFRCtCRTtJQUNJLGVBQUE7RUM1Qk47O0VEZ0NFO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VDN0JOOztFRGdDRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUM3Qk47O0VEZ0NFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0VDN0JOOztFRGdDRTtJQUNJLGNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDN0JOOztFRGdDRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VDN0JOOztFRGdDRTtJQUNJLFdBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUM3Qk47O0VEZ0NFO0lBQ0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDN0JOOztFRGdDRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUM3Qk47O0VEZ0NFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUM3Qk47O0VEZ0NFO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUM3Qk47O0VEZ0NFO0lBQ0ksaUJBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUM3Qk47O0VEaUNFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQzlCTjs7RURpQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7RUM5Qk47O0VEaUNFO0lBRUksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUMvQk47O0VEa0NFO0lBQ0ksV0FBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDL0JOOztFRGtDRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUMvQk47O0VEa0NFO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDL0JOOztFRGtDRTtJQUNJLFVBQUE7RUMvQk47O0VEa0NFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUMvQk47O0VEbUNFO0lBQ0ksWUFBQTtFQ2hDTjs7RURtQ0U7SUFDSSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDaENOOztFRG1DRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNoQ047O0VEbUNFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0VDaENOOztFRG1DRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQ2hDTjs7RURtQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDaENOOztFRG1DRTtJQUNJLFVBQUE7RUNoQ047O0VEbUNFO0lBQ0ksVUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLHFCQUFBO0VDaENOOztFRG9DRTtJQUNJLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQ2pDTjs7RURvQ0U7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0VDakNOOztFRG9DRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ2pDTjs7RURvQ1UsOERBQUE7RUFDUjs7O0lBR0ksU0FBQTtJQUNBLHNCQUFBO0VDakNOOztFRG9DRTtJQUNJLFVBQUE7RUNqQ047O0VEb0NFO0lBQ0ksZ0JBQUE7RUNqQ047O0VEb0NFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSw0QkFBQTtFQ2pDTjs7RURvQ0U7SUFDSSxrQkFBQTtFQ2pDTjs7RURvQ0U7SUFDSSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ2pDTjs7RURvQ0U7SUFDSSxxQkFBQTtJQUNBLFVBQUE7RUNqQ047O0VEb0NFO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0VDakNOO0FBQ0Y7QURvQ0E7Ozs7d0NBQUE7QUFNQTtFQUNJO0lBQ0ksa0JBQUE7RUNuQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LXRhYi9yaWdodC10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoZSBmdWxsIHBhZ2UgaXMgb3JnYW5pc2VkIGluIHR3byBjb21wb25lbnRzLCB0aGUgcmlnaHQgb25lIGFuZCB0aGUgbGVmdCBvbmVcclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpdCB0aGUgaG9tZVxyXG4uaG9tZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDcyLCAyNDQpO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyX25hbWUge1xyXG4gICAgaGVpZ2h0OiA3MiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogNC41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbn1cclxuXHJcbi5naXQtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLy8tLS0tLU5pZ2h0IG1vZGUgYnV0dG9uLS0tLS0tLVxyXG4jbmlnaHRNb2RlQnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4jbmlnaHRNb2RlQnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxufVxyXG5cclxuLmJ1dHRvbi1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi8vLS0tLS1UcmFuc2xhdGlvbiBzZWxlY3RcclxuLy8tLS0tLVRoYW5rcyB0byBodHRwczovL2NvZGVwZW4uaW8vcGF2ZWx2YXJhdmtvL3Blbi9xam9qT3ItLS0tLVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5zZWxlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGxlZnQ6IDc1JTtcclxuICAgIHRvcDogNSU7XHJcbn1cclxuXHJcbi5zZWxlY3QtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxOyAvLyBUbyB0aGUgZnJvbnRcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgZm9jdXMgKi9cclxuLnNlbGVjdC10ZXh0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLyogVXNlIGN1c3RvbSBhcnJvdyAqL1xyXG4uc2VsZWN0IC5zZWxlY3QtdGV4dCB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uc2VsZWN0OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgLyogU3R5bGluZyB0aGUgZG93biBhcnJvdyAqL1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODIpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIExBQkVMID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uc2VsZWN0LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4vKiBhY3RpdmUgc3RhdGUgKi9cclxuLnNlbGVjdC10ZXh0OmZvY3VzIH4gLnNlbGVjdC1sYWJlbCxcclxuLnNlbGVjdC10ZXh0OnZhbGlkIH4gLnNlbGVjdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuLyogQk9UVE9NIEJBUlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5zZWxlY3QtYmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWxlY3QtYmFyOmJlZm9yZSxcclxuLnNlbGVjdC1iYXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3R0b206IDFweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4uc2VsZWN0LWJhcjpiZWZvcmUge1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4uc2VsZWN0LWJhcjphZnRlciB7XHJcbiAgICByaWdodDogNTAlO1xyXG59XHJcblxyXG4vKiBhY3RpdmUgc3RhdGUgKi9cclxuLnNlbGVjdC10ZXh0OmZvY3VzIH4gLnNlbGVjdC1iYXI6YmVmb3JlLFxyXG4uc2VsZWN0LXRleHQ6Zm9jdXMgfiAuc2VsZWN0LWJhcjphZnRlciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5zZWxlY3QtaGlnaGxpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGFib3V0IG1lXHJcbi5hYm91dC1tZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uYWJvdXQtcGhvdG8ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJlIHtcclxuICAgIGhlaWdodDogMTJlbTtcclxuICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1hcmdpbjogMTklO1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmFib3V0LWhlbGxvIHtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogMTMlO1xyXG59XHJcblxyXG4uYWJvdXQtZGVzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmFib3V0LWRhdGEge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG59XHJcblxyXG4uYWJvdXQtZGF0YS1sZWZ0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uYWJvdXQtZGF0YS1yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmFib3V0LWJ1dHRvbnMge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbn1cclxuXHJcbi5sYXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIHRpbWVsaW5lXHJcbi50aW1lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIHNraWxsc1xyXG4uc2tpbGxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnNraWxsLXNldCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uc2tpbGwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XHJcbn1cclxuXHJcbi5za2lsbC10aXRsZS1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uZmxhZyB7XHJcbiAgICB3aWR0aDogNyU7XHJcbn1cclxuLmZsYWctdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5za2lsbC1zZXQgaDIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBhZGRpbmctdG9wOiAxLjclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgbWFpbi1za2lsbHNcclxuLm1haW4tc2tpbGxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFpbi1za2lsbCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG59XHJcblxyXG4ubWFpbi1za2lsbDpob3ZlciB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgLyogSUUgOSAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyAvKiBTYWZhcmkgMy04ICovXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG59XHJcblxyXG4ubWFpbi1za2lsbCBpbWcge1xyXG4gICAgLy9UaGlzIGlzIHRvIGFsaWduIGEgcGljdHVyZSBpbiB0aGUgbWlkZHRlIG9mIGEgZGl2XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGV4dC1za2lsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNyU7XHJcbn1cclxuXHJcbi5za2lsbC1waWN0dXJlIHtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBhY2tub3dsZWRnZW1lbnRzXHJcbiNyZWNvbm9jaW1pZW50b3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1jYXJkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5iYWNrLWNhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYW5nZXJzXCIpO1xyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5yZXdhcmQge1xyXG4gICAgd2lkdGg6IDRlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgaGVpZ2h0OiAxMiU7XHJcbiAgICB3aWR0aDogODYlO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uZnJvbnQsXHJcbi5iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MiwgMjUyKTtcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUwLCA3MiwgMjQ0KSAwJSwgcmdiKDY1LCA4NiwgMjQ3KSAxMDAlKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgYm9yZGVyOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggOHB4IDFweCByZ2JhKGJsYWNrLCAwLjQpO1xyXG59XHJcblxyXG4ubGVmdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4ucmlnaHQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmZyb250ID4gcCxcclxuLmJhY2sgPiBwIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMjBweCk7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBleHBlcmllbmNlXHJcbi5leHBlcmllbmNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnBvc3QtZXhwZXJpZW5jZSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5sZWZ0LXBvc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbn1cclxuXHJcbi5yaWdodC1wb3N0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLnBvc3QtcGljdHVyZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGV4dC1wb3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGNvbnRhY3RcclxuI2NvbnRhY3RvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNvbnRhY3QtbGVmdCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uY29udGFjdC1taW5pIHtcclxuICAgIGhlaWdodDogMzMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY29udGFjdC1taW5pLWxlZnQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbnRhY3QtbWluaS1yaWdodCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmNvbnRhY3QtcmlnaHQge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbnRhY3QtaWNvbiB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ubGluay1jb250YWN0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4jZGFyay1mb3JtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNvbG9yOiByZ2IoNTAsIDcyLCAyNDQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vL0dlbmVyYWwgQW5pbWF0aW9uc1xyXG5cclxuLypcclxuKiBjb3JlIHN0eWxlc1xyXG4qL1xyXG5cclxuLnNtLWxpbmsge1xyXG4gICAgLS11aXNtTGlua0Rpc3BsYXk6IHZhcigtLXNtTGlua0Rpc3BsYXksIGlubGluZS1mbGV4KTtcclxuICAgIC0tdWlzbUxpbmtUZXh0Q29sb3I6IHZhcigtLXNtTGlua1RleHRDb2xvcik7XHJcbiAgICAtLXVpc21MaW5rVGV4dENvbG9ySG92ZXI6IHZhcigtLXNtTGlua1RleHRDb2xvckhvdmVyKTtcclxuXHJcbiAgICBkaXNwbGF5OiB2YXIoLS11aXNtTGlua0Rpc3BsYXkpO1xyXG4gICAgY29sb3I6IHZhcigtLXVpc21MaW5rVGV4dENvbG9yKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmEuc20tbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zbS1saW5rX19sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4vKiBzbS1saW5rX3BhZGRpbmctYWxsICovXHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbCB7XHJcbiAgICAtLXVpc21MaW5rTGluZVdlaWdodDogdmFyKC0tc21MaW5rTGluZVdlaWdodCwgMnB4KTtcclxuICAgIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XHJcbiAgICAtLXVpc21MaW5rUGFkZGluZzogdmFyKC0tc21MaW5rUGFkZGluZywgNXB4KTtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlIHtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmUsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjphZnRlcixcclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpc21MaW5rTGluZUNvbG9yKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXI6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXI6OmFmdGVyLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3ZlciAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXIgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBzbS1saW5rX3BhZGRpbmctYm90dG9tICovXHJcblxyXG4uc20tbGlua19wYWRkaW5nLWJvdHRvbSB7XHJcbiAgICAtLXVpc21MaW5rTGluZVdlaWdodDogdmFyKC0tc21MaW5rTGluZVdlaWdodCwgMnB4KTtcclxuICAgIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYm90dG9tOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aXNtTGlua0xpbmVDb2xvcik7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLyogc20tbGlua19iZyAqL1xyXG5cclxuLnNtLWxpbmtfYmcge1xyXG4gICAgLS11aXNtTGlua0xpbmVDb2xvcjogdmFyKC0tc21MaW5rTGluZUNvbG9yLCAjMDAwKTtcclxuICAgIC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIsICNmZmYpO1xyXG4gICAgLS11aXNtTGlua1BhZGRpbmc6IHZhcigtLXNtTGlua1BhZGRpbmcsIDVweCk7XHJcblxyXG4gICAgcGFkZGluZzogdmFyKC0tdWlzbUxpbmtQYWRkaW5nKTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5zbS1saW5rX2JnOjpiZWZvcmUsXHJcbi5zbS1saW5rX2JnOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAwLjJzIGVhc2Utb3V0IDAuMDNzO1xyXG59XHJcblxyXG4uc20tbGlua19iZyAuc20tbGlua19fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnNtLWxpbmtfYmc6aG92ZXI6OmJlZm9yZSxcclxuLnNtLWxpbmtfYmc6aG92ZXI6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cywgMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHM7XHJcbn1cclxuXHJcbi5zbS1saW5rX2JnOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcclxufVxyXG5cclxuLyogc20tbGlua190ZXh0ICovXHJcblxyXG4uc20tbGlua190ZXh0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXNtLWxpbmstdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3JIb3Zlcik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zbS1saW5rX3RleHQ6OmJlZm9yZSxcclxuLnNtLWxpbmtfdGV4dCAuc20tbGlua19fbGFiZWwge1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg2LCAwLjYsIDAuMDgsIDEuMDEpO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxufVxyXG5cclxuLnNtLWxpbmtfdGV4dDpob3Zlcjo6YmVmb3JlLFxyXG4uc20tbGlua190ZXh0OmhvdmVyIC5zbS1saW5rX19sYWJlbCB7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4vKiBlZmZlY3QgMyAqL1xyXG5cclxuLnNtLWxpbmszOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5zbS1saW5rMzpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpdCB0aGUgaG9tZVxyXG4gICAgLmhvbWUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml0IHRoZSBob21lXHJcbiAgICAuY29udGFpbmVyX25hbWUge1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41ZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5naXQtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgYWJvdXQgbWVcclxuICAgIC5hYm91dC1tZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LXBob3RvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICB3aWR0aDogODYlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWhlbGxvIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGhlaWdodDogOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWRhdGEge1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1kYXRhLWxlZnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1kYXRhLXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtYnV0dG9ucyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIyJTtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDMlIDMlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIG1haW4tc2tpbGxzXHJcbiAgICAubWFpbi1za2lsbHMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1za2lsbCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tc2tpbGwgaW1nIHtcclxuICAgICAgICAvL1RoaXMgaXMgdG8gYWxpZ24gYSBwaWN0dXJlIGluIHRoZSBtaWRkdGUgb2YgYSBkaXZcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtc2tpbGwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDclO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC1waWN0dXJlIHtcclxuICAgICAgICBoZWlnaHQ6IDdlbTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMyU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC10aXRsZS1jb2x1bW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsYWcge1xyXG4gICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsYWctdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgY29udGFjdFxyXG4gICAgI2NvbnRhY3RvIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtbGVmdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LW1pbmkge1xyXG4gICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtbWluaS1sZWZ0IHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1taW5pLXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDg2JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAucG9zdC1leHBlcmllbmNlIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAvL01vYmlsZSB2aWV3IGZvciB0aGUgYXdhcmRzIGNhcmRcclxuICAgICNyZWNvbm9jaW1pZW50b3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDogMTQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFjay1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuXHJcbiAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYW5nZXJzXCIpO1xyXG4gICAgKixcclxuICAgICo6OmJlZm9yZSxcclxuICAgICo6OmFmdGVyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAucmV3YXJkIHtcclxuICAgICAgICB3aWR0aDogNGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdF9jYXJkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDE2JTtcclxuICAgICAgICB3aWR0aDogODYlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2sge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdC1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc20tbGlua19fbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIFRBQkxFVCBWSUVXXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpIHtcclxuICAgIC5iYWNrIHtcclxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFuZ2Vyc1wiKTtcbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi10b3A6IDIuNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cblxuLmhvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0OGY0O1xuICBoZWlnaHQ6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXJfbmFtZSB7XG4gIGhlaWdodDogNzIlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiA0LjVlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMyU7XG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xufVxuXG4uZ2l0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDclO1xufVxuXG4uYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMiU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4jbmlnaHRNb2RlQnV0dG9uIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDEwJTtcbiAgei1pbmRleDogMTtcbn1cblxuI25pZ2h0TW9kZUJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cblxuLmJ1dHRvbi1pbWFnZSB7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1JTtcbiAgbGVmdDogNzUlO1xuICB0b3A6IDUlO1xufVxuXG4uc2VsZWN0LXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLyogUmVtb3ZlIGZvY3VzICovXG4uc2VsZWN0LXRleHQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLyogVXNlIGN1c3RvbSBhcnJvdyAqL1xuLnNlbGVjdCAuc2VsZWN0LXRleHQge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5zZWxlY3Q6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIC8qIFN0eWxpbmcgdGhlIGRvd24gYXJyb3cgKi9cbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODIpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogTEFCRUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uc2VsZWN0LWxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbn1cblxuLyogYWN0aXZlIHN0YXRlICovXG4uc2VsZWN0LXRleHQ6Zm9jdXMgfiAuc2VsZWN0LWxhYmVsLFxuLnNlbGVjdC10ZXh0OnZhbGlkIH4gLnNlbGVjdC1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0b3A6IC0yMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zZWxlY3QtYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3QtYmFyOmJlZm9yZSxcbi5zZWxlY3QtYmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAwO1xuICBib3R0b206IDFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufVxuXG4uc2VsZWN0LWJhcjpiZWZvcmUge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5zZWxlY3QtYmFyOmFmdGVyIHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLyogYWN0aXZlIHN0YXRlICovXG4uc2VsZWN0LXRleHQ6Zm9jdXMgfiAuc2VsZWN0LWJhcjpiZWZvcmUsXG4uc2VsZWN0LXRleHQ6Zm9jdXMgfiAuc2VsZWN0LWJhcjphZnRlciB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIEhJR0hMSUdIVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zZWxlY3QtaGlnaGxpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDYwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICB0b3A6IDI1JTtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmFib3V0LW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNzAlO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmFib3V0LXBob3RvIHtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMTJlbTtcbiAgd2lkdGg6IDEyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogMTklO1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgYm9yZGVyOiAwLjJlbSBzb2xpZCB3aGl0ZTtcbn1cblxuLmFib3V0LXRleHQge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYWJvdXQtaGVsbG8ge1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDEzJTtcbn1cblxuLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgaGVpZ2h0OiAzMCU7XG4gIGNvbG9yOiAjOTY5Njk2O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uYWJvdXQtZGF0YSB7XG4gIGhlaWdodDogMjAlO1xuICBjb2xvcjogIzk2OTY5Njtcbn1cblxuLmFib3V0LWRhdGEtbGVmdCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYWJvdXQtZGF0YS1yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYWJvdXQtYnV0dG9ucyB7XG4gIGhlaWdodDogMzAlO1xufVxuXG4ubGFzdCB7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4uZmlyc3Qge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnRpbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5za2lsbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbi5za2lsbC1zZXQge1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5za2lsbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMyNDhmNDtcbn1cblxuLnNraWxsLXRpdGxlLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ5JTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5mbGFnIHtcbiAgd2lkdGg6IDclO1xufVxuXG4uZmxhZy10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uc2tpbGwtc2V0IGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXRvcDogMS43JTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuLm1haW4tc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLXNraWxsIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5tYWluLXNraWxsOmhvdmVyIHtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAvKiBTYWZhcmkgMy04ICovXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG59XG5cbi5tYWluLXNraWxsIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGV4dC1za2lsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDclO1xufVxuXG4uc2tpbGwtcGljdHVyZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nLXRvcDogMjAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTMlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNyZWNvbm9jaW1pZW50b3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmRlc2NyaXB0aW9uLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iYWNrLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5yZXdhcmQge1xuICB3aWR0aDogNGVtO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMTIlO1xuICB3aWR0aDogODYlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4uZnJvbnQsXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmY2ZjO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJvcmRlcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5sZWZ0LWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5yaWdodC1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAlO1xufVxuXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZnJvbnQgPiBwLFxuLmJhY2sgPiBwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEyMHB4KTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5wb3N0LWV4cGVyaWVuY2Uge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubGVmdC1wb3N0IHtcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcbn1cblxuLnJpZ2h0LXBvc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnBvc3QtcGljdHVyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQtcG9zdCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4jY29udGFjdG8ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250YWN0LWxlZnQge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jb250YWN0LW1pbmkge1xuICBoZWlnaHQ6IDMzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5jb250YWN0LW1pbmktbGVmdCB7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QtbWluaS1yaWdodCB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDQlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY29udGFjdC1yaWdodCB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QtaWNvbiB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5saW5rLWNvbnRhY3Qge1xuICBsaW5lLWhlaWdodDogMC41O1xufVxuXG5oMiB7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4jZGFyay1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMzI0OGY0ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0OGY0ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLypcbiogY29yZSBzdHlsZXNcbiovXG4uc20tbGluayB7XG4gIC0tdWlzbUxpbmtEaXNwbGF5OiB2YXIoLS1zbUxpbmtEaXNwbGF5LCBpbmxpbmUtZmxleCk7XG4gIC0tdWlzbUxpbmtUZXh0Q29sb3I6IHZhcigtLXNtTGlua1RleHRDb2xvcik7XG4gIC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIpO1xuICBkaXNwbGF5OiB2YXIoLS11aXNtTGlua0Rpc3BsYXkpO1xuICBjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmEuc20tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNtLWxpbmtfX2xhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIHNtLWxpbmtfcGFkZGluZy1hbGwgKi9cbi5zbS1saW5rX3BhZGRpbmctYWxsIHtcbiAgLS11aXNtTGlua0xpbmVXZWlnaHQ6IHZhcigtLXNtTGlua0xpbmVXZWlnaHQsIDJweCk7XG4gIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XG4gIC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xuICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcbiAgbGVmdDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmJlZm9yZSB7XG4gIHRvcDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXIge1xuICB3aWR0aDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyLFxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUsXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyOjphZnRlcixcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXIgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIHNtLWxpbmtfcGFkZGluZy1ib3R0b20gKi9cbi5zbS1saW5rX3BhZGRpbmctYm90dG9tIHtcbiAgLS11aXNtTGlua0xpbmVXZWlnaHQ6IHZhcigtLXNtTGlua0xpbmVXZWlnaHQsIDJweCk7XG4gIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS11aXNtTGlua0xpbmVXZWlnaHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYm90dG9tOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpc21MaW5rTGluZUNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi8qIHNtLWxpbmtfYmcgKi9cbi5zbS1saW5rX2JnIHtcbiAgLS11aXNtTGlua0xpbmVDb2xvcjogdmFyKC0tc21MaW5rTGluZUNvbG9yLCAjMDAwKTtcbiAgLS11aXNtTGlua1RleHRDb2xvckhvdmVyOiB2YXIoLS1zbUxpbmtUZXh0Q29sb3JIb3ZlciwgI2ZmZik7XG4gIC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xuICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xufVxuXG4uc20tbGlua19iZzo6YmVmb3JlLFxuLnNtLWxpbmtfYmc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1vdXQgMC4wM3M7XG59XG5cbi5zbS1saW5rX2JnIC5zbS1saW5rX19sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLnNtLWxpbmtfYmc6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX2JnOmhvdmVyOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzLCAwLjM1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzO1xufVxuXG4uc20tbGlua19iZzpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcbn1cblxuLyogc20tbGlua190ZXh0ICovXG4uc20tbGlua190ZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtc20tbGluay10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXVpc21MaW5rVGV4dENvbG9ySG92ZXIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zbS1saW5rX3RleHQ6OmJlZm9yZSxcbi5zbS1saW5rX3RleHQgLnNtLWxpbmtfX2xhYmVsIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODYsIDAuNiwgMC4wOCwgMS4wMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5zbS1saW5rX3RleHQ6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX3RleHQ6aG92ZXIgLnNtLWxpbmtfX2xhYmVsIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLyogZWZmZWN0IDMgKi9cbi5zbS1saW5rMzo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnNtLWxpbmszOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1heC13aWR0aDogOTUlO1xuICB9XG5cbiAgLmhvbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jb250YWluZXJfbmFtZSB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuZ2l0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICB9XG5cbiAgLmFib3V0LW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5hYm91dC1waG90byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiAxMmVtO1xuICAgIHdpZHRoOiAxMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xuICB9XG5cbiAgLmFib3V0LXRleHQge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICAgIHdpZHRoOiA4NiU7XG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5hYm91dC1oZWxsbyB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDglO1xuICB9XG5cbiAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG5cbiAgLmFib3V0LWRhdGEge1xuICAgIGhlaWdodDogMTUlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgfVxuXG4gIC5hYm91dC1kYXRhLWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICB9XG5cbiAgLmFib3V0LWRhdGEtcmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICB9XG5cbiAgLmFib3V0LWJ1dHRvbnMge1xuICAgIHBhZGRpbmctdG9wOiAyMiU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgIHBhZGRpbmc6IDMlIDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICB9XG5cbiAgLm1haW4tc2tpbGxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0OGY0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA0JTtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubWFpbi1za2lsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAubWFpbi1za2lsbCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50ZXh0LXNraWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA3JTtcbiAgICBmb250LXNpemU6IDAuOTRlbTtcbiAgfVxuXG4gIC5za2lsbC1waWN0dXJlIHtcbiAgICBoZWlnaHQ6IDdlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNraWxsLXRpdGxlLWNvbHVtbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5mbGFnIHtcbiAgICB3aWR0aDogNDclO1xuICB9XG5cbiAgLmZsYWctdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWluLXdpZHRoOiA4MCU7XG4gIH1cblxuICAjY29udGFjdG8ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb250YWN0LWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5jb250YWN0LW1pbmkge1xuICAgIGhlaWdodDogMzMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gIH1cblxuICAuY29udGFjdC1taW5pLWxlZnQge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmNvbnRhY3QtbWluaS1yaWdodCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuY29udGFjdC1yaWdodCB7XG4gICAgd2lkdGg6IDg2JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cblxuICAuY29udGFjdC1pY29uIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLnBvc3QtZXhwZXJpZW5jZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAjcmVjb25vY2ltaWVudG9zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDE0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5iYWNrLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFuZ2Vyc1wiKTtcbiAgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5yZXdhcmQge1xuICAgIHdpZHRoOiA0ZW07XG4gIH1cblxuICAuZmlyc3RfY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogLTE1JTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBoZWlnaHQ6IDE2JTtcbiAgICB3aWR0aDogODYlO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cblxuICAuYmFjayB7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICB9XG5cbiAgLmxlZnQtY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuXG4gIC5yaWdodC1jYXJkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuXG4gIC5zbS1saW5rX19sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gIH1cbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBUQUJMRVQgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgLmJhY2sge1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-right-tab",
                templateUrl: "./right-tab.component.html",
                providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__["LeftTabComponent"]],
                styleUrls: ["./right-tab.component.scss"],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_3__["LeftTabComponent"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();
class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 9, vars: 0, consts: [[1, "popup-content"], [1, "popup-left"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "popup-picture"], [1, "popup-right"], [1, "popup-text-post"], [1, "popup-text-description"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Voluntario evento tecnol\u00F3gico T3chfest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Voluntario en el T3chfest, la feria de inform\u00E1tica y nuevas tecnolog\u00EDas en la Universidad Carlos III de Madrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".popup-content[_ngcontent-%COMP%]{\n    height: auto;\n    width: 500px;\n}\n\n.popup-left[_ngcontent-%COMP%]{\n    width: 50%;\n    display: inline-block;\n}\n\n.popup-right[_ngcontent-%COMP%]{\n    width: 50%;\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 1%;\n}\n\n.popup-picture[_ngcontent-%COMP%]{\n    width: 70%;\n    border-radius: 5%;\n}\n.popup-text-post[_ngcontent-%COMP%]{\n    font-size: 2em;\n    font-weight: bold;\n    text-align: justify;\n}\n\n.popup-text-description[_ngcontent-%COMP%]{\n    margin-top: 6%;\n    text-align: justify;\n}\n\n\n\n@media only screen and (max-width: 600px){\n    .popup-content[_ngcontent-%COMP%]{\n        height: auto;\n        width: 250px;\n    }\n\n    .popup-left[_ngcontent-%COMP%]{\n        width: 100%;\n        display: inline-block;\n    }\n\n    .popup-right[_ngcontent-%COMP%]{\n        width: 100%;\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 1%;\n    }\n \n    .popup-picture[_ngcontent-%COMP%]{\n        width: 100%;\n        border-radius: 5%;\n    }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "dialog-content-example-dialog",
                templateUrl: "dialog-content-example-dialog.html",
            }]
    }], null, null); })();
class DialogContentExampleDialog2 {
}
DialogContentExampleDialog2.ɵfac = function DialogContentExampleDialog2_Factory(t) { return new (t || DialogContentExampleDialog2)(); };
DialogContentExampleDialog2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogContentExampleDialog2, selectors: [["dialog-content-example-dialog-2"]], decls: 9, vars: 0, consts: [[1, "popup-content"], [1, "popup-left"], ["src", "../../assets/images/uc3m.png", 1, "popup-picture"], [1, "popup-right"], [1, "popup-text-post"], [1, "popup-text-description"]], template: function DialogContentExampleDialog2_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ense\u00F1anza de mater\u00EDas STEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".popup-content[_ngcontent-%COMP%]{\n        height: auto;\n        width: 500px;\n    }\n    \n    .popup-left[_ngcontent-%COMP%]{\n        width: 50%;\n        display: inline-block;\n    }\n    \n    .popup-right[_ngcontent-%COMP%]{\n        width: 50%;\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 1%;\n    }\n    \n    .popup-picture[_ngcontent-%COMP%]{\n        width: 70%;\n        border-radius: 5%;\n    }\n    .popup-text-post[_ngcontent-%COMP%]{\n        font-size: 2em;\n        font-weight: bold;\n        text-align: justify;\n    }\n    \n    .popup-text-description[_ngcontent-%COMP%]{\n        margin-top: 6%;\n        text-align: justify;\n    }\n\n    \n\n    @media only screen and (max-width: 600px){\n        .popup-content[_ngcontent-%COMP%]{\n            height: auto;\n            width: 250px;\n        } \n        .popup-picture[_ngcontent-%COMP%]{\n            width: 100%;\n            border-radius: 5%;\n        }\n\n        .popup-left[_ngcontent-%COMP%]{\n            width: 100%;\n            display: inline-block;\n        }\n\n        .popup-right[_ngcontent-%COMP%]{\n            width: 100%;\n            display: inline-block;\n            vertical-align: top;\n            margin-top: 1%;\n        }\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "dialog-content-example-dialog-2",
                templateUrl: "dialog-content-example-dialog-2.html",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/speed-dial-fab/speed-dial-fab.animations.ts":
/*!*************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.animations.ts ***!
  \*************************************************************/
/*! exports provided: speedDialFabAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speedDialFabAnimations", function() { return speedDialFabAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const speedDialFabAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fabToggler', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(0deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(225deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('speedDialStagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('40ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(10px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                ]))
            ]), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            ])), { optional: true })
        ])
    ])
];


/***/ }),

/***/ "./src/app/speed-dial-fab/speed-dial-fab.component.ts":
/*!************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.component.ts ***!
  \************************************************************/
/*! exports provided: SpeedDialFabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedDialFabComponent", function() { return SpeedDialFabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speed-dial-fab.animations */ "./src/app/speed-dial-fab/speed-dial-fab.animations.ts");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../left-tab/left-tab.component */ "./src/app/left-tab/left-tab.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function SpeedDialFabComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [""]; };
function SpeedDialFabComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fragment", btn_r16.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r16.icon);
} }
const _c1 = function (a0) { return { value: a0 }; };
class SpeedDialFabComponent {
    constructor(leftTab) {
        this.leftTab = leftTab;
        this.buttons = [];
        this.fabTogglerState = "inactive";
    }
    ngOnInit() {
        const maxButtons = 7;
        if (this.options.buttons.length > maxButtons) {
            this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
        }
    }
    showItems() {
        this.fabTogglerState = "active";
        this.buttons = this.options.buttons;
    }
    hideItems() {
        this.fabTogglerState = "inactive";
        this.buttons = [];
    }
    toggle() {
        this.buttons.length ? this.hideItems() : this.showItems();
    }
}
SpeedDialFabComponent.ɵfac = function SpeedDialFabComponent_Factory(t) { return new (t || SpeedDialFabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"])); };
SpeedDialFabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpeedDialFabComponent, selectors: [["app-speed-dial-fab"]], inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]])], decls: 7, vars: 6, consts: [["id", "fab-dismiss", 3, "click", 4, "ngIf"], [1, "fab-container"], ["mat-fab", "", "color", "warn", 1, "fab-toggler", 3, "click"], [1, "material-icons"], ["mat-mini-fab", "", "class", "fab-secondary", "color", "secondary", 4, "ngFor", "ngForOf"], ["id", "fab-dismiss", 3, "click"], ["mat-mini-fab", "", "color", "secondary", 1, "fab-secondary"], [3, "routerLink", "fragment"]], template: function SpeedDialFabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpeedDialFabComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpeedDialFabComponent_button_6_Template, 4, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fabTogglerState === "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fabToggler", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.fabTogglerState));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@speedDialStagger", ctx.buttons.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".fab-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n}\n.fab-toggler[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n#fab-dismiss[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlZWQtZGlhbC1mYWIvQzpcXFVzZXJzXFxraWtlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXE15LXBlcnNvbmFsLXdlYnBhZ2Uvc3JjXFxhcHBcXHNwZWVkLWRpYWwtZmFiXFxzcGVlZC1kaWFsLWZhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3BlZWQtZGlhbC1mYWIvc3BlZWQtZGlhbC1mYWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQ007RUFDRSxtQkFBQTtBQ0NSO0FESUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc3BlZWQtZGlhbC1mYWIvc3BlZWQtZGlhbC1mYWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWItdG9nZ2xlciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG4gIFxyXG4gICNmYWItZGlzbWlzcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gICAgIiwiLmZhYi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZhYi1jb250YWluZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5mYWItY29udGFpbmVyID4gZGl2IGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbi5mYWItdG9nZ2xlciB7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4jZmFiLWRpc21pc3Mge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"], data: { animation: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeedDialFabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-speed-dial-fab",
                templateUrl: "./speed-dial-fab.component.html",
                styleUrls: ["./speed-dial-fab.component.scss"],
                providers: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]],
                animations: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"],
            }]
    }], function () { return [{ type: _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/tab-header/tab-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tab-header/tab-header.component.ts ***!
  \****************************************************/
/*! exports provided: TabHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function() { return TabHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TabHeaderComponent {
    constructor() {
        this.header = document.getElementsByClassName("header");
    }
    ngOnInit() { }
    toDark() {
        for (var i = 0, len = this.header.length; i < len; i++) {
            this.header[i].style.color = "#FFFFFF";
        }
    }
    toLight() {
        for (var i = 0, len = this.header.length; i < len; i++) {
            this.header[i].style.color = "black";
        }
    }
}
TabHeaderComponent.ɵfac = function TabHeaderComponent_Factory(t) { return new (t || TabHeaderComponent)(); };
TabHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabHeaderComponent, selectors: [["app-tab-header"]], inputs: { parentData: "parentData" }, decls: 3, vars: 1, consts: [[1, "header"], [1, "underline--magical"]], template: function TabHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parentData);
    } }, styles: [".header[_ngcontent-%COMP%] {\n  height: 10%;\n  font-weight: bold;\n  font-size: xx-large;\n  color: black;\n  padding-top: 7%;\n  padding-left: 7%;\n}\n\n.underline--magical[_ngcontent-%COMP%] {\n  background-image: linear-gradient(120deg, #3248F4 0%, #8fd3f4 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 0.2em;\n  background-position: 0 88%;\n  transition: background-size 0.25s ease-in;\n}\n\n.underline--magical[_ngcontent-%COMP%]:hover {\n  background-size: 100% 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiLWhlYWRlci9DOlxcVXNlcnNcXGtpa2VsXFxEb2N1bWVudHNcXEdpdEh1YlxcTXktcGVyc29uYWwtd2VicGFnZS9zcmNcXGFwcFxcdGFiLWhlYWRlclxcdGFiLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFiLWhlYWRlci90YWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxtRUFBQTtFQUVBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlDQUFBO0FDREo7O0FERUk7RUFDRSx5QkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvdGFiLWhlYWRlci90YWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3JTtcclxufVxyXG5cclxuLy9BbmltYXRpb25zIGZvciB0aGUgdW5kZXJsaW5lZCBlbGVtZW50c1xyXG4udW5kZXJsaW5lLS1tYWdpY2FsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzMjQ4RjQgMCUsICM4ZmQzZjQgMTAwJSk7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzMjQ4RjQgMCUsICNGRjAxMUQgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDAuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA4OCU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4yNXMgZWFzZS1pbjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgODglO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiIsIi5oZWFkZXIge1xuICBoZWlnaHQ6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy10b3A6IDclO1xuICBwYWRkaW5nLWxlZnQ6IDclO1xufVxuXG4udW5kZXJsaW5lLS1tYWdpY2FsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzMyNDhGNCAwJSwgIzhmZDNmNCAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDAuMmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDg4JTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuMjVzIGVhc2UtaW47XG59XG4udW5kZXJsaW5lLS1tYWdpY2FsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDg4JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tab-header",
                templateUrl: "./tab-header.component.html",
                styleUrls: ["./tab-header.component.scss"],
            }]
    }], function () { return []; }, { parentData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class TimelineComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() { }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 33, vars: 12, consts: [[1, "timeline"], [1, "timeline-event"], [1, "timeline-event-icon"], [1, "timeline-event-copy"], [1, "timeline-event-thumbnail"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2017 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Menci\u00F3n en computaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2019 - 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Politechnika Warszawska");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bachelor in Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Erasmus+ Grado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "education.uc3m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "education.madrid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "education.uc3m_studies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, "education.warsaw"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);\n\n\nbody[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: 0.05em;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  margin: 4em auto;\n  position: relative;\n  max-width: 46em;\n}\n.timeline[_ngcontent-%COMP%]:before {\n  background-color: black;\n  content: \"\";\n  margin-left: -1px;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 2px;\n  height: 100%;\n}\n.timeline-event[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-icon[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  background-color: #3248f4;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-thumbnail[_ngcontent-%COMP%] {\n  box-shadow: inset 40em 0 0 0 #3248f4;\n}\n.timeline-event-copy[_ngcontent-%COMP%] {\n  padding: 2em;\n  position: relative;\n  top: -1.875em;\n  left: 4em;\n  width: 80%;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1.2em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.timeline-event-thumbnail) {\n  padding-bottom: 1.2em;\n}\n.timeline-event-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in;\n  transform: rotate(45deg);\n  background-color: black;\n  outline: 10px solid white;\n  display: block;\n  margin: 0.5em 0.5em 0.5em -0.5em;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 1em;\n  height: 1em;\n}\n.timeline-event-thumbnail[_ngcontent-%COMP%] {\n  -webkit-transition: box-shadow 0.5s ease-in;\n  -webkit-transition-delay: 0.1s;\n  transition: box-shadow 0.5s ease-in 0.1s;\n  color: white;\n  font-size: 0.75em;\n  background-color: black;\n  box-shadow: inset 0 0 0 0em #3248f4;\n  display: inline-block;\n  margin-bottom: 1.2em;\n  padding: 0.25em 1em 0.2em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvQzpcXFVzZXJzXFxraWtlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXE15LXBlcnNvbmFsLXdlYnBhZ2Uvc3JjXFxhcHBcXHRpbWVsaW5lXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL0M6XFxVc2Vyc1xca2lrZWxcXERvY3VtZW50c1xcR2l0SHViXFxNeS1wZXJzb25hbC13ZWJwYWdlL25vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3NoYXJlZC5zY3NzIiwic3JjL2FwcC90aW1lbGluZS9DOlxcVXNlcnNcXGtpa2VsXFxEb2N1bWVudHNcXEdpdEh1YlxcTXktcGVyc29uYWwtd2VicGFnZS9ub2RlX21vZHVsZXNcXGNvbXBhc3MtbWl4aW5zXFxsaWJcXGNvbXBhc3NcXGNzczNcXF9ib3gtc2l6aW5nLnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL0M6XFxVc2Vyc1xca2lrZWxcXERvY3VtZW50c1xcR2l0SHViXFxNeS1wZXJzb25hbC13ZWJwYWdlL25vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3RyYW5zZm9ybS5zY3NzIiwic3JjL2FwcC90aW1lbGluZS9DOlxcVXNlcnNcXGtpa2VsXFxEb2N1bWVudHNcXEdpdEh1YlxcTXktcGVyc29uYWwtd2VicGFnZS9ub2RlX21vZHVsZXNcXGNvbXBhc3MtbWl4aW5zXFxsaWJcXGNvbXBhc3NcXGNzczNcXF9ib3gtc2hhZG93LnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL0M6XFxVc2Vyc1xca2lrZWxcXERvY3VtZW50c1xcR2l0SHViXFxNeS1wZXJzb25hbC13ZWJwYWdlL25vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3RyYW5zaXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUVEsc0VBQUE7QUFOUixjQUFBO0FBS0EsVUFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUEsV0FBQTtBQUNBO0VFRWlFLHNCQ1gxRDtBRk9QO0FETUEsWUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNIRjtBREtFO0VBQ0UsdUJBekJNO0VBMEJOLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0hKO0FET0E7RUFDRSxrQkFBQTtBQ0pGO0FEUUk7RUV6QjZELHlCRTZTdkQ7RUpsUkoseUJBekNJO0FDdUNWO0FES0k7RUU5QjZELG9DRzBCckQ7QUpJWjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7QURLRTtFQUNFLGlCQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSjtBRFFFO0VBQ0UscUJBQUE7QUNOSjtBRFVBO0VNNEcwRCxrQ0FyQ3ZDO0VKcEk4Qyx3QkU2U3ZEO0VKNU9SLHVCQWpGUTtFQWtGUix5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUE7RU13RmtELDJDQUwvQjtFQU95Qiw4QkFUL0I7RUFZNkMsd0NBckN2QztFTnREakIsWUE3RlE7RUE4RlIsaUJBQUE7RUFFQSx1QkFqR1E7RUVnQnVELG1DRzBCckQ7RUx5RFYscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35jb21wYXNzLW1peGlucy9saWIvY29tcGFzcy9jc3MzJztcclxuXHJcbi8qIFZhcmlhYmxlcyAqL1xyXG4kY29sb3ItMTogYmxhY2s7XHJcbiRjb2xvci0yOiB3aGl0ZTtcclxuJGNvbG9yLTM6IHJnYig1MCwgNzIsIDI0NCk7XHJcblxyXG4vKiBGb250cyAqL1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw3MDApO1xyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxufVxyXG5cclxuLyogTGF5b3V0ICovXHJcbioge1xyXG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgKi9cclxuLnRpbWVsaW5lIHtcclxuICBtYXJnaW46IDRlbSBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDQ2ZW07XHJcbiAgXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMmVtO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gIFxyXG4gICAgLnRpbWVsaW5lLWV2ZW50LWljb24ge1xyXG4gICAgICBAaW5jbHVkZSByb3RhdGUgKC00NWRlZyk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsIHtcclxuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCA0MGVtIDAgMCAwICRjb2xvci0zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudC1jb3B5IHtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEuODc1ZW07XHJcbiAgbGVmdDogNGVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICB9XHJcbiAgXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIHA6bm90KC50aW1lbGluZS1ldmVudC10aHVtYm5haWwpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudC1pY29uIHtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4pO1xyXG4gIEBpbmNsdWRlIHJvdGF0ZSAoNDVkZWcpO1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0xO1xyXG4gIG91dGxpbmU6IDEwcHggc29saWQgJGNvbG9yLTI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwLjVlbSAtMC41ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyZW07XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWV2ZW50LXRodW1ibmFpbCB7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3gtc2hhZG93IDAuNXMgZWFzZS1pbiAwLjFzKTtcclxuICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XHJcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDAgMCAwZW0gcmdiKDUwLCA3MiwgMjQ0KSk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAxZW0gMC4yZW0gMWVtO1xyXG59IiwiLyogVmFyaWFibGVzICovXG4vKiBGb250cyAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNzAwKTtcbmJvZHkge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLyogTGF5b3V0ICovXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFN0eWxpbmcgKi9cbi50aW1lbGluZSB7XG4gIG1hcmdpbjogNGVtIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA0NmVtO1xufVxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb250ZW50OiBcIlwiO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDJlbTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGltZWxpbmUtZXZlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGltZWxpbmUtZXZlbnQ6aG92ZXIgLnRpbWVsaW5lLWV2ZW50LWljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG59XG4udGltZWxpbmUtZXZlbnQ6aG92ZXIgLnRpbWVsaW5lLWV2ZW50LXRodW1ibmFpbCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgNDBlbSAwIDAgMCAjMzI0OGY0O1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDQwZW0gMCAwIDAgIzMyNDhmNDtcbiAgYm94LXNoYWRvdzogaW5zZXQgNDBlbSAwIDAgMCAjMzI0OGY0O1xufVxuXG4udGltZWxpbmUtZXZlbnQtY29weSB7XG4gIHBhZGRpbmc6IDJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xLjg3NWVtO1xuICBsZWZ0OiA0ZW07XG4gIHdpZHRoOiA4MCU7XG59XG4udGltZWxpbmUtZXZlbnQtY29weSBoMyB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xufVxuLnRpbWVsaW5lLWV2ZW50LWNvcHkgaDQge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbn1cbi50aW1lbGluZS1ldmVudC1jb3B5IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGltZWxpbmUtZXZlbnQtY29weSBwOm5vdCgudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsKSB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcbn1cblxuLnRpbWVsaW5lLWV2ZW50LWljb24ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiAxMHB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwLjVlbSAtMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyZW07XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xufVxuXG4udGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIC1vLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDBlbSAjMzI0OGY0O1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDBlbSAjMzI0OGY0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwZW0gIzMyNDhmNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgcGFkZGluZzogMC4yNWVtIDFlbSAwLjJlbSAxZW07XG59IiwiQGltcG9ydCBcIi4uL3N1cHBvcnRcIjtcblxuLy8gVGhpcyBtaXhpbiBwcm92aWRlcyBiYXNpYyBzdXBwb3J0IGZvciBDU1MzIHByb3BlcnRpZXMgYW5kXG4vLyB0aGVpciBjb3JyZXNwb25kaW5nIGV4cGVyaW1lbnRhbCBDU1MyIHByb3BlcnRpZXMgd2hlblxuLy8gdGhlIGltcGxlbWVudGF0aW9ucyBhcmUgaWRlbnRpY2FsIGV4Y2VwdCBmb3IgdGhlIHByb3BlcnR5XG4vLyBwcmVmaXguXG5AbWl4aW4gZXhwZXJpbWVudGFsKCRwcm9wZXJ0eSwgJHZhbHVlLFxuICAkbW96ICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEsXG4gICR3ZWJraXQgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0LFxuICAkbyAgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhLFxuICAkbXMgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1pY3Jvc29mdCxcbiAgJGtodG1sICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1raHRtbCxcbiAgJG9mZmljaWFsIDogdHJ1ZVxuKSB7XG4gIEBpZiAkd2Via2l0ICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQgICAgeyAtd2Via2l0LSN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxuICBAaWYgJGtodG1sICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwgICAgIHsgIC1raHRtbC0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRtb3ogICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEgICB7ICAgIC1tb3otI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG4gIEBpZiAkbXMgICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1taWNyb3NvZnQgeyAgICAgLW1zLSN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxuICBAaWYgJG8gICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgICAgICAtby0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRvZmZpY2lhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG59XG5cbi8vIFNhbWUgYXMgZXhwZXJpbWVudGFsKCksIGJ1dCBmb3IgY2FzZXMgd2hlbiB0aGUgcHJvcGVydHkgaXMgdGhlIHNhbWUgYW5kIHRoZSB2YWx1ZSBpcyB2ZW5kb3JpemVkXG5AbWl4aW4gZXhwZXJpbWVudGFsLXZhbHVlKCRwcm9wZXJ0eSwgJHZhbHVlLFxuICAkbW96ICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEsXG4gICR3ZWJraXQgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0LFxuICAkbyAgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhLFxuICAkbXMgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1pY3Jvc29mdCxcbiAgJGtodG1sICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1raHRtbCxcbiAgJG9mZmljaWFsIDogdHJ1ZVxuKSB7XG4gIEBpZiAkd2Via2l0ICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQgICAgeyAjeyRwcm9wZXJ0eX0gOiAtd2Via2l0LSN7JHZhbHVlfTsgfVxuICBAaWYgJGtodG1sICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwgICAgIHsgI3skcHJvcGVydHl9IDogIC1raHRtbC0jeyR2YWx1ZX07IH1cbiAgQGlmICRtb3ogICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEgICB7ICN7JHByb3BlcnR5fSA6ICAgIC1tb3otI3skdmFsdWV9OyB9XG4gIEBpZiAkbXMgICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1taWNyb3NvZnQgeyAjeyRwcm9wZXJ0eX0gOiAgICAgLW1zLSN7JHZhbHVlfTsgfVxuICBAaWYgJG8gICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgI3skcHJvcGVydHl9IDogICAgICAtby0jeyR2YWx1ZX07IH1cbiAgQGlmICRvZmZpY2lhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICN7JHByb3BlcnR5fSA6ICAgICAgICAgI3skdmFsdWV9OyB9XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi8vIENoYW5nZSB0aGUgYm94IG1vZGVsIGZvciBNb3ppbGxhLCBXZWJraXQsIElFOCBhbmQgdGhlIGZ1dHVyZVxuLy9cbi8vIEBwYXJhbSAkYnNcbi8vICAgWyBjb250ZW50LWJveCB8IGJvcmRlci1ib3ggXVxuXG5AbWl4aW4gYm94LXNpemluZygkYnMpIHtcbiAgJGJzOiB1bnF1b3RlKCRicyk7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbChib3gtc2l6aW5nLCAkYnMsXG4gICAgLW1veiwgLXdlYmtpdCwgbm90KC1vKSwgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuIiwiQGltcG9ydCBcInNoYXJlZFwiO1xuXG4vLyBAZG9jIG9mZlxuLy8gTm90ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTYWZhcmksIENocm9tZSwgYW5kIEZpcmVmb3ggYWxsIHN1cHBvcnQgM0QgdHJhbnNmb3Jtcy4gSG93ZXZlcixcbi8vIG9ubHkgaW4gdGhlIG1vc3QgcmVjZW50IGJ1aWxkcy4gWW91IHNob3VsZCBhbHNvIHByb3ZpZGUgZmFsbGJhY2sgMmQgc3VwcG9ydCBmb3Jcbi8vIE9wZXJhIGFuZCBJRS4gSUUxMCBpcyBzbGF0ZWQgdG8gaGF2ZSAzZCBlbmFibGVkLCBidXQgaXMgY3VycmVudGx5IHVucmVsZWFzZWQuXG4vLyBUbyBtYWtlIHRoYXQgZWFzeSwgYWxsIDJEIHRyYW5zZm9ybXMgaW5jbHVkZSBhbiBicm93c2VyLXRhcmdldGluZyB0b2dnbGUgKCRvbmx5M2QpXG4vLyB0byBzd2l0Y2ggYmV0d2VlbiB0aGUgdHdvIHN1cHBvcnQgbGlzdHMuIFRoZSB0b2dnbGUgZGVmYXVsdHMgdG8gJ2ZhbHNlJyAoMkQpLFxuLy8gYW5kIGFsc28gYWNjZXB0cyAndHJ1ZScgKDNEKS4gQ3VycmVudGx5IHRoZSBsaXN0cyBhcmUgYXMgZm9sbG93czpcbi8vIDJEOiBNb3ppbGxhLCBXZWJraXQsIE9wZXJhLCBPZmZpY2lhbFxuLy8gM0Q6IFdlYmtpdCwgRmlyZWZveC5cblxuLy8gQXZhaWxhYmxlIFRyYW5zZm9ybXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtIFNjYWxlICgyZCBhbmQgM2QpXG4vLyAtIFJvdGF0ZSAoMmQgYW5kIDNkKVxuLy8gLSBUcmFuc2xhdGUgKDJkIGFuZCAzZClcbi8vIC0gU2tldyAoMmQgb25seSlcblxuLy8gVHJhbnNmb3JtIFBhcmFtZXRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtIFRyYW5zZm9ybSBPcmlnaW4gKDJkIGFuZCAzZClcbi8vIC0gUGVyc3BlY3RpdmUgKDNkKVxuLy8gLSBQZXJzcGVjdGl2ZSBPcmlnaW4gKDNkKVxuLy8gLSBUcmFuc2Zvcm0gU3R5bGUgKDNkKVxuLy8gLSBCYWNrZmFjZSBWaXNpYmlsaXR5ICgzZClcblxuLy8gTWl4aW5zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0cmFuc2Zvcm0tb3JpZ2luXG4vLyAgLSBzaG9ydGN1dHM6ICB0cmFuc2Zvcm0tb3JpZ2luMmQsIHRyYW5zZm9ybS1vcmlnaW4zZFxuLy8gIC0gaGVscGVyczogICAgYXBwbHktb3JpZ2luXG4vLyB0cmFuc2Zvcm1cbi8vICAtIHNob3J0Y3V0czogIHRyYW5zZm9ybTJkLCB0cmFuc2Zvcm0zZFxuLy8gIC0gaGVscGVyczogICAgc2ltcGxlLXRyYW5zZm9ybSwgY3JlYXRlLXRyYW5zZm9ybVxuLy8gcGVyc3BlY3RpdmVcbi8vICAtIGhlbHBlcnM6ICAgIHBlcnNwZWN0aXZlLW9yaWdpblxuLy8gdHJhbnNmb3JtLXN0eWxlXG4vLyBiYWNrZmFjZS12aXNpYmlsaXR5XG4vLyBzY2FsZVxuLy8gIC0gc2hvcnRjdXRzOiAgc2NhbGVYLCBzY2FsZVksIHNjYWxlWiwgc2NhbGUzZFxuLy8gcm90YXRlXG4vLyAgLSBzaG9ydGN1dHM6ICByb3RhdGVYLCByb3RhdGVZLCByb3RhdGUzZFxuLy8gdHJhbnNsYXRlXG4vLyAgLSBzaG9ydGN1dHM6ICB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCB0cmFuc2xhdGVaLCB0cmFuc2xhdGUzZFxuLy8gc2tld1xuLy8gIC0gc2hvcnRjdXRzOiAgc2tld1gsIHNrZXdZXG5cbi8vIERlZmF1bHRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBUaGUgZGVmYXVsdCB4LW9yaWdpbiBmb3IgdHJhbnNmb3Jtc1xuJGRlZmF1bHQtb3JpZ2luLXggICAgOiA1MCUgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB5LW9yaWdpbiBmb3IgdHJhbnNmb3Jtc1xuJGRlZmF1bHQtb3JpZ2luLXkgICAgOiA1MCUgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB6LW9yaWdpbiBmb3IgdHJhbnNmb3Jtc1xuJGRlZmF1bHQtb3JpZ2luLXogICAgOiA1MCUgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG5cblxuLy8gVGhlIGRlZmF1bHQgeC1tdWx0aXBsaWVyIGZvciBzY2FsaW5nXG4kZGVmYXVsdC1zY2FsZS14ICAgICA6IDEuMjUgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHktbXVsdGlwbGllciBmb3Igc2NhbGluZ1xuJGRlZmF1bHQtc2NhbGUteSAgICAgOiAkZGVmYXVsdC1zY2FsZS14ICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB6LW11bHRpcGxpZXIgZm9yIHNjYWxpbmdcbiRkZWZhdWx0LXNjYWxlLXogICAgIDogJGRlZmF1bHQtc2NhbGUteCAgICAgICFkZWZhdWx0O1xuXG5cbi8vIFRoZSBkZWZhdWx0IGFuZ2xlIGZvciByb3RhdGlvbnNcbiRkZWZhdWx0LXJvdGF0ZSAgICAgIDogNDVkZWcgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuXG5cbi8vIFRoZSBkZWZhdWx0IHgtdmVjdG9yIGZvciB0aGUgYXhpcyBvZiAzZCByb3RhdGlvbnNcbiRkZWZhdWx0LXZlY3Rvci14ICAgIDogMSAgICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgeS12ZWN0b3IgZm9yIHRoZSBheGlzIG9mIDNkIHJvdGF0aW9uc1xuJGRlZmF1bHQtdmVjdG9yLXkgICAgOiAxICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB6LXZlY3RvciBmb3IgdGhlIGF4aXMgb2YgM2Qgcm90YXRpb25zXG4kZGVmYXVsdC12ZWN0b3IteiAgICA6IDEgICAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcblxuXG4vLyBUaGUgZGVmYXVsdCB4LWxlbmd0aCBmb3IgdHJhbnNsYXRpb25zXG4kZGVmYXVsdC10cmFuc2xhdGUteCA6IDFlbSAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHktbGVuZ3RoIGZvciB0cmFuc2xhdGlvbnNcbiRkZWZhdWx0LXRyYW5zbGF0ZS15IDogJGRlZmF1bHQtdHJhbnNsYXRlLXggICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgei1sZW5ndGggZm9yIHRyYW5zbGF0aW9uc1xuJGRlZmF1bHQtdHJhbnNsYXRlLXogOiAkZGVmYXVsdC10cmFuc2xhdGUteCAgIWRlZmF1bHQ7XG5cblxuLy8gVGhlIGRlZmF1bHQgeC1hbmdsZSBmb3Igc2tld2luZ1xuJGRlZmF1bHQtc2tldy14ICAgICAgOiA1ZGVnICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB5LWFuZ2xlIGZvciBza2V3aW5nXG4kZGVmYXVsdC1za2V3LXkgICAgICA6IDVkZWcgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcblxuXG4vLyAqKlRyYW5zZm9ybS1vcmlnaW4qKlxuLy8gVHJhbnNmb3JtLW9yaWdpbiBzZW50IGFzIGEgY29tcGxldGUgc3RyaW5nXG4vL1xuLy8gICAgIEBpbmNsdWRlIGFwcGx5LW9yaWdpbiggb3JpZ2luIFssIDNELW9ubHkgXSApXG4vL1xuLy8gd2hlcmUgJ29yaWdpbicgaXMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBjb250YWluaW5nIDEtMyAoeC95L3opIGNvb3JkaW5hdGVzXG4vLyBpbiBwZXJjZW50YWdlcywgYWJzb2x1dGUgKHB4LCBjbSwgaW4sIGVtIGV0Yy4uKSBvciByZWxhdGl2ZVxuLy8gKGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSwgY2VudGVyKSB1bml0c1xuLy9cbi8vIEBwYXJhbSBvbmx5M2QgU2V0IHRoaXMgdG8gdHJ1ZSB0byBvbmx5IGFwcGx5IHRoaXNcbi8vIG1peGluIHdoZXJlIGJyb3dzZXJzIGhhdmUgM0Qgc3VwcG9ydC5cbkBtaXhpbiBhcHBseS1vcmlnaW4oJG9yaWdpbiwgJG9ubHkzZCkge1xuICAkb25seTNkOiAkb25seTNkIG9yIC1jb21wYXNzLWxpc3Qtc2l6ZSgtY29tcGFzcy1saXN0KCRvcmlnaW4pKSA+IDI7XG4gIEBpZiAkb25seTNkIHtcbiAgICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLW9yaWdpbiwgJG9yaWdpbixcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICAgICk7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0tb3JpZ2luLCAkb3JpZ2luLFxuICAgICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICAgKTtcbiAgfVxufVxuXG4vLyBUcmFuc2Zvcm0tb3JpZ2luIHNlbnQgYXMgaW5kaXZpZHVhbCBhcmd1bWVudHM6XG4vL1xuLy8gICAgIEBpbmNsdWRlIHRyYW5zZm9ybS1vcmlnaW4oIFsgb3JpZ2luLXgsIG9yaWdpbi15LCBvcmlnaW4teiwgM0Qtb25seSBdIClcbi8vXG4vLyB3aGVyZSB0aGUgMyAnb3JpZ2luLScgYXJndW1lbnRzIHJlcHJlc2VudCB4L3kveiBjb29yZGluYXRlcy5cbi8vXG4vLyAqKk5PVEU6Kiogc2V0dGluZyB6IGNvb3JkaW5hdGVzIHRyaWdnZXJzIDNEIHN1cHBvcnQgbGlzdCwgbGVhdmUgZmFsc2UgZm9yIDJEIHN1cHBvcnRcbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKFxuICAkb3JpZ2luLXg6ICRkZWZhdWx0LW9yaWdpbi14LFxuICAkb3JpZ2luLXk6ICRkZWZhdWx0LW9yaWdpbi15LFxuICAkb3JpZ2luLXo6IGZhbHNlLFxuICAkb25seTNkOiAgIGlmKCRvcmlnaW4teiwgdHJ1ZSwgZmFsc2UpXG4pIHtcbiAgJG9yaWdpbjogdW5xdW90ZSgnJyk7XG4gIEBpZiAkb3JpZ2luLXggb3IgJG9yaWdpbi15IG9yICRvcmlnaW4teiB7XG4gICAgQGlmICRvcmlnaW4teCB7ICRvcmlnaW46ICRvcmlnaW4teDsgfSBAZWxzZSB7ICRvcmlnaW46IDUwJTsgfVxuICAgIEBpZiAkb3JpZ2luLXkgeyAkb3JpZ2luOiAkb3JpZ2luICRvcmlnaW4teTsgfSBAZWxzZSB7IEBpZiAkb3JpZ2luLXogeyAkb3JpZ2luOiAkb3JpZ2luIDUwJTsgfX1cbiAgICBAaWYgJG9yaWdpbi16IHsgJG9yaWdpbjogJG9yaWdpbiAkb3JpZ2luLXo7IH1cbiAgICBAaW5jbHVkZSBhcHBseS1vcmlnaW4oJG9yaWdpbiwgJG9ubHkzZCk7XG4gIH1cbn1cblxuXG4vLyBUcmFuc2Zvcm0gc2VudCBhcyBhIGNvbXBsZXRlIHN0cmluZzpcbi8vXG4vLyAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKCB0cmFuc2Zvcm1zIFssIDNELW9ubHkgXSApXG4vL1xuLy8gd2hlcmUgJ3RyYW5zZm9ybXMnIGlzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgYWxsIHRoZSB0cmFuc2Zvcm1zIHRvIGJlIGFwcGxpZWQuXG5AbWl4aW4gdHJhbnNmb3JtKFxuICAkdHJhbnNmb3JtLFxuICAkb25seTNkOiBmYWxzZVxuKSB7XG4gIEBpZiAkb25seTNkIHtcbiAgICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLCAkdHJhbnNmb3JtLFxuICAgICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICAgKTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zZm9ybSwgJHRyYW5zZm9ybSxcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICAgICk7XG4gIH1cbn1cblxuLy8gU2hvcnRjdXQgdG8gdGFyZ2V0IGFsbCBicm93c2VycyB3aXRoIDJEIHRyYW5zZm9ybSBzdXBwb3J0XG5AbWl4aW4gdHJhbnNmb3JtMmQoJHRyYW5zKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsIGZhbHNlKTtcbn1cblxuLy8gU2hvcnRjdXQgdG8gdGFyZ2V0IG9ubHkgYnJvd3NlcnMgd2l0aCAzRCB0cmFuc2Zvcm0gc3VwcG9ydFxuQG1peGluIHRyYW5zZm9ybTNkKCR0cmFucykge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCB0cnVlKTtcbn1cblxuLy8gQGRvYyBvZmZcbi8vIDNEIFBhcmFtZXRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBTZXQgdGhlIHBlcnNwZWN0aXZlIG9mIDNEIHRyYW5zZm9ybXMgb24gdGhlIGNoaWxkcmVuIG9mIGFuIGVsZW1lbnQ6XG4vL1xuLy8gICAgICBAaW5jbHVkZSBwZXJzcGVjdGl2ZSggcGVyc3BlY3RpdmUgKVxuLy9cbi8vIHdoZXJlICdwZXJzcGVjdGl2ZScgaXMgYSB1bml0bGVzcyBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBkZXB0aCBvZiB0aGVcbi8vIHotYXhpcy4gVGhlIGhpZ2hlciB0aGUgcGVyc3BlY3RpdmUsIHRoZSBtb3JlIGV4YWdnZXJhdGVkIHRoZSBmb3Jlc2hvcnRlbmluZy5cbi8vIHZhbHVlcyBmcm9tIDUwMCB0byAxMDAwIGFyZSBtb3JlLW9yLWxlc3MgXCJub3JtYWxcIiAtIGEgZ29vZCBzdGFydGluZy1wb2ludC5cbkBtaXhpbiBwZXJzcGVjdGl2ZSgkcCkge1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwocGVyc3BlY3RpdmUsICRwLFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBTZXQgdGhlIG9yaWdpbiBwb3NpdGlvbiBmb3IgdGhlIHBlcnNwZWN0aXZlXG4vL1xuLy8gICAgICBAaW5jbHVkZSBwZXJzcGVjdGl2ZS1vcmlnaW4ob3JpZ2luLXggW29yaWdpbi15XSlcbi8vXG4vLyB3aGVyZSB0aGUgdHdvIGFyZ3VtZW50cyByZXByZXNlbnQgeC95IGNvb3JkaW5hdGVzXG5AbWl4aW4gcGVyc3BlY3RpdmUtb3JpZ2luKCRvcmlnaW46IDUwJSkge1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwocGVyc3BlY3RpdmUtb3JpZ2luLCAkb3JpZ2luLFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBEZXRlcm1pbmUgd2hldGhlciBhIDNEIG9iamVjdHMgY2hpbGRyZW4gYWxzbyBsaXZlIGluIHRoZSBnaXZlbiAzRCBzcGFjZVxuLy9cbi8vICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXN0eWxlKCBbIHN0eWxlIF0gKVxuLy9cbi8vIHdoZXJlIGBzdHlsZWAgY2FuIGJlIGVpdGhlciBgZmxhdGAgb3IgYHByZXNlcnZlLTNkYC5cbi8vIEJyb3dzZXJzIGRlZmF1bHQgdG8gYGZsYXRgLCBtaXhpbiBkZWZhdWx0cyB0byBgcHJlc2VydmUtM2RgLlxuQG1peGluIHRyYW5zZm9ybS1zdHlsZSgkc3R5bGU6IHByZXNlcnZlLTNkKSB7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0tc3R5bGUsICRzdHlsZSxcbiAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gRGV0ZXJtaW5lIHRoZSB2aXNpYmlsaXR5IG9mIGFuIGVsZW1lbnQgd2hlbiBpdCdzIGJhY2sgaXMgdHVybmVkXG4vL1xuLy8gICAgIEBpbmNsdWRlIGJhY2tmYWNlLXZpc2liaWxpdHkoIFsgdmlzaWJpbGl0eSBdIClcbi8vXG4vLyB3aGVyZSBgdmlzaWJpbGl0eWAgY2FuIGJlIGVpdGhlciBgdmlzaWJsZWAgb3IgYGhpZGRlbmAuXG4vLyBCcm93c2VycyBkZWZhdWx0IHRvIHZpc2libGUsIG1peGluIGRlZmF1bHRzIHRvIGhpZGRlblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZpc2liaWxpdHk6IGhpZGRlbikge1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwoYmFja2ZhY2UtdmlzaWJpbGl0eSwgJHZpc2liaWxpdHksXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIEBkb2Mgb2ZmXG4vLyBUcmFuc2Zvcm0gUGFydGlhbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoZXNlIHdvcmsgd2VsbCBvbiB0aGVpciBvd24sIGJ1dCB0aGV5IGRvbid0IGFkZCB0byBlYWNoIG90aGVyLCB0aGV5IG92ZXJyaWRlLlxuLy8gVXNlIGFsb25nIHdpdGggdHJhbnNmb3JtIHBhcmFtZXRlciBtaXhpbnMgdG8gYWRqdXN0IG9yaWdpbiwgcGVyc3BlY3RpdmUgYW5kIHN0eWxlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBTY2FsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBkb2Mgb25cblxuLy8gU2NhbGUgYW4gb2JqZWN0IGFsb25nIHRoZSB4IGFuZCB5IGF4aXM6XG4vL1xuLy8gICAgICBAaW5jbHVkZSBzY2FsZSggWyBzY2FsZS14LCBzY2FsZS15LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vXG4vLyB3aGVyZSB0aGUgJ3NjYWxlLScgYXJndW1lbnRzIGFyZSB1bml0bGVzcyBtdWx0aXBsaWVycyBvZiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zXG4vLyBhbmQgcGVyc3BlY3RpdmUsIHdoaWNoIHdvcmtzIHRoZSBzYW1lIGFzIHRoZSBzdGFuZC1hbG9uZSBwZXJzcGVjdGl2ZSBwcm9wZXJ0eS9taXhpblxuLy8gYnV0IGFwcGxpZXMgdG8gdGhlIGluZGl2aWR1YWwgZWxlbWVudCAobXVsdGlwbGllZCB3aXRoIGFueSBwYXJlbnQgcGVyc3BlY3RpdmUpXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNjYWxlKFxuICAkc2NhbGUteDogICAgICRkZWZhdWx0LXNjYWxlLXgsXG4gICRzY2FsZS15OiAgICAgJHNjYWxlLXgsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHNjYWxlKCRzY2FsZS14LCAkc2NhbGUteSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTY2FsZSBhbiBvYmplY3QgYWxvbmcgdGhlIHggYXhpc1xuLy8gQGluY2x1ZGUgc2NhbGVYKCBbIHNjYWxlLXgsIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBzY2FsZVgoXG4gICRzY2FsZTogICAgICAgJGRlZmF1bHQtc2NhbGUteCxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogc2NhbGVYKCRzY2FsZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTY2FsZSBhbiBvYmplY3QgYWxvbmcgdGhlIHkgYXhpc1xuLy8gQGluY2x1ZGUgc2NhbGVZKCBbIHNjYWxlLXksIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBzY2FsZVkoXG4gICRzY2FsZTogICAgICAgJGRlZmF1bHQtc2NhbGUteSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogc2NhbGVZKCRzY2FsZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTY2FsZSBhbiBvYmplY3QgYWxvbmcgdGhlIHogYXhpc1xuLy8gQGluY2x1ZGUgc2NhbGVaKCBbIHNjYWxlLXosIHBlcnNwZWN0aXZlIF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBzY2FsZVooXG4gICRzY2FsZTogJGRlZmF1bHQtc2NhbGUteixcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogc2NhbGVaKCRzY2FsZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIFNjYWxlIGFuZCBvYmplY3QgYWxvbmcgYWxsIHRocmVlIGF4aXNcbi8vIEBpbmNsdWRlIHNjYWxlM2QoIFsgc2NhbGUteCwgc2NhbGUteSwgc2NhbGUteiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNjYWxlM2QoXG4gICRzY2FsZS14OiAgICAgJGRlZmF1bHQtc2NhbGUteCxcbiAgJHNjYWxlLXk6ICAgICAkZGVmYXVsdC1zY2FsZS15LFxuICAkc2NhbGUtejogICAgICRkZWZhdWx0LXNjYWxlLXosXG4gICRwZXJzcGVjdGl2ZTogZmFsc2Vcbikge1xuICAkdHJhbnM6IHNjYWxlM2QoJHNjYWxlLXgsICRzY2FsZS15LCAkc2NhbGUteik7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIEBkb2Mgb2ZmXG4vLyBSb3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBkb2Mgb25cblxuLy8gUm90YXRlIGFuIG9iamVjdCBhcm91bmQgdGhlIHogYXhpcyAgKDJEKVxuLy8gQGluY2x1ZGUgcm90YXRlKCBbIHJvdGF0aW9uLCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vIHdoZXJlICdyb3RhdGlvbicgaXMgYW4gYW5nbGUgc2V0IGluIGRlZ3JlZXMgKGRlZykgb3IgcmFkaWFuIChyYWQpIHVuaXRzXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHJvdGF0ZShcbiAgJHJvdGF0ZTogICAgICAkZGVmYXVsdC1yb3RhdGUsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHJvdGF0ZSgkcm90YXRlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIEEgbG9uZ2N1dCBmb3IgJ3JvdGF0ZScgaW4gY2FzZSB5b3UgZm9yZ2V0IHRoYXQgJ3onIGlzIGltcGxpZWRcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gcm90YXRlWihcbiAgJHJvdGF0ZTogICAgICAkZGVmYXVsdC1yb3RhdGUsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICBAaW5jbHVkZSByb3RhdGUoJHJvdGF0ZSwgJHBlcnNwZWN0aXZlLCAkb25seTNkKTtcbn1cblxuLy8gUm90YXRlIGFuIG9iamVjdCBhcm91bmQgdGhlIHggYXhpcyAoM0QpXG4vLyBAaW5jbHVkZSByb3RhdGVYKCBbIHJvdGF0aW9uLCBwZXJzcGVjdGl2ZSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gcm90YXRlWChcbiAgJHJvdGF0ZTogJGRlZmF1bHQtcm90YXRlLFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiByb3RhdGVYKCRyb3RhdGUpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xufVxuXG4vLyBSb3RhdGUgYW4gb2JqZWN0IGFyb3VuZCB0aGUgeSBheGlzICgzRClcbi8vIEBpbmNsdWRlIHJvdGF0ZSggWyByb3RhdGlvbiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHJvdGF0ZVkoXG4gICRyb3RhdGU6ICRkZWZhdWx0LXJvdGF0ZSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogcm90YXRlWSgkcm90YXRlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gUm90YXRlIGFuIG9iamVjdCBhcm91bmQgYW4gYXJiaXRyYXJ5IGF4aXMgKDNEKVxuLy8gQGluY2x1ZGUgcm90YXRlKCBbIHZlY3Rvci14LCB2ZWN0b3IteSwgdmVjdG9yLXosIHJvdGF0aW9uLCBwZXJzcGVjdGl2ZSBdIClcbi8vIHdoZXJlIHRoZSAndmVjdG9yLScgYXJndW1lbnRzIGFjY2VwdCB1bml0bGVzcyBudW1iZXJzLlxuLy8gVGhlc2UgbnVtYmVycyBhcmUgbm90IGltcG9ydGFudCBvbiB0aGVpciBvd24sIGJ1dCBpbiByZWxhdGlvbiB0byBvbmUgYW5vdGhlclxuLy8gY3JlYXRpbmcgYW4gYXhpcyBmcm9tIHlvdXIgdHJhbnNmb3JtLW9yaWdpbiwgYWxvbmcgdGhlIGF4aXMgb2YgWHggPSBZeSA9IFp6LlxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiByb3RhdGUzZChcbiAgJHZlY3Rvci14OiAkZGVmYXVsdC12ZWN0b3IteCxcbiAgJHZlY3Rvci15OiAkZGVmYXVsdC12ZWN0b3IteSxcbiAgJHZlY3Rvci16OiAkZGVmYXVsdC12ZWN0b3IteixcbiAgJHJvdGF0ZTogJGRlZmF1bHQtcm90YXRlLFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiByb3RhdGUzZCgkdmVjdG9yLXgsICR2ZWN0b3IteSwgJHZlY3Rvci16LCAkcm90YXRlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gQGRvYyBvZmZcbi8vIFRyYW5zbGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCBvciB5IGF4aXMgKDJEKVxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS14LCB0cmFuc2xhdGUteSwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vLyB3aGVyZSB0aGUgJ3RyYW5zbGF0ZS0nIGFyZ3VtZW50cyBhY2NlcHQgYW55IGRpc3RhbmNlIGluIHBlcmNlbnRhZ2VzIG9yIGFic29sdXRlIChweCwgY20sIGluLCBlbSBldGMuLikgdW5pdHMuXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHRyYW5zbGF0ZShcbiAgJHRyYW5zbGF0ZS14OiAkZGVmYXVsdC10cmFuc2xhdGUteCxcbiAgJHRyYW5zbGF0ZS15OiAkZGVmYXVsdC10cmFuc2xhdGUteSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogdHJhbnNsYXRlKCR0cmFuc2xhdGUteCwgJHRyYW5zbGF0ZS15KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIE1vdmUgYW4gb2JqZWN0IGFsb25nIHRoZSB4IGF4aXMgKDJEKVxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS14LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gdHJhbnNsYXRlWChcbiAgJHRyYW5zLXg6ICAgICAkZGVmYXVsdC10cmFuc2xhdGUteCxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogdHJhbnNsYXRlWCgkdHJhbnMteCk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeSBheGlzICgyRClcbi8vIEBpbmNsdWRlIHRyYW5zbGF0ZSggWyB0cmFuc2xhdGUteSwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHRyYW5zbGF0ZVkoXG4gICR0cmFucy15OiAgICAgJGRlZmF1bHQtdHJhbnNsYXRlLXksXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHRyYW5zbGF0ZVkoJHRyYW5zLXkpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gTW92ZSBhbiBvYmplY3QgYWxvbmcgdGhlIHogYXhpcyAoM0QpXG4vLyBAaW5jbHVkZSB0cmFuc2xhdGUoIFsgdHJhbnNsYXRlLXosIHBlcnNwZWN0aXZlIF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiB0cmFuc2xhdGVaKFxuICAkdHJhbnMtejogICAgICRkZWZhdWx0LXRyYW5zbGF0ZS16LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiB0cmFuc2xhdGVaKCR0cmFucy16KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gTW92ZSBhbiBvYmplY3QgYWxvbmcgdGhlIHgsIHkgYW5kIHogYXhpcyAoM0QpXG4vLyBAaW5jbHVkZSB0cmFuc2xhdGUoIFsgdHJhbnNsYXRlLXgsIHRyYW5zbGF0ZS15LCB0cmFuc2xhdGUteiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHRyYW5zbGF0ZTNkKFxuICAkdHJhbnNsYXRlLXg6ICRkZWZhdWx0LXRyYW5zbGF0ZS14LFxuICAkdHJhbnNsYXRlLXk6ICRkZWZhdWx0LXRyYW5zbGF0ZS15LFxuICAkdHJhbnNsYXRlLXo6ICRkZWZhdWx0LXRyYW5zbGF0ZS16LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiB0cmFuc2xhdGUzZCgkdHJhbnNsYXRlLXgsICR0cmFuc2xhdGUteSwgJHRyYW5zbGF0ZS16KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gQGRvYyBvZmZcbi8vIFNrZXcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBTa2V3IGFuIGVsZW1lbnQ6XG4vL1xuLy8gICAgIEBpbmNsdWRlIHNrZXcoIFsgc2tldy14LCBza2V3LXksIDNELW9ubHkgXSApXG4vL1xuLy8gd2hlcmUgdGhlICdza2V3LScgYXJndW1lbnRzIGFjY2VwdCBjc3MgYW5nbGVzIGluIGRlZ3JlZXMgKGRlZykgb3IgcmFkaWFuIChyYWQpIHVuaXRzLlxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBza2V3KFxuICAkc2tldy14OiAkZGVmYXVsdC1za2V3LXgsXG4gICRza2V3LXk6ICRkZWZhdWx0LXNrZXcteSxcbiAgJG9ubHkzZDogZmFsc2Vcbikge1xuICAkdHJhbnM6IHNrZXcoJHNrZXcteCwgJHNrZXcteSk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTa2V3IGFuIGVsZW1lbnQgYWxvbmcgdGhlIHggYXhpelxuLy9cbi8vICAgICBAaW5jbHVkZSBza2V3KCBbIHNrZXcteCwgM0Qtb25seSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2tld1goXG4gICRza2V3LXg6ICRkZWZhdWx0LXNrZXcteCxcbiAgJG9ubHkzZDogZmFsc2Vcbikge1xuICAkdHJhbnM6IHNrZXdYKCRza2V3LXgpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gU2tldyBhbiBlbGVtZW50IGFsb25nIHRoZSB5IGF4aXNcbi8vXG4vLyAgICAgQGluY2x1ZGUgc2tldyggWyBza2V3LXksIDNELW9ubHkgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNrZXdZKFxuICAkc2tldy15OiAkZGVmYXVsdC1za2V3LXksXG4gICRvbmx5M2Q6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBza2V3WSgkc2tldy15KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cblxuLy8gRnVsbCB0cmFuc2Zvcm0gbWl4aW5zXG4vLyBGb3Igc2V0dGluZ3MgYW55IGNvbWJpbmF0aW9uIG9mIHRyYW5zZm9ybXMgYXMgYXJndW1lbnRzXG4vLyBUaGVzZSBhcmUgY29tcGxleCBhbmQgbm90IGhpZ2hseSByZWNvbW1lbmRlZCBmb3IgZGFpbHkgdXNlLiBUaGV5IGFyZSBtYWlubHlcbi8vIGhlcmUgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4vL1xuLy8gKiB0aGV5IGluY2x1ZGUgb3JpZ2luIGFkanVzdG1lbnRzXG4vLyAqIHNjYWxlIHRha2VzIGEgbXVsdGlwbGllciAodW5pdGxlc3MpLCByb3RhdGUgYW5kIHNrZXcgdGFrZSBkZWdyZWVzIChkZWcpXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIGNyZWF0ZS10cmFuc2Zvcm0oXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRzY2FsZS14OiAgICAgZmFsc2UsXG4gICRzY2FsZS15OiAgICAgZmFsc2UsXG4gICRzY2FsZS16OiAgICAgZmFsc2UsXG4gICRyb3RhdGUteDogICAgZmFsc2UsXG4gICRyb3RhdGUteTogICAgZmFsc2UsXG4gICRyb3RhdGUtejogICAgZmFsc2UsXG4gICRyb3RhdGUzZDogICAgZmFsc2UsXG4gICR0cmFucy14OiAgICAgZmFsc2UsXG4gICR0cmFucy15OiAgICAgZmFsc2UsXG4gICR0cmFucy16OiAgICAgZmFsc2UsXG4gICRza2V3LXg6ICAgICAgZmFsc2UsXG4gICRza2V3LXk6ICAgICAgZmFsc2UsXG4gICRvcmlnaW4teDogICAgZmFsc2UsXG4gICRvcmlnaW4teTogICAgZmFsc2UsXG4gICRvcmlnaW4tejogICAgZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHVucXVvdGUoXCJcIik7XG5cbiAgLy8gcGVyc3BlY3RpdmVcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSA7IH1cblxuICAvLyBzY2FsZVxuICBAaWYgJHNjYWxlLXggYW5kICRzY2FsZS15IHtcbiAgICBAaWYgJHNjYWxlLXogeyAkdHJhbnM6ICR0cmFucyBzY2FsZTNkKCRzY2FsZS14LCAkc2NhbGUteSwgJHNjYWxlLXopOyB9XG4gICAgQGVsc2UgeyAkdHJhbnM6ICR0cmFucyBzY2FsZSgkc2NhbGUteCwgJHNjYWxlLXkpOyB9XG4gIH0gQGVsc2Uge1xuICAgIEBpZiAkc2NhbGUteCB7ICR0cmFuczogJHRyYW5zIHNjYWxlWCgkc2NhbGUteCk7IH1cbiAgICBAaWYgJHNjYWxlLXkgeyAkdHJhbnM6ICR0cmFucyBzY2FsZVkoJHNjYWxlLXkpOyB9XG4gICAgQGlmICRzY2FsZS16IHsgJHRyYW5zOiAkdHJhbnMgc2NhbGVaKCRzY2FsZS16KTsgfVxuICB9XG5cbiAgLy8gcm90YXRlXG4gIEBpZiAkcm90YXRlLXggeyAkdHJhbnM6ICR0cmFucyByb3RhdGVYKCRyb3RhdGUteCk7IH1cbiAgQGlmICRyb3RhdGUteSB7ICR0cmFuczogJHRyYW5zIHJvdGF0ZVkoJHJvdGF0ZS15KTsgfVxuICBAaWYgJHJvdGF0ZS16IHsgJHRyYW5zOiAkdHJhbnMgcm90YXRlWigkcm90YXRlLXopOyB9XG4gIEBpZiAkcm90YXRlM2QgeyAkdHJhbnM6ICR0cmFucyByb3RhdGUzZCgkcm90YXRlM2QpOyB9XG5cbiAgLy8gdHJhbnNsYXRlXG4gIEBpZiAkdHJhbnMteCBhbmQgJHRyYW5zLXkge1xuICAgIEBpZiAkdHJhbnMteiB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZTNkKCR0cmFucy14LCAkdHJhbnMteSwgJHRyYW5zLXopOyB9XG4gICAgQGVsc2UgeyAkdHJhbnM6ICR0cmFucyB0cmFuc2xhdGUoJHRyYW5zLXgsICR0cmFucy15KTsgfVxuICB9IEBlbHNlIHtcbiAgICBAaWYgJHRyYW5zLXggeyAkdHJhbnM6ICR0cmFucyB0cmFuc2xhdGVYKCR0cmFucy14KTsgfVxuICAgIEBpZiAkdHJhbnMteSB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZVkoJHRyYW5zLXkpOyB9XG4gICAgQGlmICR0cmFucy16IHsgJHRyYW5zOiAkdHJhbnMgdHJhbnNsYXRlWigkdHJhbnMteik7IH1cbiAgfVxuXG4gIC8vIHNrZXdcbiAgQGlmICRza2V3LXggYW5kICRza2V3LXkgeyAkdHJhbnM6ICR0cmFucyBza2V3KCRza2V3LXgsICRza2V3LXkpOyB9XG4gIEBlbHNlIHtcbiAgICBAaWYgJHNrZXcteCB7ICR0cmFuczogJHRyYW5zIHNrZXdYKCRza2V3LXgpOyB9XG4gICAgQGlmICRza2V3LXkgeyAkdHJhbnM6ICR0cmFucyBza2V3WSgkc2tldy15KTsgfVxuICB9XG5cbiAgLy8gYXBwbHkgaXQhXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0tb3JpZ2luKCRvcmlnaW4teCwgJG9yaWdpbi15LCAkb3JpZ2luLXosICRvbmx5M2QpO1xufVxuXG5cbi8vIEEgc2ltcGxpZmllZCBzZXQgb2Ygb3B0aW9uc1xuLy8gYmFja3dhcmRzLWNvbXBhdGlibGUgd2l0aCB0aGUgcHJldmlvdXMgdmVyc2lvbiBvZiB0aGUgJ3RyYW5zZm9ybScgbWl4aW5cbkBtaXhpbiBzaW1wbGUtdHJhbnNmb3JtKFxuICAkc2NhbGU6ICAgIGZhbHNlLFxuICAkcm90YXRlOiAgIGZhbHNlLFxuICAkdHJhbnMteDogIGZhbHNlLFxuICAkdHJhbnMteTogIGZhbHNlLFxuICAkc2tldy14OiAgIGZhbHNlLFxuICAkc2tldy15OiAgIGZhbHNlLFxuICAkb3JpZ2luLXg6IGZhbHNlLFxuICAkb3JpZ2luLXk6IGZhbHNlXG4pIHtcbiAgQGluY2x1ZGUgY3JlYXRlLXRyYW5zZm9ybShcbiAgICBmYWxzZSxcbiAgICAkc2NhbGUsICRzY2FsZSwgZmFsc2UsXG4gICAgZmFsc2UsIGZhbHNlLCAkcm90YXRlLCBmYWxzZSxcbiAgICAkdHJhbnMteCwgJHRyYW5zLXksIGZhbHNlLFxuICAgICRza2V3LXgsICRza2V3LXksXG4gICAgJG9yaWdpbi14LCAkb3JpZ2luLXksIGZhbHNlLFxuICAgIGZhbHNlXG4gICk7XG59XG4iLCIvLyBAZG9jIG9mZlxuLy8gVGhlc2UgZGVmYXVsdHMgbWFrZSB0aGUgYXJndW1lbnRzIG9wdGlvbmFsIGZvciB0aGlzIG1peGluXG4vLyBJZiB5b3UgbGlrZSwgc2V0IGRpZmZlcmVudCBkZWZhdWx0cyBiZWZvcmUgaW1wb3J0aW5nLlxuLy8gQGRvYyBvblxuXG5AaW1wb3J0IFwic2hhcmVkXCI7XG5cblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGJveCBzaGFkb3dzXG4kZGVmYXVsdC1ib3gtc2hhZG93LWNvbG9yOiAjMzMzMzMzICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBob3Jpem9udGFsIG9mZnNldC4gUG9zaXRpdmUgaXMgdG8gdGhlIHJpZ2h0LlxuJGRlZmF1bHQtYm94LXNoYWRvdy1oLW9mZnNldDogMHB4ICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCB2ZXJ0aWNhbCBvZmZzZXQuIFBvc2l0aXZlIGlzIGRvd24uXG4kZGVmYXVsdC1ib3gtc2hhZG93LXYtb2Zmc2V0OiAwcHggIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGJsdXIgbGVuZ3RoLlxuJGRlZmF1bHQtYm94LXNoYWRvdy1ibHVyOiA1cHggIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IHNwcmVhZCBsZW5ndGguXG4kZGVmYXVsdC1ib3gtc2hhZG93LXNwcmVhZCA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBzaGFkb3cgaW5zZXQ6IGluc2V0IG9yIGZhbHNlIChmb3Igc3RhbmRhcmQgc2hhZG93KS5cbiRkZWZhdWx0LWJveC1zaGFkb3ctaW5zZXQgOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gUHJvdmlkZXMgY3Jvc3MtYnJvd3NlciBmb3IgV2Via2l0LCBHZWNrbywgYW5kIENTUzMgYm94IHNoYWRvd3Mgd2hlbiBvbmUgb3IgbW9yZSBib3hcbi8vIHNoYWRvd3MgYXJlIG5lZWRlZC5cbi8vIEVhY2ggc2hhZG93IGFyZ3VtZW50IHNob3VsZCBhZGhlcmUgdG8gdGhlIHN0YW5kYXJkIGNzczMgc3ludGF4IGZvciB0aGVcbi8vIGJveC1zaGFkb3cgcHJvcGVydHkuXG5AbWl4aW4gYm94LXNoYWRvdyhcbiAgJHNoYWRvdy0xIDogZGVmYXVsdCxcbiAgJHNoYWRvdy0yIDogZmFsc2UsXG4gICRzaGFkb3ctMyA6IGZhbHNlLFxuICAkc2hhZG93LTQgOiBmYWxzZSxcbiAgJHNoYWRvdy01IDogZmFsc2UsXG4gICRzaGFkb3ctNiA6IGZhbHNlLFxuICAkc2hhZG93LTcgOiBmYWxzZSxcbiAgJHNoYWRvdy04IDogZmFsc2UsXG4gICRzaGFkb3ctOSA6IGZhbHNlLFxuICAkc2hhZG93LTEwOiBmYWxzZVxuKSB7XG4gIEBpZiAkc2hhZG93LTEgPT0gZGVmYXVsdCB7XG4gICAgJHNoYWRvdy0xIDogLWNvbXBhc3Mtc3BhY2UtbGlzdChjb21wYWN0KGlmKCRkZWZhdWx0LWJveC1zaGFkb3ctaW5zZXQsIGluc2V0LCBmYWxzZSksICRkZWZhdWx0LWJveC1zaGFkb3ctaC1vZmZzZXQsICRkZWZhdWx0LWJveC1zaGFkb3ctdi1vZmZzZXQsICRkZWZhdWx0LWJveC1zaGFkb3ctYmx1ciwgJGRlZmF1bHQtYm94LXNoYWRvdy1zcHJlYWQsICRkZWZhdWx0LWJveC1zaGFkb3ctY29sb3IpKTtcbiAgfVxuICAkc2hhZG93IDogY29tcGFjdCgkc2hhZG93LTEsICRzaGFkb3ctMiwgJHNoYWRvdy0zLCAkc2hhZG93LTQsICRzaGFkb3ctNSwgJHNoYWRvdy02LCAkc2hhZG93LTcsICRzaGFkb3ctOCwgJHNoYWRvdy05LCAkc2hhZG93LTEwKTtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKGJveC1zaGFkb3csICRzaGFkb3csXG4gICAgLW1veiwgLXdlYmtpdCwgbm90KC1vKSwgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBQcm92aWRlcyBhIHNpbmdsZSBjcm9zcy1icm93c2VyIENTUyBib3ggc2hhZG93IGZvciBXZWJraXQsIEdlY2tvLCBhbmQgQ1NTMy5cbi8vIEluY2x1ZGVzIGRlZmF1bHQgYXJndW1lbnRzIGZvciBob3Jpem9udGFsIG9mZnNldCwgdmVydGljYWwgb2Zmc2V0LCBibHVyIGxlbmd0aCwgc3ByZWFkIGxlbmd0aCwgY29sb3IgYW5kIGluc2V0LlxuQG1peGluIHNpbmdsZS1ib3gtc2hhZG93KFxuICAkaG9mZiAgIDogJGRlZmF1bHQtYm94LXNoYWRvdy1oLW9mZnNldCxcbiAgJHZvZmYgICA6ICRkZWZhdWx0LWJveC1zaGFkb3ctdi1vZmZzZXQsXG4gICRibHVyICAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWJsdXIsXG4gICRzcHJlYWQgOiAkZGVmYXVsdC1ib3gtc2hhZG93LXNwcmVhZCxcbiAgJGNvbG9yICA6ICRkZWZhdWx0LWJveC1zaGFkb3ctY29sb3IsXG4gICRpbnNldCAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWluc2V0XG4pIHtcbiAgQGlmIG5vdCAoJGluc2V0ID09IHRydWUgb3IgJGluc2V0ID09IGZhbHNlIG9yICRpbnNldCA9PSBpbnNldCkge1xuICAgIEB3YXJuIFwiJGluc2V0IGV4cGVjdGVkIHRvIGJlIHRydWUgb3IgdGhlIGluc2V0IGtleXdvcmQuIEdvdCAjeyRpbnNldH0gaW5zdGVhZC4gVXNpbmc6IGluc2V0XCI7XG4gIH1cblxuICBAaWYgJGNvbG9yID09IG5vbmUge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH0gQGVsc2Uge1xuICAgICRmdWxsICAgOiAkaG9mZiAkdm9mZjtcbiAgICBAaWYgJGJsdXIgICB7ICRmdWxsOiAkZnVsbCAkYmx1cjsgICB9XG4gICAgQGlmICRzcHJlYWQgeyAkZnVsbDogJGZ1bGwgJHNwcmVhZDsgfVxuICAgIEBpZiAkY29sb3IgIHsgJGZ1bGw6ICRmdWxsICRjb2xvcjsgIH1cbiAgICBAaWYgJGluc2V0ICB7ICRmdWxsOiBpbnNldCAkZnVsbDsgICB9XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygkZnVsbCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuLy8gQ1NTIFRyYW5zaXRpb25zXG4vLyBDdXJyZW50bHkgb25seSB3b3JrcyBpbiBXZWJraXQuXG4vL1xuLy8gKiBleHBlY3RlZCBpbiBDU1MzLCBGaXJlRm94IDMuNi83IGFuZCBPcGVyYSBQcmVzdG8gMi4zXG4vLyAqIFdlJ2xsIGJlIHByZXBhcmVkLlxuLy9cbi8vIEluY2x1ZGluZyB0aGlzIHN1Ym1vZHVsZSBzZXRzIGZvbGxvd2luZyBkZWZhdWx0cyBmb3IgdGhlIG1peGluczpcbi8vXG4vLyAgICAgJGRlZmF1bHQtdHJhbnNpdGlvbi1wcm9wZXJ0eSA6IGFsbFxuLy8gICAgICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24gOiAxc1xuLy8gICAgICRkZWZhdWx0LXRyYW5zaXRpb24tZnVuY3Rpb24gOiBmYWxzZVxuLy8gICAgICRkZWZhdWx0LXRyYW5zaXRpb24tZGVsYXkgICAgOiBmYWxzZVxuLy9cbi8vIE92ZXJyaWRlIHRoZW0gaWYgeW91IGxpa2UuIFRpbWluZy1mdW5jdGlvbiBhbmQgZGVsYXkgYXJlIHNldCB0byBmYWxzZSBmb3IgYnJvd3NlciBkZWZhdWx0cyAoZWFzZSwgMHMpLlxuXG4kZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGwgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzICFkZWZhdWx0O1xuXG4kZGVmYXVsdC10cmFuc2l0aW9uLWZ1bmN0aW9uOiBmYWxzZSAhZGVmYXVsdDtcblxuJGRlZmF1bHQtdHJhbnNpdGlvbi1kZWxheTogZmFsc2UgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uYWJsZS1wcmVmaXhlZC12YWx1ZXM6IHRyYW5zZm9ybSwgdHJhbnNmb3JtLW9yaWdpbiAhZGVmYXVsdDtcblxuLy8gT25lIG9yIG1vcmUgcHJvcGVydGllcyB0byB0cmFuc2l0aW9uXG4vL1xuLy8gKiBmb3IgbXVsdGlwbGUsIHVzZSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0XG4vLyAqIGFsc28gYWNjZXB0cyBcImFsbFwiIG9yIFwibm9uZVwiXG5cbkBtaXhpbiB0cmFuc2l0aW9uLXByb3BlcnR5KCRwcm9wZXJ0eS0xOiAkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5LFxuICAkcHJvcGVydHktMiA6IGZhbHNlLFxuICAkcHJvcGVydHktMyA6IGZhbHNlLFxuICAkcHJvcGVydHktNCA6IGZhbHNlLFxuICAkcHJvcGVydHktNSA6IGZhbHNlLFxuICAkcHJvcGVydHktNiA6IGZhbHNlLFxuICAkcHJvcGVydHktNyA6IGZhbHNlLFxuICAkcHJvcGVydHktOCA6IGZhbHNlLFxuICAkcHJvcGVydHktOSA6IGZhbHNlLFxuICAkcHJvcGVydHktMTA6IGZhbHNlXG4pIHtcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnR5LTEpID09IHN0cmluZyB7ICRwcm9wZXJ0eS0xOiB1bnF1b3RlKCRwcm9wZXJ0eS0xKTsgfVxuICAkcHJvcGVydGllczogY29tcGFjdCgkcHJvcGVydHktMSwgJHByb3BlcnR5LTIsICRwcm9wZXJ0eS0zLCAkcHJvcGVydHktNCwgJHByb3BlcnR5LTUsICRwcm9wZXJ0eS02LCAkcHJvcGVydHktNywgJHByb3BlcnR5LTgsICRwcm9wZXJ0eS05LCAkcHJvcGVydHktMTApO1xuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQgICAgeyAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHkgOiBwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbigtd2Via2l0LCAkcHJvcGVydGllcyk7IH1cbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSAgIHsgICAgICAgICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5IDogcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oLW1veiwgICAgJHByb3BlcnRpZXMpOyB9XG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhICAgICB7ICAgICAgICAgICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eSA6IHByZWZpeGVkLWZvci10cmFuc2l0aW9uKC1vLCAgICAgICRwcm9wZXJ0aWVzKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHkgOiAkcHJvcGVydGllcztcbn1cblxuLy8gT25lIG9yIG1vcmUgZHVyYXRpb25zIGluIHNlY29uZHNcbi8vXG4vLyAqIGZvciBtdWx0aXBsZSwgdXNlIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Rcbi8vICogdGhlc2UgZHVyYXRpb25zIHdpbGwgYWZmZWN0IHRoZSBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIGxpc3QgcG9zaXRpb25cblxuQG1peGluIHRyYW5zaXRpb24tZHVyYXRpb24oJGR1cmF0aW9uLTE6ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICRkdXJhdGlvbi0yIDogZmFsc2UsXG4gICRkdXJhdGlvbi0zIDogZmFsc2UsXG4gICRkdXJhdGlvbi00IDogZmFsc2UsXG4gICRkdXJhdGlvbi01IDogZmFsc2UsXG4gICRkdXJhdGlvbi02IDogZmFsc2UsXG4gICRkdXJhdGlvbi03IDogZmFsc2UsXG4gICRkdXJhdGlvbi04IDogZmFsc2UsXG4gICRkdXJhdGlvbi05IDogZmFsc2UsXG4gICRkdXJhdGlvbi0xMDogZmFsc2Vcbikge1xuICBAaWYgdHlwZS1vZigkZHVyYXRpb24tMSkgPT0gc3RyaW5nIHsgJGR1cmF0aW9uLTE6IHVucXVvdGUoJGR1cmF0aW9uLTEpOyB9XG4gICRkdXJhdGlvbnM6IGNvbXBhY3QoJGR1cmF0aW9uLTEsICRkdXJhdGlvbi0yLCAkZHVyYXRpb24tMywgJGR1cmF0aW9uLTQsICRkdXJhdGlvbi01LCAkZHVyYXRpb24tNiwgJGR1cmF0aW9uLTcsICRkdXJhdGlvbi04LCAkZHVyYXRpb24tOSwgJGR1cmF0aW9uLTEwKTtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zaXRpb24tZHVyYXRpb24sICRkdXJhdGlvbnMsXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gT25lIG9yIG1vcmUgdGltaW5nIGZ1bmN0aW9uc1xuLy9cbi8vICogWyBlYXNlIHwgbGluZWFyIHwgZWFzZS1pbiB8IGVhc2Utb3V0IHwgZWFzZS1pbi1vdXQgfCBjdWJpYy1iZXppZXIoeDEsIHkxLCB4MiwgeTIpXVxuLy8gKiBGb3IgbXVsdGlwbGUsIHVzZSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0XG4vLyAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGVmZmVjdCB0aGUgcHJvcGVydGllcyBpbiB0aGUgc2FtZSBsaXN0IHBvc2l0aW9uXG5cbkBtaXhpbiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbigkZnVuY3Rpb24tMTogJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbixcbiAgJGZ1bmN0aW9uLTIgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTMgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTQgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTUgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTYgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTcgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTggOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTkgOiBmYWxzZSxcbiAgJGZ1bmN0aW9uLTEwOiBmYWxzZVxuKSB7XG4gICRmdW5jdGlvbi0xOiB1bnF1b3RlKCRmdW5jdGlvbi0xKTtcbiAgJGZ1bmN0aW9uczogY29tcGFjdCgkZnVuY3Rpb24tMSwgJGZ1bmN0aW9uLTIsICRmdW5jdGlvbi0zLCAkZnVuY3Rpb24tNCwgJGZ1bmN0aW9uLTUsICRmdW5jdGlvbi02LCAkZnVuY3Rpb24tNywgJGZ1bmN0aW9uLTgsICRmdW5jdGlvbi05LCAkZnVuY3Rpb24tMTApO1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24sICRmdW5jdGlvbnMsXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gT25lIG9yIG1vcmUgdHJhbnNpdGlvbi1kZWxheXMgaW4gc2Vjb25kc1xuLy9cbi8vICogZm9yIG11bHRpcGxlLCB1c2UgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdFxuLy8gKiB0aGVzZSBkZWxheXMgd2lsbCBlZmZlY3QgdGhlIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgbGlzdCBwb3NpdGlvblxuXG5AbWl4aW4gdHJhbnNpdGlvbi1kZWxheSgkZGVsYXktMTogJGRlZmF1bHQtdHJhbnNpdGlvbi1kZWxheSxcbiAgJGRlbGF5LTIgOiBmYWxzZSxcbiAgJGRlbGF5LTMgOiBmYWxzZSxcbiAgJGRlbGF5LTQgOiBmYWxzZSxcbiAgJGRlbGF5LTUgOiBmYWxzZSxcbiAgJGRlbGF5LTYgOiBmYWxzZSxcbiAgJGRlbGF5LTcgOiBmYWxzZSxcbiAgJGRlbGF5LTggOiBmYWxzZSxcbiAgJGRlbGF5LTkgOiBmYWxzZSxcbiAgJGRlbGF5LTEwOiBmYWxzZVxuKSB7XG4gIEBpZiB0eXBlLW9mKCRkZWxheS0xKSA9PSBzdHJpbmcgeyAkZGVsYXktMTogdW5xdW90ZSgkZGVsYXktMSk7IH1cbiAgJGRlbGF5czogY29tcGFjdCgkZGVsYXktMSwgJGRlbGF5LTIsICRkZWxheS0zLCAkZGVsYXktNCwgJGRlbGF5LTUsICRkZWxheS02LCAkZGVsYXktNywgJGRlbGF5LTgsICRkZWxheS05LCAkZGVsYXktMTApO1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNpdGlvbi1kZWxheSwgJGRlbGF5cyxcbiAgICAtbW96LCAtd2Via2l0LCAtbywgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBUcmFuc2l0aW9uIGFsbC1pbi1vbmUgc2hvcnRoYW5kXG5cbkBtaXhpbiBzaW5nbGUtdHJhbnNpdGlvbihcbiAgJHByb3BlcnR5OiAkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5LFxuICAkZHVyYXRpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICRmdW5jdGlvbjogJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbixcbiAgJGRlbGF5OiAkZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5XG4pIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihjb21wYWN0KCRwcm9wZXJ0eSAkZHVyYXRpb24gJGZ1bmN0aW9uICRkZWxheSkpO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbihcbiAgJHRyYW5zaXRpb24tMSA6IGRlZmF1bHQsXG4gICR0cmFuc2l0aW9uLTIgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tMyA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi00IDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTUgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tNiA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi03IDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTggOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tOSA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi0xMDogZmFsc2Vcbikge1xuICBAaWYgJHRyYW5zaXRpb24tMSA9PSBkZWZhdWx0IHtcbiAgICAkdHJhbnNpdGlvbi0xIDogY29tcGFjdCgkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24gJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbiAkZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5KTtcbiAgfVxuICAkdHJhbnNpdGlvbnM6IGZhbHNlO1xuICBAaWYgdHlwZS1vZigkdHJhbnNpdGlvbi0xKSA9PSBsaXN0IGFuZCB0eXBlLW9mKG50aCgkdHJhbnNpdGlvbi0xLDEpKSA9PSBsaXN0IHtcbiAgICAkdHJhbnNpdGlvbnM6IGpvaW4oJHRyYW5zaXRpb24tMSwgY29tcGFjdCgkdHJhbnNpdGlvbi0yLCAkdHJhbnNpdGlvbi0zLCAkdHJhbnNpdGlvbi00LCAkdHJhbnNpdGlvbi01LCAkdHJhbnNpdGlvbi02LCAkdHJhbnNpdGlvbi03LCAkdHJhbnNpdGlvbi04LCAkdHJhbnNpdGlvbi05LCAkdHJhbnNpdGlvbi0xMCksIGNvbW1hKTtcbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zaXRpb25zIDogY29tcGFjdCgkdHJhbnNpdGlvbi0xLCAkdHJhbnNpdGlvbi0yLCAkdHJhbnNpdGlvbi0zLCAkdHJhbnNpdGlvbi00LCAkdHJhbnNpdGlvbi01LCAkdHJhbnNpdGlvbi02LCAkdHJhbnNpdGlvbi03LCAkdHJhbnNpdGlvbi04LCAkdHJhbnNpdGlvbi05LCAkdHJhbnNpdGlvbi0xMCk7XG4gIH1cbiAgJGRlbGF5czogY29tbWEtbGlzdCgpO1xuICAkaGFzLWRlbGF5czogZmFsc2U7XG4gICR3ZWJraXQtdmFsdWU6IGNvbW1hLWxpc3QoKTtcbiAgJG1vei12YWx1ZTogY29tbWEtbGlzdCgpO1xuICAkby12YWx1ZTogY29tbWEtbGlzdCgpO1xuXG4gIC8vIFRoaXMgYmxvY2sgY2FuIGJlIG1hZGUgY29uc2lkZXJhYmx5IHNpbXBsZXIgYXQgdGhlIHBvaW50IGluIHRpbWUgdGhhdFxuICAvLyB3ZSBubyBsb25nZXIgbmVlZCB0byBkZWFsIHdpdGggdGhlIGRpZmZlcmVuY2VzIGluIGhvdyBkZWxheXMgYXJlIHRyZWF0ZWQuXG4gIEBlYWNoICR0cmFuc2l0aW9uIGluICR0cmFuc2l0aW9ucyB7XG4gICAgLy8gRXh0cmFjdCB0aGUgdmFsdWVzIGZyb20gdGhlIGxpc3RcbiAgICAvLyAodGhpcyB3b3VsZCBiZSBjbGVhbmVyIGlmIG50aCB0b29rIGEgM3JkIGFyZ3VtZW50IHRvIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlKS5cbiAgICAkcHJvcGVydHk6IG50aCgkdHJhbnNpdGlvbiwgMSk7XG4gICAgJGR1cmF0aW9uOiBmYWxzZTtcbiAgICAkdGltaW5nLWZ1bmN0aW9uOiBmYWxzZTtcbiAgICAkZGVsYXk6IGZhbHNlO1xuICAgIEBpZiBsZW5ndGgoJHRyYW5zaXRpb24pID4gMSB7ICRkdXJhdGlvbjogICAgICAgIG50aCgkdHJhbnNpdGlvbiwgMik7IH1cbiAgICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA+IDIgeyAkdGltaW5nLWZ1bmN0aW9uOiBudGgoJHRyYW5zaXRpb24sIDMpOyB9XG4gICAgQGlmIGxlbmd0aCgkdHJhbnNpdGlvbikgPiAzIHsgJGRlbGF5OiAgICAgICAgICAgbnRoKCR0cmFuc2l0aW9uLCA0KTsgJGhhcy1kZWxheXM6IHRydWU7IH1cblxuICAgIC8vIElmIGEgZGVsYXkgaXMgcHJvdmlkZWQgd2l0aG91dCBhIHRpbWluZyBmdW5jdGlvblxuICAgIEBpZiBpcy10aW1lKCR0aW1pbmctZnVuY3Rpb24pIGFuZCBub3QoJGRlbGF5KSB7ICRkZWxheTogJHRpbWluZy1mdW5jdGlvbjsgJHRpbWluZy1mdW5jdGlvbjogZmFsc2U7ICRoYXMtZGVsYXlzOiB0cnVlOyB9XG5cbiAgICAvLyBLZWVwIGEgbGlzdCBvZiBkZWxheXMgaW4gY2FzZSBvbmUgaXMgc3BlY2lmaWVkXG4gICAgJGRlbGF5czogYXBwZW5kKCRkZWxheXMsIGlmKCRkZWxheSwgJGRlbGF5LCAwcykpO1xuXG4gICAgJHdlYmtpdC12YWx1ZTogYXBwZW5kKCR3ZWJraXQtdmFsdWUsIGNvbXBhY3QoKHByZWZpeGVkLWZvci10cmFuc2l0aW9uKC13ZWJraXQsICRwcm9wZXJ0eSkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24pLi4uKSk7XG4gICAgICAgJG1vei12YWx1ZTogYXBwZW5kKCAgICRtb3otdmFsdWUsIGNvbXBhY3QoKHByZWZpeGVkLWZvci10cmFuc2l0aW9uKCAgIC1tb3osICRwcm9wZXJ0eSkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24gJGRlbGF5KS4uLikpO1xuICAgICAgICAgJG8tdmFsdWU6IGFwcGVuZCggICAgICRvLXZhbHVlLCBjb21wYWN0KChwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbiggICAgIC1vLCAkcHJvcGVydHkpICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uICRkZWxheSkuLi4pKTtcbiAgfVxuXG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCAgICB7ICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbiA6ICR3ZWJraXQtdmFsdWU7XG4gICAgLy8gb2xkIHdlYmtpdCBkb2Vzbid0IHN1cHBvcnQgdGhlIGRlbGF5IHBhcmFtZXRlciBpbiB0aGUgc2hvcnRoYW5kIHNvIHdlIHByb2dyZXNzaXZlbHkgZW5oYW5jZSBpdC5cbiAgICBAaWYgJGhhcy1kZWxheXMgICAgICAgICAgICAgICAgICAgICAgIHsgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5IDogJGRlbGF5czsgICAgICAgfSB9XG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEgICB7ICAgICAgICAgIC1tb3otdHJhbnNpdGlvbiA6ICRtb3otdmFsdWU7ICAgIH1cbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgICAgICAgICAgICAtby10cmFuc2l0aW9uIDogJG8tdmFsdWU7ICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gOiAkdHJhbnNpdGlvbnM7XG59XG5cbi8vIGNvZXJjZSBhIGxpc3QgdG8gYmUgY29tbWEgZGVsaW1pdGVkIG9yIG1ha2UgYSBuZXcsIGVtcHR5IGNvbW1hIGRlbGltaXRlZCBsaXN0LlxuQGZ1bmN0aW9uIGNvbW1hLWxpc3QoJGxpc3Q6ICgpKSB7XG4gIEByZXR1cm4gam9pbigoKSwgJGxpc3QsIGNvbW1hKTtcbn1cblxuLy8gUmV0dXJucyBgJHByb3BlcnR5YCB3aXRoIHRoZSBnaXZlbiBwcmVmaXggaWYgaXQgaXMgZm91bmQgaW4gYCR0cmFuc2l0aW9uYWJsZS1wcmVmaXhlZC12YWx1ZXNgLlxuQGZ1bmN0aW9uIHByZWZpeGVkLWZvci10cmFuc2l0aW9uKCRwcmVmaXgsICRwcm9wZXJ0eSkge1xuICBAaWYgdHlwZS1vZigkcHJvcGVydHkpID09IGxpc3Qge1xuICAgICRuZXctbGlzdDogY29tbWEtbGlzdCgpO1xuICAgIEBlYWNoICR2IGluICRwcm9wZXJ0eSB7XG4gICAgICAkbmV3LWxpc3Q6IGFwcGVuZCgkbmV3LWxpc3QsIHByZWZpeGVkLWZvci10cmFuc2l0aW9uKCRwcmVmaXgsICR2KSk7XG4gICAgfVxuICAgIEByZXR1cm4gJG5ldy1saXN0O1xuICB9IEBlbHNlIHtcbiAgICBAaWYgaW5kZXgoJHRyYW5zaXRpb25hYmxlLXByZWZpeGVkLXZhbHVlcywgJHByb3BlcnR5KSB7XG4gICAgICBAcmV0dXJuICN7JHByZWZpeH0tI3skcHJvcGVydHl9O1xuICAgIH0gQGVsc2Uge1xuICAgICAgQHJldHVybiAkcHJvcGVydHk7XG4gICAgfVxuICB9XG59XG5cbi8vIENoZWNrcyBpZiB0aGUgdmFsdWUgZ2l2ZW4gaXMgYSB1bml0IG9mIHRpbWUuXG5AZnVuY3Rpb24gaXMtdGltZSgkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBudW1iZXIge1xuICAgIEByZXR1cm4gbm90KG5vdChpbmRleChzIG1zLCB1bml0KCR2YWx1ZSkpKSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-timeline",
                templateUrl: "./timeline.component.html",
                styleUrls: ["./timeline.component.scss"],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kikel\Documents\GitHub\My-personal-webpage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map