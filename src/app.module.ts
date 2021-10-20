import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewModule } from './modules/review/review.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
