(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kikel\Documents\GitHub\My-personal-webpage\src\main.ts */"zUnb");


/***/ }),

/***/ "6dvC":
/*!****************************************************!*\
  !*** ./src/app/tab-header/tab-header.component.ts ***!
  \****************************************************/
/*! exports provided: TabHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function() { return TabHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

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
    } }, styles: [".header[_ngcontent-%COMP%] {\n  height: 10%;\n  font-weight: bold;\n  font-size: xx-large;\n  color: black;\n  padding-top: 7%;\n  padding-left: 7%;\n}\n\n.underline--magical[_ngcontent-%COMP%] {\n  background-image: linear-gradient(120deg, #3248F4 0%, #8fd3f4 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 0.2em;\n  background-position: 0 88%;\n  transition: background-size 0.25s ease-in;\n}\n\n.underline--magical[_ngcontent-%COMP%]:hover {\n  background-size: 100% 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNJLG1FQUFBO0VBRUEsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQUE7QUFESjs7QUFFSTtFQUNFLHlCQUFBO0FBQU4iLCJmaWxlIjoidGFiLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogNyU7XHJcbn1cclxuXHJcbi8vQW5pbWF0aW9ucyBmb3IgdGhlIHVuZGVybGluZWQgZWxlbWVudHNcclxuLnVuZGVybGluZS0tbWFnaWNhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzI0OEY0IDAlLCAjOGZkM2Y0IDEwMCUpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzI0OEY0IDAlLCAjRkYwMTFEIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAwLjJlbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgODglO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuMjVzIGVhc2UtaW47XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDg4JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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

/***/ "Gccu":
/*!************************************************!*\
  !*** ./src/app/left-tab/left-tab.component.ts ***!
  \************************************************/
/*! exports provided: LeftTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTabComponent", function() { return LeftTabComponent; });
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tab-header/tab-header.component */ "6dvC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





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
LeftTabComponent.ɵfac = function LeftTabComponent_Factory(t) { return new (t || LeftTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_0__["TabHeaderComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
LeftTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeftTabComponent, selectors: [["app-left-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_0__["TabHeaderComponent"]])], decls: 49, vars: 36, consts: [["id", "main-tab", 1, "main-tab"], [1, "face-image"], ["src", "../../assets/images/IMGP0592.jpg", 1, "profile-picture"], [1, "name"], [1, "name-font"], [1, "job"], [1, "page-links"], ["fragment", "inicio", 3, "routerLink"], [1, "category"], ["src", "../../assets/icons/home.png", 1, "icon"], ["fragment", "sobre", 3, "routerLink"], ["src", "../../assets/icons/user-1.png", 1, "icon"], ["fragment", "educacion", 3, "routerLink"], ["src", "../../assets/icons/atomic.png", 1, "icon"], ["fragment", "habilidades", 3, "routerLink"], ["src", "../../assets/icons/monitor.png", 1, "icon"], ["fragment", "experiencia", 3, "routerLink"], ["src", "../../assets/icons/layers.png", 1, "icon"], ["fragment", "contacto", 3, "routerLink"], ["src", "../../assets/icons/chat.png", 1, "icon"], [1, "social-media"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/enriqueloz88"], ["src", "../../assets/icons/github.png", 1, "social-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/"], ["src", "../../assets/icons/linkedin.png", 1, "social-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com"], ["src", "../../assets/icons/email.png", 1, "social-icon"]], template: function LeftTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 14, "full_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 16, "job"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 18, "home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 20, "about_me.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 22, "education.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 24, "skills.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 26, "experience.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 28, "contact.title"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".main-tab[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 90%;\n  margin: 5%;\n  margin-top: 2.5%;\n  background-color: #3248f4;\n  border-radius: 22px;\n  color: white;\n  display: inline-block;\n  position: fixed;\n}\n\nspan[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  vertical-align: text-top;\n  font-size: large;\n  text-decoration: none;\n}\n\n.face-image[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  height: 6em;\n  width: 6em;\n  border-radius: 100%;\n  margin: 10%;\n  border: 0.2em solid white;\n}\n\n.name[_ngcontent-%COMP%] {\n  height: 18%;\n}\n\n.name-font[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: x-large;\n  margin-left: 10%;\n  margin-top: 5%;\n}\n\n.job[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-left: 10%;\n  font-size: large;\n}\n\n.page-links[_ngcontent-%COMP%] {\n  height: 47%;\n}\n\n.category[_ngcontent-%COMP%] {\n  font-size: large;\n  margin-top: 3.5%;\n  cursor: pointer;\n  transition-duration: 0.5s;\n}\n\n.category[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 1.4em;\n  width: 1.4em;\n  margin-left: 10%;\n  margin-right: 5%;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  height: 15%;\n  text-align: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 1.7em;\n  width: 1.7em;\n  margin: 5%;\n  cursor: pointer;\n  transition-duration: 1.5s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: rotate(360deg) scale(1.4);\n  \n}\n\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 30, 227, 0.92);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n\n.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n}\n\n.title_settings[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n  inline-size: block;\n  line-height: 1em;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%] {\n  margin-top: 250%;\n}\n\n.selector[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.flags[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.aux[_ngcontent-%COMP%] {\n  height: auto;\n  vertical-align: bottom;\n}\n\n.aux-top[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.aux-bottom[_ngcontent-%COMP%] {\n  height: 50%;\n  color: rgba(0, 30, 227, 0);\n}\n\n.aux-container[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .main-tab[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxlZnQtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksd0JBQUE7QUFBSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFNQTtFQUNJLFdBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFPQTtFQUNJLFdBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpKOztBQVFBO0VBQ0ksV0FBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFJQSx5QkFBQTtBQUxKOztBQVFBO0VBQ2dDLFNBQUE7RUFDSSxlQUFBO0VBQ2hDLHNCQUFBO0FBSEo7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUlBLHlCQUFBO0FBTEo7O0FBUUE7RUFDa0QsbUNBQUE7RUFDSixTQUFBO0VBQzFDLG9DQUFBO0VBQXNDLCtCQUFBO0FBRjFDOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTs7RUFFSSxjQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FBRko7O0FBS0E7RUFDSSxxQkFBQTtBQUZKOztBQUtBOzs7O3dDQUFBOztBQU1BO0VBQ0k7SUFDSSxhQUFBO0VBSE47O0VBS0U7SUFDSSxlQUFBO0VBRk47O0VBSUU7SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFETjtBQUNGIiwiZmlsZSI6ImxlZnQtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9MZWZ0IENvbnRhaW5lciBmb3IgbGlua3NcclxuLm1haW4tdGFiIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG59XHJcblxyXG4vL0luZGl2aWR1YWwgcGFydHMgb2YgdGhlIGxlZnQgdGFiXHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8vUHJvZmlsZSBwaWN0dXJlXHJcbi5mYWNlLWltYWdlIHtcclxuICAgIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJlIHtcclxuICAgIGhlaWdodDogNmVtO1xyXG4gICAgd2lkdGg6IDZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwJTtcclxuICAgIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi8vSm9ic1xyXG4ubmFtZSB7XHJcbiAgICBoZWlnaHQ6IDE4JTtcclxufVxyXG5cclxuLm5hbWUtZm9udCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmpvYiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi8vTGlua3NcclxuLnBhZ2UtbGlua3Mge1xyXG4gICAgaGVpZ2h0OiA0NyU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLXRvcDogMy41JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uY2F0ZWdvcnk6aG92ZXIge1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IC8qIElFIDkgKi9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgLy9UcmFuc2l0aW9uIHRvIGFub3RoZXIgY29sb3JcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgaGVpZ2h0OiAxLjRlbTtcclxuICAgIHdpZHRoOiAxLjRlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4vL1NvY2lhbCBtZWRpYSBsaW5rc1xyXG4uc29jaWFsLW1lZGlhIHtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWljb24ge1xyXG4gICAgaGVpZ2h0OiAxLjdlbTtcclxuICAgIHdpZHRoOiAxLjdlbTtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuLnNvY2lhbC1pY29uOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpOyAvKiBDaHJvbWUsIE9wZXJhIDE1KywgU2FmYXJpIDMuMSsgKi9cclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7IC8qIElFIDkgKi9cclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTsgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzAsIDIyNywgMC45Mik7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ub3ZlcmxheS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSBhIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ub3ZlcmxheSBhOmhvdmVyLFxyXG4ub3ZlcmxheSBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ub3ZlcmxheSAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDQ1cHg7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuXHJcbi50aXRsZV9zZXR0aW5ncyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGlubGluZS1zaXplOiBibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbm1hdC1zbGlkZS10b2dnbGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjUwJTtcclxufVxyXG5cclxuLnNlbGVjdG9yIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogMCA1JTtcclxufVxyXG5cclxuLmZsYWdzIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogMCA1JTtcclxufVxyXG5cclxuLmF1eCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4uYXV4LXRvcCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLmF1eC1ib3R0b20ge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAzMCwgMjI3LCAwKTtcclxufVxyXG5cclxuLmF1eC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIE1PQklMRSBWSUVXXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1haW4tdGFiIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm92ZXJsYXkgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-tab/left-tab.component */ "Gccu");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "ablI");
/* harmony import */ var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speed-dial-fab/speed-dial-fab.component */ "V10N");




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
    } }, directives: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__["LeftTabComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__["RightTabComponent"], _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__["SpeedDialFabComponent"]], styles: [".fab-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .fab-button[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUdBOzs7O3dDQUFBOztBQU1BO0VBQ0k7SUFDSSxhQUFBO0VBRE47QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFiLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIE1PQklMRSBWSUVXXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAuZmFiLWJ1dHRvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "V10N":
/*!************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.component.ts ***!
  \************************************************************/
/*! exports provided: SpeedDialFabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedDialFabComponent", function() { return SpeedDialFabComponent; });
/* harmony import */ var _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speed-dial-fab.animations */ "u/5M");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../left-tab/left-tab.component */ "Gccu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function SpeedDialFabComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpeedDialFabComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [""]; };
function SpeedDialFabComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("fragment", btn_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](btn_r4.icon);
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
SpeedDialFabComponent.ɵfac = function SpeedDialFabComponent_Factory(t) { return new (t || SpeedDialFabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__["LeftTabComponent"])); };
SpeedDialFabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SpeedDialFabComponent, selectors: [["app-speed-dial-fab"]], inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__["LeftTabComponent"]])], decls: 7, vars: 6, consts: [["id", "fab-dismiss", 3, "click", 4, "ngIf"], [1, "fab-container"], ["mat-fab", "", "color", "warn", 1, "fab-toggler", 3, "click"], [1, "material-icons"], ["mat-mini-fab", "", "class", "fab-secondary", "color", "secondary", 4, "ngFor", "ngForOf"], ["id", "fab-dismiss", 3, "click"], ["mat-mini-fab", "", "color", "secondary", 1, "fab-secondary"], [3, "routerLink", "fragment"]], template: function SpeedDialFabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SpeedDialFabComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SpeedDialFabComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SpeedDialFabComponent_button_6_Template, 4, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fabTogglerState === "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fabToggler", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx.fabTogglerState));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@speedDialStagger", ctx.buttons.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".fab-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n}\n.fab-toggler[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n#fab-dismiss[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNwZWVkLWRpYWwtZmFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUNNO0VBQ0UsbUJBQUE7QUFDUjtBQUlFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7QUFESiIsImZpbGUiOiJzcGVlZC1kaWFsLWZhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZhYi10b2dnbGVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcbiAgXHJcbiAgI2ZhYi1kaXNtaXNzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuXHJcbiAgYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgICAiXX0= */"], data: { animation: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_0__["speedDialFabAnimations"] } });


/***/ }),

