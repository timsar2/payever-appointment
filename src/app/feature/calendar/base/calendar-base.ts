import { Component, DestroyRef, inject, model, OnInit, signal } from '@angular/core'
import { CdkDragDrop } from '@angular/cdk/drag-drop'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'
import { Appointment } from '../models/appointment.model'
import { MatDialog } from '@angular/material/dialog'
import { AppointmentDialogComponent } from '../ui/appointment-dialog/appointment-dialog.component'
import { HttpClient } from '@angular/common/http'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { firstValueFrom } from 'rxjs'
import { CalendarService } from '../calendar.service'
import { formatDate } from '../../../utils/formatDate'

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatChipsModule],
  template: ``
})
export class CalendarBaseComponent implements OnInit {
  viewDate = model.required<Date>()

  dialog = inject(MatDialog)
  calendarService = inject(CalendarService)
  #destroyRef = inject(DestroyRef)

  appointments = signal<Appointment[]>([])

  dropItem(event: CdkDragDrop<Appointment>, day: Date) {
    const appointment: Appointment = this.#getUpdatedAppointment(event.item.data, day)

    if (!appointment || !day) return

    this.appointments.update(appointments => {
      appointments.map(x => (x.id == appointment.id ? { ...x, appointment } : x))

      return appointments
    })
  }

  #getUpdatedAppointment(appointment: Appointment, day: Date): Appointment {
    const updatedDateTime = new Date(day)
    const prvDateTime = new Date(appointment.dateTime)

    updatedDateTime.setHours(prvDateTime.getHours())
    updatedDateTime.setMinutes(prvDateTime.getMinutes())

    appointment.dateTime = formatDate(updatedDateTime)

    return appointment
  }

  showToday(): void {
    this.viewDate.set(new Date())
  }

  openDialog(day: Date, appointment?: Appointment) {
    const isEdit = !appointment ? false : true

    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '400px',
      data: { appointment: appointment || { dateTime: formatDate(day) }, isEdit }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isDelete) {
          this.deleteAppointment(result.appointment.id)
        } else if (isEdit) {
          this.updateAppointment(result.appointment)
        } else {
          this.createAppointment(result.appointment)
        }
      }
    })
  }

  createAppointment(newAppointment: Appointment) {
    newAppointment.id = Math.max(...this.appointments().map(a => a.id), 0) + 1
    this.appointments.update(current => [...current, newAppointment])
  }

  updateAppointment(updatedAppointment: Appointment) {
    this.appointments.update(current =>
      current.map(appointment => (appointment.id === updatedAppointment.id ? updatedAppointment : appointment))
    )
  }

  deleteAppointment(id: number) {
    this.appointments.update(current => current.filter(appointment => appointment.id !== id))
  }

  async fetchAppointment() {
    const data = await firstValueFrom(this.calendarService.getAppointment())
    if (data) {
      this.appointments.set(data)
    }
  }

  ngOnInit(): void {
    this.fetchAppointment()
  }
}
