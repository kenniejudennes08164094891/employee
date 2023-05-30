import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CreateEmployeeDto} from "./dto/create-employee.dto";

@Module({
  imports: [TypeOrmModule.forFeature([CreateEmployeeDto])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
