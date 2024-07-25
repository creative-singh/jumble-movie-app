import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

  getHello(): string {
    return 'Hello from Author: Bhavleen Singh';
  }

  getAPIHealth(): string {
    return "Health Check API is running!";
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return createdMovie.save();
  }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }
}
