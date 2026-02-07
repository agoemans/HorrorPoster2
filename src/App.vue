<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Movie } from './types/movie';
import { MOVIES } from './data/movies';
import type { PosterFormatType } from './types/posterFormat';
import { POSTER_FORMATS } from './types/posterFormat';

const title = 'Horror Movie Poster';
const movies = ref<Movie[]>([]);
const selectedMovie = ref<Movie | null>(null);
const selectedFormat = ref<PosterFormatType>('omen');
const selectedImage = ref<string>('');

const images = [
  '/src/assets/images/image-1.png',
  '/src/assets/images/image-2.png',
  '/src/assets/images/image-3.png',
  '/src/assets/images/image-4.png'
];

const getRandomMovie = (): void => {
  if (movies.value.length === 0) return;
  const randomIndex = Math.floor(Math.random() * movies.value.length);
  selectedMovie.value = movies.value[randomIndex] ?? null;
  
  // Also pick a random poster format
  const randomFormatIndex = Math.floor(Math.random() * POSTER_FORMATS.length);
  selectedFormat.value = POSTER_FORMATS[randomFormatIndex].type;
  
  // Pick a random image
  const randomImageIndex = Math.floor(Math.random() * images.length);
  selectedImage.value = images[randomImageIndex];
};

onMounted(() => {
  movies.value = MOVIES;
  getRandomMovie();
});
</script>

<template>
  <div class="header">
    <div class="btnStyle" @click="getRandomMovie">Get me a movie!</div>
  </div>
  <hr>
  
  <!-- Format 1: The Omen - Minimal Symbol Horror -->
  <div v-if="selectedMovie && selectedFormat === 'omen'" class="poster-omen">
    <div class="omen-symbol">👁</div>
    <div class="omen-content">
      <h5 class="omen-tagline">{{ selectedMovie.tagLine }}</h5>
      <h1 class="omen-title">{{ selectedMovie.title }}</h1>
      <div class="omen-credits">
        <p>{{ selectedMovie.mainStar }}</p>
        <p>{{ selectedMovie.coStar }}</p>
        <p class="omen-year">{{ selectedMovie.year }}</p>
      </div>
    </div>
  </div>

  <!-- Format 2: The Face - Character-Centric Terror -->
  <div v-if="selectedMovie && selectedFormat === 'face'" class="poster-face">
    <div class="face-image" :style="{ backgroundImage: `url(${selectedImage})` }"></div>
    <div class="face-overlay">
      <h2 class="face-star">{{ selectedMovie.mainStar }}</h2>
      <h5 class="face-tagline">{{ selectedMovie.tagLine }}</h5>
      <h1 class="face-title">{{ selectedMovie.title }}</h1>
      <div class="face-credits">
        <p>{{ selectedMovie.coStar }}</p>
        <p class="face-year">{{ selectedMovie.year }}</p>
      </div>
    </div>
  </div>

  <!-- Format 3: The Corridor - Environmental Horror -->
  <div v-if="selectedMovie && selectedFormat === 'corridor'" class="poster-corridor">
    <div class="corridor-image" :style="{ backgroundImage: `url(${selectedImage})` }"></div>
    <h1 class="corridor-title">{{ selectedMovie.title }}</h1>
    <h5 class="corridor-tagline">{{ selectedMovie.tagLine }}</h5>
    <div class="corridor-credits">
      <p>{{ selectedMovie.mainStar }}</p>
      <p>{{ selectedMovie.coStar }}</p>
      <p class="corridor-year">{{ selectedMovie.year }}</p>
    </div>
  </div>

  <!-- Format 4: The Chaos - Aggressive Modern Horror -->
  <div v-if="selectedMovie && selectedFormat === 'chaos'" class="poster-chaos">
    <div class="chaos-image" :style="{ backgroundImage: `url(${selectedImage})` }"></div>
    <h1 class="chaos-title">{{ selectedMovie.title }}</h1>
    <h5 class="chaos-tagline">{{ selectedMovie.tagLine }}</h5>
    <div class="chaos-credits">
      <h2 class="chaos-star">{{ selectedMovie.mainStar }}</h2>
      <p>{{ selectedMovie.coStar }}</p>
      <p class="chaos-year">{{ selectedMovie.year }}</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Paytone+One|Roboto|Roboto+Condensed|Cinzel|Creepster');

