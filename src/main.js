import { filterAZ, filterZA, filterDataYearAsc, filterDataYearDesc, filterDataDirector, filterDataProducer, filterAZcharacter, filterZAcharacter } from './data.js';

import data from './data/ghibli/ghibli.js';

// variables globales
const dataStudioGhibli = data.films;
const headerMain = document.getElementById('header')
const containerMain = document.getElementById('main__animations');
const footerMain = document.getElementById('footer');
const containerAnimationes = document.getElementById('animations');
const filterLetterOrder = document.getElementById('filters__initial');
const filterLetterCharacter = document.getElementById("filter__initial__character")
const filterXDirector = document.getElementById('filters__director');
const filterXProducer = document.getElementById('filters__producer');
const filterYear = document.getElementById('filters__year');
const body = document.querySelector('body');

// Creación de tarjetas dinamicas que llama información del objeto.data.ghibli
// Se crea una función que lleva dentro un forEach que recorre el parametro que le de creando así las tarjetas. Al final llamo a la función y le doy el parametro de la data del estudio ghibli para que pueda crear las tarjetas.



const displayCardGhibli = (ghibliData) => {
    containerAnimationes.innerHTML = "";
    //contador de peliculas segun filtro
    document.getElementById("countFilms").innerHTML = `<spam class="countBlue">Estas visualizando:</spam> ${ghibliData.length} peliculas`;
    ghibliData.forEach((arr) => {
        // Article donde ira cada tarjeta
        const cardAnimations = document.createElement("article"); //article para cada tarjeta
        // Le agrego los estilos de css a cada card.
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
        // Despligue tarjetas de peliculas.
        containerAnimationes.appendChild(cardAnimations);

        // Tiene que ir adentro para que funcione al dar click en todas las tarjetas, incluso a las que se toman con filtro. 

        //Evento a la tarjeta con el id incluido y llamá a la función que crea la nueva pantalla.
        cardAnimations.addEventListener("click", newContainer);

        function newContainer(e) {
            e.preventDefault;
            // Hace que al ingresar a la nueva pantalla la vista se vea desde el comienzo del html.
            window.scroll(0, 0);
            // Desaparece la pantalla donde se despliegan las tarjetas de peliculas(Main)
            headerMain.classList.remove('header');
            const headerP = headerMain.querySelector('.header__p');
            const headerRow = headerMain.querySelector('.header__container-img')
            const headerH1 = document.querySelector('#header__h1')
            headerMain.removeChild(headerP);
            headerMain.removeChild(headerRow)
            headerMain.classList.add('movie__header');
            headerH1.classList.add('movie__header__h1')
            containerMain.style.display = 'none';
            footerMain.remove();


            //Crea el nuevo contenedor main de los personajes
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
            <a class="movie__sidebar__button" href="index.html">VOLVER</a>`;
            // Container de pestañas Tab
            let tabContainer = document.createElement("section");
            tabContainer.classList.add('movie__mainContent');
            // Sección Descripción pelicula.
            let inputDescription = document.createElement('input');
            let labelDescription = document.createElement('label');
            let divDescription = document.createElement('div');
            divDescription.classList.add('tab');
            inputDescription.setAttribute("type", "radio");
            inputDescription.setAttribute("name", "tabs");
            inputDescription.setAttribute("id", "tabone");
            inputDescription.setAttribute("checked", "checked");
            labelDescription.setAttribute("for", "tabone");
            labelDescription.innerHTML = `Descripción`;
            divDescription.classList.add('movie__description')
            divDescription.innerHTML = `<p>${arr.description}</p>`;

            // Sección Personajes.
            //  personajes
            const characters = arr.people;
            let inputCharacters = document.createElement('input');
            let labelCharacters = document.createElement('label');
            let divCharacters = document.createElement('div');
            let divFilterAndCount = document.createElement('div');
            divFilterAndCount.classList.add('characters__filtersAndCount');
            divFilterAndCount.innerHTML = `<p id="countFilms"><spam class="countBlue">Estas visualizando:</spam> ${arr.people.length} personajes</p>
                    <div class="movie__filters">
                       <select id="filters__initial__character" class="filters__initial">
                         <option value="0">A-Z</option>
                         <option value="1">Z-A </option>
                       </select>
                       <select id="filters__director" class="filters__director">
                         <option selected value="all">Edad</option>
                         <option value="0">Hayao Miyazaki</option>
                         <option value="1">Goro Miyazaki</option>
                         <option value="2">Isao Takahata</option>
                         <option value="3">Hiroyuki Morita</option>
                         <option value="4">Hiromasa Yonebayashi</option>
                         <option value="5">Yoshifumi Kondo</option>
                       </select>
                       <select id="filters__producer" class="filters__producer">
                         <option selected value="all">Género</option>
                         <option value="0">Femenino</option>
                         <option value="1">Masculino</option>
                         <option value="2">No binario</option>
                       </select>
                     </div>`;
            divCharacters.classList.add('tab');
            const divCharactersSub = document.createElement('div');
            divCharactersSub.classList.add('movie__mainContent__card');
            inputCharacters.setAttribute("type", "radio");
            inputCharacters.setAttribute("name", "tabs");
            inputCharacters.setAttribute("id", "tabtwo");
            labelCharacters.setAttribute("for", "tabtwo");
            labelCharacters.innerHTML = `Personajes`;
            let movieDiv = document.createElement('div');
            movieDiv.classList.add('movie__div');
            for (let i = 0; i < characters.length; i++) {

                movieDiv.innerHTML += `
                <img class="movie__img" src="${characters[i].img}" alt="Imagen de personaje totoro">`;
                let movieImg = movieDiv.querySelector('.movie__img');

                const charactersId = characters[i].id;
                movieImg.setAttribute("id", charactersId);

                divCharactersSub.appendChild(movieImg);

                // Tiene que ir adentro para que funcione al dar click en todas las tarjetas, incluso a las que se toman con filtro. 

                //Evento a la tarjeta con el id incluido y llamá a la función que crea la nueva pantalla.

                movieImg.addEventListener("click", () => {
                    divCharactersSub.innerHTML += ` <div class="overlay active" id="overlay">
                        <div class="popup active" id="popup">
                            <img src="${characters[i].img}" alt="imagen del personaje">
                            <div class="character__description">
                                <h5>${characters[i].name}</h5>
                                <p><spam class="black">Edad:</spam> ${characters[i].age}</p>
                                <p><spam class="black">Género:</spam> ${characters[i].gender}</p>
                                <p><spam class="black">Color de ojos:</spam> ${characters[i].eye_color}</p>
                                <p><spam class="black">Color de pelo:</spam> ${characters[i].hair_color}</p>
                                <p><spam class="black">Especie:</spam> ${characters[i].specie}</p>
                                <a href="#" id="btn__cerrar__popup">CERRAR</a>
                            </div>
                        </div>
                    </div>`;
                    //cerrar pop up, solo cierra una vez - ARREGLAR
                    const overlay = document.getElementById("overlay");
                    const popup = document.getElementById("popup");
                    const cerrarPopup = document.getElementById("btn__cerrar__popup");
                    cerrarPopup.addEventListener("click", function(e){
                        e.preventDefault();
                        overlay.classList.remove("active");
                        popup.classList.remove("active");
                    });
                });
            }
            // Sección Vehiculos y locación;
            let location = arr.locations;
            let vehicle = arr.vehicles;

            let inputOther = document.createElement('input');
            let labelOther = document.createElement('label');
            let divOther = document.createElement('div');
            let divOtherSub = document.createElement('div');
            divOtherSub.classList.add('movie__mainContent__card');
            divOther.classList.add('tab');
            inputOther.setAttribute("type", "radio");
            inputOther.setAttribute("name", "tabs");
            inputOther.setAttribute("id", "tabthree");
            labelOther.setAttribute("for", "tabthree");
            labelOther.innerHTML = `Locación y Vehículo`;

            let movieDivLocation = document.createElement('div');
            movieDivLocation.classList.add('movie__div');

            if (location.length === 0 && vehicle.length === 0) {
                divOtherSub.innerHTML = `<p> Aquí no hay nada!!</p>
                <div><img class="movie__img" src="https://static.vix.com/es/sites/default/files/s/studio_ghibli-5.gif" alt="No hay locaciones ni vehiculos!"></div>`
            } else {
                for (let i = 0; i < location.length; i++) {
                    movieDivLocation.innerHTML += `<img class="movie__img" src="${location[i].img}" alt="imagen de locaciones">`;

                    let movieDivImg = movieDivLocation.querySelector('.movie__img');
                    const locationId = location[i].id;

                    movieDivImg.setAttribute("id", locationId);
                    divOtherSub.appendChild(movieDivImg);

                    //busqueda de los residentes
                    const arrayResidents = location[i].residents;
                    console.log(arrayResidents);
                    let arrayNamesResidents = arrayResidents.map((habitantes) => {
                        if(habitantes === "TODO"){
                            return "Todos los personajes";
                        } else{
                            return habitantes.name;
                        }
                    });
                        
                    movieDivImg.addEventListener("click", () => {
                        divOtherSub.innerHTML += ` <div class="overlay active" id="overlay">
                            <div class="popup active" id="popup">
                                <img src="${location[i].img}" alt="imagen del personaje">
                                <div class="character__description">
                                    <h5>${location[i].name}</h5>
                                    <p><spam class="black">Clima:</spam> ${location[i].climate}</p>
                                    <p><spam class="black">Terreno:</spam> ${location[i].terrain}</p>
                                    <p><spam class="black">Superficie de agua:</spam> ${location[i].surface_water}</p>
                                    <p><spam class="black">Habitantes:</spam> ${arrayNamesResidents}</p>
                                    <a href="#" id="btn__cerrar__popup">CERRAR</a>
                                 </div>
                            </div>
                        </div>`;
                        //cerrar pop up, solo cierra una vez - ARREGLAR
                    const overlay = document.getElementById("overlay");
                    const popup = document.getElementById("popup");
                    const cerrarPopup = document.getElementById("btn__cerrar__popup");
                    cerrarPopup.addEventListener("click", function(e){
                        e.preventDefault();
                        overlay.classList.remove("active");
                        popup.classList.remove("active");
                    });
                    });

                    for (let i = 0; i < vehicle.length; i++) {
                        movieDivLocation.innerHTML += `<img class="movie__img" src="${vehicle[i].img}" alt="imagen de vehiculos">`;

                        let movieVehicle = movieDivLocation.querySelector('.movie__img');
                        const vehicleId = vehicle[i].id;
                        movieVehicle.setAttribute("id", vehicleId);
                        divOtherSub.appendChild(movieVehicle);

                        movieVehicle.addEventListener("click", () => {
                            divOtherSub.innerHTML += ` <div class="overlay active" id="overlay">
                            <div class="popup active" id="popup">
                                <img src="${vehicle[i].img}" alt="imagen del personaje">
                                <div class="character__description">
                                    <h5>${vehicle[i].name}</h5>
                                    <p><spam class="black">Descripción::</spam> ${vehicle[i].description}</p>
                                    <p><spam class="black">Clase:</spam> ${vehicle[i].vehicle_class}</p>
                                    <p><spam class="black">Length:</spam> ${vehicle[i].length}</p>
                                    <p><spam class="black">Piloto:</spam> ${vehicle[i].pilot.name}</p>
                                    <a href="#" id="btn__cerrar__popup">CERRAR</a>
                                </div>
                            </div>
                        </div>`;
                        //cerrar pop up, solo cierra una vez - ARREGLAR
                    const overlay = document.getElementById("overlay");
                    const popup = document.getElementById("popup");
                    const cerrarPopup = document.getElementById("btn__cerrar__popup");
                    cerrarPopup.addEventListener("click", function(e){
                        e.preventDefault();
                        overlay.classList.remove("active");
                        popup.classList.remove("active");
                    });
                        });
                    }
                }

            }

            // Despliega en la pantalla el contenedor del Main
            body.appendChild(peliContainer);
            // Despliega en la pantalla el contenedor del sidebar.
            peliContainer.appendChild(sideBar);
            // Despliega en la pantalla el contenedor donde iras las pestallas tab.
            peliContainer.appendChild(tabContainer);
            // Despliegue sección descripción:
            tabContainer.appendChild(inputDescription);
            tabContainer.appendChild(labelDescription);
            tabContainer.appendChild(divDescription);
            //Despliegue sección imagenes personajes:
            tabContainer.appendChild(inputCharacters);
            tabContainer.appendChild(labelCharacters);
            tabContainer.appendChild(divCharacters);
            divCharacters.appendChild(divFilterAndCount);
            divCharacters.appendChild(divCharactersSub);
            // Despliegue sección vehiculos y locación:
            tabContainer.appendChild(inputOther);
            tabContainer.appendChild(labelOther);
            tabContainer.appendChild(divOther);
            divOther.appendChild(divOtherSub);
            // Despliega el footer
            body.appendChild(footerMain);

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
});

/******************************Filtros personajes **********************/

            /* Filtrar de la A a la Z y de la Z a la A
            filterLetterCharacter.addEventListener('change', () => {
                if (filterLetterCharacter.value === "0") {
                    const filterLetterAZ = filterAZ(dataStudioGhibli);
                    divCharactersSub(filterLetterAZ);
                }
                if (filterLetterCharacter.value === "1") {
                    const filterLetterZA = filterZA(dataStudioGhibli);
                    divCharactersSub(filterLetterZA);
                }
            });*/
