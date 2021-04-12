import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopStoriesComponent} from './pages/top-stories/top-stories.component';
import {FollowingComponent} from './pages/following/following.component';
import {ForYouComponent} from './pages/for-you/for-you.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'top-stories',
    pathMatch: 'full'
  },
  {
    path: 'top-stories',
    component: TopStoriesComponent,
  },
  {
    path: 'for-you',
    component: ForYouComponent,
  },
  {
    path: 'following',
    component: FollowingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
