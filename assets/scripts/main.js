fetch("https://api.tvmaze.com/shows?&select=key1,key2,key3").then(res=>res.json()).then(data=>{

const cardsDiv = document.querySelector(".cards");
 
data.forEach(element => {
    cardsDiv.innerHTML += `
       
    <div class="col">
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    `
});
console.log(data)
}).catch(err=>{
    console.log(err);  
})
















