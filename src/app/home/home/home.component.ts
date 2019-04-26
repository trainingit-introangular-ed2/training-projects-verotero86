import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numProjects = 0;
  public counterClass = 'tag secondary';

  constructor() {
    const projects = environment.projects;
    this.numProjects = projects.length;
  }

  ngOnInit() {}
}
