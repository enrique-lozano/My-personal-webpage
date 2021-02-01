import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "LozanoWebPage";
    FabOptions = {
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
