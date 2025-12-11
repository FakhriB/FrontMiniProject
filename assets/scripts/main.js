const container = document.getElementById("shows-container");
const loadMoreBtn = document.getElementById("load-more");
const searchInput = document.getElementById("search");

let allShows = [];
let filtered = [];
let page = 0;
const limit = 8;

fetch("https://api.tvmaze.com/shows")
  .then(r => r.json())
  .then(data => {
    allShows = data;
    filtered = allShows;
    render();
  })
  .catch(() => {
    container.innerHTML = "<p class='text-danger'>Filmlər yüklənmədi</p>";
  });

function render() {
  container.innerHTML = "";

  const slice = filtered.slice(0, page + limit);

  slice.forEach(show => {
    container.innerHTML += `
      <div class="col-6 col-md-4 col-lg-3 mb-4">
        <a href="detail.html?id=${show.id}" class="text-decoration-none text-white">
          <div class="card bg-dark border-0">
            <img src="${show.image?.medium || 'https://via.placeholder.com/300x400'}" class="card-img-top rounded">
            <div class="card-body px-0">
              <h6 class="mt-2">${show.name}</h6>
            </div>
          </div>
        </a>
      </div>
    `;
  });

  
  loadMoreBtn.style.display =
    slice.length >= filtered.length ? "none" : "block";
}

loadMoreBtn.addEventListener("click", () => {
  page += limit;
  render();
});


if (searchInput) {
  searchInput.addEventListener("input", e => {
    const text = e.target.value.toLowerCase();
    page = 0;

    filtered = allShows.filter(show =>
      show.name.toLowerCase().includes(text)
    );

    render();
  });
}
