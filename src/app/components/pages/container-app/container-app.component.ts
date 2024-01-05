import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container-app',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './container-app.component.html',
  styleUrl: './container-app.component.scss'
})
export class ContainerAppComponent {

}
