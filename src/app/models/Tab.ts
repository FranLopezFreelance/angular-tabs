import { ID } from '@datorama/akita';

export interface Tab {
  id: ID;
  url: string;
  name: string;
  active: boolean;
}
