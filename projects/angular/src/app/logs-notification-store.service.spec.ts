import { TestBed } from '@angular/core/testing';

import { LogsNotificationStoreService } from './logs-notification-store.service';

describe('LogsNotificationStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogsNotificationStoreService = TestBed.get(LogsNotificationStoreService);
    expect(service).toBeTruthy();
  });
});
