import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieTvService } from '../services/movie-tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  results: Movie[] = [];
  query = '';
  loading = false;
  index = null;

  constructor(public movieTv: MovieTvService) { }

  ngOnInit() {
  }

  search = () => {
    this.loading = true;
    this.movieTv.searchMovies(this.query).subscribe(res => {
      this.results = res.results;
      this.loading = false;
    });
  };

  toggleSelected = (i: number) => {
    if (this.index === i) {
      this.index = null;
    } else {
      this.index = i;
    }
  };
}
