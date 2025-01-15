import { Component, inject, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { Appointment } from '../../models/appointment.model'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { DynamicValidatorMessage } from '../../../../utils/input-error/dynamic-validator-message.directive'
import { TypedForm } from '../../../../utils/typed-form'
import { EmailValidator } from '../../../../utils/validators/email-validator'
import { TextValidator } from '../../../../utils/validators/text-validator'

@Component({
  selector: 'app-appointment-dialog',
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    DynamicValidatorMessage,
    ReactiveFormsModule
  ],
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent {
  appointmentForm = TypedForm<Appointment>({
    id: [],
    firstName: ['', TextValidator.validateAlphabetOnly],
    lastName: ['', [TextValidator.validateAlphabetOnly, Validators.required]],
    age: [null, [TextValidator.validPositiveNumber, Validators.required]],
    dateTime: ['', Validators.required],
    email: ['', [EmailValidator.validEmail, Validators.required]],
    hasVisited: [false]
  })

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { appointment: Appointment; isEdit: boolean }
  ) {
    this.appointmentForm.patchValue({ ...data.appointment } as any)
  }

  save() {
    this.appointmentForm.markAllAsTouched()
    if (!this.appointmentForm.valid) {
      return
    }

    this.dialogRef.close({ appointment: this.appointmentForm.getRawValue() })
  }

  cancel() {
    this.dialogRef.close(null)
  }

  delete() {
    this.dialogRef.close({ appointment: this.appointmentForm.getRawValue(), isDelete: true })
  }
}
