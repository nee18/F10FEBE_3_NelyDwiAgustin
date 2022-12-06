const UrlIMG = "https://image.tmdb.org/t/p/w1280/";

const moviesId = document.getElementById("layout");

const showMoviesList = (data) => {
  moviesId.innerHTML = "";
  
  const ColorRating = (Rating) => {
    if (Rating >= 8.4) {
      return "text-primary";
    } else if (Rating >= 7.4) {
      return "text-success";
    } else if (Rating >= 6.4) {
      return "text-warning";
    } else {
      return "text-danger";
    }
  };

  data.forEach((moviesList) => {
    const { poster_path, original_title, vote_average, overview } = moviesList;
    const movieId = document.createElement("div");
    movieId.classList.add("col-xl-3", "col-lg-4", "col-md-6", "col-sm-12");
    movieId.innerHTML = `
        <style>
        .card {
            cursor: pointer;
            height: 600px;
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
            background-color: white;
            border-radius: 12px;
            margin-bottom: 50px;
        }

        .card-film img {
            height:400px;
            border-radius: 12px 12px 0 0;
        }
        
        .card-film img:hover {
            opacity: 0.7;
        }

        .data-info {
            margin-top:15px;
            font-weight: lighter;
            font-size:14px;
            padding: 0px 15px;
        }
        
        .data-info > h3 {
            font-weight: bold;
            font-size:17px;
            height:30px;
        }
        
        .data-info > p {
            font-size:12px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
        }
        </style>

        <div class="col mb-4">
          <div class="card card-film">
            <img src="${UrlIMG + poster_path}" class="card-img-top w-100" alt="Empty">
            <div class="row data-info">
              <h3>${original_title}</h3>
                <p class="card-text">Rating: <span class="${ColorRating(vote_average)}">${vote_average}</span></p>
            </div>
            <div class="row data-info">
                <p class="col-12 card-title">${overview}</p>
            </div>
          </div>
        </div>
        `;
    moviesId.appendChild(movieId);
  });
};

export default showMoviesList;