/***/ "WpLk":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


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
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);\n\n\nbody[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: 0.05em;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  margin: 4em auto;\n  position: relative;\n  max-width: 46em;\n}\n.timeline[_ngcontent-%COMP%]:before {\n  background-color: black;\n  content: \"\";\n  margin-left: -1px;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 2px;\n  height: 100%;\n}\n.timeline-event[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-icon[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  background-color: #3248f4;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-thumbnail[_ngcontent-%COMP%] {\n  box-shadow: inset 40em 0 0 0 #3248f4;\n}\n.timeline-event-copy[_ngcontent-%COMP%] {\n  padding: 2em;\n  position: relative;\n  top: -1.875em;\n  left: 4em;\n  width: 80%;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1.2em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.timeline-event-thumbnail) {\n  padding-bottom: 1.2em;\n}\n.timeline-event-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in;\n  transform: rotate(45deg);\n  background-color: black;\n  outline: 10px solid white;\n  display: block;\n  margin: 0.5em 0.5em 0.5em -0.5em;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 1em;\n  height: 1em;\n}\n.timeline-event-thumbnail[_ngcontent-%COMP%] {\n  -webkit-transition: box-shadow 0.5s ease-in;\n  -webkit-transition-delay: 0.1s;\n  transition: box-shadow 0.5s ease-in 0.1s;\n  color: white;\n  font-size: 0.75em;\n  background-color: black;\n  box-shadow: inset 0 0 0 0em #3248f4;\n  display: inline-block;\n  margin-bottom: 1.2em;\n  padding: 0.25em 1em 0.2em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxjb21wYXNzLW1peGluc1xcbGliXFxjb21wYXNzXFxjc3MzXFxfc2hhcmVkLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGNvbXBhc3MtbWl4aW5zXFxsaWJcXGNvbXBhc3NcXGNzczNcXF9ib3gtc2l6aW5nLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGNvbXBhc3MtbWl4aW5zXFxsaWJcXGNvbXBhc3NcXGNzczNcXF90cmFuc2Zvcm0uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX2JveC1zaGFkb3cuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcY29tcGFzcy1taXhpbnNcXGxpYlxcY29tcGFzc1xcY3NzM1xcX3RyYW5zaXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUVEsc0VBQUE7QUFOUixjQUFBO0FBS0EsVUFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUxGO0FBUUEsV0FBQTtBQUNBO0VDRWlFLHNCQ1gxRDtBRk9QO0FBTUEsWUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFIRjtBQUtFO0VBQ0UsdUJBekJNO0VBMEJOLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUhKO0FBT0E7RUFDRSxrQkFBQTtBQUpGO0FBUUk7RUN6QjZELHlCRTZTdkQ7RUhsUkoseUJBekNJO0FBdUNWO0FBS0k7RUM5QjZELG9DRzBCckQ7QUpJWjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSEY7QUFLRTtFQUNFLGlCQUFBO0FBSEo7QUFNRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQU9FO0VBQ0UsZ0JBQUE7QUFMSjtBQVFFO0VBQ0UscUJBQUE7QUFOSjtBQVVBO0VLNEcwRCxrQ0FyQ3ZDO0VKcEk4Qyx3QkU2U3ZEO0VINU9SLHVCQWpGUTtFQWtGUix5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUt3RmtELDJDQUwvQjtFQU95Qiw4QkFUL0I7RUFZNkMsd0NBckN2QztFTHREakIsWUE3RlE7RUE4RlIsaUJBQUE7RUFFQSx1QkFqR1E7RUNnQnVELG1DRzBCckQ7RUp5RFYscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FBSUYiLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+Y29tcGFzcy1taXhpbnMvbGliL2NvbXBhc3MvY3NzMyc7XHJcblxyXG4vKiBWYXJpYWJsZXMgKi9cclxuJGNvbG9yLTE6IGJsYWNrO1xyXG4kY29sb3ItMjogd2hpdGU7XHJcbiRjb2xvci0zOiByZ2IoNTAsIDcyLCAyNDQpO1xyXG5cclxuLyogRm9udHMgKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNzAwKTtcclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbn1cclxuXHJcbi8qIExheW91dCAqL1xyXG4qIHtcclxuICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xyXG59XHJcblxyXG4vKiBTdHlsaW5nICovXHJcbi50aW1lbGluZSB7XHJcbiAgbWFyZ2luOiA0ZW0gYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA0NmVtO1xyXG4gIFxyXG4gICY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0xO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDJlbTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGltZWxpbmUtZXZlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICBcclxuICAgIC50aW1lbGluZS1ldmVudC1pY29uIHtcclxuICAgICAgQGluY2x1ZGUgcm90YXRlICgtNDVkZWcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpbWVsaW5lLWV2ZW50LXRodW1ibmFpbCB7XHJcbiAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgNDBlbSAwIDAgMCAkY29sb3ItMyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGltZWxpbmUtZXZlbnQtY29weSB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xLjg3NWVtO1xyXG4gIGxlZnQ6IDRlbTtcclxuICB3aWR0aDogODAlO1xyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gIH1cclxuICBcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbiAgfVxyXG4gIFxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICBwOm5vdCgudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGltZWxpbmUtZXZlbnQtaWNvbiB7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbih0cmFuc2Zvcm0gMC4ycyBlYXNlLWluKTtcclxuICBAaW5jbHVkZSByb3RhdGUgKDQ1ZGVnKTtcclxuICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMTtcclxuICBvdXRsaW5lOiAxMHB4IHNvbGlkICRjb2xvci0yO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMC41ZW0gMC41ZW0gMC41ZW0gLTAuNWVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMmVtO1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi50aW1lbGluZS1ldmVudC10aHVtYm5haWwge1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4gMC4xcyk7XHJcbiAgY29sb3I6ICRjb2xvci0yO1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0xO1xyXG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAwIDAgMGVtIHJnYig1MCwgNzIsIDI0NCkpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICBwYWRkaW5nOiAwLjI1ZW0gMWVtIDAuMmVtIDFlbTtcclxufSIsIkBpbXBvcnQgXCIuLi9zdXBwb3J0XCI7XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzaWMgc3VwcG9ydCBmb3IgQ1NTMyBwcm9wZXJ0aWVzIGFuZFxuLy8gdGhlaXIgY29ycmVzcG9uZGluZyBleHBlcmltZW50YWwgQ1NTMiBwcm9wZXJ0aWVzIHdoZW5cbi8vIHRoZSBpbXBsZW1lbnRhdGlvbnMgYXJlIGlkZW50aWNhbCBleGNlcHQgZm9yIHRoZSBwcm9wZXJ0eVxuLy8gcHJlZml4LlxuQG1peGluIGV4cGVyaW1lbnRhbCgkcHJvcGVydHksICR2YWx1ZSxcbiAgJG1veiAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhLFxuICAkd2Via2l0ICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCxcbiAgJG8gICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSxcbiAgJG1zICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1taWNyb3NvZnQsXG4gICRraHRtbCAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwsXG4gICRvZmZpY2lhbCA6IHRydWVcbikge1xuICBAaWYgJHdlYmtpdCAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0ICAgIHsgLXdlYmtpdC0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRraHRtbCAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLWtodG1sICAgICB7ICAta2h0bWwtI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG4gIEBpZiAkbW96ICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhICAgeyAgICAtbW96LSN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxuICBAaWYgJG1zICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbWljcm9zb2Z0IHsgICAgIC1tcy0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRvICAgICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhICAgICB7ICAgICAgLW8tI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG4gIEBpZiAkb2ZmaWNpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxufVxuXG4vLyBTYW1lIGFzIGV4cGVyaW1lbnRhbCgpLCBidXQgZm9yIGNhc2VzIHdoZW4gdGhlIHByb3BlcnR5IGlzIHRoZSBzYW1lIGFuZCB0aGUgdmFsdWUgaXMgdmVuZG9yaXplZFxuQG1peGluIGV4cGVyaW1lbnRhbC12YWx1ZSgkcHJvcGVydHksICR2YWx1ZSxcbiAgJG1veiAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhLFxuICAkd2Via2l0ICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCxcbiAgJG8gICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSxcbiAgJG1zICAgICAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1taWNyb3NvZnQsXG4gICRraHRtbCAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Ita2h0bWwsXG4gICRvZmZpY2lhbCA6IHRydWVcbikge1xuICBAaWYgJHdlYmtpdCAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0ICAgIHsgI3skcHJvcGVydHl9IDogLXdlYmtpdC0jeyR2YWx1ZX07IH1cbiAgQGlmICRraHRtbCAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLWtodG1sICAgICB7ICN7JHByb3BlcnR5fSA6ICAta2h0bWwtI3skdmFsdWV9OyB9XG4gIEBpZiAkbW96ICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhICAgeyAjeyRwcm9wZXJ0eX0gOiAgICAtbW96LSN7JHZhbHVlfTsgfVxuICBAaWYgJG1zICAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbWljcm9zb2Z0IHsgI3skcHJvcGVydHl9IDogICAgIC1tcy0jeyR2YWx1ZX07IH1cbiAgQGlmICRvICAgICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhICAgICB7ICN7JHByb3BlcnR5fSA6ICAgICAgLW8tI3skdmFsdWV9OyB9XG4gIEBpZiAkb2ZmaWNpYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAjeyRwcm9wZXJ0eX0gOiAgICAgICAgICN7JHZhbHVlfTsgfVxufVxuIiwiQGltcG9ydCBcInNoYXJlZFwiO1xuXG4vLyBDaGFuZ2UgdGhlIGJveCBtb2RlbCBmb3IgTW96aWxsYSwgV2Via2l0LCBJRTggYW5kIHRoZSBmdXR1cmVcbi8vXG4vLyBAcGFyYW0gJGJzXG4vLyAgIFsgY29udGVudC1ib3ggfCBib3JkZXItYm94IF1cblxuQG1peGluIGJveC1zaXppbmcoJGJzKSB7XG4gICRiczogdW5xdW90ZSgkYnMpO1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwoYm94LXNpemluZywgJGJzLFxuICAgIC1tb3osIC13ZWJraXQsIG5vdCgtbyksIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuLy8gQGRvYyBvZmZcbi8vIE5vdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2FmYXJpLCBDaHJvbWUsIGFuZCBGaXJlZm94IGFsbCBzdXBwb3J0IDNEIHRyYW5zZm9ybXMuIEhvd2V2ZXIsXG4vLyBvbmx5IGluIHRoZSBtb3N0IHJlY2VudCBidWlsZHMuIFlvdSBzaG91bGQgYWxzbyBwcm92aWRlIGZhbGxiYWNrIDJkIHN1cHBvcnQgZm9yXG4vLyBPcGVyYSBhbmQgSUUuIElFMTAgaXMgc2xhdGVkIHRvIGhhdmUgM2QgZW5hYmxlZCwgYnV0IGlzIGN1cnJlbnRseSB1bnJlbGVhc2VkLlxuLy8gVG8gbWFrZSB0aGF0IGVhc3ksIGFsbCAyRCB0cmFuc2Zvcm1zIGluY2x1ZGUgYW4gYnJvd3Nlci10YXJnZXRpbmcgdG9nZ2xlICgkb25seTNkKVxuLy8gdG8gc3dpdGNoIGJldHdlZW4gdGhlIHR3byBzdXBwb3J0IGxpc3RzLiBUaGUgdG9nZ2xlIGRlZmF1bHRzIHRvICdmYWxzZScgKDJEKSxcbi8vIGFuZCBhbHNvIGFjY2VwdHMgJ3RydWUnICgzRCkuIEN1cnJlbnRseSB0aGUgbGlzdHMgYXJlIGFzIGZvbGxvd3M6XG4vLyAyRDogTW96aWxsYSwgV2Via2l0LCBPcGVyYSwgT2ZmaWNpYWxcbi8vIDNEOiBXZWJraXQsIEZpcmVmb3guXG5cbi8vIEF2YWlsYWJsZSBUcmFuc2Zvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLSBTY2FsZSAoMmQgYW5kIDNkKVxuLy8gLSBSb3RhdGUgKDJkIGFuZCAzZClcbi8vIC0gVHJhbnNsYXRlICgyZCBhbmQgM2QpXG4vLyAtIFNrZXcgKDJkIG9ubHkpXG5cbi8vIFRyYW5zZm9ybSBQYXJhbWV0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLSBUcmFuc2Zvcm0gT3JpZ2luICgyZCBhbmQgM2QpXG4vLyAtIFBlcnNwZWN0aXZlICgzZClcbi8vIC0gUGVyc3BlY3RpdmUgT3JpZ2luICgzZClcbi8vIC0gVHJhbnNmb3JtIFN0eWxlICgzZClcbi8vIC0gQmFja2ZhY2UgVmlzaWJpbGl0eSAoM2QpXG5cbi8vIE1peGlucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHJhbnNmb3JtLW9yaWdpblxuLy8gIC0gc2hvcnRjdXRzOiAgdHJhbnNmb3JtLW9yaWdpbjJkLCB0cmFuc2Zvcm0tb3JpZ2luM2Rcbi8vICAtIGhlbHBlcnM6ICAgIGFwcGx5LW9yaWdpblxuLy8gdHJhbnNmb3JtXG4vLyAgLSBzaG9ydGN1dHM6ICB0cmFuc2Zvcm0yZCwgdHJhbnNmb3JtM2Rcbi8vICAtIGhlbHBlcnM6ICAgIHNpbXBsZS10cmFuc2Zvcm0sIGNyZWF0ZS10cmFuc2Zvcm1cbi8vIHBlcnNwZWN0aXZlXG4vLyAgLSBoZWxwZXJzOiAgICBwZXJzcGVjdGl2ZS1vcmlnaW5cbi8vIHRyYW5zZm9ybS1zdHlsZVxuLy8gYmFja2ZhY2UtdmlzaWJpbGl0eVxuLy8gc2NhbGVcbi8vICAtIHNob3J0Y3V0czogIHNjYWxlWCwgc2NhbGVZLCBzY2FsZVosIHNjYWxlM2Rcbi8vIHJvdGF0ZVxuLy8gIC0gc2hvcnRjdXRzOiAgcm90YXRlWCwgcm90YXRlWSwgcm90YXRlM2Rcbi8vIHRyYW5zbGF0ZVxuLy8gIC0gc2hvcnRjdXRzOiAgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgdHJhbnNsYXRlWiwgdHJhbnNsYXRlM2Rcbi8vIHNrZXdcbi8vICAtIHNob3J0Y3V0czogIHNrZXdYLCBza2V3WVxuXG4vLyBEZWZhdWx0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBkb2Mgb25cblxuLy8gVGhlIGRlZmF1bHQgeC1vcmlnaW4gZm9yIHRyYW5zZm9ybXNcbiRkZWZhdWx0LW9yaWdpbi14ICAgIDogNTAlICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgeS1vcmlnaW4gZm9yIHRyYW5zZm9ybXNcbiRkZWZhdWx0LW9yaWdpbi15ICAgIDogNTAlICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgei1vcmlnaW4gZm9yIHRyYW5zZm9ybXNcbiRkZWZhdWx0LW9yaWdpbi16ICAgIDogNTAlICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuXG5cbi8vIFRoZSBkZWZhdWx0IHgtbXVsdGlwbGllciBmb3Igc2NhbGluZ1xuJGRlZmF1bHQtc2NhbGUteCAgICAgOiAxLjI1ICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB5LW11bHRpcGxpZXIgZm9yIHNjYWxpbmdcbiRkZWZhdWx0LXNjYWxlLXkgICAgIDogJGRlZmF1bHQtc2NhbGUteCAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgei1tdWx0aXBsaWVyIGZvciBzY2FsaW5nXG4kZGVmYXVsdC1zY2FsZS16ICAgICA6ICRkZWZhdWx0LXNjYWxlLXggICAgICAhZGVmYXVsdDtcblxuXG4vLyBUaGUgZGVmYXVsdCBhbmdsZSBmb3Igcm90YXRpb25zXG4kZGVmYXVsdC1yb3RhdGUgICAgICA6IDQ1ZGVnICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcblxuXG4vLyBUaGUgZGVmYXVsdCB4LXZlY3RvciBmb3IgdGhlIGF4aXMgb2YgM2Qgcm90YXRpb25zXG4kZGVmYXVsdC12ZWN0b3IteCAgICA6IDEgICAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHktdmVjdG9yIGZvciB0aGUgYXhpcyBvZiAzZCByb3RhdGlvbnNcbiRkZWZhdWx0LXZlY3Rvci15ICAgIDogMSAgICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgei12ZWN0b3IgZm9yIHRoZSBheGlzIG9mIDNkIHJvdGF0aW9uc1xuJGRlZmF1bHQtdmVjdG9yLXogICAgOiAxICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG5cblxuLy8gVGhlIGRlZmF1bHQgeC1sZW5ndGggZm9yIHRyYW5zbGF0aW9uc1xuJGRlZmF1bHQtdHJhbnNsYXRlLXggOiAxZW0gICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB5LWxlbmd0aCBmb3IgdHJhbnNsYXRpb25zXG4kZGVmYXVsdC10cmFuc2xhdGUteSA6ICRkZWZhdWx0LXRyYW5zbGF0ZS14ICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHotbGVuZ3RoIGZvciB0cmFuc2xhdGlvbnNcbiRkZWZhdWx0LXRyYW5zbGF0ZS16IDogJGRlZmF1bHQtdHJhbnNsYXRlLXggICFkZWZhdWx0O1xuXG5cbi8vIFRoZSBkZWZhdWx0IHgtYW5nbGUgZm9yIHNrZXdpbmdcbiRkZWZhdWx0LXNrZXcteCAgICAgIDogNWRlZyAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgeS1hbmdsZSBmb3Igc2tld2luZ1xuJGRlZmF1bHQtc2tldy15ICAgICAgOiA1ZGVnICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG5cblxuLy8gKipUcmFuc2Zvcm0tb3JpZ2luKipcbi8vIFRyYW5zZm9ybS1vcmlnaW4gc2VudCBhcyBhIGNvbXBsZXRlIHN0cmluZ1xuLy9cbi8vICAgICBAaW5jbHVkZSBhcHBseS1vcmlnaW4oIG9yaWdpbiBbLCAzRC1vbmx5IF0gKVxuLy9cbi8vIHdoZXJlICdvcmlnaW4nIGlzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3QgY29udGFpbmluZyAxLTMgKHgveS96KSBjb29yZGluYXRlc1xuLy8gaW4gcGVyY2VudGFnZXMsIGFic29sdXRlIChweCwgY20sIGluLCBlbSBldGMuLikgb3IgcmVsYXRpdmVcbi8vIChsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20sIGNlbnRlcikgdW5pdHNcbi8vXG4vLyBAcGFyYW0gb25seTNkIFNldCB0aGlzIHRvIHRydWUgdG8gb25seSBhcHBseSB0aGlzXG4vLyBtaXhpbiB3aGVyZSBicm93c2VycyBoYXZlIDNEIHN1cHBvcnQuXG5AbWl4aW4gYXBwbHktb3JpZ2luKCRvcmlnaW4sICRvbmx5M2QpIHtcbiAgJG9ubHkzZDogJG9ubHkzZCBvciAtY29tcGFzcy1saXN0LXNpemUoLWNvbXBhc3MtbGlzdCgkb3JpZ2luKSkgPiAyO1xuICBAaWYgJG9ubHkzZCB7XG4gICAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zZm9ybS1vcmlnaW4sICRvcmlnaW4sXG4gICAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgICApO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLW9yaWdpbiwgJG9yaWdpbixcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICAgICk7XG4gIH1cbn1cblxuLy8gVHJhbnNmb3JtLW9yaWdpbiBzZW50IGFzIGluZGl2aWR1YWwgYXJndW1lbnRzOlxuLy9cbi8vICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tb3JpZ2luKCBbIG9yaWdpbi14LCBvcmlnaW4teSwgb3JpZ2luLXosIDNELW9ubHkgXSApXG4vL1xuLy8gd2hlcmUgdGhlIDMgJ29yaWdpbi0nIGFyZ3VtZW50cyByZXByZXNlbnQgeC95L3ogY29vcmRpbmF0ZXMuXG4vL1xuLy8gKipOT1RFOioqIHNldHRpbmcgeiBjb29yZGluYXRlcyB0cmlnZ2VycyAzRCBzdXBwb3J0IGxpc3QsIGxlYXZlIGZhbHNlIGZvciAyRCBzdXBwb3J0XG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbihcbiAgJG9yaWdpbi14OiAkZGVmYXVsdC1vcmlnaW4teCxcbiAgJG9yaWdpbi15OiAkZGVmYXVsdC1vcmlnaW4teSxcbiAgJG9yaWdpbi16OiBmYWxzZSxcbiAgJG9ubHkzZDogICBpZigkb3JpZ2luLXosIHRydWUsIGZhbHNlKVxuKSB7XG4gICRvcmlnaW46IHVucXVvdGUoJycpO1xuICBAaWYgJG9yaWdpbi14IG9yICRvcmlnaW4teSBvciAkb3JpZ2luLXoge1xuICAgIEBpZiAkb3JpZ2luLXggeyAkb3JpZ2luOiAkb3JpZ2luLXg7IH0gQGVsc2UgeyAkb3JpZ2luOiA1MCU7IH1cbiAgICBAaWYgJG9yaWdpbi15IHsgJG9yaWdpbjogJG9yaWdpbiAkb3JpZ2luLXk7IH0gQGVsc2UgeyBAaWYgJG9yaWdpbi16IHsgJG9yaWdpbjogJG9yaWdpbiA1MCU7IH19XG4gICAgQGlmICRvcmlnaW4teiB7ICRvcmlnaW46ICRvcmlnaW4gJG9yaWdpbi16OyB9XG4gICAgQGluY2x1ZGUgYXBwbHktb3JpZ2luKCRvcmlnaW4sICRvbmx5M2QpO1xuICB9XG59XG5cblxuLy8gVHJhbnNmb3JtIHNlbnQgYXMgYSBjb21wbGV0ZSBzdHJpbmc6XG4vL1xuLy8gICAgIEBpbmNsdWRlIHRyYW5zZm9ybSggdHJhbnNmb3JtcyBbLCAzRC1vbmx5IF0gKVxuLy9cbi8vIHdoZXJlICd0cmFuc2Zvcm1zJyBpcyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGFsbCB0aGUgdHJhbnNmb3JtcyB0byBiZSBhcHBsaWVkLlxuQG1peGluIHRyYW5zZm9ybShcbiAgJHRyYW5zZm9ybSxcbiAgJG9ubHkzZDogZmFsc2Vcbikge1xuICBAaWYgJG9ubHkzZCB7XG4gICAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zZm9ybSwgJHRyYW5zZm9ybSxcbiAgICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICAgICk7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0sICR0cmFuc2Zvcm0sXG4gICAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgICApO1xuICB9XG59XG5cbi8vIFNob3J0Y3V0IHRvIHRhcmdldCBhbGwgYnJvd3NlcnMgd2l0aCAyRCB0cmFuc2Zvcm0gc3VwcG9ydFxuQG1peGluIHRyYW5zZm9ybTJkKCR0cmFucykge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCBmYWxzZSk7XG59XG5cbi8vIFNob3J0Y3V0IHRvIHRhcmdldCBvbmx5IGJyb3dzZXJzIHdpdGggM0QgdHJhbnNmb3JtIHN1cHBvcnRcbkBtaXhpbiB0cmFuc2Zvcm0zZCgkdHJhbnMpIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgdHJ1ZSk7XG59XG5cbi8vIEBkb2Mgb2ZmXG4vLyAzRCBQYXJhbWV0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBkb2Mgb25cblxuLy8gU2V0IHRoZSBwZXJzcGVjdGl2ZSBvZiAzRCB0cmFuc2Zvcm1zIG9uIHRoZSBjaGlsZHJlbiBvZiBhbiBlbGVtZW50OlxuLy9cbi8vICAgICAgQGluY2x1ZGUgcGVyc3BlY3RpdmUoIHBlcnNwZWN0aXZlIClcbi8vXG4vLyB3aGVyZSAncGVyc3BlY3RpdmUnIGlzIGEgdW5pdGxlc3MgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZGVwdGggb2YgdGhlXG4vLyB6LWF4aXMuIFRoZSBoaWdoZXIgdGhlIHBlcnNwZWN0aXZlLCB0aGUgbW9yZSBleGFnZ2VyYXRlZCB0aGUgZm9yZXNob3J0ZW5pbmcuXG4vLyB2YWx1ZXMgZnJvbSA1MDAgdG8gMTAwMCBhcmUgbW9yZS1vci1sZXNzIFwibm9ybWFsXCIgLSBhIGdvb2Qgc3RhcnRpbmctcG9pbnQuXG5AbWl4aW4gcGVyc3BlY3RpdmUoJHApIHtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHBlcnNwZWN0aXZlLCAkcCxcbiAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gU2V0IHRoZSBvcmlnaW4gcG9zaXRpb24gZm9yIHRoZSBwZXJzcGVjdGl2ZVxuLy9cbi8vICAgICAgQGluY2x1ZGUgcGVyc3BlY3RpdmUtb3JpZ2luKG9yaWdpbi14IFtvcmlnaW4teV0pXG4vL1xuLy8gd2hlcmUgdGhlIHR3byBhcmd1bWVudHMgcmVwcmVzZW50IHgveSBjb29yZGluYXRlc1xuQG1peGluIHBlcnNwZWN0aXZlLW9yaWdpbigkb3JpZ2luOiA1MCUpIHtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHBlcnNwZWN0aXZlLW9yaWdpbiwgJG9yaWdpbixcbiAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYSAzRCBvYmplY3RzIGNoaWxkcmVuIGFsc28gbGl2ZSBpbiB0aGUgZ2l2ZW4gM0Qgc3BhY2Vcbi8vXG4vLyAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybS1zdHlsZSggWyBzdHlsZSBdIClcbi8vXG4vLyB3aGVyZSBgc3R5bGVgIGNhbiBiZSBlaXRoZXIgYGZsYXRgIG9yIGBwcmVzZXJ2ZS0zZGAuXG4vLyBCcm93c2VycyBkZWZhdWx0IHRvIGBmbGF0YCwgbWl4aW4gZGVmYXVsdHMgdG8gYHByZXNlcnZlLTNkYC5cbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHN0eWxlOiBwcmVzZXJ2ZS0zZCkge1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLXN0eWxlLCAkc3R5bGUsXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIERldGVybWluZSB0aGUgdmlzaWJpbGl0eSBvZiBhbiBlbGVtZW50IHdoZW4gaXQncyBiYWNrIGlzIHR1cm5lZFxuLy9cbi8vICAgICBAaW5jbHVkZSBiYWNrZmFjZS12aXNpYmlsaXR5KCBbIHZpc2liaWxpdHkgXSApXG4vL1xuLy8gd2hlcmUgYHZpc2liaWxpdHlgIGNhbiBiZSBlaXRoZXIgYHZpc2libGVgIG9yIGBoaWRkZW5gLlxuLy8gQnJvd3NlcnMgZGVmYXVsdCB0byB2aXNpYmxlLCBtaXhpbiBkZWZhdWx0cyB0byBoaWRkZW5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2aXNpYmlsaXR5OiBoaWRkZW4pIHtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKGJhY2tmYWNlLXZpc2liaWxpdHksICR2aXNpYmlsaXR5LFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBAZG9jIG9mZlxuLy8gVHJhbnNmb3JtIFBhcnRpYWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGVzZSB3b3JrIHdlbGwgb24gdGhlaXIgb3duLCBidXQgdGhleSBkb24ndCBhZGQgdG8gZWFjaCBvdGhlciwgdGhleSBvdmVycmlkZS5cbi8vIFVzZSBhbG9uZyB3aXRoIHRyYW5zZm9ybSBwYXJhbWV0ZXIgbWl4aW5zIHRvIGFkanVzdCBvcmlnaW4sIHBlcnNwZWN0aXZlIGFuZCBzdHlsZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gU2NhbGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBAZG9jIG9uXG5cbi8vIFNjYWxlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCBhbmQgeSBheGlzOlxuLy9cbi8vICAgICAgQGluY2x1ZGUgc2NhbGUoIFsgc2NhbGUteCwgc2NhbGUteSwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vL1xuLy8gd2hlcmUgdGhlICdzY2FsZS0nIGFyZ3VtZW50cyBhcmUgdW5pdGxlc3MgbXVsdGlwbGllcnMgb2YgdGhlIHggYW5kIHkgZGltZW5zaW9uc1xuLy8gYW5kIHBlcnNwZWN0aXZlLCB3aGljaCB3b3JrcyB0aGUgc2FtZSBhcyB0aGUgc3RhbmQtYWxvbmUgcGVyc3BlY3RpdmUgcHJvcGVydHkvbWl4aW5cbi8vIGJ1dCBhcHBsaWVzIHRvIHRoZSBpbmRpdmlkdWFsIGVsZW1lbnQgKG11bHRpcGxpZWQgd2l0aCBhbnkgcGFyZW50IHBlcnNwZWN0aXZlKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBzY2FsZShcbiAgJHNjYWxlLXg6ICAgICAkZGVmYXVsdC1zY2FsZS14LFxuICAkc2NhbGUteTogICAgICRzY2FsZS14LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBzY2FsZSgkc2NhbGUteCwgJHNjYWxlLXkpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gU2NhbGUgYW4gb2JqZWN0IGFsb25nIHRoZSB4IGF4aXNcbi8vIEBpbmNsdWRlIHNjYWxlWCggWyBzY2FsZS14LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2NhbGVYKFxuICAkc2NhbGU6ICAgICAgICRkZWZhdWx0LXNjYWxlLXgsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHNjYWxlWCgkc2NhbGUpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gU2NhbGUgYW4gb2JqZWN0IGFsb25nIHRoZSB5IGF4aXNcbi8vIEBpbmNsdWRlIHNjYWxlWSggWyBzY2FsZS15LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2NhbGVZKFxuICAkc2NhbGU6ICAgICAgICRkZWZhdWx0LXNjYWxlLXksXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHNjYWxlWSgkc2NhbGUpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gU2NhbGUgYW4gb2JqZWN0IGFsb25nIHRoZSB6IGF4aXNcbi8vIEBpbmNsdWRlIHNjYWxlWiggWyBzY2FsZS16LCBwZXJzcGVjdGl2ZSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2NhbGVaKFxuICAkc2NhbGU6ICRkZWZhdWx0LXNjYWxlLXosXG4gICRwZXJzcGVjdGl2ZTogZmFsc2Vcbikge1xuICAkdHJhbnM6IHNjYWxlWigkc2NhbGUpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xufVxuXG4vLyBTY2FsZSBhbmQgb2JqZWN0IGFsb25nIGFsbCB0aHJlZSBheGlzXG4vLyBAaW5jbHVkZSBzY2FsZTNkKCBbIHNjYWxlLXgsIHNjYWxlLXksIHNjYWxlLXosIHBlcnNwZWN0aXZlIF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBzY2FsZTNkKFxuICAkc2NhbGUteDogICAgICRkZWZhdWx0LXNjYWxlLXgsXG4gICRzY2FsZS15OiAgICAgJGRlZmF1bHQtc2NhbGUteSxcbiAgJHNjYWxlLXo6ICAgICAkZGVmYXVsdC1zY2FsZS16LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBzY2FsZTNkKCRzY2FsZS14LCAkc2NhbGUteSwgJHNjYWxlLXopO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xufVxuXG4vLyBAZG9jIG9mZlxuLy8gUm90YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBAZG9jIG9uXG5cbi8vIFJvdGF0ZSBhbiBvYmplY3QgYXJvdW5kIHRoZSB6IGF4aXMgICgyRClcbi8vIEBpbmNsdWRlIHJvdGF0ZSggWyByb3RhdGlvbiwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vLyB3aGVyZSAncm90YXRpb24nIGlzIGFuIGFuZ2xlIHNldCBpbiBkZWdyZWVzIChkZWcpIG9yIHJhZGlhbiAocmFkKSB1bml0c1xuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiByb3RhdGUoXG4gICRyb3RhdGU6ICAgICAgJGRlZmF1bHQtcm90YXRlLFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgJHRyYW5zOiByb3RhdGUoJHJvdGF0ZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBBIGxvbmdjdXQgZm9yICdyb3RhdGUnIGluIGNhc2UgeW91IGZvcmdldCB0aGF0ICd6JyBpcyBpbXBsaWVkXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHJvdGF0ZVooXG4gICRyb3RhdGU6ICAgICAgJGRlZmF1bHQtcm90YXRlLFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgQGluY2x1ZGUgcm90YXRlKCRyb3RhdGUsICRwZXJzcGVjdGl2ZSwgJG9ubHkzZCk7XG59XG5cbi8vIFJvdGF0ZSBhbiBvYmplY3QgYXJvdW5kIHRoZSB4IGF4aXMgKDNEKVxuLy8gQGluY2x1ZGUgcm90YXRlWCggWyByb3RhdGlvbiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHJvdGF0ZVgoXG4gICRyb3RhdGU6ICRkZWZhdWx0LXJvdGF0ZSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogcm90YXRlWCgkcm90YXRlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gUm90YXRlIGFuIG9iamVjdCBhcm91bmQgdGhlIHkgYXhpcyAoM0QpXG4vLyBAaW5jbHVkZSByb3RhdGUoIFsgcm90YXRpb24sIHBlcnNwZWN0aXZlIF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiByb3RhdGVZKFxuICAkcm90YXRlOiAkZGVmYXVsdC1yb3RhdGUsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2Vcbikge1xuICAkdHJhbnM6IHJvdGF0ZVkoJHJvdGF0ZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIFJvdGF0ZSBhbiBvYmplY3QgYXJvdW5kIGFuIGFyYml0cmFyeSBheGlzICgzRClcbi8vIEBpbmNsdWRlIHJvdGF0ZSggWyB2ZWN0b3IteCwgdmVjdG9yLXksIHZlY3Rvci16LCByb3RhdGlvbiwgcGVyc3BlY3RpdmUgXSApXG4vLyB3aGVyZSB0aGUgJ3ZlY3Rvci0nIGFyZ3VtZW50cyBhY2NlcHQgdW5pdGxlc3MgbnVtYmVycy5cbi8vIFRoZXNlIG51bWJlcnMgYXJlIG5vdCBpbXBvcnRhbnQgb24gdGhlaXIgb3duLCBidXQgaW4gcmVsYXRpb24gdG8gb25lIGFub3RoZXJcbi8vIGNyZWF0aW5nIGFuIGF4aXMgZnJvbSB5b3VyIHRyYW5zZm9ybS1vcmlnaW4sIGFsb25nIHRoZSBheGlzIG9mIFh4ID0gWXkgPSBaei5cbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gcm90YXRlM2QoXG4gICR2ZWN0b3IteDogJGRlZmF1bHQtdmVjdG9yLXgsXG4gICR2ZWN0b3IteTogJGRlZmF1bHQtdmVjdG9yLXksXG4gICR2ZWN0b3ItejogJGRlZmF1bHQtdmVjdG9yLXosXG4gICRyb3RhdGU6ICRkZWZhdWx0LXJvdGF0ZSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogcm90YXRlM2QoJHZlY3Rvci14LCAkdmVjdG9yLXksICR2ZWN0b3IteiwgJHJvdGF0ZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIEBkb2Mgb2ZmXG4vLyBUcmFuc2xhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBkb2Mgb25cblxuLy8gTW92ZSBhbiBvYmplY3QgYWxvbmcgdGhlIHggb3IgeSBheGlzICgyRClcbi8vIEBpbmNsdWRlIHRyYW5zbGF0ZSggWyB0cmFuc2xhdGUteCwgdHJhbnNsYXRlLXksIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy8gd2hlcmUgdGhlICd0cmFuc2xhdGUtJyBhcmd1bWVudHMgYWNjZXB0IGFueSBkaXN0YW5jZSBpbiBwZXJjZW50YWdlcyBvciBhYnNvbHV0ZSAocHgsIGNtLCBpbiwgZW0gZXRjLi4pIHVuaXRzLlxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiB0cmFuc2xhdGUoXG4gICR0cmFuc2xhdGUteDogJGRlZmF1bHQtdHJhbnNsYXRlLXgsXG4gICR0cmFuc2xhdGUteTogJGRlZmF1bHQtdHJhbnNsYXRlLXksXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHRyYW5zbGF0ZSgkdHJhbnNsYXRlLXgsICR0cmFuc2xhdGUteSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCBheGlzICgyRClcbi8vIEBpbmNsdWRlIHRyYW5zbGF0ZSggWyB0cmFuc2xhdGUteCwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHRyYW5zbGF0ZVgoXG4gICR0cmFucy14OiAgICAgJGRlZmF1bHQtdHJhbnNsYXRlLXgsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2UsXG4gICRvbmx5M2Q6ICAgICAgZmFsc2Vcbikge1xuICAkdHJhbnM6IHRyYW5zbGF0ZVgoJHRyYW5zLXgpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gTW92ZSBhbiBvYmplY3QgYWxvbmcgdGhlIHkgYXhpcyAoMkQpXG4vLyBAaW5jbHVkZSB0cmFuc2xhdGUoIFsgdHJhbnNsYXRlLXksIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiB0cmFuc2xhdGVZKFxuICAkdHJhbnMteTogICAgICRkZWZhdWx0LXRyYW5zbGF0ZS15LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgJHRyYW5zOiB0cmFuc2xhdGVZKCR0cmFucy15KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIE1vdmUgYW4gb2JqZWN0IGFsb25nIHRoZSB6IGF4aXMgKDNEKVxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS16LCBwZXJzcGVjdGl2ZSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gdHJhbnNsYXRlWihcbiAgJHRyYW5zLXo6ICAgICAkZGVmYXVsdC10cmFuc2xhdGUteixcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogdHJhbnNsYXRlWigkdHJhbnMteik7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIE1vdmUgYW4gb2JqZWN0IGFsb25nIHRoZSB4LCB5IGFuZCB6IGF4aXMgKDNEKVxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS14LCB0cmFuc2xhdGUteSwgdHJhbnNsYXRlLXosIHBlcnNwZWN0aXZlIF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiB0cmFuc2xhdGUzZChcbiAgJHRyYW5zbGF0ZS14OiAkZGVmYXVsdC10cmFuc2xhdGUteCxcbiAgJHRyYW5zbGF0ZS15OiAkZGVmYXVsdC10cmFuc2xhdGUteSxcbiAgJHRyYW5zbGF0ZS16OiAkZGVmYXVsdC10cmFuc2xhdGUteixcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogdHJhbnNsYXRlM2QoJHRyYW5zbGF0ZS14LCAkdHJhbnNsYXRlLXksICR0cmFuc2xhdGUteik7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIEBkb2Mgb2ZmXG4vLyBTa2V3IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBkb2Mgb25cblxuLy8gU2tldyBhbiBlbGVtZW50OlxuLy9cbi8vICAgICBAaW5jbHVkZSBza2V3KCBbIHNrZXcteCwgc2tldy15LCAzRC1vbmx5IF0gKVxuLy9cbi8vIHdoZXJlIHRoZSAnc2tldy0nIGFyZ3VtZW50cyBhY2NlcHQgY3NzIGFuZ2xlcyBpbiBkZWdyZWVzIChkZWcpIG9yIHJhZGlhbiAocmFkKSB1bml0cy5cbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2tldyhcbiAgJHNrZXcteDogJGRlZmF1bHQtc2tldy14LFxuICAkc2tldy15OiAkZGVmYXVsdC1za2V3LXksXG4gICRvbmx5M2Q6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBza2V3KCRza2V3LXgsICRza2V3LXkpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gU2tldyBhbiBlbGVtZW50IGFsb25nIHRoZSB4IGF4aXpcbi8vXG4vLyAgICAgQGluY2x1ZGUgc2tldyggWyBza2V3LXgsIDNELW9ubHkgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNrZXdYKFxuICAkc2tldy14OiAkZGVmYXVsdC1za2V3LXgsXG4gICRvbmx5M2Q6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBza2V3WCgkc2tldy14KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIFNrZXcgYW4gZWxlbWVudCBhbG9uZyB0aGUgeSBheGlzXG4vL1xuLy8gICAgIEBpbmNsdWRlIHNrZXcoIFsgc2tldy15LCAzRC1vbmx5IF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBza2V3WShcbiAgJHNrZXcteTogJGRlZmF1bHQtc2tldy15LFxuICAkb25seTNkOiBmYWxzZVxuKSB7XG4gICR0cmFuczogc2tld1koJHNrZXcteSk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG5cbi8vIEZ1bGwgdHJhbnNmb3JtIG1peGluc1xuLy8gRm9yIHNldHRpbmdzIGFueSBjb21iaW5hdGlvbiBvZiB0cmFuc2Zvcm1zIGFzIGFyZ3VtZW50c1xuLy8gVGhlc2UgYXJlIGNvbXBsZXggYW5kIG5vdCBoaWdobHkgcmVjb21tZW5kZWQgZm9yIGRhaWx5IHVzZS4gVGhleSBhcmUgbWFpbmx5XG4vLyBoZXJlIGZvciBiYWNrd2FyZC1jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuLy9cbi8vICogdGhleSBpbmNsdWRlIG9yaWdpbiBhZGp1c3RtZW50c1xuLy8gKiBzY2FsZSB0YWtlcyBhIG11bHRpcGxpZXIgKHVuaXRsZXNzKSwgcm90YXRlIGFuZCBza2V3IHRha2UgZGVncmVlcyAoZGVnKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBjcmVhdGUtdHJhbnNmb3JtKFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkc2NhbGUteDogICAgIGZhbHNlLFxuICAkc2NhbGUteTogICAgIGZhbHNlLFxuICAkc2NhbGUtejogICAgIGZhbHNlLFxuICAkcm90YXRlLXg6ICAgIGZhbHNlLFxuICAkcm90YXRlLXk6ICAgIGZhbHNlLFxuICAkcm90YXRlLXo6ICAgIGZhbHNlLFxuICAkcm90YXRlM2Q6ICAgIGZhbHNlLFxuICAkdHJhbnMteDogICAgIGZhbHNlLFxuICAkdHJhbnMteTogICAgIGZhbHNlLFxuICAkdHJhbnMtejogICAgIGZhbHNlLFxuICAkc2tldy14OiAgICAgIGZhbHNlLFxuICAkc2tldy15OiAgICAgIGZhbHNlLFxuICAkb3JpZ2luLXg6ICAgIGZhbHNlLFxuICAkb3JpZ2luLXk6ICAgIGZhbHNlLFxuICAkb3JpZ2luLXo6ICAgIGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgJHRyYW5zOiB1bnF1b3RlKFwiXCIpO1xuXG4gIC8vIHBlcnNwZWN0aXZlXG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgOyB9XG5cbiAgLy8gc2NhbGVcbiAgQGlmICRzY2FsZS14IGFuZCAkc2NhbGUteSB7XG4gICAgQGlmICRzY2FsZS16IHsgJHRyYW5zOiAkdHJhbnMgc2NhbGUzZCgkc2NhbGUteCwgJHNjYWxlLXksICRzY2FsZS16KTsgfVxuICAgIEBlbHNlIHsgJHRyYW5zOiAkdHJhbnMgc2NhbGUoJHNjYWxlLXgsICRzY2FsZS15KTsgfVxuICB9IEBlbHNlIHtcbiAgICBAaWYgJHNjYWxlLXggeyAkdHJhbnM6ICR0cmFucyBzY2FsZVgoJHNjYWxlLXgpOyB9XG4gICAgQGlmICRzY2FsZS15IHsgJHRyYW5zOiAkdHJhbnMgc2NhbGVZKCRzY2FsZS15KTsgfVxuICAgIEBpZiAkc2NhbGUteiB7ICR0cmFuczogJHRyYW5zIHNjYWxlWigkc2NhbGUteik7IH1cbiAgfVxuXG4gIC8vIHJvdGF0ZVxuICBAaWYgJHJvdGF0ZS14IHsgJHRyYW5zOiAkdHJhbnMgcm90YXRlWCgkcm90YXRlLXgpOyB9XG4gIEBpZiAkcm90YXRlLXkgeyAkdHJhbnM6ICR0cmFucyByb3RhdGVZKCRyb3RhdGUteSk7IH1cbiAgQGlmICRyb3RhdGUteiB7ICR0cmFuczogJHRyYW5zIHJvdGF0ZVooJHJvdGF0ZS16KTsgfVxuICBAaWYgJHJvdGF0ZTNkIHsgJHRyYW5zOiAkdHJhbnMgcm90YXRlM2QoJHJvdGF0ZTNkKTsgfVxuXG4gIC8vIHRyYW5zbGF0ZVxuICBAaWYgJHRyYW5zLXggYW5kICR0cmFucy15IHtcbiAgICBAaWYgJHRyYW5zLXogeyAkdHJhbnM6ICR0cmFucyB0cmFuc2xhdGUzZCgkdHJhbnMteCwgJHRyYW5zLXksICR0cmFucy16KTsgfVxuICAgIEBlbHNlIHsgJHRyYW5zOiAkdHJhbnMgdHJhbnNsYXRlKCR0cmFucy14LCAkdHJhbnMteSk7IH1cbiAgfSBAZWxzZSB7XG4gICAgQGlmICR0cmFucy14IHsgJHRyYW5zOiAkdHJhbnMgdHJhbnNsYXRlWCgkdHJhbnMteCk7IH1cbiAgICBAaWYgJHRyYW5zLXkgeyAkdHJhbnM6ICR0cmFucyB0cmFuc2xhdGVZKCR0cmFucy15KTsgfVxuICAgIEBpZiAkdHJhbnMteiB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZVooJHRyYW5zLXopOyB9XG4gIH1cblxuICAvLyBza2V3XG4gIEBpZiAkc2tldy14IGFuZCAkc2tldy15IHsgJHRyYW5zOiAkdHJhbnMgc2tldygkc2tldy14LCAkc2tldy15KTsgfVxuICBAZWxzZSB7XG4gICAgQGlmICRza2V3LXggeyAkdHJhbnM6ICR0cmFucyBza2V3WCgkc2tldy14KTsgfVxuICAgIEBpZiAkc2tldy15IHsgJHRyYW5zOiAkdHJhbnMgc2tld1koJHNrZXcteSk7IH1cbiAgfVxuXG4gIC8vIGFwcGx5IGl0IVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtLW9yaWdpbigkb3JpZ2luLXgsICRvcmlnaW4teSwgJG9yaWdpbi16LCAkb25seTNkKTtcbn1cblxuXG4vLyBBIHNpbXBsaWZpZWQgc2V0IG9mIG9wdGlvbnNcbi8vIGJhY2t3YXJkcy1jb21wYXRpYmxlIHdpdGggdGhlIHByZXZpb3VzIHZlcnNpb24gb2YgdGhlICd0cmFuc2Zvcm0nIG1peGluXG5AbWl4aW4gc2ltcGxlLXRyYW5zZm9ybShcbiAgJHNjYWxlOiAgICBmYWxzZSxcbiAgJHJvdGF0ZTogICBmYWxzZSxcbiAgJHRyYW5zLXg6ICBmYWxzZSxcbiAgJHRyYW5zLXk6ICBmYWxzZSxcbiAgJHNrZXcteDogICBmYWxzZSxcbiAgJHNrZXcteTogICBmYWxzZSxcbiAgJG9yaWdpbi14OiBmYWxzZSxcbiAgJG9yaWdpbi15OiBmYWxzZVxuKSB7XG4gIEBpbmNsdWRlIGNyZWF0ZS10cmFuc2Zvcm0oXG4gICAgZmFsc2UsXG4gICAgJHNjYWxlLCAkc2NhbGUsIGZhbHNlLFxuICAgIGZhbHNlLCBmYWxzZSwgJHJvdGF0ZSwgZmFsc2UsXG4gICAgJHRyYW5zLXgsICR0cmFucy15LCBmYWxzZSxcbiAgICAkc2tldy14LCAkc2tldy15LFxuICAgICRvcmlnaW4teCwgJG9yaWdpbi15LCBmYWxzZSxcbiAgICBmYWxzZVxuICApO1xufVxuIiwiLy8gQGRvYyBvZmZcbi8vIFRoZXNlIGRlZmF1bHRzIG1ha2UgdGhlIGFyZ3VtZW50cyBvcHRpb25hbCBmb3IgdGhpcyBtaXhpblxuLy8gSWYgeW91IGxpa2UsIHNldCBkaWZmZXJlbnQgZGVmYXVsdHMgYmVmb3JlIGltcG9ydGluZy5cbi8vIEBkb2Mgb25cblxuQGltcG9ydCBcInNoYXJlZFwiO1xuXG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBib3ggc2hhZG93c1xuJGRlZmF1bHQtYm94LXNoYWRvdy1jb2xvcjogIzMzMzMzMyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgaG9yaXpvbnRhbCBvZmZzZXQuIFBvc2l0aXZlIGlzIHRvIHRoZSByaWdodC5cbiRkZWZhdWx0LWJveC1zaGFkb3ctaC1vZmZzZXQ6IDBweCAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgdmVydGljYWwgb2Zmc2V0LiBQb3NpdGl2ZSBpcyBkb3duLlxuJGRlZmF1bHQtYm94LXNoYWRvdy12LW9mZnNldDogMHB4ICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBibHVyIGxlbmd0aC5cbiRkZWZhdWx0LWJveC1zaGFkb3ctYmx1cjogNXB4ICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBzcHJlYWQgbGVuZ3RoLlxuJGRlZmF1bHQtYm94LXNoYWRvdy1zcHJlYWQgOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgc2hhZG93IGluc2V0OiBpbnNldCBvciBmYWxzZSAoZm9yIHN0YW5kYXJkIHNoYWRvdykuXG4kZGVmYXVsdC1ib3gtc2hhZG93LWluc2V0IDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFByb3ZpZGVzIGNyb3NzLWJyb3dzZXIgZm9yIFdlYmtpdCwgR2Vja28sIGFuZCBDU1MzIGJveCBzaGFkb3dzIHdoZW4gb25lIG9yIG1vcmUgYm94XG4vLyBzaGFkb3dzIGFyZSBuZWVkZWQuXG4vLyBFYWNoIHNoYWRvdyBhcmd1bWVudCBzaG91bGQgYWRoZXJlIHRvIHRoZSBzdGFuZGFyZCBjc3MzIHN5bnRheCBmb3IgdGhlXG4vLyBib3gtc2hhZG93IHByb3BlcnR5LlxuQG1peGluIGJveC1zaGFkb3coXG4gICRzaGFkb3ctMSA6IGRlZmF1bHQsXG4gICRzaGFkb3ctMiA6IGZhbHNlLFxuICAkc2hhZG93LTMgOiBmYWxzZSxcbiAgJHNoYWRvdy00IDogZmFsc2UsXG4gICRzaGFkb3ctNSA6IGZhbHNlLFxuICAkc2hhZG93LTYgOiBmYWxzZSxcbiAgJHNoYWRvdy03IDogZmFsc2UsXG4gICRzaGFkb3ctOCA6IGZhbHNlLFxuICAkc2hhZG93LTkgOiBmYWxzZSxcbiAgJHNoYWRvdy0xMDogZmFsc2Vcbikge1xuICBAaWYgJHNoYWRvdy0xID09IGRlZmF1bHQge1xuICAgICRzaGFkb3ctMSA6IC1jb21wYXNzLXNwYWNlLWxpc3QoY29tcGFjdChpZigkZGVmYXVsdC1ib3gtc2hhZG93LWluc2V0LCBpbnNldCwgZmFsc2UpLCAkZGVmYXVsdC1ib3gtc2hhZG93LWgtb2Zmc2V0LCAkZGVmYXVsdC1ib3gtc2hhZG93LXYtb2Zmc2V0LCAkZGVmYXVsdC1ib3gtc2hhZG93LWJsdXIsICRkZWZhdWx0LWJveC1zaGFkb3ctc3ByZWFkLCAkZGVmYXVsdC1ib3gtc2hhZG93LWNvbG9yKSk7XG4gIH1cbiAgJHNoYWRvdyA6IGNvbXBhY3QoJHNoYWRvdy0xLCAkc2hhZG93LTIsICRzaGFkb3ctMywgJHNoYWRvdy00LCAkc2hhZG93LTUsICRzaGFkb3ctNiwgJHNoYWRvdy03LCAkc2hhZG93LTgsICRzaGFkb3ctOSwgJHNoYWRvdy0xMCk7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbChib3gtc2hhZG93LCAkc2hhZG93LFxuICAgIC1tb3osIC13ZWJraXQsIG5vdCgtbyksIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gUHJvdmlkZXMgYSBzaW5nbGUgY3Jvc3MtYnJvd3NlciBDU1MgYm94IHNoYWRvdyBmb3IgV2Via2l0LCBHZWNrbywgYW5kIENTUzMuXG4vLyBJbmNsdWRlcyBkZWZhdWx0IGFyZ3VtZW50cyBmb3IgaG9yaXpvbnRhbCBvZmZzZXQsIHZlcnRpY2FsIG9mZnNldCwgYmx1ciBsZW5ndGgsIHNwcmVhZCBsZW5ndGgsIGNvbG9yIGFuZCBpbnNldC5cbkBtaXhpbiBzaW5nbGUtYm94LXNoYWRvdyhcbiAgJGhvZmYgICA6ICRkZWZhdWx0LWJveC1zaGFkb3ctaC1vZmZzZXQsXG4gICR2b2ZmICAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LXYtb2Zmc2V0LFxuICAkYmx1ciAgIDogJGRlZmF1bHQtYm94LXNoYWRvdy1ibHVyLFxuICAkc3ByZWFkIDogJGRlZmF1bHQtYm94LXNoYWRvdy1zcHJlYWQsXG4gICRjb2xvciAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWNvbG9yLFxuICAkaW5zZXQgIDogJGRlZmF1bHQtYm94LXNoYWRvdy1pbnNldFxuKSB7XG4gIEBpZiBub3QgKCRpbnNldCA9PSB0cnVlIG9yICRpbnNldCA9PSBmYWxzZSBvciAkaW5zZXQgPT0gaW5zZXQpIHtcbiAgICBAd2FybiBcIiRpbnNldCBleHBlY3RlZCB0byBiZSB0cnVlIG9yIHRoZSBpbnNldCBrZXl3b3JkLiBHb3QgI3skaW5zZXR9IGluc3RlYWQuIFVzaW5nOiBpbnNldFwiO1xuICB9XG5cbiAgQGlmICRjb2xvciA9PSBub25lIHtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9IEBlbHNlIHtcbiAgICAkZnVsbCAgIDogJGhvZmYgJHZvZmY7XG4gICAgQGlmICRibHVyICAgeyAkZnVsbDogJGZ1bGwgJGJsdXI7ICAgfVxuICAgIEBpZiAkc3ByZWFkIHsgJGZ1bGw6ICRmdWxsICRzcHJlYWQ7IH1cbiAgICBAaWYgJGNvbG9yICB7ICRmdWxsOiAkZnVsbCAkY29sb3I7ICB9XG4gICAgQGlmICRpbnNldCAgeyAkZnVsbDogaW5zZXQgJGZ1bGw7ICAgfVxuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGZ1bGwpO1xuICB9XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi8vIENTUyBUcmFuc2l0aW9uc1xuLy8gQ3VycmVudGx5IG9ubHkgd29ya3MgaW4gV2Via2l0LlxuLy9cbi8vICogZXhwZWN0ZWQgaW4gQ1NTMywgRmlyZUZveCAzLjYvNyBhbmQgT3BlcmEgUHJlc3RvIDIuM1xuLy8gKiBXZSdsbCBiZSBwcmVwYXJlZC5cbi8vXG4vLyBJbmNsdWRpbmcgdGhpcyBzdWJtb2R1bGUgc2V0cyBmb2xsb3dpbmcgZGVmYXVsdHMgZm9yIHRoZSBtaXhpbnM6XG4vL1xuLy8gICAgICRkZWZhdWx0LXRyYW5zaXRpb24tcHJvcGVydHkgOiBhbGxcbi8vICAgICAkZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uIDogMXNcbi8vICAgICAkZGVmYXVsdC10cmFuc2l0aW9uLWZ1bmN0aW9uIDogZmFsc2Vcbi8vICAgICAkZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5ICAgIDogZmFsc2Vcbi8vXG4vLyBPdmVycmlkZSB0aGVtIGlmIHlvdSBsaWtlLiBUaW1pbmctZnVuY3Rpb24gYW5kIGRlbGF5IGFyZSBzZXQgdG8gZmFsc2UgZm9yIGJyb3dzZXIgZGVmYXVsdHMgKGVhc2UsIDBzKS5cblxuJGRlZmF1bHQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsICFkZWZhdWx0O1xuXG4kZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcyAhZGVmYXVsdDtcblxuJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LXRyYW5zaXRpb24tZGVsYXk6IGZhbHNlICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbmFibGUtcHJlZml4ZWQtdmFsdWVzOiB0cmFuc2Zvcm0sIHRyYW5zZm9ybS1vcmlnaW4gIWRlZmF1bHQ7XG5cbi8vIE9uZSBvciBtb3JlIHByb3BlcnRpZXMgdG8gdHJhbnNpdGlvblxuLy9cbi8vICogZm9yIG11bHRpcGxlLCB1c2UgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdFxuLy8gKiBhbHNvIGFjY2VwdHMgXCJhbGxcIiBvciBcIm5vbmVcIlxuXG5AbWl4aW4gdHJhbnNpdGlvbi1wcm9wZXJ0eSgkcHJvcGVydHktMTogJGRlZmF1bHQtdHJhbnNpdGlvbi1wcm9wZXJ0eSxcbiAgJHByb3BlcnR5LTIgOiBmYWxzZSxcbiAgJHByb3BlcnR5LTMgOiBmYWxzZSxcbiAgJHByb3BlcnR5LTQgOiBmYWxzZSxcbiAgJHByb3BlcnR5LTUgOiBmYWxzZSxcbiAgJHByb3BlcnR5LTYgOiBmYWxzZSxcbiAgJHByb3BlcnR5LTcgOiBmYWxzZSxcbiAgJHByb3BlcnR5LTggOiBmYWxzZSxcbiAgJHByb3BlcnR5LTkgOiBmYWxzZSxcbiAgJHByb3BlcnR5LTEwOiBmYWxzZVxuKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0eS0xKSA9PSBzdHJpbmcgeyAkcHJvcGVydHktMTogdW5xdW90ZSgkcHJvcGVydHktMSk7IH1cbiAgJHByb3BlcnRpZXM6IGNvbXBhY3QoJHByb3BlcnR5LTEsICRwcm9wZXJ0eS0yLCAkcHJvcGVydHktMywgJHByb3BlcnR5LTQsICRwcm9wZXJ0eS01LCAkcHJvcGVydHktNiwgJHByb3BlcnR5LTcsICRwcm9wZXJ0eS04LCAkcHJvcGVydHktOSwgJHByb3BlcnR5LTEwKTtcbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0ICAgIHsgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5IDogcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oLXdlYmtpdCwgJHByb3BlcnRpZXMpOyB9XG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1vemlsbGEgICB7ICAgICAgICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eSA6IHByZWZpeGVkLWZvci10cmFuc2l0aW9uKC1tb3osICAgICRwcm9wZXJ0aWVzKTsgfVxuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSAgICAgeyAgICAgICAgICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHkgOiBwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbigtbywgICAgICAkcHJvcGVydGllcyk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5IDogJHByb3BlcnRpZXM7XG59XG5cbi8vIE9uZSBvciBtb3JlIGR1cmF0aW9ucyBpbiBzZWNvbmRzXG4vL1xuLy8gKiBmb3IgbXVsdGlwbGUsIHVzZSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0XG4vLyAqIHRoZXNlIGR1cmF0aW9ucyB3aWxsIGFmZmVjdCB0aGUgcHJvcGVydGllcyBpbiB0aGUgc2FtZSBsaXN0IHBvc2l0aW9uXG5cbkBtaXhpbiB0cmFuc2l0aW9uLWR1cmF0aW9uKCRkdXJhdGlvbi0xOiAkZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAkZHVyYXRpb24tMiA6IGZhbHNlLFxuICAkZHVyYXRpb24tMyA6IGZhbHNlLFxuICAkZHVyYXRpb24tNCA6IGZhbHNlLFxuICAkZHVyYXRpb24tNSA6IGZhbHNlLFxuICAkZHVyYXRpb24tNiA6IGZhbHNlLFxuICAkZHVyYXRpb24tNyA6IGZhbHNlLFxuICAkZHVyYXRpb24tOCA6IGZhbHNlLFxuICAkZHVyYXRpb24tOSA6IGZhbHNlLFxuICAkZHVyYXRpb24tMTA6IGZhbHNlXG4pIHtcbiAgQGlmIHR5cGUtb2YoJGR1cmF0aW9uLTEpID09IHN0cmluZyB7ICRkdXJhdGlvbi0xOiB1bnF1b3RlKCRkdXJhdGlvbi0xKTsgfVxuICAkZHVyYXRpb25zOiBjb21wYWN0KCRkdXJhdGlvbi0xLCAkZHVyYXRpb24tMiwgJGR1cmF0aW9uLTMsICRkdXJhdGlvbi00LCAkZHVyYXRpb24tNSwgJGR1cmF0aW9uLTYsICRkdXJhdGlvbi03LCAkZHVyYXRpb24tOCwgJGR1cmF0aW9uLTksICRkdXJhdGlvbi0xMCk7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2l0aW9uLWR1cmF0aW9uLCAkZHVyYXRpb25zLFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCBub3QoLW1zKSwgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIE9uZSBvciBtb3JlIHRpbWluZyBmdW5jdGlvbnNcbi8vXG4vLyAqIFsgZWFzZSB8IGxpbmVhciB8IGVhc2UtaW4gfCBlYXNlLW91dCB8IGVhc2UtaW4tb3V0IHwgY3ViaWMtYmV6aWVyKHgxLCB5MSwgeDIsIHkyKV1cbi8vICogRm9yIG11bHRpcGxlLCB1c2UgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdFxuLy8gKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBlZmZlY3QgdGhlIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgbGlzdCBwb3NpdGlvblxuXG5AbWl4aW4gdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24oJGZ1bmN0aW9uLTE6ICRkZWZhdWx0LXRyYW5zaXRpb24tZnVuY3Rpb24sXG4gICRmdW5jdGlvbi0yIDogZmFsc2UsXG4gICRmdW5jdGlvbi0zIDogZmFsc2UsXG4gICRmdW5jdGlvbi00IDogZmFsc2UsXG4gICRmdW5jdGlvbi01IDogZmFsc2UsXG4gICRmdW5jdGlvbi02IDogZmFsc2UsXG4gICRmdW5jdGlvbi03IDogZmFsc2UsXG4gICRmdW5jdGlvbi04IDogZmFsc2UsXG4gICRmdW5jdGlvbi05IDogZmFsc2UsXG4gICRmdW5jdGlvbi0xMDogZmFsc2Vcbikge1xuICAkZnVuY3Rpb24tMTogdW5xdW90ZSgkZnVuY3Rpb24tMSk7XG4gICRmdW5jdGlvbnM6IGNvbXBhY3QoJGZ1bmN0aW9uLTEsICRmdW5jdGlvbi0yLCAkZnVuY3Rpb24tMywgJGZ1bmN0aW9uLTQsICRmdW5jdGlvbi01LCAkZnVuY3Rpb24tNiwgJGZ1bmN0aW9uLTcsICRmdW5jdGlvbi04LCAkZnVuY3Rpb24tOSwgJGZ1bmN0aW9uLTEwKTtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLCAkZnVuY3Rpb25zLFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCBub3QoLW1zKSwgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIE9uZSBvciBtb3JlIHRyYW5zaXRpb24tZGVsYXlzIGluIHNlY29uZHNcbi8vXG4vLyAqIGZvciBtdWx0aXBsZSwgdXNlIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Rcbi8vICogdGhlc2UgZGVsYXlzIHdpbGwgZWZmZWN0IHRoZSBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIGxpc3QgcG9zaXRpb25cblxuQG1peGluIHRyYW5zaXRpb24tZGVsYXkoJGRlbGF5LTE6ICRkZWZhdWx0LXRyYW5zaXRpb24tZGVsYXksXG4gICRkZWxheS0yIDogZmFsc2UsXG4gICRkZWxheS0zIDogZmFsc2UsXG4gICRkZWxheS00IDogZmFsc2UsXG4gICRkZWxheS01IDogZmFsc2UsXG4gICRkZWxheS02IDogZmFsc2UsXG4gICRkZWxheS03IDogZmFsc2UsXG4gICRkZWxheS04IDogZmFsc2UsXG4gICRkZWxheS05IDogZmFsc2UsXG4gICRkZWxheS0xMDogZmFsc2Vcbikge1xuICBAaWYgdHlwZS1vZigkZGVsYXktMSkgPT0gc3RyaW5nIHsgJGRlbGF5LTE6IHVucXVvdGUoJGRlbGF5LTEpOyB9XG4gICRkZWxheXM6IGNvbXBhY3QoJGRlbGF5LTEsICRkZWxheS0yLCAkZGVsYXktMywgJGRlbGF5LTQsICRkZWxheS01LCAkZGVsYXktNiwgJGRlbGF5LTcsICRkZWxheS04LCAkZGVsYXktOSwgJGRlbGF5LTEwKTtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zaXRpb24tZGVsYXksICRkZWxheXMsXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIG5vdCgtbXMpLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gVHJhbnNpdGlvbiBhbGwtaW4tb25lIHNob3J0aGFuZFxuXG5AbWl4aW4gc2luZ2xlLXRyYW5zaXRpb24oXG4gICRwcm9wZXJ0eTogJGRlZmF1bHQtdHJhbnNpdGlvbi1wcm9wZXJ0eSxcbiAgJGR1cmF0aW9uOiAkZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAkZnVuY3Rpb246ICRkZWZhdWx0LXRyYW5zaXRpb24tZnVuY3Rpb24sXG4gICRkZWxheTogJGRlZmF1bHQtdHJhbnNpdGlvbi1kZWxheVxuKSB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oY29tcGFjdCgkcHJvcGVydHkgJGR1cmF0aW9uICRmdW5jdGlvbiAkZGVsYXkpKTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oXG4gICR0cmFuc2l0aW9uLTEgOiBkZWZhdWx0LFxuICAkdHJhbnNpdGlvbi0yIDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTMgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tNCA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi01IDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTYgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tNyA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi04IDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTkgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tMTA6IGZhbHNlXG4pIHtcbiAgQGlmICR0cmFuc2l0aW9uLTEgPT0gZGVmYXVsdCB7XG4gICAgJHRyYW5zaXRpb24tMSA6IGNvbXBhY3QoJGRlZmF1bHQtdHJhbnNpdGlvbi1wcm9wZXJ0eSAkZGVmYXVsdC10cmFuc2l0aW9uLWR1cmF0aW9uICRkZWZhdWx0LXRyYW5zaXRpb24tZnVuY3Rpb24gJGRlZmF1bHQtdHJhbnNpdGlvbi1kZWxheSk7XG4gIH1cbiAgJHRyYW5zaXRpb25zOiBmYWxzZTtcbiAgQGlmIHR5cGUtb2YoJHRyYW5zaXRpb24tMSkgPT0gbGlzdCBhbmQgdHlwZS1vZihudGgoJHRyYW5zaXRpb24tMSwxKSkgPT0gbGlzdCB7XG4gICAgJHRyYW5zaXRpb25zOiBqb2luKCR0cmFuc2l0aW9uLTEsIGNvbXBhY3QoJHRyYW5zaXRpb24tMiwgJHRyYW5zaXRpb24tMywgJHRyYW5zaXRpb24tNCwgJHRyYW5zaXRpb24tNSwgJHRyYW5zaXRpb24tNiwgJHRyYW5zaXRpb24tNywgJHRyYW5zaXRpb24tOCwgJHRyYW5zaXRpb24tOSwgJHRyYW5zaXRpb24tMTApLCBjb21tYSk7XG4gIH0gQGVsc2Uge1xuICAgICR0cmFuc2l0aW9ucyA6IGNvbXBhY3QoJHRyYW5zaXRpb24tMSwgJHRyYW5zaXRpb24tMiwgJHRyYW5zaXRpb24tMywgJHRyYW5zaXRpb24tNCwgJHRyYW5zaXRpb24tNSwgJHRyYW5zaXRpb24tNiwgJHRyYW5zaXRpb24tNywgJHRyYW5zaXRpb24tOCwgJHRyYW5zaXRpb24tOSwgJHRyYW5zaXRpb24tMTApO1xuICB9XG4gICRkZWxheXM6IGNvbW1hLWxpc3QoKTtcbiAgJGhhcy1kZWxheXM6IGZhbHNlO1xuICAkd2Via2l0LXZhbHVlOiBjb21tYS1saXN0KCk7XG4gICRtb3otdmFsdWU6IGNvbW1hLWxpc3QoKTtcbiAgJG8tdmFsdWU6IGNvbW1hLWxpc3QoKTtcblxuICAvLyBUaGlzIGJsb2NrIGNhbiBiZSBtYWRlIGNvbnNpZGVyYWJseSBzaW1wbGVyIGF0IHRoZSBwb2ludCBpbiB0aW1lIHRoYXRcbiAgLy8gd2Ugbm8gbG9uZ2VyIG5lZWQgdG8gZGVhbCB3aXRoIHRoZSBkaWZmZXJlbmNlcyBpbiBob3cgZGVsYXlzIGFyZSB0cmVhdGVkLlxuICBAZWFjaCAkdHJhbnNpdGlvbiBpbiAkdHJhbnNpdGlvbnMge1xuICAgIC8vIEV4dHJhY3QgdGhlIHZhbHVlcyBmcm9tIHRoZSBsaXN0XG4gICAgLy8gKHRoaXMgd291bGQgYmUgY2xlYW5lciBpZiBudGggdG9vayBhIDNyZCBhcmd1bWVudCB0byBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSkuXG4gICAgJHByb3BlcnR5OiBudGgoJHRyYW5zaXRpb24sIDEpO1xuICAgICRkdXJhdGlvbjogZmFsc2U7XG4gICAgJHRpbWluZy1mdW5jdGlvbjogZmFsc2U7XG4gICAgJGRlbGF5OiBmYWxzZTtcbiAgICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA+IDEgeyAkZHVyYXRpb246ICAgICAgICBudGgoJHRyYW5zaXRpb24sIDIpOyB9XG4gICAgQGlmIGxlbmd0aCgkdHJhbnNpdGlvbikgPiAyIHsgJHRpbWluZy1mdW5jdGlvbjogbnRoKCR0cmFuc2l0aW9uLCAzKTsgfVxuICAgIEBpZiBsZW5ndGgoJHRyYW5zaXRpb24pID4gMyB7ICRkZWxheTogICAgICAgICAgIG50aCgkdHJhbnNpdGlvbiwgNCk7ICRoYXMtZGVsYXlzOiB0cnVlOyB9XG5cbiAgICAvLyBJZiBhIGRlbGF5IGlzIHByb3ZpZGVkIHdpdGhvdXQgYSB0aW1pbmcgZnVuY3Rpb25cbiAgICBAaWYgaXMtdGltZSgkdGltaW5nLWZ1bmN0aW9uKSBhbmQgbm90KCRkZWxheSkgeyAkZGVsYXk6ICR0aW1pbmctZnVuY3Rpb247ICR0aW1pbmctZnVuY3Rpb246IGZhbHNlOyAkaGFzLWRlbGF5czogdHJ1ZTsgfVxuXG4gICAgLy8gS2VlcCBhIGxpc3Qgb2YgZGVsYXlzIGluIGNhc2Ugb25lIGlzIHNwZWNpZmllZFxuICAgICRkZWxheXM6IGFwcGVuZCgkZGVsYXlzLCBpZigkZGVsYXksICRkZWxheSwgMHMpKTtcblxuICAgICR3ZWJraXQtdmFsdWU6IGFwcGVuZCgkd2Via2l0LXZhbHVlLCBjb21wYWN0KChwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbigtd2Via2l0LCAkcHJvcGVydHkpICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uKS4uLikpO1xuICAgICAgICRtb3otdmFsdWU6IGFwcGVuZCggICAkbW96LXZhbHVlLCBjb21wYWN0KChwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbiggICAtbW96LCAkcHJvcGVydHkpICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uICRkZWxheSkuLi4pKTtcbiAgICAgICAgICRvLXZhbHVlOiBhcHBlbmQoICAgICAkby12YWx1ZSwgY29tcGFjdCgocHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oICAgICAtbywgJHByb3BlcnR5KSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiAkZGVsYXkpLi4uKSk7XG4gIH1cblxuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQgICAgeyAgICAgICAtd2Via2l0LXRyYW5zaXRpb24gOiAkd2Via2l0LXZhbHVlO1xuICAgIC8vIG9sZCB3ZWJraXQgZG9lc24ndCBzdXBwb3J0IHRoZSBkZWxheSBwYXJhbWV0ZXIgaW4gdGhlIHNob3J0aGFuZCBzbyB3ZSBwcm9ncmVzc2l2ZWx5IGVuaGFuY2UgaXQuXG4gICAgQGlmICRoYXMtZGVsYXlzICAgICAgICAgICAgICAgICAgICAgICB7IC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheSA6ICRkZWxheXM7ICAgICAgIH0gfVxuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhICAgeyAgICAgICAgICAtbW96LXRyYW5zaXRpb24gOiAkbW96LXZhbHVlOyAgICB9XG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW9wZXJhICAgICB7ICAgICAgICAgICAgLW8tdHJhbnNpdGlvbiA6ICRvLXZhbHVlOyAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uIDogJHRyYW5zaXRpb25zO1xufVxuXG4vLyBjb2VyY2UgYSBsaXN0IHRvIGJlIGNvbW1hIGRlbGltaXRlZCBvciBtYWtlIGEgbmV3LCBlbXB0eSBjb21tYSBkZWxpbWl0ZWQgbGlzdC5cbkBmdW5jdGlvbiBjb21tYS1saXN0KCRsaXN0OiAoKSkge1xuICBAcmV0dXJuIGpvaW4oKCksICRsaXN0LCBjb21tYSk7XG59XG5cbi8vIFJldHVybnMgYCRwcm9wZXJ0eWAgd2l0aCB0aGUgZ2l2ZW4gcHJlZml4IGlmIGl0IGlzIGZvdW5kIGluIGAkdHJhbnNpdGlvbmFibGUtcHJlZml4ZWQtdmFsdWVzYC5cbkBmdW5jdGlvbiBwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbigkcHJlZml4LCAkcHJvcGVydHkpIHtcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnR5KSA9PSBsaXN0IHtcbiAgICAkbmV3LWxpc3Q6IGNvbW1hLWxpc3QoKTtcbiAgICBAZWFjaCAkdiBpbiAkcHJvcGVydHkge1xuICAgICAgJG5ldy1saXN0OiBhcHBlbmQoJG5ldy1saXN0LCBwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbigkcHJlZml4LCAkdikpO1xuICAgIH1cbiAgICBAcmV0dXJuICRuZXctbGlzdDtcbiAgfSBAZWxzZSB7XG4gICAgQGlmIGluZGV4KCR0cmFuc2l0aW9uYWJsZS1wcmVmaXhlZC12YWx1ZXMsICRwcm9wZXJ0eSkge1xuICAgICAgQHJldHVybiAjeyRwcmVmaXh9LSN7JHByb3BlcnR5fTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEByZXR1cm4gJHByb3BlcnR5O1xuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVja3MgaWYgdGhlIHZhbHVlIGdpdmVuIGlzIGEgdW5pdCBvZiB0aW1lLlxuQGZ1bmN0aW9uIGlzLXRpbWUoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gbnVtYmVyIHtcbiAgICBAcmV0dXJuIG5vdChub3QoaW5kZXgocyBtcywgdW5pdCgkdmFsdWUpKSkpO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, httpTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function() { return httpTranslateLoader; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left-tab/left-tab.component */ "Gccu");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "ablI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tab-header/tab-header.component */ "6dvC");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timeline/timeline.component */ "WpLk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./speed-dial-fab/speed-dial-fab.component */ "V10N");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_11__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_5__["RightTabComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
                    useFactory: httpTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_4__["LeftTabComponent"],
        _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_5__["RightTabComponent"],
        _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_11__["TabHeaderComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_12__["TimelineComponent"],
        _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_14__["SpeedDialFabComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"]] }); })();
