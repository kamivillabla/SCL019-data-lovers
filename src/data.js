// Ordena las peliculas de la A a la Z y de la Z a la A

/*Si son iguales, devolveremos 0.
Si "a" debe ir ordenado antes que "b", entonces devolvemos un número menor que 0.
Si "a" debe ir ordenado después que "b", entonces devolvemos un número mayor que 0.

'localeCompare' permite comprarar dos cadenas teniendo en cuenta acentos y otras características específicas de cada idioma para la ordenación. Lo mejor de todo, es que esta función devuelve -1, 1 o 0 según si es mayor, menor o igual, que es exactamente lo que necesitamos:

*/

export const filterAZ = (data) => {
  const sortLettersAZ = data.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return sortLettersAZ;
}
export const filterZA = (data) => {
  const sortLetterZA = data.sort((a, b) => {
    return b.title.localeCompare(a.title);
  });
  return sortLetterZA;
}

//filtro por director
export const filterDataDirector = (data, nameDirector) => {
  const newDataDirector = data.filter(movie => movie.director == nameDirector);
  return newDataDirector;
}

//filtro por productor
export const filterDataProducer = (data, nameProducer) => {
  const newDataProducer = data.filter(movie => movie.producer == nameProducer);
  return newDataProducer;
}

//Ordenar por año Asc
export const filterDataYearAsc = (data) => {
  const filterDataYear = data.sort((a, b) => {
    return a.release_date - b.release_date;
  });
  return filterDataYear;
}

// Ordenar por año Desc
export const filterDataYearDesc = (data) => {
  const filterDataYearDes = data.sort((a, b) => {
    return b.release_date - a.release_date;
  });
  return filterDataYearDes;
}



// filtrar las 10 mejores peliculas
export const compute = (data) => {
  let filter = data.sort((a, b) => {
    return a.rt_score - b.rt_score;
  });
  let filterCompute = filter.slice(filter.length - 5)
  return filterCompute;
}

