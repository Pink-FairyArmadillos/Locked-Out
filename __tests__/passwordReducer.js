import subject from '../client/reducers/passwordReducer';

describe('passwordReducer', () => {
  let state;

  beforeEach(() => {
    state = {
      userID: 0,
    };
  });

  describe('default state', () => {
    it('should return the default state when called without arguments', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action type', () => {
    it('should return the given state without any duplication', () => {
      const action = { type: 'junk' };
      const state = {};
      expect(subject(state, action)).toBe(state);
    });
  });

  describe('ADD_USER_ID', () => {
    const action = { type: 'ADD_USER_ID', payload: 123 };

    it('should update the userID state', () => {
      expect(subject(state, action).userID).toEqual(123);
    });

    it('should not modify the original state', () => {
      expect(subject(state, action)).not.toBe(state);
    });
  });
});
