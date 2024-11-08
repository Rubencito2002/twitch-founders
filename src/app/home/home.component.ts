import { Component } from '@angular/core';
import { FoundersComponent } from '../founders/founders.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoundersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
