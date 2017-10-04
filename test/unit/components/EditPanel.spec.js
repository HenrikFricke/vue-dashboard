import EditPanel from '../../../src/components/EditPanel';
import Panel from '../../../src/patternLib/Panel';

import getComponent from '../helpers/getComponent';

describe('EditPanel', () => {
  let component;
  let store;

  beforeEach(() => {
    store = {
      getters: {
        isEditMode: () => true,
      },
      actions: {
        toggleEditMode: jasmine.createSpy(),
      },
    };

    component = getComponent(EditPanel, store);
  });

  it('should pass proper props to Panel component', () => {
    const panel = component.find(Panel)[0];

    panel.getProp('onCloseClick')();

    expect(panel.getProp('isVisible')).toBeTruthy();
    expect(panel.getProp('title')).toEqual('Edit');
    expect(store.actions.toggleEditMode).toHaveBeenCalled();
  });
});
