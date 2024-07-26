import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzModule } from './nz.module';

@NgModule({
  imports: [CommonModule, NzModule],
  exports: [CommonModule, NzModule],
})
export class SharedModule {}
