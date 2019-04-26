import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../modelos/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public numProjects = 0;

  constructor() {}

  ngOnInit() {
    this.projects = environment.projects;
  }

  public deleteProject(id: number) {
    this.projects.splice(id);
    this.numProjects = this.projects.length;
  }
}
