import { Injectable } from '@angular/core';
import { HeroJobAdComponent } from 'src/app/components/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from 'src/app/components/hero-profile/hero-profile.component';
import { AdItem } from 'src/app/models/ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}
