var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-timefuture');

describe('next/timefuture', function () {

  it('nx.timefuture 1.将来	5分钟内	M分S秒后', function () {
    var now = '2018-06-14 17:12:50'
    var rs1 = nx.timefuture('2018-06-14 17:17:49', now);
    var rs2 = nx.timefuture('2018-06-14 17:12:51', now);
    var rs3 = nx.timefuture('2018-06-14 17:15:21', now);
    // console.log(rs1, rs2, rs3);

    assert.equal(rs1, '4分59秒后');
    assert.equal(rs2, '0分1秒后');
    assert.equal(rs3, '2分31秒后');
  });

  it('nx.timefuture 2.今天	今天H:M', function () {
    var now = '2018-06-14 17:12:50'
    var rs1 = nx.timefuture('2018-06-14 17:17:50', now);
    var rs2 = nx.timefuture('2018-06-14 18:18:51', now);
    var rs3 = nx.timefuture('2018-06-14 23:59:56', now);

    assert.equal(rs1, '今天17:17');
    assert.equal(rs2, '今天18:18');
    assert.equal(rs3, '今天23:59');
  });

  it('nx.timefuture 3.明天	明天H:M', function () {
    var now = '2018-06-14 17:12:50'
    var rs1 = nx.timefuture('2018-06-15 17:17:50', now);
    assert.equal(rs1, '明天17:17');
  });

  it('nx.timefuture 4.后天	后天H:M', function () {
    var now = '2018-06-14 17:12:50'
    var rs1 = nx.timefuture('2018-06-16 17:17:50', now);
    assert.equal(rs1, '后天17:17');
  });



  it('nx.timefuture 5.今年	m-d H:M', function () {
    var now = '2018-06-14 17:12:50'
    var rs1 = nx.timefuture('2018-06-18 17:17:50', now);
    assert.equal(rs1, '6-18 17:17');
  });

  it('nx.timefuture 6.更晚	Y-m-d', function () {
    var now = '2018-06-14 17:12:50'
    var rs1 = nx.timefuture('2019-01-18 17:17:50', now);
    // console.log(rs1);
    assert.equal(rs1, '2019-01-18');
  });

});
