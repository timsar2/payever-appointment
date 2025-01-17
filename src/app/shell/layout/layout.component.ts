import { Component } from '@angular/core'
import { RouterModule, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-layout',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {}
