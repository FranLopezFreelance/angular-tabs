import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TabsService } from '../core/services/tabs.service';
import { Tab } from '../models/Tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(
    public tabsService: TabsService
  ) { }

  ngOnInit() {}

  selectTab(i) {
    this.tabsService.setActiveTab(i);
  }

  closeTab(i){
    this.tabsService.closeTab(i);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tabsService.tabs, event.previousIndex, event.currentIndex);
    this.tabsService.saveTabsInStorage();
  }

}
