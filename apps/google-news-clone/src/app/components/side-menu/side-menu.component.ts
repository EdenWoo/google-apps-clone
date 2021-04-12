import {Component} from '@angular/core';
import {SCREEN_SM_MAX} from '../../configs/breakpoints.config';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';

interface Nav {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  navs: Nav[] = [
    {name: 'Top Stories', link: 'top-stories', icon: 'public'},
    {name: 'For you', link: 'for-you', icon: 'person_outline'},
    {name: 'Following', link: 'following', icon: 'star_border'},
    {name: 'Saved searched', link: 'saved-search', icon: 'search'},
    {name: 'Covid-19', link: 'covid-19', icon: 'shield'},
  ];

  isMobile$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_SM_MAX}px)`).pipe(map(breakpoint => breakpoint.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
