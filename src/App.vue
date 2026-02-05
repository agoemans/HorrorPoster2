<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Movie } from './types/movie';
import { MOVIES } from './data/movies';

const title = 'Horror Movie Poster';
const movies = ref<Movie[]>([]);
const selectedMovie = ref<Movie | null>(null);

const getRandomMovie = (): void => {
  if (movies.value.length === 0) return;
  const randomIndex = Math.floor(Math.random() * movies.value.length);
  selectedMovie.value = movies.value[randomIndex] ?? null;
};

onMounted(() => {
  movies.value = MOVIES;
  getRandomMovie();
});
</script>

<template>
  <div>
    <h1 class="mainTitle">{{ title }}</h1>
  </div>

  <div class="btnStyle" @click="getRandomMovie">Get me a movie!</div>
  <hr>
  <div v-if="selectedMovie">
    <div>
      <h2>{{ selectedMovie.mainStar }}</h2>
    </div>
    <div class="posterImg"></div>
    <div class="posterBody">
      <h5>{{ selectedMovie.tagLine }}</h5>
      <h1 class="movieTitle">{{ selectedMovie.title }}</h1>
      <h3 class="coStar">{{ selectedMovie.coStar }}</h3>
      <h3>{{ selectedMovie.year }}</h3>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Paytone+One|Roboto|Roboto+Condensed');

h1 {
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-variant: all-small-caps;
  font-size: 40px;
  font-stretch: semi-condensed;
  letter-spacing: 10px;
}

h4 {
  font-variant: all-small-caps;
  font-stretch: condensed;
  margin: auto;
}

h5 {
  font-variant: all-small-caps;
  font-stretch: condensed;
  font-size: 20px;
  letter-spacing: 2px;
  margin: auto;
}

div {
  text-align: center;
}

hr.style-eight {
  overflow: visible;
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
}

hr.style-eight:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: white;
}

.mainTitle {
  font-family: 'Paytone One', sans-serif;
  font-size: 30px;
  letter-spacing: 10px;
}

.movieTitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-variant: all-petite-caps;
  font-size: 100px;
  font-stretch: ultra-expanded;
  margin: auto;
}

.posterBody {
  font-family: 'Roboto Condensed', sans-serif;
  position: relative;
  bottom: 10px;
  text-align: center;
  width: 100%;
  padding-top: 40px;
}

.coStar {
  font-family: 'Open Sans Condensed', sans-serif;
  font-variant: all-small-caps;
  font-size: 26px;
  font-stretch: ultra-condensed;
  margin: 0;
}

.posterImg {
  background: url(https://placecats.com/400/400) no-repeat left center;
  padding: 5px 0 5px 25px;
  height: 400px;
  width: 400px;
  position: relative;
  margin: auto;
}

.btnStyle {
  width: 200px;
  padding: 10px 15px;
  margin: 20px auto;
  color: #FFFDFD;
  background-color: #555;
  border: 0 none;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
}
</style>
