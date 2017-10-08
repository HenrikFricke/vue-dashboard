import EditButton from '../../../src/components/EditButton';

import getComponent from '../helpers/getComponent';

describe('EditButton', () => {
  let component;
  let store;

  beforeEach(() => {
    store = {
      actions: {
        toggleEditMode: jasmine.createSpy(),
      },
    };

    component = getComponent(EditButton, store);
  });

  it('should have text `Edit`', () => {
    expect(component.text().trim()).toEqual('Edit');
  });

  it('should toggle edit mode on click', () => {
    component.trigger('click');

    expect(store.actions.toggleEditMode).toHaveBeenCalled();
  });
});
