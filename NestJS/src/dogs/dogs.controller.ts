import { Body, Controller, ForbiddenException, Get, Post, UseFilters } from '@nestjs/common';
import { CreateCrudDto } from 'src/crud/dto/create-crud.dto';
import { HttpExceptionFilter } from 'src/httpexception/httpexception.filter';

@Controller('dogs')
export class DogsController {
  
  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCrudDto): Promise<void> {
    throw new ForbiddenException();
  }
  
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  

}
