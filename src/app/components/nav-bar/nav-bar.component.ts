import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/core/services/tabs.service';
import { tabs } from 'src/app/mocks/tabs';
import { Tab } from 'src/app/models/Tab';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  tabs: Tab[] = tabs;
  constructor(
    private tabSrevice: TabsService
  ) { }

  ngOnInit() {
  }

  newTab(url: string, name: string){
    this.tabSrevice.newTab(url, name);
  }

}
