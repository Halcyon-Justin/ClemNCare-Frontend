import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FamilyManagementComponent } from './components/family-management/family-management.component';
import { InvoiceManagementComponent } from './components/invoice-management/invoice-management.component';
import { ReportCardsComponent } from './components/report-cards/report-cards.component';
import { CreateReportCardsComponent } from './components/create-report-cards/create-report-cards.component';
import { CreateEditFamilyComponent } from './components/create-edit-family/create-edit-family.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'family-management', component: FamilyManagementComponent },
      { path: 'create-edit-family/:id', component: CreateEditFamilyComponent },
      { path: 'invoice-management', component: InvoiceManagementComponent },
      { path: 'report-cards', component: ReportCardsComponent },
      { path: 'create-report-cards/:id', component: CreateReportCardsComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
