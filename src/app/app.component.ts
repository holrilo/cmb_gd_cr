import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/auth/login/login.component";
import { NgModel } from '@angular/forms';

// import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CompanyComponent } from './components/pages/config/company/company.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginComponent, CompanyComponent
    // MatToolbarModule,
    // MatSidenavModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MatCheckboxModule,
    // MatFormFieldModule,
    // MatButtonModule,
    // MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent {
  title = 'ControlRecepcion';

  options = this._formBuilder.group({
    bottom: 0,
    // fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) {}

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
