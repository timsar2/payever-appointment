import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav'
import { MatIcon } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { HeaderComponent } from '../header/header.component'
import { MenuItem, Pages } from './models/menu-item.model'
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [
    HeaderComponent,
    RouterModule,
    RouterLink,
    //Material
    MatSidenavModule,
    MatButtonModule,
    MatIcon,
    MatListModule,
    RouterOutlet
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  sidenav = viewChild<MatDrawer>('sidenav')
  pages = signal<MenuItem[]>(Pages)
}
