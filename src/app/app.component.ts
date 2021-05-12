import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Movies', url: '/movies', icon: 'videocam' },
    { title: 'TV Shows', url: '/tv-shows', icon: 'tv' },
    { title: 'Musics', url: '/musics', icon: 'musical-notes' },
    { title: 'Books', url: '/books', icon: 'book' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