/* Common styles */
.header {
  background: #000;
  padding: 15px 0;
  text-align: center;
}

div {
  text-align: center;
}

hr {
  overflow: visible;
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
  margin: 0;
}

.btnStyle {
  width: 200px;
  padding: 12px 20px;
  margin: 0 auto;
  color: #fff;
  background-color: #cc0000;
  border: 0 none;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btnStyle:hover {
  background-color: #ff0000;
}

/* Format 1: The Omen - Minimal Symbol Horror */
.poster-omen {
  background: linear-gradient(135deg, #1a0000 0%, #000000 100%);
  height: calc(100vh - 60px);
  padding: 40px;
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  filter: contrast(1.1);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.poster-omen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px);
  opacity: 0.3;
  pointer-events: none;
}

.omen-symbol {
  font-size: 100px;
  margin: 20px 0;
  opacity: 0.85;
  color: #8b0000;
  text-shadow: 0 0 30px rgba(139, 0, 0, 0.5);
}

.omen-content {
  margin-top: 40px;
}

.omen-tagline {
  font-family: 'Cinzel', serif;
  font-size: 14px;
  letter-spacing: 3px;
  color: #999;
  text-transform: uppercase;
  margin: 20px 0;
  font-weight: 300;
}

.omen-title {
  font-family: 'Cinzel', serif;
  font-size: 60px;
  letter-spacing: 20px;
  color: #fff;
  margin: 30px 0;
  font-weight: 300;
  text-transform: uppercase;
}

.omen-credits {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 10px;
  color: #666;
  margin-top: 50px;
  line-height: 1.8;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 300;
}

.omen-credits p {
  margin: 5px 0;
}

.omen-year {
  margin-top: 15px;
  color: #444;
  font-size: 10px;
  letter-spacing: 2px;
}

/* Format 2: The Face - Character-Centric Terror */
.poster-face {
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 60px);
  overflow: hidden;
  box-sizing: border-box;
}

.face-image {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: grayscale(50%) contrast(1.4) brightness(0.9);
}

.face-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, transparent 30%, rgba(0,0,0,0.4) 100%);
  mix-blend-mode: multiply;
}

.face-overlay {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 30px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
}

.face-star {
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-weight: 300;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.9);
}

.face-tagline {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  color: #ddd;
  letter-spacing: 2px;
  margin: 20px 0;
  opacity: 0.9;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.9);
}

.face-title {
  font-family: 'Creepster', cursive;
  font-size: 70px;
  color: #ff0000;
  margin: 20px 0;
  text-shadow: 3px 3px 15px rgba(0,0,0,0.9);
  mix-blend-mode: screen;
}

.face-credits {
  font-family: 'Georgia', serif;
  font-size: 13px;
  color: #ccc;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.face-credits p {
  margin: 5px 0;
}

.face-year {
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: 3px;
}

/* Format 3: The Corridor - Environmental Horror */
.poster-corridor {
  background: linear-gradient(to bottom, #2c3e50 0%, #1a1a1a 100%);
  height: calc(100vh - 60px);
  padding: 30px;
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  box-shadow: inset 0 0 100px rgba(0,0,0,0.7);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.corridor-image {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 280px;
  width: 100%;
  margin: 15px 0;
  filter: grayscale(80%) brightness(0.6);
  box-shadow: 0 10px 40px rgba(0,0,0,0.8);
}

.corridor-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 55px;
  color: #f0f0f0;
  margin: 20px 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 12px;
  font-weight: 700;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.9);
}

.corridor-tagline {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #aaa;
  letter-spacing: 2px;
  margin: 20px 0;
  font-style: italic;
  font-weight: 300;
}

.corridor-credits {
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  color: #888;
  margin-top: 40px;
  line-height: 2.2;
  font-weight: 300;
  letter-spacing: 6px;
  text-transform: uppercase;
}

.corridor-credits p {
  margin: 8px 0;
}

.corridor-year {
  margin-top: 15px;
  font-size: 13px;
  letter-spacing: 4px;
  color: #666;
}

