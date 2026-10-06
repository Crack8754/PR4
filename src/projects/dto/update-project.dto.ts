import { Transform } from 'class-transformer';
import { IsEnum, IsString, Length, MaxLength, ValidateIf } from 'class-validator';
import { ProjectStatus, UpdateProjectInput } from '../project';

export class UpdateProjectDto implements UpdateProjectInput {
  @ValidateIf((_object, value) => value !== undefined)
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString()
  @Length(3, 100)
  name?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @MaxLength(500)
  description?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;
}
