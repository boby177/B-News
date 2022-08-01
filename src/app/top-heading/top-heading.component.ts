import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _services:NewsApiService) { }

  // display data
  topHeadingDisplay: any = []

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles
    })
  }

}
