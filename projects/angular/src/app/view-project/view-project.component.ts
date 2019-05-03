import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../modelos/project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  public project$: Observable<Project>;
  public projectId: number;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ title: 'Card 1', cols: 1, rows: 1 }];
      }
      return [{ title: 'Card 1', cols: 1, rows: 1 }];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    this.projectId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.project$ = this.projectsService.viewProjectUrl(this.projectId);
  }
}
