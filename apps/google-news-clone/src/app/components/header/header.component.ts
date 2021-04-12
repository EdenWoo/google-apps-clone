import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SCREEN_SM_MAX} from '../../configs/breakpoints.config';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  isMobile$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_SM_MAX}px)`).pipe(map(breakpoint => breakpoint.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
  }

}
