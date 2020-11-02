import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TabStore } from './state.model';

export interface TabsState extends EntityState<TabStore> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tabs', idKey: '_id' })
export class TabsStore extends EntityStore<TabsState> {

  constructor() {
    super();
  }

}
