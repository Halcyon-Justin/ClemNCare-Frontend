import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FamilyManagementComponent } from './components/family-management/family-management.component';
import { InvoiceManagementComponent } from './components/invoice-management/invoice-management.component';
import { ReportCardsComponent } from './components/report-cards/report-cards.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    FamilyManagementComponent,
    InvoiceManagementComponent,
    ReportCardsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
