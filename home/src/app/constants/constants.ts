import { TableHeader } from "../modals/table-data.modal";
import { TableEnum } from "../enums/table.enum";

export const GET_BOOKS = 'https://www.googleapis.com/books/v1/volumes'; 
export const BOOK_TABLE_HEADERS: TableHeader[] = [
    { value: 'ID', width: 1 },
    { value: 'Title', width: 3 },
    { value: 'Author', width: 2 },
    { value: 'Publisher', width: 2 },
    { value: 'Published Date', width: 2 },
    { value: 'Page Count', width: 2 }
];

export const TABLE_MAPPING = [
    {'mapping': TableEnum.ID, 'srlNo': 0, 'displayName': 'ID', 'width': 1, 'hidden': false},
    {'mapping': TableEnum.Title, 'srlNo': 1, 'displayName': 'Title', 'width': 3, 'hidden': false},
    {'mapping': TableEnum.Author, 'srlNo': 2, 'displayName': 'Author', 'width': 2, 'hidden': false},
    {'mapping': TableEnum.Publisher, 'srlNo': 3, 'displayName': 'Publisher', 'width': 2, 'hidden': false},
    {'mapping': TableEnum.PublishedDate, 'srlNo': 4, 'displayName': 'Published Date', 'width': 2, 'hidden': false},
    {'mapping': TableEnum.PageCount, 'srlNo': 5, 'displayName': 'Page Count', 'width': 2, 'hidden': false}
];

export const TABLE_ROWS_PER_PAGE = 5;
