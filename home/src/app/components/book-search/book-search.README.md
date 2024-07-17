# BookSearchComponent

## Description
The `BookSearchComponent` provides a user interface for searching books by emitting a search query. It captures user input and emits an event to request book search results.

## Features
- Captures user input for book searches.
- Emits a search event when the user initiates a search.

## Usage

### Selector
Use the `BookSearchComponent` in your template as follows:

```html
<app-book-search (search)="onSearch($event)"></app-book-search>
