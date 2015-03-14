/*
 * Tests for stringdate.js
 *
 * node stringdate-test.js
 */

var assert = require("assert");

require("./stringdate.js");

// test: toDate()
assert.throws(function() { "2015-Mar-14".toDate(); }, Error);
assert.throws(function() { "2015-00-14" .toDate(); }, Error);
assert.throws(function() { "2015-13-14" .toDate(); }, Error);
assert.throws(function() { "2015-03-00" .toDate(); }, Error);
assert.throws(function() { "2015-03-32" .toDate(); }, Error);
assert.throws(function() { "2015-04-31" .toDate(); }, Error);
assert.throws(function() { "999-03-14"  .toDate(); }, Error);

String.THROW_WHEN_INVALID_DATE = false;
assert.equal("2015-Mar-14".toDate(), undefined);
String.THROW_WHEN_INVALID_DATE = true;
assert.throws(function() { "2015-Mar-14".toDate(); }, Error);

// test: getYear()
assert.strictEqual("2015-03-14".getYear(), 2015);
assert.strictEqual("1900-03-14".getYear(), 1900);
assert.strictEqual("1000-03-14".getYear(), 1000);

// test: getMonth()
assert.strictEqual("2015-03-14".getMonth(), 3 , "Month of '2015-03-14' should be 3");
assert.strictEqual("2015-01-14".getMonth(), 1 , "Month of '2015-01-14' should be 1");
assert.strictEqual("2015-12-14".getMonth(), 12, "Month of '2015-12-14' should be 12");

// test: getDate()
assert.strictEqual("2015-03-14".getDate(), 14);
assert.strictEqual("2015-03-01".getDate(), 1 );
assert.strictEqual("2015-03-31".getDate(), 31);

// test: getDay()
assert.strictEqual("2015-03-01".getDay(), 0);
assert.strictEqual("2015-03-14".getDay(), 6);
assert.strictEqual("2015-03-31".getDay(), 2);

// test: getLastDate()
assert.strictEqual("1500-02-14".getLastDate(), 28);
assert.strictEqual("1600-02-14".getLastDate(), 29);
assert.strictEqual("1700-02-14".getLastDate(), 28);
assert.strictEqual("1800-02-14".getLastDate(), 28);
assert.strictEqual("1900-02-14".getLastDate(), 28);
assert.strictEqual("2000-01-14".getLastDate(), 31);
assert.strictEqual("2015-02-14".getLastDate(), 28);
assert.strictEqual("2015-03-14".getLastDate(), 31);
assert.strictEqual("2015-04-14".getLastDate(), 30);
assert.strictEqual("2015-05-14".getLastDate(), 31);
assert.strictEqual("2015-06-14".getLastDate(), 30);
assert.strictEqual("2015-07-14".getLastDate(), 31);
assert.strictEqual("2015-08-14".getLastDate(), 31);
assert.strictEqual("2015-09-14".getLastDate(), 30);
assert.strictEqual("2015-10-14".getLastDate(), 31);
assert.strictEqual("2015-11-14".getLastDate(), 30);
assert.strictEqual("2015-12-14".getLastDate(), 31);
assert.strictEqual("2015-02-14".getLastDate(), 28);
assert.strictEqual("2016-02-14".getLastDate(), 29);
assert.strictEqual("2017-02-14".getLastDate(), 28);

assert.strictEqual("1500-02".getLastDate(), 28);
assert.strictEqual("1600-02".getLastDate(), 29);
assert.strictEqual("1700-02".getLastDate(), 28);
assert.strictEqual("1800-02".getLastDate(), 28);
assert.strictEqual("1900-02".getLastDate(), 28);
assert.strictEqual("2000-01".getLastDate(), 31);
assert.strictEqual("2015-02".getLastDate(), 28);
assert.strictEqual("2015-03".getLastDate(), 31);
assert.strictEqual("2015-04".getLastDate(), 30);
assert.strictEqual("2015-05".getLastDate(), 31);
assert.strictEqual("2015-06".getLastDate(), 30);
assert.strictEqual("2015-07".getLastDate(), 31);
assert.strictEqual("2015-08".getLastDate(), 31);
assert.strictEqual("2015-09".getLastDate(), 30);
assert.strictEqual("2015-10".getLastDate(), 31);
assert.strictEqual("2015-11".getLastDate(), 30);
assert.strictEqual("2015-12".getLastDate(), 31);
assert.strictEqual("2016-02".getLastDate(), 29);
assert.strictEqual("2017-02".getLastDate(), 28);

