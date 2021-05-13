import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Profile', url: '/profile', icon: 'person' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Movies', url: '/movies', icon: 'videocam' },
    { title: 'TV Shows', url: '/tv-shows', icon: 'tv' },
    { title: 'Musics', url: '/musics', icon: 'musical-notes' },
    { title: 'Books', url: '/books', icon: 'book' },
  ];

  constructor(public auth: AuthService) {}
}
