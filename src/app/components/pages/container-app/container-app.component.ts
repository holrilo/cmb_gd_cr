import { Component,ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../../app.component';
import {BreakpointObserver} from '@angular/cdk/layout';
import { CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatExpansionModule} from '@angular/material/expansion'
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-container-app',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AppComponent,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    CommonModule
    ],
  templateUrl: './container-app.component.html',
  styleUrl: './container-app.component.scss'
})
export class ContainerAppComponent {
//   options = this._formBuilder.group({
//     bottom: 0,
//     // fixed: false,
//     top: 0,
//   });

//   constructor(private _formBuilder: FormBuilder) {}

//   shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = false;

  constructor(private observe: BreakpointObserver){}

  ngOnInit(){
    this.observe.observe(['(max-width: 800px']).subscribe((ScreenSize)=>{
      if(ScreenSize.matches){
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    });
  }
  toggleMenu(){
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false;
    }else{
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
