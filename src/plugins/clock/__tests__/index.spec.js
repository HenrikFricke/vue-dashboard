import * as clock from '../';
import Clock from '../Clock';

describe('Plugin: Clock', () => {
  it('should have an ID', () => {
    expect(clock.ID).toEqual('clock');
  });

  it('should have label', () => {
    expect(clock.LABEL).toEqual('Clock');
  });

  it('should have initial data store', () => {
    expect(clock.initialDataStore()).toEqual({});
  });

  it('should have a component', () => {
    expect(clock.component).toEqual(Clock);
  });
});
