import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../modelos/project';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public projects: Project[];
  public project: Project;
  public numProjects: number;
  public projectId: number;

  constructor() {}

  ngOnInit() {
    this.projects = environment.projects;
    this.project = { id: 0, name: ' ' };
    this.numProjects = 0;
    this.projectId = this.projects.length;
  }

  public saveProject() {
    this.project.id = this.projectId;
    this.projects.push({ ...this.project });
    this.numProjects = this.projects.length;
  }
}
