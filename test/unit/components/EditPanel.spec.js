import EditPanel from '../../../src/components/EditPanel';
import Panel from '../../../src/patternLib/Panel';
import ListItem from '../../../src/patternLib/ListItem';
import getComponent from '../helpers/getComponent';

describe('EditPanel', () => {
  let cards;
  let component;
  let store;

  beforeEach(() => {
    cards = [
      {
        label: 'Card 1',
      },
      {
        label: 'Card 2',
      },
    ];

    store = {
      getters: {
        isEditMode: () => true,
        cards: () => cards,
      },
      actions: {
        toggleEditMode: jasmine.createSpy(),
        deleteCard: jasmine.createSpy(),
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

  describe('list of cards', () => {
    it('should be present', () => {
      expect(component.find(ListItem).length).toBe(2);
    });

    it('should have card name as label for list item', () => {
      const item = component.find(ListItem)[0];

      expect(item.text().trim()).toBe(cards[0].label);
    });

    it('should have proper options', () => {
      const item = component.find(ListItem)[0];

      expect(item.getProp('options')).toEqual([{
        label: 'Delete',
        clickHandler: jasmine.any(Function),
      }]);
    });
  });
});
