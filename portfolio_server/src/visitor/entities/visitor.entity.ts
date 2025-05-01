import { ResponseComment } from 'src/response-comment/entities/response-comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('visitor')
export class Visitor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, name: '이름' })
  name: string;

  @Column({ type: 'text', name: '댓글' })
  comment: string;

  @CreateDateColumn({ type: 'timestamp', name: '등록일' })
  createdAt: Date;

  @Column({ type: 'int', name: '좋아요', default: 0 })
  likes: number;

  @OneToMany(
    () => ResponseComment,
    (responseComment) => responseComment.visitor,
  )
  replies: ResponseComment[];
}
