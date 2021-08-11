import { NaturalNumber } from "./NaturalNumber";
import { Result } from "./Result";

describe("Natural Numbers",()=>{
    
    [3,6,9,21,24].forEach(testCase=>{
        it("Divisible by 3 should return Fizz",()=>{
            //Arrange
            let expected =Result.fizz;
            const sut = createSUT();
            //Act
            let actual = sut.fizzBuzz(testCase);
            //Assert
            expect(actual).toBe(expected);
        })
    });

    [5,10,20,70,100].forEach(testCase=>{
        it("Divisible by 5 should return Buzz ",()=>{
            //Arrange
            let expected = Result.buzz;
            const sut = createSUT();
            //Act
            let actual = sut.fizzBuzz(testCase);
            //Assert
            expect(actual).toBe(expected);
        })
    });


    [15,30,45,90,180].forEach(testCase=>{
        it("Divisible by 15 should return FizzBuzz",()=>{
            //Arrange
            let expected =Result.fizzBuzz;
            const sut = createSUT();
            //Act
            let actual = sut.fizzBuzz(testCase);
            //Assert
            expect(actual).toBe(expected);
        })
    });


    [1,2,4,29,97].forEach(testCase=>{
        it("Not Divisible by 3 ,5 and 15 should return the number",()=>{
            //Arrange
            let expected = testCase;
            const sut = createSUT();
            //Act
            let actual = sut.fizzBuzz(testCase);
            //Assert
            expect(actual).toBe(expected);
        })
    });
    
})

export function createSUT() {
    return new NaturalNumber();
}


