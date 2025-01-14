import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ɵElement } from '@angular/forms'

export const TypedForm = <T extends {}>(
  controls: GroupOf<T>
): FormGroup<{ [K in keyof GroupOf<T>]: ɵElement<GroupOf<T>[K], null> }> => {
  return new FormBuilder().group<GroupOf<T>>(controls)
}

export const TypedFormNoneNullable = <T extends {}>(
  controls: GroupOf<T>
): FormGroup<{ [K in keyof GroupOf<T>]: ɵElement<GroupOf<T>[K], never> }> => {
  return new FormBuilder().nonNullable.group<GroupOf<T>>(controls)
}

type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any> ? FormGroup<ControlsOf<T[K]>> : FormControl<T[K]>
}

type GroupOf<T extends Record<string, any>> = {
  [K in keyof T]: (
    | T[K]
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[]
}
