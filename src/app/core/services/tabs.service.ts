import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tabs } from 'src/app/mocks/tabs';
import { Tab } from 'src/app/models/Tab';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  tabs: Tab[] = [];
  paths: Tab[] = tabs;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.initialState();
  }

  initialState(){

    if(localStorage.getItem('TABS')){
      this.tabs = JSON.parse(localStorage.getItem('TABS'));
      if(this.location.path().length && this.location.path() != '/'){
        const path = this.paths.filter(p => '/' + p.url == this.location.path());
        if(path){
          const pathInTabs = this.tabs.find(t => t.url == path[0].url);
          if(pathInTabs){
            this.setTabsInactive();
            pathInTabs.active = true;
          }else{
            this.newTab(path[0].url, path[0].name);
          }
        }
      }
      for(let i=0; i<this.tabs.length; i++){
        if(this.tabs[i].active){
          this.setActiveTab(i);
        }
      }
    }else{
      localStorage.setItem('TABS', JSON.stringify(this.tabs));
    }
    if(this.tabs && this.tabs.length == 0){
      this.router.navigate(['/']);
    }

  }

  newTab(url: string, name: string): void {
    if(this.tabs.length < 12){
      const tab = {
        url, name, active: true
      }
      this.setTabsInactive();
      this.tabs.push(tab);
      this.router.navigate([url]);
      this.saveTabsInStorage();
    }
  }

  setActiveTab(i: number): void {
    this.setTabsInactive();
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
    this.saveTabsInStorage();
  }

  setTabsInactive(){
    this.tabs.map(t => t.active = false);
  }

  saveTabsInStorage(){
    localStorage.setItem('TABS', JSON.stringify(this.tabs));
  }
}
