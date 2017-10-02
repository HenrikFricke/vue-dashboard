import * as actions from '../../../src/store/actions';

describe('Actions', () => {
  let commitSpy;

  beforeEach(() => {
    commitSpy = jasmine.createSpy('commit');
  });

  describe('addCard', () => {
    it('should commit proper mutation', () => {
      const payload = { key: 'value' };

      actions.addCard({ commit: commitSpy }, payload);
      expect(commitSpy).toHaveBeenCalledWith('addCard', payload);
    });
  });

  describe('addPlugin', () => {
    it('should commit proper mutation', () => {
      const payload = { key: 'value' };

      actions.addPlugin({ commit: commitSpy }, payload);
      expect(commitSpy).toHaveBeenCalledWith('addPlugin', payload);
    });
  });

  describe('storeCardData', () => {
    it('should commit proper mutation', () => {
      const payload = { key: 'value' };

      actions.storeCardData({ commit: commitSpy }, payload);
      expect(commitSpy).toHaveBeenCalledWith('storeCardData', payload);
    });
  });

  describe('deleteCard', () => {
    it('should commit proper mutation', () => {
      const payload = { index: 0 };

      actions.deleteCard({ commit: commitSpy }, payload);
      expect(commitSpy).toHaveBeenCalledWith('deleteCard', payload);
    });
  });
});
