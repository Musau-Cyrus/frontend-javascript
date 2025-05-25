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