// test: isLeapYear()
assert.strictEqual("1500-02-14".isLeapYear(), false);
assert.strictEqual("1600-02-14".isLeapYear(), true);
assert.strictEqual("1700-02-14".isLeapYear(), false);
assert.strictEqual("1800-02-14".isLeapYear(), false);
assert.strictEqual("1900-02-14".isLeapYear(), false);
assert.strictEqual("2000-01-14".isLeapYear(), true);
assert.strictEqual("2015-02-14".isLeapYear(), false);
assert.strictEqual("2015-03-14".isLeapYear(), false);
assert.strictEqual("2015-04-14".isLeapYear(), false);
assert.strictEqual("2015-05-14".isLeapYear(), false);
assert.strictEqual("2015-06-14".isLeapYear(), false);
assert.strictEqual("2015-07-14".isLeapYear(), false);
assert.strictEqual("2015-08-14".isLeapYear(), false);
assert.strictEqual("2015-09-14".isLeapYear(), false);
assert.strictEqual("2015-10-14".isLeapYear(), false);
assert.strictEqual("2015-11-14".isLeapYear(), false);
assert.strictEqual("2015-12-14".isLeapYear(), false);
assert.strictEqual("2015-02-14".isLeapYear(), false);
assert.strictEqual("2016-02-14".isLeapYear(), true);
assert.strictEqual("2017-02-14".isLeapYear(), false);

assert.strictEqual("1500-02".isLeapYear(), false);
assert.strictEqual("1600-02".isLeapYear(), true);
assert.strictEqual("1700-02".isLeapYear(), false);
assert.strictEqual("1800-02".isLeapYear(), false);
assert.strictEqual("1900-02".isLeapYear(), false);
assert.strictEqual("2000-01".isLeapYear(), true);
assert.strictEqual("2015-02".isLeapYear(), false);
assert.strictEqual("2015-03".isLeapYear(), false);
assert.strictEqual("2015-04".isLeapYear(), false);
assert.strictEqual("2015-05".isLeapYear(), false);
assert.strictEqual("2015-06".isLeapYear(), false);
assert.strictEqual("2015-07".isLeapYear(), false);
assert.strictEqual("2015-08".isLeapYear(), false);
assert.strictEqual("2015-09".isLeapYear(), false);
assert.strictEqual("2015-10".isLeapYear(), false);
assert.strictEqual("2015-11".isLeapYear(), false);
assert.strictEqual("2015-12".isLeapYear(), false);
assert.strictEqual("2016-02".isLeapYear(), true);
assert.strictEqual("2017-02".isLeapYear(), false);

assert.strictEqual("1500".isLeapYear(), false);
assert.strictEqual("1600".isLeapYear(), true);
assert.strictEqual("1700".isLeapYear(), false);
assert.strictEqual("1800".isLeapYear(), false);
assert.strictEqual("1900".isLeapYear(), false);
assert.strictEqual("2000".isLeapYear(), true);
assert.strictEqual("2015".isLeapYear(), false);
assert.strictEqual("2016".isLeapYear(), true);
assert.strictEqual("2017".isLeapYear(), false);

// test: getDaysFrom()
assert.strictEqual("2015-03-31".getDaysFrom("2015-03-01"), 30 );
assert.strictEqual("2015-03-14".getDaysFrom("2015-03-14"), 0  );
assert.strictEqual("2015-03-01".getDaysFrom("2015-03-31"), -30);

// test: addDays()
assert.strictEqual("2014-12-31".addDays(  1), "2015-01-01");
assert.strictEqual("2014-12-31".addDays( 31), "2015-01-31");
assert.strictEqual("2014-12-31".addDays( 32), "2015-02-01");
assert.strictEqual("2014-12-31".addDays(366), "2016-01-01");
assert.strictEqual("2015-02-28".addDays(  1), "2015-03-01");
