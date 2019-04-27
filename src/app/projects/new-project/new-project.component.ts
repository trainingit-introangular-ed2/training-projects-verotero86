import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../modelos/project';
import { ProjectsService } from '../projects.service';

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

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = environment.projects;
    this.project = { id: 0, name: ' ' };
    this.projectId = this.projectsService.getNumProjects();
  }

  public saveProject() {
    this.project.id = this.projectId;
    this.projectsService.saveProject(this.project);
  }
}
