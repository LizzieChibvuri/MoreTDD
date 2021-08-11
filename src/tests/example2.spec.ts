describe("Age",()=>{

    it("Target year greater than birth year should be year part difference in years ",()=>{
        //Arrange
        const age=new Age();
        const expected = 19;
        //Act
        const actual = age.getAge(new Date("1982-09-30"),new Date("2001-10-5"));
        //Assert
        expect(actual).toBe(expected);
    })

   it("Birth year greater than target year age should be undefined",()=>{
        //Arrange
        const age=new Age();
        const expected = 19;
        //Act
        const actual = age.getAge(new Date("1982-09-30"),new Date("2001-10-5"));
        //Assert
        expect(actual).toBe(expected);
    })

    it("Target month before birth month age should be year part difference  minus 1",()=>{
        //Arrange
        const age=new Age();
        const expected = 19;
        //Act
        const actual = age.getAge(new Date("1981-09-30"),new Date("2001-08-5"));
        //Assert
        expect(actual).toBe(expected);
    })

  
})

class Age{
    getAge(dateOfBirth:Date,targetDate:Date):number{

       if(targetDate.getMonth()<dateOfBirth.getMonth()){
        return (targetDate.getFullYear()-dateOfBirth.getFullYear())-1;
       }
       return targetDate.getFullYear()-dateOfBirth.getFullYear()
    }
    
}