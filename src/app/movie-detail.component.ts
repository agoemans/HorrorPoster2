import { Component } from '@angular/core';
import { Movie } from './movie';
//import component to use as component

// const MOVIES: Movie[] = [
//   //title, date, dir, main star, co star, writer, rating, release date
//   { title: 'It comes at Night', year: '2017', director: 'Trey Edward Shuits' },
//   { title: 'Totem', year: '2015', director: 'Ramon Llamas' }
// ];

@Component({
  selector: 'movie-detail',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MovieDetailComponent {
  movies = [];
  movie: Movie = {
    title: this.movies[0].title,
    year: this.movies[0].year,
    director: this.movies[0].director,
    mainStar: this.movies[0].mainStar,
    coStar: this.movies[0].coStar,
    tagLine: this.movies[0].tagLine
  };
}
