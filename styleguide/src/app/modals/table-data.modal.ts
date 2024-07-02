import { SortEnum } from "../enums/sort.enum";
export interface TableData {
    rows: RowData[];
    totalCount?: number;
    pageSize: number;
    pageNumber: number;
}

export interface RowAction {
    name: string;
    url: string;
}

export interface RowData {
    cells: CellData[];
    id: string;
    actions?: RowAction[];
    rowColData: TableDataHistoryDto;
}

export interface CellData {
    calculatedwidth?: string;
    value: string;
    icon?: string;
    image?: string;
    images?: string;
    iconShowAfter?: boolean;
    width: number;
    clearAfter?: boolean;
    payload?: any;
}

export interface Header {
    value: string;
    width: number;
    isSortable?: boolean;
    image?: string;
    calculatedwidth?: string;
    sort?: SortEnum;
    transformedImage?: string;
}

export interface TableDataHistoryDto {
    short_description: string;
    closed_at?: Date;
    opened_at?: Date;
    priority: string;
    sys_id: string;
    category?: string;
}