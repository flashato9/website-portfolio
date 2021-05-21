import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentEventsService } from './../../services/document-events.service';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit, OnDestroy {
  @Input() navUnderlineColor: string = 'white';
  public mobileWidthReached$: Observable<boolean>;
  private navOpenBool: boolean = false;
  private sub: Subscription;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public documentsEvents: DocumentEventsService,
    public cdr: ChangeDetectorRef
  ) {
    this.mobileWidthReached$ = this.breakpointObserver
      .observe(['(max-width:500px)'])
      .pipe(map((result) => result.matches));

    this.sub = this.documentsEvents.documentClick$.subscribe((event) => {
      setTimeout(() => (this.navOpenBool = false), 0);
    });
    this.sub.add(
      this.documentsEvents.documentScroll$.subscribe((event) => {
        setTimeout(() => (this.navOpenBool = false), 0);
      })
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {}
  toggleNavMenu(event: Event) {
    this.navOpenBool = !this.navOpenBool;
    // event.stopPropagation();
  }

  get navOpen() {
    return this.navOpenBool;
  }
  @HostListener('click', ['$event']) navMenu(event: Event) {
    event.stopPropagation();
  }
}
