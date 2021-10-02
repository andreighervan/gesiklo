import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DogsRoutingModule } from './dogs-routing.module';
import { BrainTrainingComponent } from './components/brain-training/brain-training.component';
import { BrainTrainingDownloadEbookComponent } from './components/brain-training-download-ebook/brain-training-download-ebook.component';
import { BrainTrainingThankYouComponent } from './components/brain-training-thank-you/brain-training-thank-you.component';
import { DogsComponent } from './dogs.component';


@NgModule({
  declarations: [BrainTrainingComponent, BrainTrainingDownloadEbookComponent, BrainTrainingThankYouComponent, DogsComponent],
  imports: [
    CommonModule,
    DogsRoutingModule,
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
export class DogsModule { }
