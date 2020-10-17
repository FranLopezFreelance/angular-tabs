import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';
import { Tab4Component } from './components/tab4/tab4.component';
import { Tab5Component } from './components/tab5/tab5.component';


const routes: Routes = [
  {path: 'tab1', component: Tab1Component},
  {path: 'tab2', component: Tab2Component},
  {path: 'tab3', component: Tab3Component},
  {path: 'tab4', component: Tab4Component},
  {path: 'tab5', component: Tab5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
