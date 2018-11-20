import { ValidationSummaryComponent } from "../components/validation-summary/validation-summary.component";
import { ViewChild } from "@angular/core";
import { FormGroup, FormArray, AbstractControl } from "@angular/forms";
import { AbstractFormCallback } from "./abstract-form-callback";

/**
 * Form control for processing user input.
 */
export abstract class AbstractForm<T> {
    /**
     * If the form is currently valid.
     */
    public isValid: boolean;


    /**
     * The callback to invoke when the method is submitting.
     */
    public onSubmit: AbstractFormCallback<T>;

    /**
     * The form for validating.
     */
    protected formGroup: FormGroup;

    /**
     * The validation summary for displaying errors to.
     */
    @ViewChild(ValidationSummaryComponent)
    protected validationSummary: ValidationSummaryComponent;

    /**
     * Create a new form.
     */
    constructor() {
        this.isValid = false;
        this.formGroup = this.initFormGroup();
    }

    /**
     * Generate the form group for use.
     */
    protected abstract initFormGroup(): FormGroup;

    /**
     * Validate the content of the form.
     */
    public validate(): void {
        if (this.validationSummary != null) {
            this.validationSummary.update();
        }

        this.isValid = this.formGroup.valid;
    }

    /**
    * Submit the form and attempt to log in.
    */
    public submit(): void {
        this.formGroup.markAsTouched();

        if (this.formGroup.valid && this.onSubmit != null) {
            this.onSubmit(this.formGroup.value as T);
        }
        else if (this.validationSummary != null) {
            this.markAllControlsAsTouched();
            this.validationSummary.update(true);
        }
    }

    /**
     * Recursively iterate through each control in the form group
     * and manually mark them as touched.
     */
    protected markAllControlsAsTouched(): void {
        let recursiveStep = (formGroup: FormGroup | FormArray) => {
            for (let field in formGroup.controls) {
                let control = formGroup.get(field);

                if (control instanceof FormGroup || control instanceof FormArray) {
                    recursiveStep(control);
                }
                else
                    control.markAsTouched();
            }
        };

        recursiveStep(this.formGroup);
    }
}