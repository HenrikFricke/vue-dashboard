import { compileToFunctions } from 'vue-template-compiler';
import { mount } from 'avoriaz';

import ListItem from '../ListItem';

describe('ListItem', () => {
  let DefaultChild;
  let RightChild;
  let component;
  let slots;

  beforeEach(() => {
    DefaultChild = compileToFunctions('<p>default</p>');
    RightChild = compileToFunctions('<p>right</p>');

    slots = {
      default: DefaultChild,
      right: RightChild,
    };

    component = mount(ListItem, { slots });
  });

  describe('general', () => {
    it('should render list (<li />) element', () => {
      expect(component.is('li')).toBeTruthy();
    });

    it('should not emit click event', () => {
      const listener = jasmine.createSpy('listener');

      component.vm.$on('click', listener);
      component.trigger('click');

      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe('slots', () => {
    it('should render default slot', () => {
      expect(component.find('.pl-list-item__label')[0].contains(DefaultChild)).toBeTruthy();
    });

    it('should render right slot', () => {
      expect(component.find('.pl-list-item__right')[0].contains(RightChild)).toBeTruthy();
    });
  });

  describe('small variation', () => {
    it('should add modifier class', () => {
      component = mount(ListItem, {
        slots,
        propsData: {
          small: true,
        },
      });

      expect(component.hasClass('pl-list-item--small')).toBeTruthy();
    });
  });

  describe('clickable active', () => {
    it('should add modifier class', () => {
      component = mount(ListItem, {
        slots,
        propsData: {
          clickable: true,
        },
      });

      expect(component.hasClass('pl-list-item--clickable')).toBeTruthy();
    });

    it('should emit click event', () => {
      const listener = jasmine.createSpy('listener');

      component = mount(ListItem, {
        slots,
        propsData: {
          clickable: true,
        },
      });

      component.vm.$on('click', listener);
      component.trigger('click');

      expect(listener).toHaveBeenCalled();
    });
  });
});
