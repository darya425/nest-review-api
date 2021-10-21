import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Review } from '../entities/review.entity';
import { ReviewService } from '../services/review.service';
import { CreateDto } from './dto';

@Crud({
  model: {
    type: CreateDto,
  },
})
@ApiTags('review')
@Controller('api/review')
export class ReviewController implements CrudController<Review> {
  constructor(public service: ReviewService) {}
}
