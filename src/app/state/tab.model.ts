import { ID } from '@datorama/akita';

export interface Tab {
  _id: ID;
  models: Object[];
}

export function createTab(params: Partial<Tab>) {
  return {

  } as Tab;
}
