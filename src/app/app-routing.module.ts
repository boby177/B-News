import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

const routes: Routes = [
  {path: '', component: TopHeadingComponent},
  {path: 'tech', component: TechNewsComponent},
  {path: 'sport', component: SportNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
