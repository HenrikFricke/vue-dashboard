import { compileToFunctions } from 'vue-template-compiler';
import { mount } from 'avoriaz';

import Panel from '../Panel';

describe('Panel', () => {
  let DefaultChild;
  let HeaderChild;
  let component;
  let slots;

  beforeEach(() => {
    DefaultChild = compileToFunctions('<p>default</p>');
    HeaderChild = compileToFunctions('<p>header</p>');

    slots = {
      default: DefaultChild,
      header: HeaderChild,
    };

    component = mount(Panel, { slots });
  });

  describe('slots', () => {
    it('should render default slot', () => {
      expect(component.find('.pl-panel__body')[0].contains(DefaultChild)).toBeTruthy();
    });

    it('should render header slot', () => {
      expect(component.find('.pl-panel__header')[0].contains(HeaderChild)).toBeTruthy();
    });
  });

  describe('back button', () => {
    beforeEach(() => {
      component = mount(Panel, {
        slots,
        propsData: {
          showBackButton: true,
        },
      });
    });

    it('should be present', () => {
      expect(component.find('.pl-panel__back').length).toBe(1);
    });

    it('should emit event', () => {
      const listener = jasmine.createSpy('listener');

      component.vm.$on('back', listener);
      component.find('.pl-panel__back')[0].trigger('click');

      expect(listener).toHaveBeenCalled();
    });
  });
});
