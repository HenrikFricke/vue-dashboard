import EditPanel from '../../../src/components/EditPanel';
import Panel from '../../../src/patternLib/Panel';
import ListItem from '../../../src/patternLib/ListItem';
import SelectListItem from '../../../src/patternLib/SelectListItem';
import getComponent from '../helpers/getComponent';

describe('EditPanel', () => {
  let cards;
  let component;
  let store;
  let plugins;

  beforeEach(() => {
    cards = [
      {
        label: 'Card 1',
      },
      {
        label: 'Card 2',
      },
    ];

    plugins = [
      {
        ID: 'plugin1',
        LABEL: 'Plugin 1',
      },
    ];

    store = {
      getters: {
        isEditMode: () => true,
        cards: () => cards,
        plugins: () => plugins,
      },
      actions: {
        toggleEditMode: jasmine.createSpy(),
        deleteCard: jasmine.createSpy(),
        addCard: jasmine.createSpy('addCard'),
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

  describe('add new card dialog', () => {
    it('should be present', () => {
      expect(component.find(SelectListItem).length).toBe(1);
    });

    it('should have proper label', () => {
      expect(component.find(SelectListItem)[0].text().trim())
        .toBe('Add new card');
    });

    it('should have the plugins as options', () => {
      expect(component.find(SelectListItem)[0].getProp('options'))
        .toEqual([
          {
            id: 'plugin1',
            label: 'Plugin 1',
          },
        ]);
    });

    it('should have click handler', () => {
      const clickHandler = component.find(SelectListItem)[0].getProp('clickHandler');
      clickHandler(123);

      expect(store.actions.addCard).toHaveBeenCalled();
    });
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
