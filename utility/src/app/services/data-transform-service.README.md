# Data Transform Service

## Summary

The **Data Transform Service** provides utility functions for transforming and manipulating data in an Angular application. It includes methods for formatting keys, sorting arrays, deep copying objects, and converting date formats.

## Features

- Format object keys by replacing dots with dashes.
- Sort arrays of objects based on specified keys.
- Deep copy objects to avoid mutations.
- Convert UTC dates to Australian Eastern Standard Time (AEST) format.

## Methods

### `getObjectWithFormattedParams(apiResponse: ApiParams): ApiParams`

Transforms an API response by replacing dots (`.`) in the keys with dashes (`-`).

- **Parameters:**
  - `apiResponse`: The API response object of type `ApiParams`.

- **Returns:** A new object with formatted keys.

### `sortArray(arrayToSort: ApiParams[], keyToSort: string, desc: boolean): void`

Sorts an array of objects based on a specified key.

- **Parameters:**
  - `arrayToSort`: The array of objects to sort.
  - `keyToSort`: The key used for sorting.
  - `desc`: A boolean indicating the sort order; `true` for descending, `false` for ascending.

- **Returns:** The array is sorted in place.

### `deepCopy(obj: any | null): any`

Creates a deep copy of an object or array to prevent mutation of the original.

- **Parameters:**
  - `obj`: The object or array to copy.

- **Returns:** A deep copy of the input object or array.

### `convertUTCToAEST(utcDateTime: Date): string`

Converts a UTC date to Australian Eastern Standard Time (AEST) and formats it as a string.

- **Parameters:**
  - `utcDateTime`: The UTC date to convert.

- **Returns:** A string representing the date in AEST format.

## Example Usage

Here’s an example of how to use the `DataTransformService` in an Angular component or service:

**example.component.ts**

```typescript
import { Component } from '@angular/core';
import { DataTransformService } from 'Utility';
import { ApiParams } from '../modals/api-params.modal';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  apiResponse: ApiParams = {
    "user.name": "John",
    "user.age": 30
  };

  transformedResponse = DataTransformService.getObjectWithFormattedParams(this.apiResponse);

  constructor() {
    console.log('Transformed Response:', this.transformedResponse);
  }

  sortExampleArray() {
    const arrayToSort: ApiParams[] = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 22 }
    ];
    
    DataTransformService.sortArray(arrayToSort, 'age', false);
    console.log('Sorted Array:', arrayToSort);
  }
}
