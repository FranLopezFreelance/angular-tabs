import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TabsStore, TabsState } from './tabs.store';

@Injectable({ providedIn: 'root' })
export class TabsQuery extends QueryEntity<TabsState> {

  constructor(protected store: TabsStore) {
    super(store);
  }

}
