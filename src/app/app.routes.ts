import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'home',
        loadComponent : () => import('./pages/home/home')
    },
    {
        path : 'skills',
        loadComponent : () => import ('./pages/skills/skills'),
        children: [
            {path: 'frontend',
                loadComponent : () => import ('./components/skills/frontend/frontend')
            },{
                path : 'backend',
                loadComponent : () => import('./components/skills/backend/backend')
            },{
                path : 'tools',
                loadComponent : () => import('./components/skills/tools/tools')
            },{
                path : '**',
                redirectTo : () => {
                    return 'frontend';
                }
            }
            
        ]
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
        path :'about-me',
        loadComponent : () => import('./pages/about-me/about-me')
    },{
        path : '**',
        redirectTo : ()=> {
            return 'home';
        }
    }
];
