import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { Appointment } from '../../models/appointment.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-appointment-dialog',
  imports:[MatFormFieldModule,MatDialogModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,MatDatepickerModule,
    MatNativeDateModule, MatCheckboxModule],
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent {
  appointment: Appointment

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { appointment: Appointment; isEdit: boolean }
  ) {
    this.appointment = { ...data.appointment }
  }

  save() {
    this.dialogRef.close({appointment: this.appointment})
  }

  cancel() {
    this.dialogRef.close(null)
  }

  delete() {
    this.dialogRef.close({appointment: this.appointment, isDelete: true})
  }
}
