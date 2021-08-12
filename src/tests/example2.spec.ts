import { Age } from "./Age";

describe("Age",()=>{

    [
        {birthDate:new Date("1982-09-30"),targetDate:new Date("2001-10-5")},
        {birthDate:new Date("1981-09-15"),targetDate:new Date("2001-09-30")},
        {birthDate:new Date("1981-09-30"),targetDate:new Date("2001-09-30")}

    ].forEach(dates=>{
        it("Given birth and target date age should be year part difference in years ",()=>{
            //Arrange
            const age=new Age();
            const expected = dates.targetDate.getFullYear()-dates.birthDate.getFullYear();
            //Act
            const actual = age.getAge(dates.birthDate,dates.targetDate);
            //Assert
            expect(actual).toBe(expected);
        })
    });
    

    [
        {birthDate:new Date("1982-12-31"),targetDate:new Date("2001-01-15")},
        {birthDate:new Date("1981-09-30"),targetDate:new Date("2001-08-5")},
        {birthDate:new Date("1981-09-30"),targetDate:new Date("2001-09-15")}

    ].forEach(dates=>{
        it("Given birth and target date age  should be year part difference in years minus 1",()=>{
            //Arrange
            const age=new Age();
            const expected = dates.targetDate.getFullYear()-dates.birthDate.getFullYear()-1;
            //Act
            const actual = age.getAge(dates.birthDate,dates.targetDate);
            //Assert
            expect(actual).toBe(expected);
        })
    })
})

