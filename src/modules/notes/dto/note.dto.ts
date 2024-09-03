import {IsMongoId, IsOptional, MaxLength, MinLength } from "class-validator";

export class addNoteDto {
    @MaxLength(1000)
    @MinLength(2)
    title:string;
    @MaxLength(2000)
    @MinLength(2)
    description:string;
    @IsMongoId()
    @IsOptional()
    user:string;
}

export class ParamDto {
    @IsMongoId()
    id:string;
}

export class updateNoteDto {
    @MaxLength(1000)
    @MinLength(2)
    @IsOptional()
    title:string;
    @MaxLength(2000)
    @MinLength(2)
    @IsOptional()
    description:string;
    @IsMongoId()
    @IsOptional()
    user:string;
}