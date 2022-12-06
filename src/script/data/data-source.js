import axios from "axios";

import showMoviesList from "../component/data-item";

const baseUrl = "https://api.themoviedb.org/3";
const API = "api_key=769dc8da626075aca29af610af3d99ec";
const UrlAPI = `${baseUrl}/discover/movie?sort_by=revenue.desc&${API}`;

const DataSource = (req) => {
  axios.get(UrlAPI)
  .then((res) => {
    req = res.data.results;
    return showMoviesList(req);
  });
};

export default DataSource(UrlAPI);