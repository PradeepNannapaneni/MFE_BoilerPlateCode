import { SortEnum } from "../enums/sort.enum";
export interface TableData {
    rows: RowData[];
    totalCount?: number;
    pageSize: number;
    pageNumber: number;
}

export interface RowData {
    cells: CellData[];
    id: string;
}

export interface CellData {
    value: string;
    color?: string;
    iconShowAfter?: boolean;
    width: number;
    clearAfter?: boolean;
    sortableValue: string | number | Date;
}

export interface Header {
    value: string;
    width: number;
    sort?: SortEnum | null;
    isSortable?: boolean;
    dataType?: string;
}
