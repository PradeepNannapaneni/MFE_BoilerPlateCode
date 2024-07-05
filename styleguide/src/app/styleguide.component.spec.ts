import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StyleguideComponent } from './styleguide.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StyleguideComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StyleguideComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'styleguide'`, () => {
    const fixture = TestBed.createComponent(StyleguideComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('styleguide');
  });

});
