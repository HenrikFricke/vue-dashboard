import state from '../state';

describe('State', () => {
  it('should contain plugins', () => {
    expect(state.plugins.length).toBe(0);
  });

  it('should contain cards', () => {
    expect(state.plugins.length).toBe(0);
  });

  it('should contain isEditMode', () => {
    expect(state.isEditMode).toBeFalsy();
  });
});
