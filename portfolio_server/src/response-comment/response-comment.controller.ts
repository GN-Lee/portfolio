import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ResponseCommentService } from './response-comment.service';
import { CreateResponseCommentDto } from './dto/create-response-comment.dto';

@Controller('response-comment')
export class ResponseCommentController {
  constructor(
    private readonly responseCommentService: ResponseCommentService,
  ) {}

  @Post()
  create(@Body() createResponseCommentDto: CreateResponseCommentDto) {
    return this.responseCommentService.create(createResponseCommentDto);
  }

  @Get()
  findAll() {
    return this.responseCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responseCommentService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responseCommentService.remove(+id);
  }
}
