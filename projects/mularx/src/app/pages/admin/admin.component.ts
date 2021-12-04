import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { of, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { CurrentNode, NavigationNode, NavigationService } from '../../core/navigation';

@Component({
  selector: 'mrx-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  @ViewChild('sidenav', { static: true })
  sidenav: MatSidenav;

  private sideBySideWidth = 768;

  isDisableClose = true;
  isSideBySide = false;
  sideNavNodes: NavigationNode[];
  currentNode: CurrentNode = {
    url: '',
    view: '',
    nodes: []
  };

  get mode() {
    return this.isSideBySide ? 'side' : 'over';
  }

  constructor(
    private navService: NavigationService,
    public breakpoint$: BreakpointObserver,
  ) {
  }

  ngOnInit() {
    this.navService.sidenavViews = of({
      sidenav: this.sidenav
    });
    this.navService.navigationViews = of({
      sidenav: this.navService.getAdminSidenav(),
      topMenu: this.navService.getMainNav(),
    });
    this.navService.navigationViews.pipe(
      takeUntil(this.destroy$),
      filter((item) => !!item['sidenav']),
      map((item) => item.sidenav),
    ).subscribe((nodes) => {
      this.sideNavNodes = nodes;
    });
    this.breakpoint$.observe(`(min-width: ${this.sideBySideWidth}px)`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        if (state.matches) { // when >= 768px
          this.sidenav.open();
          this.isSideBySide = true;
          this.isDisableClose = true;
        } else {
          this.sidenav.close();
          this.isDisableClose = false;
          this.isSideBySide = false;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
