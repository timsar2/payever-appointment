import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, linkedSignal, model, output, signal } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList,} from '@angular/cdk/drag-drop';
import {MatChipGrid, MatChipRow,MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { Appointment } from '../../models/appointment.model';

export interface CalendarDropItem{
  appointments: Appointment[]
  day: Date
}

@Component({
  selector: 'app-calendar-cell',
  imports: [CommonModule, MatIconModule,MatChipsModule,
    MatChipsModule, CdkDropList, CdkDrag
  ],
  templateUrl: './calendar-cell.component.html',
  styleUrl: './calendar-cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarCellComponent {
  day = input<Date>()
  appointments = input<Appointment[]>([])
  connectedDropLists = input<string[]>([])
  onClick = output<void>()
  onAppointmentClick = output<Appointment>()
  onDropItem = output<CdkDragDrop<Appointment[]>>()

  isToday = linkedSignal(() => {
    const today = new Date()
    const inputDay = this.day()
    return (
      inputDay?.getDate() === today.getDate() &&
      inputDay?.getMonth() === today.getMonth() &&
      inputDay?.getFullYear() === today.getFullYear()
    )
  })

  isCurrentMonth = linkedSignal(() => {
    const today = new Date()
    return today.getMonth() === this.day()?.getMonth()
  })

  remove(id: number): void {
    // this.appointments.update(appointments => appointments.filter(appointment => appointment.id !== id))
  }

  edit(updatedAppointment: Appointment) {
    // this.appointments.update(appointments => 
    //   appointments.map(appointment => appointment.id === updatedAppointment.id ? updatedAppointment : appointment)
    // )
  }

  onChipClick(event: MouseEvent, appointment: Appointment): void {
    // Prevent the click event from propagating to the parent div
    event.stopPropagation();

    // Emit the clicked appointment
    this.onAppointmentClick.emit(appointment);
  }
}
