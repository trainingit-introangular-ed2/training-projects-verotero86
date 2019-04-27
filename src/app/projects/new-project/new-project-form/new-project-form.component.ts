import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../modelos/project';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Input() public projects: Project[];
  @Input() public project: Project;
  @Input() public numProjects: number;
  @Input() public projectId: number;
  @Output() public saveProject = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
