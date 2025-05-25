namespace Subjects{
    export interface Teacher{
        experienceTechingJava?: number;
    }
    class java extends Subject{
        getRequirements(): string{
            return 'Here is the list of requirements for java'
        }
        getAvailableTeacher(): string{
            if(this.teacher && this.teacher.experienceTechingJava > 0){
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available Teacher';
        }
    }
}