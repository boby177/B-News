import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsApiService } from './service/news-api.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechNewsComponent,
    SportNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [NewsApiService, TechNewsComponent, SportNewsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
