import { compileToFunctions } from 'vue-template-compiler';
import { mount } from 'avoriaz';

import List from '../List';

describe('List', () => {
  let DefaultChild;
  let component;

  beforeEach(() => {
    DefaultChild = compileToFunctions('<p>default</p>');

    const slots = {
      default: DefaultChild,
    };

    component = mount(List, { slots });
  });

  it('should render (<ul />) element', () => {
    expect(component.is('ul')).toBeTruthy();
  });

  it('should render default slot', () => {
    expect(component.contains(DefaultChild)).toBeTruthy();
  });
});
