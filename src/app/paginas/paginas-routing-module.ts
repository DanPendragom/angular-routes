import { Routes } from '@angular/router';

import { InicialComponent } from './components/inicial/inicial.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';
import { ContatoComponent } from './components/contato/contato.component';


export const RoutesPaginas = [
    { 
        path: 'inicial', 
        component: InicialComponent
    },
    { 
        path: 'quemsomos', 
        component: QuemsomosComponent
    },
    { 
        path: 'contato', 
        component: ContatoComponent
    }
];