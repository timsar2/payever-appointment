import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatDrawer } from '@angular/material/sidenav'
import { HeaderService } from '@app/shell/services/header.service'

@Component({
  standalone: true,
  imports: [
    //Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  drawer = input.required<MatDrawer>()
  title = inject(HeaderService).title
}
