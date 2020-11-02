import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsService } from './core/services/tabs.service';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';
import { Tab4Component } from './components/tab4/tab4.component';
import { Tab5Component } from './components/tab5/tab5.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
    Tab5Component,
    NavBarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  providers: [TabsService, { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
