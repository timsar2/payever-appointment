import { Component, linkedSignal } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { inject } from '@angular/core'
import { AuthService } from '@app/shell/auth/auth.service'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  #authService = inject(AuthService)
  authSignal = linkedSignal(this.#authService.authSignal)

  async logout() {
    await this.#authService.logout()
  }

  doLogin() {
    this.#authService.login('admin')
  }
}
