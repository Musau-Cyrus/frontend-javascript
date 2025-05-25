interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [anotherAttribute:string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
