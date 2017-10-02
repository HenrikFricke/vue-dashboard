import Clock from './Clock';

export const ID = 'clock';
export const LABEL = 'Clock';

export const component = Clock;

export function initialDataStore() {
  return {
    timezone: 'UTC',
  };
}
