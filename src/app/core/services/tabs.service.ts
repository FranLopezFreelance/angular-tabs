import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tabs } from 'src/app/mocks/tabs';
import { Tab } from 'src/app/models/Tab';
import { Location } from "@angular/common";
import { TabsStore } from 'src/app/state/tabs.store';
import { TabsQuery } from 'src/app/state/tabs.query';
import { TabStore } from 'src/app/state/state.model';
import { ID } from '@datorama/akita';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  tabs: Tab[] = [];
  paths: Tab[] = tabs;

  constructor(
    private router: Router,
    private location: Location,
    private tabsStore: TabsStore,
    private tabsQuery: TabsQuery,
  ) {
    this.initialState();
  }

  initialState(){
    //Inicializar el store
    if(localStorage.getItem('TABS')){
      /* this.tabs = JSON.parse(localStorage.getItem('TABS'));
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
      } */
    }else{
      localStorage.setItem('TABS', JSON.stringify(this.tabs));
    }
    if(this.tabs && this.tabs.length == 0){
      this.router.navigate(['/']);
    }

  }

  newTab(url: string, name: string): void {
    const id = new Date().getTime();
    //Tengo que buscar en el store si está este tab y cargarlo
    //Si no está lo agrego
    if(this.tabs.length < 12){
      const tab = {
        id, url, name, active: true
      }
      this.setTabsInactive();
      this.tabs.push(tab);
      this.router.navigate([url]);
      this.saveTabsInStorage();
      this.addTabStore({_id: id, models: []});
    }
  }

  getCurrentTabId(){
    const tab = this.tabs.filter(t => t.active === true);
    return tab[0].id;
  }

  setActiveTab(i: number): void {
    //Tengo que buscar en el store si está este tab y cargarlo
    //Si no está lo agrego
    this.setTabsInactive();
    this.tabs[i].active = true;
    this.router.navigate([this.tabs[i].url]);
    this.saveTabsInStorage();
  }

  closeTab(i: number){
    //Tengo que sacar el tab del store
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
    this.deleteTabStore(this.tabs[i].id);
    this.tabs.splice(i, 1);
    this.saveTabsInStorage();
  }

  setTabsInactive(){
    //nada que hacer con store
    this.tabs.map(t => t.active = false);
  }

  saveTabsInStorage(){
    //nada que hacer con store
    localStorage.setItem('TABS', JSON.stringify(this.tabs));
  }

  addTabStore(tab: TabStore){
    this.tabsStore.add(tab);
  }

  getTabStore(id: ID){
    if(this.tabsQuery.hasEntity(id)){
      return this.tabsQuery.selectEntity(id);
    }else{
      return of(null);
    }
  }

  updateTabStore(id: ID, tab: Partial<TabStore>){
    this.tabsStore.update(id, tab);
  }

  deleteTabStore(id: ID){
    this.tabsStore.remove(id);
  }
}
