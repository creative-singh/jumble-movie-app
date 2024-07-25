import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { Movie } from './schemas/movie.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  getAPIHealth(): string {
    return this.appService.getAPIHealth();
  }

  @Post('/movie')
  createMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.appService.createMovie(createMovieDto);
  }

  @Get('/movies')
  findAll(): Promise<Movie[]> {
    return this.appService.findAll();
  }
}
