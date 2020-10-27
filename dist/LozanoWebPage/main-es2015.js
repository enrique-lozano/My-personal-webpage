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
        this.title = 'LozanoWebPage';
        this.FabOptions = {
            buttons: [
                {
                    icon: 'settings',
                    link: "contacto"
                },
                {
                    icon: 'contact_phone',
                    link: "contacto"
                },
                {
                    icon: 'business_center',
                    link: "experiencia"
                },
                {
                    icon: 'desktop_mac',
                    link: "habilidades"
                },
                {
                    icon: 'school',
                    link: "educacion"
                },
                {
                    icon: 'person',
                    link: "sobre"
                },
                {
                    icon: 'home',
                    link: "inicio"
                }
            ]
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
    } }, directives: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__["LeftTabComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__["RightTabComponent"], _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__["SpeedDialFabComponent"]], styles: [".fab-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .fab-button[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxraWtlbFxcRGVza3RvcFxcTG96YW5vV2ViUGFnZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FER0E7Ozs7d0NBQUE7O0FBTUE7RUFDSTtJQUNJLGFBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYi1idXR0b257XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgLmZhYi1idXR0b257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxufSIsIi5mYWItYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIE1PQklMRSBWSUVXXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mYWItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
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
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
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
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__["LeftTabComponent"],
                    _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"],
                    _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"],
                    _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__["SpeedDialFabComponent"]
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
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
                ],
                providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./src/globals.ts");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-header/tab-header.component */ "./src/app/tab-header/tab-header.component.ts");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../right-tab/right-tab.component */ "./src/app/right-tab/right-tab.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

 //Global variables








const _c0 = function () { return [""]; };
class LeftTabComponent {
    constructor(tabHeader, rightTab) {
        this.tabHeader = tabHeader;
        this.rightTab = rightTab;
        this.isCheckedDark = true;
        this.isChecked2 = false;
        //Importing the globals variables
        this.name = _globals__WEBPACK_IMPORTED_MODULE_1__["name"];
        this.job = _globals__WEBPACK_IMPORTED_MODULE_1__["job"];
    }
    ngOnInit() {
    }
    openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
    toDark() {
        if (this.isCheckedDark == true) { //Dark
            //We change the right tab, the headers and the left tab
            console.log("Dark mode.....");
            this.rightTab.darkModeRight();
            this.tabHeader.toDark();
            document.getElementById("main-tab").style.backgroundColor = "#151C21";
        }
        else { //Light
            //We change the right tab, the headers and the left tab
            console.log("Light mode.....");
            this.tabHeader.toLight();
            this.rightTab.lightModeRight();
            document.getElementById("main-tab").style.backgroundColor = "#3248F4";
        }
    }
    language() {
    }
}
LeftTabComponent.ɵfac = function LeftTabComponent_Factory(t) { return new (t || LeftTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__["RightTabComponent"])); };
LeftTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftTabComponent, selectors: [["app-left-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__["RightTabComponent"]])], decls: 68, vars: 16, consts: [["id", "main-tab", 1, "main-tab"], [1, "face-image"], ["src", "../../assets/images/IMGP0592.jpg", 1, "profile-picture"], [1, "name"], [1, "name-font"], [1, "job"], [1, "page-links"], ["fragment", "inicio", 3, "routerLink"], [1, "category"], ["src", "../../assets/icons/home.png", 1, "icon"], ["fragment", "sobre", 3, "routerLink"], ["src", "../../assets/icons/user-1.png", 1, "icon"], ["fragment", "educacion", 3, "routerLink"], ["src", "../../assets/icons/atomic.png", 1, "icon"], ["fragment", "habilidades", 3, "routerLink"], ["src", "../../assets/icons/monitor.png", 1, "icon"], ["fragment", "experiencia", 3, "routerLink"], ["src", "../../assets/icons/layers.png", 1, "icon"], ["fragment", "contacto", 3, "routerLink"], ["src", "../../assets/icons/chat.png", 1, "icon"], [3, "click"], ["src", "../../assets/icons/settings.png", 1, "icon"], [1, "social-media"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/enriqueloz88"], ["src", "../../assets/icons/github.png", 1, "social-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/"], ["src", "../../assets/icons/linkedin.png", 1, "social-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com"], ["src", "../../assets/icons/email.png", 1, "social-icon"], ["id", "myNav", 1, "overlay"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [1, "overlay-content"], [1, "title_settings"], ["src", "../../assets/icons/moon.png", 1, "selector"], [1, "aux-container"], [1, "aux-top", 3, "click"], [3, "ngModel", "ngModelChange"], [1, "aux-bottom"], ["src", "../../assets/icons/sun.png", 1, "selector"], [1, "aux"], ["src", "../../assets/icons/spain.png", 1, "flags"], ["src", "../../assets/icons/uk.png", 1, "flags"]], template: function LeftTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sobre mi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftTabComponent_Template_a_click_34_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ajustes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftTabComponent_Template_a_click_46_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftTabComponent_Template_div_click_54_listener() { return ctx.toDark(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeftTabComponent_Template_mat_slide_toggle_ngModelChange_55_listener($event) { return ctx.isCheckedDark = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftTabComponent_Template_div_click_63_listener() { return ctx.language(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeftTabComponent_Template_mat_slide_toggle_ngModelChange_64_listener($event) { return ctx.isChecked2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isCheckedDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChecked2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".main-tab[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 90%;\n  margin: 5%;\n  margin-top: 3%;\n  background-color: #3248f4;\n  border-radius: 22px;\n  color: white;\n  display: inline-block;\n  position: fixed;\n}\n\nspan[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  vertical-align: text-top;\n  font-size: large;\n  text-decoration: none;\n}\n\n.face-image[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  height: 6em;\n  width: 6em;\n  border-radius: 100%;\n  margin: 10%;\n  border: 0.2em solid white;\n}\n\n.name[_ngcontent-%COMP%] {\n  height: 13%;\n}\n\n.name-font[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: x-large;\n  margin-left: 10%;\n  margin-top: 5%;\n}\n\n.job[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-left: 10%;\n  font-size: large;\n}\n\n.page-links[_ngcontent-%COMP%] {\n  height: 52%;\n}\n\n.category[_ngcontent-%COMP%] {\n  font-size: large;\n  margin-top: 3.5%;\n  cursor: pointer;\n  transition-duration: 0.5s;\n}\n\n.category[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 1.4em;\n  width: 1.4em;\n  margin-left: 10%;\n  margin-right: 5%;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  height: 15%;\n  text-align: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 1.7em;\n  width: 1.7em;\n  margin: 5%;\n  cursor: pointer;\n  transition-duration: 1.5s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: rotate(360deg) scale(1.4);\n  \n}\n\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 30, 227, 0.92);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n\n.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n}\n\n.title_settings[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n  inline-size: block;\n  line-height: 1em;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%] {\n  margin-top: 250%;\n}\n\n.selector[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.flags[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.aux[_ngcontent-%COMP%] {\n  height: auto;\n  vertical-align: bottom;\n}\n\n.aux-top[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.aux-bottom[_ngcontent-%COMP%] {\n  height: 50%;\n  color: rgba(0, 30, 227, 0);\n}\n\n.aux-container[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .main-tab[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC10YWIvQzpcXFVzZXJzXFxraWtlbFxcRGVza3RvcFxcTG96YW5vV2ViUGFnZS9zcmNcXGFwcFxcbGVmdC10YWJcXGxlZnQtdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sZWZ0LXRhYi9sZWZ0LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksd0JBQUE7QUNBSjs7QURLQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNGSjs7QURNQTtFQUNJLFdBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNISjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURPQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNKSjs7QURPQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFBO0VBQ0ksV0FBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFJQSx5QkFBQTtBQ0xKOztBRFFBO0VBQ2dDLFNBQUE7RUFDSSxlQUFBO0VBQ2hDLHNCQUFBO0FDSEo7O0FET0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUlBLHlCQUFBO0FDTEo7O0FEUUE7RUFDbUQsbUNBQUE7RUFDQSxTQUFBO0VBQy9DLG9DQUFBO0VBQStDLCtCQUFBO0FDRm5EOztBREtBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGNBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0ksZ0JBQUE7QUNGTjs7QURLRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRko7O0FES0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0FDRko7O0FES0U7RUFDRyxXQUFBO0VBQ0EsMEJBQUE7QUNGTDs7QURLRTtFQUNFLHFCQUFBO0FDRko7O0FETUE7Ozs7d0NBQUE7O0FBTUE7RUFDSTtJQUNJLGFBQUE7RUNKTjs7RURNRTtJQUFZLGVBQUE7RUNGZDs7RURHRTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sZWZ0LXRhYi9sZWZ0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTGVmdCBDb250YWluZXIgZm9yIGxpbmtzIFxyXG4ubWFpbi10YWJ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDcyLCAyNDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuc3BhbntcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxufVxyXG5cclxuLy9JbmRpdmlkdWFsIHBhcnRzIG9mIHRoZSBsZWZ0IHRhYlxyXG5cclxuYXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8vUHJvZmlsZSBwaWN0dXJlXHJcbi5mYWNlLWltYWdle1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmV7XHJcbiAgICBoZWlnaHQ6IDZlbTtcclxuICAgIHdpZHRoOiA2ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMCU7XHJcbiAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlXHJcbn1cclxuXHJcbi8vSm9ic1xyXG4ubmFtZXtcclxuICAgIGhlaWdodDogMTMlO1xyXG59XHJcblxyXG4ubmFtZS1mb250e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5qb2J7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLy9MaW5rc1xyXG4ucGFnZS1saW5rc3tcclxuICAgIGhlaWdodDogNTIlO1xyXG59XHJcblxyXG4uY2F0ZWdvcnl7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLXRvcDogMy41JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uY2F0ZWdvcnk6aG92ZXJ7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgLyogSUUgOSAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyAvKiBTYWZhcmkgMy04ICovXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyBcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgLy9UcmFuc2l0aW9uIHRvIGFub3RoZXIgY29sb3JcclxufVxyXG5cclxuLmljb257XHJcbiAgICBoZWlnaHQ6IDEuNGVtO1xyXG4gICAgd2lkdGg6IDEuNGVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi8vU29jaWFsIG1lZGlhIGxpbmtzXHJcbi5zb2NpYWwtbWVkaWF7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29ue1xyXG4gICAgaGVpZ2h0OiAxLjdlbTtcclxuICAgIHdpZHRoOiAxLjdlbTtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuLnNvY2lhbC1pY29uOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtIDogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTsgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXHJcbiAgICAtbXMtdHJhbnNmb3JtICAgICA6IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7IC8qIElFIDkgKi9cclxuICAgIHRyYW5zZm9ybSAgICAgICAgIDogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTsgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzAsIDIyNywgMC45Mik7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSBhIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSBhOmhvdmVyLCAub3ZlcmxheSBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDQ1cHg7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGVfc2V0dGluZ3N7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGlubGluZS1zaXplOiBibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgfVxyXG5cclxuICBtYXQtc2xpZGUtdG9nZ2xle1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNTAlO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdG9ye1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwIDUlO1xyXG4gIH1cclxuXHJcbiAgLmZsYWdze1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwIDUlO1xyXG4gIH1cclxuXHJcbiAgLmF1eHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgfVxyXG5cclxuICAuYXV4LXRvcHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmF1eC1ib3R0b217XHJcbiAgICAgaGVpZ2h0OiA1MCU7IFxyXG4gICAgIGNvbG9yOiByZ2JhKDAsIDMwLCAyMjcsIDApO1xyXG59XHJcblxyXG4gIC5hdXgtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgTU9CSUxFIFZJRVdcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5tYWluLXRhYntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm92ZXJsYXkgYSB7Zm9udC1zaXplOiAyMHB4fVxyXG4gICAgLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi5tYWluLXRhYiB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogOTAlO1xuICBtYXJnaW46IDUlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuc3BhbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mYWNlLWltYWdlIHtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDZlbTtcbiAgd2lkdGg6IDZlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luOiAxMCU7XG4gIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XG59XG5cbi5uYW1lIHtcbiAgaGVpZ2h0OiAxMyU7XG59XG5cbi5uYW1lLWZvbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmpvYiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5wYWdlLWxpbmtzIHtcbiAgaGVpZ2h0OiA1MiU7XG59XG5cbi5jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbi10b3A6IDMuNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi5jYXRlZ29yeTpob3ZlciB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLyogU2FmYXJpIDMtOCAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogMS40ZW07XG4gIHdpZHRoOiAxLjRlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnNvY2lhbC1tZWRpYSB7XG4gIGhlaWdodDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gIGhlaWdodDogMS43ZW07XG4gIHdpZHRoOiAxLjdlbTtcbiAgbWFyZ2luOiA1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbn1cblxuLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7XG4gIC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpO1xuICAvKiBJRSA5ICovXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTtcbiAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzMCwgMjI3LCAwLjkyKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ub3ZlcmxheS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm92ZXJsYXkgYSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLm92ZXJsYXkgYTpob3ZlciwgLm92ZXJsYXkgYTpmb2N1cyB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4ub3ZlcmxheSAuY2xvc2VidG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLnRpdGxlX3NldHRpbmdzIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBpbmxpbmUtc2l6ZTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG59XG5cbm1hdC1zbGlkZS10b2dnbGUge1xuICBtYXJnaW4tdG9wOiAyNTAlO1xufVxuXG4uc2VsZWN0b3Ige1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMCA1JTtcbn1cblxuLmZsYWdzIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgNSU7XG59XG5cbi5hdXgge1xuICBoZWlnaHQ6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5hdXgtdG9wIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5hdXgtYm90dG9tIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGNvbG9yOiByZ2JhKDAsIDMwLCAyMjcsIDApO1xufVxuXG4uYXV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIE1PQklMRSBWSUVXXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLXRhYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5vdmVybGF5IGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5vdmVybGF5IC5jbG9zZWJ0biB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMzVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-tab',
                templateUrl: './left-tab.component.html',
                providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__["RightTabComponent"]],
                styleUrls: ['./left-tab.component.scss']
            }]
    }], function () { return [{ type: _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"] }, { type: _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__["RightTabComponent"] }]; }, null); })();


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
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./src/globals.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tab-header/tab-header.component */ "./src/app/tab-header/tab-header.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

 //Global variables












function RightTabComponent_mat_error_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_220_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [""]; };
class RightTabComponent {
    constructor(dialog, renderer) {
        this.dialog = dialog;
        this.renderer = renderer;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.name = _globals__WEBPACK_IMPORTED_MODULE_1__["name"];
        this.job = _globals__WEBPACK_IMPORTED_MODULE_1__["job"];
        this.description = _globals__WEBPACK_IMPORTED_MODULE_1__["description"];
        this.about_description = _globals__WEBPACK_IMPORTED_MODULE_1__["about_description"];
        //Binding variables
        this.about = "Sobre mi";
        this.education = "Educación";
        this.skills = "Habilidades";
        this.rewards = "Reconocimientos";
        this.experience = "Experiencia";
        this.contact = "Contacto";
        this.main_skills = "Principales habilidades";
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
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    //Functions that implements the dark mode on this
    darkModeRight() {
        // Change background
        this.renderer.setStyle(document.body, 'background-color', "#000000");
        // Change text
        document.getElementById("container").style.color = "white";
        //Change inicio
        document.getElementById("inicio").style.backgroundColor = "#151C21";
        //Change sobre
        document.getElementById("sobre").style.backgroundColor = "#151C21";
        //Change educacion
        document.getElementById("educacion").style.backgroundColor = "#151C21";
        //Change habilidades1
        document.getElementById("habilidades1").style.backgroundColor = "#151C21";
        //Change habilidades
        document.getElementById("habilidades").style.backgroundColor = "#151C21";
        var skill = document.getElementsByClassName("skill-set");
        for (var i = 0, len = skill.length; i < len; i++) {
            skill[i].style.backgroundColor = "black";
            skill[i].style.color = "white";
        }
        //Change reconocimientos
        /*
        document.getElementById("reconocimientos").style.backgroundColor = "#151C21";
        var rewards = document.getElementsByClassName("front") as HTMLCollectionOf<HTMLElement>;
        for(var i=0, len=rewards.length; i<len; i++)
        {
          rewards[i].style.backgroundColor = "black";
          rewards[i].style.color = "white";
        }
        var rewards = document.getElementsByClassName("back") as HTMLCollectionOf<HTMLElement>;
        for(var i=0, len=rewards.length; i<len; i++)
        {
          rewards[i].style.backgroundColor = "black";
          rewards[i].style.color = "white";
        }*/
        //Change experiencia
        document.getElementById("experiencia").style.backgroundColor = "#151C21";
        //Change contacto
        document.getElementById("contacto").style.backgroundColor = "#151C21";
        document.getElementById("light-form").style.display = "none";
        document.getElementById("dark-form").style.display = "block";
        //document.getElementById("mat-form-field").style.backgroundColor = "white";
        //Change left-tab
        //this.leftTab.toDark();
        //this.tabHeader.toDark();
    }
    lightModeRight() {
        // Change background
        this.renderer.setStyle(document.body, 'background-color', "#F3F6FF");
        // Change text
        document.getElementById("container").style.color = "black";
        //Change inicio
        document.getElementById("inicio").style.backgroundColor = "#3248F4";
        //Change sobre
        document.getElementById("sobre").style.backgroundColor = "white";
        //Change educacion
        document.getElementById("educacion").style.backgroundColor = "white";
        //Change habilidades1
        document.getElementById("habilidades1").style.backgroundColor = "#3248F4";
        //Change habilidades
        document.getElementById("habilidades").style.backgroundColor = "white";
        var skill = document.getElementsByClassName("skill-set");
        for (var i = 0, len = skill.length; i < len; i++) {
            skill[i].style.backgroundColor = "white";
            skill[i].style.color = "black";
        }
        //Change reconocimientos
        /*
        document.getElementById("reconocimientos").style.backgroundColor = "white";
        var rewards = document.getElementsByClassName("front") as HTMLCollectionOf<HTMLElement>;
        for(var i=0, len=rewards.length; i<len; i++)
        {
          rewards[i].style.backgroundColor = "white";
          rewards[i].style.color = "black";
        }
        var rewards = document.getElementsByClassName("back") as HTMLCollectionOf<HTMLElement>;
        for(var i=0, len=rewards.length; i<len; i++)
        {
          rewards[i].style.backgroundColor = "white";
          rewards[i].style.color = "black";
        }
        */
        //Change experiencia
        document.getElementById("experiencia").style.backgroundColor = "white";
        //Change contacto
        document.getElementById("contacto").style.backgroundColor = "white";
        document.getElementById("light-form").style.display = "block";
        document.getElementById("dark-form").style.display = "none";
    }
    ngOnInit() {
    }
}
RightTabComponent.ɵfac = function RightTabComponent_Factory(t) { return new (t || RightTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
RightTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightTabComponent, selectors: [["app-right-tab"]], decls: 255, vars: 31, consts: [["id", "container", 1, "container"], ["id", "inicio", 1, "home"], [1, "container_name"], [1, "name"], [1, "description"], [1, "buttons"], ["fragment", "sobre", 3, "routerLink"], ["color", "warn", "mat-raised-button", "", 1, "button"], ["id", "sobre", 1, "about-me"], [3, "parentData"], [1, "about-photo"], ["src", "../../assets/images/IMGP0592.jpg", 1, "profile-picture"], [1, "about-text"], [1, "about-hello"], [1, "about-description"], [1, "about-data"], [1, "about-data-left"], [2, "color", "rgb(68, 68, 68)"], [1, "about-data-right"], [1, "about-buttons"], ["target", "_blank", "href", "../../assets/Documents/cv1.pdf"], ["mat-raised-button", "", "color", "warn", 1, "button", 2, "margin-right", "20%"], ["fragment", "contacto", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 1, "button"], ["id", "educacion", 1, "time"], ["id", "habilidades1", 1, "main-skills"], [1, "main-skill"], ["src", "../../assets/icons/python.png", 1, "skill-picture"], [1, "text-skill"], ["src", "../../assets/icons/ai.png", 1, "skill-picture"], ["src", "../../assets/icons/social.png", 1, "skill-picture"], ["src", "../../assets/icons/linux.png", 1, "skill-picture"], ["id", "habilidades", 1, "skills"], [1, "skill-set", "first"], [1, "skill-title"], [1, "skill-title-column"], [1, "skill-set"], ["src", "../../assets/icons/uk.png", 1, "flag"], [1, "flag-title"], ["src", "../../assets/icons/spain.png", 1, "flag", "last"], ["id", "experiencia", 1, "experience"], [1, "post-experience", "left-post"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "post-picture", 3, "click"], [1, "text-post"], [1, "post-experience", "right-post"], ["src", "../../assets/images/uc3m.png", 1, "post-picture", 3, "click"], ["id", "contacto", 1, "about-me", "last"], [1, "contact-left"], [1, "contact-mini"], [1, "contact-mini-left"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com"], ["src", "../../assets/icons/correo.png", 1, "contact-icon"], [1, "contact-mini-right"], [1, "section"], [1, "section__item"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "sm-link__label"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/"], ["src", "../../assets/icons/linkedin (azul).png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.es/maps/place/Madrid/@40.4378698,-3.8196201,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902"], ["src", "../../assets/icons/alfiler.png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.es/maps/place/Madrid/@40.4378698,-3.8196201,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "contact-right"], ["id", "light-form", 1, "contact-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", "name", "email", 3, "formControl", "ngModel", "ngModelChange"], [4, "ngIf"], ["matInput", "", "placeholder", "Ex. Carolina, Mateo", "value", "", "name", "name_email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Propuesta de empleo", "value", "", "name", "subject", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Hola, me gustar\u00EDa conocer...", "name", "text", "rows", "3", 3, "ngModel", "ngModelChange"], ["id", "dark-form", 1, "contact-form"], [1, "example-full-width"], [3, "href"], ["mat-raised-button", "", "color", "warn", 2, "float", "right", "margin-right", "8%", "margin-top", "5%", "margin-bottom", "10%"]], template: function RightTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Conoce m\u00E1s sobre m\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-tab-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Hola, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cumplea\u00F1os:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Junio de 1999 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Localizaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Madrid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " kikelozano8@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Descarga mi CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Contratame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-tab-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Python ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Teamwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-tab-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-expansion-panel", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Technical skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Destacados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Inteligencia artificial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Desarrollo web/apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Bases de datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sistemas y Ofim\u00E1tica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Microsoft Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Office avanzado y Prezi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Lenguajes y frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "C/C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "HTML/CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Bash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "MIPS 32 Ensamblador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Otras herramientas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Adobe Photoshop/GIMP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Audacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Quartus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Weka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "JFlap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-expansion-panel", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Soft skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Trabajo en equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Resiliencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Organizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-expansion-panel", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Idiomas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Ingl\u00E9s, B2 - First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Espa\u00F1ol, Nativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "app-tab-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_167_listener() { return ctx.openDialog(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Voluntario evento tecnol\u00F3gico T3chfest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_171_listener() { return ctx.openDialog(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Profesor particular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "app-tab-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "kikelozano8@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Mi LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Madrid, Espa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "form", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-form-field", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Tu email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_218_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](219, RightTabComponent_mat_error_219_Template, 2, 0, "mat-error", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](220, RightTabComponent_mat_error_220_Template, 4, 0, "mat-error", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "mat-form-field", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_224_listener($event) { return ctx.name_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "mat-form-field", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_228_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "mat-form-field", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Tu mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "textarea", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_232_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "form", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "mat-form-field", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Tu email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_237_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](238, RightTabComponent_mat_error_238_Template, 2, 0, "mat-error", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, RightTabComponent_mat_error_239_Template, 4, 0, "mat-error", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "mat-form-field", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_243_listener($event) { return ctx.name_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "mat-form-field", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_247_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "mat-form-field", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Tu mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "textarea", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_251_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Soy ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about_description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("href", "mailto:kikelozano8@gmail.com?Subject=", ctx.subject, "&body=Hola%20", ctx.name, ",%20soy%20", ctx.name_email, ".%0A%0A%20%20%20", ctx.text, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_6__["TabHeaderComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n.container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 65%;\n  margin-top: 3%;\n  margin-right: 5%;\n  height: 100%;\n  vertical-align: top;\n  margin-left: 30%;\n}\n.home[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: 90%;\n  border-radius: 22px;\n  color: white;\n  position: relative;\n}\n.container_name[_ngcontent-%COMP%] {\n  height: 72%;\n  position: relative;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 4.5em;\n  line-height: 1em;\n  position: absolute;\n  bottom: 40%;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 1%;\n  font-weight: bold;\n}\n.description[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10%;\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: justify;\n  line-height: 1.5em;\n  font-size: 1.1em;\n}\n.button[_ngcontent-%COMP%] {\n  padding-left: 3%;\n  padding-right: 3%;\n}\n.buttons[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.about-me[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 70%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.about-photo[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 70%;\n  display: inline-block;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  height: 12em;\n  width: 12em;\n  border-radius: 100%;\n  margin: 19%;\n  margin-top: 7%;\n  border: 0.2em solid white;\n}\n.about-text[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 5%;\n  height: 70%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-hello[_ngcontent-%COMP%] {\n  margin-top: 7%;\n  font-size: 3em;\n  font-weight: bold;\n  height: 13%;\n}\n.about-description[_ngcontent-%COMP%] {\n  height: 30%;\n  color: #969696;\n  text-align: justify;\n}\n.about-data[_ngcontent-%COMP%] {\n  height: 20%;\n  color: #969696;\n}\n.about-data-left[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-data-right[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-buttons[_ngcontent-%COMP%] {\n  height: 30%;\n}\n.last[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n.first[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.time[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1em;\n}\n.skills[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 5%;\n}\n.skill-set[_ngcontent-%COMP%] {\n  margin-left: 7%;\n  margin-right: 5%;\n}\n.skill-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: #3248f4;\n}\n.skill-title-column[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.flag[_ngcontent-%COMP%] {\n  width: 7%;\n}\n.flag-title[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.skill-set[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding-top: 1.7%;\n  padding-left: 2%;\n}\n.main-skills[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  color: white;\n}\n.main-skill[_ngcontent-%COMP%] {\n  width: 25%;\n  display: inline-block;\n  transition-duration: 1s;\n}\n.main-skill[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n.main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.text-skill[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  font-size: large;\n  text-align: center;\n  padding-bottom: 7%;\n}\n.skill-picture[_ngcontent-%COMP%] {\n  height: 20%;\n  width: 25%;\n  padding-top: 20%;\n  padding-bottom: 13%;\n  cursor: pointer;\n}\n#reconocimientos[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.description-card[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-weight: bold;\n}\n.back-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n  font-style: italic;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n.reward[_ngcontent-%COMP%] {\n  width: 4em;\n}\n.card[_ngcontent-%COMP%] {\n  height: 12%;\n  width: 86%;\n  transform-style: preserve-3d;\n  position: relative;\n  transition: all 1s ease-in-out;\n  transition-duration: 1s;\n  cursor: pointer;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-left: 7%;\n  color: black;\n  margin-bottom: 3%;\n}\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #fdfcfc;\n  height: 100%;\n  width: 100%;\n  border-radius: 1em;\n  border: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-style: preserve-3d;\n  color: black;\n  perspective: 1000px;\n  box-shadow: 2px 4px 8px 1px rgba(0, 0, 0, 0.4);\n}\n.left-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n  font-size: large;\n}\n.right-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10%;\n}\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.front[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  transform: translateZ(120px);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: rotateY(180deg);\n}\n.experience[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 2%;\n}\n.post-experience[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-top: 5%;\n  display: inline-block;\n}\n.left-post[_ngcontent-%COMP%] {\n  margin-left: 13%;\n  margin-right: 7%;\n}\n.right-post[_ngcontent-%COMP%] {\n  margin-right: 20%;\n  vertical-align: top;\n}\n.post-picture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 5%;\n  margin-bottom: 5%;\n  cursor: pointer;\n}\n.text-post[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-align: justify;\n}\n#contacto[_ngcontent-%COMP%] {\n  height: auto;\n}\n.contact-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.contact-mini[_ngcontent-%COMP%] {\n  height: 33%;\n  width: 100%;\n  padding-top: 10%;\n}\n.contact-mini-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n.contact-mini-right[_ngcontent-%COMP%] {\n  width: 70%;\n  display: inline-block;\n  padding-top: 4%;\n  vertical-align: top;\n}\n.contact-right[_ngcontent-%COMP%] {\n  width: 60%;\n  display: inline-block;\n}\n.contact-icon[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.link-contact[_ngcontent-%COMP%] {\n  line-height: 0.5;\n}\nh2[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n#dark-form[_ngcontent-%COMP%] {\n  display: none;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #3248f4 !important;\n}\n .mat-form-field-underline {\n  \n  background-color: #3248f4 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #3248f4 !important;\n}\n.contact-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 5%;\n  margin-left: 2%;\n  margin-right: 1%;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sm-link[_ngcontent-%COMP%] {\n  --uismLinkDisplay: var(--smLinkDisplay, inline-flex);\n  --uismLinkTextColor: var(--smLinkTextColor);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover);\n  display: var(--uismLinkDisplay);\n  color: var(--uismLinkTextColor);\n  position: relative;\n  overflow: hidden;\n}\na.sm-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.sm-link__label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sm-link_padding-all[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after {\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before {\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  width: var(--uismLinkLineWeight);\n  height: 100%;\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  opacity: 0;\n  will-change: transform, opacity;\n  transition-property: transform, opacity;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]:hover::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover::after, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n\n.sm-link_padding-bottom[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  padding-bottom: var(--uismLinkLineWeight);\n  position: relative;\n}\n.sm-link_padding-bottom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.sm-link_bg[_ngcontent-%COMP%] {\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover, #fff);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n  transition: color 0.3s ease-out;\n}\n.sm-link_bg[_ngcontent-%COMP%]::before, .sm-link_bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  opacity: 0;\n  position: absolute;\n  transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.03s;\n}\n.sm-link_bg[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover::before, .sm-link_bg[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transition-duration: 0.35s, 0.35s;\n  transition-delay: 0s, 0s;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover {\n  color: var(--uismLinkTextColorHover);\n}\n\n.sm-link_text[_ngcontent-%COMP%]::before {\n  content: attr(data-sm-link-text);\n  color: var(--uismLinkTextColorHover);\n  position: absolute;\n}\n.sm-link_text[_ngcontent-%COMP%]::before, .sm-link_text[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.86, 0.6, 0.08, 1.01);\n  transition-duration: 0.3s;\n}\n.sm-link_text[_ngcontent-%COMP%]:hover::before, .sm-link_text[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n}\n\n.sm-link3[_ngcontent-%COMP%]::after {\n  transform: translate3d(-100%, 0, 0);\n  transition: transform 0.2s ease-in;\n}\n.sm-link3[_ngcontent-%COMP%]:hover::after {\n  transform: translate3d(0, 0, 0);\n}\n\n@media only screen and (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    margin-right: 3%;\n    width: 94%;\n    max-width: 95%;\n  }\n\n  .home[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: 100%;\n    border-radius: 22px;\n    color: white;\n    position: relative;\n  }\n\n  .container_name[_ngcontent-%COMP%] {\n    height: 80%;\n    position: relative;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 50%;\n    font-size: 4.5em;\n    line-height: 1em;\n    margin-left: 10%;\n    margin-right: 10%;\n    font-weight: bold;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 7%;\n    margin-left: 10%;\n    margin-right: 10%;\n    text-align: justify;\n    line-height: 1.5em;\n    font-size: 1.1em;\n  }\n\n  .about-me[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 100%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .about-photo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 20%;\n    position: relative;\n  }\n\n  .profile-picture[_ngcontent-%COMP%] {\n    height: 12em;\n    width: 12em;\n    border-radius: 100%;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    border: 0.2em solid white;\n  }\n\n  .about-text[_ngcontent-%COMP%] {\n    margin-top: 6%;\n    width: 86%;\n    margin-right: 7%;\n    margin-left: 7%;\n    height: 70%;\n    vertical-align: top;\n  }\n\n  .about-hello[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    font-weight: bold;\n    height: 8%;\n  }\n\n  .about-description[_ngcontent-%COMP%] {\n    height: 20%;\n    color: #969696;\n    text-align: justify;\n  }\n\n  .about-data[_ngcontent-%COMP%] {\n    height: 15%;\n    padding-top: 5%;\n    color: #969696;\n  }\n\n  .about-data-left[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n    margin-bottom: 4%;\n  }\n\n  .about-data-right[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n  }\n\n  .about-buttons[_ngcontent-%COMP%] {\n    padding-top: 22%;\n    height: 30%;\n    align-items: center;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    font-size: 1.15em;\n    padding: 3% 3%;\n    margin-bottom: 4%;\n  }\n\n  .main-skills[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: auto;\n    padding: 4%;\n    border-radius: 22px;\n    margin-top: 5%;\n    line-height: 1.2em;\n    color: white;\n  }\n\n  .main-skill[_ngcontent-%COMP%] {\n    width: 50%;\n    display: inline-block;\n  }\n\n  .main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .text-skill[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    padding-bottom: 7%;\n    font-size: 0.94em;\n  }\n\n  .skill-picture[_ngcontent-%COMP%] {\n    height: 7em;\n    width: auto;\n    padding-top: 10%;\n    padding-bottom: 13%;\n    cursor: pointer;\n  }\n\n  .skill-title-column[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 99%;\n    margin-top: 3%;\n    vertical-align: top;\n  }\n\n  .flag[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n\n  .flag-title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    min-width: 80%;\n  }\n\n  #contacto[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .contact-left[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-top: 2%;\n    vertical-align: top;\n  }\n\n  .contact-mini[_ngcontent-%COMP%] {\n    height: 33%;\n    width: 100%;\n    padding-top: 10%;\n  }\n\n  .contact-mini-left[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n\n  .contact-mini-right[_ngcontent-%COMP%] {\n    width: 75%;\n    display: inline-block;\n    padding-top: 5%;\n    vertical-align: top;\n  }\n\n  .contact-right[_ngcontent-%COMP%] {\n    width: 86%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-right: 7%;\n    margin-top: 3%;\n  }\n\n  .contact-icon[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .post-experience[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-top: 8%;\n    margin-bottom: 2%;\n    display: inline-block;\n  }\n\n  #reconocimientos[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 140%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .description-card[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    font-weight: bold;\n  }\n\n  .back-card[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n    font-style: italic;\n  }\n\n  @import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  .reward[_ngcontent-%COMP%] {\n    width: 4em;\n  }\n\n  .first_card[_ngcontent-%COMP%] {\n    margin-top: -15%;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    height: 16%;\n    width: 86%;\n    transform-style: preserve-3d;\n  }\n\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .left-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 80%;\n    font-size: large;\n  }\n\n  .right-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 20%;\n  }\n\n  .sm-link__label[_ngcontent-%COMP%] {\n    display: block;\n    font-size: medium;\n  }\n}\n\n@media only screen and (max-width: 1025px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtdGFiL0M6XFxVc2Vyc1xca2lrZWxcXERlc2t0b3BcXExvemFub1dlYlBhZ2Uvc3JjXFxhcHBcXHJpZ2h0LXRhYlxccmlnaHQtdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yaWdodC10YWIvcmlnaHQtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlQUSw4REFBQTtBQXhQUjtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURHQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRElBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREo7QURJQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNESjtBRElBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLFdBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7QUNESjtBRElBO0VBQ0ksY0FBQTtBQ0RKO0FES0E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRko7QURNQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNISjtBRE1BO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSEo7QURLQTtFQUNJLFNBQUE7QUNGSjtBRElBO0VBQ0UsY0FBQTtBQ0RGO0FESUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FES0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFJQSx1QkFBQTtBQ0ZKO0FES0E7RUFDZ0MsU0FBQTtFQUNJLGVBQUE7RUFDaEMsc0JBQUE7QUNBSjtBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBSjtBREdBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBSjtBRElBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7QURLQTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtBQ0ZGO0FES0E7RUFDSSxVQUFBO0FDRko7QURLQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBSUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ0hKO0FETUU7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0hOO0FETUU7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUNISjtBRE9FO0VBQ0UsMEJBQUE7QUNKSjtBRE9FO0VBQ0UsNEJBQUE7QUNKSjtBRE9FO0VBQ0UsMEJBQUE7QUNKSjtBRFNBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNOSjtBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ05KO0FEU0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ05KO0FEU0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFVBO0VBQ0ksWUFBQTtBQ1BKO0FEVUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDUEo7QURVQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDUEo7QURXQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEV0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNSSjtBRFdBO0VBQ0ksVUFBQTtBQ1JKO0FEV0E7RUFDSSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSxjQUFBO0FDUko7QURXQTtFQUNFLGFBQUE7QUNSRjtBRFdBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEV0M7RUFDQyw0QkFBQTtFQUNBLG9DQUFBO0FDUkY7QURXQTtFQUNDLHlDQUFBO0VBQ0Esb0NBQUE7QUNSRDtBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUko7QURXQTtFQUNJLFdBQUE7QUNSSjtBRGFBOztDQUFBO0FBSUE7RUFDQyxvREFBQTtFQUNBLDJDQUFBO0VBQ0EscURBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1pEO0FEZUE7RUFDQyxxQkFBQTtBQ1pEO0FEZUE7RUFDRSxjQUFBO0FDWkY7QURnQkEsd0JBQUE7QUFFQTtFQUNDLGtEQUFBO0VBQ0EsaURBQUE7RUFDQSw0Q0FBQTtFQUVBLCtCQUFBO0FDZkQ7QURrQkE7O0VBRUUsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsT0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsTUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsU0FBQTtBQ2ZGO0FEa0JBOztFQUVFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUNmRjtBRGtCQTtFQUNFLE9BQUE7QUNmRjtBRGtCQTtFQUNFLFFBQUE7QUNmRjtBRGtCQTs7OztFQUlFLFdBQUE7RUFDRCwwQ0FBQTtFQUNDLGtCQUFBO0VBQ0QsVUFBQTtFQUVBLCtCQUFBO0VBQ0EsdUNBQUE7QUNoQkQ7QURtQkE7Ozs7RUFJQyxVQUFBO0FDaEJEO0FEbUJBLDJCQUFBO0FBRUE7RUFDQyxrREFBQTtFQUNBLGlEQUFBO0VBRUEseUNBQUE7RUFDQSxrQkFBQTtBQ2xCRDtBRHFCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDRCwwQ0FBQTtFQUVDLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNuQkY7QURzQkEsZUFBQTtBQUVBO0VBQ0MsaURBQUE7RUFDQSwyREFBQTtFQUNBLDRDQUFBO0VBRUEsK0JBQUE7RUFDQSwrQkFBQTtBQ3JCRDtBRHdCQTs7RUFFRSxXQUFBO0VBQ0QsMENBQUE7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFFRCxnRUFBQTtBQ3RCRDtBRHlCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ3RCRjtBRHlCQTs7RUFFRSxVQUFBO0VBQ0QsaUNBQUE7RUFDQSx3QkFBQTtBQ3RCRDtBRHlCQTtFQUNDLG9DQUFBO0FDdEJEO0FEeUJBLGlCQUFBO0FBRUE7RUFDRSxnQ0FBQTtFQUNELG9DQUFBO0VBQ0Msa0JBQUE7QUN2QkY7QUQwQkE7O0VBRUUsOEJBQUE7RUFDRCwrREFBQTtFQUNBLHlCQUFBO0FDdkJEO0FEMEJBOztFQUVDLHlCQUFBO0FDdkJEO0FEMEJBLGFBQUE7QUFFQTtFQUNFLG1DQUFBO0VBQ0Esa0NBQUE7QUN4QkY7QUQyQkE7RUFDRSwrQkFBQTtBQ3hCRjtBRDRCQTs7Ozt3Q0FBQTtBQU1BO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQzFCRjs7RUQ4QkE7SUFDRSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQzNCRjs7RUQrQkE7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUM1Qko7O0VEK0JBO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQzVCSjs7RUQrQkE7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDNUJKOztFRGdDQTtJQUNFLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQzdCRjs7RURnQ0E7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDN0JGOztFRGdDQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtFQzdCRjs7RURnQ0E7SUFDRSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQzdCRjs7RURnQ0E7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtFQzdCRjs7RURnQ0E7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDN0JGOztFRGdDQTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQzdCRjs7RURnQ0E7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VDN0JGOztFRGdDQTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VDN0JGOztFRGdDQTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDN0JGOztFRGdDQTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDN0JGOztFRGlDQTtJQUNFLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUM5QkY7O0VEaUNBO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0VDOUJGOztFRGlDQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDOUJGOztFRGlDQTtJQUNFLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQzlCRjs7RURpQ0E7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VDOUJGOztFRGtDQTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQy9CRjs7RURrQ0E7SUFDRSxVQUFBO0VDL0JGOztFRGtDQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VDL0JGOztFRG1DQTtJQUNFLFlBQUE7RUNoQ0Y7O0VEbUNBO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDaENGOztFRG1DQTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQ2hDRjs7RURvQ0E7SUFDRSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUNqQ0Y7O0VEb0NBO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ2pDRjs7RURvQ0E7SUFDRSxVQUFBO0VDakNGOztFRG9DQTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtFQ2pDRjs7RURxQ0E7SUFDRSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUNsQ0Y7O0VEcUNBO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQ2xDRjs7RURxQ0E7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNsQ0Y7O0VEcUNRLDhEQUFBO0VBQ1I7SUFDQSxTQUFBO0lBQ0Esc0JBQUE7RUNsQ0E7O0VEcUNBO0lBQ0UsVUFBQTtFQ2xDRjs7RURxQ0E7SUFDRSxnQkFBQTtFQ2xDRjs7RURxQ0E7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLDRCQUFBO0VDbENGOztFRHFDQTtJQUNFLGtCQUFBO0VDbENGOztFRHFDQTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VDbENKOztFRHFDQTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtFQ2xDRjs7RURxQ0E7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7RUNsQ0Y7QUFDRjtBRHVDQTs7Ozt3Q0FBQTtBQU1BO0VBQ0U7SUFDRSxrQkFBQTtFQ3RDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmlnaHQtdGFiL3JpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVGhlIGZ1bGwgcGFnZSBpcyBvcmdhbmlzZWQgaW4gdHdvIGNvbXBvbmVudHMsIHRoZSByaWdodCBvbmUgYW5kIHRoZSBsZWZ0IG9uZVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml0IHRoZSBob21lXHJcbi5ob21le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcl9uYW1le1xyXG4gICAgaGVpZ2h0OiA3MiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYW1le1xyXG4gICAgZm9udC1zaXplOiA0LjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTsgXHJcbiAgcGFkZGluZy1yaWdodDogMyU7XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBhYm91dCBtZVxyXG4uYWJvdXQtbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uYWJvdXQtcGhvdG97XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmV7XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICB3aWR0aDogMTJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDE5JTtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgYm9yZGVyOiAwLjJlbSBzb2xpZCB3aGl0ZVxyXG59XHJcblxyXG4uYWJvdXQtdGV4dHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uYWJvdXQtaGVsbG97XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDEzJTtcclxufVxyXG5cclxuLmFib3V0LWRlc2NyaXB0aW9ue1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmFib3V0LWRhdGF7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbn1cclxuXHJcbi5hYm91dC1kYXRhLWxlZnR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmFib3V0LWRhdGEtcmlnaHR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmFib3V0LWJ1dHRvbnN7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuLmxhc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmZpcnN0e1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIHRpbWVsaW5lXHJcbi50aW1le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgc2tpbGxzXHJcbi5za2lsbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5za2lsbC1zZXR7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uc2tpbGwtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxufVxyXG5cclxuLnNraWxsLXRpdGxlLWNvbHVtbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmZsYWd7XHJcbiAgICB3aWR0aDogNyU7XHJcbn1cclxuLmZsYWctdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5za2lsbC1zZXQgaDJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBtYWluLXNraWxsc1xyXG4ubWFpbi1za2lsbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig1MCwgNzIsIDI0NCk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFpbi1za2lsbHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbi5tYWluLXNraWxsOmhvdmVyIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IFxyXG59XHJcblxyXG4ubWFpbi1za2lsbCBpbWd7IC8vVGhpcyBpcyB0byBhbGlnbiBhIHBpY3R1cmUgaW4gdGhlIG1pZGR0ZSBvZiBhIGRpdlxyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRleHQtc2tpbGx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNyU7XHJcbn1cclxuXHJcbi5za2lsbC1waWN0dXJle1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGFja25vd2xlZGdlbWVudHNcclxuI3JlY29ub2NpbWllbnRvc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5iYWNrLWNhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFuZ2VycycpO1xyXG4qLCo6OmJlZm9yZSwqOjphZnRlcntcclxuICBtYXJnaW46MDtcclxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5yZXdhcmR7XHJcbiAgICB3aWR0aDogNGVtO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGhlaWdodDoxMiU7XHJcbiAgICB3aWR0aDogODYlO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7O1xyXG4gIH1cclxuICBcclxuICAuZnJvbnQsIC5iYWNre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUyLCAyNTIpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTAsIDcyLCAyNDQpIDAlLCByZ2IoNjUsIDg2LCAyNDcpIDEwMCUpO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxZW07XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggMXB4IHJnYmEoYmxhY2ssMC40KTtcclxuICB9XHJcblxyXG4gIC5sZWZ0LWNhcmR7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIC5yaWdodC1jYXJke1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJhY2t7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gIH1cclxuICBcclxuICAuZnJvbnQgPiBwICwgLmJhY2sgPiBwIHtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVaKDEyMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG4gIH1cclxuXHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBleHBlcmllbmNlXHJcbi5leHBlcmllbmNle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ucG9zdC1leHBlcmllbmNle1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubGVmdC1wb3N0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbn1cclxuXHJcbi5yaWdodC1wb3N0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4ucG9zdC1waWN0dXJle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRleHQtcG9zdHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGNvbnRhY3RcclxuI2NvbnRhY3Rve1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFjdC1sZWZ0e1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmNvbnRhY3QtbWluaXtcclxuICAgIGhlaWdodDogMzMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY29udGFjdC1taW5pLWxlZnR7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG5cclxuLmNvbnRhY3QtbWluaS1yaWdodHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uY29udGFjdC1yaWdodHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb250YWN0LWljb257XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ubGluay1jb250YWN0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxufVxyXG5cclxuI2RhcmstZm9ybXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gIGNvbG9yOiByZ2IoNTAsIDcyLCAyNDQpICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDcyLCAyNDQpICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KSAhaW1wb3J0YW50OztcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgfVxyXG4gIFxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuLy9HZW5lcmFsIEFuaW1hdGlvbnNcclxuXHJcbi8qXHJcbiogY29yZSBzdHlsZXNcclxuKi9cclxuXHJcbi5zbS1saW5re1xyXG5cdC0tdWlzbUxpbmtEaXNwbGF5OiB2YXIoLS1zbUxpbmtEaXNwbGF5LCBpbmxpbmUtZmxleCk7XHRcclxuXHQtLXVpc21MaW5rVGV4dENvbG9yOiB2YXIoLS1zbUxpbmtUZXh0Q29sb3IpO1xyXG5cdC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIpO1x0XHJcblx0XHJcblx0ZGlzcGxheTogdmFyKC0tdWlzbUxpbmtEaXNwbGF5KTtcclxuXHRjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3IpO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5hLnNtLWxpbmt7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc20tbGlua19fbGFiZWx7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy9mb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi8qIHNtLWxpbmtfcGFkZGluZy1hbGwgKi8gXHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbHtcclxuXHQtLXVpc21MaW5rTGluZVdlaWdodDogdmFyKC0tc21MaW5rTGluZVdlaWdodCwgMnB4KTtcclxuXHQtLXVpc21MaW5rTGluZUNvbG9yOiB2YXIoLS1zbUxpbmtMaW5lQ29sb3IsICMwMDApO1xyXG5cdC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xyXG5cdFxyXG5cdHBhZGRpbmc6IHZhcigtLXVpc21MaW5rUGFkZGluZyk7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmUsIFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiB2YXIoLS11aXNtTGlua0xpbmVXZWlnaHQpO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmV7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YWZ0ZXJ7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlcntcclxuICB3aWR0aDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZXtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmFmdGVye1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YWZ0ZXIsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiXCI7ICAgICBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aXNtTGlua0xpbmVDb2xvcik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuXHRvcGFjaXR5OiAwO1xyXG5cdFxyXG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3Zlcjo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3Zlcjo6YWZ0ZXIsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3ZlciAuc20tbGlua19fbGFiZWw6OmFmdGVye1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIHNtLWxpbmtfcGFkZGluZy1ib3R0b20gKi8gXHJcblxyXG4uc20tbGlua19wYWRkaW5nLWJvdHRvbXtcclxuXHQtLXVpc21MaW5rTGluZVdlaWdodDogdmFyKC0tc21MaW5rTGluZVdlaWdodCwgMnB4KTtcclxuXHQtLXVpc21MaW5rTGluZUNvbG9yOiB2YXIoLS1zbUxpbmtMaW5lQ29sb3IsICMwMDApO1x0XHJcblx0XHJcblx0cGFkZGluZy1ib3R0b206IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XHRcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYm90dG9tOjphZnRlcntcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aXNtTGlua0xpbmVDb2xvcik7XHJcblx0XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4vKiBzbS1saW5rX2JnICovIFxyXG5cclxuLnNtLWxpbmtfYmcge1xyXG5cdC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XHRcclxuXHQtLXVpc21MaW5rVGV4dENvbG9ySG92ZXI6IHZhcigtLXNtTGlua1RleHRDb2xvckhvdmVyLCAjZmZmKTtcdFxyXG5cdC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xyXG5cdFxyXG5cdHBhZGRpbmc6IHZhcigtLXVpc21MaW5rUGFkZGluZyk7XHJcblx0dHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc20tbGlua19iZzo6YmVmb3JlLCBcclxuLnNtLWxpbmtfYmc6OmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1x0XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dCwgb3BhY2l0eSAuMnMgZWFzZS1vdXQgLjAzcztcclxufVxyXG5cclxuLnNtLWxpbmtfYmcgLnNtLWxpbmtfX2xhYmVse1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc20tbGlua19iZzpob3Zlcjo6YmVmb3JlLCBcclxuLnNtLWxpbmtfYmc6aG92ZXI6OmFmdGVye1xyXG4gIG9wYWNpdHk6IDE7XHJcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjM1cywgLjM1cztcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHM7XHJcbn1cclxuXHJcbi5zbS1saW5rX2JnOmhvdmVye1xyXG5cdGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcclxufVxyXG5cclxuLyogc20tbGlua190ZXh0ICovIFxyXG5cclxuLnNtLWxpbmtfdGV4dDo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zbS1saW5rLXRleHQpO1xyXG5cdGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zbS1saW5rX3RleHQ6OmJlZm9yZSwgXHJcbi5zbS1saW5rX3RleHQgLnNtLWxpbmtfX2xhYmVse1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC44NiwgLjYsIC4wOCwgMS4wMSk7IFxyXG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxufVxyXG5cclxuLnNtLWxpbmtfdGV4dDpob3Zlcjo6YmVmb3JlLFxyXG4uc20tbGlua190ZXh0OmhvdmVyIC5zbS1saW5rX19sYWJlbHtcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi8qIGVmZmVjdCAzICovXHJcblxyXG4uc20tbGluazM6OmFmdGVye1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbjtcclxufVxyXG5cclxuLnNtLWxpbmszOmhvdmVyOjphZnRlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG4gIH1cclxuXHJcbiAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpdCB0aGUgaG9tZVxyXG4gIC5ob21le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml0IHRoZSBob21lXHJcbiAgLmNvbnRhaW5lcl9uYW1le1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm5hbWV7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNC41ZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDclO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gIH1cclxuXHJcbiAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgYWJvdXQgbWVcclxuICAuYWJvdXQtbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1waG90b3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1waWN0dXJle1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdGV4dHtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgd2lkdGg6IDg2JTtcclxuICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtaGVsbG97XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWRlc2NyaXB0aW9ue1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1kYXRhe1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWRhdGEtbGVmdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1kYXRhLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1idXR0b25ze1xyXG4gICAgcGFkZGluZy10b3A6IDIyJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idXR0b257XHJcbiAgICBmb250LXNpemU6IDEuMTVlbTtcclxuICAgIHBhZGRpbmc6IDMlIDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgfVxyXG5cclxuICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBtYWluLXNraWxsc1xyXG4gIC5tYWluLXNraWxsc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAubWFpbi1za2lsbHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWFpbi1za2lsbCBpbWd7IC8vVGhpcyBpcyB0byBhbGlnbiBhIHBpY3R1cmUgaW4gdGhlIG1pZGR0ZSBvZiBhIGRpdlxyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC50ZXh0LXNraWxse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNyU7XHJcbiAgICBmb250LXNpemU6IDAuOTRlbTtcclxuICB9XHJcblxyXG4gIC5za2lsbC1waWN0dXJle1xyXG4gICAgaGVpZ2h0OiA3ZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLnNraWxsLXRpdGxlLWNvbHVtbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG5cclxuICAuZmxhZ3tcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgfVxyXG4gICAgXHJcbiAgLmZsYWctdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBjb250YWN0XHJcbiAgI2NvbnRhY3Rve1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtbGVmdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtbWluaXtcclxuICAgIGhlaWdodDogMzMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtbWluaS1sZWZ0e1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1taW5pLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1yaWdodHtcclxuICAgIHdpZHRoOiA4NiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1pY29ue1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcblxyXG4gIC5wb3N0LWV4cGVyaWVuY2V7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC8vTW9iaWxlIHZpZXcgZm9yIHRoZSBhd2FyZHMgY2FyZFxyXG4gICNyZWNvbm9jaW1pZW50b3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1jYXJke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5iYWNrLWNhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG5cclxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhbmdlcnMnKTtcclxuICAqLCo6OmJlZm9yZSwqOjphZnRlcntcclxuICBtYXJnaW46MDtcclxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAucmV3YXJke1xyXG4gICAgd2lkdGg6IDRlbTtcclxuICB9XHJcblxyXG4gIC5maXJzdF9jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogLTE1JTtcclxuICB9XHJcblxyXG4gIC5jYXJke1xyXG4gICAgaGVpZ2h0OiAxNiU7XHJcbiAgICB3aWR0aDogODYlO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO1xyXG4gIH1cclxuXHJcbiAgLmJhY2t7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgfVxyXG5cclxuICAubGVmdC1jYXJke1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtY2FyZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG5cclxuICAuc20tbGlua19fbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIFRBQkxFVCBWSUVXXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpe1xyXG4gIC5iYWNre1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhbmdlcnNcIik7XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG4uaG9tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lcl9uYW1lIHtcbiAgaGVpZ2h0OiA3MiU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDQuNWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgcGFkZGluZy1yaWdodDogMyU7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5hYm91dC1tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5hYm91dC1waG90byB7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDEyZW07XG4gIHdpZHRoOiAxMmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDE5JTtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XG59XG5cbi5hYm91dC10ZXh0IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWhlbGxvIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxMyU7XG59XG5cbi5hYm91dC1kZXNjcmlwdGlvbiB7XG4gIGhlaWdodDogMzAlO1xuICBjb2xvcjogIzk2OTY5NjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmFib3V0LWRhdGEge1xuICBoZWlnaHQ6IDIwJTtcbiAgY29sb3I6ICM5Njk2OTY7XG59XG5cbi5hYm91dC1kYXRhLWxlZnQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWRhdGEtcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWJ1dHRvbnMge1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmxhc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLmZpcnN0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi50aW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uc2tpbGwtc2V0IHtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4uc2tpbGwtdGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMjQ4ZjQ7XG59XG5cbi5za2lsbC10aXRsZS1jb2x1bW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0OSU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZmxhZyB7XG4gIHdpZHRoOiA3JTtcbn1cblxuLmZsYWctdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnNraWxsLXNldCBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy10b3A6IDEuNyU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5tYWluLXNraWxscyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1za2lsbCB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4ubWFpbi1za2lsbDpob3ZlciB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLyogU2FmYXJpIDMtOCAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4ubWFpbi1za2lsbCBpbWcge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRleHQtc2tpbGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA3JTtcbn1cblxuLnNraWxsLXBpY3R1cmUge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy10b3A6IDIwJTtcbiAgcGFkZGluZy1ib3R0b206IDEzJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcmVjb25vY2ltaWVudG9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5kZXNjcmlwdGlvbi1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFjay1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJld2FyZCB7XG4gIHdpZHRoOiA0ZW07XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAxMiU7XG4gIHdpZHRoOiA4NiU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5mcm9udCwgLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmNmYztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBib3JkZXI6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBib3gtc2hhZG93OiAycHggNHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubGVmdC1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucmlnaHQtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwJTtcbn1cblxuLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZyb250ID4gcCwgLmJhY2sgPiBwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEyMHB4KTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5wb3N0LWV4cGVyaWVuY2Uge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubGVmdC1wb3N0IHtcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcbn1cblxuLnJpZ2h0LXBvc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnBvc3QtcGljdHVyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQtcG9zdCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4jY29udGFjdG8ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250YWN0LWxlZnQge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jb250YWN0LW1pbmkge1xuICBoZWlnaHQ6IDMzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5jb250YWN0LW1pbmktbGVmdCB7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QtbWluaS1yaWdodCB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDQlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY29udGFjdC1yaWdodCB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QtaWNvbiB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5saW5rLWNvbnRhY3Qge1xuICBsaW5lLWhlaWdodDogMC41O1xufVxuXG5oMiB7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4jZGFyay1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMzI0OGY0ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0OGY0ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLypcbiogY29yZSBzdHlsZXNcbiovXG4uc20tbGluayB7XG4gIC0tdWlzbUxpbmtEaXNwbGF5OiB2YXIoLS1zbUxpbmtEaXNwbGF5LCBpbmxpbmUtZmxleCk7XG4gIC0tdWlzbUxpbmtUZXh0Q29sb3I6IHZhcigtLXNtTGlua1RleHRDb2xvcik7XG4gIC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIpO1xuICBkaXNwbGF5OiB2YXIoLS11aXNtTGlua0Rpc3BsYXkpO1xuICBjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmEuc20tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNtLWxpbmtfX2xhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIHNtLWxpbmtfcGFkZGluZy1hbGwgKi9cbi5zbS1saW5rX3BhZGRpbmctYWxsIHtcbiAgLS11aXNtTGlua0xpbmVXZWlnaHQ6IHZhcigtLXNtTGlua0xpbmVXZWlnaHQsIDJweCk7XG4gIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XG4gIC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xuICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcbiAgbGVmdDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmJlZm9yZSB7XG4gIHRvcDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXIge1xuICB3aWR0aDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyLFxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUsXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyOjphZnRlcixcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXIgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIHNtLWxpbmtfcGFkZGluZy1ib3R0b20gKi9cbi5zbS1saW5rX3BhZGRpbmctYm90dG9tIHtcbiAgLS11aXNtTGlua0xpbmVXZWlnaHQ6IHZhcigtLXNtTGlua0xpbmVXZWlnaHQsIDJweCk7XG4gIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS11aXNtTGlua0xpbmVXZWlnaHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYm90dG9tOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpc21MaW5rTGluZUNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi8qIHNtLWxpbmtfYmcgKi9cbi5zbS1saW5rX2JnIHtcbiAgLS11aXNtTGlua0xpbmVDb2xvcjogdmFyKC0tc21MaW5rTGluZUNvbG9yLCAjMDAwKTtcbiAgLS11aXNtTGlua1RleHRDb2xvckhvdmVyOiB2YXIoLS1zbUxpbmtUZXh0Q29sb3JIb3ZlciwgI2ZmZik7XG4gIC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xuICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xufVxuXG4uc20tbGlua19iZzo6YmVmb3JlLFxuLnNtLWxpbmtfYmc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1vdXQgMC4wM3M7XG59XG5cbi5zbS1saW5rX2JnIC5zbS1saW5rX19sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLnNtLWxpbmtfYmc6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX2JnOmhvdmVyOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzLCAwLjM1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzO1xufVxuXG4uc20tbGlua19iZzpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcbn1cblxuLyogc20tbGlua190ZXh0ICovXG4uc20tbGlua190ZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtc20tbGluay10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXVpc21MaW5rVGV4dENvbG9ySG92ZXIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zbS1saW5rX3RleHQ6OmJlZm9yZSxcbi5zbS1saW5rX3RleHQgLnNtLWxpbmtfX2xhYmVsIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODYsIDAuNiwgMC4wOCwgMS4wMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5zbS1saW5rX3RleHQ6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX3RleHQ6aG92ZXIgLnNtLWxpbmtfX2xhYmVsIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLyogZWZmZWN0IDMgKi9cbi5zbS1saW5rMzo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnNtLWxpbmszOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1heC13aWR0aDogOTUlO1xuICB9XG5cbiAgLmhvbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jb250YWluZXJfbmFtZSB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG5cbiAgLmFib3V0LW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5hYm91dC1waG90byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiAxMmVtO1xuICAgIHdpZHRoOiAxMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xuICB9XG5cbiAgLmFib3V0LXRleHQge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICAgIHdpZHRoOiA4NiU7XG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5hYm91dC1oZWxsbyB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDglO1xuICB9XG5cbiAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG5cbiAgLmFib3V0LWRhdGEge1xuICAgIGhlaWdodDogMTUlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgfVxuXG4gIC5hYm91dC1kYXRhLWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICB9XG5cbiAgLmFib3V0LWRhdGEtcmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICB9XG5cbiAgLmFib3V0LWJ1dHRvbnMge1xuICAgIHBhZGRpbmctdG9wOiAyMiU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgIHBhZGRpbmc6IDMlIDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICB9XG5cbiAgLm1haW4tc2tpbGxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0OGY0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA0JTtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubWFpbi1za2lsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAubWFpbi1za2lsbCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50ZXh0LXNraWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA3JTtcbiAgICBmb250LXNpemU6IDAuOTRlbTtcbiAgfVxuXG4gIC5za2lsbC1waWN0dXJlIHtcbiAgICBoZWlnaHQ6IDdlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNraWxsLXRpdGxlLWNvbHVtbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5mbGFnIHtcbiAgICB3aWR0aDogNDclO1xuICB9XG5cbiAgLmZsYWctdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWluLXdpZHRoOiA4MCU7XG4gIH1cblxuICAjY29udGFjdG8ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb250YWN0LWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5jb250YWN0LW1pbmkge1xuICAgIGhlaWdodDogMzMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gIH1cblxuICAuY29udGFjdC1taW5pLWxlZnQge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmNvbnRhY3QtbWluaS1yaWdodCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuY29udGFjdC1yaWdodCB7XG4gICAgd2lkdGg6IDg2JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cblxuICAuY29udGFjdC1pY29uIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLnBvc3QtZXhwZXJpZW5jZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAjcmVjb25vY2ltaWVudG9zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDE0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5iYWNrLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFuZ2Vyc1wiKTtcbiAgKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAucmV3YXJkIHtcbiAgICB3aWR0aDogNGVtO1xuICB9XG5cbiAgLmZpcnN0X2NhcmQge1xuICAgIG1hcmdpbi10b3A6IC0xNSU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiAxNiU7XG4gICAgd2lkdGg6IDg2JTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG5cbiAgLmJhY2sge1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgfVxuXG4gIC5sZWZ0LWNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogODAlO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cblxuICAucmlnaHQtY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAuc20tbGlua19fbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgVEFCTEVUIFZJRVdcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNXB4KSB7XG4gIC5iYWNrIHtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-right-tab',
                templateUrl: './right-tab.component.html',
                styleUrls: ['./right-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();
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
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
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
                selector: 'dialog-content-example-dialog-2',
                templateUrl: 'dialog-content-example-dialog-2.html',
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
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [""]; };
function SpeedDialFabComponent_button_6_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fragment", btn_r8.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r8.icon);
} }
function SpeedDialFabComponent_button_6_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_button_6_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r8.icon);
} }
function SpeedDialFabComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpeedDialFabComponent_button_6_a_1_Template, 3, 4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpeedDialFabComponent_button_6_a_2_Template, 3, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", btn_r8.icon != "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", btn_r8.icon == "settings");
} }
const _c1 = function (a0) { return { value: a0 }; };
class SpeedDialFabComponent {
    constructor(leftTab) {
        this.leftTab = leftTab;
        this.buttons = [];
        this.fabTogglerState = 'inactive';
    }
    ngOnInit() {
        const maxButtons = 7;
        if (this.options.buttons.length > maxButtons) {
            this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
        }
    }
    open() {
        this.leftTab.openNav();
    }
    showItems() {
        this.fabTogglerState = 'active';
        this.buttons = this.options.buttons;
    }
    hideItems() {
        this.fabTogglerState = 'inactive';
        this.buttons = [];
    }
    toggle() {
        this.buttons.length
            ? this.hideItems()
            : this.showItems();
    }
}
SpeedDialFabComponent.ɵfac = function SpeedDialFabComponent_Factory(t) { return new (t || SpeedDialFabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"])); };
SpeedDialFabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpeedDialFabComponent, selectors: [["app-speed-dial-fab"]], inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]])], decls: 7, vars: 6, consts: [["id", "fab-dismiss", 3, "click", 4, "ngIf"], [1, "fab-container"], ["mat-fab", "", "color", "warn", 1, "fab-toggler", 3, "click"], [1, "material-icons"], ["mat-mini-fab", "", "class", "fab-secondary", "color", "secondary", 4, "ngFor", "ngForOf"], ["id", "fab-dismiss", 3, "click"], ["mat-mini-fab", "", "color", "secondary", 1, "fab-secondary"], [3, "routerLink", "fragment", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "routerLink", "fragment"], [3, "click"]], template: function SpeedDialFabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpeedDialFabComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpeedDialFabComponent_button_6_Template, 3, 2, "button", 4);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".fab-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n}\n.fab-toggler[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n#fab-dismiss[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlZWQtZGlhbC1mYWIvQzpcXFVzZXJzXFxraWtlbFxcRGVza3RvcFxcTG96YW5vV2ViUGFnZS9zcmNcXGFwcFxcc3BlZWQtZGlhbC1mYWJcXHNwZWVkLWRpYWwtZmFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcGVlZC1kaWFsLWZhYi9zcGVlZC1kaWFsLWZhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ047QURDTTtFQUNFLG1CQUFBO0FDQ1I7QURJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zcGVlZC1kaWFsLWZhYi9zcGVlZC1kaWFsLWZhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZhYi10b2dnbGVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcbiAgXHJcbiAgI2ZhYi1kaXNtaXNzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuXHJcbiAgYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgICAiLCIuZmFiLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgei1pbmRleDogMTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmFiLWNvbnRhaW5lciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmZhYi1jb250YWluZXIgPiBkaXYgYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cblxuLmZhYi10b2dnbGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbiNmYWItZGlzbWlzcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"], data: { animation: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeedDialFabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-speed-dial-fab',
                templateUrl: './speed-dial-fab.component.html',
                styleUrls: ['./speed-dial-fab.component.scss'],
                providers: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]],
                animations: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"]
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
    ngOnInit() {
    }
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
    } }, styles: [".header[_ngcontent-%COMP%] {\n  height: 10%;\n  font-weight: bold;\n  font-size: xx-large;\n  color: black;\n  padding-top: 7%;\n  padding-left: 7%;\n}\n\n.underline--magical[_ngcontent-%COMP%] {\n  background-image: linear-gradient(120deg, #3248F4 0%, #8fd3f4 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 0.2em;\n  background-position: 0 88%;\n  transition: background-size 0.25s ease-in;\n}\n\n.underline--magical[_ngcontent-%COMP%]:hover {\n  background-size: 100% 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiLWhlYWRlci9DOlxcVXNlcnNcXGtpa2VsXFxEZXNrdG9wXFxMb3phbm9XZWJQYWdlL3NyY1xcYXBwXFx0YWItaGVhZGVyXFx0YWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLG1FQUFBO0VBRUEsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQUE7QUNESjs7QURFSTtFQUNFLHlCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDclO1xyXG59XHJcblxyXG4vL0FuaW1hdGlvbnMgZm9yIHRoZSB1bmRlcmxpbmVkIGVsZW1lbnRzXHJcbi51bmRlcmxpbmUtLW1hZ2ljYWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzMyNDhGNCAwJSwgIzhmZDNmNCAxMDAlKTtcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzMyNDhGNCAwJSwgI0ZGMDExRCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDg4JTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAwLjI1cyBlYXNlLWluO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA4OCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIiwiLmhlYWRlciB7XG4gIGhlaWdodDogMTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLXRvcDogNyU7XG4gIHBhZGRpbmctbGVmdDogNyU7XG59XG5cbi51bmRlcmxpbmUtLW1hZ2ljYWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzI0OEY0IDAlLCAjOGZkM2Y0IDEwMCUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMC4yZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgODglO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4yNXMgZWFzZS1pbjtcbn1cbi51bmRlcmxpbmUtLW1hZ2ljYWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgODglO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab-header',
                templateUrl: './tab-header.component.html',
                styleUrls: ['./tab-header.component.scss']
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


class TimelineComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 29, vars: 0, consts: [[1, "timeline"], [1, "timeline-event"], [1, "timeline-event-icon"], [1, "timeline-event-copy"], [1, "timeline-event-thumbnail"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Madrid-Espa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Grado en Ingenier\u00EDa Inform\u00E1tica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Menci\u00F3n en computaci\u00F3n");
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
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);\n\n\nbody[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: 0.05em;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  margin: 4em auto;\n  position: relative;\n  max-width: 46em;\n}\n.timeline[_ngcontent-%COMP%]:before {\n  background-color: black;\n  content: \"\";\n  margin-left: -1px;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 2px;\n  height: 100%;\n}\n.timeline-event[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-icon[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  background-color: #3248f4;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-thumbnail[_ngcontent-%COMP%] {\n  box-shadow: inset 40em 0 0 0 #3248f4;\n}\n.timeline-event-copy[_ngcontent-%COMP%] {\n  padding: 2em;\n  position: relative;\n  top: -1.875em;\n  left: 4em;\n  width: 80%;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1.2em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.timeline-event-thumbnail) {\n  padding-bottom: 1.2em;\n}\n.timeline-event-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in;\n  transform: rotate(45deg);\n  background-color: black;\n  outline: 10px solid white;\n  display: block;\n  margin: 0.5em 0.5em 0.5em -0.5em;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 1em;\n  height: 1em;\n}\n.timeline-event-thumbnail[_ngcontent-%COMP%] {\n  -webkit-transition: box-shadow 0.5s ease-in;\n  -webkit-transition-delay: 0.1s;\n  transition: box-shadow 0.5s ease-in 0.1s;\n  color: white;\n  font-size: 0.75em;\n  background-color: black;\n  box-shadow: inset 0 0 0 0em #3248f4;\n  display: inline-block;\n  margin-bottom: 1.2em;\n  padding: 0.25em 1em 0.2em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvQzpcXFVzZXJzXFxraWtlbFxcRGVza3RvcFxcTG96YW5vV2ViUGFnZS9zcmNcXGFwcFxcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZWxpbmUvQzpcXFVzZXJzXFxraWtlbFxcRGVza3RvcFxcTG96YW5vV2ViUGFnZS9ub2RlX21vZHVsZXNcXGNvbXBhc3MtbWl4aW5zXFxsaWJcXGNvbXBhc3NcXGNzczNcXF9zaGFyZWQuc2NzcyIsInNyYy9hcHAvdGltZWxpbmUvQzpcXFVzZXJzXFxraWtlbFxcRGVza3RvcFxcTG96YW5vV2ViUGFnZS9ub2RlX21vZHVsZXNcXGNvbXBhc3MtbWl4aW5zXFxsaWJcXGNvbXBhc3NcXGNzczNcXF9ib3gtc2l6aW5nLnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL0M6XFxVc2Vyc1xca2lrZWxcXERlc2t0b3BcXExvemFub1dlYlBhZ2Uvbm9kZV9tb2R1bGVzXFxjb21wYXNzLW1peGluc1xcbGliXFxjb21wYXNzXFxjc3MzXFxfdHJhbnNmb3JtLnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL0M6XFxVc2Vyc1xca2lrZWxcXERlc2t0b3BcXExvemFub1dlYlBhZ2Uvbm9kZV9tb2R1bGVzXFxjb21wYXNzLW1peGluc1xcbGliXFxjb21wYXNzXFxjc3MzXFxfYm94LXNoYWRvdy5zY3NzIiwic3JjL2FwcC90aW1lbGluZS9DOlxcVXNlcnNcXGtpa2VsXFxEZXNrdG9wXFxMb3phbm9XZWJQYWdlL25vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3RyYW5zaXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUVEsc0VBQUE7QUFOUixjQUFBO0FBS0EsVUFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUEsV0FBQTtBQUNBO0VFRWlFLHNCQ1gxRDtBRk9QO0FETUEsWUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNIRjtBREtFO0VBQ0UsdUJBekJNO0VBMEJOLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0hKO0FET0E7RUFDRSxrQkFBQTtBQ0pGO0FEUUk7RUV6QjZELHlCRTZTdkQ7RUpsUkoseUJBekNJO0FDdUNWO0FES0k7RUU5QjZELG9DRzBCckQ7QUpJWjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7QURLRTtFQUNFLGlCQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSjtBRFFFO0VBQ0UscUJBQUE7QUNOSjtBRFVBO0VNNEcwRCxrQ0FyQ3ZDO0VKcEk4Qyx3QkU2U3ZEO0VKNU9SLHVCQWpGUTtFQWtGUix5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUE7RU13RmtELDJDQUwvQjtFQU95Qiw4QkFUL0I7RUFZNkMsd0NBckN2QztFTnREakIsWUE3RlE7RUE4RlIsaUJBQUE7RUFFQSx1QkFqR1E7RUVnQnVELG1DRzBCckQ7RUx5RFYscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35jb21wYXNzLW1peGlucy9saWIvY29tcGFzcy9jc3MzJztcclxuXHJcbi8qIFZhcmlhYmxlcyAqL1xyXG4kY29sb3ItMTogYmxhY2s7XHJcbiRjb2xvci0yOiB3aGl0ZTtcclxuJGNvbG9yLTM6IHJnYig1MCwgNzIsIDI0NCk7XHJcblxyXG4vKiBGb250cyAqL1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw3MDApO1xyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxufVxyXG5cclxuLyogTGF5b3V0ICovXHJcbioge1xyXG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgKi9cclxuLnRpbWVsaW5lIHtcclxuICBtYXJnaW46IDRlbSBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDQ2ZW07XHJcbiAgXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMmVtO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gIFxyXG4gICAgLnRpbWVsaW5lLWV2ZW50LWljb24ge1xyXG4gICAgICBAaW5jbHVkZSByb3RhdGUgKC00NWRlZyk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsIHtcclxuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCA0MGVtIDAgMCAwICRjb2xvci0zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudC1jb3B5IHtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEuODc1ZW07XHJcbiAgbGVmdDogNGVtO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICB9XHJcbiAgXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIHA6bm90KC50aW1lbGluZS1ldmVudC10aHVtYm5haWwpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudC1pY29uIHtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4pO1xyXG4gIEBpbmNsdWRlIHJvdGF0ZSAoNDVkZWcpO1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0xO1xyXG4gIG91dGxpbmU6IDEwcHggc29saWQgJGNvbG9yLTI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwLjVlbSAtMC41ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAyZW07XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWV2ZW50LXRodW1ibmFpbCB7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3gtc2hhZG93IDAuNXMgZWFzZS1pbiAwLjFzKTtcclxuICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XHJcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDAgMCAwZW0gcmdiKDUwLCA3MiwgMjQ0KSk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAxZW0gMC4yZW0gMWVtO1xyXG59IiwiLyogVmFyaWFibGVzICovXG4vKiBGb250cyAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNzAwKTtcbmJvZHkge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLyogTGF5b3V0ICovXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFN0eWxpbmcgKi9cbi50aW1lbGluZSB7XG4gIG1hcmdpbjogNGVtIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA0NmVtO1xufVxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb250ZW50OiBcIlwiO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDJlbTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGltZWxpbmUtZXZlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGltZWxpbmUtZXZlbnQ6aG92ZXIgLnRpbWVsaW5lLWV2ZW50LWljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG59XG4udGltZWxpbmUtZXZlbnQ6aG92ZXIgLnRpbWVsaW5lLWV2ZW50LXRodW1ibmFpbCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgNDBlbSAwIDAgMCAjMzI0OGY0O1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDQwZW0gMCAwIDAgIzMyNDhmNDtcbiAgYm94LXNoYWRvdzogaW5zZXQgNDBlbSAwIDAgMCAjMzI0OGY0O1xufVxuXG4udGltZWxpbmUtZXZlbnQtY29weSB7XG4gIHBhZGRpbmc6IDJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xLjg3NWVtO1xuICBsZWZ0OiA0ZW07XG4gIHdpZHRoOiA4MCU7XG59XG4udGltZWxpbmUtZXZlbnQtY29weSBoMyB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xufVxuLnRpbWVsaW5lLWV2ZW50LWNvcHkgaDQge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbn1cbi50aW1lbGluZS1ldmVudC1jb3B5IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGltZWxpbmUtZXZlbnQtY29weSBwOm5vdCgudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsKSB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcbn1cblxuLnRpbWVsaW5lLWV2ZW50LWljb24ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiAxMHB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwLjVlbSAtMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyZW07XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xufVxuXG4udGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIC1vLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDBlbSAjMzI0OGY0O1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDBlbSAjMzI0OGY0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwZW0gIzMyNDhmNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgcGFkZGluZzogMC4yNWVtIDFlbSAwLjJlbSAxZW07XG59IiwiQGltcG9ydCBcIi4uL3N1cHBvcnRcIjtcclxuXHJcbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzaWMgc3VwcG9ydCBmb3IgQ1NTMyBwcm9wZXJ0aWVzIGFuZFxyXG4vLyB0aGVpciBjb3JyZXNwb25kaW5nIGV4cGVyaW1lbnRhbCBDU1MyIHByb3BlcnRpZXMgd2hlblxyXG4vLyB0aGUgaW1wbGVtZW50YXRpb25zIGFyZSBpZGVudGljYWwgZXhjZXB0IGZvciB0aGUgcHJvcGVydHlcclxuLy8gcHJlZml4LlxyXG5AbWl4aW4gZXhwZXJpbWVudGFsKCRwcm9wZXJ0eSwgJHZhbHVlLFxyXG4gICRtb3ogICAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSxcclxuICAkd2Via2l0ICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCxcclxuICAkbyAgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhLFxyXG4gICRtcyAgICAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbWljcm9zb2Z0LFxyXG4gICRraHRtbCAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwsXHJcbiAgJG9mZmljaWFsIDogdHJ1ZVxyXG4pIHtcclxuICBAaWYgJHdlYmtpdCAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0ICAgIHsgLXdlYmtpdC0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cclxuICBAaWYgJGtodG1sICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwgICAgIHsgIC1raHRtbC0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cclxuICBAaWYgJG1veiAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSAgIHsgICAgLW1vei0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cclxuICBAaWYgJG1zICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbWljcm9zb2Z0IHsgICAgIC1tcy0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cclxuICBAaWYgJG8gICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgICAgICAtby0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cclxuICBAaWYgJG9mZmljaWFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAjeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cclxufVxyXG5cclxuLy8gU2FtZSBhcyBleHBlcmltZW50YWwoKSwgYnV0IGZvciBjYXNlcyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyB0aGUgc2FtZSBhbmQgdGhlIHZhbHVlIGlzIHZlbmRvcml6ZWRcclxuQG1peGluIGV4cGVyaW1lbnRhbC12YWx1ZSgkcHJvcGVydHksICR2YWx1ZSxcclxuICAkbW96ICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEsXHJcbiAgJHdlYmtpdCAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQsXHJcbiAgJG8gICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSxcclxuICAkbXMgICAgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1pY3Jvc29mdCxcclxuICAka2h0bWwgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLWtodG1sLFxyXG4gICRvZmZpY2lhbCA6IHRydWVcclxuKSB7XHJcbiAgQGlmICR3ZWJraXQgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCAgICB7ICN7JHByb3BlcnR5fSA6IC13ZWJraXQtI3skdmFsdWV9OyB9XHJcbiAgQGlmICRraHRtbCAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLWtodG1sICAgICB7ICN7JHByb3BlcnR5fSA6ICAta2h0bWwtI3skdmFsdWV9OyB9XHJcbiAgQGlmICRtb3ogICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEgICB7ICN7JHByb3BlcnR5fSA6ICAgIC1tb3otI3skdmFsdWV9OyB9XHJcbiAgQGlmICRtcyAgICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1pY3Jvc29mdCB7ICN7JHByb3BlcnR5fSA6ICAgICAtbXMtI3skdmFsdWV9OyB9XHJcbiAgQGlmICRvICAgICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhICAgICB7ICN7JHByb3BlcnR5fSA6ICAgICAgLW8tI3skdmFsdWV9OyB9XHJcbiAgQGlmICRvZmZpY2lhbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICN7JHByb3BlcnR5fSA6ICAgICAgICAgI3skdmFsdWV9OyB9XHJcbn1cclxuIiwiQGltcG9ydCBcInNoYXJlZFwiO1xyXG5cclxuLy8gQ2hhbmdlIHRoZSBib3ggbW9kZWwgZm9yIE1vemlsbGEsIFdlYmtpdCwgSUU4IGFuZCB0aGUgZnV0dXJlXHJcbi8vXHJcbi8vIEBwYXJhbSAkYnNcclxuLy8gICBbIGNvbnRlbnQtYm94IHwgYm9yZGVyLWJveCBdXHJcblxyXG5AbWl4aW4gYm94LXNpemluZygkYnMpIHtcclxuICAkYnM6IHVucXVvdGUoJGJzKTtcclxuICBAaW5jbHVkZSBleHBlcmltZW50YWwoYm94LXNpemluZywgJGJzLFxyXG4gICAgLW1veiwgLXdlYmtpdCwgbm90KC1vKSwgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxyXG4gICk7XHJcbn1cclxuIiwiQGltcG9ydCBcInNoYXJlZFwiO1xyXG5cclxuLy8gQGRvYyBvZmZcclxuLy8gTm90ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNhZmFyaSwgQ2hyb21lLCBhbmQgRmlyZWZveCBhbGwgc3VwcG9ydCAzRCB0cmFuc2Zvcm1zLiBIb3dldmVyLFxyXG4vLyBvbmx5IGluIHRoZSBtb3N0IHJlY2VudCBidWlsZHMuIFlvdSBzaG91bGQgYWxzbyBwcm92aWRlIGZhbGxiYWNrIDJkIHN1cHBvcnQgZm9yXHJcbi8vIE9wZXJhIGFuZCBJRS4gSUUxMCBpcyBzbGF0ZWQgdG8gaGF2ZSAzZCBlbmFibGVkLCBidXQgaXMgY3VycmVudGx5IHVucmVsZWFzZWQuXHJcbi8vIFRvIG1ha2UgdGhhdCBlYXN5LCBhbGwgMkQgdHJhbnNmb3JtcyBpbmNsdWRlIGFuIGJyb3dzZXItdGFyZ2V0aW5nIHRvZ2dsZSAoJG9ubHkzZClcclxuLy8gdG8gc3dpdGNoIGJldHdlZW4gdGhlIHR3byBzdXBwb3J0IGxpc3RzLiBUaGUgdG9nZ2xlIGRlZmF1bHRzIHRvICdmYWxzZScgKDJEKSxcclxuLy8gYW5kIGFsc28gYWNjZXB0cyAndHJ1ZScgKDNEKS4gQ3VycmVudGx5IHRoZSBsaXN0cyBhcmUgYXMgZm9sbG93czpcclxuLy8gMkQ6IE1vemlsbGEsIFdlYmtpdCwgT3BlcmEsIE9mZmljaWFsXHJcbi8vIDNEOiBXZWJraXQsIEZpcmVmb3guXHJcblxyXG4vLyBBdmFpbGFibGUgVHJhbnNmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLSBTY2FsZSAoMmQgYW5kIDNkKVxyXG4vLyAtIFJvdGF0ZSAoMmQgYW5kIDNkKVxyXG4vLyAtIFRyYW5zbGF0ZSAoMmQgYW5kIDNkKVxyXG4vLyAtIFNrZXcgKDJkIG9ubHkpXHJcblxyXG4vLyBUcmFuc2Zvcm0gUGFyYW1ldGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLSBUcmFuc2Zvcm0gT3JpZ2luICgyZCBhbmQgM2QpXHJcbi8vIC0gUGVyc3BlY3RpdmUgKDNkKVxyXG4vLyAtIFBlcnNwZWN0aXZlIE9yaWdpbiAoM2QpXHJcbi8vIC0gVHJhbnNmb3JtIFN0eWxlICgzZClcclxuLy8gLSBCYWNrZmFjZSBWaXNpYmlsaXR5ICgzZClcclxuXHJcbi8vIE1peGlucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyB0cmFuc2Zvcm0tb3JpZ2luXHJcbi8vICAtIHNob3J0Y3V0czogIHRyYW5zZm9ybS1vcmlnaW4yZCwgdHJhbnNmb3JtLW9yaWdpbjNkXHJcbi8vICAtIGhlbHBlcnM6ICAgIGFwcGx5LW9yaWdpblxyXG4vLyB0cmFuc2Zvcm1cclxuLy8gIC0gc2hvcnRjdXRzOiAgdHJhbnNmb3JtMmQsIHRyYW5zZm9ybTNkXHJcbi8vICAtIGhlbHBlcnM6ICAgIHNpbXBsZS10cmFuc2Zvcm0sIGNyZWF0ZS10cmFuc2Zvcm1cclxuLy8gcGVyc3BlY3RpdmVcclxuLy8gIC0gaGVscGVyczogICAgcGVyc3BlY3RpdmUtb3JpZ2luXHJcbi8vIHRyYW5zZm9ybS1zdHlsZVxyXG4vLyBiYWNrZmFjZS12aXNpYmlsaXR5XHJcbi8vIHNjYWxlXHJcbi8vICAtIHNob3J0Y3V0czogIHNjYWxlWCwgc2NhbGVZLCBzY2FsZVosIHNjYWxlM2RcclxuLy8gcm90YXRlXHJcbi8vICAtIHNob3J0Y3V0czogIHJvdGF0ZVgsIHJvdGF0ZVksIHJvdGF0ZTNkXHJcbi8vIHRyYW5zbGF0ZVxyXG4vLyAgLSBzaG9ydGN1dHM6ICB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCB0cmFuc2xhdGVaLCB0cmFuc2xhdGUzZFxyXG4vLyBza2V3XHJcbi8vICAtIHNob3J0Y3V0czogIHNrZXdYLCBza2V3WVxyXG5cclxuLy8gRGVmYXVsdHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEBkb2Mgb25cclxuXHJcbi8vIFRoZSBkZWZhdWx0IHgtb3JpZ2luIGZvciB0cmFuc2Zvcm1zXHJcbiRkZWZhdWx0LW9yaWdpbi14ICAgIDogNTAlICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG4vLyBUaGUgZGVmYXVsdCB5LW9yaWdpbiBmb3IgdHJhbnNmb3Jtc1xyXG4kZGVmYXVsdC1vcmlnaW4teSAgICA6IDUwJSAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcclxuLy8gVGhlIGRlZmF1bHQgei1vcmlnaW4gZm9yIHRyYW5zZm9ybXNcclxuJGRlZmF1bHQtb3JpZ2luLXogICAgOiA1MCUgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gVGhlIGRlZmF1bHQgeC1tdWx0aXBsaWVyIGZvciBzY2FsaW5nXHJcbiRkZWZhdWx0LXNjYWxlLXggICAgIDogMS4yNSAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG4vLyBUaGUgZGVmYXVsdCB5LW11bHRpcGxpZXIgZm9yIHNjYWxpbmdcclxuJGRlZmF1bHQtc2NhbGUteSAgICAgOiAkZGVmYXVsdC1zY2FsZS14ICAgICAgIWRlZmF1bHQ7XHJcbi8vIFRoZSBkZWZhdWx0IHotbXVsdGlwbGllciBmb3Igc2NhbGluZ1xyXG4kZGVmYXVsdC1zY2FsZS16ICAgICA6ICRkZWZhdWx0LXNjYWxlLXggICAgICAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBUaGUgZGVmYXVsdCBhbmdsZSBmb3Igcm90YXRpb25zXHJcbiRkZWZhdWx0LXJvdGF0ZSAgICAgIDogNDVkZWcgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIFRoZSBkZWZhdWx0IHgtdmVjdG9yIGZvciB0aGUgYXhpcyBvZiAzZCByb3RhdGlvbnNcclxuJGRlZmF1bHQtdmVjdG9yLXggICAgOiAxICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcbi8vIFRoZSBkZWZhdWx0IHktdmVjdG9yIGZvciB0aGUgYXhpcyBvZiAzZCByb3RhdGlvbnNcclxuJGRlZmF1bHQtdmVjdG9yLXkgICAgOiAxICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcbi8vIFRoZSBkZWZhdWx0IHotdmVjdG9yIGZvciB0aGUgYXhpcyBvZiAzZCByb3RhdGlvbnNcclxuJGRlZmF1bHQtdmVjdG9yLXogICAgOiAxICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gVGhlIGRlZmF1bHQgeC1sZW5ndGggZm9yIHRyYW5zbGF0aW9uc1xyXG4kZGVmYXVsdC10cmFuc2xhdGUteCA6IDFlbSAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcclxuLy8gVGhlIGRlZmF1bHQgeS1sZW5ndGggZm9yIHRyYW5zbGF0aW9uc1xyXG4kZGVmYXVsdC10cmFuc2xhdGUteSA6ICRkZWZhdWx0LXRyYW5zbGF0ZS14ICAhZGVmYXVsdDtcclxuLy8gVGhlIGRlZmF1bHQgei1sZW5ndGggZm9yIHRyYW5zbGF0aW9uc1xyXG4kZGVmYXVsdC10cmFuc2xhdGUteiA6ICRkZWZhdWx0LXRyYW5zbGF0ZS14ICAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBUaGUgZGVmYXVsdCB4LWFuZ2xlIGZvciBza2V3aW5nXHJcbiRkZWZhdWx0LXNrZXcteCAgICAgIDogNWRlZyAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG4vLyBUaGUgZGVmYXVsdCB5LWFuZ2xlIGZvciBza2V3aW5nXHJcbiRkZWZhdWx0LXNrZXcteSAgICAgIDogNWRlZyAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vICoqVHJhbnNmb3JtLW9yaWdpbioqXHJcbi8vIFRyYW5zZm9ybS1vcmlnaW4gc2VudCBhcyBhIGNvbXBsZXRlIHN0cmluZ1xyXG4vL1xyXG4vLyAgICAgQGluY2x1ZGUgYXBwbHktb3JpZ2luKCBvcmlnaW4gWywgM0Qtb25seSBdIClcclxuLy9cclxuLy8gd2hlcmUgJ29yaWdpbicgaXMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBjb250YWluaW5nIDEtMyAoeC95L3opIGNvb3JkaW5hdGVzXHJcbi8vIGluIHBlcmNlbnRhZ2VzLCBhYnNvbHV0ZSAocHgsIGNtLCBpbiwgZW0gZXRjLi4pIG9yIHJlbGF0aXZlXHJcbi8vIChsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20sIGNlbnRlcikgdW5pdHNcclxuLy9cclxuLy8gQHBhcmFtIG9ubHkzZCBTZXQgdGhpcyB0byB0cnVlIHRvIG9ubHkgYXBwbHkgdGhpc1xyXG4vLyBtaXhpbiB3aGVyZSBicm93c2VycyBoYXZlIDNEIHN1cHBvcnQuXHJcbkBtaXhpbiBhcHBseS1vcmlnaW4oJG9yaWdpbiwgJG9ubHkzZCkge1xyXG4gICRvbmx5M2Q6ICRvbmx5M2Qgb3IgLWNvbXBhc3MtbGlzdC1zaXplKC1jb21wYXNzLWxpc3QoJG9yaWdpbikpID4gMjtcclxuICBAaWYgJG9ubHkzZCB7XHJcbiAgICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLW9yaWdpbiwgJG9yaWdpbixcclxuICAgICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXHJcbiAgICApO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zZm9ybS1vcmlnaW4sICRvcmlnaW4sXHJcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRyYW5zZm9ybS1vcmlnaW4gc2VudCBhcyBpbmRpdmlkdWFsIGFyZ3VtZW50czpcclxuLy9cclxuLy8gICAgIEBpbmNsdWRlIHRyYW5zZm9ybS1vcmlnaW4oIFsgb3JpZ2luLXgsIG9yaWdpbi15LCBvcmlnaW4teiwgM0Qtb25seSBdIClcclxuLy9cclxuLy8gd2hlcmUgdGhlIDMgJ29yaWdpbi0nIGFyZ3VtZW50cyByZXByZXNlbnQgeC95L3ogY29vcmRpbmF0ZXMuXHJcbi8vXHJcbi8vICoqTk9URToqKiBzZXR0aW5nIHogY29vcmRpbmF0ZXMgdHJpZ2dlcnMgM0Qgc3VwcG9ydCBsaXN0LCBsZWF2ZSBmYWxzZSBmb3IgMkQgc3VwcG9ydFxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbihcclxuICAkb3JpZ2luLXg6ICRkZWZhdWx0LW9yaWdpbi14LFxyXG4gICRvcmlnaW4teTogJGRlZmF1bHQtb3JpZ2luLXksXHJcbiAgJG9yaWdpbi16OiBmYWxzZSxcclxuICAkb25seTNkOiAgIGlmKCRvcmlnaW4teiwgdHJ1ZSwgZmFsc2UpXHJcbikge1xyXG4gICRvcmlnaW46IHVucXVvdGUoJycpO1xyXG4gIEBpZiAkb3JpZ2luLXggb3IgJG9yaWdpbi15IG9yICRvcmlnaW4teiB7XHJcbiAgICBAaWYgJG9yaWdpbi14IHsgJG9yaWdpbjogJG9yaWdpbi14OyB9IEBlbHNlIHsgJG9yaWdpbjogNTAlOyB9XHJcbiAgICBAaWYgJG9yaWdpbi15IHsgJG9yaWdpbjogJG9yaWdpbiAkb3JpZ2luLXk7IH0gQGVsc2UgeyBAaWYgJG9yaWdpbi16IHsgJG9yaWdpbjogJG9yaWdpbiA1MCU7IH19XHJcbiAgICBAaWYgJG9yaWdpbi16IHsgJG9yaWdpbjogJG9yaWdpbiAkb3JpZ2luLXo7IH1cclxuICAgIEBpbmNsdWRlIGFwcGx5LW9yaWdpbigkb3JpZ2luLCAkb25seTNkKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBUcmFuc2Zvcm0gc2VudCBhcyBhIGNvbXBsZXRlIHN0cmluZzpcclxuLy9cclxuLy8gICAgIEBpbmNsdWRlIHRyYW5zZm9ybSggdHJhbnNmb3JtcyBbLCAzRC1vbmx5IF0gKVxyXG4vL1xyXG4vLyB3aGVyZSAndHJhbnNmb3JtcycgaXMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBhbGwgdGhlIHRyYW5zZm9ybXMgdG8gYmUgYXBwbGllZC5cclxuQG1peGluIHRyYW5zZm9ybShcclxuICAkdHJhbnNmb3JtLFxyXG4gICRvbmx5M2Q6IGZhbHNlXHJcbikge1xyXG4gIEBpZiAkb25seTNkIHtcclxuICAgIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0sICR0cmFuc2Zvcm0sXHJcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxyXG4gICAgKTtcclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0sICR0cmFuc2Zvcm0sXHJcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNob3J0Y3V0IHRvIHRhcmdldCBhbGwgYnJvd3NlcnMgd2l0aCAyRCB0cmFuc2Zvcm0gc3VwcG9ydFxyXG5AbWl4aW4gdHJhbnNmb3JtMmQoJHRyYW5zKSB7XHJcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgZmFsc2UpO1xyXG59XHJcblxyXG4vLyBTaG9ydGN1dCB0byB0YXJnZXQgb25seSBicm93c2VycyB3aXRoIDNEIHRyYW5zZm9ybSBzdXBwb3J0XHJcbkBtaXhpbiB0cmFuc2Zvcm0zZCgkdHJhbnMpIHtcclxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCB0cnVlKTtcclxufVxyXG5cclxuLy8gQGRvYyBvZmZcclxuLy8gM0QgUGFyYW1ldGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEBkb2Mgb25cclxuXHJcbi8vIFNldCB0aGUgcGVyc3BlY3RpdmUgb2YgM0QgdHJhbnNmb3JtcyBvbiB0aGUgY2hpbGRyZW4gb2YgYW4gZWxlbWVudDpcclxuLy9cclxuLy8gICAgICBAaW5jbHVkZSBwZXJzcGVjdGl2ZSggcGVyc3BlY3RpdmUgKVxyXG4vL1xyXG4vLyB3aGVyZSAncGVyc3BlY3RpdmUnIGlzIGEgdW5pdGxlc3MgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZGVwdGggb2YgdGhlXHJcbi8vIHotYXhpcy4gVGhlIGhpZ2hlciB0aGUgcGVyc3BlY3RpdmUsIHRoZSBtb3JlIGV4YWdnZXJhdGVkIHRoZSBmb3Jlc2hvcnRlbmluZy5cclxuLy8gdmFsdWVzIGZyb20gNTAwIHRvIDEwMDAgYXJlIG1vcmUtb3ItbGVzcyBcIm5vcm1hbFwiIC0gYSBnb29kIHN0YXJ0aW5nLXBvaW50LlxyXG5AbWl4aW4gcGVyc3BlY3RpdmUoJHApIHtcclxuICBAaW5jbHVkZSBleHBlcmltZW50YWwocGVyc3BlY3RpdmUsICRwLFxyXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXHJcbiAgKTtcclxufVxyXG5cclxuLy8gU2V0IHRoZSBvcmlnaW4gcG9zaXRpb24gZm9yIHRoZSBwZXJzcGVjdGl2ZVxyXG4vL1xyXG4vLyAgICAgIEBpbmNsdWRlIHBlcnNwZWN0aXZlLW9yaWdpbihvcmlnaW4teCBbb3JpZ2luLXldKVxyXG4vL1xyXG4vLyB3aGVyZSB0aGUgdHdvIGFyZ3VtZW50cyByZXByZXNlbnQgeC95IGNvb3JkaW5hdGVzXHJcbkBtaXhpbiBwZXJzcGVjdGl2ZS1vcmlnaW4oJG9yaWdpbjogNTAlKSB7XHJcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHBlcnNwZWN0aXZlLW9yaWdpbiwgJG9yaWdpbixcclxuICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxyXG4gICk7XHJcbn1cclxuXHJcbi8vIERldGVybWluZSB3aGV0aGVyIGEgM0Qgb2JqZWN0cyBjaGlsZHJlbiBhbHNvIGxpdmUgaW4gdGhlIGdpdmVuIDNEIHNwYWNlXHJcbi8vXHJcbi8vICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXN0eWxlKCBbIHN0eWxlIF0gKVxyXG4vL1xyXG4vLyB3aGVyZSBgc3R5bGVgIGNhbiBiZSBlaXRoZXIgYGZsYXRgIG9yIGBwcmVzZXJ2ZS0zZGAuXHJcbi8vIEJyb3dzZXJzIGRlZmF1bHQgdG8gYGZsYXRgLCBtaXhpbiBkZWZhdWx0cyB0byBgcHJlc2VydmUtM2RgLlxyXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcclxuICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLXN0eWxlLCAkc3R5bGUsXHJcbiAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcclxuICApO1xyXG59XHJcblxyXG4vLyBEZXRlcm1pbmUgdGhlIHZpc2liaWxpdHkgb2YgYW4gZWxlbWVudCB3aGVuIGl0J3MgYmFjayBpcyB0dXJuZWRcclxuLy9cclxuLy8gICAgIEBpbmNsdWRlIGJhY2tmYWNlLXZpc2liaWxpdHkoIFsgdmlzaWJpbGl0eSBdIClcclxuLy9cclxuLy8gd2hlcmUgYHZpc2liaWxpdHlgIGNhbiBiZSBlaXRoZXIgYHZpc2libGVgIG9yIGBoaWRkZW5gLlxyXG4vLyBCcm93c2VycyBkZWZhdWx0IHRvIHZpc2libGUsIG1peGluIGRlZmF1bHRzIHRvIGhpZGRlblxyXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmlzaWJpbGl0eTogaGlkZGVuKSB7XHJcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKGJhY2tmYWNlLXZpc2liaWxpdHksICR2aXNpYmlsaXR5LFxyXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXHJcbiAgKTtcclxufVxyXG5cclxuLy8gQGRvYyBvZmZcclxuLy8gVHJhbnNmb3JtIFBhcnRpYWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFRoZXNlIHdvcmsgd2VsbCBvbiB0aGVpciBvd24sIGJ1dCB0aGV5IGRvbid0IGFkZCB0byBlYWNoIG90aGVyLCB0aGV5IG92ZXJyaWRlLlxyXG4vLyBVc2UgYWxvbmcgd2l0aCB0cmFuc2Zvcm0gcGFyYW1ldGVyIG1peGlucyB0byBhZGp1c3Qgb3JpZ2luLCBwZXJzcGVjdGl2ZSBhbmQgc3R5bGVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gU2NhbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEBkb2Mgb25cclxuXHJcbi8vIFNjYWxlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCBhbmQgeSBheGlzOlxyXG4vL1xyXG4vLyAgICAgIEBpbmNsdWRlIHNjYWxlKCBbIHNjYWxlLXgsIHNjYWxlLXksIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxyXG4vL1xyXG4vLyB3aGVyZSB0aGUgJ3NjYWxlLScgYXJndW1lbnRzIGFyZSB1bml0bGVzcyBtdWx0aXBsaWVycyBvZiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zXHJcbi8vIGFuZCBwZXJzcGVjdGl2ZSwgd2hpY2ggd29ya3MgdGhlIHNhbWUgYXMgdGhlIHN0YW5kLWFsb25lIHBlcnNwZWN0aXZlIHByb3BlcnR5L21peGluXHJcbi8vIGJ1dCBhcHBsaWVzIHRvIHRoZSBpbmRpdmlkdWFsIGVsZW1lbnQgKG11bHRpcGxpZWQgd2l0aCBhbnkgcGFyZW50IHBlcnNwZWN0aXZlKVxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiBzY2FsZShcclxuICAkc2NhbGUteDogICAgICRkZWZhdWx0LXNjYWxlLXgsXHJcbiAgJHNjYWxlLXk6ICAgICAkc2NhbGUteCxcclxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxyXG4gICRvbmx5M2Q6ICAgICAgZmFsc2VcclxuKSB7XHJcbiAgJHRyYW5zOiBzY2FsZSgkc2NhbGUteCwgJHNjYWxlLXkpO1xyXG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XHJcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XHJcbn1cclxuXHJcbi8vIFNjYWxlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCBheGlzXHJcbi8vIEBpbmNsdWRlIHNjYWxlWCggWyBzY2FsZS14LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcclxuLy9cclxuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxyXG5AbWl4aW4gc2NhbGVYKFxyXG4gICRzY2FsZTogICAgICAgJGRlZmF1bHQtc2NhbGUteCxcclxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxyXG4gICRvbmx5M2Q6ICAgICAgZmFsc2VcclxuKSB7XHJcbiAgJHRyYW5zOiBzY2FsZVgoJHNjYWxlKTtcclxuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xyXG59XHJcblxyXG4vLyBTY2FsZSBhbiBvYmplY3QgYWxvbmcgdGhlIHkgYXhpc1xyXG4vLyBAaW5jbHVkZSBzY2FsZVkoIFsgc2NhbGUteSwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXHJcbi8vXHJcbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cclxuQG1peGluIHNjYWxlWShcclxuICAkc2NhbGU6ICAgICAgICRkZWZhdWx0LXNjYWxlLXksXHJcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcclxuICAkb25seTNkOiAgICAgIGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogc2NhbGVZKCRzY2FsZSk7XHJcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cclxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcclxufVxyXG5cclxuLy8gU2NhbGUgYW4gb2JqZWN0IGFsb25nIHRoZSB6IGF4aXNcclxuLy8gQGluY2x1ZGUgc2NhbGVaKCBbIHNjYWxlLXosIHBlcnNwZWN0aXZlIF0gKVxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiBzY2FsZVooXHJcbiAgJHNjYWxlOiAkZGVmYXVsdC1zY2FsZS16LFxyXG4gICRwZXJzcGVjdGl2ZTogZmFsc2VcclxuKSB7XHJcbiAgJHRyYW5zOiBzY2FsZVooJHNjYWxlKTtcclxuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XHJcbn1cclxuXHJcbi8vIFNjYWxlIGFuZCBvYmplY3QgYWxvbmcgYWxsIHRocmVlIGF4aXNcclxuLy8gQGluY2x1ZGUgc2NhbGUzZCggWyBzY2FsZS14LCBzY2FsZS15LCBzY2FsZS16LCBwZXJzcGVjdGl2ZSBdIClcclxuLy9cclxuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxyXG5AbWl4aW4gc2NhbGUzZChcclxuICAkc2NhbGUteDogICAgICRkZWZhdWx0LXNjYWxlLXgsXHJcbiAgJHNjYWxlLXk6ICAgICAkZGVmYXVsdC1zY2FsZS15LFxyXG4gICRzY2FsZS16OiAgICAgJGRlZmF1bHQtc2NhbGUteixcclxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogc2NhbGUzZCgkc2NhbGUteCwgJHNjYWxlLXksICRzY2FsZS16KTtcclxuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XHJcbn1cclxuXHJcbi8vIEBkb2Mgb2ZmXHJcbi8vIFJvdGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBAZG9jIG9uXHJcblxyXG4vLyBSb3RhdGUgYW4gb2JqZWN0IGFyb3VuZCB0aGUgeiBheGlzICAoMkQpXHJcbi8vIEBpbmNsdWRlIHJvdGF0ZSggWyByb3RhdGlvbiwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXHJcbi8vIHdoZXJlICdyb3RhdGlvbicgaXMgYW4gYW5nbGUgc2V0IGluIGRlZ3JlZXMgKGRlZykgb3IgcmFkaWFuIChyYWQpIHVuaXRzXHJcbi8vXHJcbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cclxuQG1peGluIHJvdGF0ZShcclxuICAkcm90YXRlOiAgICAgICRkZWZhdWx0LXJvdGF0ZSxcclxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxyXG4gICRvbmx5M2Q6ICAgICAgZmFsc2VcclxuKSB7XHJcbiAgJHRyYW5zOiByb3RhdGUoJHJvdGF0ZSk7XHJcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cclxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcclxufVxyXG5cclxuLy8gQSBsb25nY3V0IGZvciAncm90YXRlJyBpbiBjYXNlIHlvdSBmb3JnZXQgdGhhdCAneicgaXMgaW1wbGllZFxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiByb3RhdGVaKFxyXG4gICRyb3RhdGU6ICAgICAgJGRlZmF1bHQtcm90YXRlLFxyXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXHJcbiAgJG9ubHkzZDogICAgICBmYWxzZVxyXG4pIHtcclxuICBAaW5jbHVkZSByb3RhdGUoJHJvdGF0ZSwgJHBlcnNwZWN0aXZlLCAkb25seTNkKTtcclxufVxyXG5cclxuLy8gUm90YXRlIGFuIG9iamVjdCBhcm91bmQgdGhlIHggYXhpcyAoM0QpXHJcbi8vIEBpbmNsdWRlIHJvdGF0ZVgoIFsgcm90YXRpb24sIHBlcnNwZWN0aXZlIF0gKVxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiByb3RhdGVYKFxyXG4gICRyb3RhdGU6ICRkZWZhdWx0LXJvdGF0ZSxcclxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogcm90YXRlWCgkcm90YXRlKTtcclxuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XHJcbn1cclxuXHJcbi8vIFJvdGF0ZSBhbiBvYmplY3QgYXJvdW5kIHRoZSB5IGF4aXMgKDNEKVxyXG4vLyBAaW5jbHVkZSByb3RhdGUoIFsgcm90YXRpb24sIHBlcnNwZWN0aXZlIF0gKVxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiByb3RhdGVZKFxyXG4gICRyb3RhdGU6ICRkZWZhdWx0LXJvdGF0ZSxcclxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogcm90YXRlWSgkcm90YXRlKTtcclxuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XHJcbn1cclxuXHJcbi8vIFJvdGF0ZSBhbiBvYmplY3QgYXJvdW5kIGFuIGFyYml0cmFyeSBheGlzICgzRClcclxuLy8gQGluY2x1ZGUgcm90YXRlKCBbIHZlY3Rvci14LCB2ZWN0b3IteSwgdmVjdG9yLXosIHJvdGF0aW9uLCBwZXJzcGVjdGl2ZSBdIClcclxuLy8gd2hlcmUgdGhlICd2ZWN0b3ItJyBhcmd1bWVudHMgYWNjZXB0IHVuaXRsZXNzIG51bWJlcnMuXHJcbi8vIFRoZXNlIG51bWJlcnMgYXJlIG5vdCBpbXBvcnRhbnQgb24gdGhlaXIgb3duLCBidXQgaW4gcmVsYXRpb24gdG8gb25lIGFub3RoZXJcclxuLy8gY3JlYXRpbmcgYW4gYXhpcyBmcm9tIHlvdXIgdHJhbnNmb3JtLW9yaWdpbiwgYWxvbmcgdGhlIGF4aXMgb2YgWHggPSBZeSA9IFp6LlxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiByb3RhdGUzZChcclxuICAkdmVjdG9yLXg6ICRkZWZhdWx0LXZlY3Rvci14LFxyXG4gICR2ZWN0b3IteTogJGRlZmF1bHQtdmVjdG9yLXksXHJcbiAgJHZlY3Rvci16OiAkZGVmYXVsdC12ZWN0b3IteixcclxuICAkcm90YXRlOiAkZGVmYXVsdC1yb3RhdGUsXHJcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxyXG4pIHtcclxuICAkdHJhbnM6IHJvdGF0ZTNkKCR2ZWN0b3IteCwgJHZlY3Rvci15LCAkdmVjdG9yLXosICRyb3RhdGUpO1xyXG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XHJcbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcclxufVxyXG5cclxuLy8gQGRvYyBvZmZcclxuLy8gVHJhbnNsYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEBkb2Mgb25cclxuXHJcbi8vIE1vdmUgYW4gb2JqZWN0IGFsb25nIHRoZSB4IG9yIHkgYXhpcyAoMkQpXHJcbi8vIEBpbmNsdWRlIHRyYW5zbGF0ZSggWyB0cmFuc2xhdGUteCwgdHJhbnNsYXRlLXksIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxyXG4vLyB3aGVyZSB0aGUgJ3RyYW5zbGF0ZS0nIGFyZ3VtZW50cyBhY2NlcHQgYW55IGRpc3RhbmNlIGluIHBlcmNlbnRhZ2VzIG9yIGFic29sdXRlIChweCwgY20sIGluLCBlbSBldGMuLikgdW5pdHMuXHJcbi8vXHJcbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cclxuQG1peGluIHRyYW5zbGF0ZShcclxuICAkdHJhbnNsYXRlLXg6ICRkZWZhdWx0LXRyYW5zbGF0ZS14LFxyXG4gICR0cmFuc2xhdGUteTogJGRlZmF1bHQtdHJhbnNsYXRlLXksXHJcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcclxuICAkb25seTNkOiAgICAgIGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogdHJhbnNsYXRlKCR0cmFuc2xhdGUteCwgJHRyYW5zbGF0ZS15KTtcclxuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xyXG59XHJcblxyXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCBheGlzICgyRClcclxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS14LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcclxuLy9cclxuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxyXG5AbWl4aW4gdHJhbnNsYXRlWChcclxuICAkdHJhbnMteDogICAgICRkZWZhdWx0LXRyYW5zbGF0ZS14LFxyXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXHJcbiAgJG9ubHkzZDogICAgICBmYWxzZVxyXG4pIHtcclxuICAkdHJhbnM6IHRyYW5zbGF0ZVgoJHRyYW5zLXgpO1xyXG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XHJcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XHJcbn1cclxuXHJcbi8vIE1vdmUgYW4gb2JqZWN0IGFsb25nIHRoZSB5IGF4aXMgKDJEKVxyXG4vLyBAaW5jbHVkZSB0cmFuc2xhdGUoIFsgdHJhbnNsYXRlLXksIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiB0cmFuc2xhdGVZKFxyXG4gICR0cmFucy15OiAgICAgJGRlZmF1bHQtdHJhbnNsYXRlLXksXHJcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcclxuICAkb25seTNkOiAgICAgIGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogdHJhbnNsYXRlWSgkdHJhbnMteSk7XHJcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cclxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcclxufVxyXG5cclxuLy8gTW92ZSBhbiBvYmplY3QgYWxvbmcgdGhlIHogYXhpcyAoM0QpXHJcbi8vIEBpbmNsdWRlIHRyYW5zbGF0ZSggWyB0cmFuc2xhdGUteiwgcGVyc3BlY3RpdmUgXSApXHJcbi8vXHJcbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cclxuQG1peGluIHRyYW5zbGF0ZVooXHJcbiAgJHRyYW5zLXo6ICAgICAkZGVmYXVsdC10cmFuc2xhdGUteixcclxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogdHJhbnNsYXRlWigkdHJhbnMteik7XHJcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cclxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xyXG59XHJcblxyXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCwgeSBhbmQgeiBheGlzICgzRClcclxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS14LCB0cmFuc2xhdGUteSwgdHJhbnNsYXRlLXosIHBlcnNwZWN0aXZlIF0gKVxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiB0cmFuc2xhdGUzZChcclxuICAkdHJhbnNsYXRlLXg6ICRkZWZhdWx0LXRyYW5zbGF0ZS14LFxyXG4gICR0cmFuc2xhdGUteTogJGRlZmF1bHQtdHJhbnNsYXRlLXksXHJcbiAgJHRyYW5zbGF0ZS16OiAkZGVmYXVsdC10cmFuc2xhdGUteixcclxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogdHJhbnNsYXRlM2QoJHRyYW5zbGF0ZS14LCAkdHJhbnNsYXRlLXksICR0cmFuc2xhdGUteik7XHJcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cclxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xyXG59XHJcblxyXG4vLyBAZG9jIG9mZlxyXG4vLyBTa2V3IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQGRvYyBvblxyXG5cclxuLy8gU2tldyBhbiBlbGVtZW50OlxyXG4vL1xyXG4vLyAgICAgQGluY2x1ZGUgc2tldyggWyBza2V3LXgsIHNrZXcteSwgM0Qtb25seSBdIClcclxuLy9cclxuLy8gd2hlcmUgdGhlICdza2V3LScgYXJndW1lbnRzIGFjY2VwdCBjc3MgYW5nbGVzIGluIGRlZ3JlZXMgKGRlZykgb3IgcmFkaWFuIChyYWQpIHVuaXRzLlxyXG4vL1xyXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXHJcbkBtaXhpbiBza2V3KFxyXG4gICRza2V3LXg6ICRkZWZhdWx0LXNrZXcteCxcclxuICAkc2tldy15OiAkZGVmYXVsdC1za2V3LXksXHJcbiAgJG9ubHkzZDogZmFsc2VcclxuKSB7XHJcbiAgJHRyYW5zOiBza2V3KCRza2V3LXgsICRza2V3LXkpO1xyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xyXG59XHJcblxyXG4vLyBTa2V3IGFuIGVsZW1lbnQgYWxvbmcgdGhlIHggYXhpelxyXG4vL1xyXG4vLyAgICAgQGluY2x1ZGUgc2tldyggWyBza2V3LXgsIDNELW9ubHkgXSApXHJcbi8vXHJcbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cclxuQG1peGluIHNrZXdYKFxyXG4gICRza2V3LXg6ICRkZWZhdWx0LXNrZXcteCxcclxuICAkb25seTNkOiBmYWxzZVxyXG4pIHtcclxuICAkdHJhbnM6IHNrZXdYKCRza2V3LXgpO1xyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xyXG59XHJcblxyXG4vLyBTa2V3IGFuIGVsZW1lbnQgYWxvbmcgdGhlIHkgYXhpc1xyXG4vL1xyXG4vLyAgICAgQGluY2x1ZGUgc2tldyggWyBza2V3LXksIDNELW9ubHkgXSApXHJcbi8vXHJcbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cclxuQG1peGluIHNrZXdZKFxyXG4gICRza2V3LXk6ICRkZWZhdWx0LXNrZXcteSxcclxuICAkb25seTNkOiBmYWxzZVxyXG4pIHtcclxuICAkdHJhbnM6IHNrZXdZKCRza2V3LXkpO1xyXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xyXG59XHJcblxyXG5cclxuLy8gRnVsbCB0cmFuc2Zvcm0gbWl4aW5zXHJcbi8vIEZvciBzZXR0aW5ncyBhbnkgY29tYmluYXRpb24gb2YgdHJhbnNmb3JtcyBhcyBhcmd1bWVudHNcclxuLy8gVGhlc2UgYXJlIGNvbXBsZXggYW5kIG5vdCBoaWdobHkgcmVjb21tZW5kZWQgZm9yIGRhaWx5IHVzZS4gVGhleSBhcmUgbWFpbmx5XHJcbi8vIGhlcmUgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHkgcHVycG9zZXMuXHJcbi8vXHJcbi8vICogdGhleSBpbmNsdWRlIG9yaWdpbiBhZGp1c3RtZW50c1xyXG4vLyAqIHNjYWxlIHRha2VzIGEgbXVsdGlwbGllciAodW5pdGxlc3MpLCByb3RhdGUgYW5kIHNrZXcgdGFrZSBkZWdyZWVzIChkZWcpXHJcbi8vXHJcbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cclxuQG1peGluIGNyZWF0ZS10cmFuc2Zvcm0oXHJcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcclxuICAkc2NhbGUteDogICAgIGZhbHNlLFxyXG4gICRzY2FsZS15OiAgICAgZmFsc2UsXHJcbiAgJHNjYWxlLXo6ICAgICBmYWxzZSxcclxuICAkcm90YXRlLXg6ICAgIGZhbHNlLFxyXG4gICRyb3RhdGUteTogICAgZmFsc2UsXHJcbiAgJHJvdGF0ZS16OiAgICBmYWxzZSxcclxuICAkcm90YXRlM2Q6ICAgIGZhbHNlLFxyXG4gICR0cmFucy14OiAgICAgZmFsc2UsXHJcbiAgJHRyYW5zLXk6ICAgICBmYWxzZSxcclxuICAkdHJhbnMtejogICAgIGZhbHNlLFxyXG4gICRza2V3LXg6ICAgICAgZmFsc2UsXHJcbiAgJHNrZXcteTogICAgICBmYWxzZSxcclxuICAkb3JpZ2luLXg6ICAgIGZhbHNlLFxyXG4gICRvcmlnaW4teTogICAgZmFsc2UsXHJcbiAgJG9yaWdpbi16OiAgICBmYWxzZSxcclxuICAkb25seTNkOiAgICAgIGZhbHNlXHJcbikge1xyXG4gICR0cmFuczogdW5xdW90ZShcIlwiKTtcclxuXHJcbiAgLy8gcGVyc3BlY3RpdmVcclxuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIDsgfVxyXG5cclxuICAvLyBzY2FsZVxyXG4gIEBpZiAkc2NhbGUteCBhbmQgJHNjYWxlLXkge1xyXG4gICAgQGlmICRzY2FsZS16IHsgJHRyYW5zOiAkdHJhbnMgc2NhbGUzZCgkc2NhbGUteCwgJHNjYWxlLXksICRzY2FsZS16KTsgfVxyXG4gICAgQGVsc2UgeyAkdHJhbnM6ICR0cmFucyBzY2FsZSgkc2NhbGUteCwgJHNjYWxlLXkpOyB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaWYgJHNjYWxlLXggeyAkdHJhbnM6ICR0cmFucyBzY2FsZVgoJHNjYWxlLXgpOyB9XHJcbiAgICBAaWYgJHNjYWxlLXkgeyAkdHJhbnM6ICR0cmFucyBzY2FsZVkoJHNjYWxlLXkpOyB9XHJcbiAgICBAaWYgJHNjYWxlLXogeyAkdHJhbnM6ICR0cmFucyBzY2FsZVooJHNjYWxlLXopOyB9XHJcbiAgfVxyXG5cclxuICAvLyByb3RhdGVcclxuICBAaWYgJHJvdGF0ZS14IHsgJHRyYW5zOiAkdHJhbnMgcm90YXRlWCgkcm90YXRlLXgpOyB9XHJcbiAgQGlmICRyb3RhdGUteSB7ICR0cmFuczogJHRyYW5zIHJvdGF0ZVkoJHJvdGF0ZS15KTsgfVxyXG4gIEBpZiAkcm90YXRlLXogeyAkdHJhbnM6ICR0cmFucyByb3RhdGVaKCRyb3RhdGUteik7IH1cclxuICBAaWYgJHJvdGF0ZTNkIHsgJHRyYW5zOiAkdHJhbnMgcm90YXRlM2QoJHJvdGF0ZTNkKTsgfVxyXG5cclxuICAvLyB0cmFuc2xhdGVcclxuICBAaWYgJHRyYW5zLXggYW5kICR0cmFucy15IHtcclxuICAgIEBpZiAkdHJhbnMteiB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZTNkKCR0cmFucy14LCAkdHJhbnMteSwgJHRyYW5zLXopOyB9XHJcbiAgICBAZWxzZSB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZSgkdHJhbnMteCwgJHRyYW5zLXkpOyB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaWYgJHRyYW5zLXggeyAkdHJhbnM6ICR0cmFucyB0cmFuc2xhdGVYKCR0cmFucy14KTsgfVxyXG4gICAgQGlmICR0cmFucy15IHsgJHRyYW5zOiAkdHJhbnMgdHJhbnNsYXRlWSgkdHJhbnMteSk7IH1cclxuICAgIEBpZiAkdHJhbnMteiB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZVooJHRyYW5zLXopOyB9XHJcbiAgfVxyXG5cclxuICAvLyBza2V3XHJcbiAgQGlmICRza2V3LXggYW5kICRza2V3LXkgeyAkdHJhbnM6ICR0cmFucyBza2V3KCRza2V3LXgsICRza2V3LXkpOyB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGlmICRza2V3LXggeyAkdHJhbnM6ICR0cmFucyBza2V3WCgkc2tldy14KTsgfVxyXG4gICAgQGlmICRza2V3LXkgeyAkdHJhbnM6ICR0cmFucyBza2V3WSgkc2tldy15KTsgfVxyXG4gIH1cclxuXHJcbiAgLy8gYXBwbHkgaXQhXHJcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XHJcbiAgQGluY2x1ZGUgdHJhbnNmb3JtLW9yaWdpbigkb3JpZ2luLXgsICRvcmlnaW4teSwgJG9yaWdpbi16LCAkb25seTNkKTtcclxufVxyXG5cclxuXHJcbi8vIEEgc2ltcGxpZmllZCBzZXQgb2Ygb3B0aW9uc1xyXG4vLyBiYWNrd2FyZHMtY29tcGF0aWJsZSB3aXRoIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIHRoZSAndHJhbnNmb3JtJyBtaXhpblxyXG5AbWl4aW4gc2ltcGxlLXRyYW5zZm9ybShcclxuICAkc2NhbGU6ICAgIGZhbHNlLFxyXG4gICRyb3RhdGU6ICAgZmFsc2UsXHJcbiAgJHRyYW5zLXg6ICBmYWxzZSxcclxuICAkdHJhbnMteTogIGZhbHNlLFxyXG4gICRza2V3LXg6ICAgZmFsc2UsXHJcbiAgJHNrZXcteTogICBmYWxzZSxcclxuICAkb3JpZ2luLXg6IGZhbHNlLFxyXG4gICRvcmlnaW4teTogZmFsc2VcclxuKSB7XHJcbiAgQGluY2x1ZGUgY3JlYXRlLXRyYW5zZm9ybShcclxuICAgIGZhbHNlLFxyXG4gICAgJHNjYWxlLCAkc2NhbGUsIGZhbHNlLFxyXG4gICAgZmFsc2UsIGZhbHNlLCAkcm90YXRlLCBmYWxzZSxcclxuICAgICR0cmFucy14LCAkdHJhbnMteSwgZmFsc2UsXHJcbiAgICAkc2tldy14LCAkc2tldy15LFxyXG4gICAgJG9yaWdpbi14LCAkb3JpZ2luLXksIGZhbHNlLFxyXG4gICAgZmFsc2VcclxuICApO1xyXG59XHJcbiIsIi8vIEBkb2Mgb2ZmXHJcbi8vIFRoZXNlIGRlZmF1bHRzIG1ha2UgdGhlIGFyZ3VtZW50cyBvcHRpb25hbCBmb3IgdGhpcyBtaXhpblxyXG4vLyBJZiB5b3UgbGlrZSwgc2V0IGRpZmZlcmVudCBkZWZhdWx0cyBiZWZvcmUgaW1wb3J0aW5nLlxyXG4vLyBAZG9jIG9uXHJcblxyXG5AaW1wb3J0IFwic2hhcmVkXCI7XHJcblxyXG5cclxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGJveCBzaGFkb3dzXHJcbiRkZWZhdWx0LWJveC1zaGFkb3ctY29sb3I6ICMzMzMzMzMgIWRlZmF1bHQ7XHJcblxyXG4vLyBUaGUgZGVmYXVsdCBob3Jpem9udGFsIG9mZnNldC4gUG9zaXRpdmUgaXMgdG8gdGhlIHJpZ2h0LlxyXG4kZGVmYXVsdC1ib3gtc2hhZG93LWgtb2Zmc2V0OiAwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUaGUgZGVmYXVsdCB2ZXJ0aWNhbCBvZmZzZXQuIFBvc2l0aXZlIGlzIGRvd24uXHJcbiRkZWZhdWx0LWJveC1zaGFkb3ctdi1vZmZzZXQ6IDBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFRoZSBkZWZhdWx0IGJsdXIgbGVuZ3RoLlxyXG4kZGVmYXVsdC1ib3gtc2hhZG93LWJsdXI6IDVweCAhZGVmYXVsdDtcclxuXHJcbi8vIFRoZSBkZWZhdWx0IHNwcmVhZCBsZW5ndGguXHJcbiRkZWZhdWx0LWJveC1zaGFkb3ctc3ByZWFkIDogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBUaGUgZGVmYXVsdCBzaGFkb3cgaW5zZXQ6IGluc2V0IG9yIGZhbHNlIChmb3Igc3RhbmRhcmQgc2hhZG93KS5cclxuJGRlZmF1bHQtYm94LXNoYWRvdy1pbnNldCA6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gUHJvdmlkZXMgY3Jvc3MtYnJvd3NlciBmb3IgV2Via2l0LCBHZWNrbywgYW5kIENTUzMgYm94IHNoYWRvd3Mgd2hlbiBvbmUgb3IgbW9yZSBib3hcclxuLy8gc2hhZG93cyBhcmUgbmVlZGVkLlxyXG4vLyBFYWNoIHNoYWRvdyBhcmd1bWVudCBzaG91bGQgYWRoZXJlIHRvIHRoZSBzdGFuZGFyZCBjc3MzIHN5bnRheCBmb3IgdGhlXHJcbi8vIGJveC1zaGFkb3cgcHJvcGVydHkuXHJcbkBtaXhpbiBib3gtc2hhZG93KFxyXG4gICRzaGFkb3ctMSA6IGRlZmF1bHQsXHJcbiAgJHNoYWRvdy0yIDogZmFsc2UsXHJcbiAgJHNoYWRvdy0zIDogZmFsc2UsXHJcbiAgJHNoYWRvdy00IDogZmFsc2UsXHJcbiAgJHNoYWRvdy01IDogZmFsc2UsXHJcbiAgJHNoYWRvdy02IDogZmFsc2UsXHJcbiAgJHNoYWRvdy03IDogZmFsc2UsXHJcbiAgJHNoYWRvdy04IDogZmFsc2UsXHJcbiAgJHNoYWRvdy05IDogZmFsc2UsXHJcbiAgJHNoYWRvdy0xMDogZmFsc2VcclxuKSB7XHJcbiAgQGlmICRzaGFkb3ctMSA9PSBkZWZhdWx0IHtcclxuICAgICRzaGFkb3ctMSA6IC1jb21wYXNzLXNwYWNlLWxpc3QoY29tcGFjdChpZigkZGVmYXVsdC1ib3gtc2hhZG93LWluc2V0LCBpbnNldCwgZmFsc2UpLCAkZGVmYXVsdC1ib3gtc2hhZG93LWgtb2Zmc2V0LCAkZGVmYXVsdC1ib3gtc2hhZG93LXYtb2Zmc2V0LCAkZGVmYXVsdC1ib3gtc2hhZG93LWJsdXIsICRkZWZhdWx0LWJveC1zaGFkb3ctc3ByZWFkLCAkZGVmYXVsdC1ib3gtc2hhZG93LWNvbG9yKSk7XHJcbiAgfVxyXG4gICRzaGFkb3cgOiBjb21wYWN0KCRzaGFkb3ctMSwgJHNoYWRvdy0yLCAkc2hhZG93LTMsICRzaGFkb3ctNCwgJHNoYWRvdy01LCAkc2hhZG93LTYsICRzaGFkb3ctNywgJHNoYWRvdy04LCAkc2hhZG93LTksICRzaGFkb3ctMTApO1xyXG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbChib3gtc2hhZG93LCAkc2hhZG93LFxyXG4gICAgLW1veiwgLXdlYmtpdCwgbm90KC1vKSwgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxyXG4gICk7XHJcbn1cclxuXHJcbi8vIFByb3ZpZGVzIGEgc2luZ2xlIGNyb3NzLWJyb3dzZXIgQ1NTIGJveCBzaGFkb3cgZm9yIFdlYmtpdCwgR2Vja28sIGFuZCBDU1MzLlxyXG4vLyBJbmNsdWRlcyBkZWZhdWx0IGFyZ3VtZW50cyBmb3IgaG9yaXpvbnRhbCBvZmZzZXQsIHZlcnRpY2FsIG9mZnNldCwgYmx1ciBsZW5ndGgsIHNwcmVhZCBsZW5ndGgsIGNvbG9yIGFuZCBpbnNldC5cclxuQG1peGluIHNpbmdsZS1ib3gtc2hhZG93KFxyXG4gICRob2ZmICAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWgtb2Zmc2V0LFxyXG4gICR2b2ZmICAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LXYtb2Zmc2V0LFxyXG4gICRibHVyICAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWJsdXIsXHJcbiAgJHNwcmVhZCA6ICRkZWZhdWx0LWJveC1zaGFkb3ctc3ByZWFkLFxyXG4gICRjb2xvciAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWNvbG9yLFxyXG4gICRpbnNldCAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWluc2V0XHJcbikge1xyXG4gIEBpZiBub3QgKCRpbnNldCA9PSB0cnVlIG9yICRpbnNldCA9PSBmYWxzZSBvciAkaW5zZXQgPT0gaW5zZXQpIHtcclxuICAgIEB3YXJuIFwiJGluc2V0IGV4cGVjdGVkIHRvIGJlIHRydWUgb3IgdGhlIGluc2V0IGtleXdvcmQuIEdvdCAjeyRpbnNldH0gaW5zdGVhZC4gVXNpbmc6IGluc2V0XCI7XHJcbiAgfVxyXG5cclxuICBAaWYgJGNvbG9yID09IG5vbmUge1xyXG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcclxuICB9IEBlbHNlIHtcclxuICAgICRmdWxsICAgOiAkaG9mZiAkdm9mZjtcclxuICAgIEBpZiAkYmx1ciAgIHsgJGZ1bGw6ICRmdWxsICRibHVyOyAgIH1cclxuICAgIEBpZiAkc3ByZWFkIHsgJGZ1bGw6ICRmdWxsICRzcHJlYWQ7IH1cclxuICAgIEBpZiAkY29sb3IgIHsgJGZ1bGw6ICRmdWxsICRjb2xvcjsgIH1cclxuICAgIEBpZiAkaW5zZXQgIHsgJGZ1bGw6IGluc2V0ICRmdWxsOyAgIH1cclxuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGZ1bGwpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XHJcblxyXG4vLyBDU1MgVHJhbnNpdGlvbnNcclxuLy8gQ3VycmVudGx5IG9ubHkgd29ya3MgaW4gV2Via2l0LlxyXG4vL1xyXG4vLyAqIGV4cGVjdGVkIGluIENTUzMsIEZpcmVGb3ggMy42LzcgYW5kIE9wZXJhIFByZXN0byAyLjNcclxuLy8gKiBXZSdsbCBiZSBwcmVwYXJlZC5cclxuLy9cclxuLy8gSW5jbHVkaW5nIHRoaXMgc3VibW9kdWxlIHNldHMgZm9sbG93aW5nIGRlZmF1bHRzIGZvciB0aGUgbWl4aW5zOlxyXG4vL1xyXG4vLyAgICAgJGRlZmF1bHQtdHJhbnNpdGlvbi1wcm9wZXJ0eSA6IGFsbFxyXG4vLyAgICAgJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbiA6IDFzXHJcbi8vICAgICAkZGVmYXVsdC10cmFuc2l0aW9uLWZ1bmN0aW9uIDogZmFsc2VcclxuLy8gICAgICRkZWZhdWx0LXRyYW5zaXRpb24tZGVsYXkgICAgOiBmYWxzZVxyXG4vL1xyXG4vLyBPdmVycmlkZSB0aGVtIGlmIHlvdSBsaWtlLiBUaW1pbmctZnVuY3Rpb24gYW5kIGRlbGF5IGFyZSBzZXQgdG8gZmFsc2UgZm9yIGJyb3dzZXIgZGVmYXVsdHMgKGVhc2UsIDBzKS5cclxuXHJcbiRkZWZhdWx0LXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbCAhZGVmYXVsdDtcclxuXHJcbiRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzICFkZWZhdWx0O1xyXG5cclxuJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbjogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5OiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiR0cmFuc2l0aW9uYWJsZS1wcmVmaXhlZC12YWx1ZXM6IHRyYW5zZm9ybSwgdHJhbnNmb3JtLW9yaWdpbiAhZGVmYXVsdDtcclxuXHJcbi8vIE9uZSBvciBtb3JlIHByb3BlcnRpZXMgdG8gdHJhbnNpdGlvblxyXG4vL1xyXG4vLyAqIGZvciBtdWx0aXBsZSwgdXNlIGEgY29tbWEtZGVsaW1pdGVkIGxpc3RcclxuLy8gKiBhbHNvIGFjY2VwdHMgXCJhbGxcIiBvciBcIm5vbmVcIlxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tcHJvcGVydHkoJHByb3BlcnR5LTE6ICRkZWZhdWx0LXRyYW5zaXRpb24tcHJvcGVydHksXHJcbiAgJHByb3BlcnR5LTIgOiBmYWxzZSxcclxuICAkcHJvcGVydHktMyA6IGZhbHNlLFxyXG4gICRwcm9wZXJ0eS00IDogZmFsc2UsXHJcbiAgJHByb3BlcnR5LTUgOiBmYWxzZSxcclxuICAkcHJvcGVydHktNiA6IGZhbHNlLFxyXG4gICRwcm9wZXJ0eS03IDogZmFsc2UsXHJcbiAgJHByb3BlcnR5LTggOiBmYWxzZSxcclxuICAkcHJvcGVydHktOSA6IGZhbHNlLFxyXG4gICRwcm9wZXJ0eS0xMDogZmFsc2VcclxuKSB7XHJcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnR5LTEpID09IHN0cmluZyB7ICRwcm9wZXJ0eS0xOiB1bnF1b3RlKCRwcm9wZXJ0eS0xKTsgfVxyXG4gICRwcm9wZXJ0aWVzOiBjb21wYWN0KCRwcm9wZXJ0eS0xLCAkcHJvcGVydHktMiwgJHByb3BlcnR5LTMsICRwcm9wZXJ0eS00LCAkcHJvcGVydHktNSwgJHByb3BlcnR5LTYsICRwcm9wZXJ0eS03LCAkcHJvcGVydHktOCwgJHByb3BlcnR5LTksICRwcm9wZXJ0eS0xMCk7XHJcbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0ICAgIHsgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5IDogcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oLXdlYmtpdCwgJHByb3BlcnRpZXMpOyB9XHJcbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSAgIHsgICAgICAgICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5IDogcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oLW1veiwgICAgJHByb3BlcnRpZXMpOyB9XHJcbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgICAgICAgICAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5IDogcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oLW8sICAgICAgJHByb3BlcnRpZXMpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5IDogJHByb3BlcnRpZXM7XHJcbn1cclxuXHJcbi8vIE9uZSBvciBtb3JlIGR1cmF0aW9ucyBpbiBzZWNvbmRzXHJcbi8vXHJcbi8vICogZm9yIG11bHRpcGxlLCB1c2UgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdFxyXG4vLyAqIHRoZXNlIGR1cmF0aW9ucyB3aWxsIGFmZmVjdCB0aGUgcHJvcGVydGllcyBpbiB0aGUgc2FtZSBsaXN0IHBvc2l0aW9uXHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1kdXJhdGlvbigkZHVyYXRpb24tMTogJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbixcclxuICAkZHVyYXRpb24tMiA6IGZhbHNlLFxyXG4gICRkdXJhdGlvbi0zIDogZmFsc2UsXHJcbiAgJGR1cmF0aW9uLTQgOiBmYWxzZSxcclxuICAkZHVyYXRpb24tNSA6IGZhbHNlLFxyXG4gICRkdXJhdGlvbi02IDogZmFsc2UsXHJcbiAgJGR1cmF0aW9uLTcgOiBmYWxzZSxcclxuICAkZHVyYXRpb24tOCA6IGZhbHNlLFxyXG4gICRkdXJhdGlvbi05IDogZmFsc2UsXHJcbiAgJGR1cmF0aW9uLTEwOiBmYWxzZVxyXG4pIHtcclxuICBAaWYgdHlwZS1vZigkZHVyYXRpb24tMSkgPT0gc3RyaW5nIHsgJGR1cmF0aW9uLTE6IHVucXVvdGUoJGR1cmF0aW9uLTEpOyB9XHJcbiAgJGR1cmF0aW9uczogY29tcGFjdCgkZHVyYXRpb24tMSwgJGR1cmF0aW9uLTIsICRkdXJhdGlvbi0zLCAkZHVyYXRpb24tNCwgJGR1cmF0aW9uLTUsICRkdXJhdGlvbi02LCAkZHVyYXRpb24tNywgJGR1cmF0aW9uLTgsICRkdXJhdGlvbi05LCAkZHVyYXRpb24tMTApO1xyXG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2l0aW9uLWR1cmF0aW9uLCAkZHVyYXRpb25zLFxyXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcclxuICApO1xyXG59XHJcblxyXG4vLyBPbmUgb3IgbW9yZSB0aW1pbmcgZnVuY3Rpb25zXHJcbi8vXHJcbi8vICogWyBlYXNlIHwgbGluZWFyIHwgZWFzZS1pbiB8IGVhc2Utb3V0IHwgZWFzZS1pbi1vdXQgfCBjdWJpYy1iZXppZXIoeDEsIHkxLCB4MiwgeTIpXVxyXG4vLyAqIEZvciBtdWx0aXBsZSwgdXNlIGEgY29tbWEtZGVsaW1pdGVkIGxpc3RcclxuLy8gKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBlZmZlY3QgdGhlIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgbGlzdCBwb3NpdGlvblxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKCRmdW5jdGlvbi0xOiAkZGVmYXVsdC10cmFuc2l0aW9uLWZ1bmN0aW9uLFxyXG4gICRmdW5jdGlvbi0yIDogZmFsc2UsXHJcbiAgJGZ1bmN0aW9uLTMgOiBmYWxzZSxcclxuICAkZnVuY3Rpb24tNCA6IGZhbHNlLFxyXG4gICRmdW5jdGlvbi01IDogZmFsc2UsXHJcbiAgJGZ1bmN0aW9uLTYgOiBmYWxzZSxcclxuICAkZnVuY3Rpb24tNyA6IGZhbHNlLFxyXG4gICRmdW5jdGlvbi04IDogZmFsc2UsXHJcbiAgJGZ1bmN0aW9uLTkgOiBmYWxzZSxcclxuICAkZnVuY3Rpb24tMTA6IGZhbHNlXHJcbikge1xyXG4gICRmdW5jdGlvbi0xOiB1bnF1b3RlKCRmdW5jdGlvbi0xKTtcclxuICAkZnVuY3Rpb25zOiBjb21wYWN0KCRmdW5jdGlvbi0xLCAkZnVuY3Rpb24tMiwgJGZ1bmN0aW9uLTMsICRmdW5jdGlvbi00LCAkZnVuY3Rpb24tNSwgJGZ1bmN0aW9uLTYsICRmdW5jdGlvbi03LCAkZnVuY3Rpb24tOCwgJGZ1bmN0aW9uLTksICRmdW5jdGlvbi0xMCk7XHJcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLCAkZnVuY3Rpb25zLFxyXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcclxuICApO1xyXG59XHJcblxyXG4vLyBPbmUgb3IgbW9yZSB0cmFuc2l0aW9uLWRlbGF5cyBpbiBzZWNvbmRzXHJcbi8vXHJcbi8vICogZm9yIG11bHRpcGxlLCB1c2UgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdFxyXG4vLyAqIHRoZXNlIGRlbGF5cyB3aWxsIGVmZmVjdCB0aGUgcHJvcGVydGllcyBpbiB0aGUgc2FtZSBsaXN0IHBvc2l0aW9uXHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1kZWxheSgkZGVsYXktMTogJGRlZmF1bHQtdHJhbnNpdGlvbi1kZWxheSxcclxuICAkZGVsYXktMiA6IGZhbHNlLFxyXG4gICRkZWxheS0zIDogZmFsc2UsXHJcbiAgJGRlbGF5LTQgOiBmYWxzZSxcclxuICAkZGVsYXktNSA6IGZhbHNlLFxyXG4gICRkZWxheS02IDogZmFsc2UsXHJcbiAgJGRlbGF5LTcgOiBmYWxzZSxcclxuICAkZGVsYXktOCA6IGZhbHNlLFxyXG4gICRkZWxheS05IDogZmFsc2UsXHJcbiAgJGRlbGF5LTEwOiBmYWxzZVxyXG4pIHtcclxuICBAaWYgdHlwZS1vZigkZGVsYXktMSkgPT0gc3RyaW5nIHsgJGRlbGF5LTE6IHVucXVvdGUoJGRlbGF5LTEpOyB9XHJcbiAgJGRlbGF5czogY29tcGFjdCgkZGVsYXktMSwgJGRlbGF5LTIsICRkZWxheS0zLCAkZGVsYXktNCwgJGRlbGF5LTUsICRkZWxheS02LCAkZGVsYXktNywgJGRlbGF5LTgsICRkZWxheS05LCAkZGVsYXktMTApO1xyXG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2l0aW9uLWRlbGF5LCAkZGVsYXlzLFxyXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcclxuICApO1xyXG59XHJcblxyXG4vLyBUcmFuc2l0aW9uIGFsbC1pbi1vbmUgc2hvcnRoYW5kXHJcblxyXG5AbWl4aW4gc2luZ2xlLXRyYW5zaXRpb24oXHJcbiAgJHByb3BlcnR5OiAkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5LFxyXG4gICRkdXJhdGlvbjogJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbixcclxuICAkZnVuY3Rpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tZnVuY3Rpb24sXHJcbiAgJGRlbGF5OiAkZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5XHJcbikge1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oY29tcGFjdCgkcHJvcGVydHkgJGR1cmF0aW9uICRmdW5jdGlvbiAkZGVsYXkpKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oXHJcbiAgJHRyYW5zaXRpb24tMSA6IGRlZmF1bHQsXHJcbiAgJHRyYW5zaXRpb24tMiA6IGZhbHNlLFxyXG4gICR0cmFuc2l0aW9uLTMgOiBmYWxzZSxcclxuICAkdHJhbnNpdGlvbi00IDogZmFsc2UsXHJcbiAgJHRyYW5zaXRpb24tNSA6IGZhbHNlLFxyXG4gICR0cmFuc2l0aW9uLTYgOiBmYWxzZSxcclxuICAkdHJhbnNpdGlvbi03IDogZmFsc2UsXHJcbiAgJHRyYW5zaXRpb24tOCA6IGZhbHNlLFxyXG4gICR0cmFuc2l0aW9uLTkgOiBmYWxzZSxcclxuICAkdHJhbnNpdGlvbi0xMDogZmFsc2VcclxuKSB7XHJcbiAgQGlmICR0cmFuc2l0aW9uLTEgPT0gZGVmYXVsdCB7XHJcbiAgICAkdHJhbnNpdGlvbi0xIDogY29tcGFjdCgkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5ICRkZWZhdWx0LXRyYW5zaXRpb24tZHVyYXRpb24gJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbiAkZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5KTtcclxuICB9XHJcbiAgJHRyYW5zaXRpb25zOiBmYWxzZTtcclxuICBAaWYgdHlwZS1vZigkdHJhbnNpdGlvbi0xKSA9PSBsaXN0IGFuZCB0eXBlLW9mKG50aCgkdHJhbnNpdGlvbi0xLDEpKSA9PSBsaXN0IHtcclxuICAgICR0cmFuc2l0aW9uczogam9pbigkdHJhbnNpdGlvbi0xLCBjb21wYWN0KCR0cmFuc2l0aW9uLTIsICR0cmFuc2l0aW9uLTMsICR0cmFuc2l0aW9uLTQsICR0cmFuc2l0aW9uLTUsICR0cmFuc2l0aW9uLTYsICR0cmFuc2l0aW9uLTcsICR0cmFuc2l0aW9uLTgsICR0cmFuc2l0aW9uLTksICR0cmFuc2l0aW9uLTEwKSwgY29tbWEpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgJHRyYW5zaXRpb25zIDogY29tcGFjdCgkdHJhbnNpdGlvbi0xLCAkdHJhbnNpdGlvbi0yLCAkdHJhbnNpdGlvbi0zLCAkdHJhbnNpdGlvbi00LCAkdHJhbnNpdGlvbi01LCAkdHJhbnNpdGlvbi02LCAkdHJhbnNpdGlvbi03LCAkdHJhbnNpdGlvbi04LCAkdHJhbnNpdGlvbi05LCAkdHJhbnNpdGlvbi0xMCk7XHJcbiAgfVxyXG4gICRkZWxheXM6IGNvbW1hLWxpc3QoKTtcclxuICAkaGFzLWRlbGF5czogZmFsc2U7XHJcbiAgJHdlYmtpdC12YWx1ZTogY29tbWEtbGlzdCgpO1xyXG4gICRtb3otdmFsdWU6IGNvbW1hLWxpc3QoKTtcclxuICAkby12YWx1ZTogY29tbWEtbGlzdCgpO1xyXG5cclxuICAvLyBUaGlzIGJsb2NrIGNhbiBiZSBtYWRlIGNvbnNpZGVyYWJseSBzaW1wbGVyIGF0IHRoZSBwb2ludCBpbiB0aW1lIHRoYXRcclxuICAvLyB3ZSBubyBsb25nZXIgbmVlZCB0byBkZWFsIHdpdGggdGhlIGRpZmZlcmVuY2VzIGluIGhvdyBkZWxheXMgYXJlIHRyZWF0ZWQuXHJcbiAgQGVhY2ggJHRyYW5zaXRpb24gaW4gJHRyYW5zaXRpb25zIHtcclxuICAgIC8vIEV4dHJhY3QgdGhlIHZhbHVlcyBmcm9tIHRoZSBsaXN0XHJcbiAgICAvLyAodGhpcyB3b3VsZCBiZSBjbGVhbmVyIGlmIG50aCB0b29rIGEgM3JkIGFyZ3VtZW50IHRvIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlKS5cclxuICAgICRwcm9wZXJ0eTogbnRoKCR0cmFuc2l0aW9uLCAxKTtcclxuICAgICRkdXJhdGlvbjogZmFsc2U7XHJcbiAgICAkdGltaW5nLWZ1bmN0aW9uOiBmYWxzZTtcclxuICAgICRkZWxheTogZmFsc2U7XHJcbiAgICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA+IDEgeyAkZHVyYXRpb246ICAgICAgICBudGgoJHRyYW5zaXRpb24sIDIpOyB9XHJcbiAgICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA+IDIgeyAkdGltaW5nLWZ1bmN0aW9uOiBudGgoJHRyYW5zaXRpb24sIDMpOyB9XHJcbiAgICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA+IDMgeyAkZGVsYXk6ICAgICAgICAgICBudGgoJHRyYW5zaXRpb24sIDQpOyAkaGFzLWRlbGF5czogdHJ1ZTsgfVxyXG5cclxuICAgIC8vIElmIGEgZGVsYXkgaXMgcHJvdmlkZWQgd2l0aG91dCBhIHRpbWluZyBmdW5jdGlvblxyXG4gICAgQGlmIGlzLXRpbWUoJHRpbWluZy1mdW5jdGlvbikgYW5kIG5vdCgkZGVsYXkpIHsgJGRlbGF5OiAkdGltaW5nLWZ1bmN0aW9uOyAkdGltaW5nLWZ1bmN0aW9uOiBmYWxzZTsgJGhhcy1kZWxheXM6IHRydWU7IH1cclxuXHJcbiAgICAvLyBLZWVwIGEgbGlzdCBvZiBkZWxheXMgaW4gY2FzZSBvbmUgaXMgc3BlY2lmaWVkXHJcbiAgICAkZGVsYXlzOiBhcHBlbmQoJGRlbGF5cywgaWYoJGRlbGF5LCAkZGVsYXksIDBzKSk7XHJcblxyXG4gICAgJHdlYmtpdC12YWx1ZTogYXBwZW5kKCR3ZWJraXQtdmFsdWUsIGNvbXBhY3QoKHByZWZpeGVkLWZvci10cmFuc2l0aW9uKC13ZWJraXQsICRwcm9wZXJ0eSkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24pLi4uKSk7XHJcbiAgICAgICAkbW96LXZhbHVlOiBhcHBlbmQoICAgJG1vei12YWx1ZSwgY29tcGFjdCgocHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oICAgLW1veiwgJHByb3BlcnR5KSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiAkZGVsYXkpLi4uKSk7XHJcbiAgICAgICAgICRvLXZhbHVlOiBhcHBlbmQoICAgICAkby12YWx1ZSwgY29tcGFjdCgocHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oICAgICAtbywgJHByb3BlcnR5KSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiAkZGVsYXkpLi4uKSk7XHJcbiAgfVxyXG5cclxuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQgICAgeyAgICAgICAtd2Via2l0LXRyYW5zaXRpb24gOiAkd2Via2l0LXZhbHVlO1xyXG4gICAgLy8gb2xkIHdlYmtpdCBkb2Vzbid0IHN1cHBvcnQgdGhlIGRlbGF5IHBhcmFtZXRlciBpbiB0aGUgc2hvcnRoYW5kIHNvIHdlIHByb2dyZXNzaXZlbHkgZW5oYW5jZSBpdC5cclxuICAgIEBpZiAkaGFzLWRlbGF5cyAgICAgICAgICAgICAgICAgICAgICAgeyAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXkgOiAkZGVsYXlzOyAgICAgICB9IH1cclxuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhICAgeyAgICAgICAgICAtbW96LXRyYW5zaXRpb24gOiAkbW96LXZhbHVlOyAgICB9XHJcbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgICAgICAgICAgICAtby10cmFuc2l0aW9uIDogJG8tdmFsdWU7ICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbiA6ICR0cmFuc2l0aW9ucztcclxufVxyXG5cclxuLy8gY29lcmNlIGEgbGlzdCB0byBiZSBjb21tYSBkZWxpbWl0ZWQgb3IgbWFrZSBhIG5ldywgZW1wdHkgY29tbWEgZGVsaW1pdGVkIGxpc3QuXHJcbkBmdW5jdGlvbiBjb21tYS1saXN0KCRsaXN0OiAoKSkge1xyXG4gIEByZXR1cm4gam9pbigoKSwgJGxpc3QsIGNvbW1hKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBgJHByb3BlcnR5YCB3aXRoIHRoZSBnaXZlbiBwcmVmaXggaWYgaXQgaXMgZm91bmQgaW4gYCR0cmFuc2l0aW9uYWJsZS1wcmVmaXhlZC12YWx1ZXNgLlxyXG5AZnVuY3Rpb24gcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oJHByZWZpeCwgJHByb3BlcnR5KSB7XHJcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnR5KSA9PSBsaXN0IHtcclxuICAgICRuZXctbGlzdDogY29tbWEtbGlzdCgpO1xyXG4gICAgQGVhY2ggJHYgaW4gJHByb3BlcnR5IHtcclxuICAgICAgJG5ldy1saXN0OiBhcHBlbmQoJG5ldy1saXN0LCBwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbigkcHJlZml4LCAkdikpO1xyXG4gICAgfVxyXG4gICAgQHJldHVybiAkbmV3LWxpc3Q7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaWYgaW5kZXgoJHRyYW5zaXRpb25hYmxlLXByZWZpeGVkLXZhbHVlcywgJHByb3BlcnR5KSB7XHJcbiAgICAgIEByZXR1cm4gI3skcHJlZml4fS0jeyRwcm9wZXJ0eX07XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgQHJldHVybiAkcHJvcGVydHk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDaGVja3MgaWYgdGhlIHZhbHVlIGdpdmVuIGlzIGEgdW5pdCBvZiB0aW1lLlxyXG5AZnVuY3Rpb24gaXMtdGltZSgkdmFsdWUpIHtcclxuICBAaWYgdHlwZS1vZigkdmFsdWUpID09IG51bWJlciB7XHJcbiAgICBAcmV0dXJuIG5vdChub3QoaW5kZXgocyBtcywgdW5pdCgkdmFsdWUpKSkpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/*! exports provided: name, job, description, about_description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "job", function() { return job; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about_description", function() { return about_description; });
//
// ===== File globals.ts    
//

const name = "Enrique Lozano";
const job = "Ingeniero Informático";
const description = "Estudiante de Ingeniería Informática. Me considero una persona abierta y sociable, con una gran pasión por la tecnología y muchas ganas de aprender nuevos conocimientos y vivir nuevas experiencias.";
const about_description = "en esta sección podras consultar otros datos de interés sobre mi, asi como consultar mi CV. Sientete libre de navegar por esta página web y de ponerte en contacto conmigo si te interesa :)";


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

module.exports = __webpack_require__(/*! C:\Users\kikel\Desktop\LozanoWebPage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map