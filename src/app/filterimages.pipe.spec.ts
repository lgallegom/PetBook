import { FilterimagesPipe } from './filterimages.pipe';
import { mockDetalleImagenes } from './image-details/mock-image-details';

const Imagenes = mockDetalleImagenes;

describe('FilterimagesPipe', () => {

  let pipe: FilterimagesPipe;

  beforeEach(() =>{
    pipe = new FilterimagesPipe();
  });

  it('Debe crear el pipe', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform()',() =>{

    it('Al pasar la palabra "perro" como parametro, se debe retornar un objeto solo con perros', () =>{
      let perro = pipe.transform(Imagenes,'perro');
      expect(perro).toEqual(Imagenes.filter(img => img.brand == 'perro'))
    });

    it('Al pasar la palabra "gato" como parametro, se debe retornar un objeto solo con gatos', () => {
      let gato = pipe.transform(Imagenes,'gato')
      expect(gato).toEqual(Imagenes.filter(img => img.brand === 'gato'))
    });

    it('Al pasar la palabra "all" como parametro, se debe retornar todo el objeto', () =>{
      let all = pipe.transform(Imagenes,'all')
      expect(all).toEqual(Imagenes)
    });

    it('Debe retornar el objeto vacio cuando se pase por parametro un elemento que no exista', () =>{
      let inexistente = pipe.transform(Imagenes,'caballo')
      expect(inexistente).toEqual([]);
    });

  });
  
});
