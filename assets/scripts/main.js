fetch("https://api.tvmaze.com/shows")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    const cardsDiv = document.querySelector(".cards");
    cardsDiv.innerHTML = "";

    data.forEach(function(show) {
      var imgSrc;
      if (show.image && show.image.medium) {
        imgSrc = show.image.medium;
      } else {
        imgSrc = 'https://via.placeholder.com/210x295?text=No+Image';
      }

      cardsDiv.innerHTML += `
        <div class="col mb-4">
          <div class="card" style="width: 18rem;">
            <img src="${imgSrc}" class="card-img-top" alt="${show.name}">
            <div class="card-body">
              <h5 class="card-title">${show.name}</h5>
              <p class="card-text">${show.summary ? show.summary.replace(/<[^>]+>/g, '').substring(0, 100) + '...' : 'Açıqlama yoxdur'}</p>
              <a href="detail.html?id=${show.id}" class="btn btn-primary">Detala bax</a>
            </div>
          </div>
        </div>
      `;
    });
  })
  .catch(function(err) {
    console.log(err);
  });
