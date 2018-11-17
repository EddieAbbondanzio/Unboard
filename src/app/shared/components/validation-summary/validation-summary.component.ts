import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { InvalidOperationError } from '../../errors/invalid-operation-error';
import { StringUtils } from '../../utils/string-utils';

/**
 * Component to display errors in a nicely formatted box. 
 * This works with native angular validators to help out
 * the user.
 */
@Component({
  selector: 'ui-validation-summary',
  templateUrl: './validation-summary.component.html',
  styleUrls: ['./validation-summary.component.less']
})
export class ValidationSummaryComponent implements OnInit {
  /**
   * The error messages of the validation summary.
   */
  public errors: string[];

  /**
   * The form this summary is for.
   */
  @Input()
  private formGroup: FormGroup;

  /**
   * Set up the component for use.
   */
  public ngOnInit(): void {
    if (!(this.formGroup instanceof FormGroup)) {
      throw new InvalidOperationError('The form group for this validation summary is missing.');
    }

    //Listen in on any changes
    this.formGroup.statusChanges.subscribe((status) => {
      this.update();
    });
  }

  /**
   * Clear out the error messages of the summary.
   */
  public reset(): void {
    this.errors = [];
  }

  /**
   * Refresh the list of errors in the summary.
   * @param displayUntouched If errors for controls that
   * haven't been touched by the user yet should be shown.
   */
  public update(displayUntouched?: boolean): void {
    this.errors = [];

    Object.keys(this.formGroup.controls).forEach((controlName: string) => {
      let control: AbstractControl = this.formGroup.controls[controlName];

      //Do we want to show untouched errors?
      if(!control.touched && !displayUntouched){
        return;
      }

      if (control.errors != null) {
        controlName = StringUtils.toUpperFirstLetter(controlName);

        if ('required' in control.errors) {
          this.errors.push(`${controlName} is required`);
        }

        //TODO: Add more errors...
      }
    });
  }
}
