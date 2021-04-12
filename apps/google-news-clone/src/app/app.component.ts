import { AfterViewInit, Component, HostBinding, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SCREEN_LG_MAX, SCREEN_SM_MAX } from './configs/breakpoints.config';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @HostBinding('class') className = '';
  mode = 'side';
  @ViewChild('sidenav', { static: false })
  sidenav!: MatSidenav;
  isMobile$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_SM_MAX}px)`).pipe(map(breakpoint => breakpoint.matches));
  mdDevice$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_LG_MAX}px)`).pipe(map(breakpoint => breakpoint.matches));

  constructor(private breakpointObserver: BreakpointObserver,
              private overlay: OverlayContainer) {
  }

  ngAfterViewInit(): void {
    // On mobile, we need to close the menu
    this.isMobile$.subscribe(matches => {
      if (matches) {
        this.sidenav.close();
      }
    });
  }

  darkModeActivate(darkMode: boolean) {
    const darkClassName = 'darkMode';
    this.className = darkMode ? darkClassName : '';
    if (darkMode) {
      this.overlay.getContainerElement().classList.add(darkClassName);
    } else {
      this.overlay.getContainerElement().classList.remove(darkClassName);
    }
  }
}
