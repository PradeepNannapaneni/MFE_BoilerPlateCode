# Form Service

## Summary

The **Form Service** provides utility functions to manage and validate Angular reactive forms. It simplifies form control validation and supports automatic completion using RxJS operators.

## Features

- Validate form controls by marking them as touched.
- Provide auto-complete functionality for form inputs with debouncing.

## Methods

### `validateForm(form: FormGroup): FormGroup`

Validates the given form by marking all controls as touched, triggering validation messages.

- **Parameters:**
  - `form`: The `FormGroup` instance to validate.

- **Returns:** The validated `FormGroup`.

### `pipeAutoComplete(control: AbstractControl, callback: (value: any, index: number) => ObservableInput<any>): Subscription`

Sets up an auto-complete feature for the specified form control. It listens to value changes and applies the provided callback function with debouncing.

- **Parameters:**
  - `control`: The `AbstractControl` instance to set up auto-complete on.
  - `callback`: A function that returns an observable, taking the input value and index as parameters.

- **Returns:** A `Subscription` for the observable.

## Example Usage

Here’s an example of how to use the `FormService` in an Angular component:

**example.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'utility';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {
    FormService.pipeAutoComplete(this.myForm.get('search'), this.autoCompleteCallback);
  }

  autoCompleteCallback(value: string) {
    // Your observable logic here, e.g., fetching suggestions
    return this.myService.getSuggestions(value);
  }

  validate() {
    FormService.validateForm(this.myForm);
  }
}
