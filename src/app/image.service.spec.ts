import { ImageService } from './image.service';
import { TestBed } from '@angular/core/testing';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('Debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe ('getImages',() => {
    it('Debe traer todas las imagenes',() =>{
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });

    it('Debe retornar mas de un elemento en la lista',() =>{
      let imagenes = service.getImages();
      let valor = imagenes.length;
      expect(valor>=1).toBeTruthy;
    });
  });

  describe('getImage(x)',() =>{
    it('Debe retornar una imagen con la informacion COMPLETA cuando el id existe en las imagenes',() =>{
      let imagen = service.getImage(2);
      expect(imagen.id).toBe(2);
      expect(imagen.brand).toBe("perro");
      expect(imagen.url).toBe("assets/images/perro2.jpg")
    });

    it('Debe retornar indefinido si se busca una imagen con id que NO existe',() =>{
      let imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
    });
    
  });
});
