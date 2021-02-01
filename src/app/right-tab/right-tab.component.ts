import { Component, OnInit, Renderer2 } from "@angular/core";
import * as myGlobals from "../../globals"; //Global variables
import { MatDialog } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

import { TabHeaderComponent } from "../tab-header/tab-header.component";
import { LeftTabComponent } from "../left-tab/left-tab.component";

@Component({
    selector: "app-right-tab",
    templateUrl: "./right-tab.component.html",
    providers: [TabHeaderComponent, LeftTabComponent],
    styleUrls: ["./right-tab.component.scss"],
})
export class RightTabComponent implements OnInit {
    ngOnInit(): void {}

    emailFormControl = new FormControl("", [Validators.required, Validators.email]);

    name = myGlobals.name;
    job = myGlobals.job;
    description = myGlobals.description;
    about_description = myGlobals.about_description;

    //Binding variables
    public about = "Sobre mi";
    public education = "Educación";
    public skills = "Habilidades";
    public rewards = "Reconocimientos";
    public experience = "Experiencia";
    public contact = "Contacto";
    public main_skills = "Principales habilidades";

    //Varibles for the form
    public email: string;
    public name_email: string;
    public subject: string;
    public text: string;

    constructor(
        public dialog: MatDialog,
        private renderer: Renderer2,
        public leftTab: LeftTabComponent,
        public translate: TranslateService
    ) {
        translate.addLangs(["es", "en"]);
        translate.setDefaultLang("es");
    }

    switchLang(lang: string) {
        //Translation
        this.translate.use(lang);
    }

    //Function to open the popup
    openDialog(variable: number) {
        const dialogRef = null;
        if (variable == 1) {
            const dialogRef = this.dialog.open(DialogContentExampleDialog);
        } else if (variable == 2) {
            const dialogRef = this.dialog.open(DialogContentExampleDialog2);
        } else {
            alert("Popup not found");
        }

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    isDark = false;

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
            var skill = document.getElementsByClassName(
                "skill-set"
            ) as HTMLCollectionOf<HTMLElement>;
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
        } else {
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
            var skill = document.getElementsByClassName(
                "skill-set"
            ) as HTMLCollectionOf<HTMLElement>;
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

@Component({
    selector: "dialog-content-example-dialog",
    templateUrl: "dialog-content-example-dialog.html",
})
export class DialogContentExampleDialog {}

@Component({
    selector: "dialog-content-example-dialog-2",
    templateUrl: "dialog-content-example-dialog-2.html",
})
export class DialogContentExampleDialog2 {}
