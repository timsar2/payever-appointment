import { Component } from '@angular/core'
import { MatChipsModule } from '@angular/material/chips'
import { CommonModule } from '@angular/common'
import { CalendarBaseComponent } from '../base/calendar-base'

export interface Vegetable {
  name: string
}

@Component({
  selector: 'app-daily-view',
  imports: [CommonModule, MatChipsModule],
  templateUrl: './daily-view.component.html',
  styleUrl: './daily-view.component.scss'
})
export class DailyViewComponent extends CalendarBaseComponent {}
