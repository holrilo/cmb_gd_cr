import { Component } from '@angular/core';
import { ContainerAppComponent } from '../../container-app/container-app.component';
import { RouterOutlet } from '@angular/router';

import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from'@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar'


@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
  // ContainerAppComponent
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
