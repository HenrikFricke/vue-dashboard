import { compileToFunctions } from 'vue-template-compiler';

import Panel from '../../../src/patternLib/Panel';

import getComponent from '../helpers/getComponent';

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

    it('should render overlay', () => {
      expect(component.find('.overlay').length).toBe(1);
    });

    it('should render panel', () => {
      expect(component.find('.panel').length).toBe(1);
    });

    it('should render proper header title', () => {
      expect(component.find('.header-title')[0].text().trim())
        .toEqual(propsData.title);
    });

    it('should call onCloseClick on click to close button', () => {
      component.find('.header-close')[0].trigger('click');

      expect(propsData.onCloseClick).toHaveBeenCalled();
    });

    it('should pass children to slot', () => {
      const body = component.find('.body')[0];

      expect(body.contains(Child)).toBeTruthy();
    });
  });

  describe('is not visible', () => {
    it('should not render overlay', () => {
      const overlay = component.find('.overlay')[0];

      expect(overlay.element.style.display).toEqual('none');
    });

    it('should not render panel', () => {
      const panel = component.find('.panel')[0];

      expect(panel.element.style.display).toEqual('none');
    });
  });
});
