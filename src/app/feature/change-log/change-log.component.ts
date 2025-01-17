import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-change-log',
  imports: [MatListModule, MatIconModule],
  templateUrl: './change-log.component.html',
  styleUrl: './change-log.component.scss'
})
export class ChangelogComponent {
  changelog = [
    { title: 'App Initializer', description: 'Load user authentication during app initialization.' },
    { title: 'Title Strategy Service', description: 'Implemented custom title strategy in app configuration.' },
    { title: 'Lazy Load Routing Children', description: 'lazy loading childrens component.' },
    { title: 'Lazy Load Component', description: 'Enabled lazy loading for individual components.' },
    { title: 'Routing Resolver', description: 'Added resolvers for preloading appointment data in routes.' },
    {
      title: 'Routing Guard for Dashboard Page',
      description: 'Implemented route guards for dashboard access control.'
    },
    { title: 'Local Service in Routes', description: 'Utilized a local service for the calendar page.' }
  ]
}
