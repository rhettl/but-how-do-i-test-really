/**
 * Created by rhett on 4/1/14.
 */

var Calc = function (start) {
    this.total = start || 0;

    this.equals = function () {
        return this.total;
    };
    this.clear = function () {
        this.total = 0;
        return this;
    };
    this.set = function(num){
        this.total = num;
        return this;
    };

    this.add = function () {
        var self = this;
        Array.prototype.forEach.call(arguments, function (i) {
            self.total += i;
        });
        return this;
    };
    this.subtract = function () {
        var self = this;
        Array.prototype.forEach.call(arguments, function (i) {
            self.total -= i;
        });
        return this;
    };
    this.multiply = function () {
        var self = this;
        Array.prototype.forEach.call(arguments, function (i) {
            self.total *= i;
        });
        return this;
    };
    this.divide = function () {
        var self = this;
        Array.prototype.forEach.call(arguments, function (i) {
            self.total /= i;
        });
        return this;
    };

    this.less = this.minus = this.subtract;
    this.greaterThan = this.plus = this.add;
    this.and = this.by = this.times = this.multiply;
    this.over = this.dividedBy = this.divide;

};


var calcA = new Calc(5)
    .plus(6).greaterThan(10).add(1, 3)
    .less(10).minus(1, 2)
    .by(30).and(10)
    .over(3).dividedBy(16);

console.log(calcA.equals()); // equals 75



describe('A Number', function(){
    var number = 0;

    it('should equal 0 in the beginning', function(){
        expect(number).toEqual(0);
    });
    it('should be 5 after adding 5', function(){
        expect(number + 5).toEqual(5);
    });
    it('should not equal 10 when adding 3', function(){
        expect(number + 3).not.toEqual(10);
    });
    //it('should equal 10 when adding 3', function(){
    //    expect(number + 3).toEqual(10);
    //});
});
describe('A Calc', function(){
    var calc;

    beforeEach(function(){
        calc = new Calc(0);
    });

    it('should add 2 numbers', function(){
        expect(calc.plus(2).plus(10).equals()).toEqual(12);
    });
    it('should subtract 2 numbers', function(){
        expect(calc.plus(2).minus(10).equals()).toEqual(-8);
    });
    it('should multiply 2 numbers', function(){
        expect(calc.plus(2).times(10).equals()).toEqual(20);
    });
    it('should divide 2 numbers', function(){
        expect(calc.plus(2).over(10).equals()).toEqual(0.2);
    });
    it('should accept multiple args', function(){
        expect(calc.plus(2, 10).equals()).toEqual(12);
    });
    it('should reset back to 0 when reset', function(){
        expect(calc.plus(1,2,3).times(10).clear().equals()).toEqual(0);
    });
    it('should set the total to any number with set()', function(){
        expect(calc.set(100).equals()).toEqual(100);
    });
});







