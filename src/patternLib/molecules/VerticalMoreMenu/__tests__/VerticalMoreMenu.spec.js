import { mount } from 'avoriaz';

import IconButton from '../../../atoms/IconButton/IconButton';
import ListItem from '../../../atoms/List/ListItem';
import VerticalMoreMenu from '../VerticalMoreMenu';

describe('VerticalMoreMenu', () => {
  let component;
  let propsData;

  beforeEach(() => {
    propsData = {
      items: [
        {
          label: 'Option A',
          clickHandler: jasmine.createSpy('click handler'),
        },
        {
          label: 'Option B',
          clickHandler() {},
        },
      ],
    };

    component = mount(VerticalMoreMenu, { propsData });
  });

  describe('initial state', () => {
    it('should render button with `more_vert` icon', () => {
      expect(component.find(IconButton)[0].text().trim()).toEqual('more_vert');
    });

    it('should not render a menu', () => {
      expect(component.find(ListItem).length).toBe(0);
    });
  });

  describe('opened menu', () => {
    beforeEach((done) => {
      component.find(IconButton)[0].trigger('click');
      setTimeout(done);
    });

    it('should render two list items', () => {
      expect(component.find(ListItem).length).toBe(2);
    });

    it('should pass proper data to list item', () => {
      const item = component.find(ListItem)[0];
      item.vm.$listeners.click();

      expect(item.getProp('clickable')).toBeTruthy();
      expect(item.getProp('small')).toBeTruthy();
      expect(item.text().trim()).toEqual(propsData.items[0].label);
      expect(propsData.items[0].clickHandler).toHaveBeenCalled();
    });
  });
});
