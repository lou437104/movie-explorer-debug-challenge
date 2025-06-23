const search = document.getElementById('search');
const clearBtn = document.querySelector('#Clear');
const input = document.querySelector('#movie');
const output = document.querySelector("#output");

const API_KEY = "YOUR_API_KEY_HERE";

search.addEventListener("click", () => {
  const query = input.value;
  if (query == "") {
    alert("Enter a title");
    return;
  }

  output.innerHTML = "<p>Loading...</p>"

  fetch(`https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`)
    .then(res => res.json()) // <-- Fixed: use .json() as a method
    .then(data => {
      if (data.Response === "False") {
        output.innerText = "Movie not found.";
        return;
      }

      const movieCard = `
        <div class="movie-card">
          <h2>${data.Title.toUpperCase()}</h2>
          <img src="${data.Poster}" alt="Movie Poster of : ${data.Title}">
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Rating:</strong> ${data.imdbRating}</p>
        </div>
      `;

      output.insertAdjacentHTML("beforeend", movieCard);
    })
    .catch(err => {
      output.innerHTML = "<p>Something went wrong</p>";
    })
});

clearBtn.onclick = function() {
  output.innerHTML = "";
}
<!-- Example structure for index.html -->
<div class="container">
  <h1>Movie Explorer</h1>
  <div class="search-bar">
    <input type="text" id="movie" placeholder="Enter movie title..." />
    <button id="search">Search</button>
    <button id="Clear">Clear</button>
  </div>
  <div id="output"></div>
</div>
