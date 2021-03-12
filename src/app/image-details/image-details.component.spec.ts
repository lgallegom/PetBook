import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { ImageDetailComponent } from './image-details.component';
import { mockDetalleImagenes } from './mock-image-details';

const Imagenes = mockDetalleImagenes;
const ImagenDePrueba = Imagenes.filter(Image => Image.url == 'assets/images/gato1.jpg')[0];

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let service:ImageService = new ImageService();
  let spy: any;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers:[
        {
          provide: ActivatedRoute,
          useValue:{
            snapshot:{
              params: () => 1,
            },
          },
        },
        {provide:ImageService,
        useValue:service
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(service,'getImage').and.returnValue(ImagenDePrueba);
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Cuando la imagen existe, debe retornarla', () =>{
    expect(component.image).toEqual(ImagenDePrueba)
   });


  it('Debe existir un elemento contenedor de la clase img-container ', () =>{
    expect(fixture.nativeElement.querySelector('.img-container')).toBeDefined();
   });

  
});


