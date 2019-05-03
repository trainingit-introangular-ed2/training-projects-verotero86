import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() public numProjects = 0;
  @Input() public counterClass = 'tag secondary';
  @Input() public notes = '';
  constructor() {}

  ngOnInit() {}
}
