import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FamilyManagementComponent } from './components/family-management/family-management.component';
import { InvoiceManagementComponent } from './components/invoice-management/invoice-management.component';
import { ReportCardsComponent } from './components/report-cards/report-cards.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'family-management', component: FamilyManagementComponent },
      { path: 'invoice-management', component: InvoiceManagementComponent },
      { path: 'report-cards', component: ReportCardsComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
