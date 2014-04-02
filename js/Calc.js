/**
 * Created by rhett on 4/1/14.
 */

var Calc = function () {
    this.total = 0;

    this.equals = function () {
        return this.total;
    };
    this.clear = function () {
        this.total = 0;
        return this;
    };

    this.add = function () {
        var self = this;
        arguments.forEach(function (i) {
            self.total += i;
        });
        return this;
    };
    this.subtract = function () {
        var self = this;
        arguments.forEach(function (i) {
            self.total -= i;
        });
        return this;
    };
    this.multiply = function () {
        var self = this;
        arguments.forEach(function (i) {
            self.total *= i;
        });
        return this;
    };
    this.divide = function () {
        var self = this;
        arguments.forEach(function (i) {
            self.total /= i;
        });
        return this;
    };

    this.less = this.minus = this.subtract;
    this.greaterThan = this.plus = this.add;
    this.and = this.by = this.multiply;
    this.over = this.dividedBy = this.divide;

};