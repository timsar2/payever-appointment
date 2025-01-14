import { FormControl, ValidationErrors } from '@angular/forms'

export function confirmPasswordValidator(control: FormControl): ValidationErrors | null {
  if (!control.value) {
    return null
  }

  const password = control.root.get('password')?.value
  return password === control.value ? null : { confirmPasswordError: true }
}
