import { compileToFunctions } from 'vue-template-compiler';

import SelectListItem from '../SelectListItem';
import getComponent from '../../../../testHelpers/getComponent';

describe('SelectListItem', () => {
  let Child;
  let clickHandler;
  let component;
  let options;
  let propsData;
  let slots;

  beforeEach(() => {
    Child = compileToFunctions('<p>test</p>');

    clickHandler = jasmine.createSpy('clickHandler');

    options = [
      {
        label: 'Lorem Ipsum',
        id: '123',
      },
      {
        label: 'Lorem Ipsum 123',
        id: '456',
      },
    ];

    propsData = {
      options,
      clickHandler,
    };

    slots = {
      default: Child,
    };

    component = getComponent(SelectListItem, {}, { propsData, slots });
  });

  it('should render list (<li />) element', () => {
    expect(component.is('li')).toBeTruthy();
  });

  it('should render default slot', () => {
    expect(component.contains(Child)).toBeTruthy();
  });

  describe('butotn', () => {
    it('should open options list on click', () => {
      const label = component.find('.button')[0];
      label.trigger('click');

      expect(component.find('.options').length).toBe(1);
    });
  });

  describe('options', () => {
    beforeEach(() => {
      component.setData({ isOptionListOpen: true });
    });

    it('should render passed options', () => {
      expect(component.find('.options > li').length).toBe(options.length);
    });

    it('should render label', () => {
      const option = component.find('.options > li button')[0];

      expect(option.text().trim()).toEqual(options[0].label);
    });

    it('should have click handler', () => {
      const option = component.find('.options > li button')[0];
      option.trigger('click');

      expect(clickHandler).toHaveBeenCalledWith(options[0].id);
    });

    it('should close options list on click', () => {
      const option = component.find('.options > li button')[0];
      option.trigger('click');

      expect(component.find('.options').length).toBe(0);
    });
  });
});
