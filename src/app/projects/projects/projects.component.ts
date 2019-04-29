import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Project } from '../modelos/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public projects: Project[];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects$ = this.projectsService.getProjectsUrl().pipe(share());
  }

  public deleteProject(idProject: number) {
    this.projectsService.deleteProjectUrl(idProject).subscribe(_ => {
      this.projects$ = this.projectsService.getProjectsUrl();
    });
  }
}
