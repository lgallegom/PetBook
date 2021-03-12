import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterimagesPipe } from '../filterimages.pipe';
import { mockDetalleImagenes } from '../image-details/mock-image-details';
import { ImageService } from '../image.service';

import { GalleryComponent } from './image-gallery.component';

const Imagenes = mockDetalleImagenes;

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let service: ImageService = new ImageService();
  let pipe : FilterimagesPipe = new FilterimagesPipe();
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent, FilterimagesPipe ],
      providers: [
        { provide: ImageService, useValue: service},
        { provide: FilterimagesPipe, useValue: pipe}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(service, 'getImages').and.returnValues(Imagenes);
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir la variable allImages y contener todas las imagenes', () =>{
    expect(component.allImages).toEqual(Imagenes);
  });

  it('Debe existir un boton para filtrar por Gato', () => {
    expect(fixture.debugElement.nativeElement.querySelector('#btnGato'));
  });

  it('Debe existir un boton para filtrar por Perro', () => {
    expect(fixture.debugElement.nativeElement.querySelector('#btnPerro'));
  });

  it('Debe existir un boton para filtrar por Todos (All)', () => {
    expect(fixture.debugElement.nativeElement.querySelector('#btnAll'));
  });

});
