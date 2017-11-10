import { compileToFunctions } from 'vue-template-compiler';
import { mount } from 'avoriaz';

import Icon from '../Icon';

describe('Icon', () => {
  let DefaultChild;
  let component;
  let slots;

  beforeEach(() => {
    DefaultChild = compileToFunctions('<p>default</p>');

    slots = {
      default: DefaultChild,
    };

    component = mount(Icon, { slots });
  });

  it('should render (<i />) element', () => {
    expect(component.is('i')).toBeTruthy();
  });

  it('should render default slot', () => {
    expect(component.contains(DefaultChild)).toBeTruthy();
  });

  describe('small variation', () => {
    it('should add modifier class', () => {
      component = mount(Icon, {
        slots,
        propsData: {
          small: true,
        },
      });

      expect(component.hasClass('pl-icon--small')).toBeTruthy();
    });
  });
});
