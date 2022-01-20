import { filterAZ } from '../src/data.js';
// import data from './data/ghibli/ghibli.js';

const dataGhibli = [
  {
    "title": "Castle in the Sky",
  }
]


describe('filterAZ ordena todas las peliculas en orden de la A a la Z', () => {
  it('Debería ser una función', () => {
    expect(typeof filterAZ).toBe('function');
  });
  it('Debería ordenar todas las peliculas en forma ascendente', () => {
    expect(dataGhibli[0].title).toBe('Castle in the Sky');
  });
});

