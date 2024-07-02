import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ROUTE_HOME } from 'src/app/constants/constant';
import { ErrorPageComponent } from './error-page.component';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  const mockWindow = jasmine.createSpyObj(window, {
    location: { href: '' }
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPageComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take to home page', () => {
    component.window = mockWindow;
    component.goToHomePage();
    expect(component.routeHome).toEqual(ROUTE_HOME);
  });



});
