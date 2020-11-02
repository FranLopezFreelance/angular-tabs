import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/core/services/tabs.service';
import { sections } from 'src/app/mocks/sections';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  sections: any[] = sections;

  constructor(
    private tabSrevice: TabsService
  ) { }

  ngOnInit() {
  }

  newTab(url: string, name: string){
    this.tabSrevice.newTab(url, name);
  }

}
