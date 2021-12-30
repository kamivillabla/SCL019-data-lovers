// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};


// Ordena las peliculas de la A a la Z y de la Z a la A
// Creo una función donde le agrego el método sort con dos parametros. Luego le doy la condición de que a.title es menor que b.title entonces que retorne -1 lo que da como resultado que se vean primero las tarjetas que comiencen con la letra A hasta la Z  (Aún no logro entender de todo cuando usar return -1 y return 1, tengo que seguir estudiandolo, pero funciona xd!!! )

export const filterAZ = (data) => {
  const sortLettersAZ = data.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
  });
  return sortLettersAZ;
}
export const filterZA = (data) => {
  const sortLetterZA = data.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }
  });
  return sortLetterZA;
}


