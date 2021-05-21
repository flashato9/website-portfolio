import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DocumentEventsService {
  documentClick$ = fromEvent(document, 'click').pipe(share());
  documentScroll$ = fromEvent(document, 'scroll').pipe(share());
  constructor() {}
}
