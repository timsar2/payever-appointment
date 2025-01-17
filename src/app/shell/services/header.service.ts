import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  title = signal('Header')

  setTitle(title: string) {
    this.title.set(title)
  }
}
