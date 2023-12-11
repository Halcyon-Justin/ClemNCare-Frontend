import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FamilyManagementComponent } from './components/family-management/family-management.component';
import { InvoiceManagementComponent } from './components/invoice-management/invoice-management.component';
import { ReportCardsComponent } from './components/report-cards/report-cards.component';
import { CreateEditFamilyComponent } from './components/create-edit-family/create-edit-family.component';
import { CreateReportCardsComponent } from './components/create-report-cards/create-report-cards.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    FamilyManagementComponent,
    InvoiceManagementComponent,
    ReportCardsComponent,
    CreateEditFamilyComponent,
    CreateReportCardsComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [FormBuilder]
})
export class AdminModule { }
