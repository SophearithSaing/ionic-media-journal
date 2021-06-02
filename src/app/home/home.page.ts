import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { SavedMovie } from '../models/saved-movie';
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
  movieIndex: number = null;
  savingMovie = false;
  selectedMovie: Movie;
  startDate = null;
  endDate = null;

  constructor(public movieTv: MovieTvService) { }

  ngOnInit() {
    this.movieTv.searchMovies('interstellar').subscribe(res => {
      this.results = res.results;
      this.loading = false;
    });
  }

  search = () => {
    this.loading = true;
    this.movieTv.searchMovies(this.query).subscribe(res => {
      this.results = res.results;
      this.loading = false;
    });
  };

  toggleSelected = (index: number) => {
    if (this.movieIndex === index) {
      this.movieIndex = null;
    } else {
      this.movieIndex = index;
    }
  };

  toggleForm = (index = -1) => {
    if (index > -1) {
      this.selectedMovie = this.results[index];
    }
    this.savingMovie = !this.savingMovie;
    this.movieIndex = null;
  };

  saveMovie = () => {
    console.log(this.startDate, this.endDate);
    const movie: SavedMovie = {
      movie: this.selectedMovie,
      startDate: this.movieTv.formatDate(this.startDate),
      endDate: this.movieTv.formatDate(this.endDate),
      network: null,
      rating: null
    };
    this.movieTv.saveMovie(movie);
  };
}
