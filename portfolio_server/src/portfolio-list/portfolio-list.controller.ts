import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PortfolioListService } from './portfolio-list.service';
import { CreatePortfolioListDto } from './dto/create-portfolio-list.dto';

@Controller('portfolioList')
export class PortfolioListController {
  constructor(private readonly portfolioListService: PortfolioListService) {}

  @Post()
  create(@Body() createPortfolioListDto: CreatePortfolioListDto) {
    return this.portfolioListService.create(createPortfolioListDto);
  }

  @Get()
  findAll() {
    return this.portfolioListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portfolioListService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portfolioListService.remove(+id);
  }
}
