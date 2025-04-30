import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { Repository } from 'typeorm';
import { Visitor } from './entities/visitor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseComment } from 'src/response-comment/entities/response-comment.entity';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(Visitor)
    private visitorRepository: Repository<Visitor>,
    @InjectRepository(ResponseComment)
    private responseCommentRepository: Repository<ResponseComment>,
  ) {}

  async create(createVisitorDto: CreateVisitorDto) {
    const visitor = this.visitorRepository.create(createVisitorDto);
    await this.visitorRepository.save(visitor);
    return { success: true, code: 200, message: '방문자 등록 성공' };
  }

  async findAll() {
    const allVisitors = await this.visitorRepository.find({
      relations: ['replies'],
    });
    return {
      success: true,
      code: 200,
      message: '방문자 조회 성공',
      data: allVisitors,
    };
  }

  async findOne(id: number) {
    const findVisitor = await this.visitorRepository.findOne({
      where: { id },
      relations: ['replies'],
    });
    if (!findVisitor) {
      throw new NotFoundException('방문자를 찾을 수 없습니다.');
    }
    return {
      success: true,
      code: 200,
      message: '방문자 조회 성공',
      data: findVisitor,
    };
  }

  async remove(id: number) {
    const findVisitor = await this.visitorRepository.findOne({
      where: { id },
      relations: ['replies'],
    });
    if (!findVisitor) {
      throw new NotFoundException('방문자를 찾을 수 없습니다.');
    }

    if (findVisitor.replies && findVisitor.replies.length > 0) {
      await Promise.all(
        findVisitor.replies.map((reply) =>
          this.responseCommentRepository.delete(reply.id),
        ),
      );
    }

    await this.visitorRepository.delete(id);
    return { success: true, code: 200, message: '방문자 삭제 성공' };
  }

  // 대댓글 추가하기
  async addReply(id: number, reply: { comment: string; nickname: string }) {
    const visitor = await this.visitorRepository.findOne({ where: { id } });
    if (!visitor) {
      throw new Error('Visitor not found');
    }

    const responseComment = this.responseCommentRepository.create({
      ...reply,
      visitor,
    });

    return this.responseCommentRepository.save(responseComment);
  }
}
