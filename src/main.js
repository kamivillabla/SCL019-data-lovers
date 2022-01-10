import { filterAZ, filterZA, filterDataYearAsc, filterDataYearDesc, filterDataDirector, filterDataProducer } from './data.js';

import data from './data/ghibli/ghibli.js';

// variables globales
const dataStudioGhibli = data.films;
const headerMain = document.getElementById('header')
const containerMain = document.getElementById('main__animations');
const footerMain = document.getElementById('footer');
const containerAnimationes = document.getElementById('animations');
const filterLetterOrder = document.getElementById('filters__initial');
const filterXDirector = document.getElementById('filters__director');
const filterXProducer = document.getElementById('filters__producer');
const filterYear = document.getElementById('filters__year');
const body = document.querySelector('body');


// Creación de tarjetas dinamicas que llama información del objeto.data.ghibli
// Se crea una función que lleva dentro un forEach que recorre el parametro que le de creando así las tarjetas. Al final llamo a la función y le doy el parametro de la data del estudio ghibli para que pueda crear las tarjetas.



const displayCardGhibli = (ghibliData) => {
    containerAnimationes.innerHTML = "";
    //contador de peliculas segun filtro
    document.getElementById("countFilms").innerHTML = `Estas visualizando: ${ghibliData.length} peliculas`;
    ghibliData.forEach((arr) => {
        // Se crea el article donde ira cada tarjeta.
        //https://developer.mozilla.org/es/docs/Web/API/Document/createElement
        const cardAnimations = document.createElement("article"); //article para cada tarjeta
        // Le agrego los estilos de css a cada card.
        //https://developer.mozilla.org/es/docs/Web/API/Element/classList
        cardAnimations.classList.add("animations__card");
        // Se agrega el contenido a la tarjeta.
        cardAnimations.innerHTML += `<img class="animations__card__img" src="${arr.poster}"alt="Imagen de la película de animación">
        <h4>${arr.title}</h4>
        <p><spam class="black">Año:</spam> ${arr.release_date}</p>
        <p><spam class="black">Director:</spam> ${arr.director}</p>
        <p><spam class="black">Productor:</spam> ${arr.producer}</p>
        <p><spam class="black">Score:</spam> ${arr.rt_score} </p>`;
        // Guardo el id del objeto en una nueva constante.
        const idObjetCard = arr.id;
        // A la tarjeta le agrego el nuevo atributo de ID que toma el valor del id unico que trae el objeto. 
        cardAnimations.setAttribute("id", idObjetCard);
        // En el container(section) de las animaciones despliego las tarjetas
        // https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
        containerAnimationes.appendChild(cardAnimations);

        // Tiene que ir adentro para que funcione al dar click en todas las tarjetas, incluso a las que se toman con filtro. 

        //Evento a la tarjeta con el id incluido y llamá a la función que crea la nueva pantalla.
        cardAnimations.addEventListener("click", newContainer);

        function newContainer(e) {
            e.preventDefault;
            // Hace que al ingresar a la nueva pantalla la vista se vea desde el comienzo del html.
            window.scroll(0, 0);
            // Desaparece la pantalla donde se despliegan las tarjetas(Main)
            headerMain.classList.remove('header');
            const headerP = headerMain.querySelector('.header__p');
            const headerRow = headerMain.querySelector('.header__container-img')
            const headerH1 = document.querySelector('#header__h1')
            headerMain.removeChild(headerP);
            headerMain.removeChild(headerRow)
            headerMain.classList.add('movie__header');
            headerH1.classList.add('movie__header__h1')
            containerMain.style.display = 'none';
            footerMain.style.display = 'none';

            //Crea el nuevo contenedor main
            let peliContainer = document.createElement("main");
            // Agrego el estilo para el contenedor main creado en css.
            peliContainer.classList.add('movie__container');
            // Creo la sección de sidebar (Bloque lateral)
            let sideBar = document.createElement("section");
            // Agrega clase al sidebar
            sideBar.classList.add('movie__sidebar')
            // Crea contenido dinamico al sidebar.
            sideBar.innerHTML = `<h4>${arr.title}</h4>
            <img class="movie__sidebar__img" src="${arr.poster}"alt="Poster de la animación">
            <p><spam class="black">Año:</spam> ${arr.release_date}</p>
            <p><spam class="black">Director:</spam> ${arr.director}</p>
            <p><spam class="black">Productor:</spam> ${arr.producer}</p>
            <p><spam class="black">Score:</spam> ${arr.rt_score} </p>
            <a class="movie__sidebar__button" href="index.html">..volver</a>`;
            let tabContainer = document.createElement("section");
            tabContainer.classList.add('movie__mainContent')
            tabContainer.innerHTML = `<ul class="movie__mainContent__tab">
                <li class="li active">Descripción</li>
                <li class="li">Personajes</li>
                <li class="li">Locación y Vehículos</li></ul>
            <div class="movie__mainContent__bloques">
                <div class="block active" id="movie__mainContent__bloques__description"><p>${arr.description}</p></div>
                <div class="block"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente similique minima, cupiditate ea vel suscipit placeat. Ullam officia corrupti facere, rem amet doloribus voluptatum beatae cupiditate, atque nihil laboriosam aut?</p></div>
                <div class="block"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente similique minima. Ullam officia corrupti facere, rem amet doloribus voluptatum beatae cupiditate, atque nihil laboriosam aut?</p></div></div>`;

            // Despliega en la pantalla el contenedor del Main
            body.appendChild(peliContainer);
            // Despliega en la pantalla el contenedor del sidebar.
            peliContainer.appendChild(sideBar);
            // Despliega en la pantalla el contenedor donde iras las pestallas tab.
            peliContainer.appendChild(tabContainer);
            // Ahora hay que seguir creando las siguientes secciones basado en el contenido que tengamos en peliculas.html

        }

    });

};
displayCardGhibli(dataStudioGhibli);


