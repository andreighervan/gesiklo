import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioptimizersDownloadEbookComponent } from './components/bioptimizers-download-ebook/bioptimizers-download-ebook.component';
import { BioptimizersThankYouComponent } from './components/bioptimizers-thank-you/bioptimizers-thank-you.component';
import { BioptimizersComponent } from './components/bioptimizers/bioptimizers.component';
import { HipflexorsDownloadEbookComponent } from './components/hipflexors/hipflexors-download-ebook/hipflexors-download-ebook.component';
import { HipflexorsThankYouComponent } from './components/hipflexors/hipflexors-thank-you/hipflexors-thank-you.component';
import { HipflexorsComponent } from './components/hipflexors/hipflexors/hipflexors.component';

import { FitnessComponent } from './fitness.component';

const routes: Routes = [{ path: '', component: FitnessComponent },
{ path: 'bioptimizers-download', component: BioptimizersDownloadEbookComponent },
{ path: 'bioptimizers', component: BioptimizersComponent },
{ path: 'bioptimizers-thank-you', component: BioptimizersThankYouComponent },
{ path: 'hipflexors', component: HipflexorsComponent },
{ path: 'hipflexors-thank-you', component: HipflexorsThankYouComponent },
{ path: 'hipflexors-download', component: HipflexorsDownloadEbookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessRoutingModule { }
