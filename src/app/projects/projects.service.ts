import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Project } from './modelos/project';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements Projects {
  constructor() {}

  public saveProject(project: Project) {
    let id = environment.projects.length + 1;

    // tslint:disable-next-line: triple-equals
    while (environment.projects.find(p => p.id == id)) {
      id = id + 1;
    }
    project.id = id;
    environment.projects.push(project);
  }

  public deleteProject(id: number) {
    const indice = environment.projects.indexOf(environment.projects.find(c => c.id === id));
    environment.projects.splice(indice, 1);
  }

  public getNumProjects(): number {
    return environment.projects.length;
  }

  public viewProject(id: number): Project {
    // tslint:disable-next-line: triple-equals
    const project = environment.projects.find(p => p.id == id);
    return project;
  }

  public getProjects(): Project[] {
    return environment.projects;
  }
}
