import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-timeline",
    templateUrl: "./timeline.component.html",
    styleUrls: ["./timeline.component.scss"],
})
export class TimelineComponent implements OnInit {
    constructor(public translate: TranslateService) {}

    ngOnInit(): void {}
}
