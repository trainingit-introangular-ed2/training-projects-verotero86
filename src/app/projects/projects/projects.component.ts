import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from '../modelos/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = environment.projects;
  }

  public deleteProject(id: number) {
    this.projectsService.deleteProject(id);
  }
}