/* Format 4: The Chaos - Aggressive Modern Horror */
.poster-chaos {
  background: #000;
  height: calc(100vh - 60px);
  padding: 25px;
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.chaos-image {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 320px;
  width: 110%;
  margin: 0 -5%;
  transform: rotate(-1deg) skew(-1deg);
  filter: hue-rotate(320deg) saturate(2) contrast(1.4);
  box-shadow: 0 0 50px rgba(255,0,0,0.5);
}

@keyframes glitch {
  0%, 100% {
    transform: rotate(-1deg) skew(-1deg);
  }
  33% {
    transform: rotate(1deg) skew(1deg) translateX(2px);
  }
  66% {
    transform: rotate(-0.5deg) skew(-0.5deg) translateX(-2px);
  }
}

.chaos-title {
  font-family: 'Impact', sans-serif;
  font-size: 55px;
  color: #ff0000;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 6px;
  transform: rotate(-2deg);
  text-shadow: 3px 3px 0 #000, -3px -3px 0 #fff, 3px -3px 0 #000, -3px 3px 0 #fff;
  filter: contrast(2);
}

.chaos-tagline {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #fff;
  letter-spacing: 1px;
  margin: 20px 0;
  transform: rotate(1deg);
  text-transform: uppercase;
  background: rgba(255,0,0,0.2);
  padding: 10px;
  border: 2px solid #ff0000;
}

.chaos-credits {
  font-family: 'Roboto', sans-serif;
  margin-top: 30px;
}

.chaos-star {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
  transform: rotate(-1deg);
  margin: 15px 0;
}

.chaos-credits p {
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #999;
  margin: 8px 0;
  line-height: 1.6;
  transform: translateY(0);
  animation: chaos-text 4s infinite;
}

@keyframes chaos-text {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-1px); }
  50% { transform: translateY(1px); }
  75% { transform: translateY(-0.5px); }
}

.chaos-year {
  margin-top: 15px;
  font-size: 16px;
  letter-spacing: 5px;
  color: #ff0000;
  font-weight: bold;
}

/* Responsive Design - Mobile and Tablet */
@media (max-width: 768px) {
  .poster-omen,
  .poster-face,
  .poster-corridor,
  .poster-chaos {
    max-width: 100%;
    min-height: auto;
  }

  .poster-omen {
    padding: 40px 20px;
    min-height: 500px;
  }

  .omen-symbol {
    font-size: 80px;
    margin: 20px 0;
  }

  .omen-title {
    font-size: 40px;
    letter-spacing: 10px;
  }

  .omen-tagline {
    font-size: 12px;
    letter-spacing: 2px;
  }

  .poster-face {
    height: 600px;
  }

  .face-overlay {
    padding: 30px 20px;
  }

  .face-star {
    font-size: 20px;
    letter-spacing: 4px;
  }

  .face-title {
    font-size: 50px;
  }

  .face-tagline {
    font-size: 14px;
  }

  .poster-corridor {
    padding: 30px 20px;
    min-height: 600px;
  }

  .corridor-image {
    height: 250px;
  }

  .corridor-title {
    font-size: 45px;
    letter-spacing: 8px;
  }

  .corridor-tagline {
    font-size: 14px;
  }

  .corridor-credits {
    letter-spacing: 4px;
    font-size: 10px;
  }

  .poster-chaos {
    padding: 20px;
    min-height: 600px;
  }

  .chaos-image {
    height: 300px;
    width: 100%;
    margin: 0;
  }

  .chaos-title {
    font-size: 45px;
    letter-spacing: 4px;
  }

  .chaos-tagline {
    font-size: 12px;
  }

  .chaos-star {
    font-size: 18px;
    letter-spacing: 4px;
  }
}

@media (max-width: 480px) {
  .omen-title {
    font-size: 32px;
    letter-spacing: 6px;
  }

  .omen-symbol {
    font-size: 60px;
  }

  .face-title {
    font-size: 40px;
  }

  .face-star {
    font-size: 18px;
  }

  .corridor-title {
    font-size: 35px;
    letter-spacing: 5px;
  }

  .corridor-image {
    height: 200px;
  }

  .chaos-title {
    font-size: 35px;
    letter-spacing: 3px;
  }

  .chaos-image {
    height: 250px;
  }

  .btnStyle {
    width: 160px;
    font-size: 16px;
    padding: 10px 15px;
  }
}
</style>
