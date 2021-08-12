
export class Age {
    getAge(dateOfBirth: Date, targetDate: Date): number {

        if (targetDate.getMonth() < dateOfBirth.getMonth()) {
            return (targetDate.getFullYear() - dateOfBirth.getFullYear()) - 1;
        }

        if (targetDate.getMonth() === dateOfBirth.getMonth()) {

            if (targetDate.getDate() < dateOfBirth.getDate()) {
                return (targetDate.getFullYear() - dateOfBirth.getFullYear()) - 1;
            }

        }

        return targetDate.getFullYear() - dateOfBirth.getFullYear();
    }

}
