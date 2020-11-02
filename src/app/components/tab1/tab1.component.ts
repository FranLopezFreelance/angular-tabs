import { Component, OnDestroy, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Subscription } from 'rxjs';
import { TabsService } from 'src/app/core/services/tabs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit, OnDestroy {

  tabId: ID;
  storeSubscription: Subscription;

  form1: any = {
    _id: 'form1',
    name: '',
    email: ''
  }

  constructor(
    private tabsService: TabsService
  ) { }

  ngOnInit() {
    this.tabId = this.tabsService.getCurrentTabId();
    this.getTabInStore();
  }

  getTabInStore(){
    this.storeSubscription = this.tabsService.getTabStore(this.tabId).subscribe(tab => {
      if(tab){
        if(tab.models.length){
          this.form1 = {...tab.models[0]};
        }
      }
    });
  }

  ngOnDestroy(){
    this.tabsService.updateTabStore(this.tabId, {models: [this.form1]});
    if(this.storeSubscription){
      this.storeSubscription.unsubscribe();
    }
  }

}
