import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-left-tab",
    templateUrl: "./left-tab.component.html",
    providers: [],
    styleUrls: ["./left-tab.component.scss"],
})
export class LeftTabComponent implements OnInit {
    constructor(public translate: TranslateService) {
        translate.addLangs(["es", "en"]);
        translate.setDefaultLang("es");
    }

    ngOnInit(): void {}

    toDark() {
        document.getElementById("main-tab").style.backgroundColor = "#151C21";
    }

    toLight() {
        document.getElementById("main-tab").style.backgroundColor = "#3248F4";
    }
}
