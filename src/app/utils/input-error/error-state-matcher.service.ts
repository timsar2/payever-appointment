import { Injectable } from '@angular/core'
import { AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms'

export interface ErrorStateMatcher {
  isErrorVisible(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean
}

@Injectable({
  providedIn: 'root'
})
export class OnDirtyOrTouchedErrorStateMatcher implements ErrorStateMatcher {
  isErrorVisible(control: AbstractControl | null, form: FormGroupDirective | NgForm | null) {
    return Boolean(control && control.invalid && (control.dirty || control.touched))
  }
}
export class OnDirtyErrorStateMatcher implements ErrorStateMatcher {
  isErrorVisible(control: AbstractControl | null, form: FormGroupDirective | NgForm | null) {
    return Boolean(control && control.invalid && (control.dirty || (form && form.submitted)))
  }
}
export class OnTouchedErrorStateMatcher implements ErrorStateMatcher {
  isErrorVisible(control: AbstractControl | null, form: FormGroupDirective | NgForm | null) {
    return Boolean(control && control.invalid && (control.touched || (form && form.submitted)))
  }
}

export class CustomFormsMatcher implements ErrorStateMatcher {
  isErrorVisible(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched))
  }

  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched))
  }
}
