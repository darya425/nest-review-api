import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewModule } from './modules/review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

// const ormConfig = {
//   type: 'mysql',
//   host: 'eu-cdbr-west-01.cleardb.com',
//   port: 3306,
//   username: 'b3dc7a593ca714',
//   password: '125af6f1',
//   database: 'heroku_2edee81e18ba363',
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };

console.log(process.env.DB_USER_NAME);

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: process.env.DB_HOST,
//       port: 3306,
//       username: process.env.DB_USER_NAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       entities: ['dist/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//     ReviewModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql' as const,
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USER_NAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ReviewModule,
  ],
})
export class AppModule {}
