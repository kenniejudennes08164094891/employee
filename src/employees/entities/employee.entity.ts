export class Employee {
    constructor(
        public employeeId: string,
        public employeeName: string,
        public employeeLevel: string,
        public earnings: Earnings,
        public deductions: Deductions
    ) {}
}

export interface Earnings{
    basic: string,
    transport: string,
    housing: string,
    pension: string,
    tax: string
}

export interface Deductions{
    basic: string,
    transport: string,
    housing: string,
    pension: string,
    tax: string
}

export interface EmployeeInterface{
     employeeId: string,
     employeeName: string,
    employeeLevel: string,
     earnings: Earnings,
     deductions: Deductions
}