import { ID, EntityState } from '@datorama/akita';

export interface Tabs {
  tabs: TabStore[];
}

export interface TabStore {
  _id: ID;
  models: any[];
}
