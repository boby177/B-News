import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {

  constructor(private _services:NewsApiService) { }

  sportNewsDisplay: any = []

  ngOnInit(): void {

    this._services.sportNews().subscribe((result) => {
      this.sportNewsDisplay = result.articles
    })
  }
}
