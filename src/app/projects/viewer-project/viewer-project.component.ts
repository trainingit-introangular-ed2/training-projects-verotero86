import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../modelos/project';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projects: Project[];
  public project: Project;
  public projectId: number;

  constructor(activatedRoute: ActivatedRoute) {
    this.projectId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.projects = environment.projects;
    this.project = this.projects[this.projectId];
  }
}
