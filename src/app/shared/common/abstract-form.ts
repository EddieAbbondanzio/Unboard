import { ValidationSummaryComponent } from "../components/validation-summary/validation-summary.component";
import { ViewChild } from "@angular/core";
import { FormGroup, FormArray, AbstractControl } from "@angular/forms";

/**
 * Form control for processing user input.
 */
export abstract class AbstractForm<T> {
    /**
     * The name of the form group this form belongs to.
     */
    public abstract group: string;

    /**
     * If the form is currently valid.
     */
    public isValid: boolean;

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
     * Submit the form.
     */
    public abstract submit(): void;

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