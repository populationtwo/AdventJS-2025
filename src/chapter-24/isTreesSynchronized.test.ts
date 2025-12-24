import isTreesSynchronized from './isTreesSynchronized';

describe('Challenge #24: 🪞 Check if trees are magical mirrors', () => {
  describe('isTreesSynchronized', () => {
    test('should return true for synchronized (mirrored) trees', () => {
      const tree1 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' },
      };

      const tree2 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '⭐' },
      };

      expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '🎄']);
    });

    test('should return false when values do not match in mirror position', () => {
      const tree1 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' },
      };

      const tree3 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '🎁' },
      };

      expect(isTreesSynchronized(tree1, tree3)).toEqual([false, '🎄']);
    });

    test('should return false for identical but non-synchronized trees', () => {
      const tree1 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' },
      };

      const tree4 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' },
      };

      expect(isTreesSynchronized(tree1, tree4)).toEqual([false, '🎄']);
    });

    test('should return false when root values differ', () => {
      expect(isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' })).toEqual([false, '🎅']);
    });
  });
});
