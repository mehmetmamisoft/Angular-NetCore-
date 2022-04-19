import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //index.html'den geliyo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Mehmet Seydal';

}
