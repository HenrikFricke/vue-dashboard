import * as actions from '../actions';

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

    it('should persist changes', () => {
      actions.deleteCard({ commit: commitSpy }, {});
      expect(commitSpy).toHaveBeenCalledWith('persistCards');
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

    it('should persist changes', () => {
      actions.deleteCard({ commit: commitSpy }, {});
      expect(commitSpy).toHaveBeenCalledWith('persistCards');
    });
  });

  describe('deleteCard', () => {
    it('should commit proper mutation', () => {
      const payload = { index: 0 };

      actions.deleteCard({ commit: commitSpy }, payload);
      expect(commitSpy).toHaveBeenCalledWith('deleteCard', payload);
    });

    it('should persist changes', () => {
      actions.deleteCard({ commit: commitSpy }, {});
      expect(commitSpy).toHaveBeenCalledWith('persistCards');
    });
  });

  describe('loadCardsFromStorage', () => {
    it('should commit proper mutation', () => {
      actions.loadCardsFromStorage({ commit: commitSpy });
      expect(commitSpy).toHaveBeenCalledWith('loadCardsFromStorage');
    });
  });

  describe('toggleEditMode', () => {
    it('should commit proper mutation', () => {
      actions.toggleEditMode({ commit: commitSpy });
      expect(commitSpy).toHaveBeenCalledWith('toggleEditMode');
    });
  });
});
