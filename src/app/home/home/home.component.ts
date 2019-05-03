import { Component, OnInit } from '@angular/core';
import { Project } from '../../projects/modelos/project';
import { NotificationsStoreService } from '../../projects/notifications-store.service';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numProjects = 0;
  public counterClass = 'tag secondary';
  public notes$;

  constructor(private projectsService: ProjectsService, private notificationsStore: NotificationsStoreService) {}

  ngOnInit() {
    let projects: Project[];

    this.projectsService.getProjectsUrl().subscribe(proyectos => {
      projects = proyectos;
      this.numProjects = proyectos == null ? 0 : projects.length;
    });

    this.notes$ = this.notificationsStore.select$();
  }
}
