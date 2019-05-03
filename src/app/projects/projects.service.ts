import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Project } from './modelos/project';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements Projects {
  constructor(private httpClient: HttpClient) {}

  public getProjectsUrl(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(environment.url).pipe(map(this.mapProjects));
  }

  public saveProjectUrl(project: Project) {
    this.httpClient.post<Project>(environment.url, project);
  }

  public viewProjectUrl(idProject: number): Observable<Project> {
    return this.httpClient.get<Project>(environment.url + '/' + idProject).pipe(map(this.mapProject));
  }

  deleteProjectUrl(idProject: number): Observable<any> {
    return this.httpClient.delete<Project>(environment.url + '/' + idProject);
  }

  private mapProject(p: Project): Project {
    if (p != null) {
      p['id'] = p['_id'];
      delete p['_id'];
    }
    return p;
  }

  private mapProjects(ps: Project[]): Project[] {
    if (ps != null) {
      ps.forEach(p => {
        p.id = p['_id'];
        delete p['_id'];
      });
    }
    return ps;
  }

  // Métodos del Sprint W3

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
