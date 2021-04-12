import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SCREEN_SM_MAX } from '../../configs/breakpoints.config';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  @Input() sidenav: MatSidenav;

  isMobile$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_SM_MAX}px)`).pipe(map(breakpoint => breakpoint.matches));

  constructor(private breakpointObserver: BreakpointObserver, private overlay: OverlayContainer) {
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

}
