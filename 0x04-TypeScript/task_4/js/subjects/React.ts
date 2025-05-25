namespace Subjects{
    export class Teacher{
        experienceTeachingReact: number;
    }
    export class React extends Subject{
          getRequirements(): string{
            return 'Here is a requirements for React';
        }

        getAvailableTeacher(): string{
            if (this.teacher && this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}