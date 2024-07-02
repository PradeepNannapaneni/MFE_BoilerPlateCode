import { inject, TestBed } from "@angular/core/testing";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { FormService } from "./form.service";

describe('FormService', () => {
    let form: FormGroup;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule]
        }).compileComponents();
    });

    beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
        form = fb.group({
            name: ['Other Name', Validators.required],
            email: ['', Validators.required]
        });
    }));

    it('validateForm should validate all fields', () => {
        form = FormService.validateForm(form);
        expect(form).toEqual(form);
    });

    it('pipeAutoControl should pipe the formControl', () => {
        let subscription = FormService.pipeAutoComplete(form.controls['name'], async () => { });
        expect(subscription).toBeTruthy();
    });

})