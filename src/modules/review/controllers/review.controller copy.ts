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

  // @Post()
  // @ApiResponse({
  //   status: 201,
  //   description: 'The review has been successfully created.',
  //   type: Review,
  // })
  // @ApiResponse({
  //   status: 403,
  //   description: 'Forbidden',
  // })
  // @ApiBody({ type: CreateDto })
  // saveAction(@Body() createDto: CreateDto): Promise<Review> {
  //   const review = new Review();
  //   review.name = createDto.name;
  //   review.email = createDto.email;
  //   review.message = createDto.message;
  //   console.log(review);
  //   return this.reviewService.create(review);
  // }
}