function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "ablI":
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab-header/tab-header.component */ "6dvC");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../left-tab/left-tab.component */ "Gccu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../timeline/timeline.component */ "WpLk");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
















function RightTabComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "dark_mode"));
} }
function RightTabComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "light_mode"));
} }
function RightTabComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", language_r10)("selected", language_r10 === ctx_r3.translate.currentLang);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", language_r10, " ");
} }
function RightTabComponent_a_69_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightTabComponent_a_69_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.hola(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "about_me.cv_button"), " ");
} }
function RightTabComponent_a_70_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightTabComponent_a_70_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.hola(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "about_me.cv_button"), " ");
} }
function RightTabComponent_mat_error_256_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_276_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [""]; };
class RightTabComponent {
    constructor(dialog, renderer, leftTab, translate) {
        this.dialog = dialog;
        this.renderer = renderer;
        this.leftTab = leftTab;
        this.translate = translate;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]);
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
        this.currentLang = "es";
    }
    ngOnInit() { }
    switchLang(lang) {
        //Translation
        this.translate.use(lang);
        this.currentLang = lang;
    }
    hola() {
        console.log(this.currentLang);
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
RightTabComponent.ɵfac = function RightTabComponent_Factory(t) { return new (t || RightTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
RightTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RightTabComponent, selectors: [["app-right-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"], _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]])], decls: 298, vars: 117, consts: [["id", "container", 1, "container"], ["id", "inicio", 1, "home"], ["id", "nightModeButton", 3, "click"], ["src", "../../assets/icons/dark_mode.png", 1, "button-image"], [4, "ngIf"], [1, "select"], ["required", "", 1, "select-text", 3, "change"], ["selectedLang", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "select-highlight"], [1, "select-bar"], [1, "select-label"], [1, "container_name"], [1, "name"], [1, "description"], [1, "buttons"], ["fragment", "sobre", 3, "routerLink"], ["color", "warn", "mat-raised-button", "", 1, "button"], ["target", "_blank", "href", "https://github.com/enriqueloz88"], ["mat-raised-button", "", 1, "button", "git-button"], ["id", "sobre", 1, "about-me"], [3, "parentData"], [1, "about-photo"], ["src", "../../assets/images/IMGP0592.jpg", 1, "profile-picture"], [1, "about-text"], [1, "about-hello"], [1, "about-description"], [1, "about-data"], [1, "about-data-left"], [2, "color", "rgb(68, 68, 68)"], [1, "about-data-right"], [1, "about-buttons"], ["target", "_blank", "href", "../../assets/Documents/CV1_ES.pdf", 3, "click", 4, "ngIf"], ["target", "_blank", "href", "../../assets/Documents/CV1_EN.pdf", 3, "click", 4, "ngIf"], ["fragment", "contacto", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 1, "button"], ["id", "educacion", 1, "time"], ["id", "habilidades1", 1, "main-skills"], [1, "main-skill"], ["src", "../../assets/icons/python.png", 1, "skill-picture"], [1, "text-skill"], ["src", "../../assets/icons/ai.png", 1, "skill-picture"], ["src", "../../assets/icons/social.png", 1, "skill-picture"], ["src", "../../assets/icons/linux.png", 1, "skill-picture"], ["id", "habilidades", 1, "skills"], [1, "skill-set", "first"], [1, "skill-title"], [1, "skill-title-column"], [1, "skill-set"], ["src", "../../assets/icons/uk.png", 1, "flag"], [1, "flag-title"], ["src", "../../assets/icons/spain.png", 1, "flag", "last"], ["id", "experiencia", 1, "experience"], [1, "post-experience", "left-post"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "post-picture", 3, "click"], [1, "text-post"], [1, "post-experience", "right-post"], ["src", "../../assets/images/uc3m.png", 1, "post-picture", 3, "click"], ["id", "contacto", 1, "about-me", "last"], [1, "contact-left"], [1, "contact-mini"], [1, "contact-mini-left"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com"], ["src", "../../assets/icons/correo.png", 1, "contact-icon"], [1, "contact-mini-right"], [1, "section"], [1, "section__item"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:kikelozano8@gmail.com", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "sm-link__label"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/"], ["src", "../../assets/icons/linkedin (azul).png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.linkedin.com/in/enrique-lozano-cebriano-5859031a2/", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.es/maps/place/Madrid/@40.4378698,-3.8196201,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902"], ["src", "../../assets/icons/alfiler.png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.google.es/maps/place/Madrid/@40.4378698,-3.8196201,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "contact-right"], ["id", "light-form", 1, "contact-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", "name", "email", 3, "formControl", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Carolina, Mateo", "value", "", "name", "name_email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Propuesta de empleo", "value", "", "name", "subject", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Hola, me gustar\u00EDa conocer...", "name", "text", "rows", "3", 3, "ngModel", "ngModelChange"], ["id", "dark-form", 1, "contact-form"], [1, "example-full-width"], [3, "href"], ["mat-raised-button", "", "color", "warn", 2, "float", "right", "margin-right", "8%", "margin-top", "5%", "margin-bottom", "10%"], [3, "value", "selected"], ["target", "_blank", "href", "../../assets/Documents/CV1_ES.pdf", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "button", 2, "margin-right", "20%"], ["target", "_blank", "href", "../../assets/Documents/CV1_EN.pdf", 3, "click"]], template: function RightTabComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightTabComponent_Template_button_click_2_listener() { return ctx.darkMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RightTabComponent_span_4_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RightTabComponent_span_5_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightTabComponent_Template_select_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); return ctx.switchLang(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RightTabComponent_option_9_Template, 2, 3, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " 1999 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Madrid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " kikelozano8@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, RightTabComponent_a_69_Template, 4, 3, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, RightTabComponent_a_70_Template, 4, 3, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "app-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Teamwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "mat-expansion-panel", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Technical skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Microsoft Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Office avanzado y Prezi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "C/C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "HTML/CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Bash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "MIPS 32 Ensamblador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Adobe Photoshop/GIMP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Audacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Quartus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Weka");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "JFlap");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "mat-expansion-panel", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Soft skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Trabajo en equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "Resiliencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "Organizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "mat-expansion-panel", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](190, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Ingl\u00E9s, B2 - First");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "Espa\u00F1ol, Nativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_201_listener() { return ctx.openDialog(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Voluntario evento tecnol\u00F3gico T3chfest");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_205_listener() { return ctx.openDialog(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Profesor particular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "app-tab-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "kikelozano8@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](235, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](243, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](249, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "form", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "mat-form-field", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "Tu email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_255_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](256, RightTabComponent_mat_error_256_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](257, RightTabComponent_mat_error_257_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "mat-form-field", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_261_listener($event) { return ctx.name_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "mat-form-field", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_265_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "mat-form-field", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Tu mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "textarea", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_269_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "form", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "mat-form-field", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](274, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_275_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](276, RightTabComponent_mat_error_276_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](277, RightTabComponent_mat_error_277_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "mat-form-field", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](281, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_282_listener($event) { return ctx.name_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "mat-form-field", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](286, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_287_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "mat-form-field", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](291, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "textarea", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_292_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](294, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](295, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 57, "name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 59, "presentation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](115, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 61, "first_button"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 63, "second_button"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 65, "about_me.hello"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 67, "about_me.intro"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 69, "about_me.name_title"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 71, "full_name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 73, "about_me.birthday_title"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 75, "loc_title"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 77, "email_title"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentLang == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentLang != "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](116, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](74, 79, "about_me.hire_button"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](106, 81, "skills.important"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](110, 83, "skills.ai"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](113, 85, "skills.web_app_dev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](116, 87, "skills.db"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](120, 89, "skills.office"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](133, 91, "skills.frameworks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](154, 93, "skills.other_tools"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](190, 95, "skills.languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("parentData", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](235, 97, "contact.my_linkedin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](243, 99, "loc_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](249, 101, "education.madrid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.emailFormControl)("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.name_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](274, 103, "contact.your_email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.emailFormControl)("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](281, 105, "contact.your_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.name_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](286, 107, "contact.subject"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](291, 109, "contact.your_message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate4"]("href", "mailto:kikelozano8@gmail.com?Subject=", ctx.subject, "&body=Hola%20", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](294, 111, "full_name"), ",%20soy%20", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](295, 113, "email"), ".%0A%0A%20%20%20", ctx.text, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_1__["TabHeaderComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n.container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 65%;\n  margin-top: 2.5%;\n  margin-right: 5%;\n  height: 100%;\n  vertical-align: top;\n  margin-left: 30%;\n}\n.home[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: 90%;\n  border-radius: 22px;\n  color: white;\n  position: relative;\n  width: 100%;\n}\n.container_name[_ngcontent-%COMP%] {\n  height: 72%;\n  position: relative;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 4.5em;\n  line-height: 1em;\n  position: absolute;\n  bottom: 50%;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 1%;\n  font-weight: bold;\n}\n.description[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20%;\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: justify;\n  line-height: 1.5em;\n  font-size: 1.1em;\n}\n.button[_ngcontent-%COMP%] {\n  margin-right: 3%;\n}\n.git-button[_ngcontent-%COMP%] {\n  margin-top: 7%;\n}\n.buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n#nightModeButton[_ngcontent-%COMP%] {\n  padding: 15px 15px 10px 15px;\n  border: none;\n  text-align: center;\n  background-color: #333333;\n  font-size: 1.2em;\n  text-decoration: none;\n  color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  left: 10%;\n  top: 10%;\n  z-index: 1;\n  border-radius: 5px;\n}\n#nightModeButton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.button-image[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  vertical-align: middle;\n}\n.select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 15%;\n  left: 75%;\n  top: 5%;\n}\n.select-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-family: inherit;\n  background-color: transparent;\n  width: 100%;\n  cursor: pointer;\n  padding: 10px 10px 10px 0;\n  font-size: 1.1em;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.select-text[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n\n.select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n.select[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 18px;\n  right: 10px;\n  \n  width: 0;\n  height: 0;\n  padding: 0;\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid rgba(0, 0, 0, 0.82);\n  pointer-events: none;\n}\n\n.select-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 10px;\n  transition: 0.2s ease all;\n}\n\n.select-text[_ngcontent-%COMP%]:focus    ~ .select-label[_ngcontent-%COMP%], .select-text[_ngcontent-%COMP%]:valid    ~ .select-label[_ngcontent-%COMP%] {\n  color: #fff;\n  top: -20px;\n  transition: 0.2s ease all;\n  font-size: 1.1em;\n}\n\n.select-bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.select-bar[_ngcontent-%COMP%]:before, .select-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #fff;\n  transition: 0.2s ease all;\n}\n.select-bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n.select-bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n\n.select-text[_ngcontent-%COMP%]:focus    ~ .select-bar[_ngcontent-%COMP%]:before, .select-text[_ngcontent-%COMP%]:focus    ~ .select-bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n.select-highlight[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.about-me[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 70%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.about-photo[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 70%;\n  display: inline-block;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  height: 12em;\n  width: 12em;\n  border-radius: 100%;\n  margin: 19%;\n  margin-top: 7%;\n  border: 0.2em solid white;\n}\n.about-text[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 5%;\n  height: 70%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-hello[_ngcontent-%COMP%] {\n  margin-top: 7%;\n  font-size: 3em;\n  font-weight: bold;\n  height: 13%;\n}\n.about-description[_ngcontent-%COMP%] {\n  height: 30%;\n  color: #969696;\n  text-align: justify;\n}\n.about-data[_ngcontent-%COMP%] {\n  height: 20%;\n  color: #969696;\n}\n.about-data-left[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-data-right[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-buttons[_ngcontent-%COMP%] {\n  height: 30%;\n}\n.last[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n.first[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.time[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1em;\n}\n.skills[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 5%;\n}\n.skill-set[_ngcontent-%COMP%] {\n  margin-left: 7%;\n  margin-right: 5%;\n}\n.skill-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: #3248f4;\n}\n.skill-title-column[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.flag[_ngcontent-%COMP%] {\n  width: 7%;\n}\n.flag-title[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.skill-set[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding-top: 1.7%;\n  padding-left: 2%;\n}\n.main-skills[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  color: white;\n}\n.main-skill[_ngcontent-%COMP%] {\n  width: 25%;\n  display: inline-block;\n  transition-duration: 1s;\n}\n.main-skill[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n.main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.text-skill[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  font-size: large;\n  text-align: center;\n  padding-bottom: 7%;\n}\n.skill-picture[_ngcontent-%COMP%] {\n  height: 20%;\n  width: 25%;\n  padding-top: 20%;\n  padding-bottom: 13%;\n  cursor: pointer;\n}\n#reconocimientos[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.description-card[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-weight: bold;\n}\n.back-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n  font-style: italic;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n.reward[_ngcontent-%COMP%] {\n  width: 4em;\n}\n.card[_ngcontent-%COMP%] {\n  height: 12%;\n  width: 86%;\n  transform-style: preserve-3d;\n  position: relative;\n  transition: all 1s ease-in-out;\n  transition-duration: 1s;\n  cursor: pointer;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-left: 7%;\n  color: black;\n  margin-bottom: 3%;\n}\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #fdfcfc;\n  height: 100%;\n  width: 100%;\n  border-radius: 1em;\n  border: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-style: preserve-3d;\n  color: black;\n  perspective: 1000px;\n  box-shadow: 2px 4px 8px 1px rgba(0, 0, 0, 0.4);\n}\n.left-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n  font-size: large;\n}\n.right-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10%;\n}\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.front[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  transform: translateZ(120px);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: rotateY(180deg);\n}\n.experience[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 2%;\n}\n.post-experience[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-top: 5%;\n  display: inline-block;\n}\n.left-post[_ngcontent-%COMP%] {\n  margin-left: 13%;\n  margin-right: 7%;\n}\n.right-post[_ngcontent-%COMP%] {\n  margin-right: 20%;\n  vertical-align: top;\n}\n.post-picture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 5%;\n  margin-bottom: 5%;\n  cursor: pointer;\n}\n.text-post[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-align: justify;\n}\n#contacto[_ngcontent-%COMP%] {\n  height: auto;\n}\n.contact-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.contact-mini[_ngcontent-%COMP%] {\n  height: 33%;\n  width: 100%;\n  padding-top: 10%;\n}\n.contact-mini-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n.contact-mini-right[_ngcontent-%COMP%] {\n  width: 70%;\n  display: inline-block;\n  padding-top: 4%;\n  vertical-align: top;\n}\n.contact-right[_ngcontent-%COMP%] {\n  width: 60%;\n  display: inline-block;\n}\n.contact-icon[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.link-contact[_ngcontent-%COMP%] {\n  line-height: 0.5;\n}\nh2[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n#dark-form[_ngcontent-%COMP%] {\n  display: none;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #3248f4 !important;\n}\n .mat-form-field-underline {\n  \n  background-color: #3248f4 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #3248f4 !important;\n}\n.contact-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 5%;\n  margin-left: 2%;\n  margin-right: 1%;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sm-link[_ngcontent-%COMP%] {\n  --uismLinkDisplay: var(--smLinkDisplay, inline-flex);\n  --uismLinkTextColor: var(--smLinkTextColor);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover);\n  display: var(--uismLinkDisplay);\n  color: var(--uismLinkTextColor);\n  position: relative;\n  overflow: hidden;\n}\na.sm-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.sm-link__label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sm-link_padding-all[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after {\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before {\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  width: var(--uismLinkLineWeight);\n  height: 100%;\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  opacity: 0;\n  will-change: transform, opacity;\n  transition-property: transform, opacity;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]:hover::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover::after, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n\n.sm-link_padding-bottom[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  padding-bottom: var(--uismLinkLineWeight);\n  position: relative;\n}\n.sm-link_padding-bottom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.sm-link_bg[_ngcontent-%COMP%] {\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover, #fff);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n  transition: color 0.3s ease-out;\n}\n.sm-link_bg[_ngcontent-%COMP%]::before, .sm-link_bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  opacity: 0;\n  position: absolute;\n  transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.03s;\n}\n.sm-link_bg[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover::before, .sm-link_bg[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transition-duration: 0.35s, 0.35s;\n  transition-delay: 0s, 0s;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover {\n  color: var(--uismLinkTextColorHover);\n}\n\n.sm-link_text[_ngcontent-%COMP%]::before {\n  content: attr(data-sm-link-text);\n  color: var(--uismLinkTextColorHover);\n  position: absolute;\n}\n.sm-link_text[_ngcontent-%COMP%]::before, .sm-link_text[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.86, 0.6, 0.08, 1.01);\n  transition-duration: 0.3s;\n}\n.sm-link_text[_ngcontent-%COMP%]:hover::before, .sm-link_text[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n}\n\n.sm-link3[_ngcontent-%COMP%]::after {\n  transform: translate3d(-100%, 0, 0);\n  transition: transform 0.2s ease-in;\n}\n.sm-link3[_ngcontent-%COMP%]:hover::after {\n  transform: translate3d(0, 0, 0);\n}\n\n@media only screen and (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    margin-right: 3%;\n    width: 94%;\n    max-width: 95%;\n  }\n\n  .home[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: 97%;\n    border-radius: 22px;\n    color: white;\n    position: relative;\n  }\n\n  .container_name[_ngcontent-%COMP%] {\n    height: 80%;\n    position: relative;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 50%;\n    font-size: 4.5em;\n    line-height: 1em;\n    margin-left: 10%;\n    margin-right: 10%;\n    font-weight: bold;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 15%;\n    margin-left: 10%;\n    margin-right: 10%;\n    text-align: justify;\n    line-height: 1.5em;\n    font-size: 1.1em;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .about-me[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 100%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .about-photo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 20%;\n    position: relative;\n  }\n\n  .profile-picture[_ngcontent-%COMP%] {\n    height: 12em;\n    width: 12em;\n    border-radius: 100%;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    border: 0.2em solid white;\n  }\n\n  .about-text[_ngcontent-%COMP%] {\n    margin-top: 6%;\n    width: 86%;\n    margin-right: 7%;\n    margin-left: 7%;\n    height: 70%;\n    vertical-align: top;\n  }\n\n  .about-hello[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    font-weight: bold;\n    height: 8%;\n  }\n\n  .about-description[_ngcontent-%COMP%] {\n    height: 20%;\n    color: #969696;\n    text-align: justify;\n  }\n\n  .about-data[_ngcontent-%COMP%] {\n    height: 15%;\n    padding-top: 5%;\n    color: #969696;\n  }\n\n  .about-data-left[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n    margin-bottom: 4%;\n  }\n\n  .about-data-right[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n  }\n\n  .about-buttons[_ngcontent-%COMP%] {\n    padding-top: 22%;\n    height: 30%;\n    align-items: center;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    font-size: 1.15em;\n    padding: 3% 3%;\n    margin-bottom: 4%;\n  }\n\n  .main-skills[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: auto;\n    padding: 4%;\n    border-radius: 22px;\n    margin-top: 5%;\n    line-height: 1.2em;\n    color: white;\n  }\n\n  .main-skill[_ngcontent-%COMP%] {\n    width: 50%;\n    display: inline-block;\n  }\n\n  .main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .text-skill[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    padding-bottom: 7%;\n    font-size: 0.94em;\n  }\n\n  .skill-picture[_ngcontent-%COMP%] {\n    height: 7em;\n    width: auto;\n    padding-top: 10%;\n    padding-bottom: 13%;\n    cursor: pointer;\n  }\n\n  .skill-title-column[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 99%;\n    margin-top: 3%;\n    vertical-align: top;\n  }\n\n  .flag[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n\n  .flag-title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    min-width: 80%;\n  }\n\n  #contacto[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .contact-left[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-top: 2%;\n    vertical-align: top;\n  }\n\n  .contact-mini[_ngcontent-%COMP%] {\n    height: 33%;\n    width: 100%;\n    padding-top: 10%;\n  }\n\n  .contact-mini-left[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n\n  .contact-mini-right[_ngcontent-%COMP%] {\n    width: 75%;\n    display: inline-block;\n    padding-top: 5%;\n    vertical-align: top;\n  }\n\n  .contact-right[_ngcontent-%COMP%] {\n    width: 86%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-right: 7%;\n    margin-top: 3%;\n  }\n\n  .contact-icon[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .post-experience[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-top: 8%;\n    margin-bottom: 2%;\n    display: inline-block;\n  }\n\n  #reconocimientos[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 140%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .description-card[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    font-weight: bold;\n  }\n\n  .back-card[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n    font-style: italic;\n  }\n\n  @import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  .reward[_ngcontent-%COMP%] {\n    width: 4em;\n  }\n\n  .first_card[_ngcontent-%COMP%] {\n    margin-top: -15%;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    height: 16%;\n    width: 86%;\n    transform-style: preserve-3d;\n  }\n\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .left-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 80%;\n    font-size: large;\n  }\n\n  .right-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 20%;\n  }\n\n  .sm-link__label[_ngcontent-%COMP%] {\n    display: block;\n    font-size: medium;\n  }\n}\n\n@media only screen and (max-width: 1025px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpWlEsOERBQUE7QUFoWlI7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUlBO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxxREFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0E7RUFDSSx3RUFBQTtBQUFKO0FBR0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBSEo7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtBQUhKO0FBTUEsaUJBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSx5Q0FBQTtBQUhKO0FBTUEscUJBQUE7QUFDQTtFQUNJLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSx3QkFBQTtBQUhKO0FBTUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7QUFISjtBQU1BLGtEQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBSEo7QUFNQSxpQkFBQTtBQUNBOztFQUVJLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUEsa0RBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFISjtBQU1BOztFQUVJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU1BO0VBQ0ksU0FBQTtBQUhKO0FBTUE7RUFDSSxVQUFBO0FBSEo7QUFNQSxpQkFBQTtBQUNBOztFQUVJLFVBQUE7QUFISjtBQU1BLG1EQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFISjtBQU9BO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSko7QUFPQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU9BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU9BO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU9BO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFKSjtBQU9BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUpKO0FBT0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUpKO0FBT0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU9BO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7QUFKSjtBQU9BO0VBQ0ksaUJBQUE7QUFKSjtBQU9BO0VBQ0ksY0FBQTtBQUpKO0FBUUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTEo7QUFTQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFOSjtBQVNBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTko7QUFRQTtFQUNJLFNBQUE7QUFMSjtBQU9BO0VBQ0ksY0FBQTtBQUpKO0FBT0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpKO0FBUUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFJQSx1QkFBQTtBQUxKO0FBUUE7RUFDZ0MsU0FBQTtFQUNJLGVBQUE7RUFDaEMsc0JBQUE7QUFISjtBQU1BO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKSjtBQU9BO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjtBQVFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTEo7QUFRQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEo7QUFTQTs7O0VBR0ksU0FBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLFVBQUE7QUFOSjtBQVNBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFJQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU5KO0FBU0E7O0VBRUksa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQVBKO0FBVUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVBKO0FBVUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUFQSjtBQVVBO0VBQ0ksMEJBQUE7QUFQSjtBQVVBOztFQUVJLDRCQUFBO0FBUEo7QUFVQTtFQUNJLDBCQUFBO0FBUEo7QUFXQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBUko7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVdBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQVJKO0FBV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFSSjtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBUko7QUFZQTtFQUNJLFlBQUE7QUFUSjtBQVlBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVRKO0FBWUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBVEo7QUFZQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQVRKO0FBWUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVlBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FBVEo7QUFZQTtFQUNJLFVBQUE7QUFUSjtBQVlBO0VBQ0ksZ0JBQUE7QUFUSjtBQVlBO0VBQ0ksY0FBQTtBQVRKO0FBWUE7RUFDSSxhQUFBO0FBVEo7QUFZQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QUFUSjtBQVlBO0VBQ0ksNEJBQUE7RUFDQSxvQ0FBQTtBQVRKO0FBWUE7RUFDSSx5Q0FBQTtFQUNBLG9DQUFBO0FBVEo7QUFZQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRKO0FBWUE7RUFDSSxXQUFBO0FBVEo7QUFjQTs7Q0FBQTtBQUlBO0VBQ0ksb0RBQUE7RUFDQSwyQ0FBQTtFQUNBLHFEQUFBO0VBRUEsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQWdCQTtFQUNJLHFCQUFBO0FBYko7QUFnQkE7RUFDSSxjQUFBO0FBYko7QUFpQkEsd0JBQUE7QUFFQTtFQUNJLGtEQUFBO0VBQ0EsaURBQUE7RUFDQSw0Q0FBQTtFQUVBLCtCQUFBO0FBaEJKO0FBbUJBOztFQUVJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLE9BQUE7QUFoQko7QUFtQkE7RUFDSSxNQUFBO0FBaEJKO0FBbUJBO0VBQ0ksU0FBQTtBQWhCSjtBQW1CQTs7RUFFSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FBaEJKO0FBbUJBO0VBQ0ksT0FBQTtBQWhCSjtBQW1CQTtFQUNJLFFBQUE7QUFoQko7QUFtQkE7Ozs7RUFJSSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSwrQkFBQTtFQUNBLHVDQUFBO0FBakJKO0FBb0JBOzs7O0VBSUksVUFBQTtBQWpCSjtBQW9CQSwyQkFBQTtBQUVBO0VBQ0ksa0RBQUE7RUFDQSxpREFBQTtFQUVBLHlDQUFBO0VBQ0Esa0JBQUE7QUFuQko7QUFzQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBcEJKO0FBdUJBLGVBQUE7QUFFQTtFQUNJLGlEQUFBO0VBQ0EsMkRBQUE7RUFDQSw0Q0FBQTtFQUVBLCtCQUFBO0VBQ0EsK0JBQUE7QUF0Qko7QUF5QkE7O0VBRUksV0FBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsZ0VBQUE7QUF2Qko7QUEwQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUF2Qko7QUEwQkE7O0VBRUksVUFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUF2Qko7QUEwQkE7RUFDSSxvQ0FBQTtBQXZCSjtBQTBCQSxpQkFBQTtBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBeEJKO0FBMkJBOztFQUVJLDhCQUFBO0VBQ0EsK0RBQUE7RUFDQSx5QkFBQTtBQXhCSjtBQTJCQTs7RUFFSSx5QkFBQTtBQXhCSjtBQTJCQSxhQUFBO0FBRUE7RUFDSSxtQ0FBQTtFQUNBLGtDQUFBO0FBekJKO0FBNEJBO0VBQ0ksK0JBQUE7QUF6Qko7QUE0QkE7Ozs7d0NBQUE7QUFNQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUExQk47O0VBOEJFO0lBQ0kseUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUEzQk47O0VBK0JFO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBNUJOOztFQStCRTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUE1Qk47O0VBK0JFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQTVCTjs7RUErQkU7SUFDSSxrQkFBQTtFQTVCTjs7RUFnQ0U7SUFDSSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUE3Qk47O0VBZ0NFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQTdCTjs7RUFnQ0U7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUE3Qk47O0VBZ0NFO0lBQ0ksY0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUE3Qk47O0VBZ0NFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUE3Qk47O0VBZ0NFO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQTdCTjs7RUFnQ0U7SUFDSSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUE3Qk47O0VBZ0NFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQTdCTjs7RUFnQ0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQTdCTjs7RUFnQ0U7SUFDSSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQTdCTjs7RUFnQ0U7SUFDSSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQTdCTjs7RUFpQ0U7SUFDSSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VBOUJOOztFQWlDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtFQTlCTjs7RUFpQ0U7SUFFSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQS9CTjs7RUFrQ0U7SUFDSSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUEvQk47O0VBa0NFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQS9CTjs7RUFrQ0U7SUFDSSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUEvQk47O0VBa0NFO0lBQ0ksVUFBQTtFQS9CTjs7RUFrQ0U7SUFDSSxhQUFBO0lBQ0EsY0FBQTtFQS9CTjs7RUFtQ0U7SUFDSSxZQUFBO0VBaENOOztFQW1DRTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFoQ047O0VBbUNFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQWhDTjs7RUFtQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7RUFoQ047O0VBbUNFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBaENOOztFQW1DRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFoQ047O0VBbUNFO0lBQ0ksVUFBQTtFQWhDTjs7RUFtQ0U7SUFDSSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7RUFoQ047O0VBb0NFO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VBakNOOztFQW9DRTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUFqQ047O0VBb0NFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBakNOOztFQW9DVSw4REFBQTtFQUNSOzs7SUFHSSxTQUFBO0lBQ0Esc0JBQUE7RUFqQ047O0VBb0NFO0lBQ0ksVUFBQTtFQWpDTjs7RUFvQ0U7SUFDSSxnQkFBQTtFQWpDTjs7RUFvQ0U7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLDRCQUFBO0VBakNOOztFQW9DRTtJQUNJLGtCQUFBO0VBakNOOztFQW9DRTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VBakNOOztFQW9DRTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtFQWpDTjs7RUFvQ0U7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7RUFqQ047QUFDRjtBQW9DQTs7Ozt3Q0FBQTtBQU1BO0VBQ0k7SUFDSSxrQkFBQTtFQW5DTjtBQUNGIiwiZmlsZSI6InJpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVGhlIGZ1bGwgcGFnZSBpcyBvcmdhbmlzZWQgaW4gdHdvIGNvbXBvbmVudHMsIHRoZSByaWdodCBvbmUgYW5kIHRoZSBsZWZ0IG9uZVxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml0IHRoZSBob21lXHJcbi5ob21lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lcl9uYW1lIHtcclxuICAgIGhlaWdodDogNzIlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDQuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuLmdpdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4vLy0tLS0tTmlnaHQgbW9kZSBidXR0b24tLS0tLS0tXHJcbiNuaWdodE1vZGVCdXR0b24ge1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiNuaWdodE1vZGVCdXR0b246aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG59XHJcblxyXG4uYnV0dG9uLWltYWdlIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLy8tLS0tLVRyYW5zbGF0aW9uIHNlbGVjdFxyXG4vLy0tLS0tVGhhbmtzIHRvIGh0dHBzOi8vY29kZXBlbi5pby9wYXZlbHZhcmF2a28vcGVuL3Fqb2pPci0tLS0tXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLnNlbGVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgbGVmdDogNzUlO1xyXG4gICAgdG9wOiA1JTtcclxufVxyXG5cclxuLnNlbGVjdC10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7IC8vIFRvIHRoZSBmcm9udFxyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBmb2N1cyAqL1xyXG4uc2VsZWN0LXRleHQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG4vKiBVc2UgY3VzdG9tIGFycm93ICovXHJcbi5zZWxlY3QgLnNlbGVjdC10ZXh0IHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3Q6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAvKiBTdHlsaW5nIHRoZSBkb3duIGFycm93ICovXHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44Mik7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLyogTEFCRUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5zZWxlY3QtbGFiZWwge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG4uc2VsZWN0LXRleHQ6Zm9jdXMgfiAuc2VsZWN0LWxhYmVsLFxyXG4uc2VsZWN0LXRleHQ6dmFsaWQgfiAuc2VsZWN0LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnNlbGVjdC1iYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlbGVjdC1iYXI6YmVmb3JlLFxyXG4uc2VsZWN0LWJhcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5zZWxlY3QtYmFyOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5zZWxlY3QtYmFyOmFmdGVyIHtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG4uc2VsZWN0LXRleHQ6Zm9jdXMgfiAuc2VsZWN0LWJhcjpiZWZvcmUsXHJcbi5zZWxlY3QtdGV4dDpmb2N1cyB+IC5zZWxlY3QtYmFyOmFmdGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qIEhJR0hMSUdIVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnNlbGVjdC1oaWdobGlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgYWJvdXQgbWVcclxuLmFib3V0LW1lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5hYm91dC1waG90byB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxOSU7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5hYm91dC10ZXh0IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uYWJvdXQtaGVsbG8ge1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiAxMyU7XHJcbn1cclxuXHJcbi5hYm91dC1kZXNjcmlwdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uYWJvdXQtZGF0YSB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbn1cclxuXHJcbi5hYm91dC1kYXRhLWxlZnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5hYm91dC1kYXRhLXJpZ2h0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uYWJvdXQtYnV0dG9ucyB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuLmxhc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5maXJzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgdGltZWxpbmVcclxuLnRpbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgc2tpbGxzXHJcbi5za2lsbHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uc2tpbGwtc2V0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5za2lsbC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxufVxyXG5cclxuLnNraWxsLXRpdGxlLWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5mbGFnIHtcclxuICAgIHdpZHRoOiA3JTtcclxufVxyXG4uZmxhZy10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnNraWxsLXNldCBoMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBtYWluLXNraWxsc1xyXG4ubWFpbi1za2lsbHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluLXNraWxsIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbi5tYWluLXNraWxsOmhvdmVyIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuXHJcbi5tYWluLXNraWxsIGltZyB7XHJcbiAgICAvL1RoaXMgaXMgdG8gYWxpZ24gYSBwaWN0dXJlIGluIHRoZSBtaWRkdGUgb2YgYSBkaXZcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50ZXh0LXNraWxsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3JTtcclxufVxyXG5cclxuLnNraWxsLXBpY3R1cmUge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGFja25vd2xlZGdlbWVudHNcclxuI3JlY29ub2NpbWllbnRvcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJhY2stY2FyZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhbmdlcnNcIik7XHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnJld2FyZCB7XHJcbiAgICB3aWR0aDogNGVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEyJTtcclxuICAgIHdpZHRoOiA4NiU7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5mcm9udCxcclxuLmJhY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUyLCAyNTIpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2IoNTAsIDcyLCAyNDQpIDAlLCByZ2IoNjUsIDg2LCAyNDcpIDEwMCUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggMXB4IHJnYmEoYmxhY2ssIDAuNCk7XHJcbn1cclxuXHJcbi5sZWZ0LWNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5yaWdodC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uZnJvbnQgPiBwLFxyXG4uYmFjayA+IHAge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEyMHB4KTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGV4cGVyaWVuY2VcclxuLmV4cGVyaWVuY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ucG9zdC1leHBlcmllbmNlIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxlZnQtcG9zdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxufVxyXG5cclxuLnJpZ2h0LXBvc3Qge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4ucG9zdC1waWN0dXJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LXBvc3Qge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgY29udGFjdFxyXG4jY29udGFjdG8ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFjdC1sZWZ0IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5jb250YWN0LW1pbmkge1xyXG4gICAgaGVpZ2h0OiAzMyU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jb250YWN0LW1pbmktbGVmdCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29udGFjdC1taW5pLXJpZ2h0IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uY29udGFjdC1yaWdodCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29udGFjdC1pY29uIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5saW5rLWNvbnRhY3Qge1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbiNkYXJrLWZvcm0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gICAgY29sb3I6IHJnYig1MCwgNzIsIDI0NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vR2VuZXJhbCBBbmltYXRpb25zXHJcblxyXG4vKlxyXG4qIGNvcmUgc3R5bGVzXHJcbiovXHJcblxyXG4uc20tbGluayB7XHJcbiAgICAtLXVpc21MaW5rRGlzcGxheTogdmFyKC0tc21MaW5rRGlzcGxheSwgaW5saW5lLWZsZXgpO1xyXG4gICAgLS11aXNtTGlua1RleHRDb2xvcjogdmFyKC0tc21MaW5rVGV4dENvbG9yKTtcclxuICAgIC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIpO1xyXG5cclxuICAgIGRpc3BsYXk6IHZhcigtLXVpc21MaW5rRGlzcGxheSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3IpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYS5zbS1saW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNtLWxpbmtfX2xhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy9mb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi8qIHNtLWxpbmtfcGFkZGluZy1hbGwgKi9cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsIHtcclxuICAgIC0tdWlzbUxpbmtMaW5lV2VpZ2h0OiB2YXIoLS1zbUxpbmtMaW5lV2VpZ2h0LCAycHgpO1xyXG4gICAgLS11aXNtTGlua0xpbmVDb2xvcjogdmFyKC0tc21MaW5rTGluZUNvbG9yLCAjMDAwKTtcclxuICAgIC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xyXG5cclxuICAgIHBhZGRpbmc6IHZhcigtLXVpc21MaW5rUGFkZGluZyk7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmUsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjphZnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmUge1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XHJcbiAgICB3aWR0aDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcclxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG59XHJcblxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3Zlcjo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3Zlcjo6YWZ0ZXIsXHJcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxyXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3ZlciAuc20tbGlua19fbGFiZWw6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIHNtLWxpbmtfcGFkZGluZy1ib3R0b20gKi9cclxuXHJcbi5zbS1saW5rX3BhZGRpbmctYm90dG9tIHtcclxuICAgIC0tdWlzbUxpbmtMaW5lV2VpZ2h0OiB2YXIoLS1zbUxpbmtMaW5lV2VpZ2h0LCAycHgpO1xyXG4gICAgLS11aXNtTGlua0xpbmVDb2xvcjogdmFyKC0tc21MaW5rTGluZUNvbG9yLCAjMDAwKTtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNtLWxpbmtfcGFkZGluZy1ib3R0b206OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpc21MaW5rTGluZUNvbG9yKTtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4vKiBzbS1saW5rX2JnICovXHJcblxyXG4uc20tbGlua19iZyB7XHJcbiAgICAtLXVpc21MaW5rTGluZUNvbG9yOiB2YXIoLS1zbUxpbmtMaW5lQ29sb3IsICMwMDApO1xyXG4gICAgLS11aXNtTGlua1RleHRDb2xvckhvdmVyOiB2YXIoLS1zbUxpbmtUZXh0Q29sb3JIb3ZlciwgI2ZmZik7XHJcbiAgICAtLXVpc21MaW5rUGFkZGluZzogdmFyKC0tc21MaW5rUGFkZGluZywgNXB4KTtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLnNtLWxpbmtfYmc6OmJlZm9yZSxcclxuLnNtLWxpbmtfYmc6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aXNtTGlua0xpbmVDb2xvcik7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1vdXQgMC4wM3M7XHJcbn1cclxuXHJcbi5zbS1saW5rX2JnIC5zbS1saW5rX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc20tbGlua19iZzpob3Zlcjo6YmVmb3JlLFxyXG4uc20tbGlua19iZzpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzLCAwLjM1cztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcztcclxufVxyXG5cclxuLnNtLWxpbmtfYmc6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXVpc21MaW5rVGV4dENvbG9ySG92ZXIpO1xyXG59XHJcblxyXG4vKiBzbS1saW5rX3RleHQgKi9cclxuXHJcbi5zbS1saW5rX3RleHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtc20tbGluay10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnNtLWxpbmtfdGV4dDo6YmVmb3JlLFxyXG4uc20tbGlua190ZXh0IC5zbS1saW5rX19sYWJlbCB7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODYsIDAuNiwgMC4wOCwgMS4wMSk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc20tbGlua190ZXh0OmhvdmVyOjpiZWZvcmUsXHJcbi5zbS1saW5rX3RleHQ6aG92ZXIgLnNtLWxpbmtfX2xhYmVsIHtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi8qIGVmZmVjdCAzICovXHJcblxyXG4uc20tbGluazM6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxufVxyXG5cclxuLnNtLWxpbmszOmhvdmVyOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIE1PQklMRSBWSUVXXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml0IHRoZSBob21lXHJcbiAgICAuaG9tZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgICAgICBoZWlnaHQ6IDk3JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpdCB0aGUgaG9tZVxyXG4gICAgLmNvbnRhaW5lcl9uYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDUwJTtcclxuICAgICAgICBmb250LXNpemU6IDQuNWVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBhYm91dCBtZVxyXG4gICAgLmFib3V0LW1lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtcGhvdG8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICAgICAgd2lkdGg6IDEyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LXRleHQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICAgIHdpZHRoOiA4NiU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaGVsbG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgaGVpZ2h0OiA4JTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtZGF0YSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWRhdGEtbGVmdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWRhdGEtcmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1idXR0b25zIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjIlO1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XHJcbiAgICAgICAgcGFkZGluZzogMyUgMyU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgbWFpbi1za2lsbHNcclxuICAgIC5tYWluLXNraWxscyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLXNraWxsIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1za2lsbCBpbWcge1xyXG4gICAgICAgIC8vVGhpcyBpcyB0byBhbGlnbiBhIHBpY3R1cmUgaW4gdGhlIG1pZGR0ZSBvZiBhIGRpdlxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1za2lsbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNyU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnNraWxsLXBpY3R1cmUge1xyXG4gICAgICAgIGhlaWdodDogN2VtO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEzJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNraWxsLXRpdGxlLWNvbHVtbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAuZmxhZyB7XHJcbiAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgIH1cclxuXHJcbiAgICAuZmxhZy10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtaW4td2lkdGg6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBjb250YWN0XHJcbiAgICAjY29udGFjdG8ge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1sZWZ0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtbWluaSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1taW5pLWxlZnQge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LW1pbmktcmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogODYlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pY29uIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3N0LWV4cGVyaWVuY2Uge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTW9iaWxlIHZpZXcgZm9yIHRoZSBhd2FyZHMgY2FyZFxyXG4gICAgI3JlY29ub2NpbWllbnRvcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhbmdlcnNcIik7XHJcbiAgICAqLFxyXG4gICAgKjo6YmVmb3JlLFxyXG4gICAgKjo6YWZ0ZXIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXdhcmQge1xyXG4gICAgICAgIHdpZHRoOiA0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0X2NhcmQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGhlaWdodDogMTYlO1xyXG4gICAgICAgIHdpZHRoOiA4NiU7XHJcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0LWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbS1saW5rX19sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgVEFCTEVUIFZJRVdcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCkge1xyXG4gICAgLmJhY2sge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 9, vars: 0, consts: [[1, "popup-content"], [1, "popup-left"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "popup-picture"], [1, "popup-right"], [1, "popup-text-post"], [1, "popup-text-description"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Voluntario evento tecnol\u00F3gico T3chfest");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Voluntario en el T3chfest, la feria de inform\u00E1tica y nuevas tecnolog\u00EDas en la Universidad Carlos III de Madrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: [".popup-content[_ngcontent-%COMP%]{\n    height: auto;\n    width: 500px;\n}\n\n.popup-left[_ngcontent-%COMP%]{\n    width: 50%;\n    display: inline-block;\n}\n\n.popup-right[_ngcontent-%COMP%]{\n    width: 50%;\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 1%;\n}\n\n.popup-picture[_ngcontent-%COMP%]{\n    width: 70%;\n    border-radius: 5%;\n}\n.popup-text-post[_ngcontent-%COMP%]{\n    font-size: 2em;\n    font-weight: bold;\n    text-align: justify;\n}\n\n.popup-text-description[_ngcontent-%COMP%]{\n    margin-top: 6%;\n    text-align: justify;\n}\n\n\n\n@media only screen and (max-width: 600px){\n    .popup-content[_ngcontent-%COMP%]{\n        height: auto;\n        width: 250px;\n    }\n\n    .popup-left[_ngcontent-%COMP%]{\n        width: 100%;\n        display: inline-block;\n    }\n\n    .popup-right[_ngcontent-%COMP%]{\n        width: 100%;\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 1%;\n    }\n \n    .popup-picture[_ngcontent-%COMP%]{\n        width: 100%;\n        border-radius: 5%;\n    }\n}"] });
class DialogContentExampleDialog2 {
}
DialogContentExampleDialog2.ɵfac = function DialogContentExampleDialog2_Factory(t) { return new (t || DialogContentExampleDialog2)(); };
DialogContentExampleDialog2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DialogContentExampleDialog2, selectors: [["dialog-content-example-dialog-2"]], decls: 9, vars: 0, consts: [[1, "popup-content"], [1, "popup-left"], ["src", "../../assets/images/uc3m.png", 1, "popup-picture"], [1, "popup-right"], [1, "popup-text-post"], [1, "popup-text-description"]], template: function DialogContentExampleDialog2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Profesor particular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Ense\u00F1anza de mater\u00EDas STEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: [".popup-content[_ngcontent-%COMP%]{\n        height: auto;\n        width: 500px;\n    }\n    \n    .popup-left[_ngcontent-%COMP%]{\n        width: 50%;\n        display: inline-block;\n    }\n    \n    .popup-right[_ngcontent-%COMP%]{\n        width: 50%;\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 1%;\n    }\n    \n    .popup-picture[_ngcontent-%COMP%]{\n        width: 70%;\n        border-radius: 5%;\n    }\n    .popup-text-post[_ngcontent-%COMP%]{\n        font-size: 2em;\n        font-weight: bold;\n        text-align: justify;\n    }\n    \n    .popup-text-description[_ngcontent-%COMP%]{\n        margin-top: 6%;\n        text-align: justify;\n    }\n\n    \n\n    @media only screen and (max-width: 600px){\n        .popup-content[_ngcontent-%COMP%]{\n            height: auto;\n            width: 250px;\n        } \n        .popup-picture[_ngcontent-%COMP%]{\n            width: 100%;\n            border-radius: 5%;\n        }\n\n        .popup-left[_ngcontent-%COMP%]{\n            width: 100%;\n            display: inline-block;\n        }\n\n        .popup-right[_ngcontent-%COMP%]{\n            width: 100%;\n            display: inline-block;\n            vertical-align: top;\n            margin-top: 1%;\n        }\n    }"] });


/***/ }),

/***/ "u/5M":
/*!*************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.animations.ts ***!
  \*************************************************************/
/*! exports provided: speedDialFabAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speedDialFabAnimations", function() { return speedDialFabAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

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

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "ablI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_1__["RightTabComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: "reload",
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
                relativeLinkResolution: 'legacy'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map