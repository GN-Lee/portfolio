import { Visitor } from 'src/visitor/entities/visitor.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('responseComment')
export class ResponseComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  comment: string;

  @CreateDateColumn({ type: 'timestamp', name: '등록일' })
  createdAt: Date;

  @ManyToOne(() => Visitor, (visitor) => visitor.replies)
  visitor: Visitor;
}
