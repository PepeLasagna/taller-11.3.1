const btn = document.getElementById("btnBuscar");

btn.addEventListener("click", event => {
event.preventDefault();

const DATA = document.getElementById("inputBuscar").value;
const URL = `https://images-api.nasa.gov/search?q=${DATA}`;
let contenedor = document.getElementById("contenedor");

fetch (URL)
    .then(response => response.json())
    .then(data => {
        contenedor.innerHTML = "";
        data.collection.items.forEach(element => {
        contenedor.innerHTML += `<div class="card col-2">
        <img src="${element.links[0].href}" class="card-img-top" alt="${element.data[0].title}"  >
        <div class="card-body overflow-auto">
          <h5 class="card-title">${element.data[0].title}</h5>
          <p class="card-text" style="height:100px">${element.data[0].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Fecha: ${element.data[0].date_created}</li>
        </ul>
      </div> <br> <br>`
        });
    })
    .catch(error => {
        console.log("Error: ", error);
    })


})























