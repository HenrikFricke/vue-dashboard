import Panel from '../../../src/patternLib/Panel';

import getComponent from '../helpers/getComponent';

describe('Panel', () => {
  let dispatch;
  let component;
  let props;

  beforeEach(() => {
    props = {
      isVisible: false,
      onCloseClick: jasmine.createSpy('onCloseClick'),
      title: 'Title',
    };

    dispatch = jasmine.createSpy('dispatch');
    component = getComponent(Panel, {}, dispatch, props);
  });

  describe('is visible', () => {
    beforeEach(() => {
      props = {
        ...props,
        isVisible: true,
      };

      component = getComponent(Panel, {}, dispatch, props);
    });

    it('should render overlay', () => {
      expect(component.find('.overlay').length).toBe(1);
    });

    it('should render panel', () => {
      expect(component.find('.panel').length).toBe(1);
    });

    it('should render proper header title', () => {
      expect(component.find('.header-title')[0].text().trim())
        .toEqual(props.title);
    });

    it('should call onCloseClick on click to close button', () => {
      component.find('.header-close')[0].trigger('click');

      expect(props.onCloseClick).toHaveBeenCalled();
    });
  });

  describe('is not visible', () => {
    it('should not render overlay', () => {
      expect(component.find('.overlay').length).toBe(0);
    });

    it('should not render panel', () => {
      expect(component.find('.panel').length).toBe(0);
    });
  });
});
