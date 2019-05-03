import { Component, OnInit } from '@angular/core';
import { LogsNotificationsStoreService } from '../../../projects/logs-notifications-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public notes$;

  constructor(private logsNotificationsStore: LogsNotificationsStoreService) {}

  ngOnInit() {
    this.notes$ = this.logsNotificationsStore.select$();
  }
}
