import { Body, Controller, Post } from '@nestjs/common';
import { Review } from '../entities/review.entity';
import { ReviewService } from '../services/review.service';
import { CreateDto } from './dto';

@Controller('api/review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  saveAction(@Body() createDto: CreateDto): Promise<Review> {
    const review = new Review();
    review.name = createDto.name;
    review.email = createDto.email;
    review.message = createDto.message;
    console.log(review);
    return this.reviewService.create(review);
  }
}
