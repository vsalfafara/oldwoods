import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oldwoods'
  open = false

  toggleNav() {
    this.open = !this.open
    document.body.classList.toggle('hide-overflow')
  }

  closeNav() {
    this.open = false
    document.body.classList.remove('hide-overflow')
  }

}
