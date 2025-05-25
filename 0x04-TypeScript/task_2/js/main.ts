interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [anotherAttribute:string]: any;
}

interface Director extends Teacher {
    numberOfAttributes: number;
}

function printTeacher(firstName: string, lastName: string): string{
    return `${firstName.charAt(0)}. ${lastName}`

}