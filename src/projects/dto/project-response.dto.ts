import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { Project, ProjectStatus } from '../project';

@Exclude()
export class ProjectResponseDto {
  @Expose()
  id!: number;

  @Expose()
  name!: string;

  @Expose()
  description!: string;

  @Expose()
  status!: ProjectStatus;

  @Expose()
  createdAt!: string;

  static from(project: Project): ProjectResponseDto {
    return plainToInstance(ProjectResponseDto, project, { excludeExtraneousValues: true });
  }
}
