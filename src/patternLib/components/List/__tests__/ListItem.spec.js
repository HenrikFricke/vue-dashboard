import { compileToFunctions } from 'vue-template-compiler';

import ListItem from '../ListItem';
import getComponent from '../../../../testHelpers/getComponent';

describe('ListItem', () => {
  let Child;
  let component;
  let options;
  let propsData;
  let slots;

  beforeEach(() => {
    Child = compileToFunctions('<p>test</p>');

    options = [
      {
        label: 'Settings',
        clickHandler: jasmine.createSpy('clickHandler'),
      },
    ];

    propsData = {
      options,
    };

    slots = {
      default: Child,
    };

    component = getComponent(ListItem, {}, { propsData, slots });
  });

  it('should render list (<li />) element', () => {
    expect(component.is('li')).toBeTruthy();
  });

  it('should render default slot', () => {
    expect(component.contains(Child)).toBeTruthy();
  });

  describe('more button', () => {
    it('should open options list', () => {
      const more = component.find('.more')[0];
      more.trigger('click');

      expect(component.find('.options').length).toBe(1);
    });

    describe('no options prop given', () => {
      it('should not be present', () => {
        component = getComponent(ListItem, {}, { slots });

        expect(component.find('.more').length).toBe(0);
      });
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

      expect(options[0].clickHandler).toHaveBeenCalled();
    });
  });
});
