# StorageService

## Summary

The **StorageService** provides utility functions to manage local storage operations and export data to CSV format using the `xlsx` library in an Angular application. It simplifies storing, retrieving, and exporting data efficiently.

## Features

- Set, get, remove, and clear items from local storage.
- Export data to CSV format from JSON objects.
- Transform table data into a suitable format for export.

## Methods

### `setItem(key: string, value: string): void`

Stores a key-value pair in local storage.

- **Parameters:**
  - `key`: The key under which the value is stored.
  - `value`: The value to be stored.

### `getItem(key: string): string | null`

Retrieves a value from local storage by its key.

- **Parameters:**
  - `key`: The key of the item to retrieve.
  
- **Returns:** The value associated with the key, or `null` if not found.

### `removeItem(key: string): void`

Removes a specified key and its associated value from local storage.

- **Parameters:**
  - `key`: The key of the item to remove.

### `clearAll(): void`

Clears all items from local storage.

### `exportToCSV(data: any, fileName: string): void`

Exports JSON data to a CSV file.

- **Parameters:**
  - `data`: The data to export in JSON format.
  - `fileName`: The name of the file to save (with `.csv` extension).

### `getExportData(allTableData: any, header: any): any[]`

Transforms table data into an array of objects suitable for export.

- **Parameters:**
  - `allTableData`: The table data containing rows and cells.
  - `header`: The header information that maps to cell values.

- **Returns:** An array of objects representing the table data.

## Example Usage

Here’s an example of how to use the `StorageService` in an Angular component or service:

**example.component.ts**

```typescript
import { Component } from '@angular/core';
import { StorageService } from 'utility';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor() {
    // Set item in local storage
    StorageService.setItem('key', 'value');

    // Retrieve item from local storage
    const value = StorageService.getItem('key');
    console.log('Stored Value:', value);

    // Remove item from local storage
    StorageService.removeItem('key');

    // Clear all local storage
    StorageService.clearAll();

    // Export data to CSV
    const data = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
    StorageService.exportToCSV(data, 'data.csv');
  }
}
