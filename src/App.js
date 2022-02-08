import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="movie-list">
        <MovieList movies={ movies } />
      </main>
    </div>
  );
}

export default App;
