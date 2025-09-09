import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('@ng-crypto-dashboard/features/coins/pages').then(m => m.CoinList),
    }
];
