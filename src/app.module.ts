import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiTokenCheckMiddleware } from './common/middleware/api-token-check.middleware';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { CategoryModule } from './modules/category/category.module';
import { CreatorModule } from './modules/creator/creator.module';
import { MediaModule } from './modules/media/media.module';
import { UserModule } from './modules/user/user.module';
import { RatingModule } from './modules/rating/rating.module';
import { ReviewModule } from './modules/review/review.module';
import { TransactionModule } from './modules/transaction/transaction.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    EventEmitterModule.forRoot(),
    CategoryModule,
    CreatorModule,
    MediaModule,
    UserModule,
    RatingModule,
    ReviewModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiTokenCheckMiddleware)
      .forRoutes({ path: '/', method: RequestMethod.ALL });
  }
}
