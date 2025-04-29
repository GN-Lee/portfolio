import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorController } from './visitor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visitor } from './entities/visitor.entity';
import { ResponseComment } from 'src/response-comment/entities/response-comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Visitor, ResponseComment])],
  controllers: [VisitorController],
  providers: [VisitorService],
})
export class VisitorModule {}
