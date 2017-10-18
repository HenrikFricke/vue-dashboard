import { compileToFunctions } from 'vue-template-compiler';
import { mount } from 'avoriaz';

import Button from '../Button';

describe('Button', () => {
  let DefaultChild;
  let component;
  let slots;

  beforeEach(() => {
    DefaultChild = compileToFunctions('<p>default</p>');

    slots = {
      default: DefaultChild,
    };

    component = mount(Button, { slots });
  });

  it('should render (<button />) element', () => {
    expect(component.is('button')).toBeTruthy();
  });

  it('should render default slot', () => {
    expect(component.contains(DefaultChild)).toBeTruthy();
  });

  it('should emit click event', () => {
    const listener = jasmine.createSpy('listener');

    component.vm.$on('click', listener);
    component.trigger('click');

    expect(listener).toHaveBeenCalled();
  });

  describe('small variation', () => {
    it('should add modifier class', () => {
      component = mount(Button, {
        slots,
        propsData: {
          small: true,
        },
      });

      expect(component.hasClass('pl-button--small')).toBeTruthy();
    });
  });
});
