import { Component } from '@angular/core';

interface IProject {
  title: string;
  picName: string;
  description: string;
}

interface IAppState {
  projects: IProject[]
  showDialog: boolean;
  selectedProject: IProject;
}

const PROJECTS = require("./data/projects.json")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state: IAppState;

  showDialog(project: IProject) {
      this.state.selectedProject = project;
      this.state.showDialog = true;
  }


  constructor() {

  }

  ngOnInit(){
    this.state = {
      projects: PROJECTS.projects,
      showDialog: false,
      selectedProject: PROJECTS.projects[0]
    }
  }

}
