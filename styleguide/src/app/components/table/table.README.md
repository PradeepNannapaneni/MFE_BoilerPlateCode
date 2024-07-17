# Table Component

## Summary

The **Table Component** is an Angular component designed to display tabular data with interactive features such as sorting, pagination, and action buttons. It efficiently manages the rendering of complex data structures while providing a clean user interface.

## Features

- Displays dynamic tabular data with customizable headers and rows.
- Supports sorting on headers with visual indicators.
- Pagination controls for navigating through large datasets.
- Action buttons for each row with customizable actions.
- Conditional rendering for loading states and no data scenarios.

## Inputs

| Input                  | Type              | Default Value         | Description                                  |
|------------------------|-------------------|-----------------------|----------------------------------------------|
| `tableData`           | `TableData`       | `undefined`           | The data to be displayed in the table.      |
| `headers`              | `Header[]`        | `undefined`           | An array of headers defining the table structure. |
| `isLoaded`             | `boolean`         | `false`               | Indicates if the table data is loaded.      |
| `disableAllButtons`    | `boolean`         | `false`               | Disables all action buttons in the table.   |
| `isExportRequired`     | `boolean`         | `true`                | Indicates if export functionality is required. |
| `fromDetails`          | `boolean`         | `false`               | Indicates if the table is accessed from details view. |
| `setMinHeight`         | `boolean`         | `true`                | Sets a minimum height for the table.        |
| `moduleName`           | `string`          | `undefined`           | The name of the module using the table.     |

## Outputs

| Output                | Type               | Description                          |
|-----------------------|--------------------|--------------------------------------|
| `headerClicked`       | `EventEmitter`      | Emits the header clicked event.      |
| `paginationChanged`   | `EventEmitter`      | Emits the pagination change event.   |
| `rowClicked`          | `EventEmitter`      | Emits the clicked row's ID.          |
| `cellClicked`         | `EventEmitter`      | Emits the clicked cell's ID.         |
| `exportClicked`       | `EventEmitter`      | Emits the export action event.       |

## Methods

### `ngOnChanges()`

This lifecycle method is triggered when any data-bound input properties change. It updates the headers and rows, and sets pagination based on the latest `tableData`.

### `onExportClick()`

Emits the `exportClicked` event when the export button is clicked.

### `onHeaderClick(header: Header)`

Handles the click event on the header, toggling sorting order and emitting the `headerClicked` event.

- **Parameters:**
  - `header`: The clicked header to toggle sorting.

### `onPreviousPageClick()`

Decrements the current page number and emits the `paginationChanged` event if not on the first page.

### `onNextPageClick()`

Increments the current page number and emits the `paginationChanged` event if there are more records to display.

### `onRowClick(row: RowData)`

Emits the `rowClicked` event with the clicked row's ID.

- **Parameters:**
  - `row`: The clicked row's data.

### `onCellClick(id: string)`

Emits the `cellClicked` event with the clicked cell's ID.

- **Parameters:**
  - `id`: The ID of the clicked cell.

### `onButtonClick(payload: any)`

Emits the `cellClicked` event with the payload from the clicked button.

- **Parameters:**
  - `payload`: The data associated with the button click.

### `setHeaders()`

Calculates the width of each header based on the total column width and transforms any images using the `AssetUrlPipe`.

### `setRows()`

Calculates the width of each cell in the rows and transforms any images using the `AssetUrlPipe`.

### `setPagination()`

Calculates the `fromCount` and `toCount` for pagination display based on the current page number and page size.

### `displayActions(index: number)`

Displays the action menu for the selected row.

- **Parameters:**
  - `index`: The index of the selected row.

### `closeActionMenu()`

Closes the action menu for the selected row.

## Example Usage

To use the `TableComponent`, include it in your template and provide the required inputs.

**app.component.html**

```html
<styleguide-table 
  [tableData]="myTableData"
  [headers]="myHeaders"
  [isLoaded]="true"
  (headerClicked)="onHeaderClick($event)"
  (paginationChanged)="onPaginationChange($event)"
  (rowClicked)="onRowClick($event)"
  (cellClicked)="onCellClick($event)"
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