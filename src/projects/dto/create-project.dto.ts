import { Transform } from 'class-transformer';
import { IsEnum, IsString, Length, MaxLength, ValidateIf } from 'class-validator';
import { CreateProjectInput, ProjectStatus } from '../project';

export class CreateProjectDto implements CreateProjectInput {
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString()
  @Length(3, 100)
  name!: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsEnum(ProjectStatus)
  status!: ProjectStatus;
}
