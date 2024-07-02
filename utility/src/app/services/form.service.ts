import { AbstractControl, FormGroup } from "@angular/forms";
import { ObservableInput, Subscription } from "rxjs";
import { debounceTime, exhaustMap } from "rxjs";

export class FormService {
    static validateForm(form: FormGroup): FormGroup {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control) {
                control.markAsTouched({ onlySelf: true });
            }
        });
        return form;
    }

    static pipeAutoComplete(control: AbstractControl, callback: (value: any, index: number) => ObservableInput<any>): Subscription {
        return control.valueChanges.pipe(
            debounceTime(400),
            exhaustMap(callback)
        ).subscribe();
    }
}