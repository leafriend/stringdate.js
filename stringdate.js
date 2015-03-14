/*
 * String-Date JavaScript Library
 * @leafriend
 * http://github.com/leafriend/string.js
 * MIT
 */

String.THROW_WHEN_INVALID_DATE = true

String.prototype.toDate = function(dateIsOmittable, monthIsOmittable) {

    var date = null;
    var str = "0000-00-00";

    if (/^\d{4}-\d{2}-\d{2}$/.test(this))
        str = new String(this);
    else if (dateIsOmittable && /^\d{4}-\d{2}$/.test(this))
        str = this + "-01";
    else if (dateIsOmittable && monthIsOmittable && /^\d{4}$/.test(this))
        str = this + "-01-01";

    date = new Date(str);
    if (isNaN(date.getTime()) || date.toISOString().substring(0, 10) != str)
        if (String.THROW_WHEN_INVALID_DATE)
            throw new Error("String '" + this + "' is not a form of 'yyyy-MM-dd'");
        else
            return undefined;

    return date;

}

String.prototype.getYear = function() {
    return this.toDate().getFullYear();
}

String.prototype.getMonth = function() {
    return this.toDate().getMonth() + 1;
}

String.prototype.getDate = function() {
    return this.toDate().getDate();
}

String.prototype.getDay = function() {
    var date = this.toDate();
    return date.getDay();
}

String.prototype.getLastDate = function() {
    var date = this.toDate(true);
    var lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDate.getDate();
}

String.prototype.isLeapYear = function() {
    var date = this.toDate(true, true);
    date = new Date(date.getFullYear(), 2, 0);
    return date.getDate() == 29;
}

String.prototype.getDaysFrom = function(date) {
    var from = this.toDate();
    var to = date.toString().toDate();
    return (from - to) / (1000 * 60 * 60 * 24);
}

String.prototype.addDays = function(days) {
    var date = this.toDate();
    date.setDate(date.getDate() + days);
    return date.toISOString().substring(0, 10);
}
