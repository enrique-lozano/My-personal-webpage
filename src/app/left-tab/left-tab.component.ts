import { Component, OnInit } from "@angular/core";
import { TabHeaderComponent } from "../tab-header/tab-header.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-left-tab",
    templateUrl: "./left-tab.component.html",
    providers: [TabHeaderComponent],
    styleUrls: ["./left-tab.component.scss"],
})
export class LeftTabComponent implements OnInit {
    constructor(
        public tabHeader: TabHeaderComponent,
        public translate: TranslateService
    ) {
        translate.addLangs(["es", "en"]);
        translate.setDefaultLang("es");
    }

    ngOnInit(): void {}

    toDark() {
        this.tabHeader.toDark();
        document.getElementById("main-tab").style.backgroundColor = "#151C21";
    }

    toLight() {
        this.tabHeader.toLight();
        document.getElementById("main-tab").style.backgroundColor = "#3248F4";
    }
}
