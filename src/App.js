import React from 'react';
import './App.css';
import requests from './request';
import Nav from './Nav';
import Row from './Row';
import Banner from './Banner';
import Footer from './footer';
import Footer2 from './Footer2';

function App() {
  return (
    <div className="App">
     <Nav />
     <Banner />
     <Row title="Hot Right Now 🔥"  fetchUrl={requests.fetchTrending} />
			<Row title="Most Watched This Week" isLargeRow fetchUrl={requests.fetchActionMovies} />
			<Row title="Explosive Action 🌟"isLargeRow fetchUrl={requests.fetchTopRated} />
			<Row title="Top 150 Hindi Blockbusters"isLargeRow fetchUrl={requests.fetchCommedyMovies} /> 
			<Row title="Coming Soon🍿"isLargeRow fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Popular Horror Movies" isLargeRow fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Popular Hollywood Shows" isLargeRow fetchUrl={requests.fetchDocumentries} />
       <Row title="Hot On Peacock" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="International Shows in Hindi" isLargeRow fetchUrl={requests.fetchTrending} />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
