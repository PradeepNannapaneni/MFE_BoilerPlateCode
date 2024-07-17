# BookListComponent

## Description
The `BookListComponent` is designed to display a list of books using a table format. It includes features like sorting, pagination, and event handling for selecting book details.

## Features
- Renders a table with dynamic book data.
- Supports sorting by column headers.
- Includes pagination functionality.
- Emits events for selecting individual book details and exporting data.

## Usage

### Selector
Use the `BookListComponent` in your template as follows:

```html
<app-book-list 
  [books]="bookArray" 
  [bookTableData]="tableData" 
  (getDetails)="onGetDetails($event)">
</app-book-list>
