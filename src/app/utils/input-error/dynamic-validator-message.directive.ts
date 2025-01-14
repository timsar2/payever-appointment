import { ComponentRef, Directive, inject, OnInit, ViewContainerRef, OnDestroy, ElementRef, input } from '@angular/core'
import { ControlContainer, FormGroupDirective, NgControl, NgForm, NgModel } from '@angular/forms'
import { EMPTY, fromEvent, iif, merge, skip, startWith, Subscription } from 'rxjs'
import { InputErrorComponent } from './input-error.component'
import { OnDirtyOrTouchedErrorStateMatcher } from './error-state-matcher.service'

@Directive({
  standalone: true,
  selector: `
  [formControl]:not([withoutValidationErrors]),
  [formControlName]:not([withoutValidationErrors]),
  [formGroupName]:not([withoutValidationErrors]),',
  standalone: true`
})
export class DynamicValidatorMessage implements OnInit, OnDestroy {
  ngControl = inject(NgControl, { self: true })
  elementRef = inject(ElementRef)
  errorStateMatcher = input(inject(OnDirtyOrTouchedErrorStateMatcher))
  container = input(inject(ViewContainerRef))

  private componentRef: ComponentRef<InputErrorComponent> | null = null
  private errorMessageTrigger!: Subscription
  private parentContainer = inject(ControlContainer, { optional: true })

  ngOnInit(): void {
    queueMicrotask(() => {
      if (!this.ngControl.control) {
        return
        throw Error(`No control model for ${this.ngControl.name} control...`)
      }

      this.errorMessageTrigger = merge(
        this.ngControl.control.statusChanges,
        fromEvent(this.elementRef.nativeElement, 'blur'),
        iif(() => !!this.form, this.form!.ngSubmit, EMPTY)
      )
        .pipe(startWith(this.ngControl.control.status), skip(this.ngControl instanceof NgModel ? 1 : 0))
        .subscribe(() => {
          if (this.errorStateMatcher().isErrorVisible(this.ngControl.control, this.form)) {
            if (!this.componentRef) {
              this.componentRef = this.container().createComponent(InputErrorComponent)
              this.componentRef.changeDetectorRef.markForCheck()
            }
            this.componentRef.setInput('errors', this.ngControl.errors)
            console.log(this.ngControl.errors)
          } else {
            this.componentRef?.destroy()
            this.componentRef = null
          }
        })
    })
  }

  get form(): NgForm | FormGroupDirective | null {
    return this.parentContainer?.formDirective as NgForm | FormGroupDirective | null
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed(), just work in injection context
    this.errorMessageTrigger.unsubscribe()
  }
}
