import { Component, computed, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monthly-view',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './monthly-view.component.html',
  styleUrl: './monthly-view.component.scss'
})
export class MonthlyViewComponent {
  viewDate = signal(new Date())
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


  days = computed(() => {
    const startOfMonth = new Date(this.viewDate().getFullYear(), this.viewDate().getMonth(), 1);
    const endOfMonth = new Date(this.viewDate().getFullYear(), this.viewDate().getMonth() + 1, 0);

    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - startOfMonth.getDay())

    const endDate = new Date(endOfMonth);
    endDate.setDate(endDate.getDate() + (6 - endOfMonth.getDay()))

    const daysArray: Date[] = []
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      daysArray.push(new Date(date))
    }
    return daysArray
  });

  prevMonth(): void {
    const current = this.viewDate();
    this.viewDate.set(new Date(current.getFullYear(), current.getMonth() - 1, 1))
  }

  nextMonth(): void {
    const current = this.viewDate();
    this.viewDate.set(new Date(current.getFullYear(), current.getMonth() + 1, 1))
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.viewDate().getMonth();
  }

  selectDay(day: Date): void {
    alert(`Selected date: ${day.toDateString()}`)
  }
}