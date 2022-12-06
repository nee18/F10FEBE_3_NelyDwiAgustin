class AppBar extends HTMLElement {
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <style>
      .clock {
        width: 400px;
        padding: 30px;
        
        color: white;
        font-family: sans-serif;
        
        display: flex;
        flex-direction: column;
        margin: auto;
      }
      .clock .h4 {
        text-align: center;
      }
      
      .clock .time {
        margin: auto;
        font-size: 58px;
      }
      
      .clock .date {
        margin: auto;
        font-size: 18px;
      }
      </style>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" class="nav-link active" href="#">Homepage</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                       <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">LIVE</a></li>
                       <li class="nav-item"><a class="nav-link" aria-current="page" href="#">Untuk Anda</a></li>
                       <li class="nav-item"><a class="nav-link" aria-current="page" href="#">Movie</a></li>
                       <li class="nav-item"><a class="nav-link disabled" aria-current="page" href="#">Movie+</a></li>
                   </ul>
               </div>
        </div>  
      </nav>
      <main>
        <div class="container search mt-4">
            <form class="d-flex" role="search" id="search-bar">
                <input class="form-control me-1" placeholder="Search Movies list" id="search" type="search">
                <button class="btn btn-light" type="submit">Search</button>
            </form>
        </div>
        <nav class="navbar navbar-expand-lg navbar-black">
            <div class="clock">
                <span class="time"></span>
                <span class="date"></span>
            </div>
        </nav>
        <div class="listMovie mt-2 mb-2">
            <div class="container text-center">
                <div class="row align-items-center justify-content-center" id="layout"></div>
            </div>
        </div>
      </main>
      `;
    }
  }
  customElements.define("app-bar", AppBar);