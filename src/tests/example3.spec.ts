describe("Copier", () => {

    // ["m", "p", "f", "a"].forEach(input=>{
    //     it("copy characters", () => {
    //         //Arrange
    //         let fakeSource = {
    //             readChar: jest.fn()
    //         };
    //         fakeSource.readChar.mockReturnValueOnce(input);
    
    //         let fakeDest = {
    //             writeChar: jest.fn()
    //         }
    //         let sut = new Copier(fakeSource, fakeDest);
    //         //Act
    //         sut.copy();
    //         //Assert
    //         expect(fakeDest.writeChar).toBeCalledWith(input)
    //     })
    // });

    // ["m", "p", "\n", "a"].forEach(input=>{
    //     it("copy characters", () => {
    //         //Arrange
    //         let fakeSource = {
    //             readChar: jest.fn()
    //         };
    //         fakeSource.readChar.mockReturnValueOnce(input);
    
    //         let fakeDest = {
    //             writeChar: jest.fn()
    //         }
    //         let sut = new Copier(fakeSource, fakeDest);
    //         //Act
    //         sut.copy();
    //         //Assert
    //         expect(fakeDest.writeChar).toBeCalledWith(input)
    //     })
    // });

        it("copy 2 characters", () => {
            //Arrange
            let fakeSource = {
                readChar: jest.fn()
            };
            fakeSource.readChar.mockReturnValueOnce("m")
            .mockReturnValueOnce("b")
            .mockReturnValueOnce("\n")
            .mockReturnValueOnce("m");
    
            let fakeDest = {
                writeChar: jest.fn()
            }
            let sut = new Copier(fakeSource, fakeDest);
            //Act
            sut.copy();
            //Assert
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(1,"m");
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(2,"b");
            expect(fakeDest.writeChar).toBeCalledTimes(2);

        })

        it("copy 3 characters", () => {
            //Arrange
            let fakeSource = {
                readChar: jest.fn()
            };
            fakeSource.readChar.mockReturnValueOnce("m")
            .mockReturnValueOnce("b")
            .mockReturnValueOnce("z")
            .mockReturnValueOnce("\n")
            .mockReturnValueOnce("m");
    
            let fakeDest = {
                writeChar: jest.fn()
            }
            let sut = new Copier(fakeSource, fakeDest);
            //Act
            sut.copy();
            //Assert
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(1,"m");
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(2,"b");
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(3,"z");
            expect(fakeDest.writeChar).toBeCalledTimes(3);

        })

        it("copy 3 characters and ", () => {
            //Arrange
            let fakeSource = {
                readChar: jest.fn()
            };
            fakeSource.readChar.mockReturnValueOnce("m")
            .mockReturnValueOnce("b")
            .mockReturnValueOnce("c")
            .mockReturnValueOnce("z")
            .mockReturnValueOnce("\n");
    
            let fakeDest = {
                writeChar: jest.fn()
            }
            let sut = new Copier(fakeSource, fakeDest);
            //Act
            sut.copy();
            //Assert
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(1,"m");
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(2,"b");
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(3,"c");
            expect(fakeDest.writeChar).toHaveBeenNthCalledWith(4,"z")
            expect(fakeDest.writeChar).toBeCalledTimes(4);

        })
  
  

    // it("copy characters", () => {
    //     //Arrange
    //     let fakeSource = {
    //         readChar: jest.fn()
    //     };
    //     fakeSource.readChar.mockReturnValueOnce("\n");

    //     let fakeDest = {
    //         writeChar: jest.fn()
    //     }
    //     let sut = new Copier(fakeSource, fakeDest);
    //     //Act
    //     sut.copy();
    //     //Assert
    //     expect(fakeDest.writeChar)
    // })
    
})



class Copier {

    private source: ISource;
    private destination: IDestination;

    constructor(source: ISource, destination: IDestination) {
        this.source = source;
        this.destination = destination;
    }

    copy() {
         let char:string;
       
        while(char!=="\n"){

            char=this.source.readChar();
            if(char!=="\n"){
                this.destination.writeChar(char);
            } 
        }     
    }
}


interface ISource {
    readChar(): string
}

interface IDestination {
    writeChar(character: string)
}