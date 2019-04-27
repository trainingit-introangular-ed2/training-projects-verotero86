import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../modelos/project';

@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {
  @Input() public projects: Project[];
  @Input() public numProjects = 0;
  @Output() public deleteProject = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
}
