import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PortfolioList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column()
  skills: string;
}
