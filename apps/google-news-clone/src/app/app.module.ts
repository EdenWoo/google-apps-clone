import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { ForYouComponent } from './pages/for-you/for-you.component';
import { FollowingComponent } from './pages/following/following.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SourceComponent } from './components/source/source.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { HeadlineSimpleComponent } from './components/headline-simple/headline-simple.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NewsExpansionComponent } from './components/news-expansion/news-expansion.component';
import { NewsSubItemComponent } from './components/news-sub-item/news-sub-item.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { HeadlineExpansionComponent } from './components/headline-expansion/headline-expansion.component';
import { LogoTextComponent } from './components/logo-text/logo-text.component';
import { SpotlightItemComponent } from './components/spotlight-item/spotlight-item.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from "@angular/material/tabs";
import { MatDividerModule } from "@angular/material/divider";
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from "@angular/common/http";
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { CovidComponent } from './pages/covid/covid.component';
import { LocalCardComponent } from './components/local-card/local-card.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { NgxTweetModule } from "ngx-tweet";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    TopStoriesComponent,
    ForYouComponent,
    FollowingComponent,
    SourceComponent,
    HeadlineComponent,
    HeadlineSimpleComponent,
    HeaderSearchComponent,
    NewsExpansionComponent,
    NewsSubItemComponent,
    NewsItemComponent,
    HeadlineExpansionComponent,
    LogoTextComponent,
    SpotlightItemComponent,
    CovidComponent,
    TopicCardComponent,
    LocalCardComponent,
    TopNewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDividerModule,
    HttpClientModule,
    AvatarModule,
    NgxTweetModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
