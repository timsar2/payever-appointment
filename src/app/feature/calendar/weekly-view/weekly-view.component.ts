import { Component, input, model } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { CalendarBaseComponent } from '../base/calendar-base';

@Component({
  selector: 'app-weekly-view',
  imports: [],
  templateUrl: './weekly-view.component.html',
  styleUrl: './weekly-view.component.scss'
})
export class WeeklyViewComponent extends CalendarBaseComponent {
}
