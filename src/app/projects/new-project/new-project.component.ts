import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../modelos/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public project: Project;

  constructor(private projectsService: ProjectsService, private router: Router) {}

  ngOnInit() {
    this.project = { id: 0, name: ' ' };
  }

  public saveProject() {
    this.projectsService.saveProjectUrl(this.project).subscribe(_ => this.router.navigateByUrl('/projects'));
  }
}
