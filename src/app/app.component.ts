import { Component } from '@angular/core';
import { APP_CONSTANTS, ORDER_PROJECTS } from './app.config';


interface IProject {
  title: string;
  picName: string;
  description: string;
}

interface IAppState {
  projects: any;
  showDialog: boolean;
  selectedProject: IProject;
  orderedProjects: any[];
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
      selectedProject: PROJECTS.projects[APP_CONSTANTS.PROJECTS.AHMB],
      orderedProjects: []
    }
    this.setUpProjects();
  }

  private setUpProjects() {
    ORDER_PROJECTS.forEach((name) => {
      this.state.orderedProjects.push(PROJECTS.projects[name]);
    })
  }

}
