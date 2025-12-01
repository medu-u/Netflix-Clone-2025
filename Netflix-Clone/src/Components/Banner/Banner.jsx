import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Utils/axios";
import requests from "../../Utils/request";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;
// “In my Banner component, I first import axios and a list of API URLs. When the component loads, useEffect runs an API request to get Netflix Original shows. I use axios.get() to fetch the data, and then randomly pick one show from the results. This selected movie is saved in the movie state.

// Then I use that movie’s backdrop_path to set the banner background image. I also display the movie title, two buttons, and a truncated version of the movie description. All styling is done through CSS. This makes the banner change dynamically every time the page loads, just like Netflix.