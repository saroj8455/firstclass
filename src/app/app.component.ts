import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GriddemoComponent } from './components/griddemo/griddemo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, GriddemoComponent],
})
export class AppComponent {
  title = 'firstclass';
}
