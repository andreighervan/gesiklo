import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import { FitnessComponent } from './fitness.component';
import { BioptimizersComponent } from './components/bioptimizers/bioptimizers.component';
import { BioptimizersThankYouComponent } from './components/bioptimizers-thank-you/bioptimizers-thank-you.component';
import { BioptimizersDownloadEbookComponent } from './components/bioptimizers-download-ebook/bioptimizers-download-ebook.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { HipflexorsComponent } from './components/hipflexors/hipflexors/hipflexors.component';
import { HipflexorsDownloadEbookComponent } from './components/hipflexors/hipflexors-download-ebook/hipflexors-download-ebook.component';
import { HipflexorsThankYouComponent } from './components/hipflexors/hipflexors-thank-you/hipflexors-thank-you.component';


@NgModule({
  declarations: [FitnessComponent, BioptimizersComponent, BioptimizersThankYouComponent, BioptimizersDownloadEbookComponent, HipflexorsComponent, HipflexorsDownloadEbookComponent, HipflexorsThankYouComponent],
  imports: [
    CommonModule,
    FitnessRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    HttpClientJsonpModule,
    HttpClientModule
  ]
})
export class FitnessModule { }
