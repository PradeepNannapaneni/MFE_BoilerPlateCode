import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { SortEnum } from 'src/app/enums/sort.enum';
import { Header, RowData, TableData } from 'src/app/modals/table-data.modal';
import { AssetUrlPipe } from 'src/app/pipes/asset-url.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnChanges {
  @Input() tableData!: TableData;
  @Input() headers!: Header[];
  @Input() isLoaded: boolean = false;
  @Input() disableAllButtons: boolean = false;
  @Input() isExportRequired: boolean = true;
  @Input() fromdetails: boolean = false;
  @Input() setMinHeight: boolean = true;
  @Input() moduleName!: string;

  @Output() headerClicked = new EventEmitter();
  @Output() paginationChanged = new EventEmitter();
  @Output() rowClicked = new EventEmitter();
  @Output() cellClicked = new EventEmitter();
  @Output() exportClicked = new EventEmitter();

  sort = SortEnum;
  selectedHeader?: Header;
  fromCount: number = 0;
  toCount: number = 0;
  selectedRowId: number = 0;
  closeAction?: boolean = true;

  constructor(private _assetUrlPipe: AssetUrlPipe) { }

  ngOnChanges() {
    this.setHeaders();

    if (!this.selectedHeader) {
      this.selectedHeader = this.headers?.find(h => h.sort);
    }

    if (this.tableData?.rows?.length) {
      this.setRows();
      this.setPagination();
    }
  }

  onExportClick() {
    this.exportClicked.emit();
  }

  onHeaderClick(header: Header) {
    if (header.isSortable) {
      header.sort = header.sort === SortEnum.ascending ? SortEnum.descending : SortEnum.ascending;
      this.headerClicked.emit(header);
      this.selectedHeader = header;
    }
  }

  onPreviousPageClick() {
    if (this.tableData.pageNumber > 1) {
      this.paginationChanged.emit(--this.tableData.pageNumber)
    }
  }

  onNextPageClick() {
    //@ts-ignore 
    if (this.toCount < this.tableData.totalCount) {
      this.paginationChanged.emit(++this.tableData.pageNumber)
    }
  }

  onRowClick(row: RowData) {
    if (row.id) {
      this.rowClicked.emit(row.id);
    }
  }

  onCellClick(id: string) {
    if (id) {
      this.cellClicked.emit(id);
    }
  }

  onButtonClick(payload: any) {
    this.cellClicked.emit(payload);
  }

  private setHeaders() {
    const colCount: number = this.headers.map(h => h.width).reduce((previous, current) => {
      return previous + current;
    });

    this.headers.forEach(header => {
      header.calculatedwidth = ((100 * header.width) / colCount).toString() + '%';
      if (header.image)
        header.transformedImage = this._assetUrlPipe.transform(header.image);
    });
  }

  private setRows() {
    const colCount: number = this.headers.map(h => h.width).reduce((previous, current) => {
      return previous + current;
    });

    this.tableData.rows.forEach(row => {
      row.cells.forEach(cell => {
        cell.calculatedwidth = ((100 * cell.width) / colCount).toString() + '%';
        if (cell.image)
          cell.image = this._assetUrlPipe.transform(cell.image);
      });
    });
  }

  private setPagination() {
    this.fromCount = ((this.tableData.pageNumber - 1) * this.tableData.pageSize) + 1;
    this.toCount = this.tableData.pageNumber * this.tableData.pageSize;
    //@ts-ignore 
    this.toCount = this.toCount < this.tableData.totalCount ? this.toCount : this.tableData.totalCount;
  }

  displayActions(index: number) {
    this.selectedRowId = index;
    this.closeAction = false;
  }

  closeActionMenu() {
    this.closeAction = true;
  }
}
