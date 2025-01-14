import {CdkDragDrop, CdkDropList,} from '@angular/cdk/drag-drop';
import { Component, input, output } from '@angular/core';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-calendar-drop-list',
  imports: [CdkDropList],
  templateUrl: './calendar-drop-list.component.html',
  styleUrl: './calendar-drop-list.component.scss'
})
export class CalendarDropListComponent {
  day = input.required<Date>()
  data = input.required<Appointment[]>()
  index = input.required<number>()
  connectedDropLists = input.required<string[]>()
  onDropItem = output<CdkDragDrop<any>>()
}
