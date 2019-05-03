import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Project } from './modelos/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
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
}
