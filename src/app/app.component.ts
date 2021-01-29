import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { AdItem } from './models/ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-component';

  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }
}
