import { mount } from 'avoriaz';

import Clock from '../../../../src/plugins/clock/Clock';

describe('Clock', () => {
  let component;

  beforeEach(() => {
    component = mount(Clock);
  });

  it('should display current time', () => {
    const time = new Date();
    const hours = time.getHours();
    let minutes = time.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    expect(component.text().trim()).toEqual(`${hours}:${minutes}`);
  });
});
