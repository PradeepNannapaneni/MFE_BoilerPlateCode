import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GAEvent } from 'utility';
import { TableActionsComponent } from './table-actions.component';
import { AssetUrlPipe } from 'src/app/pipes/asset-url.pipe';

describe('TableActionsComponent', () => {
  let component: TableActionsComponent;
  let fixture: ComponentFixture<TableActionsComponent>;
  let mockGAEventService: jasmine.SpyObj<typeof GAEvent>
  let mockEventEmitter = jasmine.createSpyObj('EventEmitter', {
    emit: ''
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableActionsComponent,AssetUrlPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActionsComponent);
    component = fixture.componentInstance;
    component.closeClick = mockEventEmitter;
    mockGAEventService = jasmine.createSpyObj('GAEvent', ['subscribeEventToGA'])
    component.gaEventService = mockGAEventService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('close actions should emit close event', () => {
    component.closeActions();
    expect(component.closeClick.emit).toHaveBeenCalled();
  });

  it('clickout should close the card', () => {
    component.isCardClosed = false;
    component.clickout({ target: '' });
    expect(component.isCardClosed).toBeTrue();
  });

  it('should track GA event when open and click label', () => {
    const name = 'demoName';
    component.onTrack(name);
    expect(component.onTrack).toBeTruthy();
  })
});
