const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe ('fizzBuzzer', function(){

	it('should be divisible by 5, 3, or 15 or be a number', function(){

		const normalCases = [
		{num: 5, expected: 'buzz'},
		{num: 45, expected: 'fizz-buzz'},
		{num: 6, expected: 'fizz'},
		{num: 2, expected: 2}	
		];

		normalCases.forEach(function(input) {
	      const answer = fizzBuzzer(input.num);
	      expect(answer).to.equal(input.expected);
	    });	
	});

	it ('should raise an error if arg is not a number', function(){

		const badInputs = [false, null, '3'];

		badInputs.forEach(function(input) {
			expect(function(){
				fizzBuzzer(input);
			}).to.throw(Error)
		})
	});

})