import { AbstractControl, ValidationErrors } from '@angular/forms'

export class EmailValidator {
  // public static validEmail = (phoneControl: AbstractControl): { [key: string]: boolean } | null => {

  // }

  static validEmail = (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || control.value === '') {
      return null
    }

    const EMAIL_REGEXP =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return EMAIL_REGEXP.test(control.value) ? null : { email: true }
  }
}
