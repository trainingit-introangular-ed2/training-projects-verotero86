import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../modelos/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projects: Project[];
  public project: Project;
  public projectId: number;

  constructor(activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.projectId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    this.project = this.projectsService.viewProject(this.projectId);
  }
}
