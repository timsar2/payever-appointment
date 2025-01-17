import { inject } from '@angular/core'
import { ResolveFn } from '@angular/router'
import { firstValueFrom } from 'rxjs'
import { CalendarService } from './calendar.service'
import { Appointment } from './models/appointment.model'

export const calendarResolver: ResolveFn<Appointment[]> = async (route, state) => {
  const calendarService = inject(CalendarService)
  const appointments = await firstValueFrom(calendarService.getAppointment())

  return !appointments ? [] : appointments
}
