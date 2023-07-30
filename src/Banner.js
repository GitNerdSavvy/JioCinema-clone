import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './request';
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // Math.floor(Math.random() * request.data.results.length -1)
      return request;
    }
    fetchData();
  }, []);

 

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "left left"
      }}
    >
      <div className="banner_contents">
      
        <h1 className="banner_title">
         {movie?.title || movie?.name}
        </h1>
          <div className="genres">
            {movie?.overview}
          </div>

       <div>
       <button className="banner_button_watch">Watch</button>

       </div>
       
      </div>

      <div className="banner--fadeBottom" />
      {/* <ul>
        <li class="Bullet"></li>
        <li class="Bullet"></li>
        <li class="Bullet"></li>
        <li class="Bullet"></li>
        <li class="Bullet"></li>
        <li class="Bullet"></li>

      </ul> */}
    </header>

  )
}

export default Banner
