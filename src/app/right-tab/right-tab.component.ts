import { Component, OnInit, Renderer2 } from '@angular/core';
import * as myGlobals from '../../globals'; //Global variables
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-right-tab',
  templateUrl: './right-tab.component.html',
  styleUrls: ['./right-tab.component.scss']
})
export class RightTabComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  name = myGlobals.name;
  job = myGlobals.job;
  description = myGlobals.description;
  about_description = myGlobals.about_description;
  
  //Binding variables
  public about = "Sobre mi"
  public education = "Educación"
  public skills = "Habilidades"
  public rewards = "Reconocimientos"
  public experience = "Experiencia"
  public contact = "Contacto"
  public main_skills = "Principales habilidades"

  //Varibles for the form
  public email:string;
  public name_email:string;
  public subject:string;
  public text:string;


  constructor(public dialog: MatDialog,  private renderer: Renderer2, public translate: TranslateService) { 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
  }

  switchLang(lang: string) { //Translation
    this.translate.use(lang);
  }

  //Function to open the popup
  openDialog(variable: number) {
    const dialogRef = null;
    if(variable == 1){
      const dialogRef = this.dialog.open(DialogContentExampleDialog);
    } else if (variable == 2){
      const dialogRef = this.dialog.open(DialogContentExampleDialog2);
    } else{
      alert("Popup not found");
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Functions that implements the dark mode on this
  darkModeRight(){
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
    var skill = document.getElementsByClassName("skill-set") as HTMLCollectionOf<HTMLElement>;
    for(var i=0, len=skill.length; i<len; i++)
    { 
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

  lightModeRight(){
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
    var skill = document.getElementsByClassName("skill-set") as HTMLCollectionOf<HTMLElement>;
    for(var i=0, len=skill.length; i<len; i++)
    { 
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

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

@Component({
  selector: 'dialog-content-example-dialog-2',
  templateUrl: 'dialog-content-example-dialog-2.html',
})
export class DialogContentExampleDialog2 {}
