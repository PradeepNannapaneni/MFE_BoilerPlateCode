# BookDetailsComponent

## Description
The `BookDetailsComponent` displays detailed information about a specific book and provides navigation options to return to the search results or book list.

## Features
- Presents book details such as title and authors.
- Includes options to navigate back to the search or list view.

## Usage

### Selector
Use the `BookDetailsComponent` in your template as follows:

```html
<app-book-details 
  [bookDetailData]="selectedBook" 
  (showSearch)="onShowSearch()" 
  (showList)="onShowList()">
</app-book-details>
