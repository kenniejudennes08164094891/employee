import {
    ArrayMinSize,
    IsArray,
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsOptional, isString,
    IsString
} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

let isObject = IsObject;

@Entity()
export class CreateEmployeeDto {

    @IsString() @IsNotEmpty({message: "employeeId is a required field"}) @PrimaryGeneratedColumn()
    public employeeId: string;

    @IsString() @IsEmail() @IsNotEmpty() @Column()
    public employeeName: string;

    @IsString() @IsNotEmpty() @Column()
    public employeeLevel: string;


    @IsString() @IsNotEmpty() @Column()
    public earnings: string;

    @IsString() @IsNotEmpty() @Column()
    public deductions: string;
}


//npm i class-validator class-transformer

//npm i @nestjs/typeorm
