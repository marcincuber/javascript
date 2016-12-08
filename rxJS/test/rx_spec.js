(function() {
    'use strict';
})();

describe('Traversing an Array', function() {
    describe('Traversing an Array v1', function() {
        it('returns full list', function() {
            expect(scan_array(["Ben", "Jafar", "Matt", "Priya", "Brian"])).toEqual(["Ben", "Jafar", "Matt", "Priya", "Brian"]);
        });
        it('returns empty array', function() {
            expect(scan_array([])).toEqual([]);
        });
    });

    describe('Traversing an Array v2', function() {
        it('returns full list', function() {
            expect(scan_array_func(["Ben", "Jafar", "Matt", "Priya", "Brian"])).toEqual(["Ben", "Jafar", "Matt", "Priya", "Brian"]);
        });
        it('returns empty array', function() {
            expect(scan_array([])).toEqual([]);
        });
    });
});