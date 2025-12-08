const box = document.getElementById("detailBox");
const searchInput = document.getElementById("searchInput");

const id = new URLSearchParams(location.search).get("id");

let allData = [];
let currentShow = null;


fetch("https://api.tvmaze.com/shows")
  .then(r => r.json())
  .then(data => {
    allData = data;
    if (id) {
      currentShow = allData.find(s => s.id == id);
      if (currentShow) render(currentShow);
    }
  });


function render(show) {
  box.innerHTML = `
  
    <div style="max-width:400px;margin:auto;">
      <img src="${show.image?.medium || ""}" style="width:100%;border-radius:16px">
      <h2>${show.name}</h2>
      <p><b>Dil:</b> ${show.language}</p>
      <p><b>Janr:</b> ${show.genres?.join(", ")}</p>
      <p><b>Reytinq:</b> ${show.rating?.average || "Yoxdur"}</p>
      <div>${show.summary || ""}</div>
    </div>
  `;
}


