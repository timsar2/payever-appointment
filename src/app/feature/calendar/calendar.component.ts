import { Component, inject, OnInit, signal } from '@angular/core'
import { MonthlyViewComponent } from './monthly-view/monthly-view.component'
import { WeeklyViewComponent } from './weekly-view/weekly-view.component'
import { DailyViewComponent } from './daily-view/daily-view.component'
import { Appointment } from './models/appointment.model'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-calendar',
  imports: [MonthlyViewComponent, WeeklyViewComponent, DailyViewComponent, MatButtonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  calendarMode = signal<'monthly' | 'weekly' | 'daily'>('monthly')
  viewDate = signal<Date>(new Date())

  appointments = signal<Appointment[]>([])

  #route = inject(ActivatedRoute)

  dropItem(event: CdkDragDrop<Appointment[]>) {
    this.appointments.update(appointments => {
      moveItemInArray(appointments, event.previousIndex, event.currentIndex)
      return appointments
    })
  }

  showToday(): void {
    this.viewDate.set(new Date())
  }

  ngOnInit(): void {
    const appintments = this.#route.snapshot.data['appointments']

    if (appintments) {
      this.appointments.set(appintments)
    }
  }
}
