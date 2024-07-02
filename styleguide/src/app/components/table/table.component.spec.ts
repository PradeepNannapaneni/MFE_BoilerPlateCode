import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortEnum } from 'src/app/enums/sort.enum';
import { TableComponent } from './table.component';
import { AssetUrlPipe } from 'src/app/pipes/asset-url.pipe';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  const mockEventEmitter = jasmine.createSpyObj('EvenEmitter', {
    emit: ''
  });

  const mockAssetUrlPipe = jasmine.createSpyObj('_asserUrlPipe', {
    transform: Promise.resolve()
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: [
        { provide: AssetUrlPipe, useValue: mockAssetUrlPipe }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.rowClicked = mockEventEmitter;
    component.cellClicked = mockEventEmitter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not run logic present in ngOnChanges when input is invalid', () => {
    // @ts-ignore
    component.tableData = null;
    component.headers = [];
    expect(component.fromCount).toEqual(0);
  });

  it('should set width on ngOnChanges', () => {
    component.tableData = getMockTableData();
    component.headers = getMockHeaders();

    component.ngOnChanges();

    component.headers.forEach(h => {
      expect(h.calculatedwidth).not.toBeNull();
    });

    component.tableData.rows.forEach(r => {
      r.cells.forEach(c => {
        expect(c.calculatedwidth).not.toBeNull();
      });
    });
  });

  it('sort should be set on header click', () => {
    component.tableData = getMockTableData();
    component.headers = getMockHeaders();

    component.onHeaderClick(component.headers[0]);
    expect(component.headers[0].sort).toEqual(SortEnum.ascending)

    component.onHeaderClick(component.headers[0]);
    expect(component.headers[0].sort).toEqual(SortEnum.descending)
  });

  it('should set pagination on click', () => {
    component.tableData = getMockTableData();
    component.headers = getMockHeaders();
    component.ngOnChanges();

    component.onPreviousPageClick();
    expect(component.tableData.pageNumber).toEqual(1);

    component.onNextPageClick();
    expect(component.tableData.pageNumber).toEqual(2);
  });

  it('should set trigger rowCLicked on row click, C1: getRequestRedirectUrl should called', () => {
    
    component.onRowClick(getMockTableData().rows[0]);
    
    expect(component.rowClicked.emit).toHaveBeenCalled();
    expect(component.cellClicked.emit).toHaveBeenCalled();
  });

  it('should trigger onCellDownlaod func', () => {
    component.onButtonClick({
      uri: 'demo uri',
      type: 'demo type',
      dashboard_id: 'demo_id'
    })
    expect(component.cellClicked.emit).toHaveBeenCalled();
  })

  function getMockTableData() {
    return {
      rows: [
        {
          cells: [
            {
              value: 'row1 cell 1',
              width: 1,
              image: 'test'
            },
            {
              value: 'row1 cell 2',
              width: 1,
            }
          ],
          id: '123',
          rowColData: {
            short_description: 'test',
            closed_at: new Date(),
            opened_at: new Date(),
            priority: 'test',
            sys_id: 'test',
            category: 'Redirect'
          }
        },
        {
          cells: [
            {
              value: 'row2 cell1',
              width: 1,
              image: 'test'
            },
            {
              value: 'row2 cell2',
              width: 1,
            }
          ],
          id: '123',
          rowColData: {
            short_description: 'test',
            closed_at: new Date(),
            opened_at: new Date(),
            priority: 'test',
            sys_id: 'test',
            category: 'test'
          }
        }
      ],
      totalCount: 78,
      pageSize: 20,
      pageNumber: 1
    }
  }

  function getMockHeaders() {
    return [{
      value: 'header 1',
      width: 1,
      isSortable: true,
      image: 'test'
    },
    {
      value: 'header 2',
      width: 1,
      isSortable: true,
    }
    ]
  }
});
