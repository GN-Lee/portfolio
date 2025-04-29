import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResponseCommentDto } from './dto/create-response-comment.dto';
import { Repository } from 'typeorm';
import { ResponseComment } from './entities/response-comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Visitor } from 'src/visitor/entities/visitor.entity';

@Injectable()
export class ResponseCommentService {
  constructor(
    @InjectRepository(ResponseComment)
    private responseCommentRepository: Repository<ResponseComment>,
    @InjectRepository(Visitor)
    private visitorRepository: Repository<Visitor>,
  ) {}

  async create(createResponseCommentDto: CreateResponseCommentDto) {
    const findVisitor = await this.visitorRepository.findOne({
      where: { id: createResponseCommentDto.visitorId },
    });
    if (!findVisitor) {
      throw new NotFoundException('방문자를 찾을 수 없습니다.');
    }
    const responseComment = this.responseCommentRepository.create({
      ...createResponseCommentDto,
      visitor: findVisitor,
    });
    await this.responseCommentRepository.save(responseComment);
    return { success: true, code: 200, message: '답글 등록 성공' };
  }

  async findAll() {
    const allResponseComments = await this.responseCommentRepository.find({
      relations: ['visitor'],
    });
    return {
      success: true,
      code: 200,
      message: '답글 조회 성공',
      data: allResponseComments,
    };
  }

  async findOne(id: number) {
    const findResponseComment = await this.responseCommentRepository.findOne({
      where: { id },
      relations: ['visitor'],
    });
    if (!findResponseComment) {
      throw new NotFoundException('답글을 찾을 수 없습니다.');
    }
    return {
      success: true,
      code: 200,
      message: '답글 조회 성공',
      data: findResponseComment,
    };
  }

  async remove(id: number) {
    const findResponseComment = await this.responseCommentRepository.findOne({
      where: { id },
    });
    if (!findResponseComment) {
      throw new NotFoundException('답글을 찾을 수 없습니다.');
    }
    await this.responseCommentRepository.delete(id);
    return { success: true, code: 200, message: '답글 삭제 성공' };
  }
}
