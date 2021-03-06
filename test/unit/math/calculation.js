suite('Calculation', function() {

  suite('p5.prototype.abs', function() {
    var abs = p5.prototype.abs;
    var result;
    suite('abs()', function() {
      test('should be a function', function() {
        assert.ok(abs);
        assert.typeOf(abs, 'function');
      });
      test('should return a number', function() {
        result = abs();
        assert.typeOf(result, 'number');
      });
      test('should return an absolute value', function() {
        result = abs(-1);
        assert.equal(result, 1);
        assert.notEqual(result, -1);
      });
    });
  });

});