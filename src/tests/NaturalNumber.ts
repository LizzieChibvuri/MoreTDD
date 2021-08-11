import { Result } from "./Result";

export class NaturalNumber {
    fizzBuzz(n: number) {
        if (n % 15 === 0) {
            return Result.fizzBuzz;
        }

        if (n % 3 === 0) {
            return Result.fizz;
        }

        if (n % 5 === 0) {
            return Result.buzz;
        }

        return n;
    }
}
