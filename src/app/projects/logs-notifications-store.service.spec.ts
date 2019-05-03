import { TestBed } from '@angular/core/testing';

import { LogsNotificationsStoreService } from './logs-notifications-store.service';

describe('LogsNotificationsStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogsNotificationsStoreService = TestBed.get(LogsNotificationsStoreService);
    expect(service).toBeTruthy();
  });
});
