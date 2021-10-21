import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
// import { Repository } from 'typeorm';
import { Review } from '../entities/review.entity';

@Injectable()
export class ReviewService extends TypeOrmCrudService<Review> {
  constructor(@InjectRepository(Review) reviewsRepository) {
    super(reviewsRepository);
  }
}
