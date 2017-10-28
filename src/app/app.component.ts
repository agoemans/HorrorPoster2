import {Component} from '@angular/core';
import { OnInit } from '@angular/core';

import { MovieDetailComponent } from './movie-detail.component';
import { Movie } from './movie';

import { MovieService } from './movie.service';
//this has to be above @Component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})

export class AppComponent implements OnInit{
  title = 'Horror Movie Poster';
  movies: Movie[] = [];
  selectedMovie = Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().then( (movies: Movie[]) => {
      this.movies = movies;
      this.onGetMovie();
    });

  }

  onGetMovie(): void {
    let random: number = (Math.random() * (this.movies.length - 0) + 0);
    this.selectedMovie =  <any>this.movies[Math.floor(random)];
    console.log(this.selectedMovie);
  };
}
