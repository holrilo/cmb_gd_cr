import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ConfigComponent } from './components/pages/config/config.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { CompanyComponent } from './components/pages/config/company/company.component';

export const routes: Routes = [
    {
        path:'',
        component : ContainerAppComponent,
        children:[
            {
                path:'home',
                component: HomeComponent
            },
            {
                path: 'config',
                component: ConfigComponent
            },
            {
                path: 'company',
                component: CompanyComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: '/home'
    }
    
];
