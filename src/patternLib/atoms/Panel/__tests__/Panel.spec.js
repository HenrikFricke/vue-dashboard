import { compileToFunctions } from 'vue-template-compiler';

import Panel from '../Panel';
import getComponent from '../../../../testHelpers/getComponent';

describe('Panel', () => {
  let Child;
  let component;
  let propsData;
  let slots;

  beforeEach(() => {
    Child = compileToFunctions('<p>test</p>');

    propsData = {
      isVisible: false,
      onCloseClick: jasmine.createSpy('onCloseClick'),
      title: 'Title',
    };

    slots = {
      default: Child,
    };

    component = getComponent(Panel, {}, { propsData, slots });
  });

  describe('is visible', () => {
    beforeEach(() => {
      propsData = {
        ...propsData,
        isVisible: true,
      };

      component = getComponent(Panel, {}, { propsData, slots });
    });

    it('should render panel', () => {
      expect(component.find('.panel').length).toBe(1);
    });

    it('should render proper header title', () => {
      expect(component.find('header')[0].text().trim())
        .toEqual(propsData.title);
    });

    it('should pass children to slot', () => {
      const body = component.find('.body')[0];

      expect(body.contains(Child)).toBeTruthy();
    });
  });

  describe('is not visible', () => {
    it('should not render panel', () => {
      expect(component.find('.panel').length).toBe(0);
    });
  });
});
