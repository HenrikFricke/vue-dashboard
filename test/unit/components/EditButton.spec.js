import EditButton from '../../../src/components/EditButton';

import getComponent from '../helpers/getComponent';

describe('EditButton', () => {
  let dispatch;
  let component;

  beforeEach(() => {
    dispatch = jasmine.createSpy('dispatch');
    component = getComponent(EditButton, {}, dispatch);
  });

  it('should have text `Edit`', () => {
    expect(component.text().trim()).toEqual('Edit');
  });

  it('should toggle edit mode on click', () => {
    component.trigger('click');

    expect(dispatch).toHaveBeenCalledWith('toggleEditMode', jasmine.any(Object));
  });
});
