import { Component } from '@angular/core';

interface IProject {
  title: string;
  picName: string;
  description: string;
}

interface IAppState {
  projects: IProject[]
  showDialog: boolean;
}

const PROJECTS = require("./data/projects.json")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: boolean = false;
  state: IAppState;

  showDialog() {
      this.display = true;
  }


  constructor() {

  }

  ngOnInit(){
    this.state = {
      projects: PROJECTS.projects,
      showDialog: false
    }

    console.log(this.state)
  }

}
