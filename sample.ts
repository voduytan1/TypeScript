interface IPerson {
    name: string;
    age: number;
    getDetails(): string;
}

abstract class Employee implements IPerson {
    constructor(
        public name: string,
        public age: number,
        public salary: number
    ) { }

    abstract work(): string;

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Salary: $${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name: string, age: number, salary: number, public programmingLanguage: string) {
        super(name, age, salary);
    }

    work(): string {
        return `${this.name} is coding in ${this.programmingLanguage}.`;
    }
}

class Manager extends Employee {
    constructor(name: string, age: number, salary: number, public teamSize: number) {
        super(name, age, salary);
    }

    work(): string {
        return `${this.name} is managing a team of ${this.teamSize} employees.`;
    }
}

class Company {
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    showEmployees(): void {
        console.log(" Employees List:");
        this.employees.forEach((emp) => {
            console.log(emp.getDetails());
            console.log(emp.work());
        });
    }

    static calculateTotalSalary(employees: Employee[]): number {
        return employees.reduce((sum, emp) => sum + emp.salary, 0);
    }
}

const myCompany = new Company();

const dev1 = new Developer("Alice", 25, 60000, "TypeScript");
const dev2 = new Developer("Bob", 28, 70000, "Python");
const manager = new Manager("Charlie", 35, 90000, 5);

myCompany.addEmployee(dev1);
myCompany.addEmployee(dev2);
myCompany.addEmployee(manager);

myCompany.showEmployees();

console.log("Total Salary:", Company.calculateTotalSalary([dev1, dev2, manager]));
