import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

}
