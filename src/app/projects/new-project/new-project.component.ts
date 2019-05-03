import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../modelos/project';
import { NotificationsStoreService } from '../notifications-store.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public project: Project;
  public formGroup: FormGroup;
  public note: String;
  public jsonPipe;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private notificationsStore: NotificationsStoreService
  ) {}

  ngOnInit() {
    this.note = 'Se ha guardado correctamente el proyecto: ';
    this.project = { id: 0, name: ' ' };
    this.buildForm();
  }

  public buildForm() {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(),
      name: new FormControl()
    });
  }

  public saveProject() {
    this.httpClient.post<Project>(environment.url, this.formGroup.value).subscribe(_ => this.router.navigateByUrl('/'));
    this.project = this.formGroup.value;
    this.notificationsStore.dispatch(this.note + this.project.name);
  }
}
