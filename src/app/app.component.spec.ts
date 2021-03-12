import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  
  beforeEach(async(() => {
    component = new AppComponent();
    
  }));

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener una variable title que corresponda con el titulo del proyecto Petbook', () => {
    const titulo: string = component.title;
    expect(titulo).toEqual('pet-book');
  });

  it('Debe existir un elemento contenedor enrutador', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content router-outlet'));
  });
});
