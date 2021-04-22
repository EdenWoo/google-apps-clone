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
    {name: 'New Zealand', link: 'new-zealand', icon: 'flag'},
    {name: 'World', link: 'world', icon: 'public'},
    {name: 'Your local news', link: 'local-news', icon: 'location_on'},
    {name: 'Business', link: 'business', icon: 'business'},
    {name: 'Technology', link: 'technology', icon: 'memory'},
    {name: 'Entertainment', link: 'entertainment', icon: 'theaters'},
    {name: 'Sports', link: 'sports', icon: 'directions_bike'},
    {name: 'Science', link: 'science', icon: 'science'},
    {name: 'Health', link: 'health', icon: 'health_and_safety'},
  ];

  isMobile$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_SM_MAX}px)`).pipe(map(breakpoint => breakpoint.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
