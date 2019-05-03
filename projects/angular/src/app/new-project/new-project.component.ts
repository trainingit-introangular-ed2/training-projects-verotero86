import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Project } from '../modelos/project';
import { NotificationsStoreService } from '../notifications-store.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  public note: String = 'Se ha guardado el proyecto: ';
  public project: Project;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private notificationsStore: NotificationsStoreService
  ) {}

  projectForm = this.fb.group({
    id: null,
    name: [null, Validators.required]
  });

  onSubmit() {
    this.httpClient.post<Project>(environment.url, this.projectForm.value).subscribe(_ => this.router.navigateByUrl('/'));
    this.project = this.projectForm.value;
    this.notificationsStore.dispatch(this.note + this.project.name);
  }
}
