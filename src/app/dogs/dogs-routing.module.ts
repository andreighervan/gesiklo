import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrainTrainingDownloadEbookComponent } from './components/brain-training-download-ebook/brain-training-download-ebook.component';
import { BrainTrainingThankYouComponent } from './components/brain-training-thank-you/brain-training-thank-you.component';
import { BrainTrainingComponent } from './components/brain-training/brain-training.component';

const routes: Routes = [{ path: '', component: BrainTrainingComponent },
{ path: 'brain-training-download', component: BrainTrainingDownloadEbookComponent },
{ path: 'brain-training', component: BrainTrainingComponent },
{ path: 'brain-training-thank-you', component: BrainTrainingThankYouComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
