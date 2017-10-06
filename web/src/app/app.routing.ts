import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from "app/guards/auth.guard";
import { Login } from "app/components/login/login.component";
import { LayoutComponent } from "app/components/layout.component";
import { HomeComponent } from "app/components/home/home.component";
import { ScheduleComponent } from "app/components/schedule/schedule.component";
import { ScoresComponent } from "app/components/scores/scores.component";
import { ExamScheduleComponent } from "app/components/exam-schedule/exam-schedule.component";

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'scores', component: ScoresComponent },
      { path: 'exam-schedule', component: ExamScheduleComponent },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