// Filtrar de la A a la Z y de la Z a la A

filterLetterOrder.addEventListener('change', () => {
    if (filterLetterOrder.value === "0") {
        const filterLetterAZ = filterAZ(dataStudioGhibli,);
        displayCardGhibli(filterLetterAZ);
    }
    if (filterLetterOrder.value === "1") {
        const filterLetterZA = filterZA(dataStudioGhibli);
        displayCardGhibli(filterLetterZA);
    }
})

//filtrar por director
filterXDirector.addEventListener('change', () => {
    switch (filterXDirector.value) {
        case 'all':
            displayCardGhibli(dataStudioGhibli);
            break;
        case '0':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Hayao Miyazaki"));
            break;
        case '1':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Gorō Miyazaki"));
            break;
        case '2':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Isao Takahata"));
            break;
        case '3':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Hiroyuki Morita"));
            break;
        case '4':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Hiromasa Yonebayashi"));
            break;
        case '5':
            displayCardGhibli(filterDataDirector(dataStudioGhibli, "Yoshifumi Kondō"));
            break;
    }
})

//filtrar por productor
filterXProducer.addEventListener('change', () => {
    switch (filterXProducer.value) {
        case 'all':
            displayCardGhibli(dataStudioGhibli);
            break;
        case '0':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Isao Takahata"));
            break;
        case '1':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Toshio Suzuki"));
            break;
        case '2':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Toru Hara"));
            break;
        case '3':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Hayao Miyazaki"));
            break;
        case '4':
            displayCardGhibli(filterDataProducer(dataStudioGhibli, "Yoshiaki Nishimura"));
            break;
    }
})

// Ordenar los años de menor a mayor y viceversa
filterYear.addEventListener('change', () => {
    if (filterYear.value === '0') {
        const filterXYear = filterDataYearAsc(dataStudioGhibli)
        displayCardGhibli(filterXYear)
    }
    if (filterYear.value === '1') {
        const filterXYear = filterDataYearDesc(dataStudioGhibli)
        displayCardGhibli(filterXYear)
    }
})

const li = document.querySelectorAll(".li");
const block = document.querySelectorAll(".block");

//Click en li
// TODOS .li quitar la clase active
// TODOS .block quitar la clase active
// .li con la posicion de se añade la clase activo
// .block con la posicion de se añade la clase activo

// recorriendo todos los li
li.forEach((i) => {
    //asignando un click a cada .li
    li[i].addEventListener("click", () => {
        //recorriendo todos los .li
        li.forEach((i) => {
            //quitamos la clase active cada li
            li[i].classList.remove("active")
            //quitamos la clase active a cada block
            block[i].classList.remove("active")
        })
        //en el li hemos hecho click añadimos clase active
        li[i].classList.add("active")
        //en el block con la misma posición añadimos clase active
        block[i].classList.add("avtive")
    })
})
