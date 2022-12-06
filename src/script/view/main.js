import "../component/app-bar.js";
import "../component/data-item.js";
import "../component/footer.js";
import "../data/data-source.js";

import showMoviesList from "../component/data-item.js";

const baseUrl = "https://api.themoviedb.org/3";
const API = "api_key=769dc8da626075aca29af610af3d99ec";

const main = () => {
  const searchBar = document.getElementById("search-bar");

  const renderResult = async (searchKeyword) => {
    const rsl = await fetch(`${baseUrl}/search/movie?${API}&language=en-US&query=${searchKeyword}`);

    const movies = rsl.json();
    return movies;
  }

  const submitKey = (req) => {return document.querySelector("#search").value};
  searchBar.addEventListener("submit", async (req) => { req.preventDefault();
    const { results } = await renderResult(submitKey(req));
    return showMoviesList(results);
  });
};

export default main;