import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorModule } from './visitor/visitor.module';
import { PortfolioListModule } from './portfolio-list/portfolio-list.module';
import { ResponseCommentModule } from './response-comment/response-comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'portfolio',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      // synchronize: true,
    }),
    VisitorModule,
    PortfolioListModule,
    ResponseCommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
