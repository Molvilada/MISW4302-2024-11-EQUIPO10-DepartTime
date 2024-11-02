import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data array with itemsByPage elements', () => {
    expect(component.data.length).toBe(component.itemsByPage);
  });

  it('should set total pages correctly based on data length and items per page', () => {
    component.cutData(component.itemsByPage);
    expect(component.totalPages).toBe(Math.ceil(component.data.length / component.itemsByPage));
  });

  it('should slice data into showedData based on itemsByPage and page', () => {
    component.page = 1;
    component.cutData(component.itemsByPage);
    expect(component.showedData.length).toBe(component.itemsByPage);
  });

  it('should increase page number and update showedData on nextPage', () => {
    component.page = 1;
    component.nextPage();
    expect(component.page).toBe(2);
    expect(component.showedData.length).toBeLessThanOrEqual(component.itemsByPage);
  });

  it('should decrease page number and update showedData on prevPage', () => {
    component.page = 2;
    component.prevPage();
    expect(component.page).toBe(1);
    expect(component.showedData.length).toBeLessThanOrEqual(component.itemsByPage);
  });

  it('should update itemsByPage and call cutData when selectedValue is triggered', () => {
    const newValue = 4;

    const eventMock = {
      target: { value: newValue }
    };
    spyOn(component, 'cutData');

    component.selectedValue(eventMock);

    expect(component.itemsByPage).toBe(newValue);
    expect(component.cutData).toHaveBeenCalledWith(newValue);
  });
});
