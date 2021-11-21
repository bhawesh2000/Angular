import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { DishselectComponent } from '../dishselect/dishselect.component';
import { MenuComponent } from '../menu/menu.component';

export const routes: Routes=[
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'menu', component: MenuComponent}
    

];