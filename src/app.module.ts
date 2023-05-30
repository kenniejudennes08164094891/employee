import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CreateEmployeeDto} from "./employees/dto/create-employee.dto";
import { DataSource } from 'typeorm';

@Module({
  imports: [
      EmployeesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'J.j@2015',
      database: 'test',
      entities: [CreateEmployeeDto],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
      private dataSource: DataSource
  ){}
}

//npm install --save typeorm mysql2