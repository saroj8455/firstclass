import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ToastModule, ButtonModule, CardModule],
})
export class PrimeConfigModule {}
