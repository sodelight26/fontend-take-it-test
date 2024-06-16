import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'; 
import { LoginpageComponent } from './loginpage/loginpage.component'; 

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    {path: 'homepage', component:HomepageComponent},
    {path: 'loginpage', component:LoginpageComponent},

];
