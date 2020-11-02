import { Component, OnDestroy, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Subscription } from 'rxjs';
import { TabsService } from 'src/app/core/services/tabs.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit, OnDestroy {

  tabId: ID;
  storeSubscription: Subscription;

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
        //
      }
    });
  }

  ngOnDestroy(){
    this.tabsService.updateTabStore(this.tabId, {models: []});
    if(this.storeSubscription){
      this.storeSubscription.unsubscribe();
    }
  }

}
