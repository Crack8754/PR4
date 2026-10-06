import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectResponseDto } from './dto/project-response.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() dto: CreateProjectDto): Promise<ProjectResponseDto> {
    return ProjectResponseDto.from(await this.projectsService.create(dto));
  }

  @Get()
  async findAll(): Promise<ProjectResponseDto[]> {
    return (await this.projectsService.findAll()).map(ProjectResponseDto.from);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ProjectResponseDto> {
    return ProjectResponseDto.from(await this.projectsService.findOne(id));
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProjectDto): Promise<ProjectResponseDto> {
    return ProjectResponseDto.from(await this.projectsService.update(id, dto));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.projectsService.remove(id);
  }
}
