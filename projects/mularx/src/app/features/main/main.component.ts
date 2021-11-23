import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { merge, of, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { CurrentNode, NavigationService } from '../../core/navigation';

@Component({
  selector: 'mrx-authen',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  @ViewChild('sidenav', { static: true })
  sidenav: MatSidenav;

  private sideBySideWidth = 768;

  sideNavNodes: any;
  currentNode: CurrentNode = {
    url: '',
    view: '',
    nodes: []
  };

  constructor(
    private navService: NavigationService,
    public breakpoint$: BreakpointObserver,
  ) {
  }

  ngOnInit() {
    this.navService.sidenavViews = merge(this.navService.sidenavViews, of({
      sidenav: this.sidenav,
    }));
    this.navService.navigationViews = of({
      sidenav: this.navService.getMainSidenav(),
    });
    this.navService.navigationViews = merge(this.navService.navigationViews, of({
      topMenu: this.navService.getMainNav(),
    }));
    this.navService.navigationViews.pipe(
      takeUntil(this.destroy$),
      filter((item) => !!item['sidenav']),
      map(item => item.sidenav)
    ).subscribe((nodes) => {
      this.sideNavNodes = nodes;
    });
    this.breakpoint$.observe(`(min-width: ${this.sideBySideWidth}px)`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        if (state.matches) {
          this.sidenav.close();
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
