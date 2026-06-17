import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'home',
        loadComponent : () => import('./pages/home/home')
    },
    {
        path : 'skills',
        loadComponent : () => import ('./pages/skills/skills')
    },
    {
        path :'experience',
        loadComponent : () => import ('./pages/experience/experience')
    },{
        path : 'proyect',
        loadComponent : () => import('./pages/proyect/proyect')
    },{
        path : 'contact' ,
        loadComponent : () => import ('./pages/contact/contact')
    },{
        path : '**',
        redirectTo : ()=> {
            return 'home';
        }
    }
];
