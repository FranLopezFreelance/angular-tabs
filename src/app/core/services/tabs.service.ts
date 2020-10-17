import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tabs } from 'src/app/mocks/tabs';
import { Tab } from 'src/app/models/Tab';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  tabs: Tab[] = tabs;

  constructor(
    private router: Router
  ) {
    if(localStorage.getItem('TABS')){
      this.tabs = JSON.parse(localStorage.getItem('TABS'));
    }
    if(this.tabs.length == 0){
      this.router.navigate(['/']);
    }
  }

  newTab(url: string, name: string): void {
    if(this.tabs.length < 7){
      const tab = {
        url, name, active: true
      }
      this.tabs.map(t => t.active = false);
      this.tabs.push(tab);
      this.router.navigate([url]);
      this.saveTabsInStorage();
    }
  }

  setActiveTab(i: number): void {
    this.tabs.map(t => t.active = false);
    this.tabs[i].active = true;
    this.router.navigate([this.tabs[i].url]);
    this.saveTabsInStorage();
  }

  closeTab(i: number){
    if(this.tabs.length>1){
      if(this.tabs[i].active){
        if(i > 0){
          this.setActiveTab(i-1);
        }else{
          this.setActiveTab(i+1);
        }
      }
    }else{
      this.router.navigate(['/']);
    }
    this.tabs.splice(i, 1);

  }

  saveTabsInStorage(){
    localStorage.setItem('TABS', JSON.stringify(this.tabs));
  }
}
