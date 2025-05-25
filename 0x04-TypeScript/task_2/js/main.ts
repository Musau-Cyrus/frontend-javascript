interface DirectorInterface{

    workFromHome(): string ;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface{

    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return 'working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to Director tasks';
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Teacher | Director{
    if(typeof salary === "number" && salary < 500){
        return new Teacher();
    }
    return new Director();
}

//An Example for task 5
console.log(createEmployee(200));// output - Teacher
console.log(createEmployee(1000));//output - Director
console.log(createEmployee('$500'));//output - Director

    //Task 6 - Creating functions specific to employees
function isDirector(employee: Teacher | Director): employee is Director{
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher ):void {
    if(isDirector(employee)){
        console.log(employee.workDirectorTasks());
    }else{
        console.log(employee.workTeacherTasks());
    }

}

    //Task 7 String literals
type Subjects = "Math" | "History";

function teacherClass(todayClass: Subjects): string{
    if(todayClass === "Math"){
        return "Teaching Math";
    }else{
        return "Teaching History";
    }
}
