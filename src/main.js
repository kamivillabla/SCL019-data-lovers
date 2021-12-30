import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(example, data);

const dataGhibli = data.films.map((arr) => {
    let ghibliData = `<article class="animations__card">
    <a href="#"><img class="animations__card__img" src="${arr.poster}"alt="Imagen de la película de animación"></a>
    <h4>${arr.title}</h4>
    <p><span class="black">Año:</span> ${arr.release_date}</p>
    <p><span class="black">Director:</span> ${arr.director}</p>
    <p><span class="black">Productor:</span> ${arr.producer}</p>
    <p><span class="black">Score:</span> ${arr.rt_score}</p>
    </article>`;

    return ghibliData;
})

document.getElementById("animations").innerHTML = dataGhibli.join("");