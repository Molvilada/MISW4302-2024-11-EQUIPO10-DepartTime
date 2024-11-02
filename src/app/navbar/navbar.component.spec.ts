import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule], // Importamos RouterTestingModule para pruebas de navegación
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inyectamos el servicio de Router para pruebas
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login on logout', () => {
    const navigateSpy = spyOn(router, 'navigate'); // Espiamos el método navigate del Router
    component.logout();
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  });

  it('should navigate to profile on profile', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.profile();
    expect(navigateSpy).toHaveBeenCalledWith(['profile']);
  });
});
