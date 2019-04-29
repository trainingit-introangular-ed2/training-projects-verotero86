import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer-project-form',
  templateUrl: './viewer-project-form.component.html',
  styleUrls: ['./viewer-project-form.component.css']
})
export class ViewerProjectFormComponent implements OnInit {
  @Input() name: string;
  constructor() {}

  ngOnInit() {}
}
