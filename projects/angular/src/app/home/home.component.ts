import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Project } from '../modelos/project';
import { NotificationsStoreService } from '../notifications-store.service';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ cols: 1, rows: 2 }];
      }

      return [{ cols: 1, rows: 2 }];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private projectsService: ProjectsService,
    private notificationsStore: NotificationsStoreService
  ) {}
  public numProjects = 0;
  public notes$;
  public notes;

  ngOnInit() {
    let projects: Project[];
    this.projectsService.getProjectsUrl().subscribe(proyectos => {
      projects = proyectos;
      this.numProjects = proyectos == null ? 0 : projects.length;
    });

    this.notes$ = this.notificationsStore.select$();
  }
}
