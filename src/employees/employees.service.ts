import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {Deductions, Earnings, Employee, EmployeeInterface} from "./entities/employee.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@Injectable()
export class EmployeesService {

  private readonly employee: CreateEmployeeDto[] | any = [];
  private logger : Logger;
  private readonly employeeInterface: EmployeeInterface= {
   employeeId: '',
   employeeName: '',
   employeeLevel: '',
   earnings: {basic: '', housing: '', tax: '', pension: '', transport: ''},
    deductions: {basic: '', housing: '', tax: '', pension: '', transport: ''}
  }
  constructor(
      @InjectRepository(CreateEmployeeDto)
      private employeeRepository: Repository<CreateEmployeeDto>,
  ) {
    this.logger = new Logger(EmployeesService.name);
  }
  create(createEmployeeDto: CreateEmployeeDto): any {
    const dateOFCreation = "Created on"+ " " + new Date().toString();
    const employeeObj = {...createEmployeeDto, dateOFCreation};
    this.employee.push(employeeObj);
    this.logger.log("employee>>", this.employee);
    return employeeObj;
  }

  findAll() : Employee[] | any{
    return [...this.employee];
  }

  // findAll(): Promise<CreateEmployeeDto[]>{
  //   return this.employeeRepository.find();
  // }

  findOne(id: number) {
    const employeeProfileFound = this.findEmployeeProfile(id)[0];
    return {...employeeProfileFound};
  }

  findEmployeeProfile(id: number):[CreateEmployeeDto, number] {
    let employeeIndex = this.employee.findIndex((elem: any) => elem.id === id);
    let employeeProfile = this.employee[employeeIndex];
    if(!employeeIndex){
      throw new NotFoundException('could not find employee');
    }
    let employeeValue: [] | any = [employeeProfile,employeeIndex]
    return employeeValue;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    let index =this.findEmployeeProfile(id)[1];
    this.employee.splice(index,1);
    return `user with id ${index} has been deleted!`;
  }
}
