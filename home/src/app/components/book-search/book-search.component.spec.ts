import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookSearchComponent } from './book-search.component';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event when searchBooks is called', () => {
    spyOn(component.search, 'emit');
    component.query = 'Angular';
    component.searchBooks();
    expect(component.search.emit).toHaveBeenCalledWith('Angular');
  });

  it('should reset query after searchBooks is called', () => {
    component.query = 'Angular';
    component.searchBooks();
    expect(component.query).toEqual('');
  });

  it('should not emit search event when searchBooks is called with an empty query', () => {
    spyOn(component.search, 'emit');
    component.query = '';
    component.searchBooks();
    expect(component.search.emit).not.toHaveBeenCalled();
  });
});
