import { Component, signal } from '@angular/core';
import { MonthlyViewComponent } from './monthly-view/monthly-view.component';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';
import { DailyViewComponent } from './daily-view/daily-view.component';
import { Appointment } from './models/appointment.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar',
  imports: [MonthlyViewComponent,WeeklyViewComponent,DailyViewComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  viewDate = signal<Date>(new Date)
  calendarMode = signal<'monthly' | 'weekly' | 'daily'>('monthly')

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

  dropItem(event: CdkDragDrop<Appointment[]>) {
    debugger
    this.appointments.update(appointments => {
      moveItemInArray(appointments, event.previousIndex, event.currentIndex);
      return appointments;
    })
  }

  showToday(): void {
    this.viewDate.set(new Date())
  }
}
