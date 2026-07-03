import {Routes} from '@angular/router';
import {MainLayout} from './shared/components/main-layout/main-layout';
import {Encounter} from './features/encounter/encounter';
import {Creature} from './features/creature/creature';
import {AuthLogin} from './features/auth/auth-login/auth-login';
import {authGuard} from './core/guards/auth-guard';

export const routes: Routes = [
  {path: 'login', component: AuthLogin},
  {
    path: "", component: MainLayout, canActivate: [authGuard],children: [
      {path: "", redirectTo: "encounter", pathMatch: "full"},
      {path: "encounter", component: Encounter},
      {path: "creature", component: Creature},
    ]
  },
];
