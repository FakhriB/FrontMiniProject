const container = document.getElementById("shows-container");
const loadMoreBtn = document.getElementById("load-more");

fetch("https://api.tvmaze.com/shows")
  .then(response => {
    if (!response.ok) throw new Error("API error");
    return response.json();
  })
  .then(data => {
    let page = 0;
    const limit = 6;

    function renderShows() {
      const slice = data.slice(page, page + limit);

      slice.forEach(show => {
        const imgUrl = show.image?.medium || "https://via.placeholder.com/300x400?text=No+Image";
        const col = document.createElement("div");
        col.className = "col-6 col-md-4 col-lg-3 mb-4";

     col.innerHTML = `
  <a href="detail.html?id=${show.id}" class="text-decoration-none text-white">
    <div class="card mode-card bg-dark text-white border-0">
      <img src="${show.image?.medium || 'https://via.placeholder.com/300x400'}" class="card-img-top rounded">
      <div class="card-body px-0">
        <h6 class="mt-2">${show.name}</h6>
      </div>
    </div>
  </a>
`;

        container.appendChild(col);
      });

      page += limit;

      if (page >= data.length) {
        loadMoreBtn.style.display = "none";
      }
    }

    renderShows();
    loadMoreBtn.addEventListener("click", renderShows);
  })
  .catch(err => {
    console.error(err);
    container.innerHTML = `<p class="text-danger">Filmlər yüklənmədi</p>`;
  });

