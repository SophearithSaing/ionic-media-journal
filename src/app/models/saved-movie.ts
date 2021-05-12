import { Movie } from './movie';

export interface SavedMovie {
  movie: Movie;
  startDate: string;
  endDate: string;
  network: string;
  rating: number;
}
