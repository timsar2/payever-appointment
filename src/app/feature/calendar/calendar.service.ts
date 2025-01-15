import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Appointment } from './models/appointment.model'

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  http = inject(HttpClient)

  getAppointment(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('assets/appointments.json')
  }

  updateAppointment(appointments: Appointment[]): Observable<Appointment[]> {
    // real api must be call
    return this.http.post<Appointment[]>('assets/appointments.json', appointments)
  }

  deleteAppointment(): Observable<Appointment[]> {
    // real api must be call
    return this.http.delete<Appointment[]>('assets/appointments.json')
  }
}
