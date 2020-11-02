import { ID, EntityState } from '@datorama/akita';

export interface Tabs {
  tabs: TabStore[];
}

export interface TabStore {
  _id: ID;
  models: Model[];
}

export interface Model {
  _id: ID;
  data: any;
}
