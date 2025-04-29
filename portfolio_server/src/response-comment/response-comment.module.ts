import { Module } from '@nestjs/common';
import { ResponseCommentService } from './response-comment.service';
import { ResponseCommentController } from './response-comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseComment } from './entities/response-comment.entity';
import { Visitor } from 'src/visitor/entities/visitor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseComment, Visitor])],
  controllers: [ResponseCommentController],
  providers: [ResponseCommentService],
})
export class ResponseCommentModule {}
