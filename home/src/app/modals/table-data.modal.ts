import { SortEnum } from "../enums/sort.enum";

export interface TableData {
    rows: RowData[];
    totalCount: number;
    pageSize: number;
    pageNumber: number;
}

export interface RowData {
    cells: CellData[];
    actions?: string;  
}

export interface CellData {
    value: string;
    width: number;
}

export interface TableHeader {
    value : string;
    width : number;
    sort?: SortEnum;
    isSortable?: boolean;
    image?: string;
}

export interface TableMap {
    mapping: string;
    srlNo: string;
    displayName: string;
    width: number;
    hidden: boolean;
}