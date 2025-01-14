import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { KeyValuePipe } from '@angular/common'
import { ValidationErrors } from '@angular/forms'
import { ErrorMessagePipe } from './error-message.pipe'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-input-error',
  standalone: true,
  imports: [KeyValuePipe, ErrorMessagePipe, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (error of errors() | keyvalue; track $index) {
      <mat-error>
        {{ error.key | errorMessage: error.value }}
      </mat-error>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .input-error {
        color: var(--color-danger);
        white-space: nowrap;
        padding-block-start: 8px;
        padding-inline-start: 5px;
        font-size: 0.8rem;
      }
    `
  ]
})
export class InputErrorComponent {
  errors = input<ValidationErrors | undefined | null>(null)
}
