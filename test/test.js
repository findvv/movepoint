var movepoint = require('../index');
var assert = require("assert")
describe('移动小数点', function(){
  describe('movepoint(1.1, 2)', function(){
    it('小数点左移', function(){
      assert.equal(-0.011, movepoint(-1.1, -2));
    })
  })
  describe('movepoint(1.1, -2)', function(){
    it('小数点左移', function(){
      assert.equal(0.011, movepoint(1.1, -2));
    })
  })
  describe('movepoint(1.1, 0)', function(){
    it('数字不变', function(){
      assert.equal(1.1, movepoint(1.1, 0) );
    })
  })
  describe('movepoint(-1.1, 2)', function(){
    it('补充0', function(){
      assert.equal(110, movepoint(1.1, 2));
    })
  })
  describe('movepoint(-1.1, 2)', function(){
    it('补充0', function(){
      assert.equal(-110, movepoint(-1.1, 2));
    })
  })
})
