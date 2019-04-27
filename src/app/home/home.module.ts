import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
