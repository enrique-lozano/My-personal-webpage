import { Component, OnInit } from "@angular/core";
import * as myGlobals from "../../globals"; //Global variables
import { TabHeaderComponent } from "../tab-header/tab-header.component";
//import { RightTabComponent } from "../right-tab/right-tab.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-left-tab",
    templateUrl: "./left-tab.component.html",
    providers: [TabHeaderComponent],
    styleUrls: ["./left-tab.component.scss"],
})
export class LeftTabComponent implements OnInit {
    isCheckedDark = true;
    isChecked2 = false;

    //Importing the globals variables
    name = myGlobals.name;
    job = myGlobals.job;

    constructor(
        public tabHeader: TabHeaderComponent,
        //public rightTab: RightTabComponent,
        public translate: TranslateService
    ) {
        translate.addLangs(["es", "en"]);
        translate.setDefaultLang("es");
    }

    ngOnInit(): void {}

    openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    toDark() {
        this.tabHeader.toDark();
        document.getElementById("main-tab").style.backgroundColor = "#151C21";
    }

    toLight() {
        this.tabHeader.toLight();
        document.getElementById("main-tab").style.backgroundColor = "#3248F4";
    }

    language() {}
}
