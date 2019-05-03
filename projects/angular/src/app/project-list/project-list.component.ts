import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Project } from '../modelos/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public projects$: Observable<Project[]>;
  columnas = ['id', 'name', 'ver', 'borrar'];

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
