const search = document.getElementById('search');
const clearBtn = document.querySelector('#Clear');
const input = document.querySelector('#movie')
const output = document.querySelector("output");

const API_KEY = "YOUR_API_KEY_HERE";

search.addEventListener("click", () => {
  const query = input.value;
  if (query == "") {
    alert("Enter a title");
    return;
  }

  output.innerHTML = "<p>Loading...</p>"

  fetch(`https://omdbapi.com/?t=${query}&apikey=${API_KEY}`)
    .then(res => res.json)
    .then(data => {
      if (data.Response = "False") {
        output.innerText = "Movie not found.";
        return;
      }

      const movieCard = `
        <div class="movie-card">
          <h2>${data.Title.toUpper()}</h2>
          <img src="${data.Poster}" alt="Movie Poster of : ${data.Title}">
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Rating:</strong> ${data.imdbRating}</p>
        </div>
      `;

      output.insertAdjacentElement("beforeend", movieCard);
    })
    .catch(err => {
      output.innerHTML = "<p>Something went wrong</p>";
    })
});

ClearBtn.onclick = function() {
  output.text = "";
}
