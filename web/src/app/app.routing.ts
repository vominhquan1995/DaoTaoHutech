import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";
import { Login } from "app/components/login/login.component";
import { LayoutComponent } from "app/components/layout.component";
import { HomeComponent } from "app/components/home/home.component";

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      // {
      //   path: 'quan-ly-bot-dai-ca', component: BotDaiCaPage, children: [
      //     { path: '', redirectTo: 'bot-dai-ca-list', pathMatch: 'full' },
      //     { path: 'bot-dai-ca-list', component: AdminBotDaiCaComponent }
      //   ]
      // }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
