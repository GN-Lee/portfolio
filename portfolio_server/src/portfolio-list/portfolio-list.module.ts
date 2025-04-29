import { Module } from '@nestjs/common';
import { PortfolioListService } from './portfolio-list.service';
import { PortfolioListController } from './portfolio-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioList } from './entities/portfolio-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PortfolioList])],
  controllers: [PortfolioListController],
  providers: [PortfolioListService],
})
export class PortfolioListModule {}
