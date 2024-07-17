# Table Component
## Summary

The **TableComponent** is a reusable Angular component designed to display tabular data with features like sorting, pagination, and dynamic cell rendering.

## Key Features:
- Inputs:
    - Accepts tableData, headers, and flags to control display behavior.

- Outputs:
    - Emits events for header clicks, pagination changes, row clicks, cell clicks, and export actions.

- Sorting:
    - Allows sorting of columns by toggling sort direction on header clicks.

- Pagination:
    - Calculates and displays the current set of records based on the active page.

- Dynamic Width Calculation:
    - Computes widths for headers and cells based on specified widths for responsive design.

## Summary of Functions
- `ngOnChanges()`: Updates headers, rows, and pagination on input changes.
- `onExportClick()`: Emits event for export action.
- `onHeaderClick(header: Header)`: Toggles sort direction and emits header click event.
- `onPreviousPageClick()`: Navigates to the previous page if possible.
- `onNextPageClick()`: Navigates to the next page if possible.
- `onRowClick(row: RowData)`: Emits event with clicked row's ID.
- `onCellClick(id: string)`: Emits event with clicked cell's ID.
- `onButtonClick(payload: any)`: Emits event with button click payload.
- `setHeaders()`: Calculates header widths and transforms images.
- `setRows()`: Calculates cell widths and transforms images.
- `setPagination()`: Calculates the current displayed record range.
- `displayActions(index: number)`: Opens action menu for selected row.
- `closeActionMenu()`: Closes the action menu.

## Usage
```html
<styleguide-table 
        [tableData]="myTableData" 
        [headers]="myHeaders" 
        [isLoaded]="true" 
        (headerClicked)="onHeaderClick($event)"
        (rowClicked)="onRowClick($event)"
        (exportClicked)="onExportClick()">
</styleguide-table>
```

## Sample Inputs 
```typescript
myTableData = {
        "rows": [
                {
                        "cells": [
                                {
                                        "value": "huPLEAAAQBAJ",
                                        "width": 1.5,
                                        "calculatedwidth": "12%"
                                },
                                {
                                        "value": "Angular Projects",
                                        "width": 3,
                                        "calculatedwidth": "24%"
                                },
                                {
                                        "value": "Aristeidis Bampakos",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "Packt Publishing Ltd",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "2023-07-19",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "313",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                }
                        ],
                        "id": "huPLEAAAQBAJ"
                },
                {
                        "cells": [
                                {
                                        "value": "ufL6EAAAQBAJ",
                                        "width": 1.5,
                                        "calculatedwidth": "12%"
                                },
                                {
                                        "value": "Pro Angular 16",
                                        "width": 3,
                                        "calculatedwidth": "24%"
                                },
                                {
                                        "value": "Adam Freeman",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "Simon and Schuster",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "2024-05-28",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "1396",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                }
                        ],
                        "id": "ufL6EAAAQBAJ"
                },
                {
                        "cells": [
                                {
                                        "value": "qys8zgEACAAJ",
                                        "width": 1.5,
                                        "calculatedwidth": "12%"
                                },
                                {
                                        "value": "Angular For Dummies",
                                        "width": 3,
                                        "calculatedwidth": "24%"
                                },
                                {
                                        "value": "Rufus Stewart",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "-",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "2021-02-16",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "204",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                }
                        ],
                        "id": "qys8zgEACAAJ"
                },
                {
                        "cells": [
                                {
                                        "value": "C1QoDwAAQBAJ",
                                        "width": 1.5,
                                        "calculatedwidth": "12%"
                                },
                                {
                                        "value": "Getting Started with Angular",
                                        "width": 3,
                                        "calculatedwidth": "24%"
                                },
                                {
                                        "value": "Minko Gechev",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "Packt Publishing Ltd",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "2017-02-24",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "271",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                }
                        ],
                        "id": "C1QoDwAAQBAJ"
                },
                {
                        "cells": [
                                {
                                        "value": "NpZGDwAAQBAJ",
                                        "width": 1.5,
                                        "calculatedwidth": "12%"
                                },
                                {
                                        "value": "NativeScript for Angular Mobile Development",
                                        "width": 3,
                                        "calculatedwidth": "24%"
                                },
                                {
                                        "value": "Nathan Walker",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "Packt Publishing Ltd",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "2017-08-30",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                },
                                {
                                        "value": "384",
                                        "width": 2,
                                        "calculatedwidth": "16%"
                                }
                        ],
                        "id": "NpZGDwAAQBAJ"
                }
        ],
        "totalCount": 40,
        "pageSize": 5,
        "pageNumber": 1
}

myHeaders = [
        {
                "value": "ID",
                "width": 1.5,
                "calculatedwidth": "12%"
        },
        {
                "value": "Title",
                "width": 3,
                "isSortable": true,
                "calculatedwidth": "24%"
        },
        {
                "value": "Author",
                "width": 2,
                "calculatedwidth": "16%"
        },
        {
                "value": "Publisher",
                "width": 2,
                "calculatedwidth": "16%"
        },
        {
                "value": "Published Date",
                "width": 2,
                "calculatedwidth": "16%"
        },
        {
                "value": "Page Count",
                "width": 2,
                "isSortable": true,
                "calculatedwidth": "16%",
                "sort": "asc"
        }
]