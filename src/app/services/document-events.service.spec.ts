import { TestBed } from '@angular/core/testing';

import { DocumentEventsService } from './document-events.service';

describe('DocumentEventsService', () => {
  let service: DocumentEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
