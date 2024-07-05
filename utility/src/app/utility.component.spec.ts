import { TestBed } from '@angular/core/testing';
import { UtilityComponent } from './utility.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UtilityComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UtilityComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'utility'`, () => {
    const fixture = TestBed.createComponent(UtilityComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('utility');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UtilityComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('utility app is running!');
  });
});
