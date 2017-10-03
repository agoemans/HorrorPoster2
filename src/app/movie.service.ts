import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { MOVIES } from './movies';

@Injectable()
export class MovieService {
  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }
}
