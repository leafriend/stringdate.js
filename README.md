String-Date JavaScript Library
========================================

The `stringdate.js` provides functions handling [String][mdn-string] as a [Date][mdn-date].

Usage
----------------------------------------

### Valid Format

Valid format is `"yyyy-MM-dd"` in general. `"yyyy-MM"` is allowed for `getLastDate()` and `isLeapYear()`. `"yyyy"` is allowed for `isLeapYear()` only.

*Note* that the string should be valid syntactically and semantically. It means `"2015-04-31"` is not valid in `stringdate.js` while it makes a date of May 1st, 2015 in vanilla JavaScript.

All functions in below should applied on valid format, otherwise it throws `Error`.

### Getting Year, Month, Date, and Day

`String.prototype.getYear()`
: Returns year of 4-digits.

`String.prototype.getMonth()`
: Returns month between 1 and 12.
: *Note* that vanilla JavaScript Date object's [`getMonth()`][mdn-date-getmonth] returns integer between 0 and 11.

`String.prototype.getDate()`
: Returns date of month between 1 and 28/29/30/31.

```javascript
// get year
"2015-03-14".getYear(); // 2015

// get month
"2015-03-14".getMonth(); // 3

// get date of month
"2015-03-14".getYear(); // 14

// get day of week
"2015-03-14".getDay(); // 6
```

### Dealing Last Date and Leap Year

```javascript
// get last date
"2015-02-01".getLastDate(); // 28
"2015-02".getLastDate(); // 28

// determine leap year
// 2015
"2015-02-01".isLeapYear(); // false
"2015-02".isLeapYear(); // false
"2015".isLeapYear(); // false
// 2016
"2016-02-01".isLeapYear(); // true
"2016-02".isLeapYear(); // true
"2016".isLeapYear(); // true
```
### Calculating days between dates

```javascript
// get days between two dates
"2015-03-31".getDaysFrom("2015-03-01"); // 30
"2015-04-01".getDaysFrom("2015-06-30"); // -90

// get date after/before a date
"2015-03-14".addDays(100); // "2015-06-22"
"2015-03-14".addDays(-28); // "2015-02-14"
```

Example
----------------------------------------

### Count working days

```javascript
var count = 0;
for (var date = "2015-04-01"; date <= "2015-06-30"; date = date.addDays(1))
    if (date.getDay() != 0 && date.getDay() != 6)
        count++;
console.log(count); // 65
```

License
----------------------------------------

[MIT](http://opensource.org/licenses/MIT)

[mdn-string]: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[mdn-date]: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[mdn-date-getmonth]: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
