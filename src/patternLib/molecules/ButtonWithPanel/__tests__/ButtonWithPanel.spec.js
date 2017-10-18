import { compileToFunctions } from 'vue-template-compiler';
import { mount } from 'avoriaz';

import Button from '../../../atoms/Button/Button';
import ButtonWithPanel from '../ButtonWithPanel';

describe('ButtonWithPanel', () => {
  let DefaultChild;
  let ButtonChild;
  let component;
  let slots;

  beforeEach(() => {
    DefaultChild = compileToFunctions('<p>default</p>');
    ButtonChild = compileToFunctions('<p>button</p>');

    slots = {
      default: DefaultChild,
      button: ButtonChild,
    };

    component = mount(ButtonWithPanel, { slots });
  });

  describe('general', () => {
    it('should render button slot', () => {
      expect(component.find(Button)[0].contains(ButtonChild)).toBeTruthy();
    });
  });

  describe('panel is open', () => {
    beforeEach(() => {
      component.find(Button)[0].trigger('ckick');
    });

    it('should render default slot', () => {
      expect(component.contains(DefaultChild)).toBeTruthy();
    });
  });
});
