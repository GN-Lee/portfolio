import { PartialType } from '@nestjs/mapped-types';
import { CreateResponseCommentDto } from './create-response-comment.dto';

export class UpdateResponseCommentDto extends PartialType(CreateResponseCommentDto) {}
