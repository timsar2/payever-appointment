import { Component, signal } from '@angular/core';
import { MonthlyViewComponent } from './monthly-view/monthly-view.component';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';
import { DailyViewComponent } from './daily-view/daily-view.component';

@Component({
  selector: 'app-calendar',
  imports: [MonthlyViewComponent,WeeklyViewComponent,DailyViewComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  calendarMode = signal<'monthly' | 'weekly' | 'daily'>('monthly')
}
