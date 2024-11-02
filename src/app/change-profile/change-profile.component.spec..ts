import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeProfileComponent } from './change-profile.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ChangeProfileComponent', () => {
  let component: ChangeProfileComponent;
  let fixture: ComponentFixture<ChangeProfileComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeProfileComponent],
      imports: [RouterTestingModule, FormsModule], // FormsModule es necesario si estás usando [(ngModel)] en el template
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProfileComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inyectamos Router para espiar las navegaciones
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize fields with empty strings', () => {
    expect(component.username).toBe('');
    expect(component.email).toBe('');
    expect(component.currentPassword).toBe('');
    expect(component.newPassword).toBe('');
    expect(component.confirmNewPassword).toBe('');
  });

  it('should navigate to home on changeProfile', () => {
    const navigateSpy = spyOn(router, 'navigate'); // Espiamos el método navigate del Router
    component.changeProfile();
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });

  it('should navigate to home on cancel', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.cancel();
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
});
