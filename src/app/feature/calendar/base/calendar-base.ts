import { Component, model, signal } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatChipsModule],
  template: ``
})
export class CalendarBaseComponent {
  viewDate = model.required<Date>()
  
  appointments = signal<Appointment[]>([
    {
      id: 1,
      dateTime: '2025-01-09T12:30',
      firstName: 'Ali',
      lastName: 'Golab',
      hasVisited: true
    },
    {
      id: 2,
      dateTime: '2025-01-09T13:00',
      firstName: 'Faezeh',
      lastName: 'Safari'
    },
    {
      id: 3,
      dateTime: '2025-01-11T16:45',
      firstName: 'Narges',
      lastName: 'Moghadam'
    },
  ])

  dropItem(event: CdkDragDrop<Appointment>, day: Date) {
    
    const appointment: Appointment = this.#getUpdatedAppointment(event.item.data, day);

    if (!appointment || !day) return;
    
    this.appointments.update(appointments => {
      appointments.map(x => x.id == appointment.id
        ? {...x, appointment }
        : x
      
      )

      return appointments;
    })
  }

  #getUpdatedAppointment(appointment: Appointment, day: Date): Appointment {
    const updatedDateTime = new Date(day);
    const prvDateTime = new Date(appointment.dateTime);

    updatedDateTime.setHours(prvDateTime.getHours());
    updatedDateTime.setMinutes(prvDateTime.getMinutes());

    appointment.dateTime = updatedDateTime.getFullYear() + '-' +
      ('0' + (updatedDateTime.getMonth() + 1)).slice(-2) + '-' +
      ('0' + updatedDateTime.getDate()).slice(-2) + 'T' +
      ('0' + updatedDateTime.getHours()).slice(-2) + ':' +
      ('0' + updatedDateTime.getMinutes()).slice(-2);

    return appointment
  }

  showToday(): void {
    this.viewDate.set(new Date())
  }

  showAppointment(appointment: Appointment){
    debugger
  }
}

