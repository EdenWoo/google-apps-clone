import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {SCREEN_LG_MAX, SCREEN_MD_MAX, SCREEN_SM_MAX} from './configs/breakpoints.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  mode = 'side';
  @ViewChild('sidenav', {static: false})
  sidenav!: MatSidenav;
  isMobile$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_SM_MAX}px)`).pipe(map(breakpoint => breakpoint.matches));
  mdDevice$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_LG_MAX}px)`).pipe(map(breakpoint => breakpoint.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngAfterViewInit(): void {
    // On mobile, we need to close the menu
    this.isMobile$.subscribe(matches => {
      if (matches) {
        this.sidenav.close();
      }
    });
  }

  ngOnInit(): void {
  }

}
